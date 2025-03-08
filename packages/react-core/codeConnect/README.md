# PatternFly Icon System with Figma Code Connect

This repository contains the PatternFly icon system with Figma Code Connect integration.

## Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

```bash
npm install
```

### Generate Icons

To generate all icon components and Figma connections:

```bash
npm run generate-icons
```

### Development

Start the development server:

```bash
npm run dev
```

The Figma connections will be automatically enabled in development mode.

### Production Build

Build for production:

```bash
npm run build
```

Figma connections are automatically excluded from production builds.

## How It Works

### Icon Component

The main `Icon` component serves as a wrapper for SVG icons with various size, status, and styling options.

### Figma Integration

The system uses Figma Code Connect to link components to their Figma designs:

1. **Instance Swapper**: Allows designers to swap between different icons in Figma
2. **Property Controls**: Provides controls for size, status, and other props
3. **Live Preview**: Shows changes in real-time as properties are adjusted

### File Structure

- `/components/Icon` - Contains the Icon wrapper and Figma connection
- `/components/icons` - Contains individual icon components
- `generateIcons.mjs` - Script to generate the entire system

## Documentation

For more detailed documentation, see:

- [DEVELOPMENT.md](./DEVELOPMENT.md) - Developer documentation
- [PatternFly Documentation](https://www.patternfly.org/v4/components/icon)

## License

This project is licensed under the MIT License - see the LICENSE file for details.