import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Menu/menu';
import { css } from '@patternfly/react-styles';
import { MenuContext } from './MenuContext';

export interface MenuContentProps extends React.HTMLProps<HTMLElement> {
  /** Items within group */
  children?: React.ReactNode;
  /** Forwarded ref */
  innerRef?: React.Ref<any>;
  /** Height of the menu content */
  menuHeight?: string;
  /** Maximum height of menu content */
  maxMenuHeight?: string;
  /** Callback to return the height of the menu content */
  getHeight?: (height: string) => void;
}

export const MenuContent = React.forwardRef((props: MenuContentProps, ref: React.Ref<HTMLDivElement>) => {
  const { getHeight, children, menuHeight, maxMenuHeight, ...rest } = props;
  const menuContentRef = React.createRef<HTMLDivElement>();
  const refCallback = (el: any, menuId: string, onGetMenuHeight: (menuId: string, height: number) => void) => {
    if (el) {
      onGetMenuHeight && onGetMenuHeight(menuId, el.clientHeight);
      getHeight && getHeight(el.clientHeight);
    }
    return ref || menuContentRef;
  };
  return (
    <MenuContext.Consumer>
      {({ menuId, onGetMenuHeight, isScrollable }) => (
        <div
          {...rest}
          className={css(styles.menuContent, props.className)}
          ref={el => refCallback(el, menuId, onGetMenuHeight)}
          style={
            {
              '--pf-c-menu__content--Height': menuHeight || 'auto',
              '--pf-c-menu__content--MaxHeight': !isScrollable ? maxMenuHeight || 'auto' : ''
            } as React.CSSProperties
          }
        >
          {children}
        </div>
      )}
    </MenuContext.Consumer>
  );
});
MenuContent.displayName = 'MenuContent';
