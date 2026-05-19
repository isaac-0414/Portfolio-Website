# Isaac's Portfolio Website

A modern personal portfolio website built with TypeScript, Webpack, and vanilla HTML/CSS. Showcasing skills, projects, education, and contact information.

Visit online: [http://isaaczheng.com](http://isaaczheng.com)

## 🎯 Features

- **Modern Design**: Responsive layout that adapts to various screen sizes
- **TypeScript**: Static typing for improved code quality
- **Modular Architecture**: Clean code organization that's easy to maintain and extend
- **Smooth Animations**: Typewriter effect, auto-scroll, and transition animations
- **Email Functionality**: Integrated EmailJS for direct contact form submissions
- **Webpack Build**: Configured for both development and production environments

## 📋 Page Structure

- **Home**: Landing page with name and tagline display
- **About**: Personal introduction and background information
- **Skills**: Technology stack and professional capabilities
- **Projects**: Representative work and case studies
- **Resume**: Education background and work experience
- **Contact**: Email form for direct communication

## 🚀 Getting Started

### Requirements
- Node.js (version 14 or higher)
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
   # Create .env file
   echo "EMAILJS_SERVICE_ID=your_service_id" > .env
   echo "EMAILJS_TEMPLATE_ID=your_template_id" >> .env
   echo "EMAILJS_PUBLIC_KEY=your_public_key" >> .env
   ```

### Development

Start the development server with hot reload:
```bash
npm start
```

Visit `http://localhost:8080` to view the website

### Production Build

Build an optimized production version:
```bash
npm run build
```

Build output will be in the `dist/` directory

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
├── main.css               # Main stylesheet
├── normalize.css          # Normalize styles
├── components/            # Component styles
├── layout/                # Layout styles
└── pages/                 # Page styles

index.html                 # HTML entry point
```

## 🛠 Tech Stack

| Technology | Purpose |
|-----------|---------|
| TypeScript | Programming language |
| HTML5 | Markup language |
| CSS3 | Styling |
| Webpack | Module bundler |
| Webpack Dev Server | Development server |
| ts-loader | TypeScript loader |
| EmailJS | Email service |
| Boxicons | Icon library |

## 📦 Dependencies

### Dev Dependencies
- `webpack` ^5.75.0 - Module bundler
- `typescript` ^4.9.5 - TypeScript compiler
- `webpack-dev-server` ^4.11.1 - Development server
- `ts-loader` ^9.4.2 - TypeScript loader
- `clean-webpack-plugin` ^4.0.0 - Clean output directory

### Production Dependencies
- `@emailjs/browser` ^3.11.0 - Email service
- `dotenv` ^16.0.3 - Environment variables

## ⚙ Configuration Files

- **tsconfig.json** - TypeScript compilation configuration
- **webpack.config.js** - Development environment Webpack config
- **webpack.config.prod.js** - Production environment Webpack config

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
npm start        # Start dev server (http://localhost:8080)
npm run build    # Build production version
npm test         # Run tests (not configured)
```

## 🔐 Environment Variables

To use the email functionality, configure the following environment variables in a `.env` file:

```
EMAILJS_SERVICE_ID=your_emailjs_service_id
EMAILJS_TEMPLATE_ID=your_emailjs_template_id
EMAILJS_PUBLIC_KEY=your_emailjs_public_key
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
5. **Performance**: Leverage Webpack code splitting and lazy loading

## 🐛 Troubleshooting

### Dev server fails to start
```bash
# Remove node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm start
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

## 📄 License

ISC License

## 👤 Author

Isaac Zheng

---

For questions or suggestions, feel free to open an Issue or Pull Request!
