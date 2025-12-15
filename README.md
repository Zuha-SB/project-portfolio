# Portfolio Website

A clean, professional portfolio website built with Next.js, React, and TypeScript.

## Features

- Modern, responsive design
- Smooth scrolling navigation
- Sections for About, Skills, Projects, and Contact
- Showcases expertise in Frontend, Backend, and AI/ML

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Customization

### Update Personal Information

1. **Contact Section** (`components/Contact.tsx`):
   - Update email address
   - Update LinkedIn profile URL
   - Update GitHub username

2. **About Section** (`components/About.tsx`):
   - Customize the about text to reflect your experience

3. **Skills Section** (`components/Skills.tsx`):
   - Modify the skills arrays to match your expertise

4. **Projects Section** (`components/Projects.tsx`):
   - Replace placeholder projects with your actual projects
   - Add project links if available

5. **Hero Section** (`components/Hero.tsx`):
   - Update the main heading and description

6. **Metadata** (`app/layout.tsx`):
   - Update the page title and description

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React** - UI library

## Deployment

This portfolio can be easily deployed to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **GitHub Pages** (with static export)

For Vercel deployment:
1. Push your code to GitHub
2. Import the repository in Vercel
3. Deploy automatically

## License

MIT

