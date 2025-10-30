# Ippei.dev Blog

A modern, performant blog built with Next.js 15, featuring MDX content, dark mode, search, and analytics.

## ✨ Features

- 📝 **MDX Content** - Write blog posts with Markdown and React components
- 🌓 **Dark Mode** - Seamless theme switching with next-themes
- 🔍 **Search** - Fast local search powered by kbar
- 💬 **Comments** - GitHub Discussions integration via Giscus
- 📊 **Analytics** - Umami and Google Analytics support
- 🏷️ **Tags** - Automatic tag extraction and filtering
- ⚡ **Performance** - Static generation with Next.js App Router
- 🎨 **Styling** - Tailwind CSS 4.0 with custom design
- 📱 **Responsive** - Mobile-first design
- 🧮 **Math** - LaTeX rendering with KaTeX
- 💅 **Code Highlighting** - Syntax highlighting with Prism
- 📖 **Reading Time** - Estimated reading time for posts
- 🔗 **SEO** - Structured data and Open Graph support

## 🛠️ Tech Stack

- **Framework:** Next.js 15.2.4 (App Router)
- **Language:** TypeScript 5.1.3
- **Styling:** Tailwind CSS 4.0.5
- **Content:** Contentlayer2 0.5.5 + MDX
- **UI Library:** React 19.0.0
- **Analytics:** Umami + Google Analytics
- **Comments:** Giscus (GitHub Discussions)
- **Search:** kbar
- **Code Quality:** ESLint, Prettier, Husky

## 📋 Prerequisites

- Node.js 18.x or higher
- Yarn 3.6.1 (specified in package.json)

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/ippei-shimizu/ippei-dev-blog.git
cd ippei-dev-blog
```

### 2. Install dependencies

```bash
yarn install
```

### 3. Set up environment variables

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Edit `.env` with your configuration:

```env
# Giscus Comments (required for comments feature)
NEXT_PUBLIC_GISCUS_REPO=your-username/your-repo
NEXT_PUBLIC_GISCUS_REPOSITORY_ID=your-repository-id
NEXT_PUBLIC_GISCUS_CATEGORY=General
NEXT_PUBLIC_GISCUS_CATEGORY_ID=your-category-id

# Umami Analytics (optional)
NEXT_UMAMI_ID=your-umami-website-id

# Newsletter (optional - choose one provider)
BUTTONDOWN_API_KEY=your-buttondown-api-key
```

### 4. Start development server

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view your blog.

## 📝 Content Management

### Creating Blog Posts

1. Create a new MDX file in `data/blog/`:

```bash
touch data/blog/my-new-post.mdx
```

2. Add frontmatter and content:

```mdx
---
title: 'My New Post'
date: '2024-01-01'
tags: ['nextjs', 'react', 'web-development']
draft: false
summary: 'A brief description of your post'
---

Your content here...
```

### Frontmatter Fields

- **Required:**
  - `title` - Post title
  - `date` - Publication date (YYYY-MM-DD)

- **Optional:**
  - `tags` - Array of tags
  - `draft` - Set to `true` to hide in production
  - `summary` - Post excerpt
  - `images` - Array of image URLs
  - `authors` - Array of author IDs
  - `lastmod` - Last modified date
  - `canonicalUrl` - Canonical URL for SEO

### Author Profiles

Edit author information in `data/authors/default.mdx`:

```mdx
---
name: Your Name
avatar: /static/images/avatar.png
occupation: Software Engineer
email: your@email.com
github: https://github.com/yourusername
twitter: https://twitter.com/yourusername
zenn: https://zenn.dev/yourusername
---

Your bio here...
```

### Tags

Tags are automatically extracted from blog posts and counted. The tag list is generated at build time in `app/tag-data.json`.

## ⚙️ Configuration

### Site Metadata

Edit `data/siteMetadata.js` to configure:

- Site title, description, and URL
- Author information
- Social media links
- Analytics (Umami, Google Analytics)
- Comments (Giscus)
- Newsletter provider
- Search configuration

### Next.js Configuration

`next.config.js` includes:

- Contentlayer integration
- Security headers (CSP)
- Image optimization settings
- Remote image patterns
- Bundle analyzer

### Content Configuration

`contentlayer.config.ts` defines:

- Content types (Blog, Authors)
- MDX processing pipeline
- Remark/Rehype plugins
- Tag counting logic
- Search index generation

## 🎨 Styling

This project uses Tailwind CSS 4.0. Customize styles in:

- `css/tailwind.css` - Global styles and Tailwind directives
- `css/prism.css` - Code highlighting theme
- Inline styles using Tailwind utility classes

## 📦 Available Scripts

| Command             | Description               |
| ------------------- | ------------------------- |
| `yarn dev`          | Start development server  |
| `yarn build`        | Build for production      |
| `yarn serve`        | Start production server   |
| `yarn lint`         | Lint and auto-fix code    |
| `yarn format`       | Format code with Prettier |
| `yarn format:check` | Check code formatting     |
| `yarn analyze`      | Analyze bundle size       |

## 📁 Project Structure

```
ippei-dev-blog/
├── app/                    # Next.js App Router
│   ├── blog/              # Blog pages
│   ├── tags/              # Tag filtering pages
│   ├── about/             # About page
│   ├── projects/          # Projects page
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── MDXComponents.tsx
│   └── social-icons/
├── data/                  # Content and configuration
│   ├── blog/             # Blog posts (MDX)
│   ├── authors/          # Author profiles (MDX)
│   ├── siteMetadata.js   # Site configuration
│   └── projectsData.ts   # Projects data
├── layouts/               # Layout components
│   ├── AuthorLayout.tsx
│   ├── PostLayout.tsx
│   └── ListLayout.tsx
├── public/
│   └── static/           # Static assets
│       └── images/       # Images
├── contentlayer.config.ts # Content configuration
├── next.config.js         # Next.js configuration
└── package.json          # Dependencies and scripts
```

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub

2. Import project to Vercel:
   - Go to [vercel.com](https://vercel.com)
   - Import your repository
   - Vercel auto-detects Next.js settings

3. Add environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_GISCUS_REPO`
   - `NEXT_PUBLIC_GISCUS_REPOSITORY_ID`
   - `NEXT_PUBLIC_GISCUS_CATEGORY`
   - `NEXT_PUBLIC_GISCUS_CATEGORY_ID`
   - `NEXT_UMAMI_ID` (optional)

4. Deploy!

### Environment Variables for Production

Ensure these are set in your deployment platform:

- `NEXT_PUBLIC_GISCUS_*` - For comments
- `NEXT_UMAMI_ID` - For Umami analytics
- Newsletter provider keys (if using newsletter feature)

## 🔧 Development

### Code Quality

- **Linting:** ESLint with TypeScript support
- **Formatting:** Prettier with Tailwind CSS plugin
- **Git Hooks:** Husky runs lint-staged on pre-commit
- **Type Checking:** TypeScript strict mode

### Adding New Features

1. Create components in `components/`
2. Add pages in `app/`
3. Use layouts in `layouts/`
4. Follow existing code style

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

Built with:

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Contentlayer](https://contentlayer.dev/)
- [Pliny](https://github.com/timlrx/pliny)

## 📧 Contact

- Website: [ippei.dev](https://ippei.dev)
- GitHub: [@ippei-shimizu](https://github.com/ippei-shimizu)
- Twitter: [@ippei_111](https://twitter.com/ippei_111)
- Email: ippei.shimizu.32@gmail.com
