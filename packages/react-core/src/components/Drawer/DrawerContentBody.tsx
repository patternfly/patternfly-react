import { forwardRef } from 'react';
import styles from '@patternfly/react-styles/css/components/Drawer/drawer';
import { css } from '@patternfly/react-styles';

export interface DrawerContentBodyProps extends React.HTMLProps<HTMLDivElement> {
  /** Additional classes added to the Drawer. */
  className?: string;
  /** Content to be rendered in the drawer */
  children?: React.ReactNode;
  /** Indicates if there should be padding around the drawer content body */
  hasPadding?: boolean;
  /** @hide Forwarded ref */
  innerRef?: React.Ref<HTMLDivElement>;
}

const DrawerContentBodyBase: React.FunctionComponent<DrawerContentBodyProps> = ({
  className = '',
  children,
  hasPadding = false,
  innerRef,
  ...props
}: DrawerContentBodyProps) => (
  <div className={css(styles.drawerBody, hasPadding && styles.modifiers.padding, className)} ref={innerRef} {...props}>
    {children}
  </div>
);
export const DrawerContentBody = forwardRef((props: DrawerContentBodyProps, ref: React.Ref<HTMLDivElement>) => (
  <DrawerContentBodyBase innerRef={ref} {...props} />
));
DrawerContentBody.displayName = 'DrawerContentBody';
