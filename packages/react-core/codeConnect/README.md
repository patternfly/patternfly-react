# PatternFly React Icon Generation System

## Overview

The PatternFly React icon generation system automates the process of creating and managing icon components, including generation, Figma connections, and consistent integration.

## Components

### 1. Icon Data Source (`iconsData.json`)
Defines the metadata for each icon in the library.

#### JSON Structure
```json
[
  {
    "iconName": "angle-down",
    "fileName": "angle-down-icon",
    "reactName": "AngleDownIcon",
    "url": "Optional Figma design URL",
    "svgPath": "SVG path data for the icon"
  }
]
```

### 2. Configuration (`config.json`)
Manages global settings for icon generation.

#### Configuration Options
- `figmaBaseUrl`: Base URL for Figma design references
- `defaultNodeId`: Fallback Figma node identifier

### 3. Icon Template (`iconTemplate.txt`)
Provides a consistent template for generating individual icon components.

### 4. Scripts

#### `iconConnector.mjs`
Generates Figma connection files for icons.

#### `iconGenerator.mjs`
Creates individual icon component files and manages icon-related artifacts.

## Workflow

### 1. Prepare Icon Data
Create or update `iconsData.json` with icon specifications.

### 2. Configuration
Customize `config.json` with project-specific settings.

### 3. Generation Commands

#### Generate Icons
```bash
# Generate icon components and Figma connections
npm run figma:icons:generate
```

#### Publish to Figma
```bash
# Publish generated icon connections
npm run figma:icons:publish
```

## Best Practices

- Keep `iconsData.json` updated with the latest icon information
- Ensure SVG paths are clean and optimized
- Maintain consistent naming conventions
- Validate icon designs in Figma before generation

## Troubleshooting

### Common Issues
- **Missing Configuration**: Verify `config.json` exists and is correctly formatted
- **SVG Path Errors**: Check SVG path syntax and completeness
- **Naming Conflicts**: Ensure unique `reactName` for each icon

### Logging
The system uses a comprehensive logging utility that provides:
- Timestamped logs
- Contextual information
- Color-coded output for different log levels

## Extensibility

The modular design allows easy extension:
- Add new icons by updating `iconsData.json`
- Customize icon templates
- Modify configuration as project needs evolve

## Contributing

1. Update `iconsData.json` with new icon specifications
2. Validate SVG paths and icon designs
3. Run generation scripts
4. Review generated components
5. Commit changes

## Dependencies

- Node.js
- Figma Code Connect
- PatternFly React ecosystem

## License

[Insert appropriate license information]

## Support

For issues or questions, please file a GitHub issue in the PatternFly React repository.