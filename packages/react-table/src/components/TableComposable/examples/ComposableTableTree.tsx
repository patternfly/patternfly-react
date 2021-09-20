import React from 'react';
import { TableComposable, Thead, Tr, Th, Tbody, Td } from '@patternfly/react-table';

interface RepositoriesTreeNode {
  name: string;
  branches: string;
  pullRequests: string;
  workspaces: string;
  children?: RepositoriesTreeNode[];
}

// TODO see line 280 in ComposableTable.md

// TODO remove this
/* eslint-disable @typescript-eslint/no-unused-vars */

export const ComposableTableTree: React.FunctionComponent = () => {
  // In real usage, this data would come from some external source like an API via props.
  const data: RepositoriesTreeNode[] = [
    {
      name: 'Repositories one',
      branches: 'Branch one',
      pullRequests: 'Pull request one',
      workspaces: 'Workplace one',
      children: [
        {
          name: 'Repositories two',
          branches: 'Branch two',
          pullRequests: 'Pull request two',
          workspaces: 'Workplace two',
          children: [
            {
              name: 'Repositories three',
              branches: 'Branch three',
              pullRequests: 'Pull request three',
              workspaces: 'Workplace three'
            },
            {
              name: 'Repositories four',
              branches: 'Branch four',
              pullRequests: 'Pull request four',
              workspaces: 'Workplace four'
            }
          ]
        },
        {
          name: 'Repositories five',
          branches: 'Branch five',
          pullRequests: 'Pull request five',
          workspaces: 'Workplace five'
        },
        {
          name: 'Repositories six',
          branches: 'Branch six',
          pullRequests: 'Pull request six',
          workspaces: 'Workplace six'
        }
      ]
    },
    {
      name: 'Repositories seven',
      branches: 'Branch seven',
      pullRequests: 'Pull request seven',
      workspaces: 'Workplace seven',
      children: [
        {
          name: 'Repositories eight',
          branches: 'Branch eight',
          pullRequests: 'Pull request eight',
          workspaces: 'Workplace eight'
        }
      ]
    },
    {
      name: 'Repositories nine',
      branches: 'Branch nine',
      pullRequests: 'Pull request nine',
      workspaces: 'Workplace nine'
    }
  ];

  const [expandedNodeNames, setExpandedNodeNames] = React.useState([]);
  const [expandedDetailsNodeNames, setExpandedDetailsNodeNames] = React.useState([]);
  const [selectedNodeNames, setSelectedNodeNames] = React.useState([]);

  return (
    <TableComposable aria-label="Tree table">
      <Thead>
        <Tr>
          <Th>Repositories</Th>
          <Th>Branches</Th>
          <Th>Pull requests</Th>
          <Th>Workspaces</Th>
          <Th>Last commit</Th>
        </Tr>
      </Thead>
      <Tbody>
        {[].map(repo => (
          <Tr key={repo.name}>
            <Td dataLabel="Repositories">{repo.name}</Td>
            <Td dataLabel="Branches">{repo.branches}</Td>
            <Td dataLabel="Pull requests">{repo.prs}</Td>
            <Td dataLabel="Workspaces">{repo.workspaces}</Td>
            <Td dataLabel="Last commit">{repo.lastCommit}</Td>
          </Tr>
        ))}
      </Tbody>
    </TableComposable>
  );
};
