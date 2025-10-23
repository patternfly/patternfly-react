import { Drawer, DrawerContent, DrawerProps } from '../Drawer';
import { css } from '@patternfly/react-styles';

interface CompassContentProps extends React.HTMLProps<HTMLDivElement> {
  /** Content. Typically CompassSection components. */
  children: React.ReactNode;
  /** Additional classes added to the component */
  className?: string;
  /** Content of the drawer */
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
    <div className={css('pf-v6-c-compass__content', className)} {...props}>
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
