import * as React from 'react';
import PopoverBase from '../../helpers/PopoverBase/PopoverBase';
import { Instance as TippyInstance } from 'tippy.js';
import styles from '@patternfly/react-styles/css/components/Tooltip/tooltip';
import { css, getModifier } from '@patternfly/react-styles';
import { TooltipArrow } from './TooltipArrow';
import { TooltipContent } from './TooltipContent';
import { KEY_CODES } from '../../helpers/constants';
import { c_tooltip_MaxWidth as tooltipMaxWidth } from '@patternfly/react-tokens';
import { popoverBaseStyles } from './styles';
import { ReactElement } from 'react';

popoverBaseStyles();

export enum TooltipPosition {
  top = 'top',
  bottom = 'bottom',
  left = 'left',
  right = 'right'
};

export interface TooltipProps {
  /** Tooltip position */
  position?: 'top' | 'bottom' | 'left' | 'right';
  /** Tooltip trigger: click, mouseenter, focus */
  trigger?: string;
  /** If true, tries to keep the tooltip in view by flipping it if necessary */
  enableFlip?: boolean;
  /** Tooltip additional class */
  className?: string;
  /** Tooltip content */
  content: React.ReactNode;
  /** The reference element to which the tooltip is relatively placed to */
  children: ReactElement<any>;
  /** Delay in ms before the tooltip appears */
  entryDelay?: number;
  /** Delay in ms before the tooltip disappears */
  exitDelay?: number;
  /** The element to append the tooltip to, defaults to body */
  appendTo?: Element | ((ref: Element) => Element);
  /** z-index of the tooltip */
  zIndex?: number;
  /** Maximum width of the tooltip (default 12.5rem) */
  maxWidth?: string;
  /** If true, displays as an application launcher */
  isAppLauncher?: boolean;
  /** Distance of the tooltip to its target, defaults to 15 */
  distance?: number;
  /** Aria-labelledby or aria-describedby for tooltip */
  aria?: 'describedby' | 'labelledby';
};

export class Tooltip extends React.Component<TooltipProps> {
  private tip: TippyInstance;
  static defaultProps = {
    position: 'top',
    trigger: 'mouseenter focus',
    enableFlip: true,
    className: '',
    entryDelay: 500,
    exitDelay: 500,
    appendTo: () => document.body,
    zIndex: 9999,
    maxWidth: tooltipMaxWidth && tooltipMaxWidth.value,
    isAppLauncher: false,
    distance: 15,
    aria: 'describedby'
  };

  storeTippyInstance = (tip:TippyInstance) => {
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
      ...rest
    } = this.props;
    const content = (
      <div
        className={css(styles.tooltip, !enableFlip && getModifier(styles, position, styles.modifiers.top), className)}
        role="tooltip"
        {...rest}
      >
        <TooltipArrow />
        <TooltipContent>{bodyContent}</TooltipContent>
      </div>
    );
    return (
      <PopoverBase
        aria={aria}
        onCreate={this.storeTippyInstance}
        maxWidth={maxWidth}
        zIndex={zIndex}
        appendTo={appendTo}
        content={content}
        lazy
        animateFill={false}
        theme="pf-tippy"
        performance
        placement={position}
        trigger={trigger}
        delay={[entryDelay, exitDelay]}
        distance={distance}
        flip={enableFlip}
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
