# 🚀 Abdullah Al Abid - Portfolio Website

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. This portfolio showcases professional experience, skills, projects, and provides an elegant way to connect with potential employers and clients.

![Portfolio Preview](https://img.shields.io/badge/Portfolio-Live-brightgreen)
![Next.js](https://img.shields.io/badge/Next.js-15.3.4-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC)

## ✨ Features

- **🎨 Modern Design**: Clean, professional interface with smooth animations
- **📱 Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **🌙 Dark Mode**: Automatic dark/light theme support
- **⚡ Performance**: Built with Next.js 15 and Turbopack for lightning-fast development
- **🎭 Animations**: Smooth transitions using Framer Motion
- **📧 Contact Form**: Integrated contact form with email functionality
- **🔍 SEO Optimized**: Built-in SEO optimization for better search engine visibility
- **♿ Accessibility**: WCAG compliant and accessible design
- **🎯 Interactive Elements**: Animated dock navigation and interactive components

## 🛠️ Tech Stack

### Frontend

- **Framework**: Next.js 15.3.4 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4
- **Animations**: Framer Motion 12.19.2
- **Icons**: Lucide React 0.525.0
- **UI Components**: Radix UI primitives

### Development Tools

- **Font Optimization**: Next.js font optimization with Inter & Outfit
- **Linting**: ESLint with Next.js configuration
- **Build Tool**: Turbopack (Next.js 15)
- **Package Manager**: npm

### Key Libraries

- **Email Service**: Resend 4.6.0
- **Styling Utilities**:
  - `clsx` for conditional classes
  - `tailwind-merge` for class merging
  - `class-variance-authority` for component variants
- **Animations**: `tailwindcss-animate` for CSS animations

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed on your machine
- npm, yarn, pnpm, or bun package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Fill in your environment variables:

   ```env
   RESEND_API_KEY=your_resend_api_key_here
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see your portfolio.

## 🎯 Usage

### Customizing Your Portfolio

1. **Personal Information**: Update `src/config/portfolio.config.ts` with your details
2. **Styling**: Modify colors and themes in `src/app/globals.css` and `tailwind.config.js`
3. **Content**: Update individual page components in `src/app/` directories
4. **Projects**: Add your projects in the portfolio configuration
5. **Skills**: Update your skills and technologies in the config file

### Project Structure

```
porfolio/
├── public/                 # Static assets
│   ├── portfolioLogo.png  # Your logo
│   └── ...                # Other static files
├── src/
│   ├── app/               # Next.js 15 App Router pages
│   │   ├── about/         # About page
│   │   ├── contact/       # Contact page
│   │   ├── education/     # Education page
│   │   ├── projects/      # Projects page
│   │   ├── skills/        # Skills page
│   │   └── more/          # Additional content
│   ├── components/        # Reusable components
│   │   ├── animation/     # Animation components
│   │   └── ui/           # UI components
│   ├── config/           # Configuration files
│   └── lib/              # Utility functions
├── tailwind.config.js    # Tailwind configuration
└── next.config.ts        # Next.js configuration
```

## 📦 Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality

## 🎨 Customization

### Colors & Themes

The portfolio uses a professional color scheme defined in `globals.css`:

- **Primary Colors**: Professional blues and grays
- **Background**: Smooth gradients for visual appeal
- **Dark Mode**: Automatic theme switching support

### Fonts

- **Inter**: Used for body text and descriptions (professional, readable)
- **Outfit**: Used for headings and titles (modern, bold)

### Animations

- **Framer Motion**: Smooth page transitions and micro-interactions
- **CSS Animations**: Custom keyframes for text rotation and other effects

## 🌐 Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Set up environment variables in Vercel dashboard
4. Deploy with automatic builds on every push

### Other Platforms

- **Netlify**: Supports Next.js static exports
- **Railway**: Full-stack deployment
- **Digital Ocean**: App platform deployment

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Abdullah Al Abid**

- 📧 Email: abdullah.abid.se@gmail.com
- 💼 LinkedIn: [linkedin.com/in/alabid](https://www.linkedin.com/in/alabid/)
- 🐙 GitHub: [github.com/abid0-07](https://github.com/abid0-07)
- 🐦 Twitter: [@abid_0306](https://x.com/abid_0306)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework used
- [Tailwind CSS](https://tailwindcss.com/) - For styling
- [Framer Motion](https://www.framer.com/motion/) - For animations
- [Radix UI](https://www.radix-ui.com/) - For accessible components
- [Lucide](https://lucide.dev/) - For beautiful icons

---

⭐ If you found this portfolio helpful, please give it a star!

## 📈 Performance

This portfolio is optimized for:

- **Core Web Vitals**: Excellent Lighthouse scores
- **SEO**: Meta tags and structured data
- **Accessibility**: WCAG 2.1 AA compliance
- **Performance**: Code splitting and lazy loading

Built with ❤️ using modern web technologies.
