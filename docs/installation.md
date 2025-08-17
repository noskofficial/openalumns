# Installation Guide

This guide will walk you through setting up the Open Alumns Portal theme for your institution.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18.0.0 or higher
- **npm** 8.0.0 or higher (or **yarn** 1.22.0 or higher)
- **Git** for version control

### Checking Your Environment

Verify your installations:

```bash
node --version
npm --version
git --version
```

## Quick Installation

### 1. Clone the Repository

```bash
git clone https://github.com/noskofficial/openalumns.git
cd open-alumns-portal
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Your Site

Edit the `site.config.yml` file to customize your portal:

```yaml
site:
  name: "Your Institution Alumni Portal"
  description: "Connect with your institution's alumni network"
  url: "https://your-domain.com"
  logo: "/your-logo.svg"
  favicon: "/your-favicon.ico"
  hero_image: "/your-hero-image.jpg"

organization:
  name: "Your Institution Name"
  website: "https://your-institution.edu"
  email: "alumni@your-institution.edu"
  address: "Your Institution Address"
```

### 4. Start Development Server

```bash
npm run dev
```

Your portal will be available at `http://localhost:4321`

## Customization

### Branding

1. **Logo**: Replace `/public/logo.svg` with your institution's logo
2. **Favicon**: Replace `/public/favicon.ico` with your favicon
3. **Hero Image**: Replace `/public/hero-bg.jpg` with your hero image
4. **Colors**: Update the color scheme in `site.config.yml`

### Content

1. **Alumni Profiles**: Add alumni data in `src/content/alumni/`
2. **Events**: Add events in `src/content/events/`
3. **Blog Posts**: Add blog content in `src/content/blog/`

### Navigation

Customize the navigation menu in `site.config.yml`:

```yaml
navigation:
  - label: "Home"
    url: "/"
    icon: "home"
  - label: "Alumni Directory"
    url: "/alumni"
    mega_menu: true
    submenu:
      - label: "By Year"
        url: "/alumni/years"
      - label: "By Faculty"
        url: "/alumni/faculties"
```

## Building for Production

### 1. Build the Project

```bash
npm run build
```

This creates a `dist/` folder with your static site.

### 2. Preview Production Build

```bash
npm run preview
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically

### Netlify

1. Build your project: `npm run build`
2. Upload the `dist/` folder to Netlify

### Other Platforms

The theme generates static files, so it works with any static hosting service.

## Troubleshooting

### Common Issues

#### Port Already in Use

If port 4321 is busy:

```bash
npm run dev -- --port 3000
```

#### Build Errors

Clear cache and reinstall:

```bash
rm -rf node_modules
npm install
npm run build
```

#### Configuration Issues

Check your `site.config.yml` syntax. Use a YAML validator if needed.

### Getting Help

- Check the [GitHub Issues](https://github.com/noskofficial/openalumns/issues)
- Join our [Discussions](https://github.com/noskofficial/openalumns.git/discussions)
- Contact us at info@nosk.org.np

## Next Steps

After installation:

1. **Add Content**: Populate with your alumni data
2. **Customize Design**: Adjust colors, fonts, and layout
3. **Configure SEO**: Update meta tags and descriptions
4. **Set Up Analytics**: Add tracking codes
5. **Test**: Ensure everything works on different devices

## Support

For additional support:

- **Documentation**: [Main README](../README.md)
- **Configuration**: [Configuration Guide](configuration.md)
- **Customization**: [Customization Guide](customization.md)
- **Community**: [GitHub Discussions](https://github.com/noskofficial/openalumns.git/discussions)

---

**Happy building! 🎉**

Your alumni portal is now ready to connect graduates and build lasting relationships.
