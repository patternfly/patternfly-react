import React from 'react';
import PropTypes from 'prop-types';
import Tippy from '@tippy.js/react';
import styles from '@patternfly/patternfly-next/components/Popover/popover.css';
import { StyleSheet, css, getModifier } from '@patternfly/react-styles';
import PopoverArrow from './PopoverArrow';
import PopoverContent from './PopoverContent';
import PopoverBody from './PopoverBody';
import PopoverHeader from './PopoverHeader';
import PopoverCloseButton from './PopoverCloseButton';
import GenerateId from '../../internal/GenerateId/GenerateId';

// Need to unset tippy default styles
// Also for 'auto' placement, need to make arrow aware of parent x-placement attribute in order to work
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
  .tippy-popper[x-placement^=top] .pf-c-popover__arrow {
    bottom: 0;
    left: 50%;
    transform: var(--pf-c-popover__arrow--m-top--Transform); 
  }
  .tippy-popper[x-placement^=bottom] .pf-c-popover__arrow {
    top: 0;
    left: 50%;
    transform: var(--pf-c-popover__arrow--m-bottom--Transform); 
  }
  .tippy-popper[x-placement^=left] .pf-c-popover__arrow {
    top: 50%;
    right: 0;
    transform: var(--pf-c-popover__arrow--m-left--Transform); 
  }
  .tippy-popper[x-placement^=right] .pf-c-popover__arrow {
    top: 50%;
    left: 0;
    transform: var(--pf-c-popover__arrow--m-right--Transform); 
  }  
`);
overrides.inject();

export const PopoverPosition = {
  auto: 'auto',
  top: 'top',
  bottom: 'bottom',
  left: 'left',
  right: 'right'
};

const propTypes = {
  /** Popover position */
  position: PropTypes.oneOf(Object.values(PopoverPosition)),
  /** Popover additional class */
  className: PropTypes.string,
  /** The reference element to which the popover is relatively placed to */
  children: PropTypes.element.isRequired,
  /** Accessible label, required when header is not present */
  'aria-label': props => {
    if (!props.headerContent) {
      return new Error('aria-label is required when header is not used');
    }
    return null;
  },
  /** Header content, leave empty for no header */
  headerContent: PropTypes.node,
  /** Body content */
  bodyContent: PropTypes.node.isRequired,
  /** True to show the popover */
  isVisible: PropTypes.bool.isRequired,
  /** Add an arrow to the dialog (if position is not 'auto') */
  showArrow: PropTypes.bool,
  /** The element to append the popover to, defaults to body */
  appendTo: PropTypes.func,
  /** Hides the popover when a click occurs outside */
  hideOnOutsideClick: PropTypes.bool,
  /** Lifecycle function invoked when the popover begins to transition out. */
  onHide: PropTypes.func,
  /** Lifecycle function invoked when the popover has fully transitioned out. */
  onHidden: PropTypes.func,
  /** Lifecycle function invoked when the popover begins to transition in. */
  onShow: PropTypes.func,
  /** Lifecycle function invoked when the popover has fully transitioned in. */
  onShown: PropTypes.func,
  /** Lifecycle function invoked when the popover has been mounted to the DOM. */
  onMount: PropTypes.func,
  /** z-index of the popover */
  zIndex: PropTypes.number
};

const defaultProps = {
  position: 'top',
  className: null,
  'aria-label': '',
  headerContent: null,
  showArrow: true,
  appendTo: () => document.body,
  hideOnOutsideClick: true,
  onHide: () => undefined,
  onHidden: () => undefined,
  onShow: () => undefined,
  onShown: () => undefined,
  onMount: () => undefined,
  zIndex: 9999
};

class PopoverDialog extends React.Component {
  storeTippyInstance = tip => {
    this.tip = tip;
  };

  closePopover = () => {
    this.tip.hide();
  };

  render() {
    const {
      position,
      children,
      className,
      'aria-label': ariaLabel,
      headerContent,
      bodyContent,
      isVisible,
      showArrow,
      appendTo,
      hideOnOutsideClick,
      onHide,
      onHidden,
      onShow,
      onShown,
      onMount,
      zIndex,
      ...rest
    } = this.props;
    const isAuto = position === PopoverPosition.auto;
    const content = (
      <GenerateId>
        {randomId => (
          <div
            className={css(styles.popover, !isAuto && getModifier(styles, position, styles.modifiers.top), className)}
            role="dialog"
            aria-modal="true"
            aria-label={headerContent ? undefined : ariaLabel}
            aria-labelledby={headerContent ? `popover-${randomId}-header` : undefined}
            aria-describedby={`popover-${randomId}-body`}
            {...rest}
          >
            {showArrow && <PopoverArrow />}
            <PopoverContent>
              <PopoverCloseButton onClose={this.closePopover} />
              {headerContent && <PopoverHeader id={`popover-${randomId}-header`}>{headerContent}</PopoverHeader>}
              <PopoverBody id={`popover-${randomId}-body`}>{bodyContent}</PopoverBody>
            </PopoverContent>
          </div>
        )}
      </GenerateId>
    );
    return (
      <Tippy
        onCreate={this.storeTippyInstance}
        size="large"
        zIndex={zIndex}
        appendTo={appendTo}
        content={content}
        trigger="manual"
        isVisible={isVisible}
        animateFill={false}
        theme="pf-tippy"
        performance
        interactive
        interactiveBorder={0}
        placement={position}
        distance={showArrow ? 20 : 10}
        flip={isAuto}
        popperOptions={{
          modifiers: {
            preventOverflow: {
              enabled: isAuto
            },
            hide: {
              enabled: isAuto
            }
          }
        }}
        hideOnClick={hideOnOutsideClick}
        onHide={onHide}
        onHidden={onHidden}
        onShow={onShow}
        onShown={onShown}
        onMount={onMount}
      >
        {children}
      </Tippy>
    );
  }
}

PopoverDialog.propTypes = propTypes;
PopoverDialog.defaultProps = defaultProps;

export default PopoverDialog;
