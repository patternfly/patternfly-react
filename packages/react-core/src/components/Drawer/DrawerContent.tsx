import { forwardRef, useContext, useImperativeHandle } from 'react';
import styles from '@patternfly/react-styles/css/components/Drawer/drawer';
import { css } from '@patternfly/react-styles';
import { DrawerMain } from './DrawerMain';
import { DrawerContext } from './Drawer';

export enum DrawerContentColorVariant {
  default = 'default',
  primary = 'primary',
  secondary = 'secondary'
}

export interface DrawerContentProps extends React.HTMLProps<HTMLDivElement> {
  /** Additional classes added to the Drawer. */
  className?: string;
  /** Content to be rendered in the drawer. */
  children?: React.ReactNode;
  /** Content rendered in the drawer panel. */
  panelContent: React.ReactNode;
  /** Color variant of the background of the drawer panel */
  colorVariant?: DrawerContentColorVariant | 'default' | 'primary' | 'secondary';
  /** @hide Forwarded ref */
  innerRef?: React.Ref<HTMLDivElement>;
}

const DrawerContentBase: React.FunctionComponent<DrawerContentProps> = ({
  className,
  children,
  panelContent,
  colorVariant = DrawerContentColorVariant.default,
  innerRef,
  ...props
}: DrawerContentProps) => {
  const { drawerContentRef } = useContext(DrawerContext);
  useImperativeHandle(innerRef, () => drawerContentRef.current);

  return (
    <DrawerMain>
      <div
        className={css(
          styles.drawerContent,
          colorVariant === DrawerContentColorVariant.primary && styles.modifiers.primary,
          colorVariant === DrawerContentColorVariant.secondary && styles.modifiers.secondary,
          className
        )}
        ref={drawerContentRef}
        {...props}
      >
        {children}
      </div>
      {panelContent}
    </DrawerMain>
  );
};
export const DrawerContent = forwardRef((props: DrawerContentProps, ref: React.Ref<HTMLDivElement>) => (
  <DrawerContentBase innerRef={ref} {...props} />
));
DrawerContent.displayName = 'DrawerContent';
