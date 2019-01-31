import React from 'react';
import styles from '@patternfly/patternfly/components/AppLauncher/app-launcher.css';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import { ApplicationLauncherPosition } from './applicationLauncherConstants';
import { DropdownContext, DropdownArrowContext } from '../Dropdown/dropdownConstants';
import ReactDOM from 'react-dom';

const propTypes = {
  /** Anything which can be rendered as dropdown items */
  children: PropTypes.node,
  /** Classess applied to root element of dropdown menu */
  className: PropTypes.string,
  /** Flag to indicate if menu is opened */
  isOpen: PropTypes.bool,
  /** Indicates where menu will be alligned horizontally */
  position: PropTypes.oneOf(Object.values(ApplicationLauncherPosition)),
  /** Additional props are spread to the container component */
  '': PropTypes.any
};

const defaultProps = {
  children: null,
  className: '',
  isOpen: true,
  position: ApplicationLauncherPosition.left,
};

class ApplicationLauncherMenu extends React.Component {
  refsCollection = {};

  keyHandler = (index, position, custom = false) => {
    const kids = this.props.children;
    if (!Array.isArray(kids)) return;
    let nextIndex;
    if (position === 'up') {
      if (index === 0) {
        // loop back to end
        nextIndex = kids.length - 1;
      } else {
        nextIndex = index - 1;
      }
    } else if (index === kids.length - 1) {
      // loop back to beginning
      nextIndex = 0;
    } else {
      nextIndex = index + 1;
    }
    if (this.refsCollection[`item-${nextIndex}`] === null) {
      this.keyHandler(nextIndex, position, custom);
    } else {
      custom
        ? (this.refsCollection[`item-${nextIndex}`].current.focus &&
            this.refsCollection[`item-${nextIndex}`].current.focus()) ||
          ReactDOM.findDOMNode(this.refsCollection[`item-${nextIndex}`].current).focus()
        : this.refsCollection[`item-${nextIndex}`].focus();
    }
  };

  onKeyDown = event => {
    // Detected key press on this item, notify the menu parent so that the appropriate
    // item can be focused
    if (event.key === 'Tab') return;
    event.preventDefault();
    if (event.key === 'ArrowUp') {
      this.keyHandler(this.props.index, 'up');
    } else if (event.key === 'ArrowDown') {
      this.keyHandler(this.props.index, 'down');
    } else if (event.key === 'Enter') {
      if (!this.ref.current.getAttribute) ReactDOM.findDOMNode(this.ref.current).click();
      else {
        this.ref.current.click && this.ref.current.click();
      }
    }
  };

  componentDidMount() {
    if (this.props.openedOnEnter) {
      this.refsCollection['item-0'].focus();
    }
  }

  sendRef = (index, node, isDisabled) => {
    if (!node.getAttribute) {
      this.refsCollection[`item-${index}`] = ReactDOM.findDOMNode(node);
    } else if (isDisabled || node.getAttribute('role') === 'separator') {
      this.refsCollection[`item-${index}`] = null;
    } else {
      this.refsCollection[`item-${index}`] = node;
    }
  };

  extendChildren() {
    return React.Children.map(this.props.children, (child, index) =>
      React.cloneElement(child, {
        index, isAppLauncher: true
      })
    );
  }

  render() {
    const { className, isOpen, position, children, component: Component, openedOnEnter, ...props } = this.props;

    return (
      <DropdownArrowContext.Provider
        value={{
          keyHandler: this.keyHandler,
          sendRef: this.sendRef
        }}
      >
        <ul
          {...props}
          className={css(
            styles.appLauncherMenu,
            className
          )}
          hidden={!isOpen}
          role="menu"
        >
          {this.extendChildren()}
        </ul>
      </DropdownArrowContext.Provider>
    );
  }
}

ApplicationLauncherMenu.propTypes = propTypes;
ApplicationLauncherMenu.defaultProps = defaultProps;

export default ApplicationLauncherMenu;
