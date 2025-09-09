# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based real estate website for Lodge Paradise, built with Vite and styled with Tailwind CSS. The project showcases luxury lodges in Réunion Island with features for property viewing, investment information, and client interaction.

## Development Commands

### Core Development
- `npm run dev` - Start the development server (Vite)
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

### Installation
- `npm install` - Install all dependencies

## Architecture & Structure

### Tech Stack
- **Build Tool**: Vite
- **Framework**: React 19 with React Router v7
- **Styling**: Tailwind CSS with custom configuration
- **3D Graphics**: @react-three/fiber and @react-three/drei
- **Animations**: Framer Motion
- **Components**: Headless UI, Radix UI primitives
- **Icons**: Lucide React and React Icons

### Application Structure
- **Entry Point**: `src/main.jsx` → `src/App.jsx`
- **Main App Component**: `src/RealEstateApp.jsx` - The homepage component
- **Routing**: React Router with dedicated pages for each section:
  - `/` - Homepage (RealEstateApp)
  - `/nos-projets` - Projects showcase
  - `/catalogue-lodges` - Lodge catalog
  - `/materiaux-nobles` - Premium materials showcase
  - `/zones-implantation` - Implementation zones (La Réunion)
  - `/investissement-defiscalisation` - Investment and tax benefits
  - `/galerie` - Gallery
  - `/contact` - Contact page

### Component Organization
- **Page Components**: Located in `src/pages/`
- **Reusable Components**: Located in `src/components/`
- **UI Primitives**: Located in `src/components/ui/`
- **3D Components**: Components with "3D" suffix (e.g., LaReunion3D)
- **Mobile-Optimized Components**: Components with "Mobile" suffix for responsive design

### Key Configuration
- **Path Aliases**: `@` alias points to `./src` directory (configured in vite.config.js)
- **Tailwind Config**: Custom animations for marquee effects, extended color palette with primary/secondary colors
- **ESLint**: Configured for React with recommended rules, ignores dist folder

### Responsive Design Pattern
The application implements a mobile-first approach with dedicated mobile components. Components check for mobile viewport (< 768px) and conditionally render appropriate versions (e.g., MaterialsSlideshow vs MaterialsSlideshowMobile).

### State Management
The application uses React's built-in state management with hooks. Key state patterns include:
- Mobile detection state
- Selected image/zone states for interactive components
- Form state management in contact components

### Performance Considerations
- Lazy loading for images (LazyImage component)
- Optimized 3D components (LaReunion3DOptimized)
- SEO component for meta tags management
- ScrollToTop component for route changes