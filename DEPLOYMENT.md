# GitHub Pages Deployment Guide

## Quick Setup

1. **Enable GitHub Pages:**
   - Go to your repository → **Settings** → **Pages**
   - Under "Source", select **GitHub Actions** (not "Deploy from a branch")
   - Save the settings

2. **Push your code:**
   ```bash
   git add .
   git commit -m "Configure for GitHub Pages"
   git push origin main
   ```

3. **Wait for deployment:**
   - Go to the **Actions** tab in your repository
   - You'll see a workflow called "Deploy to GitHub Pages"
   - Wait for it to complete (usually 2-3 minutes)

4. **Access your site:**
   - Your site will be available at: `https://yourusername.github.io/sonlisinha/`
   - The URL format is: `https://[username].github.io/[repository-name]/`

## Important Notes

### Repository Name
- If your repository name is different from `sonalisinha`, update the `repositoryName` variable in `next.config.js`
- Or set the `GITHUB_REPOSITORY` environment variable in the GitHub Actions workflow

### Custom Domain (Optional)
If you want to use a custom domain:
1. Add a `CNAME` file in the `public/` directory with your domain name
2. Configure DNS settings as per GitHub Pages documentation

### Troubleshooting

**Build fails:**
- Check the Actions tab for error messages
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility

**Site shows 404:**
- Make sure GitHub Pages is set to use **GitHub Actions** (not a branch)
- Check that the workflow completed successfully
- Wait a few minutes for DNS propagation

**Assets not loading:**
- Verify `basePath` and `assetPrefix` in `next.config.js` match your repository name
- Clear browser cache and try again

## Manual Deployment (Alternative)

If you prefer to deploy manually:

```bash
# Build the static site
npm run build

# The output will be in the /out directory
# You can then push the /out directory to the gh-pages branch
```

However, the automated GitHub Actions workflow is recommended.

