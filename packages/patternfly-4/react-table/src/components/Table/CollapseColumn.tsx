import * as React from 'react';
import { AngleDownIcon } from '@patternfly/react-icons';
import { css } from '@patternfly/react-styles';
import { Button } from '@patternfly/react-core';
import styles from '@patternfly/react-styles/css/components/Table/table';

export interface CollapseColumnProps {
  id?: string;
  className?: string;
  children?: React.ReactNode;
  onToggle?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  isOpen?: boolean;
}

export const CollapseColumn: React.FunctionComponent<CollapseColumnProps> = ({
  className = '' as string,
  children = null as React.ReactNode,
  isOpen,
  onToggle,
  ...props
}: CollapseColumnProps ) => {
  return (
    <React.Fragment>
      {isOpen !== undefined && (
        <Button
          className={css(className, isOpen && styles.modifiers.expanded)}
          {...props}
          variant="plain"
          aria-label="Details"
          onClick={onToggle}
          aria-expanded={isOpen}
        >
          <AngleDownIcon />
        </Button>
      )}
      {children}
    </React.Fragment>
  );
};
