/* eslint-disable no-console */
import fs from 'fs/promises';
import { glob } from 'glob';
import { FIGMA_ROOT_URL } from './CONSTANTS.js';

/**
 * Process a single file to fix Figma URLs with detailed debugging
 */
export async function processFigmaFile(filePath) {
  try {
    console.log(`\nProcessing file: ${filePath}`);
    const content = await fs.readFile(filePath, 'utf8');
    let modified = false;

    // Find all figma.connect calls with string literals as second parameter
    // Updated regex to be more flexible with whitespace and formatting
    const figmaConnectRegex = /figma\.connect\(\s*[^,]+,\s*(['"])([^'"]+)\1/g;
    let match;
    let matchCount = 0;

    // Test the content for any figma.connect calls
    const hasConnect = content.includes('figma.connect');
    console.log(`Contains figma.connect calls: ${hasConnect}`);

    if (!hasConnect) {
      return false;
    }

    // Process all matches
    while ((match = figmaConnectRegex.exec(content)) !== null) {
      matchCount++;
      const [fullMatch, quotes, url] = match;
      console.log(`\nMatch #${matchCount} found: ${fullMatch}`);
      console.log(`URL extracted: ${url}`);

      // Only process if the URL doesn't already have the correct root
      const needsUpdate = !url.startsWith(FIGMA_ROOT_URL);
      console.log(`URL needs update: ${needsUpdate}`);

      if (needsUpdate) {
        // Extract node ID from current URL
        let nodeId = null;

        // Try to extract from node-id parameter
        const nodeIdMatch = url.match(/node-id=([^&]+)/);
        if (nodeIdMatch) {
          nodeId = nodeIdMatch[1];
          console.log(`Found node-id in URL parameter: ${nodeId}`);
        } else {
          // Try to extract from end of URL (format: digits-digits)
          const pathParts = url.split('/');
          const lastPart = pathParts[pathParts.length - 1];
          if (/^\d+-\d+$/.test(lastPart)) {
            nodeId = lastPart;
            console.log(`Found node-id at end of URL: ${nodeId}`);
          }
        }

        // Only update if we successfully extracted a node ID
        if (nodeId) {
          const newUrl = `${FIGMA_ROOT_URL}${nodeId}`;
          console.log(`New URL will be: ${newUrl}`);

          // Create new content by replacing the old URL with the new one
          const updatedContent = content.replace(fullMatch, fullMatch.replace(url, newUrl));

          // Check if replacement actually changed anything
          if (updatedContent !== content) {
            console.log(`Successfully updated URL in content`);
            await fs.writeFile(filePath, updatedContent, 'utf8');
            console.log(`Updated file: ${filePath}`);
            modified = true;
          } else {
            console.log(`Warning: Replacement had no effect on content`);
          }
        } else {
          console.log(`Could not extract node ID from URL: ${url}`);
        }
      }
    }

    console.log(`Total matches found: ${matchCount}`);
    return modified;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
    return false;
  }
}

// Simple test function that processes one file
export async function testProcessFile(filePath) {
  console.log('Running test on file:', filePath);
  const result = await processFigmaFile(filePath);
  console.log('Processing result:', result);
}

// If this file is run directly, execute the fix
if (import.meta.url === `file://${process.argv[1]}`) {
  const testFile = process.argv[2];

  if (testFile) {
    // Test a specific file if provided
    testProcessFile(testFile);
  } else {
    // Otherwise, find and process all files
    console.log('Finding all .figma.tsx files...');
    glob('**/*.figma.tsx', {
      ignore: ['**/node_modules/**', '**/dist/**']
    }).then((files) => {
      console.log(`Found ${files.length} files to process`);
      if (files.length > 0) {
        testProcessFile(files[0]); // Test with the first file found
      }
    });
  }
}
