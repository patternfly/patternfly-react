import React from 'react';
import {
  Bullseye,
  EmptyState,
  EmptyStateVariant,
  EmptyStateIcon,
  EmptyStateBody,
  Button,
  EmptyStateHeader,
  EmptyStateFooter,
  EmptyStateActions
} from '@patternfly/react-core';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';
import { TableBody } from "../Body";
import { TableHeader } from "../Header";
import { TableProps, Table } from "../Table";

// This example has been simplified to focus on the empty state. In real usage,
// you may want to derive your rows from typed underlying data and minimal state. See other examples.

export const LegacyTableEmptyState: React.FunctionComponent = () => {
  const columns: TableProps['cells'] = ['Repositories', 'Branches', 'Pull requests', 'Workspaces', 'Last commit'];
  const rows: TableProps['rows'] = [
    {
      heightAuto: true,
      cells: [
        {
          props: { colSpan: 8 },
          title: (
            <Bullseye>
              <EmptyState variant={EmptyStateVariant.sm}>
                <EmptyStateHeader
                  titleText="No results found"
                  icon={<EmptyStateIcon icon={SearchIcon} />}
                  headingLevel="h2"
                />
                <EmptyStateBody>Clear all filters and try again.</EmptyStateBody>
                <EmptyStateFooter>
                  <EmptyStateActions>
                    <Button variant="link">Clear all filters</Button>
                  </EmptyStateActions>
                </EmptyStateFooter>
              </EmptyState>
            </Bullseye>
          )
        }
      ]
    }
  ];

  return (
    <Table aria-label="Table text with modifiers" cells={columns} rows={rows}>
      <TableHeader />
      <TableBody />
    </Table>
  );
};
