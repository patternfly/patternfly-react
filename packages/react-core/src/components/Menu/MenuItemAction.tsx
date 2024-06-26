import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Menu/menu';
import { css } from '@patternfly/react-styles';
import StarIcon from '@patternfly/react-icons/dist/esm/icons/star-icon';
import { MenuContext, MenuItemContext } from './MenuContext';
import { Button } from '../Button';
export interface MenuItemActionProps extends React.HTMLProps<HTMLDivElement> {
  /** Additional classes added to the action button */
  className?: string;
  /** The action icon to use */
  icon?: 'favorites' | React.ReactNode;
  /** Callback on action click, can also specify onActionClick on the Menu instead */
  onClick?: (event?: any) => void;
  /** Accessibility label */
  'aria-label': string;
  /** Flag indicating if the item is favorited */
  isFavorited?: boolean;
  /** Disables action, can also be specified on the MenuItem instead */
  isDisabled?: boolean;
  /** Identifies the action item in the onActionClick on the Menu */
  actionId?: any;
  /** @hide Forwarded ref */
  innerRef?: React.Ref<any>;
}

const MenuItemActionBase: React.FunctionComponent<MenuItemActionProps> = ({
  className,
  icon,
  onClick,
  'aria-label': ariaLabel,
  isFavorited = null,
  isDisabled,
  actionId,
  innerRef,
  ...props
}: MenuItemActionProps) => (
  <MenuContext.Consumer>
    {({ onActionClick }) => (
      <MenuItemContext.Consumer>
        {({ itemId, isDisabled: isDisabledContext }) => {
          const onClickButton = (event: any) => {
            // event specified on the MenuItemAction
            onClick && onClick(event);
            // event specified on the Menu
            onActionClick && onActionClick(event, itemId, actionId);
          };
          return (
            <div
              className={css(
                styles.menuItemAction,
                isFavorited !== null && 'pf-m-favorite',
                isFavorited && styles.modifiers.favorited,
                className
              )}
              {...props}
            >
              <Button
                aria-label={ariaLabel}
                onClick={onClickButton}
                ref={innerRef}
                role="menuitem"
                variant="plain"
                tabIndex={-1}
                isDisabled={isDisabled || isDisabledContext}
                icon={icon === 'favorites' || isFavorited !== null ? <StarIcon aria-hidden /> : icon}
              />
            </div>
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
