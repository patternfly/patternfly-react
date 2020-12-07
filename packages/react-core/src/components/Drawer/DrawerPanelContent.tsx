import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Drawer/drawer';
import { css } from '@patternfly/react-styles';
import { DrawerContext } from './Drawer';
import { formatBreakpointMods } from '../../helpers/util';

export interface DrawerPanelContentProps extends React.HTMLProps<HTMLDivElement> {
  /** Additional classes added to the drawer. */
  className?: string;
  /** Content to be rendered in the drawer panel. */
  children?: React.ReactNode;
  /** Flag indicating that the drawer panel should not have a border. */
  hasNoBorder?: boolean;
  /** Flag indicating that the drawer panel should be resizable. */
  isResizable?: boolean;
  /** The minimum size of a resizable drawer, in pixels. Defaults to the starting width of the drawer. */
  minSize?: number;
  /** The maximum size of a resizable drawer, in pixels. Defaults to the max width of the parent container. */
  maxSize?: number;
  /** The increment amount for keyboard drawer resizing, in pixels. */
  increment?: number;
  /** Aria label for the resizable drawer splitter. */
  resizeAriaLabel?: string;
  /** Aria described by label for the resizable drawer splitter. */
  resizeAriaDescribedBy?: string;
  /** Width for drawer panel at various breakpoints */
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
  children,
  hasNoBorder = false,
  isResizable = false,
  minSize,
  maxSize,
  increment = 5,
  resizeAriaLabel = 'Resize',
  resizeAriaDescribedBy = 'Press space to begin resizing, and use the arrow keys to grow or shrink the panel. Press enter or escape to finish resizing.',
  widths,
  ...props
}: DrawerPanelContentProps) => {
  const panel = React.useRef<HTMLDivElement>();
  const { position, isExpanded, isStatic, onExpand } = React.useContext(DrawerContext);

  const handleMousedown = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    document.addEventListener('mousemove', callbackMouseMove);
    document.addEventListener('mouseup', callbackMouseUp);
    isResizing = true;
  };

  const handleMousemove = (e: MouseEvent) => {
    if (!isResizing) {
      return;
    }
    const panelRect = panel.current.getBoundingClientRect();
    const parentRect = panel.current.parentElement.getBoundingClientRect();
    const min = minSize ? minSize : 0;
    const max = maxSize ? maxSize : position === 'bottom' ? parentRect.height : parentRect.width;
    const mousePos = position === 'bottom' ? e.clientY : e.clientX;

    let newSize = 0;
    if (position === 'right') {
      newSize = panelRect.right - mousePos;
    } else if (position === 'left') {
      newSize = mousePos - panelRect.left;
    } else {
      newSize = panelRect.bottom - mousePos;
    }

    if (newSize >= min && newSize <= max) {
      if (position === 'bottom') {
        panel.current.style.overflowAnchor = 'none';
      }
      if (maxSize) {
        panel.current.style.setProperty('--pf-c-drawer__panel--FlexBasis', newSize + 'px');
      } else {
        panel.current.style.setProperty('--pf-c-drawer__panel--FlexBasis', (newSize / max) * 100 + '%');
      }
    }
  };

  const handleMouseup = () => {
    if (!isResizing) {
      return;
    }
    isResizing = false;
    document.removeEventListener('mousemove', callbackMouseMove);
    document.removeEventListener('mouseup', callbackMouseUp);
  };

  const callbackMouseMove = React.useCallback(handleMousemove, []);
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
      }
      const panelRect = panel.current.getBoundingClientRect();
      newSize = position === 'bottom' ? panelRect.height : panelRect.width;
    }

    if (isResizing) {
      const parentRect = panel.current.parentElement.getBoundingClientRect();
      const min = minSize ? minSize : 0;
      const max = maxSize ? maxSize : position === 'bottom' ? parentRect.height : parentRect.width;

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
      if (newSize + delta >= min && newSize + delta <= max) {
        newSize = newSize + delta;
        if (position === 'bottom') {
          panel.current.style.overflowAnchor = 'none';
        }
        if (maxSize) {
          panel.current.style.setProperty('--pf-c-drawer__panel--FlexBasis', newSize + 'px');
        } else {
          panel.current.style.setProperty('--pf-c-drawer__panel--FlexBasis', (newSize / max) * 100 + '%');
        }
      }
    }
  };
  const hidden = isStatic ? false : !isExpanded;
  return (
    <div
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
      }}
      hidden={hidden}
      {...props}
    >
      {!hidden && (
        <React.Fragment>
          {isResizable && (
            <div
              className={css(styles.drawerSplitter, position !== 'bottom' && styles.modifiers.vertical)}
              role="separator"
              tabIndex={0}
              aria-orientation={position === 'bottom' ? 'horizontal' : 'vertical'}
              aria-label={resizeAriaLabel}
              aria-describedby={resizeAriaDescribedBy}
              onMouseDown={handleMousedown}
              onKeyDown={handleKeys}
            >
              <div className={css(styles.drawerSplitterHandle)} aria-hidden></div>
            </div>
          )}
          {children}
        </React.Fragment>
      )}
    </div>
  );
};
DrawerPanelContent.displayName = 'DrawerPanelContent';
