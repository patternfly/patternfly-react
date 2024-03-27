import { type ReactNode, type MouseEvent as ReactMouseEvent, type FunctionComponent } from 'react';
import AngleDownIcon from '@patternfly/react-icons/dist/esm/icons/angle-down-icon';
import { css } from '@patternfly/react-styles';
import { Button } from '@patternfly/react-core/dist/esm/components/Button';
import styles from '@patternfly/react-styles/css/components/Table/table';

export interface CollapseColumnProps {
  id?: string;
  className?: string;
  children?: ReactNode;
  onToggle?: (event: ReactMouseEvent<HTMLButtonElement, MouseEvent>) => void;
  isOpen?: boolean;
  'aria-label'?: string;
}

export const CollapseColumn: FunctionComponent<CollapseColumnProps> = ({
  className = '' as string,
  children = null as ReactNode,
  isOpen,
  onToggle,
  ...props
}: CollapseColumnProps) => (
  <>
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
  </>
);
CollapseColumn.displayName = 'CollapseColumn';
