# Vithahaselvi Haribalajhee | ML & AI Developer Portfolio

A dark, minimal, technical personal portfolio website showcasing ML/AI projects, skills, education, and activities. Built with modern web technologies for optimal performance and user experience.

## 🎨 Design

**Theme**: Dark terminal aesthetic with technical minimalism

**Colors**:
- Background: `#0a0a0f`
- Surface: `#111118`
- Primary Accent: `#7C6FF7` (Purple)
- Secondary Accent: `#2DD4A0` (Teal)
- Text Primary: `#F0EFF8`
- Text Muted: `#888899`

**Fonts**:
- Body: Space Grotesk
- Code/Labels: Fira Code (monospace)

## ⚡ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Google Fonts via `next/font` (Space Grotesk, Fira Code)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone or navigate to the project
cd "New project"

# Install dependencies
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The site will hot-reload on code changes.

### Build & Deploy

Build for production:

```bash
npm run build
```

Start production server:

```bash
npm run start
```

### Other Scripts

```bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint checks
```

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts & metadata
│   ├── page.tsx            # Home page (imports all sections)
│   └── globals.css         # Global styles & Tailwind directives
├── components/
│   ├── Navbar.tsx          # Sticky navigation (responsive)
│   ├── SectionShell.tsx    # Reusable section wrapper with animations
│   └── sections/
│       ├── Hero.tsx        # Hero section with typewriter effect
│       ├── About.tsx       # About section with contact info
│       ├── Skills.tsx      # Technical skills (4 categories)
│       ├── Projects.tsx    # Filterable projects (6 projects)
│       ├── Education.tsx   # Timeline of education
│       ├── Activities.tsx  # Hackathons & leadership roles
│       └── Contact.tsx     # Contact & CTA section
├── data/
│   ├── projects.ts         # All project data (typed)
│   └── skills.ts           # Skill categories
└── types/
    └── index.ts            # TypeScript interfaces
```

## 🎯 Features

✅ **Fully Responsive** - Mobile, tablet, and desktop optimized  
✅ **Smooth Animations** - Framer Motion fade-up on scroll  
✅ **Dark Theme** - Eye-friendly minimal design  
✅ **Typewriter Effect** - Animated role cycling in hero  
✅ **Project Filtering** - All | Non-Academic | Academic tabs  
✅ **SEO Optimized** - Meta tags, OG cards, Twitter cards  
✅ **TypeScript** - Full type safety across the codebase  
✅ **Mobile Menu** - Hamburger nav for smaller screens  

## 📊 Content Sections

1. **Hero** - Name, location, typewriter roles, CTA buttons
2. **About** - Academic background, contact info, profile details
3. **Skills** - 4 categories: Languages, ML/Data, Dev Tools, Databases
4. **Projects** - 6 projects (3 non-academic, 3 academic) with filtering
5. **Education** - Timeline: M.Sc., XII, X with grades
6. **Activities** - Hackathons and leadership roles
7. **Contact** - Email, phone, location, social links

## 🔧 Customization

### Update Personal Data

Edit these files to customize:

- **Projects**: `src/data/projects.ts`
- **Skills**: `src/data/skills.ts`
- **Education**: `src/components/sections/Education.tsx`
- **Activities**: `src/components/sections/Activities.tsx`
- **About**: `src/components/sections/About.tsx`

### Update Colors

Edit `tailwind.config.ts` to change the color scheme:

```typescript
colors: {
  bg: "#0a0a0f",           // Background
  surface: "#111118",      // Card backgrounds
  primary: "#7C6FF7",      // Purple accent
  teal: "#2DD4A0",         // Teal accent
  "text-primary": "#F0EFF8",
  muted: "#888899",
  border: "rgba(255,255,255,0.07)",
}
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📈 Performance

- Optimized for Core Web Vitals
- Lazy-loaded images
- Efficient animations with Framer Motion
- Production-ready build with Next.js 14

## 🚀 Deployment

Ready to deploy on:
- **Vercel** (recommended): `vercel deploy`
- **Netlify**: Connect GitHub repo
- **Self-hosted**: Use `npm run build && npm run start`

## 📝 License

This portfolio is personal and for demonstration purposes.

## 👤 Author

**Vithahaselvi Haribalajhee**  
ML & AI Developer | M.Sc. Theoretical Computer Science  
📧 23pt40@psgtech.ac.in  
🔗 [LinkedIn](https://linkedin.com/in/vithahaselvi) | [GitHub](https://github.com/vithaha05)
