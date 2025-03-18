import figmaBaseUrl from '../config.json' assert { type: 'json' };
import logger from './logger.mjs';
import path from 'path';
import { existsSync, readFileSync } from 'fs';
import { fileURLToPath } from 'url';

/**
 * Finds the repository root directory
 * @returns {string} Path to the repository root
 */
function findRepoRoot() {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  // Traverse up the directory tree to find a marker of the repo root
  let currentDir = __dirname;
  while (currentDir !== path.dirname(currentDir)) {
    // Look for typical repo root markers
    if (existsSync(path.join(currentDir, '.git')) || existsSync(path.join(currentDir, 'package.json'))) {
      return currentDir;
    }
    currentDir = path.dirname(currentDir);
  }

  // Fallback to current directory if no root found
  return __dirname;
}

/**
 * Load configuration from config file
 * @param {string} configPath - Path to the configuration file
 * @returns {Object} Configuration object
 */
function loadConfig(configPath) {
  const defaultConfig = {
    baseUrl: figmaBaseUrl,
    defaultNodeId: '1-196'
  };

  try {
    if (existsSync(configPath)) {
      const config = JSON.parse(readFileSync(configPath, 'utf8'));
      return { ...defaultConfig, ...config };
    }

    logger.warn(`Config file not found at ${configPath}. Using default configuration.`);
    return defaultConfig;
  } catch (error) {
    logger.error('Error reading configuration', error);
    return defaultConfig;
  }
}

/**
 * Get icon generation configuration
 * @returns {Object} Comprehensive icon generation configuration
 */
export function getIconConfig() {
  const REPO_ROOT = findRepoRoot();

  // Paths
  const configPath = path.resolve(REPO_ROOT, 'codeConnect/config.json');
  const config = loadConfig(configPath);

  return {
    // Input paths
    iconsDataPath: path.resolve(REPO_ROOT, 'codeConnect/data/iconsData.json'),
    iconTemplatePath: path.resolve(REPO_ROOT, 'codeConnect/templates/iconTemplate.txt'),

    // Output directories
    iconsGeneratedDir: path.resolve(REPO_ROOT, 'icons/generated'),
    iconsFigmaDir: path.resolve(REPO_ROOT, 'icons'),

    // Figma configuration
    figmaBaseUrl: config.figmaBaseUrl,
    defaultNodeId: config.defaultNodeId,

    // Output files
    figmaOutputFile: 'icons.figma.tsx',
    generatedIndexFile: 'index.ts',

    // Logging utility
    logger
  };
}

export default getIconConfig;
