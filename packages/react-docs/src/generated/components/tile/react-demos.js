import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Tile",
  "section": "components",
  "source": "react-demos",
  "slug": "/components/tile/react-demos",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/demos/TileDemo.md",
  "examples": [
    "Tiles with single selection",
    "Tiles with multiple selection"
  ]
};
pageData.examples = {
  'Tiles with single selection': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Tile } from '@patternfly/react-core';\n\nconst TileSingleSelect: React.FunctionComponent = () => {\n  const [selectedId, setSelectedId] = React.useState<string>('');\n\n  const onSelect = (event: React.MouseEvent) => {\n    setSelectedId(event.currentTarget.id);\n  };\n\n  const onKeyDown = (event: React.KeyboardEvent) => {\n    if (event.key === ' ' || event.key === 'Enter') {\n      event.preventDefault();\n      setSelectedId(event.currentTarget.id);\n    }\n  };\n\n  return (\n    <div role=\"listbox\" aria-label=\"Single selection tiles\">\n      <Tile title=\"Tile 1\" id=\"tile-1\" onClick={onSelect} onKeyDown={onKeyDown} isSelected={selectedId === 'tile-1'} />\n      <Tile title=\"Tile 2\" id=\"tile-2\" onClick={onSelect} onKeyDown={onKeyDown} isSelected={selectedId === 'tile-2'} />\n      <Tile title=\"Tile 3\" id=\"tile-3\" isDisabled isSelected={selectedId === 'tile-3'} />\n      <Tile title=\"Tile 4\" id=\"tile-4\" onClick={onSelect} onKeyDown={onKeyDown} isSelected={selectedId === 'tile-4'} />\n    </div>\n  );\n};","title":"Tiles with single selection","lang":"ts"}}>
      
    </Example>,
  'Tiles with multiple selection': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Tile } from '@patternfly/react-core';\n\nconst TileMultiSelect: React.FunctionComponent = () => {\n  const [selectedIds, setSelectedIds] = React.useState<string[]>([]);\n\n  const onSelect = (event: React.MouseEvent | React.KeyboardEvent) => {\n    const targetId = event.currentTarget.id;\n    setSelectedIds(prevSelectedIds => {\n      const newSelectedIds = prevSelectedIds.includes(targetId)\n        ? prevSelectedIds.filter(id => id !== targetId)\n        : [...prevSelectedIds, targetId];\n      console.log('tile selections: ', newSelectedIds);\n      return newSelectedIds;\n    });\n  };\n\n  const onKeyDown = (event: React.KeyboardEvent) => {\n    console.log(event.key);\n    if (event.key === ' ' || event.key === 'Enter') {\n      event.preventDefault();\n      onSelect(event);\n    }\n  };\n\n  return (\n    <div role=\"listbox\" aria-multiselectable={true} aria-label=\"Multiselectable tiles\">\n      <Tile\n        title=\"Tile 1\"\n        id=\"tile-1\"\n        onClick={onSelect}\n        onKeyDown={onKeyDown}\n        isSelected={selectedIds.includes('tile-1')}\n      />\n      <Tile\n        title=\"Tile 2\"\n        id=\"tile-2\"\n        onClick={onSelect}\n        onKeyDown={onKeyDown}\n        isSelected={selectedIds.includes('tile-2')}\n      />\n      <Tile title=\"Tile 3\" id=\"tile-3\" isDisabled />\n      <Tile\n        title=\"Tile 4\"\n        id=\"tile-4\"\n        onClick={onSelect}\n        onKeyDown={onKeyDown}\n        isSelected={selectedIds.includes('tile-4')}\n      />\n    </div>\n  );\n};","title":"Tiles with multiple selection","lang":"ts"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"demos","size":"h2","className":"ws-title ws-h2"}}>
      {`Demos`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Tiles with single selection"])}
    {React.createElement(pageData.examples["Tiles with multiple selection"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsTileReactDemosDocs';
Component.pageData = pageData;

export default Component;
