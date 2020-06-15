const fs = require('fs');
const reactDocgen = require('react-docgen');

const sourcePath = require.resolve('@patternfly/react-catalog-view-extension/src/components/CatalogTile/CatalogTileBadge.tsx');
const sourceText = fs.readFileSync(sourcePath, 'utf8');


const parsedComponents = reactDocgen.parse(
  sourceText,
  reactDocgen.resolver.findAllExportedComponentDefinitions,
  null,
  { filename: sourcePath }
);

console.dir(parsedComponents, { depth: 4 })