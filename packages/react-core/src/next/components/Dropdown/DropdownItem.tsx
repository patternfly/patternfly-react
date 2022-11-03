import React from 'react';
import { css } from '@patternfly/react-styles';
import { MenuItemProps, MenuItem } from '../../../components/Menu';
import { useOUIAProps, OUIAProps } from '../../../helpers';

export interface DropdownItemProps extends Omit<MenuItemProps, 'ref'>, OUIAProps {
  /** Anything which can be rendered in a dropdown item */
  children?: React.ReactNode;
  /** Classes applied to root element of dropdown item */
  className?: string;
  /** Description of the dropdown item */
  description?: React.ReactNode;
  /** Value to overwrite the randomly generated data-ouia-component-id.*/
  ouiaId?: number | string;
  /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
  ouiaSafe?: boolean;
}

export const DropdownItem: React.FunctionComponent<MenuItemProps> = ({
  children,
  className,
  description,
  ouiaId,
  ouiaSafe,
  ...props
}: DropdownItemProps) => {
  const ouiaProps = useOUIAProps(DropdownItem.displayName, ouiaId, ouiaSafe);
  return (
    <MenuItem className={css(className)} description={description} {...ouiaProps} {...props}>
      {children}
    </MenuItem>
  );
};
DropdownItem.displayName = 'DropdownItem';
