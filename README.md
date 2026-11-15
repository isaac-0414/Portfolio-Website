# My Portfolio Website

A modern personal portfolio website built with TypeScript, Vite, and vanilla HTML/CSS. Showcasing skills, projects, education, and contact information.

Visit online: [http://isaaczheng.com](http://isaaczheng.com)

## 🎯 Features

- **Modern Design**: Responsive layout that adapts to various screen sizes
- **TypeScript**: Static typing for improved code quality
- **Modular Architecture**: Clean code organization that's easy to maintain and extend
- **Smooth Animations**: Typewriter effect, auto-scroll, and transition animations
- **Email Functionality**: Integrated EmailJS for direct contact form submissions
- **Vite Build**: Fast dev server (HMR) and optimized, content-hashed production builds

## 📋 Page Structure

- **Home**: Landing page with name and tagline display
- **About**: Personal introduction and background information
- **Skills**: Technology stack and professional capabilities
- **Projects**: Representative work and case studies
- **Resume**: Education background and work experience
- **Contact**: Email form for direct communication

## 🚀 Getting Started

### Requirements
- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Portfolio-Website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables** (for email functionality)
   ```bash
   # Create .env file (Vite only exposes vars prefixed with VITE_)
   echo "VITE_EMAILJS_PUBLIC_KEY=your_public_key" > .env
   echo "VITE_EMAILJS_SERVICE_ID=your_service_id" >> .env
   echo "VITE_EMAILJS_TEMPLATE_ID=your_template_id" >> .env
   ```

### Development

Start the Vite dev server with hot reload:
```bash
npm run dev
```

Visit `http://localhost:5173` to view the website

### Production Build

Build an optimized production version:
```bash
npm run build
```

Build output will be in the `dist/` directory (JS/CSS are content-hashed into `dist/assets/`). Preview the production build locally with `npm run preview`.

### Deploying to AWS S3

Upload hashed assets with long-lived caching and `index.html` with no caching so new deploys are picked up immediately:
```bash
aws s3 sync dist/ s3://<your-bucket> --exclude index.html \
  --cache-control "public, max-age=31536000, immutable"
aws s3 cp dist/index.html s3://<your-bucket>/index.html \
  --cache-control "no-cache"
# If fronted by CloudFront, invalidate the HTML:
# aws cloudfront create-invalidation --distribution-id <id> --paths "/index.html"
```

## 📁 Project Structure

```
src/
├── app.ts                    # Main application entry point
├── background/              # Background-related functionality
│   ├── background.ts       # Background initialization
│   └── resize.ts           # Window resize events
├── components/             # Reusable components
│   ├── modal.ts           # Modal component
│   ├── moreAboutMe.ts     # About me extended info
│   └── preloader.ts       # Loading animation
├── global/                 # Global state and elements
│   ├── elements.ts        # DOM element references
│   ├── globalStates.ts    # Global state management
│   ├── text.ts            # Page content text
│   └── window_size.ts     # Window size and orientation
├── pages/                  # Page modules
│   ├── about.ts          # About page
│   ├── contact.ts        # Contact page
│   ├── projects.ts       # Projects page
│   ├── resume.ts         # Resume page
│   └── skills.ts         # Skills page
└── util/                   # Utility functions
    ├── autoScroll.ts      # Auto-scroll functionality
    ├── clear.ts           # Clear element content
    ├── console2.ts        # Console simulation
    ├── email.ts           # Email sending functionality
    ├── initialize.ts      # Initialization function
    ├── startPortfolio.ts  # Portfolio startup
    └── typewriter.ts      # Typewriter effect

css/
├── main.css               # Main stylesheet (imported by src/app.ts)
├── normalize.css          # Normalize styles
├── components/            # Component styles
├── layout/                # Layout styles
└── pages/                 # Page styles

public/                    # Copied to dist/ as-is (not hashed)
├── images/                # Project/screenshot images
├── favicon.ico
└── resume.pdf

index.html                 # HTML entry point (Vite root)
vite.config.ts             # Vite configuration
```

## 🛠 Tech Stack

| Technology | Purpose |
|-----------|---------|
| TypeScript | Programming language |
| HTML5 | Markup language |
| CSS3 | Styling |
| Vite | Build tool & dev server |
| EmailJS | Email service |
| Boxicons | Icon library (bundled locally) |

## 📦 Dependencies

### Dev Dependencies
- `vite` ^6.0.7 - Build tool & dev server
- `typescript` ^5.7.2 - TypeScript compiler

### Production Dependencies
- `@emailjs/browser` ^3.11.0 - Email service
- `boxicons` ^2.1.4 - Icon library (bundled locally, no CDN)

## ⚙ Configuration Files

- **tsconfig.json** - TypeScript compilation configuration
- **vite.config.ts** - Vite build & dev server config

## 🔑 Key Features

### Window Size Management
Automatically detects and manages window size, handling responsive layout orientation changes.

### Page Navigation
Quick navigation to different pages via menu buttons with smooth transition animations.

### Typewriter Effect
Animated typewriter text effect displayed on the home page.

### Auto-Scroll
Page automatically scrolls to the corresponding section when navigation buttons are clicked.

### Email Functionality
Uses EmailJS service to send contact form messages.

## 🚦 Available Scripts

```bash
npm run dev        # Start Vite dev server (http://localhost:5173)
npm run build      # Build production version into dist/
npm run preview    # Preview the production build locally
npm run typecheck  # Type-check with tsc --noEmit
```

## 🔐 Environment Variables

To use the email functionality, configure the following environment variables in a `.env` file:

```
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
```

Sign up for a free account at [EmailJS](https://www.emailjs.com/) to get these IDs.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Development Guidelines

1. **Code Style**: Follow TypeScript best practices
2. **Components**: Create reusable function modules
3. **Styling**: Use modular CSS organization
4. **Testing**: Consider adding unit and integration tests
5. **Performance**: Leverage Vite code splitting and lazy loading

## 🐛 Troubleshooting

### Dev server fails to start
```bash
# Remove node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Email functionality not working
- Check `.env` file for correct environment variables
- Verify EmailJS account credentials
- Check browser console for error messages

### Build fails
```bash
# Clean previous build
rm -rf dist/
# Rebuild
npm run build
```
