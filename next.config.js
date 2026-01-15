/** @type {import('next').NextConfig} */
// For GitHub Pages: if your repo is username.github.io, set basePath to ''
// Otherwise, set it to your repository name (e.g., '/sonalisinha')
const repositoryName = process.env.GITHUB_REPOSITORY_NAME || 'sonalisinha'
const basePath = repositoryName === 'username.github.io' ? '' : `/${repositoryName}`

const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    images: {
        unoptimized: true,
    },
    basePath: process.env.NODE_ENV === 'production' ? basePath : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? basePath : '',
    trailingSlash: true,
}

module.exports = nextConfig

