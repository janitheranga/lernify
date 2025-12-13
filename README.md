# 🎓 Lernify - Modern Learning Management System

A comprehensive, modern Learning Management System built with Next.js 16, Tailwind CSS 4, Shadcn UI, and Motion animations. Designed for seamless learning experiences with stunning UI/UX and powerful analytics.

## ✨ Features

### 🏠 Landing Page

- **🔔 Notification Loop**: Animated notification banner with special offers and announcements
- **💎 Glassmorphism Header**: Sticky header with smooth scroll animations and blur effects
- **🔐 Login Modal**: Beautiful animated modal with seamless user/admin login options
- **🚀 Hero Section**: Mouse-reactive animations with dynamic image slider showcase
- **🏢 Trusted Brands**: Infinite scrolling brand logos with smooth transitions
- **⚡ Features Section**: 6 feature cards with animated icons and hover effects
- **💰 Pricing Section**: 3 flexible pricing tiers with comprehensive feature lists
- **⭐ Customer Reviews**: 3 rows of scrolling testimonials with alternating directions
- **📧 Contact Form**: Two-column contact section with interactive form validation
- **📄 Footer**: Comprehensive footer with quick links, social media, and copyright

### 👨‍🎓 User Dashboard

- **📊 Collapsible Sidebar**: Smooth animations with intuitive icons and labels
- **📈 Overview**: Interactive stats cards, Recharts visualizations (Line & Doughnut), and real-time progress tracking
- **📚 My Courses**: Beautiful grid of enrolled courses with animated progress bars
- **🗺️ Learning Path**: Step-by-step learning progression with milestone tracking
- **🏆 Certificates**: Showcase earned certificates with download options
- **📉 Progress**: Detailed analytics dashboard with achievements and streaks
- **⚙️ Settings**: Comprehensive profile management and user preferences

### 👨‍💼 Admin Dashboard

- **👥 User Management**: Advanced table with user data, filters, and bulk actions
- **📖 Course Management**: Create, edit, and organize courses with drag-and-drop
- **🎥 Content Management**: Video library, resources, and asset organization
- **📊 Analytics**: Real-time charts and performance metrics with Recharts
- **💵 Revenue**: Financial overview, transactions, and revenue analytics
- **🔧 Settings**: Platform configuration and system preferences

### 🔍 404 Page

- Custom not found page with engaging animated SVG illustration
- Quick navigation links to popular sections
- Smooth page transitions back to main content

## 🛠️ Tech Stack

- **⚛️ Framework**: Next.js 16 (App Router)
- **🎨 Styling**: Tailwind CSS 4 (Latest)
- **✨ Animations**: Motion (Framer Motion)
- **🧩 UI Components**: Shadcn UI
- **📊 Charts**: Recharts
- **🎯 Icons**: Lucide React
- **📝 Language**: TypeScript

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- pnpm package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd lernify
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Run the development server**

   ```bash
   pnpm dev
   ```

4. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to see the application in action! 🎉

### 📦 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## 🗺️ Navigation & Routes

### 🌐 Public Routes

- `/` - 🏠 Landing page (Homepage with features, pricing, testimonials)
- `/404` - 🔍 Not found page (Custom error page)

### 👤 User Routes

- `/dashboard` - 📊 User dashboard (Accessible after login as Student)

### 🔑 Admin Routes

- `/admin/dashboard` - 💼 Admin dashboard (Accessible after login as Admin)

## 🔐 Authentication

The login modal provides seamless role-based authentication:

- **👨‍🎓 Student Login**: Redirects to `/dashboard` with user-specific features
- **👨‍💼 Admin Login**: Redirects to `/admin/dashboard` with administrative controls

## 🎯 Key Features

### 🎬 Animations

- ✅ Smooth page transitions with Motion
- ✅ Mouse-reactive hero elements
- ✅ Infinite scrolling loops for brands and testimonials
- ✅ Interactive chart animations with Recharts
- ✅ Hover effects on all interactive elements
- ✅ Skeleton loading states
- ✅ Staggered entrance animations

### ♿ Accessibility

- ✅ Semantic HTML5 structure
- ✅ ARIA labels and roles
- ✅ Full keyboard navigation support
- ✅ Screen reader optimized
- ✅ Focus indicators and visible states
- ✅ Color contrast compliance (WCAG AA)

### 📱 Responsive Design

- ✅ Mobile-first approach (320px+)
- ✅ Tablet optimized (768px+)
- ✅ Desktop enhanced (1024px+)
- ✅ Collapsible navigation for all screen sizes
- ✅ Touch-friendly interactive elements
- ✅ Adaptive layouts and grid systems

## 🎨 Customization

### 🌈 Color Palette

Edit `app/globals.css` to modify the custom color variables:

- **Mint Cream** - Primary background and light accents
- **Dark Slate Grey** - Text and dark elements
- **Muted Teal** - Primary brand color and CTAs
- **Frosted Mint** - Secondary accents and highlights
- **Old Gold** - Premium features and emphasis

### 📝 Content Customization

- **Landing Page**: `app/page.tsx`
- **User Dashboard**: `app/dashboard/page.tsx`
- **Admin Dashboard**: `app/admin/dashboard/page.tsx`
- **Global Styles**: `app/globals.css`
- **Components**: `components/` directory

### 🧩 Component Library

All UI components are built with Shadcn UI and can be customized via:

- `components/ui/` - Base UI components
- `components/dashboard/` - Dashboard-specific components
- `components.json` - Shadcn configuration

## 📊 Charts & Analytics

Powered by **Recharts** for beautiful, responsive data visualizations:

- 📈 Line charts with custom tooltips and formatters
- 🍩 Doughnut/Pie charts with interactive segments
- 📊 Real-time data updates
- 🎨 Custom color schemes matching brand palette
- 📱 Fully responsive across all devices

## 🏗️ Project Structure

```
lernify/
├── app/                    # Next.js App Router
│   ├── dashboard/         # User dashboard pages
│   ├── admin/             # Admin dashboard pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Landing page
├── components/            # React components
│   ├── dashboard/         # Dashboard components
│   └── ui/                # Shadcn UI components
├── lib/                   # Utility functions
└── public/                # Static assets
```

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

---

<div align="center">
  <p>Built with ❤️ using Next.js, Tailwind CSS, and Motion</p>
  <p>⭐ Star this repo if you find it helpful!</p>
</div>
