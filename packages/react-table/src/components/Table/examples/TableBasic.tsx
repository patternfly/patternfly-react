import React from 'react';
// import { Table, TableHeader, TableBody } from '@patternfly/react-table';
// import { ToggleGroup, ToggleGroupItem } from '@patternfly/react-core';

const TableBasic: React.FunctionComponent = () => <div>Hello World</div>;

/*
class SimpleTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      choice: 'default'
    };
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(isSelected, event) {
    this.setState({
      choice: event.currentTarget.id
    });
  }

  render() {
    // need to make a comment to change
    const { choice } = this.state;

    const columns = ['Repositories', 'Branches', 'Pull requests', 'Workspaces', 'Last commit'];
    const rows = [
      ['Repository one', 'Branch one', 'PR one', 'Workspace one', 'Commit one'],
      ['Repository two', 'Branch two', 'PR two', 'Workspace two', 'Commit two'],
      ['Repository three', 'Branch three', 'PR three', 'Workspace three', 'Commit three']
    ];

    return (
      <React.Fragment>
        <ToggleGroup aria-label="Default with single selectable">
          <ToggleGroupItem
            text="Default"
            buttonId="default"
            isSelected={choice === 'default'}
            onChange={this.handleItemClick}
          />
          <ToggleGroupItem
            text="Compact"
            buttonId="compact"
            isSelected={choice === 'compact'}
            onChange={this.handleItemClick}
          />
          <ToggleGroupItem
            text="Compact without borders"
            buttonId="compactBorderless"
            isSelected={choice === 'compactBorderless'}
            onChange={this.handleItemClick}
          />
        </ToggleGroup>
        <Table
          aria-label="Simple Table"
          variant={choice !== 'default' ? 'compact' : null}
          borders={choice !== 'compactBorderless'}
          cells={columns}
          rows={rows}
        >
          <TableHeader />
          <TableBody />
        </Table>
      </React.Fragment>
    );
  }
}
*/
export default TableBasic;
