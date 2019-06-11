import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/AppLauncher/app-launcher';
import { css } from '@patternfly/react-styles';
import { ApplicationLauncherMenu } from './ApplicationLauncherMenu';
import { ApplicationLauncherToggle } from './ApplicationLauncherToggle';
import { ThIcon } from '@patternfly/react-icons';
import { DropdownContext } from '../Dropdown/dropdownConstants';
import GenerateId from '../../helpers/GenerateId/GenerateId';

export interface ApplicationLauncherProps extends React.HTMLProps<HTMLDivElement> {
    /** Additional element css classes */
    className: string;
    /** Array of DropdownItem nodes that will be rendered in the dropdown Menu list */
    dropdownItems: React.ReactNode[]; 
    /** open bool */
    isOpen: boolean; 
    /** Function callback called when user selects item */
    onSelect: (event: any) => void;
    /** Callback called when application launcher toggle is clicked */
    onToggle?: (value: boolean) => void; 
    /** Adds accessible text to the button. Required for plain buttons */
    'aria-label': string; 
}

export class ApplicationLauncher extends React.Component<ApplicationLauncherProps> { 
  static defaultProps = {
    className: '',
    dropdownItems: [] as React.ReactNode[],
    isOpen: false,
    onSelect: (_event: any): any => undefined,
    onToggle: (_value: boolean): any => undefined,
    'aria-label': 'Actions'
  };

  parentRef = React.createRef<HTMLDivElement>();
  openedOnEnter: boolean = false;
  
  onEnter = () => {
    this.openedOnEnter = true;
  };

  componentDidUpdate() {
    if (!this.props.isOpen){ this.openedOnEnter = false};
  }

  render() {
    const { 'aria-label': ariaLabel, dropdownItems, className, isOpen, onSelect, onToggle } = this.props;
    return (
      <GenerateId>
        {randomId => (
          <div
            className={css(styles.appLauncher, isOpen && styles.modifiers.expanded, className)}
            ref={this.parentRef}
          >
            {React.Children.map(
              <ApplicationLauncherToggle id={`pf-toggle-id-${randomId}`} aria-label={ariaLabel} onToggle={onToggle}>
                <ThIcon />
              </ApplicationLauncherToggle>,
              oneToggle =>
                React.cloneElement(oneToggle, {
                  parentRef: this.parentRef,
                  id: randomId,
                  isOpen,
                  isPlain: true,
                  'aria-haspopup': true,
                  onEnter: this.onEnter
                })
            )}
            {isOpen && (
              <DropdownContext.Provider value={ onSelect }>
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