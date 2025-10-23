# 🚀 Srijan Kumar - Cybersecurity Portfolio

A modern, high-performance portfolio website showcasing cybersecurity expertise, full-stack development projects, and professional certifications. Built with **Next.js 14**, **React 19**, **TypeScript**, and **Tailwind CSS**.

## ✨ Features

### Core Features
- ⚡ **Next.js 14** with App Router for optimal performance
- ⚛️ **React 19** with modern hooks and patterns
- 🎨 **Tailwind CSS** + Custom CSS Variables for flexible theming
- 🎭 **AOS (Animate On Scroll)** for smooth scroll animations
- 🎬 **Framer Motion** for advanced animations
- 📱 **Fully Responsive** design (mobile-first approach)
- 🌙 **Dark Mode** support with localStorage persistence
- 🎯 **Dedicated Certifications** page
- 🔍 **SEO Optimized** with metadata
- ⚡ **Performance Optimized** with Next.js Image optimization
- 📊 **Interactive Skills** accordion with 6 categories
- 🎓 **Timeline Education** journey visualization
- 💼 **Project Showcase** with live demos

### ✨ NEW: Enhanced UI/UX Features
- 📍 **Breadcrumb Navigation** - Dynamic page path navigation
- ⬆️ **Enhanced Back to Top** - Smooth scroll with gradient styling
- 📊 **Reading Progress Bar** - Scroll progress indicator
- 🖨️ **Print-Friendly Resume** - Optimized print layout
- 🌍 **Multi-language Support** - 4 languages (EN, ES, FR, DE)
- 🔄 **Smooth Page Transitions** - Fade/slide animations
- 🎢 **Parallax Scrolling** - Depth effects on scroll
- ⏳ **Loading Animations** - Beautiful loading states
- ⌨️ **Typing Animation** - Dynamic hero subtitle

### 🔒 Security Features (NEW!)
- 🛡️ **SQL Injection Protection** - Pattern detection and input sanitization
- 🚫 **XSS Prevention** - HTML escaping and Content Security Policy
- 🔐 **CSRF Protection** - SameSite cookies and secure headers
- 🚦 **Rate Limiting** - Prevents brute force attacks (5 req/15min)
- 🎯 **Attack Detection** - Real-time pattern recognition
- 📋 **Input Validation** - Email, URL, and data sanitization
- 🔒 **Security Headers** - HSTS, CSP, X-Frame-Options, and more
- 🛑 **Clickjacking Protection** - Frame-ancestors prevention
- 🔍 **MIME Sniffing Prevention** - Content-Type protection
- 🌐 **Secure Middleware** - Automatic header application

## �🛠️ Tech Stack

### Frontend
- **Next.js 14.2.33** - React framework with App Router
- **React 19** - UI library with latest features
- **TypeScript** - Type-safe development
- **Tailwind CSS 3.x** - Utility-first CSS framework
- **Framer Motion** - Advanced animations library
- **AOS 2.3.4** - Animate On Scroll library
- **react-type-animation** - Typing effect animations
- **next-intl** - Internationalization (i18n)

### Security
- **DOMPurify** - HTML sanitization
- **Validator** - Input validation library
- Custom security middleware
- Attack pattern detection
- Rate limiting system

### Icons
- **Unicons 4.0.8** - Primary icon library (line icons)
- **Font Awesome 6.4.0** - Supplementary icons (brand icons, special symbols)
- **Lucide React** - Modern icon components (Terminal, ArrowUp, etc.)
- Usage: `<i className="uil uil-icon-name">` for Unicons, `<i className="fab fa-icon-name">` for Font Awesome

### Styling
- CSS Variables for dynamic theming
- Gradient color scheme (#24C6DC to #514A9D)
- Custom gradient buttons with hover effects
- Custom gradient text utilities
- Custom scrollbar styling
- Poppins font family (400, 500, 600, 700 weights)
- Print-optimized CSS for resume printing

## 📦 Installation

```powershell
# Clone or navigate to the project
cd p:\CODE-X\xi-profile

# Install dependencies
npm install

# Run development server
npm run dev
```

Visit `http://localhost:3000` to see your portfolio!

## 🏗️ Project Structure

```
xi-profile/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root layout with Header/Footer
│   │   ├── page.tsx            # Home page (Hero + Previews)
│   │   ├── globals.css         # Global styles + CSS variables
│   │   ├── print.css           # Print-friendly styles
│   │   ├── not-found.tsx       # Custom 404 page (Retro TV)
│   │   ├── about/              # About page with interests
│   │   │   └── page.tsx
│   │   ├── skills/             # Skills page with accordions
│   │   │   └── page.tsx
│   │   ├── qualifications/     # Education timeline
│   │   │   └── page.tsx
│   │   ├── cert/               # Certifications showcase
│   │   │   └── page.tsx
│   │   ├── projects/           # Portfolio projects
│   │   │   └── page.tsx
│   │   └── blog/               # Blog integration (Dev.to)
│   │       └── page.tsx
│   ├── components/             # Reusable components (organized)
│   │   ├── layout/             # Layout components
│   │   │   ├── Header.tsx      # Navigation + Language switcher
│   │   │   └── Footer.tsx      # Footer with gradient
│   │   ├── navigation/         # Navigation UI
│   │   │   ├── Breadcrumb.tsx  # Page path navigation
│   │   │   └── BackToTop.tsx   # Enhanced scroll button
│   │   ├── ui/                 # UI components
│   │   │   ├── ReadingProgress.tsx  # Scroll progress bar
│   │   │   ├── PrintButton.tsx      # Print resume
│   │   │   ├── LanguageSwitcher.tsx # Language selector
│   │   │   └── LoadingSpinner.tsx   # Loading animation
│   │   ├── animations/         # Animation wrappers
│   │   │   ├── PageTransition.tsx   # Page transitions
│   │   │   └── Parallax.tsx         # Parallax effects
│   │   └── index.ts            # Barrel exports
│   ├── lib/                    # Utilities
│   │   └── security.ts         # 🔒 Security utilities
│   ├── middleware.ts           # 🔒 Security middleware
│   └── app/api/                # API routes
│       └── contact/            # 🔒 Secure contact endpoint
│           └── route.ts
├── public/                     # Static assets
│   └── assets/                 # Organized assets
│       ├── images/             # Images
│       └── documents/          # PDFs, docs
├── docs/                       # Documentation
│   ├── ENHANCEMENTS.md         # UI/UX documentation
│   ├── QUICK_REFERENCE.md      # Quick reference
│   ├── PROJECT_STRUCTURE.md    # Structure guide
│   └── SECURITY_QUICK_REF.md   # 🔒 Security quick ref
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
├── vercel.json                 # Deployment configuration
└── README.md
└── SECURITY.md             # 🔒 Security guide
```

## 📝 Scripts

```powershell
npm run dev      # Start development server (Turbopack)
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## 🎨 Customization

### Colors
The project uses a **gradient color scheme** with CSS variables. Edit `src/app/globals.css`:

```css
:root {
  --first-color: #24C6DC;        /* Cyan - Primary gradient start */
  --first-color-second: #514A9D;  /* Purple - Primary gradient end */
  --first-color-alt: #1da8bd;     /* Darker cyan for hover states */
  --title-color: hsl(242, 8%, 15%);
  --text-color: hsl(242, 8%, 45%);
  /* ... more variables */
}
```

**Gradient Button** (already applied to all buttons):
```css
.btn-grad {
  background: linear-gradient(to right, #24C6DC 0%, #514A9D 51%, #24C6DC 100%);
  background-size: 200% auto;
  transition: 0.5s;
}
.btn-grad:hover {
  background-position: right center;
}
```

**Gradient Text** (for headings and accents):
```css
.gradient-text {
  background: linear-gradient(to right, #24C6DC, #514A9D);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### Fonts
The project uses **Poppins** font (Google Fonts). To change, edit `src/app/layout.tsx`:

```typescript
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});
```

### Icons
- **Unicons**: `<i className="uil uil-{icon-name}"></i>` - [Browse Unicons](https://iconscout.com/unicons)
- **Font Awesome**: `<i className="fab fa-{icon-name}"></i>` - [Browse Font Awesome](https://fontawesome.com/icons)
- **Lucide React**: `<Terminal className="w-5 h-5" />` - [Browse Lucide](https://lucide.dev)

Icon packs are loaded via CDN in `src/app/layout.tsx` (Unicons, Font Awesome) and npm (Lucide React).

## 🚀 Deployment

### Vercel (Recommended)
This project includes a `vercel.json` configuration with:
- Security headers (X-Frame-Options, X-XSS-Protection, etc.)
- Optimized caching for static assets
- Region configuration (US East)

```powershell
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

The build is optimized and production-ready. Expected bundle size:
- **First Load JS**: ~87.3 kB (shared)
- **Page-specific**: 1-6 kB per route
- **Total Pages**: 8 static pages

### Other Platforms
- **Netlify**: Connect your GitHub repo
- **AWS**: Use AWS Amplify
- **Docker**: Build and deploy with Docker

## � Pages Overview

### 🏠 Home (`/`)
- Hero section with profile image
- About preview with stats (5+ certifications, 10+ projects, 15+ technologies)
- Skills preview (3 main categories)
- Projects preview (featured projects)
- Contact CTA with social links

### 👤 About (`/about`)
- Personal introduction
- Stats cards
- Interests section (Cybersecurity, AI/ML, Full-Stack, Data Science)

### 💻 Skills (`/skills`)
- 6 interactive accordion categories:
  - Programming Languages (Python, C/C++, Go, JavaScript, TypeScript, Java)
  - Technologies (HTML5, CSS3, Tailwind, Node.js, React, Next.js, MongoDB)
  - IT Constructs (Data Structures, Algorithms, OOP, System Design, REST APIs)
  - Networking & Security (Penetration Testing, Ethical Hacking, Wireshark, Nmap)
  - Python Frameworks (Django, Flask, FastAPI, TensorFlow, PyTorch, Pandas)
  - Tools & Platforms (Git, Docker, Linux, VS Code, Postman)
- CTA to certifications page

### 🎓 Qualifications (`/qualifications`)
- Education timeline with visual line and dots
- 3 education milestones (School, Class 12th, University with "Current" badge)
- Mobile-responsive timeline visualization
- Link to certifications page

### 🏆 Certifications (`/cert`)
- 5 professional certifications:
  - IBM SkillsBuild - Cybersecurity Essentials
  - Microsoft & LinkedIn - Career Essentials in Cybersecurity
  - The Linux Foundation - Linux Foundation Certified
  - Acmegrade - Web Development Certification
  - Tata Group - Data Visualization & Analysis
- Stats section (Total Certifications, Organizations, Hours Trained, Success Rate)
- Grid layout (3 columns on large screens)

### � Projects (`/projects`)
- 5 portfolio projects with images
- Tags, descriptions, demo/code links
- Hover effects and animations

### 📝 Blog (`/blog`)
- Dev.to integration placeholder
- Social media links (Dev.to, Medium, Hashnode)
- Placeholder article cards

## 🎯 Key Features

### Dark Mode
- Toggle between light and dark themes
- Persistent theme selection (localStorage)
- CSS variable-based color switching
- Smooth transitions

### Responsive Design
- Mobile-first approach
- Bottom navigation on mobile
- Horizontal navigation on desktop
- Responsive grid layouts
- Optimized images

### Animations
- AOS (Animate On Scroll) integration
- Fade, zoom, and slide animations
- Staggered delays for sequential animations
- Smooth scroll behavior

## 🔧 Development Tips

### Adding New Icons
1. **Unicons**: Browse at [iconscout.com/unicons](https://iconscout.com/unicons)
   - Usage: `<i className="uil uil-envelope-alt"></i>`
   - Example: `uil-award`, `uil-shield-check`, `uil-user`

2. **Font Awesome**: Browse at [fontawesome.com/icons](https://fontawesome.com/icons)
   - Usage: `<i className="fab fa-github"></i>` (brands), `<i className="fas fa-server"></i>` (solid)
   - Example: `fa-react`, `fa-python`, `fa-linkedin`

### Modifying Navigation
Edit `src/components/Header.tsx` to add/remove navigation links:

```typescript
const navLinks = [
  { name: 'Home', path: '/', icon: 'uil-estate' },
  { name: 'About', path: '/about', icon: 'uil-user' },
  // Add your link here...
];
```

### Adding New Pages
1. Create folder in `src/app/` (e.g., `contact/`)
2. Add `page.tsx` with your component
3. Update navigation in `Header.tsx`
4. Add route to next.config if needed

### CSS Variables
All theme colors are defined in `src/app/globals.css`. Modify these to change the entire site's appearance:
- `--first-color`: Primary accent color
- `--title-color`: Headings color
- `--text-color`: Body text color
- `--container-color`: Card backgrounds

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [AOS Library](https://michalsnik.github.io/aos/)
- [Unicons](https://iconscout.com/unicons)
- [Font Awesome](https://fontawesome.com)
- [Lucide Icons](https://lucide.dev)
- [next-intl](https://next-intl-docs.vercel.app/)

## 🎯 New Features Documentation

For detailed information about the recently added UI/UX enhancements:
- 📖 **Full Details**: See `ENHANCEMENTS.md` for comprehensive documentation
- ⚡ **Quick Start**: See `QUICK_REFERENCE.md` for usage examples

### Quick Overview of New Components

| Component | Auto-loaded | Purpose |
|-----------|------------|---------|
| **Breadcrumb** | ✅ Yes | Page navigation trail |
| **ReadingProgress** | ✅ Yes | Scroll progress indicator |
| **BackToTop** | ✅ Yes | Enhanced scroll-to-top button |
| **PrintButton** | ✅ Yes | Print-optimized resume |
| **CustomCursor** | ✅ Yes | Interactive gradient cursor (desktop) |
| **LanguageSwitcher** | ✅ Yes | Multi-language support |
| **PageTransition** | Manual | Smooth page transitions |
| **Parallax** | Manual | Parallax scroll effects |
| **LoadingSpinner** | Manual | Loading states |

**Try these features:**
1. 🖨️ Click the print button (bottom-right) to see optimized resume layout
2. 🎯 Move your mouse on desktop to see the custom cursor
3. 📊 Scroll down to see the reading progress bar at the top
4. 🌍 Click the globe icon in the header to change languages
5. 📍 Notice the breadcrumb navigation on any page (except home)
6. ⬆️ Scroll down 300px to see the back-to-top button appear

## 🤝 Contributing

This is a personal portfolio project, but suggestions and feedback are welcome!

## 📄 License

MIT License - feel free to use this as a template for your own portfolio.

## 👨‍💻 Author

**Srijan Kumar** - Cybersecurity Sentinel 🛡️
- Portfolio: [Live Site](https://your-domain.com)
- GitHub: [@Srijan-XI](https://github.com/Srijan-XI)
- LinkedIn: [srijan-xi](https://www.linkedin.com/in/srijan-xi/)

---

**Built with ❤️ using Next.js, React, TypeScript, and Tailwind CSS**
# Srijanxi Technologies
