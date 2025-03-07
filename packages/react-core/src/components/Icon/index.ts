/* eslint-disable no-console */
import { initializeFigmaConnections } from './connectIcons';

// Load the raw JSON without modifying it
async function loadIconsAndInitialize() {
  // Only load the JSON and initialize Figma in development mode
  if (process.env.NODE_ENV === 'development') {
    try {
      // Fetch the JSON file using regular fetch
      const response = await fetch('./iconsData.json');

      if (!response.ok) {
        throw new Error(`Failed to load icon data: ${response.status}`);
      }

      // Parse the JSON data
      const iconVariantsData = await response.json();

      // Initialize Figma with the raw data
      initializeFigmaConnections(iconVariantsData);
    } catch (error) {
      console.error('Error loading icon variants:', error);
    }
  }
}

// Call the initialization function
loadIconsAndInitialize();

// Export components as usual
export { Icon } from './Icon';
export * from './icons';