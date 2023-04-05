import * as React from 'react';
import { textCenter, ICell, IRow } from '@patternfly/react-table';
import { Table, TableHeader, TableBody, TableProps } from '@patternfly/react-table/deprecated';

export class TableSimpleDemo extends React.Component<
  TableProps,
  { columns: (ICell | string)[]; rows: (IRow | string[])[] }
> {
  static displayName = 'TableSimpleDemo';
  constructor(props: TableProps) {
    super(props);
    this.state = {
      columns: [
        {
          title: 'Repositories',
          header: {
            info: {
              tooltip: 'More information about repositories',
              className: 'repositories-info-tip',
              tooltipProps: {
                isContentLeftAligned: true
              }
            }
          }
        },
        'Branches',
        { title: 'Pull requests' },
        'Workspaces',
        {
          title: 'Last Commit',
          transforms: [textCenter],
          cellTransforms: [textCenter],
          header: {
            info: {
              popover: (
                <div>
                  More <strong>information</strong> on commits
                </div>
              ),
              ariaLabel: 'More information on commits',
              popoverProps: {
                headerContent: 'Last Commit',
                footerContent: <a href="">Click here for even more info</a>
              }
            }
          }
        }
      ],
      rows: [
        {
          cells: ['one', 'two', 'three', 'four', 'five']
        },
        {
          cells: [
            {
              title: <div>one - 2</div>,
              props: { title: 'hover title', colSpan: 3 }
            },
            'four - 2',
            'five - 2'
          ]
        },
        {
          cells: [
            'one - 3',
            'two - 3',
            'three - 3',
            'four - 3',
            {
              title: 'five - 3 (not centered)',
              props: { textCenter: false }
            }
          ]
        }
      ]
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { columns, rows } = this.state;

    return (
      <Table caption="Simple Table" cells={columns} rows={rows}>
        <TableHeader />
        <TableBody />
      </Table>
    );
  }
}
