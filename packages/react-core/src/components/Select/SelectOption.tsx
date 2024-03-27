import { ReactNode, Ref, FunctionComponent, forwardRef } from 'react';
import { css } from '@patternfly/react-styles';
import { MenuItemProps, MenuItem } from '../Menu';

/**
 * See the MenuItem section of the Menu documentation for additional props that may be passed.
 */

export interface SelectOptionProps extends Omit<MenuItemProps, 'ref'> {
  /** Anything which can be rendered in a select option */
  children?: ReactNode;
  /** Classes applied to root element of select option */
  className?: string;
  /** @hide Forwarded ref */
  innerRef?: Ref<HTMLAnchorElement | HTMLButtonElement>;
  /** Identifies the component in the Select onSelect callback */
  value?: any;
  /** Indicates the option has a checkbox */
  hasCheckbox?: boolean;
  /** Indicates the option is disabled */
  isDisabled?: boolean;
  /** Indicates the option is selected */
  isSelected?: boolean;
  /** Indicates the option is focused */
  isFocused?: boolean;
  /** Render an external link icon on focus or hover, and set the link's
   * "target" attribute to a value of "_blank".
   */
  isExternalLink?: boolean;
  /** Render option with icon */
  icon?: ReactNode;
  /** Description of the option */
  description?: ReactNode;
}

const SelectOptionBase: FunctionComponent<MenuItemProps> = ({
  children,
  className,
  innerRef,
  value,
  ...props
}: SelectOptionProps) => (
  <MenuItem itemId={value} ref={innerRef} className={css(className)} {...props}>
    {children}
  </MenuItem>
);

export const SelectOption = forwardRef((props: SelectOptionProps, ref: Ref<any>) => (
  <SelectOptionBase {...props} innerRef={ref} />
));

SelectOption.displayName = 'SelectOption';
