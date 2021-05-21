---
id: Table
cssPrefix: pf-c-table
section: components
propComponents:
  [
    'Table',
    'TableHeader',
    'TableBody',
    'EditableSelectInputCell',
    'EditableTextCell',
    'TableComposable',
    'Thead',
    'Tbody',
    'Tr',
    'Th',
    'Td',
    'Caption',
  ]
ouia: true
---

Note: Table lives in its own package at [@patternfly/react-table](https://www.npmjs.com/package/@patternfly/react-table)!

import SearchIcon from '@patternfly/react-icons/dist/js/icons/search-icon';
import CodeBranchIcon from '@patternfly/react-icons/dist/js/icons/code-branch-icon';
import CodeIcon from '@patternfly/react-icons/dist/js/icons/code-icon';
import CubeIcon from '@patternfly/react-icons/dist/js/icons/cube-icon';
import LeafIcon from '@patternfly/react-icons/dist/js/icons/leaf-icon';
import FolderIcon from '@patternfly/react-icons/dist/js/icons/folder-icon';
import FolderOpenIcon from '@patternfly/react-icons/dist/js/icons/folder-open-icon';

import { Checkbox, ToggleGroup, ToggleGroupItem } from '@patternfly/react-core';

import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';

import DemoSortableTable from './DemoSortableTable';

## Table examples

### Tree table
To enable a tree table:
1. Pass the `isTreeTable` prop to the `Table` component
2. Pass the following props to each row:
    - `isExpanded` - Flag indicating the node is expanded and its children are visible
    - `isDetailsExpanded` - (optional) Flag indicating the row's details are visible in responsive view
    - `isHidden` - Flag indicating the node's parent is expanded and this node is visible
    - `aria-level` - number representing how many levels deep this node is nested
    - `aria-posinset` - number representing where in the order this node sits amongst its siblings 
    - `aria-setsize` - number representing the number of children this node has
    - `isChecked` - (optional) boolean used if this row uses checkboxes, flag indicating the checkbox checked
    - `icon` - (optional) ReactNode icon to display before the row title
    - `toggleAriaLabel` - (optional) accessible label for the expand/collapse children rows toggle arrow
    - `checkAriaLabel` - (optional) accessible label for the checkbox
    - `showDetailsAriaLabel` - (optional) accessible label for the show row details button in the responsive view
3. Use the `treeRow` cellTransform in the first column of the table. `treeRow` expects one or two callbacks as params.
    - `onCollapse` - Callback when user expands/collapses a row to reveal/hide the row's children.
    - `onCheckChange` - (optional) Callback when user changes the checkbox on a row.
    - `onToggleRowDetails` - (optional) Callback when user shows/hides the row details in responsive view.

Note: If this table is going to be tested using axe-core, the tests will flag the use of aria-level, 
aria-posinset, and aria-setsize as violations. This is an intentional choice at this time so that
the voice over technologies will recognize the flat table structure as a tree.

```js
import React from 'react';
import { Table, TableHeader, TableBody, headerCol, treeRow } from '@patternfly/react-table';
import { Checkbox } from '@patternfly/react-core';
import LeafIcon from '@patternfly/react-icons/dist/js/icons/leaf-icon';
import FolderIcon from '@patternfly/react-icons/dist/js/icons/folder-icon';
import FolderOpenIcon from '@patternfly/react-icons/dist/js/icons/folder-open-icon';

class TreeTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          repositories: 'Repositories one',
          branches: 'Branch one',
          pullRequests: 'Pull request one',
          workspaces: 'Workplace one',
          children: [
            {
              repositories: 'Repositories two',
              branches: 'Branch two',
              pullRequests: 'Pull request two',
              workspaces: 'Workplace two',
              children: [
                {
                  repositories: 'Repositories three',
                  branches: 'Branch three',
                  pullRequests: 'Pull request three',
                  workspaces: 'Workplace three',
                },
                {
                  repositories: 'Repositories four',
                  branches: 'Branch four',
                  pullRequests: 'Pull request four',
                  workspaces: 'Workplace four',
                }
              ]
            },
            {
              repositories: 'Repositories five',
              branches: 'Branch five',
              pullRequests: 'Pull request five',
              workspaces: 'Workplace five',
            }, 
            {
              repositories: 'Repositories six',
              branches: 'Branch six',
              pullRequests: 'Pull request six',
              workspaces: 'Workplace six',
            }
          ]
        },
        {
          repositories: 'Repositories seven',
          branches: 'Branch seven',
          pullRequests: 'Pull request seven',
          workspaces: 'Workplace seven' ,
          children: [
            {
              repositories: 'Repositories eight',
              branches: 'Branch eight',
              pullRequests: 'Pull request eight',
              workspaces: 'Workplace eight'
            }
          ]
        },
        {
          repositories: 'Repositories nine',
          branches: 'Branch nine',
          pullRequests: 'Pull request nine',
          workspaces: 'Workplace nine'
        }
      ],
      expandedRows: ['Repositories one', 'Repositories six'],
      expandedDetailsRows: [],
      checkedRows: []
    };
    
    /** 
      Recursive function which flattens the data into an array flattened IRow objects 
      to be passed to the `rows` prop of the Table
      params: 
        - rowData - array of data
        - level - number representing how deeply nested the current row is
        - posinset - position of the row relative to this row's siblings
        - isHidden - defaults to false, true if this row's parent is expanded
    */
    this.buildRows = ([x, ...xs], level, posinset, isHidden = false) => {
      if (x) {
        const isExpanded = this.state.expandedRows.includes(x.repositories);
        const isDetailsExpanded = this.state.expandedDetailsRows.includes(x.repositories);
        const isChecked = this.mapChecked(x);
        let icon = <LeafIcon />;
        if (x.children) {
          icon = isExpanded ? <FolderOpenIcon aria-hidden /> : <FolderIcon aria-hidden />;
        }
        
        return [
          {
            cells: [x.repositories, x.branches, x.pullRequests, x.workspaces],
            props: {
              isExpanded,
              isDetailsExpanded,
              isHidden,
              'aria-level': level,
              'aria-posinset': posinset,
              'aria-setsize': x.children ? x.children.length : 0,
              isChecked,
              icon
            }
          },
          ...(x.children && x.children.length) ? this.buildRows(x.children, level + 1, 1, !isExpanded || isHidden) : [],
          ...this.buildRows(xs, level, posinset + 1, isHidden)
        ]
      } 
      return [];
    };
    
    this.onToggleRowDetails = (event, rowIndex, title) => {
      this.setState(prevState => {
        const { expandedDetailsRows } = prevState;
        const openedIndex = expandedDetailsRows.indexOf(title);
        const newExpandedDetailsRows = openedIndex === -1 ? [...expandedDetailsRows, title] : expandedDetailsRows.filter(o => o !== title);
        return {
          expandedDetailsRows: newExpandedDetailsRows
        }
      });
    };
    
    this.onCollapse = (event, rowIndex, title) => {
      this.setState(prevState => {
        const { expandedRows } = prevState;
        const openedIndex = expandedRows.indexOf(title);
        const newExpandedRows = openedIndex === -1 ? [...expandedRows, title] : expandedRows.filter(o => o !== title);
        return {
          expandedRows: newExpandedRows
        }
      });
    };
    
    this.onCheck = (event, checked, rowIndex, checkedTitle) => {
      this.setState(prevState => {
        let flattenedData = this.getFlattenedTitles(prevState.data, checkedTitle);
        const prevChecked = prevState.checkedRows;
        return {
          checkedRows: checked ? 
            prevChecked.concat(flattenedData.filter(title => !prevChecked.includes(title))) :
            prevChecked.filter(title => !flattenedData.includes(title))
        }
      });
    };
    
    // // helper methods for determining the checkbox's checked state for each row  ///
    
    /** Recursive function which flattens the data into an array of row titles 
    * whose checkboxes' checked states are being updated.
    * Titles are only added to the array if they are the root checked title node, 
    * or if they are a descendent of the root checked title node */
    this.getFlattenedTitles = (data, checkedTitle, parentChecked) => {
      let flattenedData = [];  
      data.forEach(item => {
        if (item.repositories === checkedTitle || parentChecked) {
          flattenedData.push(item.repositories);
        }
        if (item.children) {
          flattenedData = flattenedData.concat(this.getFlattenedTitles(item.children, checkedTitle, item.repositories === checkedTitle || parentChecked));
        }
        return flattenedData;
      });
      return flattenedData;
    };
    
    this.areAllDescendantsChecked = (row) =>
      row.children
        ? row.children.every(child => this.areAllDescendantsChecked(child))
        : this.state.checkedRows.indexOf(row.repositories) !== -1;
    
    this.areSomeDescendantsChecked = (row) =>
      row.children
        ? row.children.some(child => this.areSomeDescendantsChecked(child))
        : this.state.checkedRows.indexOf(row.repositories) !== -1;
  
    this.mapChecked = (row) => {
      if (this.areAllDescendantsChecked(row)) {
        return true;
      }
      if (this.areSomeDescendantsChecked(row)) {
        return null;
      }
      return false;
    };
  }

  render() {
    return (
      <Table
      isTreeTable
      aria-label="Tree table"
      cells={[
        { 
          title: 'Repositories', 
          cellTransforms: [treeRow(
            this.onCollapse, 
            this.onCheck, 
            this.onToggleRowDetails)
          ] 
         }, 
        'Branches', 
        { title: 'Pull requests' }, 
        'Workspaces']}
      rows={this.buildRows(this.state.data, 1, 1)}        
    >
      <TableHeader />
      <TableBody/>
    </Table>
    );
  }
}
```

## TableComposable examples

### Composable: Tree table

To enable a tree table:
1. Pass the `isTreeTable` prop to the `TableComposable` component
2. Use a `TreeRowWrapper` rather than `Tr`
3. Pass the following `props` to each row (both the `TreeRowWrapper` and the `treeRow` in the first column):
    - `isExpanded` - Flag indicating the node is expanded and its children are visible
    - `isDetailsExpanded` - (optional) Flag indicating the row's details are visible in responsive view
    - `isHidden` - Flag indicating the node's parent is expanded and this node is visible
    - `aria-level` - number representing how many levels deep this node is nested
    - `aria-posinset` - number representing where in the order this node sits amongst its siblings 
    - `aria-setsize` - number representing the number of children this node has
    - `isChecked` - (optional) if this row uses checkboxes, flag indicating the checkbox checked
    - `icon` - (optional) ReactNode icon to display before the row title
    - `toggleAriaLabel` - (optional) accessible label for the expand/collapse children rows toggle arrow
    - `checkAriaLabel` - (optional) accessible label for the checkbox
    - `showDetailsAriaLabel` - (optional) accessible label for the show row details button in the responsive view
4. The first `Td` in each row will pass the following to the `treeRow` prop:
    - `onCollapse` - Callback when user expands/collapses a row to reveal/hide the row's children.
    - `onCheckChange` - (optional) Callback when user changes the checkbox on a row.
    - `onToggleRowDetails` - (optional) Callback when user shows/hides the row details in responsive view.
    - `props` - (as defined above)
    - `rowIndex` - number representing the index of the row
    
Note: If this table is going to be tested using axe-core, the tests will flag the use of aria-level, 
aria-posinset, and aria-setsize as violations. This is an intentional choice at this time so that
the voice over technologies will recognize the flat table structure as a tree.

```js isBeta
import React from 'react';
import { TableComposable, Thead, Tbody, Tr, Th, Td, Caption, TreeRowWrapper } from '@patternfly/react-table';
import { ToggleGroup, ToggleGroupItem } from '@patternfly/react-core';
import LeafIcon from '@patternfly/react-icons/dist/js/icons/leaf-icon';
import FolderIcon from '@patternfly/react-icons/dist/js/icons/folder-icon';
import FolderOpenIcon from '@patternfly/react-icons/dist/js/icons/folder-open-icon';

class TreeTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          repositories: 'Repositories one',
          branches: 'Branch one',
          pullRequests: 'Pull request one',
          workspaces: 'Workplace one',
          children: [
            {
              repositories: 'Repositories two',
              branches: 'Branch two',
              pullRequests: 'Pull request two',
              workspaces: 'Workplace two',
              children: [
                {
                  repositories: 'Repositories three',
                  branches: 'Branch three',
                  pullRequests: 'Pull request three',
                  workspaces: 'Workplace three',
                },
                {
                  repositories: 'Repositories four',
                  branches: 'Branch four',
                  pullRequests: 'Pull request four',
                  workspaces: 'Workplace four',
                }
              ]
            },
            {
              repositories: 'Repositories five',
              branches: 'Branch five',
              pullRequests: 'Pull request five',
              workspaces: 'Workplace five',
            }, 
            {
              repositories: 'Repositories six',
              branches: 'Branch six',
              pullRequests: 'Pull request six',
              workspaces: 'Workplace six',
            }
          ]
        },
        {
          repositories: 'Repositories seven',
          branches: 'Branch seven',
          pullRequests: 'Pull request seven',
          workspaces: 'Workplace seven' ,
          children: [
            {
              repositories: 'Repositories eight',
              branches: 'Branch eight',
              pullRequests: 'Pull request eight',
              workspaces: 'Workplace eight'
            }
          ]
        },
        {
          repositories: 'Repositories nine',
          branches: 'Branch nine',
          pullRequests: 'Pull request nine',
          workspaces: 'Workplace nine'
        }
    ],  
      expandedRows: ['Repositories one', 'Repositories six'],
      expandedDetailsRows: [],
      checkedRows: []
    };
    
    /** 
      Recursive function which flattens the data into an array of flattened IRow objects 
      to be later iterated over and each passed to the `row` prop of the TreeRowWrapper
      params: 
        - rowData - array of data
        - level - number representing how deeply nested the current row is
        - posinset - position of the row relative to this row's siblings
        - isHidden - defaults to false, true if this row's parent is expanded
    */
    this.buildRows = ([x, ...xs], level, posinset, isHidden = false) => {
      // take the first datum from the array (if any)
      if (x) {
        const isExpanded = this.state.expandedRows.includes(x.repositories);
        const isDetailsExpanded = this.state.expandedDetailsRows.includes(x.repositories);
        const isChecked = this.mapChecked(x);
        let icon = <LeafIcon />;
        if (x.children) {
          icon = isExpanded ? <FolderOpenIcon aria-hidden /> : <FolderIcon aria-hidden />;
        }
        return [
          {
            cells: [x.repositories, x.branches, x.pullRequests, x.workspaces],
            props: {
              isExpanded,
              isDetailsExpanded,
              isHidden,
              'aria-level': level,
              'aria-posinset': posinset,
              'aria-setsize': x.children ? x.children.length : 0,
              isChecked,
              icon
            }
          },
          ...(x.children && x.children.length) ? this.buildRows(x.children, level + 1, 1, !isExpanded || isHidden) : [],
          ...this.buildRows(xs, level, posinset + 1, isHidden)
        ]
      } 
      return [];
    };
    
    this.onCollapse = (event, rowIndex, title) => {
      this.setState(prevState => {
        const { expandedRows } = prevState;
        const openedIndex = expandedRows.indexOf(title);
        const newExpandedRows = openedIndex === -1 ? [...expandedRows, title] : expandedRows.filter(o => o !== title);
        return {
          expandedRows: newExpandedRows
        }
      });
    };
    
    this.onToggleRowDetails = (event, rowIndex, title) => {
      this.setState(prevState => {
        const { expandedDetailsRows } = prevState;
        const openedIndex = expandedDetailsRows.indexOf(title);
        const newExpandedDetailsRows = openedIndex === -1 ? [...expandedDetailsRows, title] : expandedDetailsRows.filter(o => o !== title);
        return {
          expandedDetailsRows: newExpandedDetailsRows
        }
      });
    };
    
    this.onCheck = (event, checked, rowIndex, checkedTitle) => {
      this.setState(prevState => {
        let flattenedData = this.getFlattenedTitles(prevState.data, checkedTitle);
        const prevChecked = prevState.checkedRows;
        return {
          checkedRows: checked ? 
            prevChecked.concat(flattenedData.filter(title => !prevChecked.includes(title))) :
            prevChecked.filter(title => !flattenedData.includes(title))
        }
      });
    };
    
    // // helper methods for determining the checkbox's checked state for each row  ///
    
    /** Recursive function which flattens the data into an array of row titles 
    * whose checkboxes' checked states are being updated.
    * Titles are only added to the array if they are the root checked title node, 
    * or if they are a descendent of the root checked title node */
    this.getFlattenedTitles = (data, checkedTitle, parentChecked) => {
      let flattenedData = [];  
      data.forEach(item => {
        if (item.repositories === checkedTitle || parentChecked) {
          flattenedData.push(item.repositories);
        }
        if (item.children) {
          flattenedData = flattenedData.concat(this.getFlattenedTitles(item.children, checkedTitle, item.repositories === checkedTitle || parentChecked));
        }
        return flattenedData;
      });
      return flattenedData;
    };
    
    this.areAllDescendantsChecked = (row) =>
      row.children
        ? row.children.every(child => this.areAllDescendantsChecked(child))
        : this.state.checkedRows.indexOf(row.repositories) !== -1;
    
    this.areSomeDescendantsChecked = (row) =>
      row.children
        ? row.children.some(child => this.areSomeDescendantsChecked(child))
        : this.state.checkedRows.indexOf(row.repositories) !== -1;
  
    this.mapChecked = (row) => {
      if (this.areAllDescendantsChecked(row)) {
        return true;
      }
      if (this.areSomeDescendantsChecked(row)) {
        return null;
      }
      return false;
    };
  }

  render() {
  
    const columns = ['Repositories', 'Branches', 'Pull Requests', 'Workspaces'];
    return (
      <TableComposable isTreeTable aria-label="Tree Table">
        <Thead>
          <Tr>
            {columns.map((column, columnIndex) => (
              <Th key={columnIndex}>{column}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {this.buildRows(this.state.data, 1, 1).map((row, rowIndex) => (
            <TreeRowWrapper row={row} key={rowIndex}>
              {row.cells.map((cell, cellIndex) => cellIndex === 0 ? (
                <Td key={cellIndex} treeRow={{
                  onCollapse: this.onCollapse, 
                  onCheckChange: this.onCheck,
                  onToggleRowDetails: this.onToggleRowDetails,
                  props: row.props,
                  rowIndex: rowIndex
                }}>
                  {cell}
                </Td>
              ) : (
                <Td key={cellIndex} data-label={columns[cellIndex]}>{cell}</Td>
              ))}
            </TreeRowWrapper>
          ))}
        </Tbody>
      </TableComposable>
    );
  }
}
```
