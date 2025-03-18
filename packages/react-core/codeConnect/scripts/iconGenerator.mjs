/* eslint-disable no-console */
/**
 * Enhanced Icon Generator Script
 * Generates React icon components from icon specifications
 */
import fs from 'fs/promises';
import getIconConfig from '../utils/config.mjs';
import path from 'path';
import { existsSync } from 'fs';
import { loadIconData, extractNodeId, generateSummary } from '../utils/iconUtils.mjs';

/**
 * Generate individual icon files and index with enhanced error handling and performance tracking
 */
async function generateIcons() {
  // Get configuration
  const config = getIconConfig();
  const { logger } = config;

  // Track performance and statistics
  const stats = {
    startTime: Date.now(),
    endTime: 0,
    totalIcons: 0,
    newIcons: 0,
    updatedIcons: 0,
    errors: 0
  };

  try {
    logger.info('Starting icon generation', {
      source: 'IconGenerator',
      context: {
        inputPath: config.iconsDataPath,
        outputDir: config.iconsGeneratedDir
      }
    });

    // Ensure output directories exist
    await fs.mkdir(config.iconsGeneratedDir, { recursive: true });
    await fs.mkdir(config.iconsFigmaDir, { recursive: true });

    // Read icon template
    let iconTemplate = '';
    try {
      iconTemplate = await fs.readFile(config.iconTemplatePath, 'utf8');
      logger.success(`Loaded icon template from ${config.iconTemplatePath}`, {
        source: 'IconGenerator'
      });
    } catch (readTemplateError) {
      logger.error('Failed to read icon template', readTemplateError, {
        source: 'IconGenerator'
      });
      throw readTemplateError;
    }

    // Load icon data
    const iconData = await loadIconData(config.iconsDataPath, config, logger);
    stats.totalIcons = iconData.length;

    // Track existing icons to detect new ones
    const existingIconsSet = new Set();
    try {
      const existingFiles = await fs.readdir(config.iconsGeneratedDir);
      existingFiles.forEach((file) => {
        if (file.endsWith('.tsx')) {
          existingIconsSet.add(file);
        }
      });
      logger.debug(`Found ${existingIconsSet.size} existing icon files`, {
        source: 'IconGenerator'
      });
    } catch (error) {
      logger.debug('No existing icons found or error reading directory', {
        source: 'IconGenerator',
        context: { error: error.message }
      });
    }

    // Generate individual icon files
    const generatedIcons = [];

    for (const icon of iconData) {
      try {
        if (!icon || !icon.fileName || !icon.reactName) {
          logger.warn(`Skipping invalid icon data: ${JSON.stringify(icon)}`, {
            source: 'IconGenerator'
          });
          continue;
        }

        const iconFileName = `${icon.fileName}.tsx`;
        const iconPath = path.join(config.iconsGeneratedDir, iconFileName);

        // Check if this is a new icon
        const isNewIcon = !existingIconsSet.has(iconFileName);
        if (isNewIcon) {
          stats.newIcons++;
        } else {
          stats.updatedIcons++;
        }

        // Use the template and replace placeholders
        const iconContent = iconTemplate
          .replace('ICON_NAME', icon.reactName)
          .replace(
            'SVG_PATH',
            icon.svgPath || '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />'
          );

        // Write the file unless in dry-run mode
        if (!config.dryRun) {
          await fs.writeFile(iconPath, iconContent);
          logger.debug(`Generated icon: ${icon.reactName}`, {
            source: 'IconGenerator',
            context: { path: iconPath, isNew: isNewIcon }
          });
        } else {
          logger.debug(`Dry run: would generate ${icon.reactName}`, {
            source: 'IconGenerator'
          });
        }

        generatedIcons.push(icon);
      } catch (error) {
        logger.error(`Error generating icon: ${icon?.reactName || 'unknown'}`, error, {
          source: 'IconGenerator'
        });
        stats.errors++;
      }
    }

    logger.success(`Generated ${generatedIcons.length} individual icon files`, {
      source: 'IconGenerator'
    });

    // Create IconProps.ts if it doesn't exist
    const iconPropsPath = path.join(path.dirname(config.iconsGeneratedDir), 'IconProps.ts');
    if (!existsSync(iconPropsPath) && !config.dryRun) {
      const iconPropsContent = `import { SVGProps } from 'react';

/**
 * Props interface for PatternFly React icon components
 * Generated on: ${new Date().toISOString()}
 */
export interface IconProps extends SVGProps<SVGSVGElement> {
  /** Additional classes added to the icon */
  className?: string;
  /** Icon title for accessibility */
  title?: string;
}
`;
      await fs.writeFile(iconPropsPath, iconPropsContent);
      logger.success(`Created IconProps.ts file at ${iconPropsPath}`, {
        source: 'IconGenerator'
      });
    } else if (config.dryRun) {
      logger.info(`Dry run: would create IconProps.ts at ${iconPropsPath}`, {
        source: 'IconGenerator'
      });
    }

    // Generate Figma connection file
    const componentNames = generatedIcons
      .filter((icon) => icon && icon.reactName)
      .map((icon) => icon.reactName)
      .sort();

    // Generate Figma connection file with node IDs
    const figmaFileContent = `import React from "react";
import figma from "@figma/code-connect";
import { ${componentNames.join(', ')} } from "./generated";

/**
 * -- This file was auto-generated by the icon generator script --
 * This file connects icon components to their corresponding Figma components.
 * Generated on: ${new Date().toISOString()}
 */

${generatedIcons
  .filter((icon) => icon && icon.reactName)
  .map((icon) => {
    // Extract node ID from URL or use default
    const nodeId = icon.url ? extractNodeId(icon.url) || config.defaultNodeId : config.defaultNodeId;

    const url = `${config.figmaBaseUrl}?node-id=${nodeId}&m=dev`;

    // Compact format to avoid parsing issues
    return `figma.connect(${icon.reactName}, "${url}", {
  props: {},
  example: (props) => <${icon.reactName} {...props} />
});`;
  })
  .join('\n\n')}
`;

    // Write Figma connection file
    const figmaOutputPath = path.join(config.iconsFigmaDir, config.figmaOutputFile);
    if (!config.dryRun) {
      await fs.writeFile(figmaOutputPath, figmaFileContent);
      logger.success(`Generated Figma connection file at ${figmaOutputPath}`, {
        source: 'IconGenerator'
      });
    } else {
      logger.info(`Dry run: would generate Figma connection file at ${figmaOutputPath}`, {
        source: 'IconGenerator'
      });
    }

    // Generate index file for generated icons
    const indexContent = generatedIcons
      .filter((icon) => icon && icon.reactName && icon.fileName)
      .map((icon) => `export { ${icon.reactName} } from './${icon.fileName}';`)
      .join('\n');

    const indexPath = path.join(config.iconsGeneratedDir, config.generatedIndexFile);
    if (!config.dryRun) {
      await fs.writeFile(indexPath, indexContent);
      logger.success(`Generated index file at ${indexPath}`, {
        source: 'IconGenerator'
      });
    } else {
      logger.info(`Dry run: would generate index file at ${indexPath}`, {
        source: 'IconGenerator'
      });
    }

    // Calculate final statistics and show summary
    stats.endTime = Date.now();
    logger.info(generateSummary(stats), { source: 'IconGenerator' });

    return true;
  } catch (error) {
    stats.endTime = Date.now();
    stats.errors++;

    // Ensure error is logged with full details
    logger.error('Error generating icon files', error, {
      source: 'IconGenerator'
    });

    logger.info(generateSummary(stats), { source: 'IconGenerator' });
    return false;
  }
}

/**
 * Main function to run the icon generation process
 */
async function main() {
  // Generate icons
  const success = await generateIcons();

  if (success) {
    const config = getIconConfig();
    const { logger } = config;

    logger.success('Icon generation completed successfully! 🎉', {
      source: 'IconGenerator'
    });

    if (!config.dryRun) {
      console.log('\nTo publish to Figma, run:');
      console.log('  cd react-core');
      console.log('  npx figma connect publish --token=your_token');
    }

    process.exit(0);
  } else {
    process.exit(1);
  }
}

// Execute directly if run as a script
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch((error) => {
    console.error('Unhandled error in main:', error);
    process.exit(1);
  });
}

export default generateIcons;
