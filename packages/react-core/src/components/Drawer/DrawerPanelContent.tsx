import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Drawer/drawer';
import { css } from '@patternfly/react-styles';
import { DrawerContext } from './Drawer';
import { formatBreakpointMods } from '../../helpers/util';

export interface DrawerPanelContentProps extends React.HTMLProps<HTMLDivElement> {
  /** Additional classes added to the drawer. */
  className?: string;
  /** ID of the drawer panel */
  id?: string;
  /** Content to be rendered in the drawer panel. */
  children?: React.ReactNode;
  /** Flag indicating that the drawer panel should not have a border. */
  hasNoBorder?: boolean;
  /** Flag indicating that the drawer panel should be resizable. */
  isResizable?: boolean;
  /** Callback for resize end. */
  onResize?: (width: number, id: string) => void;
  /** The minimum size of a drawer, in either pixels or percentage. */
  minSize?: string;
  /** The starting size of a resizable drawer, in either pixels or percentage. */
  defaultSize?: string;
  /** The maximum size of a drawer, in either pixels or percentage. */
  maxSize?: string;
  /** The increment amount for keyboard drawer resizing, in pixels. */
  increment?: number;
  /** Aria label for the resizable drawer splitter. */
  resizeAriaLabel?: string;
  /** Aria described by label for the resizable drawer splitter. */
  resizeAriaDescribedBy?: string;
  /** Width for drawer panel at various breakpoints. Overriden by resizable drawer minSize and defaultSize. */
  widths?: {
    default?: 'width_25' | 'width_33' | 'width_50' | 'width_66' | 'width_75' | 'width_100';
    lg?: 'width_25' | 'width_33' | 'width_50' | 'width_66' | 'width_75' | 'width_100';
    xl?: 'width_25' | 'width_33' | 'width_50' | 'width_66' | 'width_75' | 'width_100';
    '2xl'?: 'width_25' | 'width_33' | 'width_50' | 'width_66' | 'width_75' | 'width_100';
  };
}
let isResizing: boolean = null;
let newSize: number = 0;

export const DrawerPanelContent: React.FunctionComponent<DrawerPanelContentProps> = ({
  className = '',
  id,
  children,
  hasNoBorder = false,
  isResizable = false,
  onResize,
  minSize,
  defaultSize,
  maxSize,
  increment = 5,
  resizeAriaLabel = 'Resize',
  resizeAriaDescribedBy = 'Press space to begin resizing, and use the arrow keys to grow or shrink the panel. Press enter or escape to finish resizing.',
  widths,
  ...props
}: DrawerPanelContentProps) => {
  const panel = React.useRef<HTMLDivElement>();
  const [panelIsClosed, setPanelIsClosed] = React.useState(false);
  const { position, isExpanded, isStatic, onExpand, drawerRef } = React.useContext(DrawerContext);
  let currWidth: number = 0;
  let panelRect: DOMRect;
  let right: number;
  let left: number;
  let bottom: number;
  let setInitialVals: boolean = true;

  React.useEffect(() => {
    if (!isStatic && isExpanded) {
      setPanelIsClosed(!isExpanded);
    }
  }, [isStatic, isExpanded]);

  const handleTouchStart = (e: React.TouchEvent) => {
    e.stopPropagation();
    document.addEventListener('touchmove', callbackTouchMove, { passive: false });
    document.addEventListener('touchend', callbackTouchEnd);
    isResizing = true;
  };

  const handleMousedown = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    document.addEventListener('mousemove', callbackMouseMove);
    document.addEventListener('mouseup', callbackMouseUp);
    drawerRef.current.classList.add(css(styles.modifiers.resizing));
    isResizing = true;
    setInitialVals = true;
  };

  const handleMouseMove = (e: MouseEvent) => {
    const mousePos = position === 'bottom' ? e.clientY : e.clientX;
    handleControlMove(e, mousePos);
  };

  const handleTouchMove = (e: TouchEvent) => {
    e.preventDefault();
    e.stopImmediatePropagation();
    const touchPos = position === 'bottom' ? e.touches[0].clientY : e.touches[0].clientX;
    handleControlMove(e, touchPos);
  };

  const handleControlMove = (e: MouseEvent | TouchEvent, controlPosition: number) => {
    e.stopPropagation();
    if (!isResizing) {
      return;
    }

    if (setInitialVals) {
      panelRect = panel.current.getBoundingClientRect();
      right = panelRect.right;
      left = panelRect.left;
      bottom = panelRect.bottom;
      setInitialVals = false;
    }
    const mousePos = controlPosition;
    let newSize = 0;
    if (position === 'right') {
      newSize = right - mousePos;
    } else if (position === 'left') {
      newSize = mousePos - left;
    } else {
      newSize = bottom - mousePos;
    }

    if (position === 'bottom') {
      panel.current.style.overflowAnchor = 'none';
    }
    panel.current.style.setProperty('--pf-c-drawer__panel--md--FlexBasis', newSize + 'px');
    currWidth = newSize;
  };

  const handleMouseup = () => {
    if (!isResizing) {
      return;
    }
    drawerRef.current.classList.remove(css(styles.modifiers.resizing));
    isResizing = false;
    onResize && onResize(currWidth, id);
    setInitialVals = true;
    document.removeEventListener('mousemove', callbackMouseMove);
    document.removeEventListener('mouseup', callbackMouseUp);
  };

  const handleTouchEnd = (e: TouchEvent) => {
    e.stopPropagation();
    if (!isResizing) {
      return;
    }
    isResizing = false;
    onResize && onResize(currWidth, id);
    document.removeEventListener('touchmove', callbackTouchMove);
    document.removeEventListener('touchend', callbackTouchEnd);
  };

  const callbackMouseMove = React.useCallback(handleMouseMove, []);
  const callbackTouchEnd = React.useCallback(handleTouchEnd, []);
  const callbackTouchMove = React.useCallback(handleTouchMove, []);
  const callbackMouseUp = React.useCallback(handleMouseup, []);

  const handleKeys = (e: React.KeyboardEvent) => {
    const key = e.key;
    if (
      key !== ' ' &&
      key !== 'Escape' &&
      key !== 'Enter' &&
      key !== 'ArrowUp' &&
      key !== 'ArrowDown' &&
      key !== 'ArrowLeft' &&
      key !== 'ArrowRight'
    ) {
      if (isResizing) {
        e.preventDefault();
      }
      return;
    }
    e.preventDefault();

    if (key === ' ' || key === 'Escape' || key === 'Enter') {
      if (key === ' ') {
        isResizing = true;
      } else {
        isResizing = false;
        onResize && onResize(currWidth, id);
      }
      const panelRect = panel.current.getBoundingClientRect();
      newSize = position === 'bottom' ? panelRect.height : panelRect.width;
    }

    if (isResizing) {
      let delta = 0;
      if (key === 'ArrowRight') {
        delta = position === 'left' ? increment : -increment;
      } else if (key === 'ArrowLeft') {
        delta = position === 'left' ? -increment : increment;
      } else if (key === 'ArrowUp') {
        delta = increment;
      } else if (key === 'ArrowDown') {
        delta = -increment;
      }
      newSize = newSize + delta;
      if (position === 'bottom') {
        panel.current.style.overflowAnchor = 'none';
      }
      panel.current.style.setProperty('--pf-c-drawer__panel--md--FlexBasis', newSize + 'px');
      currWidth = newSize;
    }
  };
  const hidden = isStatic ? false : !isExpanded;
  const boundaryCssVars: any = {};
  if (defaultSize) {
    boundaryCssVars['--pf-c-drawer__panel--md--FlexBasis'] = defaultSize;
  }
  if (minSize) {
    boundaryCssVars['--pf-c-drawer__panel--md--FlexBasis--min'] = minSize;
  }
  if (maxSize) {
    boundaryCssVars['--pf-c-drawer__panel--md--FlexBasis--max'] = maxSize;
  }
  return (
    <div
      id={id}
      className={css(
        styles.drawerPanel,
        isResizable && styles.modifiers.resizable,
        hasNoBorder && styles.modifiers.noBorder,
        formatBreakpointMods(widths, styles),
        className
      )}
      ref={panel}
      onTransitionEnd={ev => {
        if (!hidden && ev.nativeEvent.propertyName === 'transform') {
          onExpand();
        }
        setPanelIsClosed(hidden);
      }}
      hidden={hidden}
      {...((defaultSize || minSize || maxSize) && {
        style: boundaryCssVars as React.CSSProperties
      })}
      {...props}
    >
      {!panelIsClosed && (
        <React.Fragment>
          {isResizable && (
            <React.Fragment>
              <div
                className={css(styles.drawerSplitter, position !== 'bottom' && styles.modifiers.vertical)}
                role="separator"
                tabIndex={0}
                aria-orientation={position === 'bottom' ? 'horizontal' : 'vertical'}
                aria-label={resizeAriaLabel}
                aria-describedby={resizeAriaDescribedBy}
                onMouseDown={handleMousedown}
                onKeyDown={handleKeys}
                onTouchStart={handleTouchStart}
              >
                <div className={css(styles.drawerSplitterHandle)} aria-hidden></div>
              </div>
              <div className={css(styles.drawerPanelMain)}>{children}</div>
            </React.Fragment>
          )}
          {!isResizable && children}
        </React.Fragment>
      )}
    </div>
  );
};
DrawerPanelContent.displayName = 'DrawerPanelContent';
