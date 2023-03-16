import * as React from 'react';
import { css } from '@patternfly/react-styles';

export interface MenuSearchInputProps extends React.HTMLProps<HTMLElement> {
  /** Items within input */
  children?: React.ReactNode;
  /** @hide Forwarded ref */
  innerRef?: React.Ref<any>;
}

export const MenuSearchInput = React.forwardRef((props: MenuSearchInputProps, ref: React.Ref<HTMLDivElement>) => (
  <div {...props} className={css('pf-c-menu__search-input', props.className)} ref={ref} />
));
MenuSearchInput.displayName = 'MenuSearchInput';
