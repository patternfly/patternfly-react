import React from 'react';
import ReactDOM from 'react-dom';
import styles from '@patternfly/patternfly/components/Dropdown/dropdown.css';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import { componentShape } from '../../internal/componentShape';
import { DropdownContext } from './dropdownConstants';

const propTypes = {
  /** Anything which can be rendered as dropdown item */
  children: PropTypes.node,
  /** Classes applied to root element of dropdown item */
  className: PropTypes.string,
  /** Indicates which component will be used as dropdown item */
  component: componentShape,
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
  /** Additional props are spread to the container component */
  '': PropTypes.any,
  /** Callback for click event */
  onClick: PropTypes.func
};

const defaultProps = {
  children: null,
  className: '',
  isHovered: false,
  component: 'a',
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
    if (event.key === 'Tab') return;
    event.preventDefault();
    if (event.key === 'ArrowUp') {
      this.props.context.keyHandler(this.props.index, 'up');
    } else if (event.key === 'ArrowDown') {
      this.props.context.keyHandler(this.props.index, 'down');
    } else if (event.key === 'Enter') {
      if (!this.ref.current.getAttribute) ReactDOM.findDOMNode(this.ref.current).click();
      else {
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
      isDisabled,
      index,
      ...props
    } = this.props;
    const additionalProps = props;
    if (Component === 'a') {
      additionalProps['aria-disabled'] = isDisabled;
      additionalProps.tabIndex = isDisabled ? -1 : additionalProps.tabIndex;
    } else if (Component === 'button') {
      additionalProps.disabled = isDisabled;
      additionalProps.type = additionalProps.type || 'button';
    }
    return (
      <DropdownContext.Consumer>
        {onSelect => (
          <li role="none">
            {React.isValidElement(children) ? (
              React.Children.map(children, child =>
                React.cloneElement(child, {
                  className: `${css(
                    isDisabled && styles.modifiers.disabled,
                    isHovered && styles.modifiers.hover,
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
                className={css(isDisabled && styles.modifiers.disabled, isHovered && styles.modifiers.hover, className)}
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
