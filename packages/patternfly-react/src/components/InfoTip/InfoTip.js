import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from '../Dropdown';
import { KEY_CODES } from '../../common/helpers';
import { default as InfoTipToggle } from './InfoTipToggle';
import { default as InfoTipMenu } from './InfoTipMenu';
import { default as InfoTipMenuFooter } from './InfoTipMenuFooter';
import { default as InfoTipMenuItemIcon } from './InfoTipMenuItemIcon';

class InfoTip extends React.Component {
  state = { open: false, footerFocused: false };

  handleEnterKeyDown = event => {
    this.setState({ open: !this.state.open });
    event.preventDefault();
  };

  handleTabKeyDown = event => {
    if (this.state.footerFocused) {
      this.setState({ open: false, footerFocused: false });
    } else {
      this.setState({ footerFocused: true });
    }
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
  };

  handleKeyDown = event => {
    if (event.shiftKey && event.keyCode) {
      return this.handleBackFocus();
    }
    switch (event.keyCode) {
      case KEY_CODES.ENTER_KEY:
        return this.handleEnterKeyDown(event);
      case KEY_CODES.TAB_KEY:
        return this.handleTabKeyDown(event);
      case KEY_CODES.ESCAPE_KEY:
        return this.setState({ open: false });
      default:
        return null;
    }
  };

  handleBackFocus = () => {
    if (this.state.open) {
      this.setState({ open: false });
    }
  };

  handleClick = event => {
    event.preventDefault();
    this.setState({ open: !this.state.open });
  };
  handleBlur = event => {
    if (event && event.relatedTarget) {
      event.relatedTarget.click();
    }
    this.setState({ open: false });
  };

  render() {
    const { children, onToggle, ...props } = this.props;

    return (
      <Dropdown
        componentClass="li"
        onClick={this.handleClick}
        onKeyDown={this.handleKeyDown}
        onToggle={this.handleKeyDown}
        open={this.state.open}
        onBlur={this.handleBlur}
        {...props}
      >
        {children}
      </Dropdown>
    );
  }
}

InfoTip.propTypes = {
  ...Dropdown.propTypes,
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired
};

InfoTip.Toggle = InfoTipToggle;
InfoTip.Menu = InfoTipMenu;
InfoTip.MenuItemIcon = InfoTipMenuItemIcon;
InfoTip.MenuFooter = InfoTipMenuFooter;

export default InfoTip;
