import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/FormControl/form-control';
import { css } from '@patternfly/react-styles';
import { Omit } from '../../helpers/typeUtils';

export interface FormSelectProps
  extends Omit<React.HTMLProps<HTMLSelectElement>, 'onChange' | 'onBlur' | 'onFocus' | 'disabled'> {
  /** content rendered inside the FormSelect */
  children: React.ReactNode;
  /** additional classes added to the FormSelect control */
  className?: string;
  /** value of selected option */
  value?: any;
  /** Flag indicating selection is valid */
  isValid?: boolean;
  /** Flag indicating the FormSelect is disabled */
  isDisabled?: boolean;
  /** Sets the FormSelectrequired. */
  isRequired?: boolean;
  /** Optional callback for updating when selection loses focus */
  onBlur?: (event: React.FormEvent<HTMLSelectElement>) => void;
  /** Optional callback for updating when selection gets focus */
  onFocus?: (event: React.FormEvent<HTMLSelectElement>) => void;
  /** Optional callback for updating when selection changes */
  onChange?: (value: string, event: React.FormEvent<HTMLSelectElement>) => void;
  /** Custom flag to show that the FormSelect requires an associated id or aria-label. */
  'aria-label'?: string;
}

export class FormSelect extends React.Component<FormSelectProps> {
  constructor(props: FormSelectProps) {
    super(props);
    if (!props.id && !props['aria-label']) {
      // tslint:disable-next-line:no-console
      console.error('FormSelect requires either an id or aria-label to be specified');
    }
  }

  static defaultProps = {
    className: '',
    value: '',
    isValid: true,
    isDisabled: false,
    isRequired: false,
    onBlur: (): any => undefined,
    onFocus: (): any => undefined,
    onChange: (): any => undefined
  };

  handleChange = (event: any) => {
    this.props.onChange(event.currentTarget.value, event);
  };

  render() {
    const { children, className, value, isValid, isDisabled, isRequired, ...props } = this.props;
    return (
      <select
        {...props}
        className={css(styles.formControl, className)}
        aria-invalid={!isValid}
        onChange={this.handleChange}
        disabled={isDisabled}
        required={isRequired}
        value={value}
      >
        {children}
      </select>
    );
  }
}
