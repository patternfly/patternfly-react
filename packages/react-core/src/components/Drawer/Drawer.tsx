import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Drawer/drawer';
import { css } from '@patternfly/react-styles';

export interface DrawerProps extends React.HTMLProps<HTMLDivElement> {
  /** Additional classes added to the Drawer. */
  className?: string;
  /** Content rendered in the left hand panel */
  children?: React.ReactNode;
  /** Indicates if the drawer is expanded */
  isExpanded?: boolean;
  /** Indicates if the content element and panel element are displayed side by side. */
  isInline?: boolean;
  /** Indicates if the drawer will always show both content and panel. */
  isStatic?: boolean;
  /** Position of the drawer panel */
  position?: 'left' | 'right';
  /** Lifecycle function invoked when the drawer has been mounted to the DOM. */
  onMount?: () => void;
  /** Lifecycle function invoked when the drawer has been unmounted from the DOM. */
  onUnmount?: () => void;
}

export interface DrawerContextProps {
  isExpanded: boolean;
  isStatic: boolean;
}

export const DrawerContext = React.createContext<Partial<DrawerContextProps>>({
  isExpanded: false,
  isStatic: false
});

export const Drawer: React.SFC<DrawerProps> = ({
  className = '',
  children,
  isExpanded = false,
  isInline = false,
  isStatic = false,
  position = 'right',
  onMount = () => {},
  onUnmount = () => {},
  ...props
}: DrawerProps) => {
  React.useEffect(() => {
    onMount();
    return () => {
      onUnmount();
    };
  }, [isExpanded, onMount, onUnmount]);

  return (
    <DrawerContext.Provider value={{ isExpanded, isStatic }}>
      <div
        className={css(
          styles.drawer,
          isExpanded && styles.modifiers.expanded,
          isInline && styles.modifiers.inline,
          isStatic && styles.modifiers.static,
          position === 'left' && styles.modifiers.panelLeft,
          className
        )}
        {...props}
      >
        {children}
      </div>
    </DrawerContext.Provider>
  );
};
