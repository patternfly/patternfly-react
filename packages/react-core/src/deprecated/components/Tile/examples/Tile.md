---
id: Tile
section: components
cssPrefix: pf-v6-c-tile
propComponents: ['Tile']
deprecated: true
---

import PlusIcon from '@patternfly/react-icons/dist/esm/icons/plus-icon';
import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';
import './Tile.css';

**Note:** Tile has been deprecated. Use the [card](/components/card#cards-as-tiles) component instead.

## Examples

Keyboard interaction patterns and a11y is implemented in the Tile demos, located in the [Demo section](/components/tile/react-demos).

### Basic tile

Basic tiles can appear in one of three states: a default state, selected state, and a disabled state. To change the state of a tile, use the properties `isSelected` and `isDisabled`.

```ts file="./TileBasic.tsx"

```

### With subtext

Tile subtext can provide users with additional context. To add subtext, pass a short description to the `<Tile>` component.

```ts file="./TileWithSubtext.tsx"

```

### With icon

Icons can provide a visual cue that helps users understand what the tile is being used for. To add an icon, use the `icon` property.

```ts file="./TileWithIcon.tsx"

```

### With stacked icon

You can further customize a tile’s appearance by placing an icon above the title. To stack your icon on top of a tile’s title, use the `isStacked` property.

```ts file="./TileStacked.tsx"

```

### With large icons

You can make your icons larger to help catch a user’s attention. To increase the size of an icon, use the `isDisplayLarge` property.

Be aware that `isDisplayLarge` can only be used when `isStacked` is also applied.

```ts file="./TileStackedWithLargeIcons.tsx"

```

### With long subtext

To provide users with a large amount of context, subtext can be elongated to wrap around to the next line. To format a long subtext, you can pass the component `Flex` into `<Tile>`.

You can also change the type of `Flex` you can use so that the line breaks in the subtext fits your needs. You can do this by changing the default flex. The standard is `default: “flex_1”`, and changing the number in the default will also change where the sentence breaks.

```ts file="./TileWithExtraContent.tsx"

```

## Demos

### Tiles with single selection

```ts
import React from 'react';
import { Tile } from '@patternfly/react-core/deprecated';

const TileSingleSelect: React.FunctionComponent = () => {
  const [selectedId, setSelectedId] = React.useState<string>('');

  const onSelect = (event: React.MouseEvent) => {
    setSelectedId(event.currentTarget.id);
  };

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      setSelectedId(event.currentTarget.id);
    }
  };

  return (
    <div role="listbox" aria-label="Single selection tiles">
      <Tile title="Tile 1" id="single-select-tile-1" onClick={onSelect} onKeyDown={onKeyDown} isSelected={selectedId === 'single-select-tile-1'} />
      <Tile title="Tile 2" id="single-select-tile-2" onClick={onSelect} onKeyDown={onKeyDown} isSelected={selectedId === 'single-select-tile-2'} />
      <Tile title="Tile 3" id="single-select-tile-3" isDisabled isSelected={selectedId === 'single-select-tile-3'} />
      <Tile title="Tile 4" id="single-select-tile-4" onClick={onSelect} onKeyDown={onKeyDown} isSelected={selectedId === 'single-select-tile-4'} />
    </div>
  );
};
```

### Tiles with multiple selection

```ts
import React from 'react';
import { Tile } from '@patternfly/react-core/deprecated';

const TileMultiSelect: React.FunctionComponent = () => {
  const [selectedIds, setSelectedIds] = React.useState<string[]>([]);

  const onSelect = (event: React.MouseEvent | React.KeyboardEvent) => {
    const targetId = event.currentTarget.id;
    setSelectedIds(prevSelectedIds => {
      const newSelectedIds = prevSelectedIds.includes(targetId)
        ? prevSelectedIds.filter(id => id !== targetId)
        : [...prevSelectedIds, targetId];
      console.log('tile selections: ', newSelectedIds);
      return newSelectedIds;
    });
  };

  const onKeyDown = (event: React.KeyboardEvent) => {
    console.log(event.key);
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      onSelect(event);
    }
  };

  return (
    <div role="listbox" aria-multiselectable={true} aria-label="Multiselectable tiles">
      <Tile
        title="Tile 1"
        id="multiselect-tile-1"
        onClick={onSelect}
        onKeyDown={onKeyDown}
        isSelected={selectedIds.includes('multiselect-tile-1')}
      />
      <Tile
        title="Tile 2"
        id="multiselect-tile-2"
        onClick={onSelect}
        onKeyDown={onKeyDown}
        isSelected={selectedIds.includes('multiselect-tile-2')}
      />
      <Tile title="Tile 3" id="multiselect-tile-3" isDisabled />
      <Tile
        title="Tile 4"
        id="multiselect-tile-4"
        onClick={onSelect}
        onKeyDown={onKeyDown}
        isSelected={selectedIds.includes('multiselect-tile-4')}
      />
    </div>
  );
};
```
