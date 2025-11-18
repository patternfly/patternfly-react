/* eslint-disable no-console */
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';
import { icons } from '@rhds/icons/metadata.js';

// --- Configuration ---
// Prefix for icon keys and output filenames (e.g., "rh" produces "rh-ui-arrow-down" and "rhIconsUI.mjs")
const ICON_PREFIX = 'rh';

// Icon types to process. Comment out any types you don't want to parse.
const ICON_TYPES = [
  'ui',
  'standard',
  'social',
  'microns'
  // Add new types here as they become available in @rhds/icons
];

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);

// Resolve path to @rhds/icons directory structure
const rhdsIconsPath = require.resolve('@rhds/icons/ui/add-circle-fill.svg');
const RHDS_ICONS_BASE_DIR = path.dirname(path.dirname(rhdsIconsPath));
const OUTPUT_DIR = path.join(__dirname, 'icons');
// ---------------------

/**
 * Regex to safely extract the four view box numbers from the outer <svg> tag.
 * It handles different spacing.
 */
const VIEWBOX_REGEX =
  /<svg[^>]+viewBox="(\s*(-?\d+(\.\d+)?)\s+(-?\d+(\.\d+)?)\s+(-?\d+(\.\d+)?)\s+(-?\d+(\.\d+)?)\s*)"/i;

/**
 * Regex to extract all 'd' attribute content from <path> elements.
 * Uses global flag to match all paths.
 */
const PATH_DATA_REGEX = /<path\s+[^>]*d="([^"]+)"/gi;

/**
 * Processes a single SVG file to extract viewbox data and path data.
 * @param {string} iconName The name of the icon (without .svg extension).
 * @param {string} iconType The type/category of the icon (ui, standard, social, microns).
 * @returns {object|null} The parsed icon object, or null on error.
 */
async function processSvgFile(iconName, iconType) {
  const typeDir = path.join(RHDS_ICONS_BASE_DIR, iconType);
  const svgPath = path.join(typeDir, `${iconName}.svg`);

  try {
    // 1. Read the file content
    const content = await fs.readFile(svgPath, 'utf-8');

    // 2. Extract view box data
    const viewBoxMatch = content.match(VIEWBOX_REGEX);
    if (!viewBoxMatch) {
      console.error(`Skipping ${iconName}: Could not find or parse viewBox attribute.`);
      return null;
    }

    // Extract viewBox values: "xOffset yOffset width height"
    const viewboxValues = viewBoxMatch[1].trim().split(/\s+/).map(Number);

    if (viewboxValues.length !== 4 || viewboxValues.some(isNaN)) {
      console.error(`Skipping ${iconName}: viewBox values are not valid numbers.`);
      return null;
    }

    const [xOffset, yOffset, width, height] = viewboxValues;

    // 3. Extract all path data elements
    const pathDataMatches = [...content.matchAll(PATH_DATA_REGEX)];
    if (!pathDataMatches || pathDataMatches.length === 0) {
      console.error(`Skipping ${iconName}: Could not find 'd' attribute in any <path> element.`);
      return null;
    }

    // Extract all path data values
    const pathDataValues = pathDataMatches.map((match) => match[1]);

    // If there's only one path, store as string; if multiple, store as array of objects with 'path' property
    // (createIcon expects arrays to be SVGPathObject[] with { path: string, className?: string } structure)
    const svgPathData =
      pathDataValues.length === 1 ? pathDataValues[0] : pathDataValues.map((pathData) => ({ path: pathData }));

    // 4. Construct the final object
    return {
      iconName,
      data: {
        xOffset,
        yOffset,
        width,
        height,
        svgPathData
      }
    };
  } catch (error) {
    console.error(`Error processing ${iconName}:`, error.message);
    return null;
  }
}

/**
 * Formats an object as an ES module export with proper formatting.
 * @param {object} obj The object to format.
 * @param {number} indent The indentation level.
 * @returns {string} Formatted module string.
 */
function formatModule(obj, indent = 0) {
  const spaces = '  '.repeat(indent);
  const entries = Object.entries(obj);
  if (entries.length === 0) {
    return '{}';
  }

  const lines = ['{'];
  entries.forEach(([key, value], index) => {
    const isLast = index === entries.length - 1;
    const comma = isLast ? '' : ',';

    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      // Escape single quotes in key
      const escapedKey = key.replace(/'/g, "\\'");
      lines.push(`${spaces}  '${escapedKey}': {`);
      lines.push(`${spaces}    xOffset: ${value.xOffset},`);
      lines.push(`${spaces}    yOffset: ${value.yOffset},`);
      lines.push(`${spaces}    width: ${value.width},`);
      lines.push(`${spaces}    height: ${value.height},`);

      // Handle svgPathData: string or array of objects
      if (Array.isArray(value.svgPathData)) {
        // Array of path objects with { path: string } structure
        lines.push(`${spaces}    svgPathData: [`);
        value.svgPathData.forEach((pathObject, idx) => {
          const isLast = idx === value.svgPathData.length - 1;
          const escapedPath = pathObject.path.replace(/'/g, "\\'");
          if (pathObject.className) {
            const escapedClassName = pathObject.className.replace(/'/g, "\\'");
            lines.push(
              `${spaces}      { path: '${escapedPath}', className: '${escapedClassName}' }${isLast ? '' : ','}`
            );
          } else {
            lines.push(`${spaces}      { path: '${escapedPath}' }${isLast ? '' : ','}`);
          }
        });
        lines.push(`${spaces}    ]`);
      } else {
        // Single string path data
        const escapedPathData = value.svgPathData.replace(/'/g, "\\'");
        lines.push(`${spaces}    svgPathData:`);
        lines.push(`${spaces}      '${escapedPathData}'`);
      }
      lines.push(`${spaces}  }${comma}`);
    }
  });
  lines.push(`${spaces}}`);
  return lines.join('\n');
}

/**
 * Processes all icons of a specific type.
 * @param {string} iconType The type/category of icons to process.
 * @returns {Promise<object>} Object with iconName as keys and icon data as values.
 */
async function processIconType(iconType) {
  console.log(`\nProcessing ${iconType} icons...`);

  // Get icons for this type from metadata
  const typeIcons = icons.get(iconType);
  if (!typeIcons) {
    console.warn(`Warning: Icon type '${iconType}' not found in metadata. Skipping.`);
    return {};
  }

  const iconList = Array.from(typeIcons);
  console.log(`Found ${iconList.length} ${iconType} icons to process...`);

  try {
    // Process all SVGs concurrently
    const processingPromises = iconList.map((iconName) => processSvgFile(iconName, iconType));
    const results = await Promise.all(processingPromises);

    // Filter out any icons that failed to process
    const successfulResults = results.filter((data) => data !== null);

    // Convert array to object with prefixed icon names as keys
    const iconsObject = {};
    successfulResults.forEach(({ iconName, data }) => {
      const prefixedKey = `${ICON_PREFIX}-${iconType}-${iconName}`;
      iconsObject[prefixedKey] = data;
    });

    console.log(`Successfully processed ${successfulResults.length} out of ${iconList.length} ${iconType} icons.`);
    return iconsObject;
  } catch (error) {
    console.error(`Error processing ${iconType} icons:`, error);
    return {};
  }
}

/**
 * Main function to process all icon types and create ES module files.
 */
async function processSVGs() {
  console.log(`Starting SVG processing from @rhds/icons`);
  console.log(`Processing ${ICON_TYPES.length} icon type(s): ${ICON_TYPES.join(', ')}`);

  // Ensure output directory exists
  await fs.mkdir(OUTPUT_DIR, { recursive: true });

  const results = {};

  // Process each icon type
  for (const iconType of ICON_TYPES) {
    const iconsObject = await processIconType(iconType);
    if (Object.keys(iconsObject).length > 0) {
      results[iconType] = iconsObject;

      // Write individual file for this type
      // Capitalize first letter, and handle special case for 'ui' -> 'UI'
      const capitalizedType = iconType === 'ui' ? 'UI' : iconType.charAt(0).toUpperCase() + iconType.slice(1);
      const outputFile = path.join(OUTPUT_DIR, `${ICON_PREFIX}Icons${capitalizedType}.mjs`);
      const moduleOutput = `export default ${formatModule(iconsObject)};\n`;
      await fs.writeFile(outputFile, moduleOutput, 'utf-8');
      console.log(`Output written to: ${outputFile}`);
    }
  }

  // Summary
  console.log('\n--- SUCCESS ---');
  const totalIcons = Object.values(results).reduce((sum, icons) => sum + Object.keys(icons).length, 0);
  console.log(`Total icons processed: ${totalIcons}`);
  console.log(`Icon types processed: ${Object.keys(results).join(', ')}`);
}

processSVGs();
