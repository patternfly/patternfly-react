import React from 'react';
import PropTypes from 'prop-types';
import Tippy from '@tippy.js/react';
import styles from '@patternfly/patternfly/components/Tooltip/tooltip.css';
import { css, getModifier } from '@patternfly/react-styles';
import TooltipArrow from './TooltipArrow';
import TooltipContent from './TooltipContent';
import { KEY_CODES } from '../../helpers/constants';
import { c_tooltip_MaxWidth as tooltipMaxWidth } from '@patternfly/react-tokens';
import { tippyStyles } from './styles';

tippyStyles();

export const TooltipPosition = {
  top: 'top',
  bottom: 'bottom',
  left: 'left',
  right: 'right'
};

const propTypes = {
  /** Tooltip position */
  position: PropTypes.oneOf(Object.keys(TooltipPosition).map(key => TooltipPosition[key])),
  /** Tooltip trigger: click, mouseenter, focus */
  trigger: PropTypes.string,
  /** If true, tries to keep the tooltip in view by flipping it if necessary */
  enableFlip: PropTypes.bool,
  /** Tooltip additional class */
  className: PropTypes.string,
  /** Tooltip content */
  content: PropTypes.node.isRequired,
  /** The reference element to which the tooltip is relatively placed to */
  children: PropTypes.element.isRequired,
  /** Delay in ms before the tooltip appears */
  entryDelay: PropTypes.number,
  /** Delay in ms before the tooltip disappears */
  exitDelay: PropTypes.number,
  /** The element to append the tooltip to, defaults to body */
  appendTo: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  /** z-index of the tooltip */
  zIndex: PropTypes.number,
  /** Maximum width of the tooltip (default 12.5rem) */
  maxWidth: PropTypes.string
};

const defaultProps = {
  position: 'top',
  trigger: 'mouseenter focus',
  enableFlip: true,
  className: null,
  entryDelay: 500,
  exitDelay: 500,
  appendTo: () => document.body,
  zIndex: 9999,
  maxWidth: tooltipMaxWidth && tooltipMaxWidth.value
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
        {isAppLauncher ? this.extendChildren() : children}
      </Tippy>
    );
  }
}

Tooltip.propTypes = propTypes;
Tooltip.defaultProps = defaultProps;

export default Tooltip;
