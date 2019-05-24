import React from 'react';
import styles from '@patternfly/react-styles/css/components/AppLauncher/app-launcher';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import { ApplicationLauncherPosition } from './applicationLauncherConstants';
import { DropdownArrowContext } from '../Dropdown/dropdownConstants';
import ReactDOM from 'react-dom';
import { keyHandler } from '../../helpers/util';
import { KEY_CODES, KEYHANDLER_DIRECTION } from '../../helpers/constants';

const propTypes = {
  /** Anything which can be rendered as dropdown items */
  children: PropTypes.node,
  /** Classess applied to root element of dropdown menu */
  className: PropTypes.string,
  /** internal index of the item */
  index: PropTypes.number,
  /** Flag to indicate if menu is opened */
  isOpen: PropTypes.bool,
  /** Flag to indicate if menu should be opened on enter */
  openedOnEnter: PropTypes.bool,
  /** Indicates where menu will be alligned horizontally */
  position: PropTypes.oneOf(Object.values(ApplicationLauncherPosition)),
  /** Additional props are spread to the container component */
  '': PropTypes.any // eslint-disable-line react/require-default-props
};

const defaultProps = {
  children: null,
  className: '',
  index: null,
  isOpen: true,
  openedOnEnter: false,
  position: ApplicationLauncherPosition.left
};

class ApplicationLauncherMenu extends React.Component {
  refsCollection = [];

  childKeyHandler = (index, position, custom = false) => {
    keyHandler(index, position, this.refsCollection, this.props.children, custom);
  };

  onKeyDown = event => {
    // Detected key press on this item, notify the menu parent so that the appropriate
    // item can be focused
    if (event.key === KEY_CODES.TAB) return;
    event.preventDefault();
    if (event.keyCode === KEY_CODES.ARROW_UP) {
      keyHandler(this.props.index, KEYHANDLER_DIRECTION.UP, this.refsCollection, this.props.children);
    } else if (event.keyCode === KEY_CODES.ARROW_DOWN) {
      keyHandler(this.props.index, KEYHANDLER_DIRECTION.DOWN, this.refsCollection, this.props.children);
    } else if (event.key === KEY_CODES.ENTER) {
      if (!this.ref.current.getAttribute) {
        ReactDOM.findDOMNode(this.ref.current).click(); // eslint-disable-line react/no-find-dom-node
      } else {
        this.ref.current.click && this.ref.current.click();
      }
    }
  };

  componentDidMount() {
    if (this.props.openedOnEnter) {
      this.refsCollection[0].focus();
    }
  }

  sendRef = (index, node, isDisabled) => {
    if (!node.getAttribute) {
      this.refsCollection[index] = ReactDOM.findDOMNode(node); // eslint-disable-line react/no-find-dom-node
    } else if (isDisabled || node.getAttribute('role') === 'separator') {
      this.refsCollection[index] = null;
    } else {
      this.refsCollection[index] = node;
    }
  };

  extendChildren() {
    return React.Children.map(this.props.children, (child, index) =>
      React.cloneElement(child, {
        index,
        isAppLauncher: true
      })
    );
  }

  render() {
    const { className, isOpen, position, children, openedOnEnter, ...props } = this.props;

    return (
      <DropdownArrowContext.Provider
        value={{
          keyHandler: this.childKeyHandler,
          sendRef: this.sendRef
        }}
      >
        <ul {...props} className={css(styles.appLauncherMenu, className)} hidden={!isOpen} role="menu">
          {this.extendChildren()}
        </ul>
      </DropdownArrowContext.Provider>
    );
  }
}

ApplicationLauncherMenu.propTypes = propTypes;
ApplicationLauncherMenu.defaultProps = defaultProps;

export default ApplicationLauncherMenu;
