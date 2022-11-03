import * as React from 'react';
import { DropdownArrowContext } from './dropdownConstants';
import { InternalDropdownItem } from './InternalDropdownItem';
import { Divider, DividerVariant } from '../Divider';
import { useOUIAProps, OUIAProps } from '../../helpers';

export interface SeparatorProps extends React.HTMLProps<HTMLAnchorElement>, OUIAProps {
  /** Classes applied to root element of dropdown item */
  className?: string;
  /** Click event to pass to InternalDropdownItem */
  onClick?: (event: React.MouseEvent<HTMLAnchorElement> | React.KeyboardEvent | MouseEvent) => void;
  /** Value to overwrite the randomly generated data-ouia-component-id.*/
  ouiaId?: number | string;
  /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
  ouiaSafe?: boolean;
}

export const DropdownSeparator: React.FunctionComponent<SeparatorProps> = ({
  className = '',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ref, // Types of Ref are different for React.FunctionComponent vs React.Component
  ouiaId,
  ouiaSafe,
  ...props
}: SeparatorProps) => {
  const ouiaProps = useOUIAProps(DropdownSeparator.displayName, ouiaId, ouiaSafe);
  return (
    <DropdownArrowContext.Consumer>
      {context => (
        <InternalDropdownItem
          {...props}
          context={context}
          component={<Divider component={DividerVariant.div} />}
          className={className}
          role="separator"
          {...ouiaProps}
        />
      )}
    </DropdownArrowContext.Consumer>
  );
};
DropdownSeparator.displayName = 'DropdownSeparator';
