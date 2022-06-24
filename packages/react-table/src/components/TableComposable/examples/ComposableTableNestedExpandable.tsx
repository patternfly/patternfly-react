import React from 'react';
import {
  TableComposable,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  InnerScrollContainer,
  ExpandableRowContent
} from '@patternfly/react-table';
import { Button } from '@patternfly/react-core';

interface Team {
  name: string;
  members: {
    lead: string;
    interaction: string;
    visual: string;
  };
  email: string;
  description: string;
}

export const ComposableTableNestedExpandable: React.FunctionComponent = () => {
  // In real usage, this data would come from some external source like an API via props.
  const teams: Team[] = [
    {
      name: 'Developer program 1',
      members: { lead: 'Person 1', interaction: 'Person 2', visual: 'Person 3' },
      email: 'devteam1@example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      name: 'Developer program 2',
      members: { lead: 'Person A', interaction: 'Person B', visual: 'Person C' },
      email: 'devteam2@example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      name: 'Developer program 3',
      members: { lead: 'Person X', interaction: 'Person Y', visual: 'Person Z' },
      email: 'devteam3@example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  ];

  const columnNames = {
    team: 'Team',
    members: 'Members',
    lead: 'Design Lead',
    interaction: 'Interaction Designer',
    visual: 'Visual Designer',
    contact: 'Contact'
  };

  // In this example, expanded rows are tracked by the team names from each row. This could be any unique identifier.
  // This is to prevent state from being based on row order index in case we later add sorting.
  // Note that this behavior is very similar to selection state.
  const [expandedTeamNames, setExpandedTeamNames] = React.useState<string[]>([]);
  const setTeamExpanded = (team: Team, isExpanding = true) =>
    setExpandedTeamNames(prevExpanded => {
      const otherExpandedTeamNames = prevExpanded.filter(t => t !== team.name);
      return isExpanding ? [...otherExpandedTeamNames, team.name] : otherExpandedTeamNames;
    });
  const isTeamExpanded = (team: Team) => expandedTeamNames.includes(team.name);

  return (
    <InnerScrollContainer>
      <TableComposable aria-label="Nested column headers with expandable rows table" gridBreakPoint="">
        <Thead hasNestedHeader>
          <Tr>
            <Th rowSpan={2} />
            <Th width={35} rowSpan={2} hasRightBorder>
              {columnNames.team}
            </Th>
            <Th colSpan={3} hasRightBorder>
              {columnNames.members}
            </Th>
            <Th width={25} rowSpan={2}>
              {columnNames.contact}
            </Th>
          </Tr>
          <Tr resetOffset>
            <Th isSubheader>{columnNames.lead}</Th>
            <Th isSubheader>{columnNames.interaction}</Th>
            <Th isSubheader hasRightBorder>
              {columnNames.visual}
            </Th>
          </Tr>
        </Thead>
        {teams.map((team, rowIndex) => (
          <Tbody key={team.name} isExpanded={isTeamExpanded(team)}>
            <Tr>
              <Td
                expand={{
                  rowIndex,
                  isExpanded: isTeamExpanded(team),
                  onToggle: () => setTeamExpanded(team, !isTeamExpanded(team)),
                  expandId: 'composable-nested-expandable-example'
                }}
              />
              <Td dataLabel={columnNames.team}>{team.name}</Td>
              <Td dataLabel={columnNames.lead}>{team.members.lead}</Td>
              <Td dataLabel={columnNames.interaction}>{team.members.interaction}</Td>
              <Td dataLabel={columnNames.visual}>{team.members.visual}</Td>
              <Td dataLabel={columnNames.contact}>
                <Button variant="link" component="a" href={`mailto:${team.email}`} isInline>
                  Email team {rowIndex}
                </Button>
              </Td>
            </Tr>
            <Tr isExpanded={isTeamExpanded(team)}>
              <Td dataLabel={`Team ${team.name} description`} colSpan={6}>
                <ExpandableRowContent>{team.description}</ExpandableRowContent>
              </Td>
            </Tr>
          </Tbody>
        ))}
      </TableComposable>
    </InnerScrollContainer>
  );
};
