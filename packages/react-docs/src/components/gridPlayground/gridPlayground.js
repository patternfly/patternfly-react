import React from 'react';
import { Grid, GridItem, Button } from '@patternfly/react-core';
import { css } from '@patternfly/react-styles';
import styles from './gridPlayground.styles';
import ItemControl from './itemControl';

let currentId = 1;

function createGridItem() {
  return {
    id: currentId++,
    span: 3,
    rowSpan: 1,
    offset: 0
  };
}

class GridPlayground extends React.Component {
  state = {
    gridItems: [createGridItem(), createGridItem(), createGridItem(), createGridItem()]
  };

  handleAddGridItem = () => {
    this.setState(({ gridItems }) => ({
      gridItems: [...gridItems, createGridItem()]
    }));
  };

  handleGridItemUpdate = (id, updates) => {
    const index = this.state.gridItems.findIndex(i => i.id === id);
    this.setState({
      gridItems: [
        ...this.state.gridItems.slice(0, index),
        {
          ...this.state.gridItems[index],
          ...updates
        },
        ...this.state.gridItems.slice(index + 1)
      ]
    });
  };

  render() {
    return (
      <Grid gutter="md">
        <GridItem span={9}>
          <Grid gutter="sm">
            {this.state.gridItems.map(({ id, ...itemProps }) => (
              <GridItem key={id} {...itemProps} className={css(styles.item)}>
                {id}
              </GridItem>
            ))}
          </Grid>
        </GridItem>
        <GridItem span={3} className={css(styles.controlPanel)}>
          <Button isBlock onClick={this.handleAddGridItem}>
            Add Item
          </Button>
          <div className={css(styles.controlList)}>
            {this.state.gridItems.map(item => (
              <ItemControl key={item.id} onUpdateItem={this.handleGridItemUpdate} {...item} />
            ))}
          </div>
        </GridItem>
      </Grid>
    );
  }
}

export default GridPlayground;
