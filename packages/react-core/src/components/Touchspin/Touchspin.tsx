import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Touchspin/touchspin';
import { css } from '@patternfly/react-styles';
import MinusIcon from '@patternfly/react-icons/dist/js/icons/minus-icon';
import PlusIcon from '@patternfly/react-icons/dist/js/icons/plus-icon';
import { Button, ButtonProps } from '../Button';

export interface TouchspinProps extends React.HTMLProps<HTMLDivElement> {
  /** Value of the touchspin */
  value?: number;
  /** Additional classes added to the touchspin */
  className?: string;
  /** Sets the width of the touchspin to a number of characters */
  widthChars?: number;
  /** Indicates the whole touchspin should be disabled */
  isDisabled?: boolean;
  /** Callback for the minus button */
  onMinus?: (event: React.MouseEvent, name?: string) => void;
  /** Callback for the text input changing */
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
  /** Callback for the plus button */
  onPlus?: (event: React.MouseEvent, name?: string) => void;
  /** Adds the given touchspin unit to the touchspin */
  unit?: React.ReactNode;
  /** Position of the touchspin unit in relation to the touchspin */
  unitPosition?: 'before' | 'after';
  /** Minimum value of the touchspin, disabling the minus button when reached */
  min?: number;
  /** Maximum value of the touchspin, disabling the plus button when reached */
  max?: number;
  /** Name of the input */
  inputName?: string;
  /** Aria label of the input */
  inputAriaLabel?: string;
  /** Aria label of the minus button */
  minusBtnAriaLabel?: string;
  /** Aria label of the plus button */
  plusBtnAriaLabel?: string;
  /** Additional properties added to the touchspin text input */
  inputProps?: any;
  /** Additional properties added to the minus button */
  minusBtnProps?: ButtonProps;
  /** Additional properties added to the plus button */
  plusBtnProps?: ButtonProps;
}

export const Touchspin: React.FunctionComponent<TouchspinProps> = ({
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
}: TouchspinProps) => {
  const touchspinUnit = <div className={css(styles.touchspinUnit)}>{unit}</div>;
  return (
    <div
      className={css(styles.touchspin, className)}
      {...(widthChars && {
        style: {
          '--pf-c-touchspin--c-form-control--width-chars': widthChars,
          ...props.style
        } as React.CSSProperties
      })}
      {...props}
    >
      {unit && unitPosition === 'before' && touchspinUnit}
      <div className={css(styles.inputGroup)}>
        <Button
          variant="control"
          aria-label={minusBtnAriaLabel}
          isDisabled={isDisabled || value === min}
          onClick={evt => onMinus(evt, inputName)}
          {...minusBtnProps}
        >
          <span className={css(styles.touchspinIcon)}>
            <MinusIcon aria-hidden="true" />
          </span>
        </Button>
        <input
          className={css(styles.formControl)}
          type="text"
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
          <span className={css(styles.touchspinIcon)}>
            <PlusIcon aria-hidden="true" />
          </span>
        </Button>
      </div>
      {unit && unitPosition === 'after' && touchspinUnit}
    </div>
  );
};
Touchspin.displayName = 'Touchspin';
