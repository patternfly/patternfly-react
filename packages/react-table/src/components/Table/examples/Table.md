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
                  workspaces: 'Workplace three'
                },
                {
                  repositories: 'Repositories four',
                  branches: 'Branch four',
                  pullRequests: 'Pull request four',
                  workspaces: 'Workplace four'
                }
              ]
            },
            {
              repositories: 'Repositories five',
              branches: 'Branch five',
              pullRequests: 'Pull request five',
              workspaces: 'Workplace five'
            },
            {
              repositories: 'Repositories six',
              branches: 'Branch six',
              pullRequests: 'Pull request six',
              workspaces: 'Workplace six'
            }
          ]
        },
        {
          repositories: 'Repositories seven',
          branches: 'Branch seven',
          pullRequests: 'Pull request seven',
          workspaces: 'Workplace seven',
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
          ...(x.children && x.children.length ? this.buildRows(x.children, level + 1, 1, !isExpanded || isHidden) : []),
          ...this.buildRows(xs, level, posinset + 1, isHidden)
        ];
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
        };
      });
    };

    this.onToggleRowDetails = (event, rowIndex, title) => {
      this.setState(prevState => {
        const { expandedDetailsRows } = prevState;
        const openedIndex = expandedDetailsRows.indexOf(title);
        const newExpandedDetailsRows =
          openedIndex === -1 ? [...expandedDetailsRows, title] : expandedDetailsRows.filter(o => o !== title);
        return {
          expandedDetailsRows: newExpandedDetailsRows
        };
      });
    };

    this.onCheck = (event, checked, rowIndex, checkedTitle) => {
      this.setState(prevState => {
        let flattenedData = this.getFlattenedTitles(prevState.data, checkedTitle);
        const prevChecked = prevState.checkedRows;
        return {
          checkedRows: checked
            ? prevChecked.concat(flattenedData.filter(title => !prevChecked.includes(title)))
            : prevChecked.filter(title => !flattenedData.includes(title))
        };
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
          flattenedData = flattenedData.concat(
            this.getFlattenedTitles(item.children, checkedTitle, item.repositories === checkedTitle || parentChecked)
          );
        }
        return flattenedData;
      });
      return flattenedData;
    };

    this.areAllDescendantsChecked = row =>
      row.children
        ? row.children.every(child => this.areAllDescendantsChecked(child))
        : this.state.checkedRows.indexOf(row.repositories) !== -1;

    this.areSomeDescendantsChecked = row =>
      row.children
        ? row.children.some(child => this.areSomeDescendantsChecked(child))
        : this.state.checkedRows.indexOf(row.repositories) !== -1;

    this.mapChecked = row => {
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
              {row.cells.map((cell, cellIndex) =>
                cellIndex === 0 ? (
                  <Td
                    key={`${rowIndex}_0`}
                    treeRow={{
                      onCollapse: this.onCollapse,
                      onCheckChange: this.onCheck,
                      onToggleRowDetails: this.onToggleRowDetails,
                      props: row.props,
                      rowIndex: rowIndex
                    }}
                  >
                    {cell}
                  </Td>
                ) : (
                  <Td key={`${rowIndex}_${cellIndex}`} data-label={columns[cellIndex]}>
                    {cell}
                  </Td>
                )
              )}
            </TreeRowWrapper>
          ))}
        </Tbody>
      </TableComposable>
    );
  }
}
```

### Draggable Table

```js isBeta
import React from 'react';
import { TableComposable, Thead, Tbody, Tr, Th, Td } from '@patternfly/react-table';

class DraggableTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      draggedItemId: null,
      draggingToItemIndex: null,
      dragging: false,
      itemOrder: ['row1', 'row2', 'row3'],
      tempItemOrder: []
    };
    this.bodyRef = React.createRef();

    this.getIndex = id => Array.from(this.bodyRef.current.children).findIndex(item => item.id === id);

    this.onDragStart = evt => {
      evt.dataTransfer.effectAllowed = 'move';
      evt.dataTransfer.setData('text/plain', evt.currentTarget.id);
      const draggedItemId = evt.currentTarget.id;

      evt.currentTarget.classList.add(styles.modifiers.ghostRow);
      evt.currentTarget.setAttribute('aria-pressed', 'true');
      this.setState({
        draggedItemId,
        dragging: true
      });
    };

    this.moveItem = (arr, i1, toIndex) => {
      const fromIndex = arr.indexOf(i1);
      if (fromIndex === toIndex) {
        return arr;
      }
      const temp = arr.splice(fromIndex, 1);
      arr.splice(toIndex, 0, temp[0]);

      return arr;
    };

    this.move = itemOrder => {
      const ulNode = this.bodyRef.current;
      const nodes = Array.from(ulNode.children);
      if (nodes.map(node => node.id).every((id, i) => id === itemOrder[i])) {
        return;
      }
      while (ulNode.firstChild) {
        ulNode.removeChild(ulNode.lastChild);
      }

      itemOrder.forEach(id => {
        ulNode.appendChild(nodes.find(n => n.id === id));
      });
    };

    this.onDragCancel = () => {
      // this.move(this.state.itemOrder);
      Array.from(this.bodyRef.current.children).forEach(el => {
        el.classList.remove(styles.modifiers.ghostRow);
        el.setAttribute('aria-pressed', 'false');
      });
      this.setState({
        draggedItemId: null,
        draggingToItemIndex: null,
        dragging: false
      });
    };

    this.onDragLeave = evt => {
      if (!this.isValidDrop(evt)) {
        this.move(this.state.itemOrder);
        this.setState({
          draggingToItemIndex: null
        });
      }
    };

    this.isValidDrop = evt => {
      const ulRect = this.bodyRef.current.getBoundingClientRect();
      return (
        evt.clientX > ulRect.x &&
        evt.clientX < ulRect.x + ulRect.width &&
        evt.clientY > ulRect.y &&
        evt.clientY < ulRect.y + ulRect.height
      );
    };

    this.onDrop = evt => {
      if (this.isValidDrop(evt)) {
        this.setState({
          itemOrder: this.state.tempItemOrder
        });
      } else {
        this.onDragCancel();
      }
    };

    this.onDragOver = evt => {
      evt.preventDefault();

      const curListItem = evt.target.closest('tr');
      if (!curListItem || !this.bodyRef.current.contains(curListItem) || curListItem.id === this.state.draggedItemId) {
        return null;
      } else {
        const dragId = curListItem.id;
        const draggingToItemIndex = Array.from(this.bodyRef.current.children).findIndex(item => item.id === dragId);
        if (draggingToItemIndex !== this.state.draggingToItemIndex) {
          const tempItemOrder = this.moveItem([...this.state.itemOrder], this.state.draggedItemId, draggingToItemIndex);
          this.move(tempItemOrder);

          this.setState({
            draggingToItemIndex,
            tempItemOrder
          });
        }
      }
    };

    this.onDragEnd = evt => {
      evt.target.classList.remove(styles.modifiers.ghostRow);
      evt.target.setAttribute('aria-pressed', 'false');
      this.setState({
        draggedItemId: null,
        draggingToItemIndex: null,
        dragging: false
      });
    };
  }

  render() {
    const columns = ['Repositories', 'Branches', 'Pull requests', 'Workspaces', 'Last commit'];
    const rows = [
      {
        id: 'row1',
        repository: 'one',
        branch: 'two',
        pullRequest: 'three',
        workspace: 'four',
        lastCommit: 'five'
      },
      {
        id: 'row2',
        repository: 'one -2',
        branch: null,
        pullRequest: null,
        workspace: 'four -2',
        lastCommit: 'five -2'
      },
      {
        id: 'row3',
        repository: 'one - 3',
        branch: 'two - 3',
        pullRequest: 'three - 3',
        workspace: 'four - 3',
        lastCommit: 'five - 3'
      }
    ];

    return (
      <TableComposable aria-label="Draggable table">
        <Thead>
          <Tr>
            <Th />
            {columns.map((column, columnIndex) => (
              <Th key={columnIndex}>{column}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody ref={this.bodyRef} onDragOver={this.onDragOver} onDrop={this.onDragOver} onDragLeave={this.onDragLeave}>
          {rows.map((row, rowIndex) => (
            <Tr
              key={rowIndex}
              id={row.id}
              draggable
              onDrop={this.onDrop}
              onDragEnd={this.onDragEnd}
              onDragStart={this.onDragStart}
            >
              <Td
                draggableRow={{
                  id: `draggable-row-${row.id}`,
                  onSomethingClick: this.onSomethingClick
                }}
              />
              {Object.keys(row).map((key, keyIndex) => (
                <Td key={`${rowIndex}_${keyIndex}`} dataLabel={columns[keyIndex]}>
                  {row[key]}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </TableComposable>
    );
  }
}
```
