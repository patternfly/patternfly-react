import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Menu/menu';
import { css } from '@patternfly/react-styles';
import StarIcon from '@patternfly/react-icons/dist/js/icons/star-icon';
import { MenuContext, MenuItemContext } from './MenuContext';

export interface MenuItemActionProps extends Omit<React.HTMLProps<HTMLButtonElement>, 'type' | 'ref'> {
  /** Additional classes added to the action button */
  className?: string;
  /** The action icon to use */
  icon?: 'favorites' | React.ReactNode;
  /** Callback on action click, can also be specified on the Menu instead */
  onActionClick?: (event?: any) => void;
  /** Accessibility label */
  'aria-label'?: string;
  /** Flag indicating if the item is favorited */
  isFavorited?: boolean;
  /** Disables action, can also be specified on the MenuItem instead */
  isDisabled?: boolean;
  /** Forwarded ref */
  innerRef?: React.Ref<any>;
}

const MenuItemActionBase: React.FunctionComponent<MenuItemActionProps> = ({
  className = '',
  icon,
  onActionClick,
  'aria-label': ariaLabel,
  isFavorited = null,
  isDisabled,
  innerRef,
  ...props
}: MenuItemActionProps) => (
  <MenuContext.Consumer>
    {({ onActionClick: onActionClickContext }) => (
      <MenuItemContext.Consumer>
        {({ itemId, isDisabled: isDisabledContext }) => {
          const onClickButton = (event: any) => {
            // event specified on the MenuItemAction
            onActionClick && onActionClick(event);
            // event specified on the Menu
            onActionClickContext && onActionClickContext(event, itemId);
          };
          return (
            <button
              className={css(
                styles.menuItemAction,
                isFavorited !== null && styles.modifiers.favorite,
                isFavorited && styles.modifiers.favorited,
                className
              )}
              aria-label={ariaLabel}
              onClick={onClickButton}
              {...((isDisabled === true || isDisabledContext === true) && { disabled: true })}
              ref={innerRef}
              {...props}
            >
              <span className={css(styles.menuItemActionIcon)}>
                {icon === 'favorites' || isFavorited !== null ? <StarIcon aria-hidden /> : icon}
              </span>
            </button>
          );
        }}
      </MenuItemContext.Consumer>
    )}
  </MenuContext.Consumer>
);

export const MenuItemAction = React.forwardRef((props: MenuItemActionProps, ref: React.Ref<HTMLButtonElement>) => (
  <MenuItemActionBase {...props} innerRef={ref} />
));
MenuItemAction.displayName = 'MenuItemAction';
