---
title: 'Bulk select table'
section: 'demos'
---

## Bulk select table demo

import { Pagination, PaginationVariant, Title, Checkbox } from '@patternfly/react-core';
import { Table, TableHeader, TableBody} from '@patternfly/react-table';

```js
import React from 'react';
import { Pagination, PaginationVariant, Title, Checkbox } from '@patternfly/react-core';
import { Table, TableHeader, TableBody } from '@patternfly/react-table';

class BulkSelectTableDemo extends React.Component {
  constructor(props) {
    this.state = {
      res: [],
      perPage: 20,
      total: 100,
      page: 1,
      error: null,
      loading: true,
      selectedItems: [],
      numSelected: 0,
      isDropDownOpen: false,
      isKebabOpen: false,
      searchValue: ''
    };

    this.onSelect = (event, isSelected, rowId) => {
      const { selectedItems } = this.state;
      const rows = [...this.state.res];
      const id = rows[rowId].id;
      rows[rowId].selected = isSelected;
      this.setState({
        res: rows,
        selectedItems: isSelected ? [...selectedItems, id] : selectedItems.filter(itemId => itemId !== id)
      });
    };

    this.updateSelected = () => {
      const { res, selectedItems } = this.state;
      let rows = res.map(post => {
        post.selected = selectedItems.includes(post.id);
        return post;
      });

      this.setState({
        res: rows
      });
    };

    this.handleSelectClick = newState => {
      if (newState === 'none') {
        this.setState(
          {
            selectedItems: []
          },
          this.updateSelected
        );
      } else if (newState === 'page') {
        let newRows = [];
        let rows = this.state.res.map(post => {
          const isSelected = post.selected;
          newRows = isSelected ? [...newRows] : [...newRows, post.id];
          post.selected = true;
          return post;
        });
        this.setState(
          {
            selectedItems: this.state.selectedItems.concat(newRows)
          },
          this.updateSelected
        );
      } else {
        const { total } = this.state;
        let newRows = [];
        for (var i = 1; i <= total; i++) newRows = [...newRows, i];

        this.setState(
          {
            selectedItems: newRows
          },
          this.updateSelected
        );
      }
    };

    this.onDropDownToggle = isOpen => {
      this.setState({
        isDropDownOpen: isOpen
      });
    };

    this.onDropDownSelect = event => {
      this.setState({
        isDropDownOpen: !this.state.isDropDownOpen
      });
    };
  }

  fetch(page, perPage) {
    this.setState({ loading: true });
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${perPage}`)
      .then(resp => resp.json())
      .then(resp => this.setState({ res: resp, perPage, page, loading: false }))
      .then(() => this.updateSelected())
      .catch(err => this.setState({ error: err, loading: false }));
  }

  componentDidMount() {
    this.fetch(this.state.page, this.state.perPage);
  }

  renderPagination(variant = 'top') {
    const { page, perPage, total } = this.state;
    return (
      <Pagination
        itemCount={total}
        page={page}
        perPage={perPage}
        onSetPage={(_evt, value) => {
          this.fetch(value, perPage);
        }}
        onPerPageSelect={(_evt, value) => {
          this.fetch(1, value);
        }}
        variant={variant}
      />
    );
  }

  buildSelectDropdown() {
    const { isDropDownOpen, selectedItems, total } = this.state;
    const numSelected = selectedItems.length;
    const allSelected = numSelected === total;
    const anySelected = numSelected > 0;
    const isChecked = allSelected ? true : numSelected > 0 ? null : false;

    const items = [
      <DropdownItem key="item-1" onClick={() => this.handleSelectClick('none')}>
        Select none (0 items)
      </DropdownItem>,
      <DropdownItem key="item-2" onClick={() => this.handleSelectClick('page')}>
        Select page ({this.state.perPage} items)
      </DropdownItem>,
      <DropdownItem key="item-3" onClick={() => this.handleSelectClick('all')}>
        Select all ({this.state.total} items)
      </DropdownItem>
    ];

    return (
      <Dropdown
        onSelect={this.onDropDownSelect}
        position={DropdownPosition.left}
        toggle={
          <DropdownToggle
            splitButtonItems={[
              <DropdownToggleCheckbox
                id="example-checkbox-2"
                key="split-checkbox"
                aria-label={anySelected ? 'Deselect all' : 'Select all'}
                isChecked={isChecked}
                onClick={() => {
                  anySelected ? this.handleSelectClick('none') : this.handleSelectClick('all');
                }}
              ></DropdownToggleCheckbox>
            ]}
            onToggle={this.onDropDownToggle}
          >
            {numSelected !== 0 && <React.Fragment>{numSelected} selected</React.Fragment>}
          </DropdownToggle>
        }
        isOpen={isDropDownOpen}
        dropdownItems={items}
      />
    );
  }

  renderToolbar() {
    return (
      <Toolbar className="pf-l-toolbar pf-u-justify-content-space-between pf-u-mx-xl pf-u-my-md">
        <ToolbarGroup>
          <ToolbarItem className="pf-u-mr-md">{this.buildSelectDropdown()}</ToolbarItem>
        </ToolbarGroup>
        {this.renderPagination()}
      </Toolbar>
    );
  }

  render() {
    const { loading, res } = this.state;
    const rows = res.map(post => ({
      cells: [post.title, post.body],
      selected: post.selected
    }));

    return (
      <React.Fragment>
        {this.renderToolbar()}
        {!loading && (
          <Table
            header={<div></div>}
            cells={['Title', 'Body']}
            rows={rows}
            onSelect={this.onSelect}
            canSelectAll={false}
          >
            <TableHeader />
            <TableBody />
          </Table>
        )}
        {loading && (
          <center>
            <Title size="3xl">Please wait while loading data</Title>
          </center>
        )}
        {this.renderPagination()}
      </React.Fragment>
    );
  }
}
```
