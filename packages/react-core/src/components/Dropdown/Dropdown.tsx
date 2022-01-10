import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Dropdown/dropdown';
import { DropdownPosition, DropdownDirection, DropdownContext } from './dropdownConstants';
import { DropdownWithContext } from './DropdownWithContext';
import { ToggleMenuBaseProps } from '../../helpers/Popper/Popper';
import { OUIAProps, useOUIAId } from '../../helpers';

export interface DropdownProps extends ToggleMenuBaseProps, React.HTMLProps<HTMLDivElement>, OUIAProps {
  /** Anything which can be rendered in a dropdown */
  children?: React.ReactNode;
  /** Classes applied to root element of dropdown */
  className?: string;
  /** Array of DropdownItem nodes that will be rendered in the dropdown Menu list */
  dropdownItems?: any[];
  /** Flag to indicate if menu is opened */
  isOpen?: boolean;
  /** Display the toggle with no border or background */
  isPlain?: boolean;
  /** Display the toggle in text only mode */
  isText?: boolean;
  /** Flag indicating that the dropdown should expand to full height */
  isFullHeight?: boolean;
  /** Indicates where menu will be aligned horizontally */
  position?: DropdownPosition | 'right' | 'left';
  /** Indicates how the menu will align at screen size breakpoints. Default alignment is set via the position property. */
  alignments?: {
    sm?: 'right' | 'left';
    md?: 'right' | 'left';
    lg?: 'right' | 'left';
    xl?: 'right' | 'left';
    '2xl'?: 'right' | 'left';
  };
  /** Display menu above or below dropdown toggle */
  direction?: DropdownDirection | 'up' | 'down';
  /** Flag to indicate if dropdown has groups */
  isGrouped?: boolean;
  /** Toggle for the dropdown, examples: <DropdownToggle> or <DropdownToggleCheckbox> */
  toggle: React.ReactElement<any>;
  /** Function callback called when user selects item */
  onSelect?: (event?: React.SyntheticEvent<HTMLDivElement>) => void;
  /** Flag to indicate if the first dropdown item should gain initial focus, set false when adding
   * a specific auto-focus item (like a current selection) otherwise leave as true
   */
  autoFocus?: boolean;
  /** Props for extreme customization of dropdown */
  contextProps?: typeof DropdownContext;
}

export const Dropdown: React.FunctionComponent<DropdownProps> = ({
  onSelect,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ref, // Types of Ref are different for React.FC vs React.Component
  ouiaId,
  ouiaSafe,
  alignments,
  contextProps,
  ...props
}: DropdownProps) => (
  <DropdownContext.Provider
    value={{
      onSelect: event => onSelect && onSelect(event),
      toggleTextClass: styles.dropdownToggleText,
      toggleIconClass: styles.dropdownToggleImage,
      toggleIndicatorClass: styles.dropdownToggleIcon,
      menuClass: styles.dropdownMenu,
      itemClass: styles.dropdownMenuItem,
      toggleClass: styles.dropdownToggle,
      baseClass: styles.dropdown,
      baseComponent: 'div',
      sectionClass: styles.dropdownGroup,
      sectionTitleClass: styles.dropdownGroupTitle,
      sectionComponent: 'section',
      disabledClass: styles.modifiers.disabled,
      plainTextClass: styles.modifiers.text,
      ouiaId: useOUIAId(Dropdown.displayName, ouiaId),
      ouiaSafe,
      ouiaComponentType: Dropdown.displayName,
      alignments,
      ...contextProps
    }}
  >
    <DropdownWithContext {...props} />
  </DropdownContext.Provider>
);
Dropdown.displayName = 'Dropdown';
