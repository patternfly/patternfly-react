import * as React from 'react';
import {
  compoundExpand,
  IRow,
  ICell,
  IRowCell
} from '@patternfly/react-table';
import { Table, TableHeader, TableBody, TableProps } from '@patternfly/react-table/deprecated';

import CodeBranchIcon from '@patternfly/react-icons/dist/esm/icons/code-branch-icon';
import CodeIcon from '@patternfly/react-icons/dist/esm/icons/code-icon';
import CubeIcon from '@patternfly/react-icons/dist/esm/icons/cube-icon';

import { DemoSortableTable } from './TableSortableForCompoundExpandableDemo';

interface TableState {
  columns: (ICell | string)[];
  rows: IRow[];
}

export class TableEditableCompoundExpandableDemo extends React.Component<TableProps, TableState> {
  static displayName = 'TableEditableCompoundExpandableDemo';
  constructor(props: TableProps) {
    super(props);
    this.state = {
      columns: [
        'Repositories',
        {
          title: 'Branches',
          cellTransforms: [compoundExpand]
        },
        {
          title: 'Pull requests',
          cellTransforms: [compoundExpand]
        },
        {
          title: 'Workspaces',
          cellTransforms: [compoundExpand]
        },
        'Last Commit',
        ''
      ],
      rows: [
        {
          isOpen: true,
          cells: [
            { title: <a href="#">siemur/test-space</a>, props: { component: 'th' } },
            {
              title: (
                <React.Fragment>
                  <CodeBranchIcon key="icon" /> 10
                </React.Fragment>
              ),
              props: { isOpen: true, ariaControls: 'compoound-expansion-table-1' }
            },
            {
              title: (
                <React.Fragment>
                  <CodeIcon key="icon" /> 4
                </React.Fragment>
              ),
              props: { isOpen: false, ariaControls: 'compoound-expansion-table-2' }
            },
            {
              title: (
                <React.Fragment>
                  <CubeIcon key="icon" /> 4
                </React.Fragment>
              ),
              props: { isOpen: false, ariaControls: 'compoound-expansion-table-3' }
            },
            '20 minutes',
            { title: <a href="#">Open in Github</a> }
          ]
        },
        {
          parent: 0,
          compoundParent: 1,
          cells: [
            {
              title: (
                <DemoSortableTable
                  firstColumnRows={['parent-0', 'compound-1', 'three', 'four', 'five']}
                  id="compoound-expansion-table-1"
                />
              ),
              props: { colSpan: 6, className: 'pf-m-no-padding' }
            }
          ]
        },
        {
          parent: 0,
          compoundParent: 2,
          cells: [
            {
              title: (
                <DemoSortableTable
                  firstColumnRows={['parent-0', 'compound-2', 'three', 'four', 'five']}
                  id="compoound-expansion-table-2"
                />
              ),
              props: { colSpan: 6, className: 'pf-m-no-padding' }
            }
          ]
        },
        {
          parent: 0,
          compoundParent: 3,
          cells: [
            {
              title: (
                <DemoSortableTable
                  firstColumnRows={['parent-0', 'compound-3', 'three', 'four', 'five']}
                  id="compoound-expansion-table-3"
                />
              ),
              props: { colSpan: 6, className: 'pf-m-no-padding' }
            }
          ]
        },
        {
          isOpen: false,
          cells: [
            { title: <a href="#">siemur/test-space</a>, props: { component: 'th' } },
            {
              title: (
                <React.Fragment>
                  <CodeBranchIcon key="icon" /> 3
                </React.Fragment>
              ),
              props: { isOpen: false, ariaControls: 'compoound-expansion-table-4' }
            },
            {
              title: (
                <React.Fragment>
                  <CodeIcon key="icon" /> 4
                </React.Fragment>
              ),
              props: { isOpen: false, ariaControls: 'compoound-expansion-table-5' }
            },
            {
              title: (
                <React.Fragment>
                  <CubeIcon key="icon" /> 2
                </React.Fragment>
              ),
              props: { isOpen: false, ariaControls: 'compoound-expansion-table-6' }
            },
            '20 minutes',
            { title: <a href="#">Open in Github</a> }
          ]
        },
        {
          parent: 4,
          compoundParent: 1,
          cells: [
            {
              title: (
                <DemoSortableTable
                  firstColumnRows={['parent-4', 'compound-1', 'three', 'four', 'five']}
                  id="compoound-expansion-table-4"
                />
              ),
              props: { colSpan: 6, className: 'pf-m-no-padding' }
            }
          ]
        },
        {
          parent: 4,
          compoundParent: 2,
          cells: [
            {
              title: (
                <DemoSortableTable
                  firstColumnRows={['parent-4', 'compound-2', 'three', 'four', 'five']}
                  id="compoound-expansion-table-5"
                />
              ),
              props: { colSpan: 6, className: 'pf-m-no-padding' }
            }
          ]
        },
        {
          parent: 4,
          compoundParent: 3,
          cells: [
            {
              title: (
                <DemoSortableTable
                  firstColumnRows={['parent-4', 'compound-3', 'three', 'four', 'five']}
                  id="compoound-expansion-table-6"
                />
              ),
              props: { colSpan: 6, className: 'pf-m-no-padding' }
            }
          ]
        }
      ]
    };
    this.onExpand = this.onExpand.bind(this);
  }

  onExpand(event: React.MouseEvent, rowIndex: number, colIndex: number, isOpen: boolean) {
    const newRows = Array.from(this.state.rows);
    const rowCells = Array.from(newRows[rowIndex].cells) as IRowCell[];
    const thisCell = rowCells[colIndex];

    if (!isOpen) {
      // set all other expanded cells false in this row if we are expanding
      rowCells.forEach((cell, i) => {
        if (cell.props) {
          rowCells[i] = { ...cell, props: { ...cell.props, isOpen: false } };
        }
      });
      rowCells[colIndex] = { ...thisCell, props: { ...thisCell.props, isOpen: true } };
    } else {
      rowCells[colIndex] = { ...thisCell, props: { ...thisCell.props, isOpen: false } };
      newRows[rowIndex] = {
        ...newRows[rowIndex],
        isOpen: rowCells.some(cell => cell.props && cell.props.isOpen)
      };
    }
    this.setState({
      rows: newRows
    });
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { columns, rows } = this.state;

    return (
      <Table
        caption="Editable compound expandable table"
        onRowEdit={() => {}}
        onExpand={this.onExpand}
        rows={rows}
        cells={columns}
      >
        <TableHeader />
        <TableBody />
      </Table>
    );
  }
}
