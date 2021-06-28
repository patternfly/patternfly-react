import * as React from 'react';
import { css } from '@patternfly/react-styles';
import { TreeViewSearch } from './TreeViewSearch';
import { Divider } from '../Divider';
import { Toolbar, ToolbarContent, ToolbarItem } from '../Toolbar';

export interface TreeViewListProps {
  /** Flag indicating if the tree view is nested under another tree view */
  isNested?: boolean;
  /** Callback for search input */
  onSearch?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Additional props for search input */
  searchProps?: any;
  /** Optional ToolbarItem, when used it wraps search field  */
  toolbarItems?: React.ReactNode[];
  /** By default toolbarItems are on left */
  toolbarLeft?: boolean;
  /** Child nodes of the current tree view */
  children: React.ReactNode;
}

export const TreeViewList: React.FunctionComponent<TreeViewListProps> = ({
  isNested = false,
  onSearch,
  searchProps,
  toolbarItems,
  toolbarLeft,
  children,
  ...props
}: TreeViewListProps) => (
  <>
    {toolbarItems && onSearch && toolbarLeft && (
      <React.Fragment>
        <Toolbar>
          <ToolbarContent>
            {toolbarItems.map((element, index) => (
              <ToolbarItem key={index}>{element}</ToolbarItem>
            ))}
            <TreeViewSearch onChange={onSearch} {...searchProps} />
          </ToolbarContent>
        </Toolbar>
        <Divider />
      </React.Fragment>
    )}
    {toolbarItems && onSearch && !toolbarLeft && (
      <React.Fragment>
        <Toolbar>
          <ToolbarContent>
            <TreeViewSearch onChange={onSearch} {...searchProps} />
            {toolbarItems.map((element, index) => (
              <ToolbarItem key={index}>{element}</ToolbarItem>
            ))}
          </ToolbarContent>
        </Toolbar>
        <Divider />
      </React.Fragment>
    )}
    {!toolbarItems && onSearch && (
      <React.Fragment>
        <TreeViewSearch onChange={onSearch} {...searchProps} />
        <Divider />
      </React.Fragment>
    )}
    <ul className={css('pf-c-tree-view__list')} role={isNested ? 'group' : 'tree'} {...props}>
      {children}
    </ul>
  </>
);
TreeViewList.displayName = 'TreeViewList';
