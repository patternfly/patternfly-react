import { Fragment } from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/DataList/data-list';
import { Checkbox, CheckboxProps } from '../Checkbox';
import { GenerateId } from '../../helpers/GenerateId/GenerateId';

export interface DataListCheckProps extends Omit<CheckboxProps, 'ref' | 'id'> {
  /** Id of the DataList checkbox. */
  id?: string;
  /** Additional classes added to the DataList item checkbox */
  className?: string;
  /** Flag to show if the DataList checkbox selection is valid or invalid */
  isValid?: boolean;
  /** Flag to show if the DataList checkbox is disabled */
  isDisabled?: boolean;
  /** Flag to show if the DataList checkbox is checked when it is controlled by React state. Both isChecked and checked are valid,
   * but only use one.
   * To make the DataList checkbox uncontrolled, instead use the defaultChecked prop, but do not use both.
   */
  isChecked?: boolean;
  /** Flag to show if the DataList checkbox is checked when it is controlled by React state. Both isChecked and checked are valid,
   * but only use one.
   * To make the DataList checkbox uncontrolled, instead use the defaultChecked prop, but do not use both.
   */
  checked?: boolean;
  /** Flag to set default value of DataList checkbox when it is uncontrolled by React state.
   * To make the DataList checkbox controlled, instead use the isChecked prop, but do not use both.
   */
  defaultChecked?: boolean;
  /** A callback for when the DataList checkbox selection changes */
  onChange?: (event: React.FormEvent<HTMLInputElement>, checked: boolean) => void;
  /** Aria-labelledby of the DataList checkbox */
  'aria-labelledby': string;
  /** Flag to indicate if other controls are used in the DataListItem */
  otherControls?: boolean;
}

export const DataListCheck: React.FunctionComponent<DataListCheckProps> = ({
  id,
  className,
  onChange,
  isValid = true,
  isDisabled = false,
  isChecked,
  checked,
  defaultChecked,
  otherControls = false,
  ...props
}: DataListCheckProps) => {
  const check = (
    <div className={css(styles.dataListCheck)}>
      <GenerateId>
        {(randomId) => (
          <Checkbox
            id={id ?? `datalist-check-${randomId}`}
            isChecked={isChecked}
            checked={checked}
            defaultChecked={defaultChecked}
            onChange={onChange}
            aria-invalid={!isValid}
            isDisabled={isDisabled}
            isLabelWrapped
            {...props}
          />
        )}
      </GenerateId>
    </div>
  );
  return (
    <Fragment>
      {!otherControls && <div className={css(styles.dataListItemControl, className)}>{check}</div>}
      {otherControls && check}
    </Fragment>
  );
};
DataListCheck.displayName = 'DataListCheck';
