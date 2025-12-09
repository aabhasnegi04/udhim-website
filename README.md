# Udhim Technology Landing Page

A premium, modern SaaS landing page for Udhim Technology Pvt. Ltd. - a global ERP & factory automation company built with Next.js 14, TailwindCSS, and Framer Motion.

## Features

- ✨ Modern SaaS design with premium aesthetics
- 🎨 Beautiful animations with Framer Motion
- 📱 Fully responsive (mobile-first approach)
- 🚀 Next.js 14 with App Router
- 💅 TailwindCSS for styling
- 🧩 Reusable components (CMS-ready)
- 🌍 Global presence visualization
- 📊 16+ product showcase
- 💼 Industry-specific solutions

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
erp-landing/
├── app/
│   ├── layout.tsx     # Root layout
│   ├── page.tsx       # Home page
│   └── globals.css    # Global styles
├── components/        # Reusable components
│   ├── Hero.tsx
│   ├── QuickStats.tsx
│   ├── IndustryTiles.tsx
│   ├── ProductGrid.tsx
│   ├── GlobalMap.tsx
│   ├── CaseStudies.tsx
│   ├── HowItWorks.tsx
│   ├── FinalCTA.tsx
│   └── Footer.tsx
├── lib/
│   └── utils.ts      # Utility functions
└── public/           # Static assets
```

## Customization

### Colors
Edit the color palette in `tailwind.config.ts` to match your brand colors.

### Content
All content is currently hardcoded in the components. For CMS integration, replace the static data with dynamic content fetching.

### Fonts
The project uses Inter and Manrope fonts from Google Fonts. You can change these in `globals.css`.

## Build for Production

```bash
npm run build
npm start
```

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **TypeScript** - Type safety

## License

MIT
