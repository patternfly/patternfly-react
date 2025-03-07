/* eslint-disable no-console */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import fetchIcons from './fetchIcons.mjs';

// Get the directory name properly in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to the IconWrapper.figma.tsx file
const ICON_WRAPPER_FIGMA_PATH = path.resolve(__dirname, 'IconWrapper.figma.tsx');

// Function to generate icon components
const generateIconComponents = (iconsData) => {
  console.log('Generating icon components...');

  const iconsDir = path.resolve(__dirname, 'icons');

  // Create the icons directory if it doesn't exist
  if (!fs.existsSync(iconsDir)) {
    fs.mkdirSync(iconsDir, { recursive: true });
  }

  // Generate each icon component
  iconsData.forEach((icon) => {
    const { iconName, fileName, reactName } = icon;

    // Template for the icon component
    const iconComponent = `
import * as React from 'react';
import { IconWrapper } from '../IconWrapper';

/**
 * ${reactName} - ${iconName} icon component
 */
export const ${reactName} = (props) => (
  <IconWrapper {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      {/* SVG content for ${iconName} */}
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
    </svg>
  </IconWrapper>
);

${reactName}.displayName = '${reactName}';

export default ${reactName};
`;

    // Write the icon component to file
    fs.writeFileSync(path.join(iconsDir, `${fileName}.tsx`), iconComponent);
    console.log(`✓ Generated: ${fileName}.tsx`);
  });

  // Create an index.ts file to export all icons
  const indexContent = iconsData.map((icon) => `export { ${icon.reactName} } from './${icon.fileName}';`).join('\n');

  fs.writeFileSync(path.join(iconsDir, 'index.ts'), indexContent);
  console.log('✓ Generated: icons/index.ts');
};

// Function to generate IconWrapper.figma.tsx file
const generateIconWrapperFigma = (iconsData) => {
  console.log('Generating IconWrapper.figma.tsx...');

  // Create the file content
  const fileContent = `import React from "react";
import { IconWrapper } from "./IconWrapper";
import figma from "@figma/code-connect";

// Import all icons from an index file
import * as Icons from './icons';

/**
 * -- This file connects the IconWrapper component to Figma --
 * Uses instance swapper to allow selecting different icons
 */

figma.connect(
  IconWrapper,
  "https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/branch/H3LonYnwH26v9zNEa2SXFk/PatternFly-6%3A-Components?m=auto&node-id=198-1573",
  {
    props: {
      icon: figma.instance("🖼️ Icon", {
        // START_ICON_INSTANCES
${iconsData.map((icon) => `        '${icon.iconName}': <Icons.${icon.reactName} />`).join(',\n')}
        // END_ICON_INSTANCES
      }),
      iconSize: figma.enum("Icon Size", {
        "Standalone - Small": "standalone---small",
        "Standalone - Medium": "standalone---medium",
        "Standalone - Large": "standalone---large",
        "Standalone - XL": "standalone---xl",
        "Standalone -2XL": "standalone--2xl",
        "Standalone - 3XL": "standalone---3xl",
        "Body - Small": "body---small",
        "Body - Default": "body---default",
        "Body - Large": "body---large",
        "Heading - H1": "heading---h1",
        "Heading - H2": "heading---h2",
        "Heading - H3": "heading---h3",
        "Heading - H4": "heading---h4",
        "Heading - H5": "heading---h5",
        "Heading - H6": "heading---h6",
        "Font size - XS": "font-size---xs",
        "Font size - Sm": "font-size---sm",
        "Font size - Med": "font-size---med",
        "Font size - Lg": "font-size---lg",
        "Font size - XL": "font-size---xl",
        "Font size - 2XL": "font-size---2xl",
        "Font size - 3xl": "font-size---3xl",
        "Font size - 4xl": "font-size---4xl",
      }),
    },
    example: (props) => <IconWrapper {...props} />,
  },
);
`;

  // Write the file
  fs.writeFileSync(ICON_WRAPPER_FIGMA_PATH, fileContent);
  console.log(`✓ Generated: ${ICON_WRAPPER_FIGMA_PATH}`);
};

// Generate Icons.figma.tsx file for individual icon connections (optional)
const generateIconsFigma = (iconsData) => {
  console.log('Generating Icons.figma.tsx for individual icon connections...');

  let fileContent = `import React from 'react';
import figma from '@figma/code-connect';
`;

  // Add imports
  iconsData.forEach(({ reactName }) => {
    fileContent += `import { ${reactName} } from './icons';\n`;
  });

  // Add connections
  iconsData.forEach(({ reactName, url }) => {
    fileContent += `
figma.connect(
  ${reactName},
  '${url}',
  {
    example: () => <${reactName} />
  }
);
`;
  });

  // Write the file
  fs.writeFileSync(path.resolve(__dirname, 'Icons.figma.tsx'), fileContent.trim());
  console.log('✓ Generated: Icons.figma.tsx');
};

// Main function to generate icons from Figma
async function generateIcons() {
  try {
    // Option 1: Fetch icons from Figma API
    if (process.argv.includes('--fetch')) {
      console.log('Fetching icons from Figma API...');
      const { iconsData } = await fetchIcons();

      generateIconComponents(iconsData);
      generateIconWrapperFigma(iconsData);

      // Optional: generate individual icon connections
      if (process.argv.includes('--individual-connections')) {
        generateIconsFigma(iconsData);
      }
    }
    // Option 2: Use existing iconsData.json
    else {
      console.log('Using existing iconsData.json...');
      const iconsDataPath = path.resolve(__dirname, 'iconsData.json');

      if (!fs.existsSync(iconsDataPath)) {
        console.error(
          'Error: iconsData.json not found. Use --fetch to fetch from Figma API or create the file manually.'
        );
        process.exit(1);
      }

      const iconsData = JSON.parse(fs.readFileSync(iconsDataPath, 'utf8'));

      generateIconComponents(iconsData);
      generateIconWrapperFigma(iconsData);

      // Optional: generate individual icon connections
      if (process.argv.includes('--individual-connections')) {
        generateIconsFigma(iconsData);
      }
    }

    console.log('Icon generation complete!');
  } catch (error) {
    console.error('Error generating icons:', error);
    process.exit(1);
  }
}

// Run the script
generateIcons();
