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
  onMinus?: (name: string, event: React.MouseEvent) => void;
  /** Callback for the text input changing */
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
  /** Callback for the plus button */
  onPlus?: (name: string, event: React.MouseEvent) => void;
  /** Adds the given touchspin unit to the touchspin */
  unit?: React.ReactNode;
  /** Position of the touchspin unit in relation to the touchspin */
  unitPosition?: 'before' | 'after';
  /** Additional properties added to the touchspin text input */
  inputProps?: any;
  /** Additional properties added to the minus button */
  minusButtonProps?: ButtonProps;
  /** Additional properties added to the plus button */
  plusButtonProps?: ButtonProps;
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
  inputProps,
  minusButtonProps,
  plusButtonProps,
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
          {...minusButtonProps}
          {...(onMinus && { onClick: evt => onMinus(inputProps.name, evt) })}
          {...(isDisabled && { isDisabled })}
          {...(!(minusButtonProps && minusButtonProps['aria-label']) && { 'aria-label': 'Minus' })}
        >
          <span className={css(styles.touchspinIcon)}>
            <MinusIcon aria-hidden="true" />
          </span>
        </Button>
        <input
          className={css(styles.formControl)}
          type="text"
          value={value}
          {...inputProps}
          {...(isDisabled && { disabled: isDisabled })}
          {...(onChange && { onChange })}
          {...(!onChange && !(inputProps && inputProps.onChange) && { readOnly: true })}
        />
        <Button
          variant="control"
          {...plusButtonProps}
          {...(onPlus && { onClick: evt => onPlus(inputProps.name, evt) })}
          {...(isDisabled && { isDisabled })}
          {...(!(plusButtonProps && plusButtonProps['aria-label']) && { 'aria-label': 'Plus' })}
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
