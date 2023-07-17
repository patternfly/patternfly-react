import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/FormControl/form-control';
import { css } from '@patternfly/react-styles';
import { PickOptional } from '../../helpers/typeUtils';
import { ValidatedOptions } from '../../helpers/constants';
import { FormControlIcon } from '../FormControl/FormControlIcon';
import { getOUIAProps, OUIAProps, getDefaultOUIAId } from '../../helpers';
import CaretDownIcon from '@patternfly/react-icons/dist/esm/icons/caret-down-icon';

export interface FormSelectProps
  extends Omit<React.HTMLProps<HTMLSelectElement>, 'onChange' | 'onBlur' | 'onFocus' | 'disabled'>,
    OUIAProps {
  /** content rendered inside the FormSelect */
  children: React.ReactNode;
  /** additional classes added to the FormSelect control */
  className?: string;
  /** value of selected option */
  value?: any;
  /** Value to indicate if the select is modified to show that validation state.
   * If set to success, select will be modified to indicate valid state.
   * If set to error, select will be modified to indicate error state.
   */
  validated?: 'success' | 'warning' | 'error' | 'default';
  /** Flag indicating the FormSelect is disabled */
  isDisabled?: boolean;
  /** Sets the FormSelect required. */
  isRequired?: boolean;
  /** Optional callback for updating when selection loses focus */
  onBlur?: (event: React.FormEvent<HTMLSelectElement>) => void;
  /** Optional callback for updating when selection gets focus */
  onFocus?: (event: React.FormEvent<HTMLSelectElement>) => void;
  /** Optional callback for updating when selection changes */
  onChange?: (event: React.FormEvent<HTMLSelectElement>, value: string) => void;
  /** Custom flag to show that the FormSelect requires an associated id or aria-label. */
  'aria-label'?: string;
  /** Value to overwrite the randomly generated data-ouia-component-id.*/
  ouiaId?: number | string;
  /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
  ouiaSafe?: boolean;
}

class FormSelect extends React.Component<FormSelectProps, { ouiaStateId: string }> {
  static displayName = 'FormSelect';
  constructor(props: FormSelectProps) {
    super(props);
    if (!props.id && !props['aria-label']) {
      // eslint-disable-next-line no-console
      console.error('FormSelect requires either an id or aria-label to be specified');
    }
    this.state = {
      ouiaStateId: getDefaultOUIAId(FormSelect.displayName, props.validated)
    };
  }

  static defaultProps: PickOptional<FormSelectProps> = {
    className: '',
    value: '',
    validated: 'default',
    isDisabled: false,
    isRequired: false,
    onBlur: (): any => undefined,
    onFocus: (): any => undefined,
    onChange: (): any => undefined,
    ouiaSafe: true
  };

  handleChange = (event: any) => {
    this.props.onChange(event, event.currentTarget.value);
  };

  render() {
    const { children, className, value, validated, isDisabled, isRequired, ouiaId, ouiaSafe, ...props } = this.props;
    /* find selected option and get placeholder flag */
    const selectedOption = React.Children.toArray(children).find((option: any) => option.props.value === value) as any;
    const isSelectedPlaceholder = selectedOption && selectedOption.props.isPlaceholder;
    const hasStatusIcon = ['success', 'error', 'warning'].includes(validated);

    return (
      <span
        className={css(
          styles.formControl,
          isDisabled && styles.modifiers.disabled,
          isSelectedPlaceholder && styles.modifiers.placeholder,
          hasStatusIcon && styles.modifiers[validated as 'success' | 'warning' | 'error'],
          className
        )}
      >
        <select
          {...props}
          aria-invalid={validated === ValidatedOptions.error}
          {...getOUIAProps(FormSelect.displayName, ouiaId !== undefined ? ouiaId : this.state.ouiaStateId, ouiaSafe)}
          onChange={this.handleChange}
          disabled={isDisabled}
          required={isRequired}
          value={value}
        >
          {children}
        </select>
        <span className={css(styles.formControlUtilities)}>
          {hasStatusIcon && <FormControlIcon status={validated as 'success' | 'error' | 'warning'} />}
          <span className={css(styles.formControlToggleIcon)}>
            <CaretDownIcon />
          </span>
        </span>
      </span>
    );
  }
}

export { FormSelect };
