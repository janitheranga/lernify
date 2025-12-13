# Lernify - Modern Learning Management System

A comprehensive, modern Learning Management System built with Next.js, Tailwind CSS 4, Shadcn UI, and Motion animations.

## Features

### Landing Page

- **Notification Loop**: Animated notification banner with special offers
- **Glassmorphism Header**: Sticky header with smooth animations
- **Login Modal**: Beautiful animated modal with user/admin login options
- **Hero Section**: Mouse-reactive animations with image slider
- **Trusted Brands**: Infinite scrolling brand logos
- **Features Section**: 6 feature cards with icons and animations
- **Pricing Section**: 3 pricing tiers with all features
- **Customer Reviews**: 3 rows of scrolling testimonials (alternating directions)
- **Contact Form**: Two-column contact section with form and info
- **Footer**: Comprehensive footer with links and copyright

### User Dashboard

- **Collapsible Sidebar**: Smooth animations with icons and labels
- **Overview**: Stats cards, charts (Line & Doughnut), and progress tracking
- **My Courses**: Grid of enrolled courses with progress bars
- **Learning Path**: Step-by-step learning progression
- **Certificates**: Display earned certificates
- **Progress**: Detailed analytics and achievements
- **Settings**: Profile management and preferences

### Admin Dashboard

- **User Management**: Table with user data and actions
- **Course Management**: Create and manage courses
- **Content Management**: Video library and resources
- **Analytics**: Charts and performance metrics
- **Revenue**: Financial overview and transactions
- **Settings**: Platform configuration

### 404 Page

- Custom not found page with animated SVG illustration
- Quick links to popular sections

## Tech Stack

- **Framework**: Next.js 16
- **Styling**: Tailwind CSS 4
- **Animations**: Motion (Framer Motion)
- **UI Components**: Shadcn UI
- **Icons**: Lucide React
- **Language**: TypeScript

## Getting Started

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Navigation

### Public Routes

- `/` - Landing page
- `/404` - Not found page

### User Routes

- `/dashboard` - User dashboard (accessible after login as Student)

### Admin Routes

- `/admin/dashboard` - Admin dashboard (accessible after login as Admin)

## Login Functionality

The login modal allows switching between Student and Admin roles:

- **Student Login**: Routes to `/dashboard`
- **Admin Login**: Routes to `/admin/dashboard`

## Key Features

### Animations

- Smooth page transitions
- Mouse-reactive elements
- Infinite scrolling loops
- Chart animations
- Hover effects on all interactive elements

### Accessibility

- Semantic HTML
- ARIA labels
- Keyboard navigation
- Screen reader support
- Focus indicators

### Responsive Design

- Mobile-first approach
- Tablet optimized
- Desktop enhanced
- Collapsible navigation

## Customization

### Colors

Edit `app/globals.css` to modify the custom color variables (Mint Cream, Dark Slate Grey, Muted Teal, Frosted Mint, Old Gold).

### Content

- Landing page: `app/page.tsx`
- User dashboard: `app/dashboard/page.tsx`
- Admin dashboard: `app/admin/dashboard/page.tsx`

## License

MIT
