import React from 'react';
import styles from '@patternfly/patternfly-next/components/Dropdown/dropdown.css';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import { componentShape } from '../../internal/componentShape';

const propTypes = {
  /** Anything which can be rendered as dropdown item */
  children: PropTypes.node,
  /** Classess applied to root element of dropdown item */
  className: PropTypes.string,
  /** Indicates which component will be used as dropdown item */
  component: componentShape,
  /** Render dropdown item as disabled option */
  isDisabled: PropTypes.bool,
  /** Forces display of the hover state of the element */
  isHovered: PropTypes.bool,
  /** Accesibility role */
  role: PropTypes.string,
  /** Default hyperlink location */
  href: PropTypes.string,
  /** Sets focusedItemRef component state in Dropdown */
  setFocusedItemRef: PropTypes.func
};

const defaultProps = {
  children: null,
  className: '',
  isHovered: false,
  component: 'a',
  isDisabled: false,
  href: '#',
  role: 'menuitem',
  setFocusedItemRef: Function.prototype
};

class DropdownItem extends React.Component {
  handleOnFocus = e => {
    e.stopPropagation();
    this.props.setFocusedItemRef(this.itemRef);
  };

  render() {
    const {
      className,
      children,
      isHovered,
      component: Component,
      isDisabled,
      role,
      setFocusedItemRef,
      ...props
    } = this.props;
    const aditionalProps = props;
    if (Component === 'a') {
      aditionalProps['aria-disabled'] = isDisabled;
      aditionalProps.tabIndex = isDisabled ? -1 : aditionalProps.tabIndex;
    } else if (Component === 'button') {
      aditionalProps.disabled = isDisabled;
    }

    return (
      <Component
        {...aditionalProps}
        className={css(isDisabled && styles.modifiers.disabled, isHovered && styles.modifiers.hover, className)}
        role={role}
        ref={ref => {
          this.itemRef = ref;
        }}
        onFocus={this.handleOnFocus}
      >
        {children}
      </Component>
    );
  }
}

DropdownItem.propTypes = propTypes;
DropdownItem.defaultProps = defaultProps;

export default DropdownItem;
