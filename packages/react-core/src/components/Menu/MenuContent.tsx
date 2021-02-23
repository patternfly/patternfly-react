import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Menu/menu';
import { css } from '@patternfly/react-styles';

export interface MenuContentProps extends React.HTMLProps<HTMLElement> {
  /** Items within group */
  children?: React.ReactNode;
  /** Forwarded ref */
  innerRef?: React.Ref<any>;
  /** Return the height of the menu content */
  getHeight?: (height: string) => void;
}

export const MenuContent = React.forwardRef((props: MenuContentProps, ref: React.Ref<HTMLDivElement>) => {
  const { getHeight, children, ...rest } = props;
  const menuContentRef = React.createRef<HTMLDivElement>();
  const refCallback = (element: any) => {
    if (element) {
      getHeight && getHeight(element.clientHeight);
    }
    return ref || menuContentRef;
  };
  return (
    <div {...rest} className={css(styles.menuContent, props.className)} ref={refCallback}>
      {children}
    </div>
  );
});
MenuContent.displayName = 'MenuContent';
