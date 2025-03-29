/* eslint-disable no-console */
import { glob } from 'glob';
import chokidar from 'chokidar';
import { processFigmaFile } from './figma-url-fixer.mjs';
import figmaBaseUrl from '../config.json' assert { type: 'json' };

// Figma file watcher function
async function figmaFileWather() {
  console.log('Starting Figma URL watcher...');
  console.log('Current directory:', process.cwd());
  console.log('Using root URL:', figmaBaseUrl);

  // Find all .figma.tsx files directly using glob
  const files = await glob('**/*.figma.tsx', {
    ignore: ['**/node_modules/**', '**/dist/**', 'codeConnect/tests/**/*'],
    absolute: true // Get absolute paths
  });

  console.log(`Found ${files.length} .figma.tsx files in the project:`);

  if (files.length === 0) {
    console.log('No .figma.tsx files found. Please check your project structure.');
    return;
  }

  // Log found files
  files.forEach((file) => console.log(`  - ${file}`));

  // Process all files first
  let fixedCount = 0;
  for (const file of files) {
    try {
      const wasFixed = await processFigmaFile(file);
      if (wasFixed) {
        fixedCount++;
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  }

  console.log(`Initial processing complete. Fixed ${fixedCount} files.`);

  // Now set up watcher for these specific files
  const watcher = chokidar.watch(files, {
    persistent: true,
    ignoreInitial: true, // We already processed them
    awaitWriteFinish: {
      stabilityThreshold: 300,
      pollInterval: 100
    }
  });

  // Simple file handler
  const handleFile = async (filePath) => {
    console.log(`File changed: ${filePath}`);
    try {
      await processFigmaFile(filePath);
    } catch (error) {
      console.error(`Error processing ${filePath}:`, error.message);
    }
  };

  // Set up event handlers
  watcher
    .on('change', handleFile)
    .on('ready', () => {
      console.log('Watcher ready. Monitoring these files for changes:');
      files.forEach((file) => console.log(`  - ${file}`));
    })
    .on('error', (error) => console.error(`Watcher error:`, error));

  console.log('Watcher started. Press Ctrl+C to stop.');
}

// Run the figmaFileWather function
figmaFileWather().catch((error) => {
  console.error('Fatal error:', error);
});
