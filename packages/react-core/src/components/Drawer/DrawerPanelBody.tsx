import { forwardRef } from 'react';
import styles from '@patternfly/react-styles/css/components/Drawer/drawer';
import { css } from '@patternfly/react-styles';

export interface DrawerPanelBodyProps extends React.HTMLProps<HTMLDivElement> {
  /** Additional classes added to the Drawer. */
  className?: string;
  /** Content to be rendered in the drawer */
  children?: React.ReactNode;
  /** Indicates if there should be no padding around the drawer panel body */
  hasNoPadding?: boolean;
  /** @hide Forwarded ref */
  innerRef?: React.Ref<HTMLDivElement>;
}

const DrawerPanelBodyBase: React.FunctionComponent<DrawerPanelBodyProps> = ({
  className = '',
  children,
  hasNoPadding = false,
  innerRef,
  ...props
}: DrawerPanelBodyProps) => (
  <div
    className={css(styles.drawerBody, hasNoPadding && styles.modifiers.noPadding, className)}
    ref={innerRef}
    {...props}
  >
    {children}
  </div>
);
export const DrawerPanelBody = forwardRef((props: DrawerPanelBodyProps, ref: React.Ref<HTMLDivElement>) => (
  <DrawerPanelBodyBase innerRef={ref} {...props} />
));
DrawerPanelBody.displayName = 'DrawerPanelBody';
