// eslint-disable-next-line max-classes-per-file
import * as React from 'react';
import PopoverBase from '../../helpers/PopoverBase/PopoverBase';
import { Instance as TippyInstance, Props as TippyProps } from 'tippy.js';
import styles from '@patternfly/react-styles/css/components/Tooltip/tooltip';
import '@patternfly/react-styles/css/components/Tooltip/tippy.css';
import '@patternfly/react-styles/css/components/Tooltip/tippy-overrides.css';
import { css } from '@patternfly/react-styles';
import { TooltipContent } from './TooltipContent';
import { TooltipArrow } from './TooltipArrow';
import { KEY_CODES } from '../../helpers/constants';
import tooltipMaxWidth from '@patternfly/react-tokens/dist/js/c_tooltip_MaxWidth';
import { ReactElement } from 'react';
import { PickOptional } from '../../helpers/typeUtils';
import { Popper } from '../../helpers/Popper/Popper';

export interface TooltipPopperProps {
  /** The element to append the tooltip to, defaults to body */
  appendTo?: HTMLElement | ((ref?: HTMLElement) => HTMLElement);
  /**
   * aria-labelledby or aria-describedby for tooltip.
   * The trigger will be cloned to add the aria attribute, and the corresponding id in the form of 'pf-tooltip-#' is added to the content container.
   * If you don't want that or prefer to add the aria attribute yourself on the trigger, set aria to 'none'.
   */
  aria?: 'describedby' | 'labelledby' | 'none';
  /** The reference element to which the tooltip is relatively placed to */
  children: ReactElement<any>;
  /** Tooltip additional class */
  className?: string;
  /** Tooltip content */
  content: React.ReactNode;
  /** Distance of the tooltip to its target, defaults to 15 */
  distance?: number;
  /** If true, tries to keep the tooltip in view by flipping it if necessary */
  enableFlip?: boolean;
  /** Delay in ms before the tooltip appears */
  entryDelay?: number;
  /** Delay in ms before the tooltip disappears */
  exitDelay?: number;
  /**
   * The desired position to flip the tooltip to if the initial position is not possible.
   * By setting this prop to 'flip' it attempts to flip the tooltip to the opposite side if there is no space.
   * You can also pass an array of positions that determines the flip order. It should contain the initial position
   * followed by alternative positions if that position is unavailable.
   * Example: Initial position is 'top'. Button with tooltip is in the top right corner. 'flipBehavior' is set to
   * ['top', 'right', 'left']. Since there is no space to the top, it checks if right is available. There's also no
   * space to the right, so it finally shows the tooltip on the left.
   */
  flipBehavior?: 'flip' | ('top' | 'bottom' | 'left' | 'right')[];
  /** Maximum width of the tooltip (default 18.75rem) */
  maxWidth?: string;
  /**
   * Tooltip position. Note: With 'enableFlip' set to true,
   * it will change the position if there is not enough space for the starting position.
   * The behavior of where it flips to can be controlled through the flipBehavior prop.
   * The 'auto' position chooses the side with the most space.
   * The 'auto' position requires the 'enableFlip' prop to be true.
   */
  position?: 'auto' | 'top' | 'bottom' | 'left' | 'right';
  /**
   * Tooltip trigger: click, mouseenter, focus, manual
   * Set to manual to trigger tooltip programmatically (through the isVisible prop)
   */
  trigger?: string;
  /** Flag to indicate that the text content is left aligned */
  isContentLeftAligned?: boolean;
  /** value for visibility when trigger is 'manual' */
  isVisible?: boolean;
  /** z-index of the tooltip */
  zIndex?: number;
  /** ID */
  id?: string;
}

// id for associating trigger with the content aria-describedby or aria-labelledby
let pfTooltipIdCounter = 1;

export const TooltipPopper: React.FunctionComponent<TooltipPopperProps> = ({
  content: bodyContent,
  position = 'top',
  trigger = 'mouseenter focus',
  isVisible = false,
  isContentLeftAligned = false,
  enableFlip = true,
  className = '',
  entryDelay = 500,
  exitDelay = 500,
  appendTo = () => document.body,
  zIndex = 9999,
  maxWidth = tooltipMaxWidth.value,
  distance = 15,
  aria = 'describedby',
  // For every initial starting position, there are 3 escape positions
  flipBehavior = ['top', 'right', 'bottom', 'left', 'top', 'right', 'bottom'],
  id = `pf-tooltip-${pfTooltipIdCounter++}`,
  children,
  ...rest
}) => {
  // could make this a prop in the future (true | false | 'toggle')
  const hideOnClick = true;
  const transitionDuration = 300;
  const triggerOnMouseenter = trigger.includes('mouseenter');
  const triggerOnFocus = trigger.includes('focus');
  const triggerOnClick = trigger.includes('click');
  const triggerManually = trigger === 'manual';
  const [visible, setVisible] = React.useState(false);
  const [opacity, setOpacity] = React.useState(0);
  const transitionTimerRef = React.useRef(null);
  const showTimerRef = React.useRef(null);
  const hideTimerRef = React.useRef(null);
  const handleEscKeyClick = (event: KeyboardEvent) => {
    if (event.keyCode === KEY_CODES.ESCAPE_KEY && visible) {
      hide();
    }
  };
  const show = () => {
    if (transitionTimerRef.current) {
      clearTimeout(transitionTimerRef.current);
    }
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
    }
    showTimerRef.current = setTimeout(() => {
      setVisible(true);
      setOpacity(1);
    }, entryDelay);
  };
  const hide = () => {
    if (showTimerRef.current) {
      clearTimeout(showTimerRef.current);
    }
    hideTimerRef.current = setTimeout(() => {
      setOpacity(0);
      transitionTimerRef.current = setTimeout(() => setVisible(false), transitionDuration);
    }, exitDelay);
  };
  const positionModifiers = {
    top: styles.modifiers.top,
    bottom: styles.modifiers.bottom,
    left: styles.modifiers.left,
    right: styles.modifiers.right
  };
  const hasCustomMaxWidth = maxWidth !== tooltipMaxWidth.value;

  const content = (
    <div
      className={css(styles.tooltip, className)}
      role="tooltip"
      id={id}
      style={{
        maxWidth: hasCustomMaxWidth ? maxWidth : null,
        opacity: triggerManually ? 1 : opacity,
        transition: `opacity ${transitionDuration}ms cubic-bezier(.54, 1.5, .38, 1.11)`
      }}
      {...rest}
    >
      <TooltipArrow />
      <TooltipContent isLeftAligned={isContentLeftAligned}>{bodyContent}</TooltipContent>
    </div>
  );

  const onClick = (event: any, triggerElement: any) => {
    // event.currentTarget = document
    // event.target could be triggerElement or something else
    if (hideOnClick === true) {
      // hide on inside the toggle as well as on outside clicks
      if (visible) {
        hide();
      } else if (event.target === triggerElement) {
        show();
      }
    } else if (hideOnClick === 'toggle' && event.target === triggerElement) {
      // prevent outside clicks from hiding but allow it to still be toggled on toggle click
      if (visible) {
        hide();
      } else {
        show();
      }
    } else if (hideOnClick === false && !visible && event.target === triggerElement) {
      show();
    }
  };

  const addAriaToTrigger = () => {
    if (aria === 'describedby' && !children.props['aria-describedby']) {
      return React.cloneElement(children, { 'aria-describedby': id });
    } else if (aria === 'labelledby' && !children.props['aria-labelledby']) {
      return React.cloneElement(children, { 'aria-labelledby': id });
    }
    return children;
  };

  return (
    <Popper
      trigger={aria !== 'none' ? addAriaToTrigger() : children}
      popper={content}
      popperMatchesTriggerWidth={false}
      appendTo={appendTo}
      isVisible={triggerManually ? isVisible : visible}
      positionModifiers={positionModifiers}
      distance={distance}
      placement={position}
      onMouseEnter={triggerOnMouseenter && show}
      onMouseLeave={triggerOnMouseenter && hide}
      onFocus={triggerOnFocus && show}
      onBlur={triggerOnFocus && hide}
      onClick={triggerOnClick && onClick}
      onKeyDown={triggerManually ? null : handleEscKeyClick}
      enableFlip={enableFlip}
      zIndex={zIndex}
      flipBehavior={flipBehavior}
    />
  );
};
TooltipPopper.displayName = 'TooltipPopper';

export enum TooltipPosition {
  auto = 'auto',
  top = 'top',
  bottom = 'bottom',
  left = 'left',
  right = 'right'
}

export interface TooltipProps {
  /** The element to append the tooltip to, defaults to body */
  appendTo?: HTMLElement | ((ref?: HTMLElement) => HTMLElement);
  /** Aria-labelledby or aria-describedby for tooltip */
  aria?: 'describedby' | 'labelledby';
  /** If enableFlip is true, the tooltip responds to this boundary */
  boundary?: 'scrollParent' | 'window' | 'viewport' | HTMLElement;
  /** The reference element to which the tooltip is relatively placed to */
  children: ReactElement<any>;
  /** Tooltip additional class */
  className?: string;
  /** Tooltip content */
  content: React.ReactNode;
  /** Distance of the tooltip to its target, defaults to 15 */
  distance?: number;
  /** If true, tries to keep the tooltip in view by flipping it if necessary */
  enableFlip?: boolean;
  /** Delay in ms before the tooltip appears */
  entryDelay?: number;
  /** Delay in ms before the tooltip disappears */
  exitDelay?: number;
  /**
   * The desired position to flip the tooltip to if the initial position is not possible.
   * By setting this prop to 'flip' it attempts to flip the tooltip to the opposite side if there is no space.
   * You can also pass an array of positions that determines the flip order. It should contain the initial position
   * followed by alternative positions if that position is unavailable.
   * Example: Initial position is 'top'. Button with tooltip is in the top right corner. 'flipBehavior' is set to
   * ['top', 'right', 'left']. Since there is no space to the top, it checks if right is available. There's also no
   * space to the right, so it finally shows the tooltip on the left.
   */
  flipBehavior?: 'flip' | ('top' | 'bottom' | 'left' | 'right')[];
  /** If true, displays as an application launcher */
  isAppLauncher?: boolean;
  /** Maximum width of the tooltip (default 12.5rem) */
  maxWidth?: string;
  /**
   * Tooltip position. Note: With 'enableFlip' set to true,
   * it will change the position if there is not enough space for the starting position.
   * The behavior of where it flips to can be controlled through the flipBehavior prop.
   * The 'auto' position chooses the side with the most space.
   */
  position?: 'auto' | 'top' | 'bottom' | 'left' | 'right';
  /** Tooltip trigger: click, mouseenter, focus, manual  */
  trigger?: string;
  /** Flag to indicate that the text content is left aligned */
  isContentLeftAligned?: boolean;
  /** value for visibility when trigger is 'manual' */
  isVisible?: boolean;
  /** z-index of the tooltip */
  zIndex?: number;
  /** additional Props to pass through to tippy.js */
  tippyProps?: Partial<TippyProps>;
  /** ID */
  id?: string;
}

export class Tooltip extends React.Component<TooltipProps> {
  static displayName = 'Tooltip';
  private tip: TippyInstance;
  static defaultProps: PickOptional<TooltipProps> = {
    position: 'top',
    trigger: 'mouseenter focus',
    isVisible: false,
    isContentLeftAligned: false,
    enableFlip: true,
    className: '',
    entryDelay: 500,
    exitDelay: 500,
    appendTo: () => document.body,
    zIndex: 9999,
    maxWidth: tooltipMaxWidth && tooltipMaxWidth.value,
    isAppLauncher: false,
    distance: 15,
    aria: 'describedby',
    boundary: 'window',
    // For every initial starting position, there are 3 escape positions
    flipBehavior: ['top', 'right', 'bottom', 'left', 'top', 'right', 'bottom'],
    tippyProps: {},
    id: ''
  };

  storeTippyInstance = (tip: TippyInstance) => {
    tip.popperChildren.tooltip.classList.add(styles.tooltip);
    this.tip = tip;
  };

  handleEscKeyClick = (event: KeyboardEvent) => {
    if (event.keyCode === KEY_CODES.ESCAPE_KEY && this.tip.state.isVisible) {
      this.tip.hide();
    }
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleEscKeyClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleEscKeyClick, false);
  }

  extendChildren() {
    return React.cloneElement(this.props.children, {
      isAppLauncher: this.props.isAppLauncher
    });
  }

  render() {
    const {
      position,
      trigger,
      isContentLeftAligned,
      isVisible,
      enableFlip,
      children,
      className,
      content: bodyContent,
      entryDelay,
      exitDelay,
      appendTo,
      zIndex,
      maxWidth,
      isAppLauncher,
      distance,
      aria,
      boundary,
      flipBehavior,
      tippyProps,
      id,
      ...rest
    } = this.props;
    const content = (
      <div
        className={css(
          !enableFlip && (styles.modifiers[position as 'top' | 'bottom' | 'left' | 'right'] || styles.modifiers.top),
          className
        )}
        role="tooltip"
        id={id}
        {...rest}
      >
        <TooltipContent isLeftAligned={isContentLeftAligned}>{bodyContent}</TooltipContent>
      </div>
    );
    return (
      <PopoverBase
        {...tippyProps}
        arrow
        aria={aria}
        onCreate={this.storeTippyInstance}
        maxWidth={maxWidth}
        zIndex={zIndex}
        appendTo={appendTo}
        content={content}
        lazy
        theme="pf-tooltip"
        placement={position}
        trigger={trigger}
        delay={[entryDelay, exitDelay]}
        distance={distance}
        flip={enableFlip}
        flipBehavior={flipBehavior}
        boundary={boundary}
        isVisible={isVisible}
        popperOptions={{
          modifiers: {
            preventOverflow: {
              enabled: enableFlip
            },
            hide: {
              enabled: enableFlip
            }
          }
        }}
      >
        {isAppLauncher ? this.extendChildren() : children}
      </PopoverBase>
    );
  }
}
