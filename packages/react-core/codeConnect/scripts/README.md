# Icon Generation Technical Documentation

## System Architecture

### Components
- `iconConnector.mjs`: Manages Figma connections
- `iconGenerator.mjs`: Generates icon components
- `config.mjs`: Centralized configuration management
- `logger.mjs`: Logging utility

### Configuration Resolution
1. Finds repository root using `findRepoRoot()`
2. Loads configuration from `config.json`
3. Provides fallback default configuration

## Configuration Utility (`config.mjs`)

### Key Functions

#### `findRepoRoot()`
- Traverses directory tree to locate repository root
- Identifies root by presence of `.git` or `package.json`
- Fallback to current directory if no root found

#### `loadConfig(configPath)`
- Reads configuration from specified path
- Merges with default configuration
- Handles missing or invalid configuration files

#### `getIconConfig()`
- Resolves paths relative to repository root
- Combines configuration with path resolutions
- Returns comprehensive configuration object

### Configuration Properties
- `iconsDataPath`: Path to icon metadata
- `iconTemplatePath`: Path to icon component template
- `iconsGeneratedDir`: Output directory for generated icons
- `iconsFigmaDir`: Directory for Figma connection files
- `figmaBaseUrl`: Base URL for Figma design references
- `defaultNodeId`: Fallback Figma node identifier

## Logging Utility (`logger.mjs`)

### Log Levels
- `success`: Green, indicates successful operations
- `info`: Informational messages
- `warn`: Yellow, highlights potential issues
- `error`: Red, indicates critical failures

### Log Context
Each log method supports:
- Source identification
- Contextual metadata
- Detailed error information

## Icon Generation Process

### Icon Data Parsing
1. Read `iconsData.json`
2. Validate icon metadata
3. Fallback to example data if parsing fails

### Component Generation
1. Load icon template
2. Replace placeholders with icon-specific data
3. Generate individual `.tsx` files

### Figma Connection
1. Create Figma connection file
2. Map icons to Figma design references
3. Generate example usage snippets

## Error Handling

### Configuration Errors
- Fallback to default configuration
- Detailed logging of configuration issues

### File Generation Errors
- Comprehensive error reporting
- Graceful degradation with example data
- Detailed context logging

## Performance Considerations
- Minimal file system operations
- Efficient path resolution
- Cached configuration loading

## Security Notes
- No direct external dependencies in core logic
- Minimal file system interactions
- Configurable and extensible design

## Extensibility Points
- Custom icon template
- Configurable path resolutions
- Pluggable logging mechanism

## Debugging

### Verbose Mode
```bash
npm run figma:icons:generate -- --verbose
```

### Troubleshooting Flags
- `--debug`: Enables detailed debugging output
- `--dry-run`: Simulates generation without file writes

## Future Improvements
- Add icon validation
- Support for multiple icon sources
- Enhanced template customization
- Automated design system sync