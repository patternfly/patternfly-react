import * as React from 'react';
import { DropdownMenu, DropdownContext } from '@patternfly/react-core';
import { css } from '@patternfly/react-styles';
import topologyStyles from '@patternfly/react-styles/css/components/Topology/topology-components';
import styles from '@patternfly/react-styles/css/components/Dropdown/dropdown';
// FIXME fully qualified due to the effect of long build times on storybook
import Popper from '../popper/Popper';

type ContextMenuProps = Pick<
  React.ComponentProps<typeof Popper>,
  'children' | 'container' | 'className' | 'open' | 'reference' | 'onRequestClose'
>;

const ContextMenu: React.FunctionComponent<ContextMenuProps> = ({
  children,
  open = true,
  onRequestClose,
  ...other
}) => {
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
        <div className={css(styles.dropdown, styles.modifiers.expanded)}>
          <DropdownMenu className={css(topologyStyles.topologyContextMenuCDropdownMenu)} autoFocus>
            {children}
          </DropdownMenu>
        </div>
      </DropdownContext.Provider>
    </Popper>
  );
};

export default ContextMenu;
