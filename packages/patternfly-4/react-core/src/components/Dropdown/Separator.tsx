import * as React from 'react';
import { css } from '@patternfly/react-styles';
import { DropdownContext, DropdownArrowContext } from './dropdownConstants';
import { DropdownItem } from './InternalDropdownItem';

export interface SeparatorProps extends React.HTMLProps<HTMLDivElement> {
 /** Classes applied to root element of dropdown item */
 className?: string; 
}

export const Separator: React.Component<SeparatorProps> = ({
  className = '',
  ...props
}: SeparatorProps) => (
  <DropdownContext.Consumer>
    {({ separatorClass }) => (
      <DropdownArrowContext.Consumer>
        {context => (
          <DropdownItem
            {...props}
            context={context}
            className={css(separatorClass, className)}
            component="div"
            role="separator"
          />
        )}
      </DropdownArrowContext.Consumer>
    )}
  </DropdownContext.Consumer>
);
