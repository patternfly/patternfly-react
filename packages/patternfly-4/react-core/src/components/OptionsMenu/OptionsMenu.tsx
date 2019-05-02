import * as React from 'react';
import styles from '@patternfly/patternfly/components/OptionsMenu/options-menu.css';
import { css, getModifier } from '@patternfly/react-styles';
import { OptionsMenuDirection, OptionsMenuPosition } from './optionsMenuConstants';
import { OneOf } from '../../helpers';
import { DropdownDirection, DropdownPosition } from '../Dropdown';

export interface OptionsMenuProps extends React.HTMLProps<HTMLDivElement>{
  /** Classes applied to root element of the Options menu */
  className?: string;
  /** Id of the root element of the Options menu */
  id: string;
  /** Array of OptionsMenuItem and/or OptionMenuItemGroup nodes that will be rendered in the Options menu list */
  menuItems: React.ReactNode[];
  /** Either an OptionsMenuToggle or an OptionsMenuToggleWithText to use to toggle the Options menu */
  toggle: React.ReactElement;
  /** Flag to indicate the toggle has no border or background */
  isPlain?: boolean;
  /** Flag to indicate if menu is open */
  isOpen?: boolean;
  /** Provides an accessible name for the Options menu */
  ariaLabelMenu?: string;
  /** Indicates where menu will be aligned horizontally */
  position?: OneOf<typeof DropdownPosition, keyof typeof DropdownPosition>;
  /** Display menu above or below Options menu toggle */
  direction?: OneOf<typeof DropdownDirection, keyof typeof DropdownDirection>;
}

export class OptionsMenu extends React.Component<OptionsMenuProps> {

  static defaultProps = {
    className: '',
    isOpen: false,
    isPlain: false,
    ariaLabelMenu: '',
    direction: OptionsMenuDirection.down,
    position: OptionsMenuPosition.left,
  };

  constructor(props: OptionsMenuProps) {
    super(props);
  }

  render() {
    const {
      className,
      direction,
      position,
      id,
      isOpen,
      isPlain,
      ariaLabelMenu,
      menuItems,
      toggle } = this.props;
    return (
      <div id={id}
           className={
             css(styles.optionsMenu,
               direction === OptionsMenuDirection.up && getModifier(styles, 'top'),
               position === OptionsMenuPosition.right && getModifier(styles, 'align-right'),
               isOpen && getModifier(styles, 'expanded'),
               className)}>
        {React.Children.map(toggle, oneToggle =>
          React.cloneElement(oneToggle, {
            parentId: id,
            isOpen,
            isPlain,
          }))}
        {isOpen &&
        <ul className={css(styles.optionsMenuMenu,
          position === OptionsMenuPosition.right && getModifier(styles, 'align-right'))}
            {...ariaLabelMenu ? {'aria-label': ariaLabelMenu} : {'aria-labelledby': `${id}-toggle`}}>
          {menuItems.map((item) => {
            return item;
          })}
        </ul>}
      </div>
    )
  }
}
