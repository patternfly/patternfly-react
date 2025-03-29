/**
 * Shared utilities for icon generation and connection
 */
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs/promises';
import { existsSync } from 'fs';

/**
 * Extract node ID from a Figma URL
 * @param {string} url - Figma URL
 * @returns {string|null} - Node ID or null if not found
 */
export function extractNodeId(url) {
  if (!url) {
    return null;
  }
  const nodeIdMatch = url.match(/node-id=([^&]+)/);
  return nodeIdMatch ? nodeIdMatch[1] : null;
}

/**
 * Extract icon names from import statement
 * @param {string} importStatement - The full import statement
 * @returns {string[]} Array of unique icon names
 */
export function extractIconNames(importStatement, logger) {
  if (!importStatement) {
    logger?.warn('Import statement is undefined or empty');
    return [];
  }

  try {
    // Remove comments and extra whitespace
    const cleanImport = importStatement
      .replace(/\/\/.*|\/\*[\s\S]*?\*\//g, '')
      .replace(/\s+/g, ' ')
      .trim();

    // Extract icons between { }
    const matchIcons = cleanImport.match(/{\s*(.+?)\s*}/);
    if (!matchIcons) {
      logger?.warn('No icon matches found in import statement');
      return [];
    }

    // Split icons and clean up
    return [
      ...new Set(
        matchIcons[1]
          .split(',')
          .map((icon) => icon.trim())
          .filter((icon) => icon && !icon.includes('=') && !icon.startsWith('Icon Size') && !icon.includes('('))
      )
    ];
  } catch (error) {
    logger?.error('Error extracting icon names', error);
    return [];
  }
}

/**
 * Find repo root directory
 * @returns {string} Path to repository root
 */
export function findRepoRoot() {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  // Traverse up the directory tree to find the repo root
  let currentDir = __dirname;
  while (currentDir !== path.dirname(currentDir)) {
    if (existsSync(path.join(currentDir, '.git')) || existsSync(path.join(currentDir, 'package.json'))) {
      return currentDir;
    }
    currentDir = path.dirname(currentDir);
  }
  return __dirname; // Fallback
}

/**
 * Load and validate icon data
 * @param {string} iconsDataPath - Path to icon data JSON
 * @param {Object} config - Configuration object
 * @param {Object} logger - Logger instance
 * @returns {Array} Array of icon data objects
 */
export async function loadIconData(iconsDataPath, config, logger) {
  try {
    const iconsDataContent = await fs.readFile(iconsDataPath, 'utf8');
    const iconsData = JSON.parse(iconsDataContent);

    if (!Array.isArray(iconsData)) {
      logger.warn('Icon data is not an array, initializing as empty array');
      return [];
    }

    // Validate icon data
    const validIcons = iconsData.filter((icon) => {
      const isValid = icon && icon.iconName && icon.fileName && icon.reactName;
      if (!isValid) {
        logger.warn(`Found invalid icon data: ${JSON.stringify(icon)}`);
      }
      return isValid;
    });

    logger.success(`Loaded ${validIcons.length} valid icons from ${iconsDataPath}`);
    return validIcons;
  } catch (error) {
    logger.error('Failed to read icons data', error);

    // Provide example data if file is missing
    return [
      {
        iconName: 'angle-down',
        fileName: 'angle-down-icon',
        reactName: 'AngleDownIcon',
        url: `${config.figmaBaseUrl}?node-id=${config.defaultNodeId}&m=dev`,
        svgPath: '<path d="M12 15.5l-6-6 1.4-1.4 4.6 4.6 4.6-4.6 1.4 1.4z" />'
      }
    ];
  }
}

/**
 * Generate a figma.connect statement for an icon
 * @param {string} iconName - React component name
 * @param {string} url - Figma URL
 * @returns {string} - Formatted figma.connect statement
 */
export function generateConnectStatement(iconName, url) {
  return `figma.connect(${iconName}, "${url}", {
  props: {},
  example: (props) => <${iconName} {...props} />
});`;
}

/**
 * Find matching icon configuration by name
 * @param {string} iconName - React component name to find
 * @param {Array} iconsData - Array of icon configurations
 * @returns {Object|null} - Matching icon configuration or null
 */
export function findIconByName(iconName, iconsData) {
  if (!Array.isArray(iconsData)) {
    return null;
  }

  return iconsData.find(
    (icon) =>
      icon.reactName === iconName ||
      (icon.fileName && icon.fileName.replace('-icon', '') === iconName.replace('Icon', '').toLowerCase())
  );
}

/**
 * Generate summary statistics for icon generation
 * @param {Object} stats - Statistics object
 * @returns {string} - Formatted summary string
 */
export function generateSummary(stats) {
  const elapsedTime = stats.endTime - stats.startTime;

  return `
Icon Generation Summary:
----------------------
Total Icons: ${stats.totalIcons}
New Icons: ${stats.newIcons}
Updated Icons: ${stats.updatedIcons}
Errors: ${stats.errors}
----------------------
Time Elapsed: ${elapsedTime}ms
`;
}
