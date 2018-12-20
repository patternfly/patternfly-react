import React from 'react';
import PropTypes from 'prop-types';
import Tippy from '@tippy.js/react';
import styles from '@patternfly/patternfly-next/components/Tooltip/tooltip.css';
import { StyleSheet, css, getModifier } from '@patternfly/react-styles';
import TooltipArrow from './TooltipArrow';
import TooltipContent from './TooltipContent';
import { KEY_CODES } from '../../internal/constants';

// Need to unset tippy default styles
// Also for enableFlip, need to make arrow aware of parent x-placement attribute in order to work
const overrides = StyleSheet.parse(`
  .pf-tippy-theme {
    &.tippy-tooltip { 
      background-color: unset;
      font-size: unset;
      color: unset;
      border-radius: unset;
      max-width: unset;
      text-align: unset;
    }
  }
  .tippy-popper[x-placement^=top] .pf-c-tooltip__arrow {
    bottom: 0;
    left: 50%;
    transform: var(--pf-c-tooltip__arrow--m-top--Transform); 
  }
  .tippy-popper[x-placement^=bottom] .pf-c-tooltip__arrow {
    top: 0;
    left: 50%;
    transform: var(--pf-c-tooltip__arrow--m-bottom--Transform); 
  }
  .tippy-popper[x-placement^=left] .pf-c-tooltip__arrow {
    top: 50%;
    right: 0;
    transform: var(--pf-c-tooltip__arrow--m-left--Transform); 
  }
  .tippy-popper[x-placement^=right] .pf-c-tooltip__arrow {
    top: 50%;
    left: 0;
    transform: var(--pf-c-tooltip__arrow--m-right--Transform); 
  }  
`);
overrides.inject();

export const TooltipPosition = {
  top: 'top',
  bottom: 'bottom',
  left: 'left',
  right: 'right'
};

const propTypes = {
  /** Tooltip position */
  position: PropTypes.oneOf(Object.keys(TooltipPosition).map(key => TooltipPosition[key])),
  /** If true, tries to keep the tooltip in view by flipping it if necessary */
  enableFlip: PropTypes.bool,
  /** Tooltip additional class */
  className: PropTypes.string,
  /** Tooltip content */
  content: PropTypes.node.isRequired,
  /** The reference element to which the tooltip is relatively placed to */
  children: PropTypes.element.isRequired,
  /** The element to append the tooltip to, defaults to body */
  appendTo: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  /** z-index of the tooltip */
  zIndex: PropTypes.number,
  /** Size of the tooltip */
  size: PropTypes.oneOf(['small', 'regular', 'large'])
};

const defaultProps = {
  position: 'top',
  enableFlip: true,
  className: null,
  appendTo: () => document.body,
  zIndex: 9999,
  size: 'small'
};

class Tooltip extends React.Component {
  storeTippyInstance = tip => {
    this.tip = tip;
  };

  handleEscKeyClick = event => {
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

  render() {
    const {
      position,
      enableFlip,
      children,
      className,
      content: bodyContent,
      appendTo,
      zIndex,
      size,
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
      <Tippy
        onCreate={this.storeTippyInstance}
        size={size}
        zIndex={zIndex}
        appendTo={appendTo}
        content={content}
        lazy
        animateFill={false}
        theme="pf-tippy"
        performance
        placement={position}
        distance={15}
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
        {children}
      </Tippy>
    );
  }
}

Tooltip.propTypes = propTypes;
Tooltip.defaultProps = defaultProps;

export default Tooltip;
