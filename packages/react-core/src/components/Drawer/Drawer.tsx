import {
  HTMLProps,
  ReactNode,
  MouseEvent,
  TransitionEvent,
  RefObject,
  FunctionComponent,
  createContext,
  useRef
} from 'react';
import styles from '@patternfly/react-styles/css/components/Drawer/drawer';
import { css } from '@patternfly/react-styles';

export enum DrawerColorVariant {
  default = 'default',
  light200 = 'light-200',
  noBackground = 'no-background'
}

export interface DrawerProps extends HTMLProps<HTMLDivElement> {
  /** Additional classes added to the Drawer. */
  className?: string;
  /** Content rendered in the drawer panel */
  children?: ReactNode;
  /** Indicates if the drawer is expanded */
  isExpanded?: boolean;
  /** Indicates if the content element and panel element are displayed side by side. */
  isInline?: boolean;
  /** Indicates if the drawer will always show both content and panel. */
  isStatic?: boolean;
  /** Position of the drawer panel. left and right are deprecated, use start and end instead. */
  position?: 'start' | 'end' | 'bottom' | 'left' | 'right';
  /** Callback when drawer panel is expanded after waiting 250ms for animation to complete. */
  onExpand?: (event: KeyboardEvent | MouseEvent | TransitionEvent) => void;
}

export interface DrawerContextProps {
  isExpanded: boolean;
  isStatic: boolean;
  onExpand?: (event: KeyboardEvent | MouseEvent | TransitionEvent) => void;
  position?: string;
  drawerRef?: RefObject<HTMLDivElement>;
  drawerContentRef?: RefObject<HTMLDivElement>;
  isInline: boolean;
}

export const DrawerContext = createContext<Partial<DrawerContextProps>>({
  isExpanded: false,
  isStatic: false,
  onExpand: () => {},
  position: 'end',
  drawerRef: null,
  drawerContentRef: null,
  isInline: false
});

export const Drawer: FunctionComponent<DrawerProps> = ({
  className = '',
  children,
  isExpanded = false,
  isInline = false,
  isStatic = false,
  position = 'end',
  onExpand = () => {},
  ...props
}: DrawerProps) => {
  const drawerRef = useRef<HTMLDivElement>();
  const drawerContentRef = useRef<HTMLDivElement>();

  return (
    <DrawerContext.Provider value={{ isExpanded, isStatic, onExpand, position, drawerRef, drawerContentRef, isInline }}>
      <div
        className={css(
          styles.drawer,
          isExpanded && styles.modifiers.expanded,
          isInline && styles.modifiers.inline,
          isStatic && styles.modifiers.static,
          (position === 'left' || position === 'start') && styles.modifiers.panelLeft,
          position === 'bottom' && styles.modifiers.panelBottom,
          className
        )}
        ref={drawerRef}
        {...props}
      >
        {children}
      </div>
    </DrawerContext.Provider>
  );
};
Drawer.displayName = 'Drawer';
