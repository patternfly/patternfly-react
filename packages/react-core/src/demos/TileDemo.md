---
id: Tile
section: components
---

## Demos

### Tiles with single selection (space)

```js
import React from 'react';
import { Tile } from '@patternfly/react-core';

class TileSingleSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedId: ''
    };

    this.onSelect = event => {
      this.setState({
        selectedId: event.target.id
      });
    };

    this.onKeyDown = event => {
      console.log(event.key);
      if (event.key === ' ') {
        event.preventDefault();
        this.onSelect(event);
      }
    };
  }

  render() {
    const { selectedId } = this.state;
    return (
      <div>
        <Tile
          title="Tile 1"
          id="tile-1"
          onClick={this.onSelect}
          onKeyDown={this.onKeyDown}
          isSelected={selectedId === 'tile-1'}
        />
        <Tile
          title="Tile 2"
          id="tile-2"
          onClick={this.onSelect}
          onKeyDown={this.onKeyDown}
          isSelected={selectedId === 'tile-2'}
        />
        <Tile title="Tile 3" id="tile-3" isDisabled />
        <Tile
          title="Tile 4"
          id="tile-4"
          onClick={this.onSelect}
          onKeyDown={this.onKeyDown}
          isSelected={selectedId === 'tile-4'}
        />
      </div>
    );
  }
}
```

### Tiles with multiple selection (enter)

```js
import React from 'react';
import { Tile } from '@patternfly/react-core';

class TileMultiSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIds: []
    };

    this.onSelect = event => {
      const { selectedIds } = this.state;
      const targetId = event.target.id;

      if (selectedIds.includes(targetId)) {
        this.setState(
          prevState => ({ selectedIds: prevState.selectedIds.filter(id => id !== targetId) }),
          () => console.log('tile selections: ', this.state.selectedIds)
        );
      } else {
        this.setState(
          prevState => ({ selectedIds: [...prevState.selectedIds, targetId] }),
          () => console.log('tile selections: ', this.state.selectedIds)
        );
      }
    };

    this.onKeyDown = event => {
      console.log(event.key);
      if (event.key === 'Enter') {
        event.preventDefault();
        this.onSelect(event);
      }
    };
  }
  render() {
    const { selectedIds } = this.state;

    return (
      <div>
        <Tile
          title="Tile 1"
          id="tile-1"
          onClick={this.onSelect}
          onKeyDown={this.onKeyDown}
          isSelected={selectedIds.includes('tile-1')}
        />
        <Tile
          title="Tile 2"
          id="tile-2"
          onClick={this.onSelect}
          onKeyDown={this.onKeyDown}
          isSelected={selectedIds.includes('tile-2')}
        />
        <Tile title="Tile 3" id="tile-3" isDisabled />
        <Tile
          title="Tile 4"
          id="tile-4"
          onClick={this.onSelect}
          onKeyDown={this.onKeyDown}
          isSelected={selectedIds.includes('tile-4')}
        />
      </div>
    );
  }
}
```
