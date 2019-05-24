import React, { Children, cloneElement } from 'react';
import styles from '@patternfly/react-styles/css/components/AppLauncher/app-launcher';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import ApplicationLauncherMenu from './ApplicationLauncherMenu';
import Toggle from './Toggle';
import { ThIcon } from '@patternfly/react-icons';
import { DropdownContext } from '../Dropdown/dropdownConstants';
import GenerateId from '../../helpers/GenerateId/GenerateId';

export const propTypes = {
  /** Additional element css classes */
  className: PropTypes.string,
  /** Array of DropdownItem nodes that will be rendered in the dropdown Menu list */
  dropdownItems: PropTypes.array,
  /** open bool */
  isOpen: PropTypes.bool,
  /** Function callback called when user selects item */
  onSelect: PropTypes.func,
  /** Callback called when application launcher toggle is clicked */
  onToggle: PropTypes.func,
  /** Adds accessible text to the button. Required for plain buttons */
  'aria-label': PropTypes.string
};

export const defaultProps = {
  className: '',
  dropdownItems: [],
  isOpen: false,
  onSelect: Function.prototype,
  onToggle: Function.prototype,
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
    const { 'aria-label': ariaLabel, dropdownItems, className, isOpen, onSelect, onToggle } = this.props;
    return (
      <GenerateId>
        {randomId => (
          <div
            className={css(styles.appLauncher, isOpen && styles.modifiers.expanded, className)}
            ref={ref => {
              this.parentRef = ref;
            }}
          >
            {Children.map(
              <Toggle id={`pf-toggle-id-${randomId}`} aria-label={ariaLabel} onToggle={onToggle}>
                <ThIcon />
              </Toggle>,
              oneToggle =>
                cloneElement(oneToggle, {
                  parentRef: this.parentRef,
                  id: randomId,
                  isOpen,
                  isPlain: true,
                  'aria-haspopup': true,
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
          </div>
        )}
      </GenerateId>
    );
  }
}

ApplicationLauncher.propTypes = propTypes;
ApplicationLauncher.defaultProps = defaultProps;

export default ApplicationLauncher;
