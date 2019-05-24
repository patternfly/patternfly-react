import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import dropdownStyles from '@patternfly/patternfly/components/Dropdown/dropdown.css';
import appLauncherStyles from '@patternfly/patternfly/components/AppLauncher/app-launcher.css';
import { css } from '@patternfly/react-styles';
import { componentShape } from '../../helpers/componentShape';
import { DropdownContext } from './dropdownConstants';
import { KEY_CODES, KEYHANDLER_DIRECTION } from '../../helpers/constants';

const propTypes = {
  /** Anything which can be rendered as dropdown item */
  children: PropTypes.node,
  /** Classes applied to root element of dropdown item */
  className: PropTypes.string,
  /** Indicates which component will be used as dropdown item */
  component: componentShape,
  /** Flag if this is for the app launcher */
  isAppLauncher: PropTypes.bool,
  /** Role for the item */
  role: PropTypes.string,
  /** Render dropdown item as disabled option */
  isDisabled: PropTypes.bool,
  /** Forces display of the hover state of the element */
  isHovered: PropTypes.bool,
  /** Default hyperlink location */
  href: PropTypes.string,
  index: PropTypes.number,
  context: PropTypes.shape({
    keyHandler: PropTypes.func,
    sendRef: PropTypes.func
  }),
  /** Callback for click event */
  onClick: PropTypes.func,
  /** Additional props are spread to the container component */
  '': PropTypes.any // eslint-disable-line react/require-default-props
};

const defaultProps = {
  children: null,
  className: '',
  isHovered: false,
  component: 'a',
  isAppLauncher: false,
  role: null,
  isDisabled: false,
  href: '#',
  onClick: Function.prototype,
  index: -1,
  context: {
    keyHandler: Function.prototype,
    sendRef: Function.prototype
  }
};

class DropdownItem extends React.Component {
  ref = React.createRef();

  componentDidMount() {
    this.props.context.sendRef(this.props.index, this.ref.current, this.props.isDisabled);
  }

  onKeyDown = event => {
    // Detected key press on this item, notify the menu parent so that the appropriate
    // item can be focused
    if (event.keyCode === KEY_CODES.TAB) return;
    event.preventDefault();
    if (event.keyCode === KEY_CODES.ARROW_UP) {
      this.props.context.keyHandler(this.props.index, KEYHANDLER_DIRECTION.UP);
    } else if (event.keyCode === KEY_CODES.ARROW_DOWN) {
      this.props.context.keyHandler(this.props.index, KEYHANDLER_DIRECTION.DOWN);
    } else if (event.keyCode === KEY_CODES.ENTER) {
      if (!this.ref.current.getAttribute) {
        ReactDOM.findDOMNode(this.ref.current).click(); // eslint-disable-line react/no-find-dom-node
      } else {
        this.ref.current.click && this.ref.current.click();
      }
    }
  };

  render() {
    const {
      className,
      children,
      isHovered,
      context,
      onClick,
      component: Component,
      isAppLauncher,
      isDisabled,
      index,
      ...props
    } = this.props;
    const additionalProps = props;
    let classes;
    if (Component === 'a') {
      additionalProps['aria-disabled'] = isDisabled;
      additionalProps.tabIndex = isDisabled ? -1 : additionalProps.tabIndex;
    } else if (Component === 'button') {
      additionalProps.disabled = isDisabled;
      additionalProps.type = additionalProps.type || 'button';
    }

    if (isAppLauncher) {
      classes = css(
        appLauncherStyles.appLauncherMenuItem,
        isDisabled && appLauncherStyles.modifiers.disabled,
        isHovered && appLauncherStyles.modifiers.hover,
        className
      );
    } else {
      this.props.role === 'separator'
        ? (classes = className)
        : (classes = css(
            dropdownStyles.dropdownMenuItem,
            isDisabled && dropdownStyles.modifiers.disabled,
            isHovered && dropdownStyles.modifiers.hover,
            className
          ));
    }
    return (
      <DropdownContext.Consumer>
        {onSelect => (
          <li role="none">
            {React.isValidElement(children) ? (
              React.Children.map(children, child =>
                React.cloneElement(child, {
                  className: `${css(
                    isDisabled && dropdownStyles.modifiers.disabled,
                    isHovered && dropdownStyles.modifiers.hover,
                    className
                  )} ${child.props.className}`,
                  ref: this.ref,
                  onKeyDown: this.onKeyDown,
                  onClick: event => {
                    if (!isDisabled) {
                      onClick && onClick(event);
                      onSelect && onSelect(event);
                    }
                  }
                })
              )
            ) : (
              <Component
                {...additionalProps}
                className={classes}
                ref={this.ref}
                onKeyDown={this.onKeyDown}
                onClick={event => {
                  if (!isDisabled) {
                    onClick && onClick(event);
                    onSelect && onSelect(event);
                  }
                }}
              >
                {children}
              </Component>
            )}
          </li>
        )}
      </DropdownContext.Consumer>
    );
  }
}

DropdownItem.propTypes = propTypes;
DropdownItem.defaultProps = defaultProps;

export default DropdownItem;
