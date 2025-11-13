# Hitviper Inc - Website

Professional digital marketing and paid media consulting website built with React, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- Git installed
- GitHub account
- Vercel account (free)

### Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000)

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
hitviper-website/
├── src/
│   ├── components/          # React components
│   │   ├── ui/             # Reusable UI components
│   │   ├── Contact.tsx     # Contact form section
│   │   ├── Footer.tsx      # Footer component
│   │   ├── Header.tsx      # Navigation header
│   │   ├── Hero.tsx        # Hero section
│   │   ├── Results.tsx     # Results/stats section
│   │   ├── Services.tsx    # Services showcase
│   │   └── Testimonials.tsx # Client testimonials
│   ├── styles/
│   │   └── globals.css     # Global styles & Tailwind
│   ├── App.tsx             # Main app component
│   └── main.tsx            # React entry point
├── public/
│   └── assets/             # Static assets (logos, images)
├── index.html              # HTML entry point
├── package.json            # Dependencies
├── vite.config.ts          # Vite configuration
└── tsconfig.json           # TypeScript config
```

## 🌐 Deploying to Vercel

### Step 1: Prepare Your Repository

1. **Initialize Git (if not already done):**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Create GitHub repository:**
   - Go to [github.com/new](https://github.com/new)
   - Name it `hitviper-website`
   - Don't initialize with README (you already have one)
   - Click "Create repository"

3. **Push to GitHub:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/hitviper-website.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Deploy to Vercel

1. **Sign up for Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Sign Up" → "Continue with GitHub"
   - Authorize Vercel to access your GitHub

2. **Import your project:**
   - Click "Add New..." → "Project"
   - Find and select `hitviper-website` repository
   - Click "Import"

3. **Configure project:**
   - **Framework Preset:** Vite
   - **Root Directory:** `./` (leave as is)
   - **Build Command:** `npm run build` (auto-detected)
   - **Output Directory:** `dist` (auto-detected)
   - Click "Deploy"

4. **Wait for deployment:**
   - Vercel will build and deploy (takes 1-2 minutes)
   - You'll get a live URL like `hitviper-website.vercel.app`

### Step 3: Connect Custom Domain (hitviper.com)

1. **Add domain in Vercel:**
   - Go to your project dashboard
   - Click "Settings" → "Domains"
   - Type `hitviper.com` and click "Add"
   - Also add `www.hitviper.com`

2. **Configure DNS at your domain registrar:**
   
   Vercel will show you DNS records. Configure them at your domain registrar (GoDaddy, Namecheap, Google Domains, etc.):

   **For hitviper.com (root domain):**
   - Type: `A`
   - Name: `@`
   - Value: `76.76.21.21`
   - TTL: `3600` (or default)

   **For www.hitviper.com:**
   - Type: `CNAME`
   - Name: `www`
   - Value: `cname.vercel-dns.com`
   - TTL: `3600` (or default)

3. **Wait for DNS propagation:**
   - Usually takes 5-60 minutes
   - Can take up to 24 hours in rare cases
   - Check status in Vercel dashboard

4. **SSL Certificate:**
   - Vercel automatically provisions SSL certificate
   - Your site will be accessible via `https://hitviper.com`

## 📦 Important: Asset Migration

**BEFORE DEPLOYING**, you need to handle the Figma assets:

1. **Download your Figma assets:**
   - The logo: `31160b505b4d44116a2444dd7da50065610cdc0b.png`
   - The hero image: `e266f58e10eabc41229f6d3f41b42ac72189fc48.png`

2. **Create public assets folder:**
   ```bash
   mkdir -p public/assets
   ```

3. **Move assets:**
   - Place logo as: `public/assets/31160b505b4d44116a2444dd7da50065610cdc0b.png`
   - Place hero as: `public/assets/e266f58e10eabc41229f6d3f41b42ac72189fc48.png`

4. **Optional - use cleaner names:**
   - Rename to `public/assets/logo.png` and `public/assets/hero.png`
   - Update imports in components to use new names

## 🔄 Continuous Deployment

Once connected to Vercel:
- Every push to `main` branch → automatic deployment to production
- Pull requests → automatic preview deployments
- Rollback to previous versions anytime in Vercel dashboard

## 📊 Performance Optimizations

Built-in optimizations:
- ✅ Lazy loading for below-the-fold components
- ✅ Image optimization (reduced sizes for Unsplash images)
- ✅ Code splitting with React.lazy()
- ✅ Component memoization (React.memo)
- ✅ Disabled animations on mobile for better performance
- ✅ Preconnect to external domains
- ✅ Loading skeletons for better UX

Expected load times:
- Desktop (fast connection): 1.5-2.5s
- Desktop (3G): 3-4s
- Mobile (4G): 2-3s
- Mobile (3G): 3.5-4s

## 🛠️ Tech Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v4
- **UI Components:** Radix UI (accessible, unstyled primitives)
- **Icons:** Lucide React
- **Forms:** React Hook Form
- **Notifications:** Sonner

## 📝 Environment Variables

If you need to add API keys or environment variables:

1. Create `.env.local` file:
   ```env
   VITE_API_KEY=your_api_key_here
   ```

2. Add to Vercel:
   - Project Settings → Environment Variables
   - Add variable name and value
   - Redeploy for changes to take effect

## 🐛 Troubleshooting

### Build fails on Vercel
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Try building locally first: `npm run build`

### Images not loading
- Ensure assets are in `public/assets/` folder
- Check file names match imports exactly
- Verify Unsplash URLs are correct

### Custom domain not working
- Wait 30-60 minutes for DNS propagation
- Verify DNS records at registrar
- Check domain status in Vercel dashboard
- Use [DNS checker tool](https://dnschecker.org) to verify propagation

### Slow loading
- Check Vercel Analytics for bottlenecks
- Optimize images further if needed
- Consider upgrading Vercel plan for better performance

## 📞 Support

For deployment issues:
- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
- Vercel Community: [github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)

## 📄 License

Copyright © 2025 Hitviper Inc. All rights reserved.
