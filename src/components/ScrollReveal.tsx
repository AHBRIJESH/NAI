import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  x?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  scale?: number;
  className?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  delay = 0,
  y = 30,
  x = 0,
  direction = 'up',
  duration = 0.65,
  scale,
  className = '',
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  // Calculate initial coordinates based on direction
  let initialY = 0;
  let initialX = 0;
  if (direction === 'up') initialY = y || 30;
  else if (direction === 'down') initialY = -(y || 30);
  else if (direction === 'left') initialX = x || 30;
  else if (direction === 'right') initialX = -(x || 30);

  const initialProps: any = {
    opacity: 0,
    y: initialY,
    x: initialX,
  };
  if (scale !== undefined) {
    initialProps.scale = scale;
  }

  const animateProps: any = {
    opacity: 1,
    y: 0,
    x: 0,
  };
  if (scale !== undefined) {
    animateProps.scale = 1;
  }

  return (
    <motion.div
      initial={initialProps}
      whileInView={animateProps}
      viewport={{ once: true, amount: 0.1, margin: '0px 0px -30px 0px' }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1] as const, // Smooth organic deceleration curve
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface StaggerContainerProps {
  children: React.ReactNode;
  stagger?: number;
  delay?: number;
  className?: string;
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  stagger = 0.1,
  delay = 0,
  className = '',
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1, margin: '0px 0px -30px 0px' }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
            delayChildren: delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface StaggerItemProps {
  children: React.ReactNode;
  y?: number;
  x?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  className?: string;
}

export const StaggerItem: React.FC<StaggerItemProps> = ({
  children,
  y = 26,
  x = 0,
  direction = 'up',
  duration = 0.6,
  className = '',
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  let initialY = 0;
  let initialX = 0;
  if (direction === 'up') initialY = y || 26;
  else if (direction === 'down') initialY = -(y || 26);
  else if (direction === 'left') initialX = x || 26;
  else if (direction === 'right') initialX = -(x || 26);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: initialY, x: initialX },
        visible: {
          opacity: 1,
          y: 0,
          x: 0,
          transition: {
            duration,
            ease: [0.16, 1, 0.3, 1] as const,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;

