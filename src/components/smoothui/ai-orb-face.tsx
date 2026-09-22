'use client';

import { cn } from '@/lib/utils';
import Orb from './orb';
import {
  type MotionValue,
  motion,
  useAnimationControls,
  useReducedMotion,
  useSpring,
} from 'motion/react';
import { useCallback, useEffect, useRef, useState } from 'react';
import {
  type AIAmplitude,
  type AIState,
  getAIStateMotion,
  useAmplitudeValue,
} from './ai-core';

const VIEWBOX = 100;
const CENTER = VIEWBOX / 2;
const EYE_OFFSET = 16;
const EYE_Y = 44;
const EYE_WIDTH = 11;
const EYE_HEIGHT = 26;
const EYE_RADIUS = 5.5;
/** How far the pupils can travel from centre, in viewBox units. */
const GAZE_RANGE = 5.5;
/** Cursor distance, in px, at which the gaze reaches full deflection. */
const GAZE_FALLOFF = 220;
const EASE_OUT = [0.23, 1, 0.32, 1] as const;
const EASE_IN = [0.4, 0, 1, 1] as const;
/** A ~1.25-turn swirl; spun in place it reads as dizzy. */
const SPIRAL = 'M0 0C-0.6 -4 5 -5 6 -0.6C7 4.5 1 8 -4 6C-9 4.5 -9.5 -2 -6 -6';
const BLINK_MIN_MS = 3200;
const BLINK_EXTRA_MS = 2600;
const DOUBLE_BLINK_CHANCE = 0.25;
/** Thinking saccades: the eyes look away and up, the way people search. */
const SACCADE_MIN_MS = 700;
const SACCADE_EXTRA_MS = 700;
const SACCADE_TARGETS = [
  { x: -1, y: -1 },
  { x: 1, y: -1 },
  { x: -0.6, y: -0.4 },
  { x: 0.8, y: -0.9 },
] as const;

/** Orb draws its sphere at this fraction of its box; the rest is glow room. */
const ORB_SPHERE_FRACTION = 0.86;

/** Amplitude buckets. Five steps is enough to see the interior stir. */
const ENERGY_STEPS = 4;

const useEnergyBucket = (value: MotionValue<number>) => {
  const [bucket, setBucket] = useState(0);
  useEffect(() => {
    const read = (level: number) =>
      setBucket(Math.round(level * ENERGY_STEPS) / ENERGY_STEPS);
    read(value.get());
    return value.on('change', read);
  }, [value]);
  return bucket;
};

export interface EyeShape {
  /** Vertical offset in viewBox units. Negative sits the eye higher. */
  dy?: number;
  /** Multiplier on the resting height. `0` is a shut eye. */
  h: number;
  /** Degrees. Positive tilts the inner corner down, which reads as a scowl. */
  rotate?: number;
  /** Multiplier on the resting width. */
  w: number;
}

export interface Expression {
  left: EyeShape;
  right: EyeShape;
}

const EYE = (h: number, w = 1, rotate = 0, dy = 0): EyeShape => ({
  dy,
  h,
  rotate,
  w,
});

/** Mirrored: the same tilt on both eyes, pointing at each other. */
const symmetric = (h: number, w = 1, rotate = 0, dy = 0): Expression => ({
  left: EYE(h, w, rotate, dy),
  right: EYE(h, w, -rotate, dy),
});

export const EXPRESSIONS = {
  /** Wide. Paying attention. */
  alert: symmetric(1.2, 1.05, 0, -1),
  /** Eyes shut, curved down. Reads as content rather than asleep. */
  content: symmetric(0.16, 1.25, 0, 2),
  /** Both eyes tilted inward. */
  cross: symmetric(0.85, 1, 18),
  /** Flat dashes. Unimpressed. */
  deadpan: symmetric(0.14, 1.35),
  /** One eye narrowed. The face is not convinced. */
  doubtful: { left: EYE(1, 1), right: EYE(0.45, 1.1, -14) },
  /** Narrowed and level. Working on it. */
  focused: symmetric(0.55, 1.05),
  /** Resting. */
  neutral: symmetric(1),
  /** Small and high. Caught off guard. */
  surprised: symmetric(0.5, 0.55, 0, -3),
  /** One shut, one open. */
  wink: { left: EYE(1, 1), right: EYE(0.12, 1.2, 0, 2) },
} satisfies Record<string, Expression>;

export type ExpressionName = keyof typeof EXPRESSIONS;

const STATE_EXPRESSION: Record<string, ExpressionName> = {
  done: 'content',
  error: 'cross',
  idle: 'neutral',
  listening: 'alert',
  streaming: 'focused',
  thinking: 'doubtful',
};

export type AIOrbFaceProps = {
  /** Accessible label. Omit to keep the character decorative. */
  'aria-label'?: string;
  /** Live audio level, 0–1. Widens the eyes and lifts the body while speaking. */
  amplitude?: AIAmplitude;
  className?: string;
  colors?: { body?: string; bodyEdge?: string; feature?: string };
  /**
   * Follow the pointer with its gaze.
   */
  gaze?: boolean;
  /** Rendered size. Numbers are pixels. */
  size?: number | string;
  state?: AIState;
  /**
   * Set the face directly, ignoring `state`. Either a name from
   * `EXPRESSIONS` or a pair of eye shapes of your own.
   */
  expression?: ExpressionName | Expression;
};

/** High-contrast brand palette: electric sapphire blue and crisp highlights */
const DEFAULT_COLORS = {
  body: '#1D4ED8',
  bodyEdge: '#93C5FD',
  feature: '#0A192F',
};

export const AIOrbFace = ({
  'aria-label': ariaLabel,
  amplitude,
  className,
  colors,
  gaze = true,
  expression,
  size = 128,
  state = 'idle',
}: AIOrbFaceProps) => {
  const shouldReduceMotion = useReducedMotion();
  const amplitudeValue = useAmplitudeValue(amplitude);
  const stateMotion = getAIStateMotion(state);
  const finalColors = { ...DEFAULT_COLORS, ...colors };

  const svgRef = useRef<SVGSVGElement | null>(null);
  const energy = useEnergyBucket(amplitudeValue);
  const leftLid = useAnimationControls();
  const rightLid = useAnimationControls();
  const bodyControls = useAnimationControls();

  const gazeX = useSpring(0, { damping: 26, stiffness: 220 });
  const gazeY = useSpring(0, { damping: 26, stiffness: 220 });

  const resolvedSize = typeof size === 'number' ? `${size}px` : size;

  const isHappy = state === 'done';
  const isThinking = state === 'thinking';
  const isListening = state === 'listening';
  const isBroken = state === 'error';
  const eyesOpen = !isBroken;

  const active: Expression = (() => {
    if (typeof expression === 'object') {
      return expression;
    }
    if (expression) {
      return EXPRESSIONS[expression];
    }
    return EXPRESSIONS[STATE_EXPRESSION[state] ?? 'neutral'];
  })();

  const mountedRef = useRef(false);
  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  // Snap shut, ease back open
  const blink = useCallback(
    async (double = false) => {
      const closeT = { duration: 0.07, ease: EASE_IN };
      const openT = { duration: 0.16, ease: EASE_OUT };
      if (!mountedRef.current) {
        return;
      }
      await Promise.all([
        leftLid.start({ scaleY: 0.08 }, closeT),
        rightLid.start({ scaleY: 0.08 }, closeT),
      ]);
      if (!mountedRef.current) {
        return;
      }
      await Promise.all([
        leftLid.start({ scaleY: 1 }, double ? closeT : openT),
        rightLid.start({ scaleY: 1 }, double ? closeT : openT),
      ]);
      if (double) {
        await blink(false);
      }
    },
    [leftLid, rightLid]
  );

  // Idle blinking cadence
  useEffect(() => {
    if (shouldReduceMotion || !eyesOpen) {
      return;
    }
    let timeout: ReturnType<typeof setTimeout>;
    let mounted = true;
    const schedule = () => {
      timeout = setTimeout(
        () => {
          if (mounted) {
            blink(Math.random() < DOUBLE_BLINK_CHANCE);
          }
          schedule();
        },
        BLINK_MIN_MS + Math.random() * BLINK_EXTRA_MS
      );
    };
    schedule();
    return () => {
      mounted = false;
      clearTimeout(timeout);
    };
  }, [blink, eyesOpen, shouldReduceMotion]);

  // Gaze tracking pointer
  useEffect(() => {
    if (!gaze || shouldReduceMotion || isThinking || !eyesOpen) {
      return;
    }
    const handle = (event: PointerEvent) => {
      const svg = svgRef.current;
      if (!svg) {
        return;
      }
      const rect = svg.getBoundingClientRect();
      const dx = event.clientX - (rect.left + rect.width / 2);
      const dy = event.clientY - (rect.top + rect.height / 2);
      const distance = Math.sqrt(dx * dx + dy * dy);
      const reach = Math.min(1, distance / GAZE_FALLOFF) * GAZE_RANGE;
      const angle = Math.atan2(dy, dx);
      gazeX.set(Math.cos(angle) * reach);
      gazeY.set(Math.sin(angle) * reach);
    };
    window.addEventListener('pointermove', handle);
    return () => window.removeEventListener('pointermove', handle);
  }, [gaze, gazeX, gazeY, isThinking, eyesOpen, shouldReduceMotion]);

  // Thinking saccades
  useEffect(() => {
    if (!isThinking || shouldReduceMotion) {
      return;
    }
    let timeout: ReturnType<typeof setTimeout>;
    let mounted = true;
    let index = 0;
    const schedule = () => {
      timeout = setTimeout(
        () => {
          if (!mounted) {
            return;
          }
          const target = SACCADE_TARGETS[index % SACCADE_TARGETS.length];
          index += 1;
          gazeX.set(target.x * GAZE_RANGE);
          gazeY.set(target.y * GAZE_RANGE);
          schedule();
        },
        SACCADE_MIN_MS + Math.random() * SACCADE_EXTRA_MS
      );
    };
    schedule();
    return () => {
      mounted = false;
      clearTimeout(timeout);
    };
  }, [gazeX, gazeY, isThinking, shouldReduceMotion]);

  // Error: dizzy wobble
  useEffect(() => {
    if (!isBroken) {
      return;
    }
    gazeX.set(0);
    gazeY.set(0);
    if (shouldReduceMotion) {
      return;
    }
    bodyControls.start(
      { rotate: [0, -11, 9, -7, 5, -3, 0], x: [0, -5, 4, -3, 2, -1, 0] },
      { duration: 1.05, ease: [0.45, 0, 0.55, 1] }
    );
  }, [bodyControls, gazeX, gazeY, isBroken, shouldReduceMotion]);

  // Done: happy squash-and-stretch hop
  useEffect(() => {
    if (!isHappy || shouldReduceMotion) {
      return;
    }
    bodyControls.start(
      {
        scaleX: [1, 1.08, 0.94, 1.04, 0.99, 1],
        scaleY: [1, 0.9, 1.08, 0.95, 1.02, 1],
        y: [0, 3, -9, 0, -3, 0],
      },
      { duration: 0.85, ease: EASE_OUT, times: [0, 0.12, 0.4, 0.62, 0.82, 1] }
    );
  }, [bodyControls, isHappy, shouldReduceMotion]);

  // Listening breathing
  useEffect(() => {
    if (shouldReduceMotion || !isListening) {
      return;
    }
    const unsubscribe = amplitudeValue.on('change', (level) => {
      bodyControls.set({ scale: 1 + level * 0.07, y: -level * 2 });
    });
    return unsubscribe;
  }, [amplitudeValue, bodyControls, isListening, shouldReduceMotion]);

  useEffect(() => {
    if (!(isListening || !mountedRef.current)) {
      bodyControls.set({ scale: 1, y: 0 });
    }
  }, [bodyControls, isListening]);

  const renderEye = (side: -1 | 1) => {
    const shape = side === -1 ? active.left : active.right;
    const controls = side === -1 ? leftLid : rightLid;

    const width = EYE_WIDTH * shape.w;
    const height = EYE_HEIGHT * shape.h;
    const x = CENTER + side * EYE_OFFSET - width / 2;
    const y = EYE_Y + (EYE_HEIGHT - height) / 2 + (shape.dy ?? 0);
    const cx = x + width / 2;
    const cy = y + height / 2;

    return (
      <motion.rect
        key={`eye-${side}`}
        animate={controls}
        fill={finalColors.feature}
        height={Math.max(height, 0.5)}
        initial={{ scaleY: 1 }}
        rx={Math.min(EYE_RADIUS * shape.w, Math.max(height, 0.5) / 2)}
        style={{
          rotate: shape.rotate ?? 0,
          transformOrigin: `${cx}px ${cy}px`,
          x: gazeX,
          y: gazeY,
        }}
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : { bounce: 0.1, duration: 0.25, type: 'spring' }
        }
        width={width}
        x={x}
        y={y}
      />
    );
  };

  const renderDizzyEye = (side: -1 | 1) => (
    <motion.path
      key={`dizzy-${side}`}
      animate={shouldReduceMotion ? undefined : { rotate: 360 * side }}
      d={SPIRAL}
      fill="none"
      stroke={state === 'error' ? '#DC2626' : finalColors.feature}
      strokeLinecap="round"
      strokeWidth={3}
      style={{
        scale: 1.5,
        x: CENTER + side * EYE_OFFSET,
        y: EYE_Y + EYE_HEIGHT / 2,
      }}
      transition={{
        duration: 2.4,
        ease: 'linear',
        repeat: Number.POSITIVE_INFINITY,
      }}
    />
  );

  const bodySpan = (96 / VIEWBOX / ORB_SPHERE_FRACTION) * 100;
  const bodyInset = (100 - bodySpan) / 2;

  // Adapt orb color slightly depending on error/done states for maximum emotion
  const orbColors =
    state === 'error'
      ? ['#DC2626', '#F87171', '#FEF2F2']
      : state === 'done'
      ? ['#059669', '#34D399', '#ECFDF5']
      : state === 'listening'
      ? ['#2563EB', '#60A5FA', '#DBEAFE']
      : [finalColors.body, finalColors.bodyEdge, '#FFFFFF'];

  return (
    <div
      className={cn('relative block select-none', className)}
      style={{
        filter: `saturate(${stateMotion.saturation})`,
        height: resolvedSize,
        width: resolvedSize,
      }}
    >
      <motion.div
        animate={bodyControls}
        className="absolute"
        style={{
          height: `${bodySpan}%`,
          left: `${bodyInset}%`,
          top: `${bodyInset}%`,
          width: `${bodySpan}%`,
        }}
      >
        <div
          aria-hidden="true"
          className="absolute rounded-full"
          style={{
            background: `radial-gradient(circle at 34% 30%, ${finalColors.bodyEdge}, ${finalColors.body} 72%)`,
            inset: `${(1 - ORB_SPHERE_FRACTION) * 50}%`,
          }}
        />
        <Orb
          className="size-full"
          colors={orbColors}
          flow={0.6 + energy * 0.36}
          glow={0}
          size="100%"
          turbulence={0.4 + energy * 0.32}
        />
      </motion.div>
      <motion.svg
        animate={bodyControls}
        aria-hidden={ariaLabel ? undefined : true}
        aria-label={ariaLabel}
        className="absolute inset-0 block size-full overflow-visible pointer-events-none"
        ref={svgRef}
        role={ariaLabel ? 'img' : undefined}
        viewBox={`0 0 ${VIEWBOX} ${VIEWBOX}`}
      >
        <title>{ariaLabel ?? 'AI assistant character'}</title>

        {isBroken ? null : renderEye(-1)}
        {isBroken ? null : renderEye(1)}
        {isBroken && renderDizzyEye(-1)}
        {isBroken && renderDizzyEye(1)}
      </motion.svg>
    </div>
  );
};

export default AIOrbFace;
