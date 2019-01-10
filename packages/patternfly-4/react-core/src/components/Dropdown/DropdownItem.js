import React from 'react';
import styles from '@patternfly/patternfly-next/components/Dropdown/dropdown.css';
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
  onClick: Function.prototype
};

class DropdownItem extends React.Component {
  render() {
    const {
      className,
      children,
      isHovered,
      onClick,
      component: Component,
      isDisabled,
      ...additionalProps
    } = this.props;
    if (Component === 'a') {
      additionalProps['aria-disabled'] = isDisabled;
      additionalProps.tabIndex = isDisabled ? -1 : additionalProps.tabIndex;
    } else if (Component === 'button') {
      additionalProps.disabled = isDisabled;
    }

    return (
      <DropdownContext.Consumer>
        {onSelect => (
          <li>
            {React.isValidElement(children) ? (
              React.Children.map(children, child =>
                React.cloneElement(child, {
                  className: `${css(
                    isDisabled && styles.modifiers.disabled,
                    isHovered && styles.modifiers.hover,
                    className
                  )} ${child.props.className}`
                })
              )
            ) : (
              <Component
                {...additionalProps}
                className={css(isDisabled && styles.modifiers.disabled, isHovered && styles.modifiers.hover, className)}
                onClick={event => {
                  if (!isDisabled) {
                    if (Component === 'button') onClick && onClick(event);
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
