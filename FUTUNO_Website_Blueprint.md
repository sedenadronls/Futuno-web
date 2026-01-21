# FUTUNO Website Blueprint

**Version:** 1.0  
**Last Updated:** January 21, 2026  
**Author:** Manus AI

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Technology Stack](#2-technology-stack)
3. [Design System](#3-design-system)
4. [File Structure](#4-file-structure)
5. [Page Architecture](#5-page-architecture)
6. [Component Library](#6-component-library)
7. [How to Publish Your Website](#7-how-to-publish-your-website)
8. [How to Add a Custom Domain](#8-how-to-add-a-custom-domain)
9. [How to Make Changes](#9-how-to-make-changes)
10. [SEO Configuration](#10-seo-configuration)
11. [Future Enhancements](#11-future-enhancements)

---

## 1. Project Overview

FUTUNO is an elite AI Automation Agency website built with modern web technologies. The platform showcases AI automation services, features an interactive workflow builder, ROI calculator, tiered pricing, authentication system, professional blog, and multi-step contact form.

| Attribute | Details |
|-----------|---------|
| **Project Name** | FUTUNO |
| **Type** | Static Frontend (React SPA) |
| **Design Theme** | Superhuman Dark Elegance |
| **Primary Color** | Futuno Blue (#007AFF) |
| **Background** | Deep Obsidian (#050505) |
| **Typography** | Inter (Google Fonts) |

---

## 2. Technology Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| **React** | UI Framework | 19.x |
| **TypeScript** | Type Safety | 5.6.3 |
| **Tailwind CSS** | Styling | 4.x |
| **Wouter** | Client-side Routing | 3.x |
| **Framer Motion** | Animations | 12.x |
| **Shadcn/UI** | Component Library | Latest |
| **Zod** | Form Validation | 4.x |
| **Lucide React** | Icons | 0.453.0 |
| **Vite** | Build Tool | 7.x |

---

## 3. Design System

### 3.1 Color Palette

The design uses a sophisticated dark theme with electric blue accents:

| Color Name | CSS Variable | Value | Usage |
|------------|--------------|-------|-------|
| Background | `--background` | `#050505` | Main page background |
| Foreground | `--foreground` | `#F5F5F7` | Primary text |
| Primary | `--primary` | `#007AFF` | CTAs, links, accents |
| Secondary | `--secondary` | `#1C1C1E` | Card backgrounds |
| Muted | `--muted` | `#2C2C2E` | Subtle backgrounds |
| Border | `--border` | `rgba(255,255,255,0.1)` | Dividers, outlines |
| Accent | `--accent` | `#00D4AA` | Success states |

### 3.2 Typography

```css
/* Primary Font */
font-family: 'Inter', system-ui, sans-serif;

/* Font Weights */
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
--font-extrabold: 800;

/* Font Sizes */
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
--text-5xl: 3rem;      /* 48px */
--text-6xl: 3.75rem;   /* 60px */
```

### 3.3 Glassmorphism Effects

```css
/* Glass Card Effect */
.glass-card {
  background: rgba(28, 28, 30, 0.8);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
}

/* Glow Effect */
.glow-primary {
  box-shadow: 0 0 40px rgba(0, 122, 255, 0.3);
}
```

### 3.4 Animation Guidelines

| Animation | Duration | Easing | Usage |
|-----------|----------|--------|-------|
| Hover transitions | 300ms | ease-out | Buttons, cards |
| Page transitions | 500ms | ease-in-out | Route changes |
| Micro-interactions | 200ms | ease | Icons, toggles |
| Entrance animations | 600ms | cubic-bezier | Section reveals |

---

## 4. File Structure

```
futuno/
├── client/
│   ├── index.html              # Main HTML template
│   ├── public/
│   │   └── images/             # Static images
│   └── src/
│       ├── App.tsx             # Root component & routing
│       ├── main.tsx            # React entry point
│       ├── index.css           # Global styles & tokens
│       ├── components/
│       │   ├── ui/             # Shadcn/UI components
│       │   ├── Header.tsx      # Global navigation
│       │   ├── Footer.tsx      # Global footer
│       │   ├── WorkflowBuilder.tsx
│       │   ├── ROICalculator.tsx
│       │   ├── ServiceCard.tsx
│       │   └── PricingSection.tsx
│       ├── pages/
│       │   ├── Home.tsx        # Landing page
│       │   ├── Blog.tsx        # Blog listing
│       │   ├── BlogPost.tsx    # Blog detail
│       │   ├── Contact.tsx     # Multi-step form
│       │   ├── Login.tsx       # Authentication
│       │   ├── Register.tsx    # Sign up
│       │   ├── ForgotPassword.tsx
│       │   ├── Dashboard.tsx   # User dashboard
│       │   └── NotFound.tsx    # 404 page
│       ├── lib/
│       │   ├── utils.ts        # Utility functions
│       │   ├── seo.ts          # SEO helpers
│       │   └── blog-data.ts    # Blog content
│       ├── hooks/              # Custom React hooks
│       └── contexts/           # React contexts
├── server/
│   └── index.ts                # Express server (production)
├── shared/
│   └── const.ts                # Shared constants
├── package.json
└── ideas.md                    # Design documentation
```

---

## 5. Page Architecture

### 5.1 Page Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Home.tsx | Landing page with hero, services, pricing |
| `/blog` | Blog.tsx | Blog listing with search & filters |
| `/blog/:slug` | BlogPost.tsx | Individual blog post |
| `/contact` | Contact.tsx | Multi-step discovery form |
| `/login` | Login.tsx | User authentication |
| `/register` | Register.tsx | New user registration |
| `/forgot-password` | ForgotPassword.tsx | Password recovery |
| `/dashboard` | Dashboard.tsx | User control center |
| `/404` | NotFound.tsx | Error page |

### 5.2 Home Page Sections

1. **Hero Section** - Main headline with CTAs
2. **Trust Badges** - SOC 2, 500+ Enterprises, 99.9% Uptime
3. **Workflow Builder** - Interactive animation demo
4. **Services Grid** - 3 service cards with modals
5. **ROI Calculator** - Interactive savings calculator
6. **Pricing Section** - 3-tier pricing with toggle
7. **Partner Logos** - Scrolling marquee
8. **CTA Section** - Final call-to-action

---

## 6. Component Library

### 6.1 Core Components

| Component | Location | Purpose |
|-----------|----------|---------|
| Header | `components/Header.tsx` | Sticky navigation with logo, links, auth buttons |
| Footer | `components/Footer.tsx` | 4-column footer with newsletter |
| ServiceCard | `components/ServiceCard.tsx` | Service display with modal details |
| PricingSection | `components/PricingSection.tsx` | Pricing tiers with toggle |
| ROICalculator | `components/ROICalculator.tsx` | Interactive savings calculator |
| WorkflowBuilder | `components/WorkflowBuilder.tsx` | Animated workflow demo |

### 6.2 UI Components (Shadcn/UI)

Located in `components/ui/`:

- Button, Card, Dialog, Input, Label
- Select, Slider, Switch, Tabs
- Tooltip, Separator, Badge
- And more...

---

## 7. How to Publish Your Website

Publishing your FUTUNO website is straightforward through the Manus platform:

### Step 1: Create a Checkpoint

Before publishing, ensure you have saved a checkpoint of your current work. This has already been done for your project.

### Step 2: Access the Management UI

1. Click the **Preview** button on the project card in the chatbox
2. This opens the Management UI panel on the right side

### Step 3: Publish

1. In the Management UI header (top-right), click the **"Publish"** button
2. Your website will be deployed to a live URL
3. You'll receive a public URL like: `https://futuno.manus.space`

### Step 4: Verify Deployment

1. Visit your published URL
2. Test all pages and functionality
3. Check mobile responsiveness

> **Note:** The website will be accessible at a `.manus.space` subdomain by default. You can add a custom domain (see next section).

---

## 8. How to Add a Custom Domain

### Option A: Use Manus-Provided Subdomain

Your website automatically gets a subdomain like `futuno.manus.space`. To customize the prefix:

1. Open the **Management UI** → **Settings** → **Domains**
2. Modify the auto-generated domain prefix
3. Click **Save**

### Option B: Purchase a Domain Through Manus

1. Open **Management UI** → **Settings** → **Domains**
2. Click **"Purchase New Domain"**
3. Search for your desired domain name
4. Complete the purchase flow
5. The domain will be automatically configured

### Option C: Connect Your Own Domain

If you already own a domain:

1. Open **Management UI** → **Settings** → **Domains**
2. Click **"Add Custom Domain"**
3. Enter your domain name (e.g., `futuno.com`)
4. You'll receive DNS configuration instructions:

| Record Type | Name | Value |
|-------------|------|-------|
| CNAME | www | `your-project.manus.space` |
| A | @ | `[IP Address Provided]` |

5. Log into your domain registrar (GoDaddy, Namecheap, Cloudflare, etc.)
6. Add the DNS records as instructed
7. Wait for DNS propagation (up to 48 hours)
8. Return to Manus and click **"Verify Domain"**

### SSL Certificate

SSL certificates are automatically provisioned for all domains. Your site will be accessible via HTTPS.

---

## 9. How to Make Changes

### 9.1 Modifying Content

#### Change Text Content

1. Locate the relevant page file in `client/src/pages/`
2. Find the text you want to change
3. Edit the JSX content directly
4. Save the file - changes appear instantly via hot reload

**Example - Changing Hero Headline:**

```tsx
// In client/src/pages/Home.tsx
<h1 className="text-5xl md:text-7xl font-extrabold">
  Automating the{' '}
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
    Future of Work  {/* ← Change this text */}
  </span>
</h1>
```

#### Change Images

1. Add new images to `client/public/images/`
2. Reference them in your components:

```tsx
<img src="/images/your-image.jpg" alt="Description" />
```

### 9.2 Modifying Styles

#### Global Colors

Edit `client/src/index.css`:

```css
.dark {
  --primary: oklch(0.623 0.214 255);  /* Change primary color */
  --background: oklch(0.05 0 0);       /* Change background */
}
```

#### Component-Specific Styles

Use Tailwind classes directly in components:

```tsx
<div className="bg-primary text-white p-4 rounded-lg">
  {/* Your content */}
</div>
```

### 9.3 Adding New Pages

1. Create a new file in `client/src/pages/`:

```tsx
// client/src/pages/About.tsx
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Your content */}
      </main>
      <Footer />
    </div>
  );
}
```

2. Add the route in `client/src/App.tsx`:

```tsx
import About from "./pages/About";

// In the Router function:
<Route path={"/about"} component={About} />
```

3. Add navigation link in `Header.tsx`:

```tsx
{ name: 'About', href: '/about' },
```

### 9.4 Modifying Blog Posts

Edit `client/src/lib/blog-data.ts`:

```typescript
export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'your-new-post',
    title: 'Your New Blog Post Title',
    excerpt: 'Brief description...',
    content: `
      # Your Content Here
      
      Write your blog post in Markdown format.
    `,
    author: 'Your Name',
    date: '2026-01-21',
    readTime: '5 min read',
    category: 'AI & Machine Learning',
    featured: true,
  },
  // ... more posts
];
```

### 9.5 Modifying Pricing

Edit `client/src/components/PricingSection.tsx`:

```typescript
const plans = [
  {
    name: 'Starter',
    monthlyPrice: 49,      // ← Change price
    yearlyPrice: 39,
    description: 'Your description',
    features: [
      'Feature 1',         // ← Modify features
      'Feature 2',
    ],
  },
  // ... more plans
];
```

### 9.6 Modifying Contact Form Fields

Edit `client/src/pages/Contact.tsx`:

The form uses a 4-step wizard. Each step is defined in the component. Modify the form fields, validation, and steps as needed.

---

## 10. SEO Configuration

### 10.1 Meta Tags

Located in `client/index.html`:

```html
<title>FUTUNO - Global AI Automation Agency</title>
<meta name="description" content="Elite AI automation solutions..." />
<meta property="og:title" content="FUTUNO - Global AI Automation Agency" />
<meta property="og:description" content="..." />
<meta property="og:image" content="/images/og-image.jpg" />
```

### 10.2 Dynamic SEO (Per Page)

Each page updates its title dynamically:

```tsx
useEffect(() => {
  document.title = 'Page Title - FUTUNO';
}, []);
```

### 10.3 SEO Checklist

| Item | Status | Location |
|------|--------|----------|
| Meta Title | ✅ | index.html |
| Meta Description | ✅ | index.html |
| OpenGraph Tags | ✅ | index.html |
| Twitter Cards | ✅ | index.html |
| Semantic HTML | ✅ | All pages |
| H1-H4 Hierarchy | ✅ | All pages |
| Alt Text for Images | ⚠️ | Add to images |
| Sitemap | ❌ | Create sitemap.xml |
| Robots.txt | ❌ | Create robots.txt |

---

## 11. Future Enhancements

### Recommended Upgrades

| Feature | Benefit | How to Add |
|---------|---------|------------|
| **Backend & Database** | Real form submissions, user auth | Use `webdev_add_feature` with `web-db-user` |
| **Stripe Payments** | Accept payments for plans | Use `webdev_add_feature` with `stripe` |
| **Real Blog Images** | Better visual appeal | Add images to `/public/images/` |
| **Testimonials** | Social proof | Add testimonials section to Home.tsx |
| **Case Studies Page** | Detailed success stories | Create new page |
| **FAQ Section** | Answer common questions | Add accordion component |
| **Live Chat** | Customer support | Integrate Intercom/Crisp |
| **Analytics** | Track user behavior | Already integrated (Umami) |

### To Upgrade to Full-Stack

Request the following in chat:

> "Please upgrade this project to include backend, database, and user authentication."

This will enable:
- Real user registration and login
- Form submissions saved to database
- API endpoints for dynamic content
- File storage capabilities

---

## Quick Reference Card

| Task | Action |
|------|--------|
| **Publish Website** | Management UI → Click "Publish" |
| **Add Custom Domain** | Settings → Domains → Add Domain |
| **Change Colors** | Edit `client/src/index.css` |
| **Add New Page** | Create in `pages/`, add route in `App.tsx` |
| **Edit Blog Post** | Modify `client/src/lib/blog-data.ts` |
| **Change Pricing** | Edit `components/PricingSection.tsx` |
| **Add Images** | Place in `client/public/images/` |
| **Rollback Changes** | Use checkpoint rollback feature |

---

**Need Help?**

For additional support or questions, you can:
1. Ask in the chat for specific modifications
2. Visit https://help.manus.im for general support

---

*This blueprint was generated for the FUTUNO project. Keep this document updated as you make changes to your website.*
