import { forwardRef } from 'react';
import styles from '@patternfly/react-styles/css/components/Drawer/drawer';
import { css } from '@patternfly/react-styles';

export interface DrawerActionsProps extends React.HTMLProps<HTMLDivElement> {
  /** Additional classes added to the drawer actions button. */
  className?: string;
  /** Actions to be rendered in the panel head. */
  children?: React.ReactNode;
  /** @hide Forwarded ref */
  innerRef?: React.Ref<HTMLDivElement>;
}

const DrawerActionsBase: React.FunctionComponent<DrawerActionsProps> = ({
  className = '',
  children,
  innerRef,
  ...props
}: DrawerActionsProps) => (
  <div className={css(styles.drawerActions, className)} ref={innerRef} {...props}>
    {children}
  </div>
);
export const DrawerActions = forwardRef((props: DrawerActionsProps, ref: React.Ref<HTMLDivElement>) => (
  <DrawerActionsBase innerRef={ref} {...props} />
));
DrawerActions.displayName = 'DrawerActions';
