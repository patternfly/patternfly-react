import { HTMLProps, ReactNode, FunctionComponent } from 'react';
import styles from '@patternfly/react-styles/css/components/Select/select';
import { css } from '@patternfly/react-styles';

import { SelectConsumer, SelectVariant } from './selectConstants';

export interface SelectGroupProps extends HTMLProps<HTMLDivElement> {
  /** Checkboxes within group. Must be ReactElement<SelectOptionProps>[] */
  children?: ReactNode;
  /** Additional classes added to the CheckboxSelectGroup control */
  className?: string;
  /** Group label */
  label?: string;
  /** ID for title label */
  titleId?: string;
}

export const SelectGroup: FunctionComponent<SelectGroupProps> = ({
  children = [],
  className = '',
  label = '',
  titleId = '',
  ...props
}: SelectGroupProps) => (
  <SelectConsumer>
    {({ variant }) => (
      <div {...props} className={css(styles.selectMenuGroup, className)}>
        <div className={css(styles.selectMenuGroupTitle)} id={titleId} aria-hidden>
          {label}
        </div>
        {variant === SelectVariant.checkbox ? children : <ul role="listbox">{children}</ul>}
      </div>
    )}
  </SelectConsumer>
);
SelectGroup.displayName = 'SelectGroup';
