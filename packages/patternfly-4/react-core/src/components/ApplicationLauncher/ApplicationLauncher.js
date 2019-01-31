import React, { Children, cloneElement } from 'react';
import styles from '@patternfly/patternfly/components/AppLauncher/app-launcher.css';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import ApplicationLauncherMenu from './ApplicationLauncherMenu';
import Toggle from './Toggle';
import { ThIcon } from '@patternfly/react-icons';
import { ApplicationLauncherDirection, ApplicationLauncherPosition } from './applicationLauncherConstants';
import { DropdownContext } from '../Dropdown/dropdownConstants';

export const propTypes = {
  /** Additional element css classes */
  className: PropTypes.string,
  /** Display menu above or below dropdown toggle */
  direction: PropTypes.oneOf(Object.values(ApplicationLauncherDirection)),
  /** Array of DropdownItem nodes that will be rendered in the dropdown Menu list */
  dropdownItems: PropTypes.array,
  /** open bool */
  isOpen: PropTypes.bool,
  /** Function callback called when user selects item */
  onSelect: PropTypes.func,
  /** Callback called when application launcher toggle is clicked */
  onToggle: PropTypes.func,
  /** Indicates where menu will be alligned horizontally */
  position: PropTypes.oneOf(Object.values(ApplicationLauncherPosition)),
  /** Adds accessible text to the button. Required for plain buttons */
  'aria-label': PropTypes.string
};

// seed for the aria-labelledby ID
let currentId = 0;

export const defaultProps = {
  className: '',
  direction: ApplicationLauncherDirection.down,
  dropdownItems: [],
  isOpen: false,
  onSelect: Function.prototype,
  onToggle: Function.prototype,
  position: ApplicationLauncherPosition.left,
  'aria-label': 'Actions'
};

class ApplicationLauncher extends React.Component {
  onEnter = () => {
    this.openedOnEnter = true;
  };

  componentDidUpdate() {
    if (!this.props.isOpen) this.openedOnEnter = false;
  }

  render() {
    const {'aria-label': ariaLabel, children, dropdownItems, className, isOpen, onSelect, onToggle, toggleID, ...props} = this.props;
    const id = `pf-toggle-id-${currentId++}`;
    const toggle = <Toggle id={id} aria-label={ariaLabel} onToggle={onToggle}><ThIcon /></Toggle>;
    return <div
                className={css(
                  styles.appLauncher,
                  isOpen && styles.modifiers.expanded,
                  className
                )}
                ref={ref => {
                    this.parentRef = ref;}}>
      {Children.map(toggle, oneToggle =>
        cloneElement(oneToggle, {
          parentRef: this.parentRef,
          isOpen,
          id,
          isPlain: true,
          ariaHasPopup: true,
          onEnter: this.onEnter
        })
      )}
      {isOpen && (
          <DropdownContext.Provider value={event => onSelect && onSelect(event)}>
      <ApplicationLauncherMenu
        isOpen={isOpen}
        position="left"
        aria-labelledby={ariaLabel}
        openedOnEnter={this.openedOnEnter}
      >
        {dropdownItems}
      </ApplicationLauncherMenu>
      </DropdownContext.Provider>
        )}
    </div>;
  }
}

ApplicationLauncher.propTypes = propTypes;
ApplicationLauncher.defaultProps = defaultProps;

export default ApplicationLauncher;
