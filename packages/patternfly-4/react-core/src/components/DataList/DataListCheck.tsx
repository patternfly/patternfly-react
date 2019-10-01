import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/DataList/data-list';
import { Omit } from '../../helpers/typeUtils';

export interface DataListCheckProps extends Omit<React.HTMLProps<HTMLInputElement>, 'onChange'> {
  /** Additional classes added to the DataList item checkbox */
  className?: string;
  /** Flag to show if the DataList checkbox selection is valid or invalid */
  isValid?: boolean;
  /** Flag to show if the DataList checkbox is disabled */
  isDisabled?: boolean;
  /** Flag to show if the DataList checkbox is checked */
  isChecked?: boolean;
  /** Alternate Flag to show if the DataList checkbox is checked */
  checked: boolean;
  /** A callback for when the DataList checkbox selection changes */
  onChange?: (checked: boolean, event: React.FormEvent<HTMLInputElement>) => void;
  /** Aria-labelledby of the DataList checkbox */
  'aria-labelledby': string;
}

export const DataListCheck: React.FunctionComponent<DataListCheckProps> = ({
  className = '',
  onChange,
  isValid = true,
  isDisabled = false,
  isChecked = null,
  checked = null,
  ...props
}: DataListCheckProps) => (
  <div className={css(styles.dataListItemControl, className)}>
    <div className={css('pf-c-data-list__check')}>
      <input
        {...props}
        type="checkbox"
        onChange={event => onChange(event.currentTarget.checked, event)}
        aria-invalid={!isValid}
        disabled={isDisabled}
        defaultChecked={isChecked || checked}
      />
    </div>
  </div>
);
