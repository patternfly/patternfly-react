import { forwardRef } from 'react';
import styles from '@patternfly/react-styles/css/components/Drawer/drawer';
import { css } from '@patternfly/react-styles';

export interface DrawerHeadProps extends React.HTMLProps<HTMLDivElement> {
  /** Additional classes added to the drawer head. */
  className?: string;
  /** Content to be rendered in the drawer head */
  children?: React.ReactNode;
  /** @hide Forwarded ref */
  innerRef?: React.Ref<HTMLDivElement>;
}

const DrawerHeadBase: React.FunctionComponent<DrawerHeadProps> = ({
  className = '',
  children,
  innerRef,
  ...props
}: DrawerHeadProps) => (
  <div className={css(styles.drawerHead, className)} ref={innerRef} {...props}>
    {children}
  </div>
);
export const DrawerHead = forwardRef((props: DrawerHeadProps, ref: React.Ref<HTMLDivElement>) => (
  <DrawerHeadBase innerRef={ref} {...props} />
));
DrawerHead.displayName = 'DrawerHead';
