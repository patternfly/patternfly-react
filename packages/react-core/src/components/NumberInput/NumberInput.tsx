import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/NumberInput/number-input';
import { css } from '@patternfly/react-styles';
import MinusIcon from '@patternfly/react-icons/dist/esm/icons/minus-icon';
import PlusIcon from '@patternfly/react-icons/dist/esm/icons/plus-icon';
import { InputGroup } from '../InputGroup';
import { Button, ButtonProps } from '../Button';
import { KeyTypes, ValidatedOptions } from '../../helpers';
import { TextInput } from '../TextInput';

export interface NumberInputProps extends React.HTMLProps<HTMLDivElement> {
  /** Value of the number input */
  value?: number | '';
  /** Additional classes added to the number input */
  className?: string;
  /** Sets the width of the number input to a number of characters */
  widthChars?: number;
  /** Indicates the whole number input should be disabled */
  isDisabled?: boolean;
  /** Value to indicate if the input is modified to show that validation state
   * @beta
   */
  validated?: 'default' | 'error' | 'warning' | 'success' | ValidatedOptions;
  /** Callback for the minus button */
  onMinus?: (event: React.MouseEvent, name?: string) => void;
  /** Callback for the text input changing */
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
  /** Callback function when text input is blurred (focus leaves) */
  onBlur?: (event?: any) => void;
  /** Callback for the plus button */
  onPlus?: (event: React.MouseEvent, name?: string) => void;
  /** Adds the given unit to the number input */
  unit?: React.ReactNode;
  /** Position of the number input unit in relation to the number input */
  unitPosition?: 'before' | 'after';
  /** Minimum value of the number input, disabling the minus button when reached */
  min?: number;
  /** Maximum value of the number input, disabling the plus button when reached */
  max?: number;
  /** Name of the input */
  inputName?: string;
  /** Aria label of the input */
  inputAriaLabel?: string;
  /** Aria label of the minus button */
  minusBtnAriaLabel?: string;
  /** Aria label of the plus button */
  plusBtnAriaLabel?: string;
  /** Additional properties added to the text input */
  inputProps?: any;
  /** Additional properties added to the minus button */
  minusBtnProps?: ButtonProps;
  /** Additional properties added to the plus button */
  plusBtnProps?: ButtonProps;
  /** Allow the user to clear out the input to an empty string (recommended) */
  allowEmptyInput?: boolean;
}

type DefaultKeyDownHandlerArgs = Pick<NumberInputProps, 'inputName' | 'onMinus' | 'onPlus'>;

const defaultKeyDownHandler = (args: DefaultKeyDownHandlerArgs) => (event: React.KeyboardEvent<HTMLInputElement>) => {
  if (KeyTypes.ArrowUp === event.key && args.onPlus) {
    event.preventDefault();
    args.onPlus(null, args.inputName);
  }
  if (KeyTypes.ArrowDown === event.key && args.onMinus) {
    event.preventDefault();
    args.onMinus(null, args.inputName);
  }
};

export const NumberInput: React.FunctionComponent<NumberInputProps> = ({
  value = 0,
  className,
  widthChars,
  isDisabled = false,
  validated = ValidatedOptions.default,
  onMinus = () => {},
  onChange,
  onBlur,
  onPlus = () => {},
  unit,
  unitPosition = 'after',
  min,
  max,
  inputName,
  inputAriaLabel = 'Input',
  minusBtnAriaLabel = 'Minus',
  plusBtnAriaLabel = 'Plus',
  inputProps,
  minusBtnProps,
  plusBtnProps,
  allowEmptyInput = false,
  ...props
}: NumberInputProps) => {
  if (!allowEmptyInput) {
    value = value || 0;
  }
  const numberInputUnit = <div className={css(styles.numberInputUnit)}>{unit}</div>;
  const keyDownHandler =
    inputProps && inputProps.onKeyDown ? inputProps.onKeyDown : defaultKeyDownHandler({ inputName, onMinus, onPlus });

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    event.target.value = Number(event.target.value).toString();
    if (onChange) {
      onChange(event);
    }
    if (onBlur) {
      onBlur(event);
    }
  };

  return (
    <div
      className={css(styles.numberInput, validated !== 'default' && styles.modifiers.status, className)}
      {...(widthChars && {
        style: {
          '--pf-c-number-input--c-form-control--width-chars': widthChars,
          ...props.style
        } as React.CSSProperties
      })}
      {...props}
    >
      {unit && unitPosition === 'before' && numberInputUnit}
      <InputGroup>
        <Button
          variant="control"
          aria-label={minusBtnAriaLabel}
          isDisabled={isDisabled || value <= min}
          onClick={evt => onMinus(evt, inputName)}
          {...minusBtnProps}
        >
          <span className={css(styles.numberInputIcon)}>
            <MinusIcon aria-hidden="true" />
          </span>
        </Button>
        <TextInput
          {...inputProps}
          type="number"
          value={value}
          name={inputName}
          aria-label={inputAriaLabel}
          {...(isDisabled && { isDisabled })}
          {...(onChange && { onChange: (value, event) => onChange(event) })}
          onBlur={handleBlur}
          {...(!onChange && { isReadOnly: true })}
          onKeyDown={keyDownHandler}
          validated={validated}
        />
        <Button
          variant="control"
          aria-label={plusBtnAriaLabel}
          isDisabled={isDisabled || value >= max}
          onClick={evt => onPlus(evt, inputName)}
          {...plusBtnProps}
        >
          <span className={css(styles.numberInputIcon)}>
            <PlusIcon aria-hidden="true" />
          </span>
        </Button>
      </InputGroup>
      {unit && unitPosition === 'after' && numberInputUnit}
    </div>
  );
};
NumberInput.displayName = 'NumberInput';
