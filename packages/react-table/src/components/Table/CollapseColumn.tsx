import { Fragment } from 'react';
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
  variant?: 'compact';
}

export const CollapseColumn: React.FunctionComponent<CollapseColumnProps> = ({
  className = '' as string,
  children = null as React.ReactNode,
  isOpen,
  onToggle,
  variant,
  ...props
}: CollapseColumnProps) => (
  <Fragment>
    {isOpen !== undefined && (
      <Button
        className={css(className, isOpen && styles.modifiers.expanded)}
        size={variant === 'compact' ? 'sm' : undefined}
        {...props}
        variant="plain"
        aria-label={props['aria-label'] || 'Details'}
        onClick={onToggle}
        aria-expanded={isOpen}
        icon={
          <div className={css(styles.tableToggleIcon)}>
            <AngleDownIcon />
          </div>
        }
      />
    )}
    {children}
  </Fragment>
);
CollapseColumn.displayName = 'CollapseColumn';
