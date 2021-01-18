import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/NumberInput/number-input';
import { css } from '@patternfly/react-styles';
import MinusIcon from '@patternfly/react-icons/dist/js/icons/minus-icon';
import PlusIcon from '@patternfly/react-icons/dist/js/icons/plus-icon';
import { Button, ButtonProps } from '../Button';

export interface NumberInputProps extends React.HTMLProps<HTMLDivElement> {
  /** Value of the number input */
  value?: number;
  /** Additional classes added to the number input */
  className?: string;
  /** Sets the width of the number input to a number of characters */
  widthChars?: number;
  /** Indicates the whole number input should be disabled */
  isDisabled?: boolean;
  /** Callback for the minus button */
  onMinus?: (event: React.MouseEvent, name?: string) => void;
  /** Callback for the text input changing */
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
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
}

export const NumberInput: React.FunctionComponent<NumberInputProps> = ({
  value = 0,
  className,
  widthChars,
  isDisabled = false,
  onMinus,
  onChange,
  onPlus,
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
  ...props
}: NumberInputProps) => {
  const numberInputUnit = <div className={css(styles.numberInputUnit)}>{unit}</div>;
  return (
    <div
      className={css(styles.numberInput, className)}
      {...(widthChars && {
        style: {
          '--pf-c-number-input--c-form-control--width-chars': widthChars,
          ...props.style
        } as React.CSSProperties
      })}
      {...props}
    >
      {unit && unitPosition === 'before' && numberInputUnit}
      <div className={css(styles.inputGroup)}>
        <Button
          variant="control"
          aria-label={minusBtnAriaLabel}
          isDisabled={isDisabled || value === min}
          onClick={evt => onMinus(evt, inputName)}
          {...minusBtnProps}
        >
          <span className={css(styles.numberInputIcon)}>
            <MinusIcon aria-hidden="true" />
          </span>
        </Button>
        <input
          className={css(styles.formControl)}
          type="number"
          value={value}
          name={inputName}
          aria-label={inputAriaLabel}
          {...(isDisabled && { disabled: isDisabled })}
          {...(onChange && { onChange })}
          {...(!onChange && { readOnly: true })}
          {...inputProps}
        />
        <Button
          variant="control"
          aria-label={plusBtnAriaLabel}
          isDisabled={isDisabled || value === max}
          onClick={evt => onPlus(evt, inputName)}
          {...plusBtnProps}
        >
          <span className={css(styles.numberInputIcon)}>
            <PlusIcon aria-hidden="true" />
          </span>
        </Button>
      </div>
      {unit && unitPosition === 'after' && numberInputUnit}
    </div>
  );
};
NumberInput.displayName = 'NumberInput';
