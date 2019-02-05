import React from 'react';
import PropTypes from 'prop-types';
import Tippy from '@tippy.js/react';
import FocusTrap from 'focus-trap-react';
import { KEY_CODES } from '../../helpers/constants';
import styles from '@patternfly/patternfly/components/Popover/popover.css';
import { css, getModifier } from '@patternfly/react-styles';
import PopoverArrow from './PopoverArrow';
import PopoverContent from './PopoverContent';
import PopoverBody from './PopoverBody';
import PopoverHeader from './PopoverHeader';
import PopoverFooter from './PopoverFooter';
import PopoverCloseButton from './PopoverCloseButton';
import GenerateId from '../../helpers/GenerateId/GenerateId';
import { c_popover_MaxWidth as popoverMaxWidth } from '@patternfly/react-tokens';
import { tippyStyles } from '../Tooltip/styles';

tippyStyles();

export const PopoverPosition = {
  top: 'top',
  bottom: 'bottom',
  left: 'left',
  right: 'right'
};

const propTypes = {
  /** Popover position */
  position: PropTypes.oneOf(Object.keys(PopoverPosition).map(key => PopoverPosition[key])),
  /** If true, tries to keep the popover in view by flipping it if necessary */
  enableFlip: PropTypes.bool,
  /** Popover additional class */
  className: PropTypes.string,
  /** The reference element to which the popover is relatively placed to */
  children: PropTypes.element.isRequired,
  /** Accessible label, required when header is not present */
  'aria-label': props => {
    if (!props.headerContent && !props['aria-label']) {
      return new Error('aria-label is required when header is not used');
    }
    return null;
  },
  /** Header content, leave empty for no header */
  headerContent: PropTypes.node,
  /** Body content */
  bodyContent: PropTypes.node.isRequired,
  footerContent: PropTypes.node,
  /**
   * True to show the popover programmatically. Used in conjunction with the shouldClose prop.
   * By default, the popover child element handles click events automatically. If you want to control this programmatically,
   * the popover will not auto-close if the Close button is clicked, ESC key is used, or if a click occurs outside the popover.
   * Instead, the consumer is responsible for closing the popover themselves by adding a callback listener for the shouldClose prop.
   */
  isVisible: PropTypes.bool,
  /**
   * Callback function that is only invoked when isVisible is also controlled. Called when the popover Close button is
   * clicked or the ESC key is used
   */
  shouldClose: PropTypes.func,
  /** The element to append the popover to, defaults to body */
  appendTo: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  /** Hides the popover when a click occurs outside (only works if isVisible is not controlled by the user) */
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
  zIndex: PropTypes.number,
  /** Maximum width of the tooltip (default 18.75rem) */
  maxWidth: PropTypes.string,
  /** Aria label for the Close button */
  closeBtnAriaLabel: PropTypes.string
};

const defaultProps = {
  position: 'top',
  enableFlip: true,
  className: null,
  isVisible: null,
  shouldClose: () => undefined,
  'aria-label': '',
  headerContent: null,
  footerContent: null,
  appendTo: () => document.body,
  hideOnOutsideClick: true,
  onHide: () => undefined,
  onHidden: () => undefined,
  onShow: () => undefined,
  onShown: () => undefined,
  onMount: () => undefined,
  zIndex: 9999,
  maxWidth: popoverMaxWidth && popoverMaxWidth.value,
  closeBtnAriaLabel: 'Close'
};

class Popover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  hideOrNotify = () => {
    if (this.props.isVisible === null) {
      // Handle closing
      this.tip.hide();
    } else {
      // notify consumer
      this.props.shouldClose(this.tip);
    }
  };

  handleEscKeyClick = event => {
    if (event.keyCode === KEY_CODES.ESCAPE_KEY && this.tip.state.isVisible) {
      this.hideOrNotify();
    }
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleEscKeyClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleEscKeyClick, false);
  }

  storeTippyInstance = tip => {
    this.tip = tip;
  };

  closePopover = () => {
    this.hideOrNotify();
  };

  hideAllPopovers = () => {
    document.querySelectorAll('.tippy-popper').forEach(popper => {
      popper._tippy && popper._tippy.hide();
    });
  };

  onHide = tip => {
    this.state.isOpen && this.setState({ isOpen: false });
    return this.props.onHide(tip);
  };

  onHidden = tip => this.props.onHidden(tip);

  onMount = tip => this.props.onMount(tip);

  onShow = tip => {
    const { hideOnOutsideClick, isVisible, onShow } = this.props;
    // hide all other open popovers first if events are managed by us
    !hideOnOutsideClick && isVisible === null && this.hideAllPopovers();
    this.state.isOpen === false && this.setState({ isOpen: true });
    return onShow(tip);
  };

  onShown = tip => this.props.onShown(tip);

  render() {
    const {
      position,
      enableFlip,
      children,
      className,
      'aria-label': ariaLabel,
      headerContent,
      bodyContent,
      footerContent,
      isVisible,
      shouldClose,
      appendTo,
      hideOnOutsideClick,
      onHide,
      onHidden,
      onShow,
      onShown,
      onMount,
      zIndex,
      maxWidth,
      closeBtnAriaLabel,
      ...rest
    } = this.props;
    const content = (
      <GenerateId>
        {randomId =>
          this.state.isOpen && (
            <FocusTrap focusTrapOptions={{ clickOutsideDeactivates: true }}>
              <div
                className={css(
                  styles.popover,
                  !enableFlip && getModifier(styles, position, styles.modifiers.top),
                  className
                )}
                role="dialog"
                aria-modal="true"
                aria-label={headerContent ? undefined : ariaLabel}
                aria-labelledby={headerContent ? `popover-${randomId}-header` : undefined}
                aria-describedby={`popover-${randomId}-body`}
                {...rest}
              >
                <PopoverArrow />
                <PopoverContent>
                  <PopoverCloseButton onClose={this.closePopover} aria-label={closeBtnAriaLabel} />
                  {headerContent && <PopoverHeader id={`popover-${randomId}-header`}>{headerContent}</PopoverHeader>}
                  <PopoverBody id={`popover-${randomId}-body`}>{bodyContent}</PopoverBody>
                  {footerContent && <PopoverFooter>{footerContent}</PopoverFooter>}
                </PopoverContent>
              </div>
            </FocusTrap>
          )
        }
      </GenerateId>
    );
    const handleEvents = isVisible === null;
    const shouldHideOnClick = () => {
      if (handleEvents) {
        if (hideOnOutsideClick === true) {
          return true;
        }
        return 'toggle';
      }
      return false;
    };
    return (
      <Tippy
        onCreate={this.storeTippyInstance}
        maxWidth={maxWidth}
        zIndex={zIndex}
        appendTo={appendTo}
        content={content}
        lazy
        trigger={handleEvents ? 'click' : 'manual'}
        isVisible={isVisible}
        hideOnClick={shouldHideOnClick()}
        animateFill={false}
        theme="pf-tippy"
        performance
        interactive
        interactiveBorder={0}
        placement={position}
        distance={25}
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
        onHide={this.onHide}
        onHidden={this.onHidden}
        onShow={this.onShow}
        onShown={this.onShown}
        onMount={this.onMount}
      >
        {children}
      </Tippy>
    );
  }
}

Popover.propTypes = propTypes;
Popover.defaultProps = defaultProps;

export default Popover;
