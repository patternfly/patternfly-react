import React from 'react';
import { Card, PageSection, Table, TableHeader, TableBody, expandable } from '@patternfly/react-table';
import DashboardWrapper from '@patternfly/react-core/src/demos/examples/DashboardWrapper';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
class ExpandCollapseAllTableDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
      selectedRows: 0,
      expandedRows: 0,
      expandCollapseToggle: 'expand',
      collapseAllAriaLabel: 'Expand all',
      columns: [
        {
          title: 'Repositories',
          cellFormatters: [expandable]
        },
        'Branches',
        'Pull requests',
        'Workspaces',
        'Last Commit'
      ],
      rows: [
        {
          cells: ['one', 'two', 'three', 'four', 'five']
        },
        {
          isOpen: false,
          cells: ['parent - 1', 'two', 'three', 'four', 'five']
        },
        {
          parent: 1,
          cells: ['child - 1']
        },
        {
          isOpen: false,
          cells: ['parent - 2', 'two', 'three', 'four', 'five']
        },
        {
          parent: 3,
          cells: ['child - 2']
        },
        {
          isOpen: false,
          cells: ['parent - 3', 'two', 'three', 'four', 'five']
        },
        {
          parent: 5,
          cells: ['child - 3']
        }
      ]
    };
    this.onCollapse = this.onCollapse.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  onCollapse(event, rowIndex, isOpen) {
    const { rows, expandedRows, expandCollapseToggle } = this.state;
    const expandableRowLength = this.state.rows.filter(row => row.isOpen !== undefined).length;
    /**
     * Please do not use rowKey as row index for more complex tables.
     * Rather use some kind of identifier like ID passed with each row.
     */
    const collapseAll = rowIndex === undefined;
    let newRows = Array.from(rows);
    let newExpandedRows = expandedRows;
    if (collapseAll) {
      newRows = newRows.map(r => (r.isOpen === undefined ? r : { ...r, isOpen }));
      newExpandedRows = isOpen ? expandableRowLength : 0;
    } else {
      newRows[rowIndex] = { ...newRows[rowIndex], isOpen };
      newExpandedRows = isOpen ? newExpandedRows + 1 : newExpandedRows - 1;
    }
    let toggle = expandCollapseToggle;
    if (newExpandedRows === expandableRowLength) {
      toggle = 'collapse';
    } else if (newExpandedRows === 0) {
      toggle = 'expand';
    }
    this.setState({
      rows: newRows,
      expandedRows: newExpandedRows,
      expandCollapseToggle: toggle,
      collapseAllAriaLabel: toggle === 'expand' ? 'Expand All' : 'Collapse All'
    });
  }

  onSelect(event, isSelected, rowId) {
    let isChecked = null;
    let selectedRows = this.state.selectedRows;
    const selectableRowLength = this.state.rows.filter(row => row.parent === undefined).length;
    let rows;
    if (rowId === -1) {
      rows = this.state.rows.map(row => {
        row.selected = isSelected;
        return row;
      });
      isChecked = isSelected;
      selectedRows = isSelected ? selectableRowLength : 0;
    } else {
      rows = [...this.state.rows];
      rows[rowId] = { ...rows[rowId], selected: isSelected };
      selectedRows = isSelected ? selectedRows + 1 : selectedRows - 1;
      if (selectedRows === 0) {
        isChecked = false;
      } else if (selectedRows === selectableRowLength) {
        isChecked = true;
      }
    }
    this.setState({
      rows,
      isChecked,
      selectedRows
    });
  }

  render() {
    const { columns, rows, collapseAllAriaLabel } = this.state;

    return (
      <React.Fragment>
        <DashboardWrapper hasPageTemplateTitle>
          <PageSection
            padding={{
              default: 'noPadding',
              xl: 'padding'
            }}
          >
            <Card component="div">
              <Table
                aria-label="Collapsible table"
                onSelect={this.onSelect}
                onCollapse={this.onCollapse}
                rows={rows}
                cells={columns}
                canSelectAll={false}
                canCollapseAll={true}
                collapseAllAriaLabel={collapseAllAriaLabel}
              >
                <TableHeader />
                <TableBody />
              </Table>
            </Card>
          </PageSection>
        </DashboardWrapper>
      </React.Fragment>
    );
  }
}
