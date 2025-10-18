# My Stack Template 🚀

A modern, production-ready Next.js starter template with Supabase authentication, shadcn/ui components, and TypeScript.

## ✨ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org) (App Router)
- **React:** [React 19](https://react.dev)
- **Language:** [TypeScript 5](https://www.typescriptlang.org)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com)
- **Database & Auth:** [Supabase](https://supabase.com)
- **Forms:** [React Hook Form](https://react-hook-form.com) + [Zod](https://zod.dev)
- **Icons:** [Lucide React](https://lucide.dev)
- **Build Tool:** [Turbopack](https://turbo.build/pack)

## 🎯 Features

- ✅ **Next.js 15** with App Router and Server Components
- ✅ **React 19** with latest features
- ✅ **Tailwind CSS 4** with CSS variables theming
- ✅ **Dark mode** support out of the box
- ✅ **Supabase** integration for authentication and database
- ✅ **shadcn/ui** components pre-configured
- ✅ **Type-safe** forms with React Hook Form and Zod validation
- ✅ **ESLint** configured with Next.js best practices
- ✅ **Path aliases** (`@/*`) for clean imports
- ✅ **Turbopack** for lightning-fast builds

## 📦 Project Structure

```
my-stack-template/
├── public/                 # Static assets
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── layout.tsx     # Root layout
│   │   ├── page.tsx       # Home page
│   │   └── globals.css    # Global styles
│   ├── components/
│   │   └── ui/            # shadcn/ui components
│   └── lib/
│       ├── utils.ts       # Utility functions
│       └── supabase/      # Supabase client utilities
│           ├── client.ts  # Client-side Supabase
│           ├── server.ts  # Server-side Supabase
│           └── middleware.ts # Auth middleware helper
├── .env.example           # Environment variables template
├── components.json        # shadcn/ui configuration
└── tsconfig.json         # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 20+ installed
- A Supabase account ([sign up free](https://supabase.com))

### 1. Clone and Install

```bash
# Clone this template (or use as template on GitHub)
git clone https://github.com/yourusername/my-stack-template.git
cd my-stack-template

# Install dependencies
npm install
```

### 2. Run Interactive Setup

```bash
# Run the setup script to configure Supabase
npm run setup
```

The setup script will:
- Guide you through creating a Supabase project (if needed)
- Prompt for your Supabase credentials
- Automatically create and configure `.env.local`
- Verify the connection

**OR manually configure:**
```bash
# Copy the example env file
cp .env.example .env.local

# Edit .env.local with your Supabase credentials
# Get these from: https://app.supabase.com/project/_/settings/api
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your app! 🎉

## 📝 Available Scripts

```bash
npm run setup        # Interactive setup wizard for Supabase configuration
npm run dev          # Start development server with Turbopack
npm run build        # Build for production with Turbopack
npm start            # Start production server
npm run lint         # Run ESLint to check for issues
npm run lint:fix     # Run ESLint and auto-fix issues
npm run type-check   # Run TypeScript compiler to check types
npm run clean        # Clean build artifacts and caches
```

## 🎨 Adding UI Components

This template uses [shadcn/ui](https://ui.shadcn.com). Add new components with:

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add dialog
# etc.
```

Components are added to `src/components/ui/` and can be customized freely.

## 🔐 Supabase Usage

### Client-Side (Client Components)

```tsx
'use client'

import { createClient } from '@/lib/supabase/client'

export default function MyComponent() {
  const supabase = createClient()
  
  // Use supabase client...
}
```

### Server-Side (Server Components, API Routes)

```tsx
import { createClient } from '@/lib/supabase/server'

export default async function MyPage() {
  const supabase = await createClient()
  
  // Use supabase client...
}
```

## 🎨 Customization

### Theme Colors

Edit color variables in `src/app/globals.css`:

```css
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  /* ... more colors */
}
```

### shadcn/ui Configuration

Modify `components.json` to customize the component library style and behavior.

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React 19 Documentation](https://react.dev)
- [Supabase Documentation](https://supabase.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 🚢 Deployment

### Deploy to Vercel

The easiest way to deploy:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/my-stack-template)

Or manually:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

**Don't forget to add your environment variables in the Vercel dashboard!**

### Other Platforms

This is a standard Next.js app and can be deployed to any platform that supports Node.js:
- [Netlify](https://www.netlify.com)
- [Railway](https://railway.app)
- [DigitalOcean](https://www.digitalocean.com/products/app-platform)

## 📄 License

MIT License - feel free to use this template for any project!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

**Built with ❤️ using Next.js 15, React 19, and Supabase**
