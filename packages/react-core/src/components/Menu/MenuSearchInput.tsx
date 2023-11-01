import * as React from 'react';
import { css } from '@patternfly/react-styles';

export interface MenuSearchInputProps extends React.HTMLProps<HTMLElement> {
  /** Items within input */
  children?: React.ReactNode;
  /** @hide Forwarded ref */
  innerRef?: React.Ref<any>;
}

export const MenuSearchInput = React.forwardRef((props: MenuSearchInputProps, ref: React.Ref<HTMLDivElement>) => (
  // Update to use the styles object when core adds the class
  <div {...props} className={css('pf-v5-c-menu__search-input', props.className)} ref={ref} />
));
MenuSearchInput.displayName = 'MenuSearchInput';
