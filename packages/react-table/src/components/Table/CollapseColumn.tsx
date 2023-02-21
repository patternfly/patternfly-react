import * as React from 'react';
import AngleDownIcon from '@patternfly/react-icons/dist/esm/icons/angle-down-icon';
import { css } from '@patternfly/react-styles';
import { Button } from '@patternfly/react-core/dist/esm/components/Button';
import styles from '@patternfly/react-styles/css/components/Table/table';

export interface CollapseColumnProps {
  id?: string;
  className?: string;
  children?: React.ReactNode;
  onToggle?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  isOpen?: boolean;
  'aria-label'?: string;
}

export const CollapseColumn: React.FunctionComponent<CollapseColumnProps> = ({
  className = '' as string,
  children = null as React.ReactNode,
  isOpen,
  onToggle,
  ...props
}: CollapseColumnProps) => (
  <React.Fragment>
    {isOpen !== undefined && (
      <Button
        className={css(className, isOpen && styles.modifiers.expanded)}
        {...props}
        variant="plain"
        aria-label={props['aria-label'] || 'Details'}
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <div className={css(styles.tableToggleIcon)}>
          <AngleDownIcon />
        </div>
      </Button>
    )}
    {children}
  </React.Fragment>
);
CollapseColumn.displayName = 'CollapseColumn';
