# PatternFly React Icon Generation System

## Overview

The PatternFly React icon generation system automates the process of creating and managing icon components, including generation, Figma connections, and consistent integration.

## Components

### 1. Icon Data Source (`iconsData.json`)
Defines the metadata for each icon in the library.

```npm run figma:icons:fetch --token=FIGMA_ACCESS_TOKEN```

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

### 2. Scripts

#### `iconConnector.mjs`
Generates Figma connection files for icons.

## Workflow

### 1. Prepare Icon Data
Create or update `iconsData.json` with icon specifications.

### 2. Generation Commands

#### Generate Icons
```bash
# Generate iconData.json
yarn run figma:fetch

# Generate icon components and Figma connections
yarn run figma:sync
```

## Best Practices

- Keep `iconsData.json` updated with the latest icon information
- Ensure SVG paths are clean and optimized
- Maintain consistent naming conventions
- Validate icon designs in Figma before generation

## Troubleshooting

### Common Issues
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

PatternFly React is licensed under the [MIT License](https://github.com/patternfly/patternfly-react/tree/main/LICENSE).

## Support

For issues or questions, please file a GitHub issue in the PatternFly React repository.
