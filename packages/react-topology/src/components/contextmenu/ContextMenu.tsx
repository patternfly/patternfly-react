import * as React from 'react';
import { DropdownMenu, DropdownContext } from '@patternfly/react-core';
import styles from '@patternfly/react-styles/css/components/Dropdown/dropdown';
// FIXME fully qualified due to the effect of long build times on storybook
import Popper from '../popper/Popper';

type ContextMenuProps = Pick<
  React.ComponentProps<typeof Popper>,
  'container' | 'className' | 'open' | 'reference' | 'onRequestClose'
>;

const ContextMenu: React.FC<ContextMenuProps> = ({ children, open = true, onRequestClose, ...other }) => {
  const [isOpen, setOpen] = React.useState(!!open);
  React.useEffect(() => {
    setOpen(open);
  }, [open]);

  const handleOnRequestClose = React.useCallback(() => {
    onRequestClose ? onRequestClose() : setOpen(false);
  }, [onRequestClose]);

  return (
    <Popper {...other} closeOnEsc closeOnOutsideClick open={isOpen} onRequestClose={handleOnRequestClose}>
      <DropdownContext.Provider
        value={{
          onSelect: handleOnRequestClose,
          toggleTextClass: styles.dropdownToggleText,
          toggleIconClass: styles.dropdownToggleIcon,
          menuClass: styles.dropdownMenu,
          itemClass: styles.dropdownMenuItem,
          toggleClass: styles.dropdownToggle,
          baseClass: styles.dropdown,
          baseComponent: 'div',
          sectionClass: styles.dropdownGroup,
          sectionTitleClass: styles.dropdownGroupTitle,
          sectionComponent: 'section',
          disabledClass: styles.modifiers.disabled
          // hoverClass: styles.modifiers.hover,
          // separatorClass: styles.dropdownSeparator,
        }}
      >
        <div className="pf-c-dropdown pf-m-expanded">
          <DropdownMenu className="pf-topology-context-menu__c-dropdown__menu" autoFocus>
            {children}
          </DropdownMenu>
        </div>
      </DropdownContext.Provider>
    </Popper>
  );
};

export default ContextMenu;
