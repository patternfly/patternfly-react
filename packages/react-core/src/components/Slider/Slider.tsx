import * as React from 'react';
import { useState } from 'react';
import styles from '@patternfly/react-styles/css/components/Slider/slider';
import { css } from '@patternfly/react-styles';
import { SliderStep } from './SliderStep';

export interface SliderStepObject {
  /** Value of the step. This value is a percentage of the slider where the  tick is drawn. */
  value: number;
  /** The display label for the step value. THis is also used for the aria-valuetext */
  label: string;
  /** Flag to hide the label */
  isLabelHidden?: boolean;
}

export interface SliderProps extends Omit<React.HTMLProps<HTMLDivElement>, 'onChange'> {
  /** Additional classes added to the spinner. */
  className?: string;
  /** Current value  */
  currentValue?: number;
  /** Flag indicating if the slider is is discrete */
  isDiscrete?: boolean;
  /** Array of slider step objects (value and label of each step) for the slider. If this is provided, the numSteps prop will be ignored.*/
  steps?: SliderStepObject[];
  /** Flag to show value input field */
  isInputVisible?: boolean;
  /** Value displayed in the input field */
  inputValue?: number;
  /** Aria label for the input field */
  inputAriaLabel?: string;
  /* Aria label for the thumb */
  thumbAriaLabel?: string;
  /** Label that is place after the input field */
  inputLabel?: string | number;
  /** Position of the input */
  inputPosition?: 'aboveThumb' | 'left';
  /** Flag indicating input is disabled */
  isInputDisabled?: boolean;
  /** Value input callback.  Called when enter is hit while in input filed or focus shifts from input field */
  onChange?: (value: number) => void;
  /** Value change callback. This is called when the slider value changes */
  onValueChange?: (value: number) => void;
  /** Actions placed to the left of the slider */
  leftActions?: React.ReactNode;
  /** Actions placed to the right of the slider */
  rightActions?: React.ReactNode;
}

const getPercentage = (current: number, max: number) => (100 * current) / max;

export const Slider: React.FunctionComponent<SliderProps> = ({
  className,
  currentValue = 0,
  steps,
  isDiscrete = false,
  isInputVisible = false,
  inputValue,
  inputLabel,
  inputAriaLabel = 'Slider value input',
  thumbAriaLabel = 'Value',
  inputPosition = 'left',
  isInputDisabled,
  onChange,
  onValueChange,
  leftActions,
  rightActions,
  ...props
}: SliderProps) => {
  const sliderRailRef = React.useRef<HTMLDivElement>();
  const thumbRef = React.useRef<HTMLDivElement>();

  const [value, setValue] = useState(currentValue);
  const [localInputValue, setLocalInputValue] = useState(inputValue);

  React.useEffect(() => {
    setValue(currentValue);
  }, [currentValue]);

  React.useEffect(() => {
    setLocalInputValue(inputValue);
  }, [inputValue]);

  let diff = 0;
  let snapValue: number;

  const style = { '--pf-c-slider--value': `${value}%` } as React.CSSProperties;

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocalInputValue(Number(event.currentTarget.value));
  };

  const handleKeyPressOnInput = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (onChange) {
        onChange(localInputValue);
      }
    }
  };

  const onInputFocus = (e: any) => {
    e.stopPropagation();
  };

  const onThumbClick = () => {
    thumbRef.current.focus();
  };

  const onBlur = () => {
    if (onChange) {
      onChange(localInputValue);
    }
  };

  const findAriaTextValue = () => {
    if (steps && isDiscrete) {
      const step = steps.find(step => step.value === value);
      if (step) {
        return step.label;
      }
    }
    return undefined;
  };

  const handleMouseup = () => {
    if (snapValue && isDiscrete && steps) {
      thumbRef.current.style.setProperty('--pf-c-slider--value', `${snapValue}%`);
      setValue(snapValue);
      if (onValueChange) {
        onValueChange(snapValue);
      }
    }

    document.removeEventListener('mousemove', callbackMouseMove);
    document.removeEventListener('mouseup', callbackMouseUp);
  };

  const handleMousedown = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    diff = e.clientX - thumbRef.current.getBoundingClientRect().left;

    document.addEventListener('mousemove', callbackMouseMove);
    document.addEventListener('mouseup', callbackMouseUp);
  };

  const onSliderRailClick = (e: any) => {
    handleMousemove(e);
    if (snapValue && isDiscrete && steps) {
      thumbRef.current.style.setProperty('--pf-c-slider--value', `${snapValue}%`);
      setValue(snapValue);
      if (onValueChange) {
        onValueChange(snapValue);
      }
    }
  };

  const handleMousemove = (e: any) => {
    let newPosition = e.clientX - diff - sliderRailRef.current.getBoundingClientRect().left;

    const end = sliderRailRef.current.offsetWidth - thumbRef.current.offsetWidth;

    const start = 0;

    if (newPosition < start) {
      newPosition = 0;
    }

    if (newPosition > end) {
      newPosition = end;
    }

    const newPercentage = getPercentage(newPosition, end);

    thumbRef.current.style.setProperty('--pf-c-slider--value', `${newPercentage}%`);
    setValue(newPercentage);

    /* If discrete, snap to closest step value */
    if (isDiscrete && steps) {
      const stepIndex = steps.findIndex(step => step.value >= newPercentage);
      if (steps[stepIndex].value === newPercentage) {
        snapValue = steps[stepIndex].value;
      } else {
        const midpoint = (steps[stepIndex].value + steps[stepIndex - 1].value) / 2;
        if (midpoint > newPercentage) {
          snapValue = steps[stepIndex - 1].value;
        } else {
          snapValue = steps[stepIndex].value;
        }
      }
    }

    // Call value change callback
    if (onValueChange && !isDiscrete && !steps) {
      onValueChange(newPercentage);
    }
  };

  const callbackMouseMove = React.useCallback(handleMousemove, []);
  const callbackMouseUp = React.useCallback(handleMouseup, []);

  const handleThumbKeys = (e: React.KeyboardEvent) => {
    const key = e.key;
    if (key !== 'ArrowLeft' && key !== 'ArrowRight') {
      return;
    }
    e.preventDefault();
    let newValue;
    if (isDiscrete) {
      const stepIndex = steps.findIndex(step => step.value === value);
      if (key === 'ArrowRight') {
        newValue = steps[stepIndex + 1].value;
      } else if (key === 'ArrowLeft') {
        newValue = steps[stepIndex - 1].value;
      }
    } else {
      if (key === 'ArrowRight') {
        newValue = value + 1;
      } else if (key === 'ArrowLeft') {
        newValue = value - 1;
      }
    }

    if (newValue) {
      thumbRef.current.style.setProperty('--pf-c-slider--value', `${newValue}%`);
      setValue(newValue);
      if (onValueChange) {
        onValueChange(newValue);
      }
    }
  };

  const inputGroup = (
    <div className={css(styles.inputGroup)}>
      <input
        className={css(styles.formControl)}
        disabled={isInputDisabled}
        type="number"
        value={localInputValue}
        aria-label={inputAriaLabel}
        onKeyDown={handleKeyPressOnInput}
        onChange={onChangeHandler}
        onClick={onInputFocus}
        onFocus={onInputFocus}
        onBlur={onBlur}
      />
      {inputLabel && <span className={css(styles.inputGroupText, 'pf-m-plain')}>{inputLabel}</span>}
    </div>
  );

  return (
    <div className={css(styles.slider, className)} style={style} {...props}>
      {leftActions && <div className={css(styles.sliderActions)}>{leftActions}</div>}
      <div className={css(styles.sliderMain)}>
        <div className={css(styles.sliderRail)} ref={sliderRailRef} onClick={onSliderRailClick}>
          <div className={css(styles.sliderRailTrack)} />
        </div>
        {steps && (
          <div className={css(styles.sliderSteps)} aria-hidden="true">
            {steps.map(step => (
              <SliderStep
                key={step.value}
                value={step.value}
                label={step.label}
                isLabelHidden={step.isLabelHidden}
                isActive={step.value <= value}
              />
            ))}
          </div>
        )}
        <div
          className={css(styles.sliderThumb)}
          ref={thumbRef}
          tabIndex={0}
          role="slider"
          aria-valuemin={steps ? steps[0].value : 0}
          aria-valuemax={steps ? steps[steps.length - 1].value : 100}
          aria-valuenow={value}
          aria-valuetext={findAriaTextValue()}
          aria-label={thumbAriaLabel}
          onMouseDown={handleMousedown}
          onKeyDown={handleThumbKeys}
          onClick={onThumbClick}
        />
        {isInputVisible && inputPosition === 'aboveThumb' && (
          <div className={css(styles.sliderValue, styles.modifiers.floating)}>
            <div className={css(styles.inputGroup)}>{inputGroup}</div>
          </div>
        )}
      </div>
      {isInputVisible && inputPosition === 'left' && <div className={css(styles.sliderValue)}>{inputGroup}</div>}
      {rightActions && <div className={css(styles.sliderActions)}>{rightActions}</div>}
    </div>
  );
};
Slider.displayName = 'Slider';
