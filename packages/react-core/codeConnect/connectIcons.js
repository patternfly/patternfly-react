/* eslint-disable no-console */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

// Get the directory name properly in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create a require function to load JSON
const require = createRequire(import.meta.url);

// Path to project root
const PROJECT_ROOT = path.resolve(__dirname, '..');

// Load the icon data
const iconsData = require('./iconsData.json');

// Function to sanitize component names
const sanitizeComponentName = (name) => {
  // Skip sanitization for size-related icons - these are not actual icons
  if (
    name.startsWith('Icon Size=') ||
    name.startsWith('Font size -') ||
    name.startsWith('Body -') ||
    name.startsWith('Heading -') ||
    name.startsWith('Standalone -')
  ) {
    return null;
  }

  // Replace spaces, equals signs and hyphens with nothing
  let sanitized = name
    .replace(/[=\s-]+/g, '')
    // Replace parentheses with descriptive text
    .replace(/\(([^)]+)\)/g, '$1')
    // Ensure PascalCase for the component name
    .replace(/(?:^|[-_\s])(\w)/g, (_, c) => (c ? c.toUpperCase() : ''));

  // Ensure the name ends with 'Icon' if it doesn't already
  if (!sanitized.endsWith('Icon')) {
    sanitized += 'Icon';
  }

  return sanitized;
};

// Function to filter out size-related icons
const filterIcons = () =>
  iconsData.filter(
    (icon) =>
      // Filter out size-related entries which aren't actual icons
      !(
        icon.iconName.startsWith('Icon Size=') ||
        icon.iconName.startsWith('Font size -') ||
        icon.iconName.startsWith('Body -') ||
        icon.iconName.startsWith('Heading -') ||
        icon.iconName.startsWith('Standalone -')
      )
  );

// Function to ensure the icon generation is complete
const validateIconComponents = () => {
  console.log('Validating icon components...');

  const iconsDir = path.resolve(__dirname, 'icons');
  if (!fs.existsSync(iconsDir)) {
    console.error('Error: icons directory not found at', iconsDir);
    console.log('Please run the icon generator script first.');
    process.exit(1);
  }

  // Filter out non-icon entries
  const filteredIcons = filterIcons();

  // Check if all icon components exist
  for (const icon of filteredIcons) {
    const sanitizedName = sanitizeComponentName(icon.iconName);

    // Skip non-icon entries
    if (!sanitizedName) {
      continue;
    }

    // Update reactName with sanitized name
    icon.reactName = sanitizedName;

    const iconPath = path.join(iconsDir, `${icon.fileName}.tsx`);
    if (!fs.existsSync(iconPath)) {
      console.error(`Error: Icon component ${icon.fileName}.tsx not found`);
      console.log('Please run the icon generator script first.');
      process.exit(1);
    }
  }

  console.log('All icon components validated successfully!');
};

// Function to update or create figma.config.json
const updateFigmaConfig = () => {
  console.log('Updating figma.config.json...');

  const configPath = path.resolve(PROJECT_ROOT, 'figma.config.json');

  // Default config structure
  let config = {
    codeConnect: {
      parser: 'react',
      label: 'PF-React',
      include: [
        'codeConnect/components/**/*.tsx',
        'codeConnect/layouts/**/*.tsx',
        'codeConnect/icons/**/*.tsx',
        'codeConnect/IconFigmaConnect.tsx',
        'src/components/**/*.tsx'
      ],
      importPaths: {
        'src/components/**/*': '@patternfly/react-core/dist/js/components',
        'src/layouts/**/*': '@patternfly/react-core/dist/js/layouts',
        'src/icons/**/*': '@patternfly/react-core/dist/js/icons',
        'codeConnect/icons/**/*': './icons'
      },
      paths: {
        '@patternfly/react-core/dist/js/components': ['src/components'],
        '@patternfly/react-core/dist/js/layouts': ['src/layouts'],
        '@patternfly/react-core/dist/js/icons': ['src/icons'],
        components: ['codeConnect/components'],
        icons: ['codeConnect/icons'],
        images: ['codeConnect/images'],
        layouts: ['codeConnect/layouts']
      },
      aliases: {
        '@patternfly/react-core': '.'
      },
      options: {
        instanceSwapper: {
          enabled: true
        },
        development: {
          enabled: true,
          verbose: true
        },
        production: {
          enabled: false
        }
      }
    }
  };

  // If config exists, try to read and update it
  if (fs.existsSync(configPath)) {
    try {
      const existingConfig = JSON.parse(fs.readFileSync(configPath, 'utf8'));

      // Merge with existing config
      config = {
        ...existingConfig,
        codeConnect: {
          ...existingConfig.codeConnect,
          include: Array.from(new Set([...(existingConfig.codeConnect?.include || []), ...config.codeConnect.include])),
          options: {
            ...(existingConfig.codeConnect?.options || {}),
            instanceSwapper: {
              ...(existingConfig.codeConnect?.options?.instanceSwapper || {}),
              enabled: true
            }
          }
        }
      };

      console.log('Updated existing figma.config.json');
    } catch (error) {
      console.warn('Could not parse existing figma.config.json:', error.message);
      console.log('Creating new config file');
    }
  } else {
    console.log('Creating new figma.config.json file');
  }

  // Write the config file
  fs.writeFileSync(configPath, JSON.stringify(config, null, 2));

  console.log('Successfully updated figma.config.json!');
};

// Function to create figma.json metadata file (needed by some Figma integrations)
const createFigmaMetadata = () => {
  console.log('Creating Figma metadata file...');

  const metadataPath = path.resolve(PROJECT_ROOT, 'figma.json');

  const metadata = {
    name: 'PatternFly Icons',
    description: 'PatternFly icon components with Figma integration',
    figmaFileUrl:
      'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/branch/H3LonYnwH26v9zNEa2SXFk/PatternFly-6%3A-Components',
    components: [
      {
        name: 'Icon',
        description: 'PatternFly Icon component with instance swapper for different icons',
        url: 'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/branch/H3LonYnwH26v9zNEa2SXFk/PatternFly-6%3A-Components?m=auto&node-id=198-1573'
      }
    ]
  };

  fs.writeFileSync(metadataPath, JSON.stringify(metadata, null, 2));

  console.log('Successfully created figma.json metadata file!');
};

// Main function
const setupFigmaConnection = () => {
  console.log('Setting up manual connection for icons to Figma...');

  try {
    // Step 1: Validate that icon components exist
    validateIconComponents();

    // Step 2: Update figma.config.json
    updateFigmaConfig();

    // Step 3: Create figma.json metadata file
    createFigmaMetadata();

    console.log('\nSetup complete!');
    console.log('\nNext steps:');
    console.log('1. Open your Figma file at:');
    console.log(
      '   https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/branch/H3LonYnwH26v9zNEa2SXFk/PatternFly-6%3A-Components'
    );
    console.log('2. Install the Figma Code Connect plugin if not already installed');
    console.log('3. In Figma, select a frame and look for "PF-React" in the Plugins menu');
    console.log('4. Use the Icon component with instance swapper to add icons to your design');
  } catch (error) {
    console.error('Error setting up Figma connection:', error);
    process.exit(1);
  }
};

// Run the setup script
setupFigmaConnection();
