import React from 'react';
import { TableComposable, Thead, Tr, Th, Tbody, Td, TreeRowWrapper } from '@patternfly/react-table';
import LeafIcon from '@patternfly/react-icons/dist/esm/icons/leaf-icon';
import FolderIcon from '@patternfly/react-icons/dist/esm/icons/folder-icon';
import FolderOpenIcon from '@patternfly/react-icons/dist/esm/icons/folder-open-icon';

interface RepositoriesTreeNode {
  name: string;
  branches: string;
  pullRequests: string;
  workspaces: string;
  children?: RepositoriesTreeNode[];
}

// TODO see line 280 in ComposableTable.md
// TODO remove this
/* eslint-disable */

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

  /** 
      Recursive function which flattens the data into an array of flattened TreeRowWrapper components
      params: 
        - nodes - array of top-level tree nodes
        - level - number representing how deeply nested the current row is
        - posinset - position of the row relative to this row's siblings
        - isHidden - defaults to false, true if this row's parent is expanded
    */
  const renderRows = (
    nodes: RepositoriesTreeNode[],
    level: number,
    posinset: number,
    isHidden = false
  ): React.ReactNode[] =>
    nodes.flatMap(node => {
      const isExpanded = expandedNodeNames.includes(node.name);
      const isDetailsExpanded = expandedDetailsNodeNames.includes(node.name);
      const isSelected = selectedNodeNames.includes(node.name);
      let icon = <LeafIcon />;
      if (node.children) {
        icon = isExpanded ? <FolderOpenIcon aria-hidden /> : <FolderIcon aria-hidden />;
      }
      const row = <TreeRowWrapper key={node.name}>{/* TODO */}</TreeRowWrapper>;
      // TODO handle children
      return null;
    });

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
