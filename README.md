# Personal Website Framework

A modern, responsive personal website framework built with Next.js, React, TypeScript, and Tailwind CSS. Easily showcase your education, projects, research, awards, and experience.

## Features

- 🎨 Modern, clean UI with Tailwind CSS
- 📱 Fully responsive design
- ⚡ Fast and optimized with Next.js
- 🎯 Easy content management via JSON
- 🔍 SEO-friendly structure
- ♿ Accessible components

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Start the development server:
```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customizing Your Content

All content is managed through the `data/profile.json` file. Simply edit this file to update your website:

### Personal Information
- Update `personalInfo` with your name, title, email, location, bio, and social links

### Education
- Add your educational background in the `education` array
- Include degree, institution, location, period, description, and GPA

### Projects
- Add your projects in the `projects` array
- Include title, description, technologies, period, links, and GitHub repository

### Research
- Add your research work in the `research` array
- Include title, description, institution, period, publications, and keywords

### Awards
- Add your awards and honors in the `awards` array
- Include title, organization, year, and description

### Experience
- Add your work experience in the `experience` array
- Include title, company, location, period, description, and achievements

## Project Structure

```
├── app/
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Homepage
├── components/
│   ├── Awards.tsx        # Awards section component
│   ├── Education.tsx    # Education section component
│   ├── Experience.tsx   # Experience section component
│   ├── Footer.tsx       # Footer component
│   ├── Hero.tsx         # Hero section component
│   ├── Navigation.tsx   # Navigation component
│   ├── Projects.tsx     # Projects section component
│   └── Research.tsx     # Research section component
├── data/
│   └── profile.json     # Your personal data (edit this!)
└── public/              # Static assets (images, etc.)
```

## Building for Production

```bash
npm run build
npm start
```

## Deployment

This website can be easily deployed to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **GitHub Pages** (with static export)
- Any hosting service that supports Node.js

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

## Customization

### Styling
- Modify `tailwind.config.js` to change colors, fonts, and other design tokens
- Update `app/globals.css` for global styles
- Each component can be customized individually

### Adding New Sections
1. Create a new component in `components/`
2. Add the data structure to `data/profile.json`
3. Import and use the component in `app/page.tsx`

## License

This project is open source and available for personal use.

