import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Menu/menu';
import { css } from '@patternfly/react-styles';
import { Popper } from '../../helpers/Popper/Popper';

export interface MenuActionProps extends Omit<React.HTMLProps<HTMLButtonElement>, 'type' | 'ref'> {
  /** Additional classes added to the action button */
  className?: string;
  /** The action icon to use */
  icon?: React.ReactNode;
  /** Callback on action click */
  onActionClick?: () => {};
  /** Accessibility label */
  'aria-label'?: string;
  /** Attach a menu to the action */
  menu?: React.ReactElement;
  /** Whether the menu is open */
  isMenuOpen?: boolean;
  /** Forwarded ref */
  innerRef?: React.Ref<any>;
}

const MenuActionBase: React.FunctionComponent<MenuActionProps> = ({
  className = '',
  icon,
  onActionClick,
  'aria-label': ariaLabel,
  menu,
  isMenuOpen,
  innerRef,
  ...props
}: MenuActionProps) => {
  const trigger = (
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
  return menu && isMenuOpen ? (
    <Popper trigger={trigger} popper={menu} popperMatchesTriggerWidth={false} isVisible />
  ) : (
    trigger
  );
};

export const MenuAction = React.forwardRef((props: MenuActionProps, ref: React.Ref<HTMLDivElement>) => (
  <MenuActionBase {...props} innerRef={ref} />
));
MenuAction.displayName = 'MenuAction';
