# Payload CMS Website - Setup Guide

## Quick Start

1. **Install dependencies**
   ```bash
   npm install
   ```
   (Note: This project uses npm. pnpm is also supported if installed.)

2. **Configure environment**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` with your database credentials. (A default `.env` is already provided)

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Seed database** (optional)
   - Access admin at `http://localhost:3000/admin`
   - Create your first admin user
   - Click "Seed Database" link in admin panel

## Features Showcase

This website demonstrates all Payload CMS capabilities:

### ✅ Dynamic Page Builder
- Hero sections (high/medium/low impact)
- Content blocks with rich text
- Media blocks with images
- Call-to-action blocks
- Archive blocks for posts
- Form blocks

### ✅ Blog System
- Full blog with categories
- Author management
- Related posts
- SEO optimization
- Draft workflow

### ✅ Search
- Real-time search across content
- Filter by categories
- Pagination support

### ✅ Forms
- Dynamic form builder
- Form submissions tracking
- Email notifications

### ✅ SEO
- Meta tags control
- Open Graph support
- XML sitemaps
- Redirects management

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Run production build
- `npm run lint` - Run ESLint
- `npm test` - Run tests
- `npm run generate:types` - Generate TypeScript types

## Default Credentials

After seeding:
- Email: `demo-author@example.com`
- Password: `password`

## Support

For issues or questions:
- GitHub: https://github.com/LalitBS233/payload-cms
- Payload Docs: https://payloadcms.com/docs