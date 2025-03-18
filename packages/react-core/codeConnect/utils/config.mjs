import path from 'path';
import { existsSync, readFileSync } from 'fs';
import logger from './logger.mjs';
import { findRepoRoot } from './iconUtils.mjs';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

// Parse command line arguments
const argv = yargs(hideBin(process.argv))
  .option('verbose', {
    alias: 'v',
    type: 'boolean',
    description: 'Run with verbose logging'
  })
  .option('dry-run', {
    type: 'boolean',
    description: 'Show what would be done without making changes'
  })
  .option('input', {
    alias: 'i',
    type: 'string',
    description: 'Custom input path for icons data'
  })
  .option('output', {
    alias: 'o',
    type: 'string',
    description: 'Custom output directory for generated icons'
  })
  .option('base-url', {
    type: 'string',
    description: 'Override figma base URL'
  })
  .help()
  .alias('help', 'h')
  .parseSync();

// Set environment variables based on CLI args
if (argv.verbose) {
  process.env.VERBOSE = 'true';
}

if (argv.dryRun) {
  process.env.DRY_RUN = 'true';
  logger.info('Running in dry-run mode - no files will be modified');
}

/**
 * Load configuration from config file with validation
 * @param {string} configPath - Path to the configuration file
 * @returns {Object} Configuration object
 */
function loadConfig(configPath) {
  const defaultConfig = {
    figmaBaseUrl:
      'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/branch/H3LonYnwH26v9zNEa2SXFk/PatternFly-6%3A-Components',
    defaultNodeId: '1-196'
  };

  try {
    if (existsSync(configPath)) {
      const configContent = readFileSync(configPath, 'utf8');
      const config = JSON.parse(configContent);

      // Validate required fields
      if (!config.figmaBaseUrl) {
        logger.warn('Configuration missing figmaBaseUrl, using default', {
          source: 'ConfigLoader',
          context: { defaultValue: defaultConfig.figmaBaseUrl }
        });
        config.figmaBaseUrl = defaultConfig.figmaBaseUrl;
      }

      if (!config.defaultNodeId) {
        logger.warn('Configuration missing defaultNodeId, using default', {
          source: 'ConfigLoader',
          context: { defaultValue: defaultConfig.defaultNodeId }
        });
        config.defaultNodeId = defaultConfig.defaultNodeId;
      }

      logger.debug('Loaded configuration from file', {
        source: 'ConfigLoader',
        context: { path: configPath, config }
      });

      return { ...defaultConfig, ...config };
    }

    logger.warn(`Config file not found at ${configPath}. Using default configuration.`, {
      source: 'ConfigLoader'
    });
    return defaultConfig;
  } catch (error) {
    logger.error('Error reading configuration', error, {
      source: 'ConfigLoader',
      context: { path: configPath }
    });
    return defaultConfig;
  }
}

/**
 * Get and validate icon generation configuration
 * @returns {Object} Comprehensive icon generation configuration
 */
export function getIconConfig() {
  const root = findRepoRoot();
  logger.debug(`Repository root: ${root}`, { source: 'ConfigLoader' });

  // Load base configuration
  const configPath = path.resolve(root, 'codeConnect/config.json');
  const config = loadConfig(configPath);

  // Override with CLI arguments if provided
  if (argv.baseUrl) {
    logger.info(`Overriding figmaBaseUrl with CLI value: ${argv.baseUrl}`, {
      source: 'ConfigLoader'
    });
    config.figmaBaseUrl = argv.baseUrl;
  }

  // Build the full configuration object
  const iconConfig = {
    // Input paths (with CLI overrides if provided)
    iconsDataPath: argv.input || path.resolve(root, 'codeConnect/data/iconsData.json'),
    iconTemplatePath: path.resolve(root, 'codeConnect/templates/iconTemplate.txt'),

    // Output directories (with CLI overrides if provided)
    iconsGeneratedDir: argv.output || path.resolve(root, 'icons/generated'),
    iconsFigmaDir: path.resolve(root, 'icons'),

    // Figma configuration
    figmaBaseUrl: config.figmaBaseUrl,
    defaultNodeId: config.defaultNodeId,

    // Output files
    figmaOutputFile: 'icons.figma.tsx',
    generatedIndexFile: 'index.ts',

    // CLI arguments
    dryRun: Boolean(process.env.DRY_RUN),
    verbose: Boolean(process.env.VERBOSE),

    // Logging utility
    logger
  };

  // Log full configuration in verbose mode
  logger.debug('Final icon configuration', {
    source: 'ConfigLoader',
    context: iconConfig
  });

  return iconConfig;
}

export default getIconConfig;
