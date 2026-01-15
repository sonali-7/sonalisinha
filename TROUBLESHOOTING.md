# GitHub Pages Troubleshooting

## Issue: GitHub Pages shows README instead of website

This happens when GitHub Pages is configured to serve from a branch instead of GitHub Actions.

## Solution:

### Step 1: Configure GitHub Pages to use GitHub Actions

1. Go to your repository on GitHub: `https://github.com/sonali-7/sonalisinha`
2. Click **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under **"Source"**, you'll see options like:
   - Deploy from a branch
   - GitHub Actions
5. **Select "GitHub Actions"** (NOT "Deploy from a branch")
6. Save the settings

### Step 2: Trigger the workflow

After changing the source to GitHub Actions:

1. Go to the **Actions** tab in your repository
2. You should see a workflow called "Deploy to GitHub Pages"
3. If it hasn't run yet, click on it and click **"Run workflow"** → **"Run workflow"**
4. Wait for it to complete (2-3 minutes)

### Step 3: Verify deployment

1. Once the workflow completes, go back to **Settings** → **Pages**
2. You should see a message like "Your site is live at https://sonali-7.github.io/sonalisinha/"
3. Visit that URL - it should show your website, not the README

## If the workflow fails:

1. Check the **Actions** tab for error messages
2. Common issues:
   - Missing dependencies in package.json
   - Build errors
   - Permission issues

## Manual trigger:

If the workflow doesn't run automatically after pushing:
1. Go to **Actions** tab
2. Click **"Deploy to GitHub Pages"** workflow
3. Click **"Run workflow"** button (top right)
4. Select branch: **main**
5. Click **"Run workflow"**

