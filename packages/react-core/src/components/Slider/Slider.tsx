import * as React from 'react';
import { useState } from 'react';
import styles from '@patternfly/react-styles/css/components/Slider/slider';
import { css } from '@patternfly/react-styles';
import { SliderStep } from './SliderStep';
import { InputGroup, InputGroupText } from '../InputGroup';
import { TextInput } from '../TextInput';

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
  /** Array of slider step objects (value and label of each step) for the slider. */
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
  inputPosition?: 'aboveThumb' | 'right';
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
  inputValue = 0,
  inputLabel,
  inputAriaLabel = 'Slider value input',
  thumbAriaLabel = 'Value',
  inputPosition = 'right',
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

  const onChangeHandler = (value: string) => {
    setLocalInputValue(Number(value));
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

  const handleThumbDragEnd = () => {
    if (snapValue && isDiscrete && steps) {
      thumbRef.current.style.setProperty('--pf-c-slider--value', `${snapValue}%`);
      setValue(snapValue);
      if (onValueChange) {
        onValueChange(snapValue);
      }
    }

    document.removeEventListener('mousemove', callbackThumbMove);
    document.removeEventListener('mouseup', callbackThumbUp);
    document.removeEventListener('touchmove', callbackThumbMove);
    document.removeEventListener('touchend', callbackThumbUp);
    document.removeEventListener('touchcancel', callbackThumbUp);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();

    diff = e.clientX - thumbRef.current.getBoundingClientRect().left;

    document.addEventListener('mousemove', callbackThumbMove);
    document.addEventListener('mouseup', callbackThumbUp);
  };

  const handleToucheStart = (e: React.TouchEvent) => {
    e.stopPropagation();

    diff = e.touches[0].clientX - thumbRef.current.getBoundingClientRect().left;

    document.addEventListener('touchmove', callbackThumbMove, { passive: false });
    document.addEventListener('touchend', callbackThumbUp);
    document.addEventListener('touchcancel', callbackThumbUp);
  };

  const onSliderRailClick = (e: any) => {
    handleThumbMove(e);
    if (snapValue && isDiscrete && steps) {
      thumbRef.current.style.setProperty('--pf-c-slider--value', `${snapValue}%`);
      setValue(snapValue);
      if (onValueChange) {
        onValueChange(snapValue);
      }
    }
  };

  const handleThumbMove = (e: any) => {
    if (e.type === 'touchmove') {
      e.preventDefault();
      e.stopImmediatePropagation();
    }

    const clientPosition = e.touches && e.touches.length ? e.touches[0].clientX : e.clientX;

    let newPosition = clientPosition - diff - sliderRailRef.current.getBoundingClientRect().left;

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

  const callbackThumbMove = React.useCallback(handleThumbMove, []);
  const callbackThumbUp = React.useCallback(handleThumbDragEnd, []);

  const handleThumbKeys = (e: React.KeyboardEvent) => {
    const key = e.key;
    if (key !== 'ArrowLeft' && key !== 'ArrowRight') {
      return;
    }
    e.preventDefault();
    let newValue: number = value;
    if (isDiscrete) {
      const stepIndex = steps.findIndex(step => step.value === value);
      if (key === 'ArrowRight') {
        if (stepIndex + 1 < steps.length) {
          {
            newValue = steps[stepIndex + 1].value;
          }
        }
      } else if (key === 'ArrowLeft') {
        if (stepIndex - 1 >= 0) {
          newValue = steps[stepIndex - 1].value;
        }
      }
    } else {
      if (key === 'ArrowRight') {
        newValue = value + 1 <= 100 ? value + 1 : 100;
      } else if (key === 'ArrowLeft') {
        newValue = value - 1 >= 0 ? value - 1 : 0;
      }
    }

    if (newValue !== value) {
      thumbRef.current.style.setProperty('--pf-c-slider--value', `${newValue}%`);
      setValue(newValue);
      if (onValueChange) {
        onValueChange(newValue);
      }
    }
  };

  const displayInput = () => {
    const textInput = (
      <TextInput
        className={css(styles.formControl)}
        isDisabled={isInputDisabled}
        type="number"
        value={localInputValue}
        aria-label={inputAriaLabel}
        onKeyDown={handleKeyPressOnInput}
        onChange={onChangeHandler}
        onClick={onInputFocus}
        onFocus={onInputFocus}
        onBlur={onBlur}
      />
    );
    if (inputLabel) {
      return (
        <InputGroup>
          {textInput}
          <InputGroupText className={css('pf-m-plain')}>{inputLabel}</InputGroupText>
        </InputGroup>
      );
    } else {
      return textInput;
    }
  };

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
          onMouseDown={handleMouseDown}
          onTouchStart={handleToucheStart}
          onKeyDown={handleThumbKeys}
          onClick={onThumbClick}
        />
        {isInputVisible && inputPosition === 'aboveThumb' && (
          <div className={css(styles.sliderValue, styles.modifiers.floating)}>{displayInput()}</div>
        )}
      </div>
      {isInputVisible && inputPosition === 'right' && <div className={css(styles.sliderValue)}>{displayInput()}</div>}
      {rightActions && <div className={css(styles.sliderActions)}>{rightActions}</div>}
    </div>
  );
};
Slider.displayName = 'Slider';
