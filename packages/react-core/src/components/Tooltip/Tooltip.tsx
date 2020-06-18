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
import { Button } from '../Button';

export const TooltipPopper: React.FunctionComponent<TooltipProps> = ({
  content: bodyContent,
  // position = 'top',
  trigger = 'mouseenter focus',
  hideOnClick = true,
  isVisible = false,
  isContentLeftAligned = false,
  // enableFlip = true,
  className = '',
  // entryDelay = 500,
  // exitDelay = 500,
  appendTo = () => document.body,
  // zIndex = 9999,
  // maxWidth = tooltipMaxWidth && tooltipMaxWidth.value,
  // isAppLauncher = false,
  distance = 15,
  // aria = 'describedby',
  // boundary = 'window',
  // For every initial starting position, there are 3 escape positions
  // flipBehavior = ['top', 'right', 'bottom', 'left', 'top', 'right', 'bottom'],
  // tippyProps = {},
  id = '',
  children,
  ...rest
}) => {
  const triggerOnMouseenter = trigger.includes('mouseenter');
  const triggerOnFocus = trigger.includes('focus');
  const triggerOnClick = trigger.includes('click');
  const [visible, setVisible] = React.useState(false);
  const onDocumentClick = (event: any) => {
    if (!visible) {
      return;
    }
    if (event.target !== event.currentTarget) {
      console.log('outside click: hide tip');
      setVisible(false);
    } else {
      console.log('inside click');
    }
  }
  const positionModifiers = {
    top: styles.modifiers.top,
    bottom: styles.modifiers.bottom,
    left: styles.modifiers.left,
    right: styles.modifiers.right
  };

  const content = (
    <div
      className={css(
        styles.tooltip,
        // !enableFlip && modifierFromPopperPosition(),
        className
      )}
      role="tooltip"
      id={id}
    >
      <TooltipArrow />
      <TooltipContent isLeftAligned={isContentLeftAligned}>{bodyContent}</TooltipContent>
    </div>
  );

  const appendToDocumentBody = () => document.body;
  const onMouseEnter = () => setVisible(true);
  const onMouseLeave = () => setVisible(false);
  const onFocus = () => setVisible(true);
  const onBlur = () => setVisible(false);
  const onClick = (event: any, triggerElement: any) => {
    // event.currentTarget = document
    // event.target could be triggerElement or something else
    if (hideOnClick === true) {
      // hide on inside the toggle as well as outside clicks
      if (visible) {
        setVisible(false);
      } else if (event.target === triggerElement) {
        setVisible(true);
      }
    } else if (hideOnClick === false) {
      // do nothing
    } else if (hideOnClick === 'toggle') {
      setVisible(!visible);
    }
  }

  return (
    <>
      <Button onClick={() => setVisible(!visible)}>Visible: {visible}</Button>
      <Popper
        trigger={children}
        popper={content}
        appendTo={appendTo || appendToDocumentBody}
        isVisible={visible}
        positionModifiers={positionModifiers}
        distance={distance}
        position="center"
        onMouseEnter={triggerOnMouseenter && onMouseEnter}
        onMouseLeave={triggerOnMouseenter && onMouseLeave}
        onFocus={triggerOnFocus && onFocus}
        onBlur={triggerOnFocus && onBlur}
        onClick={triggerOnClick && onClick}
      />
    </>
  );

  // return (
  //   <>
  //     <ChildWrapperComponent onFoundRef={(foundRef: any) => setReferenceElement(foundRef)}>
  //       {children}
  //     </ChildWrapperComponent>
  //     {ReactDOM.createPortal(
  //       <div
  //         ref={setPopperElement}
  //         style={{
  //           ...popperStyles.popper,
  //           zIndex: 9999
  //         }}
  //         {...attributes.popper}
  //         className={css(styles.tooltip, modifierFromPopperPosition())}
  //         role="tooltip"
  //       >
  //         <TooltipArrow />
  //         <TooltipContent isLeftAligned={isContentLeftAligned}>{content}</TooltipContent>
  //       </div>,
  //       document.body
  //     )}
  //   </>
  // );
};

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
   */
  position?: 'auto' | 'top' | 'bottom' | 'left' | 'right';
  /** Tooltip trigger: click, mouseenter, focus, manual  */
  trigger?: string;
  hideOnClick?: true | false | 'toggle';
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
