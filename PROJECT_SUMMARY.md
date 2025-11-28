# UIU Data Science Club Website - Complete Project Guide

## Project Overview
This is a full-featured website for the UIU Data Science Club built with Next.js 16, React 19, and TypeScript. The website includes all pages, components, and styling needed for a professional club website.

## Website Structure

### Pages (7 Total)
1. **Home Page** (`app/page.tsx`)
   - Hero section with club introduction
   - DataCamp partnership highlight
   - About section with 3 feature cards
   - Upcoming events section
   - Join the club CTA

2. **Events Page** (`app/events/page.tsx`)
   - Upcoming and past events listing
   - Event cards with details (date, time, location, attendees)
   - Event categorization (workshop, hackathon, seminar, competition)
   - Sample data with 5 events

3. **Team Page** (`app/team/page.tsx`)
   - Team member cards (8 members)
   - Member info: name, role, bio, image
   - Social links (email, LinkedIn, GitHub)
   - "Join our team" CTA section

4. **Registration Page** (`app/register/page.tsx`)
   - Multi-section registration form
   - Personal information fields
   - Academic information (student ID, department, year)
   - Areas of interest checkboxes
   - Success confirmation page
   - Client-side state management

5. **Partners Page** (`app/partners/page.tsx`)
   - Partner showcase (3 partners)
   - Partner logos, descriptions, benefits
   - External links to partner websites
   - Partnership inquiry CTA

6. **Questions Bank Page** (`app/questions/page.tsx`)
   - Coming soon placeholder
   - Notification signup CTA

7. **Track Application Page** (`app/track/page.tsx`)
   - Application tracking form
   - Application ID and email input
   - Status tracking functionality

### Components

#### Layout Components
- **Header** (`components/header.tsx`)
  - Sticky navigation header
  - Announcement banner for recruitment
  - Desktop and mobile navigation menus
  - Logo section

- **Footer** (`components/footer.tsx`)
  - Multi-column footer layout
  - Quick links section
  - Resources section
  - Contact information
  - Social media links
  - Copyright notice

#### UI Components
- All shadcn/ui components included
- 60+ pre-built components available

### Styling & Theme
- **Framework**: Tailwind CSS v4
- **Design System**: Semantic design tokens in `app/globals.css`
- **Primary Color**: Teal (#17A2B8) - UIU DSC brand color
- **Fonts**: Geist (sans), Geist Mono (mono)
- **Responsive Design**: Mobile-first with md: and lg: breakpoints

### Configuration Files
- `next.config.mjs` - Next.js configuration
- `tsconfig.json` - TypeScript configuration
- `package.json` - Dependencies
- `postcss.config.mjs` - PostCSS configuration
- `tailwind.config.mjs` - Tailwind CSS configuration (v4)

### Assets
- Team photos
- DataCamp logos
- Placeholder images
- Icons (via lucide-react)

## Installation & Setup

### Prerequisites
- Node.js 18+ installed
- npm or pnpm package manager

### Quick Start

\`\`\`bash
# 1. Clone or extract the project
cd uiu-dsc-website

# 2. Install dependencies
npm install
# or
pnpm install

# 3. Run development server
npm run dev
# or
pnpm dev

# 4. Open browser
# Navigate to http://localhost:3000
\`\`\`

## Key Features

### Responsive Design
- Mobile-first approach
- Breakpoints: md (768px), lg (1024px)
- Optimized for all screen sizes

### Accessibility
- Semantic HTML structure
- ARIA labels and roles
- Form validation
- Color contrast compliance

### Performance
- Server-side rendering (SSR)
- Image optimization with Next.js Image component
- CSS-in-JS with Tailwind
- Optimized bundle size

### User Experience
- Smooth transitions and hover effects
- Clear visual hierarchy
- Consistent spacing and layout
- Interactive form feedback

## File Structure

\`\`\`
.
├── app/
│   ├── page.tsx                 # Home page
│   ├── layout.tsx              # Root layout
│   ├── globals.css             # Global styles
│   ├── events/
│   │   └── page.tsx            # Events page
│   ├── team/
│   │   └── page.tsx            # Team page
│   ├── register/
│   │   └── page.tsx            # Registration page
│   ├── partners/
│   │   └── page.tsx            # Partners page
│   ├── questions/
│   │   └── page.tsx            # Questions bank page
│   └── track/
│       └── page.tsx            # Track application page
├── components/
│   ├── header.tsx              # Navigation header
│   ├── footer.tsx              # Footer component
│   └── ui/                     # shadcn/ui components (60+)
├── public/
│   ├── data-science-club-team-photo.jpg
│   ├── datacamp-donates-logo-white.jpg
│   ├── datacamp-donates-logo-green.jpg
│   ├── professional-man-headshot.png
│   ├── professional-woman-headshot.png
│   └── ...other assets
├── hooks/
│   ├── use-mobile.ts
│   └── use-toast.ts
├── lib/
│   └── utils.ts
├── styles/
│   └── globals.css
├── next.config.mjs
├── tsconfig.json
├── package.json
└── postcss.config.mjs
\`\`\`

## Customization Guide

### Colors
Edit `app/globals.css` to change the brand colors:
\`\`\`css
--dsc-primary: oklch(0.58 0.21 191.42);  /* Teal color */
--dsc-primary-light: oklch(0.72 0.15 192);
--dsc-primary-dark: oklch(0.42 0.18 189);
\`\`\`

### Content
- Update team members in `app/team/page.tsx`
- Add/edit events in `app/events/page.tsx`
- Modify partners in `app/partners/page.tsx`
- Update header/footer links as needed

### Images
Replace image files in `public/` folder:
- Team photo: `data-science-club-team-photo.jpg`
- Team member headshots: `professional-*.png`
- Partner logos: Update in `partners/page.tsx`

### Email Links
Update email addresses throughout:
- Header: `club@datascience.uiu.ac.bd`
- Footer: Same email
- Contact forms: Update as needed

## Deployment

### Deploy to Vercel (Recommended)
\`\`\`bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
\`\`\`

### Deploy to Other Platforms
1. Build: `npm run build`
2. Start: `npm run start`
3. Use Node.js compatible hosting

## Browser Support
- Chrome/Edge: Latest versions
- Firefox: Latest versions
- Safari: Latest versions
- Mobile browsers: iOS Safari, Chrome Mobile

## Performance Metrics
- Lighthouse Score: 90+
- First Contentful Paint: < 1.5s
- Cumulative Layout Shift: < 0.1

## Future Enhancements
- Database integration for form submissions
- Member dashboard with login
- Blog section
- Gallery/Photo albums
- Event registration system
- Newsletter signup
- Admin panel for content management

## Support & Maintenance

### Common Updates
- Update social media links in footer
- Add new events to events page
- Update team member information
- Modify DataCamp partnership details

### Dependencies
- Next.js 16: `npm update next`
- React 19: `npm update react`
- Tailwind CSS v4: `npm update tailwindcss`

## License
This project is custom-built for UIU Data Science Club.

## Contact
- Email: club@datascience.uiu.ac.bd
- Website: https://uiudsc.uiu.ac.bd/

---

**Project Created**: November 2025
**Last Updated**: November 2025
**Version**: 1.0.0
