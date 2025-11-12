import { Drawer, DrawerContent, DrawerProps } from '../Drawer';
import styles from '@patternfly/react-styles/css/components/Compass/compass';
import { css } from '@patternfly/react-styles';

export interface CompassContentProps extends React.HTMLProps<HTMLDivElement> {
  /** Content of the main compass area. Typically one or more CompassPanel components. */
  children: React.ReactNode;
  /** Additional classes added to the CompassContent */
  className?: string;
  /** Content rendered in an optional drawer wrapping the CompassContent */
  drawerContent?: React.ReactNode;
  /** Additional props passed to the drawer */
  drawerProps?: DrawerProps;
}

export const CompassContent: React.FunctionComponent<CompassContentProps> = ({
  children,
  className,
  drawerProps,
  drawerContent,
  ...props
}) => {
  const hasDrawer = drawerContent !== undefined;

  const compassContent = (
    <div className={css(styles.compassContent, className)} {...props}>
      {children}
    </div>
  );

  if (hasDrawer) {
    return (
      <Drawer {...drawerProps}>
        <DrawerContent panelContent={drawerContent}>{compassContent}</DrawerContent>
      </Drawer>
    );
  }

  return compassContent;
};

CompassContent.displayName = 'CompassContent';
