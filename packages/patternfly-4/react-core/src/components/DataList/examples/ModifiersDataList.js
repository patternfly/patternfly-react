import React from 'react';
import { DataList, DataListItem, DataListCell, DataListCheck, DataListAction } from '@patternfly/react-core';

class ModifiersDataList extends React.Component {
  state = { show: true }
  render() {
    const previewPlaceholder = {
      display: 'block',
      width: '100%',
      padding: '.25rem .5rem',
      color: '#004e8a',
      backgroundColor: '#def3ff',
      border: '1px solid rgba(0,0,0,.1)',
      borderRadius: '4px'
    };

    return [
      <div key="example-1">
        <h2>Default fitting - example 1</h2>
        <DataList aria-label="Width modifier data list example 1">
          <DataListItem aria-labelledby="width-ex1-item1">
            <DataListCheck aria-labelledby="width-ex1-check1" name="width-ex1-item1" />
            <DataListCell>
              <div style={previewPlaceholder}>
                <b id="width-ex1-item1">default</b>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </DataListCell>
            <DataListCell>
              <div style={previewPlaceholder}>
                <b>default</b>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua.
                </p>
              </div>
            </DataListCell>
          </DataListItem>
        </DataList>
      </div>,
      <div key="example-2">
        <h2>Flex modifiers - example 2</h2>
        <DataList aria-label="Width modifier data list example 2">
          <DataListItem aria-labelledby="width-ex2-item1">
            <DataListCheck aria-labelledby="width-ex2-check1" name="width-ex2-check1" />
            <DataListCell width={2}>
              <div style={previewPlaceholder}>
                <b id="width-ex2-item1">width 2</b>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
              </div>
            </DataListCell>
            <DataListCell width={4}>
              <div style={previewPlaceholder}>
                <b>width 4</b>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </DataListCell>
            <DataListAction
              aria-labelledby="width-ex2-item1 width-ex2-action1"
              id="width-ex2-action1"
              aria-label="Actions"
            />
          </DataListItem>
        </DataList>
      </div>,
      <div key="example-3">
        <h2>Flex modifiers - example 3</h2>
        <DataList aria-label="Width modifier data list example 3">
          <DataListItem aria-labelledby="width-ex3-item1" isExpanded={this.state.show}>
            <DataListToggle
              isExpanded={this.state.show}
              id="width-ex3-toggle1"
              aria-labelledby="width-ex3-toggle1 width-ex3-item1"
              aria-label="Toggle details for"
              onClick={() => this.setState({show: !this.state.show})}
            />
            <DataListCheck aria-labelledby="width-ex3-check1" name="width-ex3-check1" />
            <DataListCell width={5}>
              <div style={previewPlaceholder}>
                <b id="width-ex3-item1">width 5</b>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </DataListCell>
            <DataListCell width={2}>
              <div style={previewPlaceholder}>
                <b>width 2</b>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </DataListCell>
            <DataListCell>
              <div style={previewPlaceholder}>default</div>
            </DataListCell>
            <DataListAction
              aria-labelledby="width-ex3-item1 width-ex3-action1"
              id="width-ex3-action1"
              aria-label="Actions"
            />
            <DataListContent aria-label="Primary Content Details" isHidden={!this.state.show}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </DataListContent>
          </DataListItem>
        </DataList>
      </div>
    ];
  }
}

export default ModifiersDataList;
