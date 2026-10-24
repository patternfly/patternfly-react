import { forwardRef } from 'react';
import styles from '@patternfly/react-styles/css/components/Drawer/drawer';
import { css } from '@patternfly/react-styles';

/** Provides a description within the drawer panel. This should typically follow the drawer head. */

export interface DrawerPanelDescriptionProps extends React.HTMLProps<HTMLDivElement> {
  /** Additional classes added to the drawer description. */
  className?: string;
  /** Content to be rendered in the drawer description */
  children: React.ReactNode;
  /** @hide Forwarded ref */
  innerRef?: React.Ref<HTMLDivElement>;
}

const DrawerPanelDescriptionBase: React.FunctionComponent<DrawerPanelDescriptionProps> = ({
  className,
  children,
  innerRef,
  ...props
}: DrawerPanelDescriptionProps) => (
  <div className={css(styles.drawerDescription, className)} ref={innerRef} {...props}>
    {children}
  </div>
);
export const DrawerPanelDescription = forwardRef(
  (props: DrawerPanelDescriptionProps, ref: React.Ref<HTMLDivElement>) => (
    <DrawerPanelDescriptionBase innerRef={ref} {...props} />
  )
);
DrawerPanelDescription.displayName = 'DrawerPanelDescription';
