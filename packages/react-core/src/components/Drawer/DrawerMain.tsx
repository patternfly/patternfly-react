import { forwardRef } from 'react';
import styles from '@patternfly/react-styles/css/components/Drawer/drawer';
import { css } from '@patternfly/react-styles';

export interface DrawerMainProps extends React.HTMLProps<HTMLDivElement> {
  /** Additional classes added to the drawer main wrapper. */
  className?: string;
  /** Content to be rendered in the drawer main wrapper*/
  children?: React.ReactNode;
  /** @hide Forwarded ref */
  innerRef?: React.Ref<HTMLDivElement>;
}

const DrawerMainBase: React.FunctionComponent<DrawerMainProps> = ({
  className = '',
  children,
  innerRef,
  ...props
}: DrawerMainProps) => (
  <div className={css(styles.drawerMain, className)} ref={innerRef} {...props}>
    {children}
  </div>
);
export const DrawerMain = forwardRef((props: DrawerMainProps, ref: React.Ref<HTMLDivElement>) => (
  <DrawerMainBase innerRef={ref} {...props} />
));
DrawerMain.displayName = 'DrawerMain';
