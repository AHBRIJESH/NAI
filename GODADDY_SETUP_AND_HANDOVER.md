# GoDaddy Automated Deployment & Repository Handover Guide

This repository is equipped with an automated **GitHub Actions CI/CD Pipeline** (`.github/workflows/deploy.yml`). 
Whenever anyone pushes code to the `main` branch, GitHub automatically installs dependencies, builds the production bundle (`npm run build`), and securely deploys the latest files to the GoDaddy hosting server in **real-time** (within ~60 seconds).

---

## Part 1: GoDaddy FTP Credentials Setup (One-Time Setup)

To allow GitHub Actions to securely upload files to GoDaddy, add 3 secret variables to the GitHub repository:

### Step 1: Find or Create FTP Credentials in GoDaddy cPanel
1. Log in to your **GoDaddy** account and go to **Web Hosting / cPanel**.
2. Under the **Files** section, click **FTP Accounts**.
3. Create a new FTP account (or check an existing one):
   - **Login / Username**: (e.g. `deployer@yourdomain.com` or your primary cPanel username)
   - **Password**: Create a strong password.
   - **Directory**: Set to `public_html` (or leave as root `/` if using your primary cPanel login).
4. Note your **FTP Server / Hostname**:
   - Usually `ftp.yourdomain.com` or the **Shared IP Address** shown on your GoDaddy cPanel dashboard right-hand sidebar.

---

### Step 2: Add Credentials to GitHub Secrets
1. In this GitHub repository, go to **Settings** (top navigation tab).
2. On the left sidebar, click **Secrets and variables** → **Actions**.
3. Under **Repository secrets**, click **New repository secret** and add the following 3 secrets:

| Secret Name | Value | Example |
| :--- | :--- | :--- |
| `FTP_SERVER` | GoDaddy FTP Hostname or IP address | `ftp.yourdomain.com` or `198.51.100.45` |
| `FTP_USERNAME` | GoDaddy FTP Username | `deployer@yourdomain.com` |
| `FTP_PASSWORD` | GoDaddy FTP Password | `YourSecurePassword123` |

*(Optional)* If your site is inside a subdirectory or addon domain on GoDaddy, you can also add:
- `FTP_SERVER_DIR`: `public_html/` (defaults to `public_html/` if omitted).

---

## Part 2: Transferring Repository Ownership to Client

### How to Transfer:
1. In this GitHub repository, click **Settings**.
2. Scroll all the way down to the **Danger Zone**.
3. Click **Transfer ownership**.
4. Enter the client's GitHub username or GitHub Organization name.
5. Confirm by typing the repository name.

### How You Still Push Changes in Real-Time:
Once the client accepts the transfer:
1. The client goes to **Settings** → **Collaborators** (or **Manage Access**).
2. They click **Add people** and enter your GitHub username (e.g. `J1309`).
3. They give your account **Admin** or **Write** permissions.
4. **Result**: You can continue writing code and running `git push origin main` on your local machine. Every time you push, GitHub Actions will trigger automatically, build the code, and publish the new changes to the live GoDaddy site immediately!

---

## Part 3: SPA Routing Support (`.htaccess`)
Because this application is a modern Single Page Application (React + Vite), an Apache `.htaccess` file has been added to `public/.htaccess`. It is automatically included in every deployment to ensure that page refreshes on subpages (e.g. `/about`, `/services`, `/industries`) do not trigger a 404 error on GoDaddy's Apache web servers.
