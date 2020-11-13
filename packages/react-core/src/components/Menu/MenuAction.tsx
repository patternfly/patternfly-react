import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Menu/menu';
import { css } from '@patternfly/react-styles';

export interface MenuActionProps extends Omit<React.HTMLProps<HTMLButtonElement>, 'type' | 'ref'> {
  /** Additional classes added to the action button */
  className?: string;
  /** The action icon to use */
  icon?: React.ReactNode;
  /** Callback on action click */
  onActionClick?: () => {};
  /** Accessibility label */
  'aria-label'?: string;
  /** Forwarded ref */
  innerRef?: React.Ref<any>;
}

const MenuActionBase: React.FunctionComponent<MenuActionProps> = ({
  className = '',
  icon,
  onActionClick,
  'aria-label': ariaLabel,
  innerRef,
  ...props
}: MenuActionProps) => (
  <button
    className={css(styles.menuItemAction, className)}
    aria-label={ariaLabel}
    onClick={onActionClick}
    ref={innerRef}
    {...props}
  >
    <span className={css(styles.menuItemActionIcon)}>{icon}</span>
  </button>
);

export const MenuAction = React.forwardRef((props: MenuActionProps, ref: React.Ref<HTMLButtonElement>) => (
  <MenuActionBase {...props} innerRef={ref} />
));
MenuAction.displayName = 'MenuAction';
