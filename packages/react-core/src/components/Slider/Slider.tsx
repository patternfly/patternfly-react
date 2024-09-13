import * as React from 'react';
import { useState } from 'react';
import styles from '@patternfly/react-styles/css/components/Slider/slider';
import { css } from '@patternfly/react-styles';
import { SliderStep } from './SliderStep';
import { InputGroup, InputGroupText, InputGroupItem } from '../InputGroup';
import { TextInput } from '../TextInput';
import { Tooltip } from '../Tooltip';
import cssSliderValue from '@patternfly/react-tokens/dist/esm/c_slider_value';
import cssFormControlWidthChars from '@patternfly/react-tokens/dist/esm/c_slider__value_c_form_control_width_chars';
import { getLanguageDirection } from '../../helpers/util';

/** Properties for creating custom steps in a slider. These properties should be passed in as
 * an object within an array to the slider component's customSteps property.
 */
export interface SliderStepObject {
  /** Flag to hide the label. */
  isLabelHidden?: boolean;
  /** The display label for the step value. This is also used for the aria-valuetext attribute. */
  label: string;
  /** Value of the step. This value is a percentage of the slider where the tick is drawn. */
  value: number;
}

export type SliderOnChangeEvent =
  | React.MouseEvent
  | React.KeyboardEvent
  | React.FormEvent<HTMLInputElement>
  | React.TouchEvent
  | React.FocusEvent<HTMLInputElement>;

/** The main slider component. */
export interface SliderProps extends Omit<React.HTMLProps<HTMLDivElement>, 'onChange'> {
  /** Flag indicating if the slider is discrete for custom steps. This will cause the slider
   * to snap to the closest value.
   */
  areCustomStepsContinuous?: boolean;
  /** One or more id's to use for the slider thumb's accessible description. */
  'aria-describedby'?: string;
  /** One or more id's to use for the slider thumb's accessible label. */
  'aria-labelledby'?: string;
  /** Additional classes added to the slider. */
  className?: string;
  /** Array of custom slider step objects (value and label of each step) for the slider. */
  customSteps?: SliderStepObject[];
  /* Adds a tooltip over the slider thumb containing the current value. */
  hasTooltipOverThumb?: boolean;
  /** Accessible label for the input field. */
  inputAriaLabel?: string;
  /** Text label that is place after the input field. */
  inputLabel?: string | number;
  /** Position of the input. Note "right" is deprecated. Use "end" instead*/
  inputPosition?: 'aboveThumb' | 'right' | 'end';
  /** Value displayed in the input field. */
  inputValue?: number;
  /** Adds disabled styling, and disables the slider and the input component if present. */
  isDisabled?: boolean;
  /** Flag to show value input field. */
  isInputVisible?: boolean;
  /** @deprecated Use startActions instead. Actions placed at the start of the slider. */
  leftActions?: React.ReactNode;
  /** Actions placed at the start of the slider. */
  startActions?: React.ReactNode;
  /** The maximum permitted value. */
  max?: number;
  /** The minimum permitted value. */
  min?: number;
  /** Value change callback. This is called when the slider value changes. */
  onChange?: (
    event: SliderOnChangeEvent,
    value: number,
    inputValue?: number,
    setLocalInputValue?: React.Dispatch<React.SetStateAction<number>>
  ) => void;
  /** @deprecated Use endActions instead. Actions placed to the right of the slider. */
  rightActions?: React.ReactNode;
  /** Actions placed at the end of the slider. */
  endActions?: React.ReactNode;
  /** Flag to indicate if boundaries should be shown for slider that does not have custom steps. */
  showBoundaries?: boolean;
  /** Flag to indicate if ticks should be shown for slider that does not have custom steps. */
  showTicks?: boolean;
  /** The step interval. */
  step?: number;
  /* Accessible label for the slider thumb. */
  thumbAriaLabel?: string;
  /** Current value of the slider.  */
  value?: number;
}

const getPercentage = (current: number, max: number) => (100 * current) / max;

export const Slider: React.FunctionComponent<SliderProps> = ({
  className,
  value = 0,
  customSteps,
  areCustomStepsContinuous = false,
  isDisabled = false,
  isInputVisible = false,
  inputValue = 0,
  inputLabel,
  inputAriaLabel = 'Slider value input',
  thumbAriaLabel = 'Value',
  hasTooltipOverThumb = false,
  inputPosition = 'end',
  onChange,
  leftActions,
  startActions,
  rightActions,
  endActions,
  step = 1,
  min = 0,
  max = 100,
  showTicks = false,
  showBoundaries = true,
  'aria-describedby': ariaDescribedby,
  'aria-labelledby': ariaLabelledby,
  ...props
}: SliderProps) => {
  const sliderRailRef = React.useRef<HTMLDivElement>();
  const thumbRef = React.useRef<HTMLDivElement>();

  const [localValue, setValue] = useState(value);
  const [localInputValue, setLocalInputValue] = useState(inputValue);

  let isRTL: boolean;

  React.useEffect(() => {
    isRTL = getLanguageDirection(sliderRailRef.current) === 'rtl';
  });

  React.useEffect(() => {
    setValue(value);
  }, [value]);

  React.useEffect(() => {
    setLocalInputValue(inputValue);
  }, [inputValue]);

  let diff = 0;
  let snapValue: number;

  // calculate style value percentage
  const stylePercent = ((localValue - min) * 100) / (max - min);
  const style = { [cssSliderValue.name]: `${stylePercent}%` } as React.CSSProperties;
  const widthChars = React.useMemo(() => localInputValue.toString().length, [localInputValue]);
  const inputStyle = { [cssFormControlWidthChars.name]: widthChars } as React.CSSProperties;

  const onChangeHandler = (_event: React.FormEvent<HTMLInputElement>, value: string) => {
    setLocalInputValue(Number(value));
  };

  const handleKeyPressOnInput = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (onChange) {
        onChange(event, localValue, localInputValue, setLocalInputValue);
      }
    }
  };

  const onInputFocus = (e: any) => {
    e.stopPropagation();
  };

  const onThumbClick = () => {
    thumbRef.current.focus();
  };

  const onBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event, localValue, localInputValue, setLocalInputValue);
    }
  };

  const findAriaTextValue = () => {
    if (!areCustomStepsContinuous && customSteps) {
      const matchingStep = customSteps.find((stepObj) => stepObj.value === localValue);
      if (matchingStep) {
        return matchingStep.label;
      }
    }
    // For continuous steps default to showing 2 decimals in tooltip
    // Consider making it configurable via a property
    return Number(Number(localValue).toFixed(2)).toString();
  };

  const handleThumbDragEnd = () => {
    document.removeEventListener('mousemove', callbackThumbMove);
    document.removeEventListener('mouseup', callbackThumbUp);
    document.removeEventListener('touchmove', callbackThumbMove);
    document.removeEventListener('touchend', callbackThumbUp);
    document.removeEventListener('touchcancel', callbackThumbUp);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();

    if (isRTL) {
      diff = thumbRef.current.getBoundingClientRect().right - e.clientX;
    } else {
      diff = e.clientX - thumbRef.current.getBoundingClientRect().left;
    }

    document.addEventListener('mousemove', callbackThumbMove);
    document.addEventListener('mouseup', callbackThumbUp);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    e.stopPropagation();

    if (isRTL) {
      diff = thumbRef.current.getBoundingClientRect().right - e.touches[0].clientX;
    } else {
      diff = e.touches[0].clientX - thumbRef.current.getBoundingClientRect().left;
    }

    document.addEventListener('touchmove', callbackThumbMove, { passive: false });
    document.addEventListener('touchend', callbackThumbUp);
    document.addEventListener('touchcancel', callbackThumbUp);
  };

  const onSliderRailClick = (e: any) => {
    handleThumbMove(e);
    if (snapValue && !areCustomStepsContinuous) {
      thumbRef.current.style.setProperty(cssSliderValue.name, `${snapValue}%`);
      setValue(snapValue);
      if (onChange) {
        onChange(e, snapValue);
      }
    }
  };

  const handleThumbMove = (e: any) => {
    if (e.type === 'touchmove') {
      e.preventDefault();
      e.stopImmediatePropagation();
    }

    const clientPosition = e.touches && e.touches.length ? e.touches[0].clientX : e.clientX;
    let newPosition;

    if (isRTL) {
      newPosition = sliderRailRef.current.getBoundingClientRect().right - clientPosition - diff;
    } else {
      newPosition = clientPosition - diff - sliderRailRef.current.getBoundingClientRect().left;
    }

    const end = sliderRailRef.current.offsetWidth - thumbRef.current.offsetWidth;

    const start = 0;

    if (newPosition < start) {
      newPosition = 0;
    }

    if (newPosition > end) {
      newPosition = end;
    }

    const newPercentage = getPercentage(newPosition, end);

    thumbRef.current.style.setProperty(cssSliderValue.name, `${newPercentage}%`);
    // convert percentage to value
    const newValue = Math.round(((newPercentage * (max - min)) / 100 + min) * 100) / 100;
    setValue(newValue);

    if (!customSteps) {
      // snap to new value if not custom steps
      snapValue = Math.round((Math.round((newValue - min) / step) * step + min) * 100) / 100;
      thumbRef.current.style.setProperty(cssSliderValue.name, `${snapValue}%`);
      setValue(snapValue);
    }

    /* If custom steps are discrete, snap to closest step value */
    if (!areCustomStepsContinuous && customSteps) {
      let percentage = newPercentage;
      if (customSteps[customSteps.length - 1].value !== 100) {
        percentage = (newPercentage * (max - min)) / 100 + min;
      }
      const stepIndex = customSteps.findIndex((stepObj) => stepObj.value >= percentage);
      if (customSteps[stepIndex].value === percentage) {
        snapValue = customSteps[stepIndex].value;
      } else {
        const midpoint = (customSteps[stepIndex].value + customSteps[stepIndex - 1].value) / 2;
        if (midpoint > percentage) {
          snapValue = customSteps[stepIndex - 1].value;
        } else {
          snapValue = customSteps[stepIndex].value;
        }
      }
      setValue(snapValue);
    }

    // Call onchange callback
    if (onChange) {
      if (snapValue !== undefined) {
        onChange(e, snapValue);
      } else {
        onChange(e, newValue);
      }
    }
  };

  const callbackThumbMove = React.useCallback(handleThumbMove, [min, max, customSteps, onChange]);
  const callbackThumbUp = React.useCallback(handleThumbDragEnd, [min, max, customSteps, onChange]);

  const handleThumbKeys = (e: React.KeyboardEvent) => {
    const key = e.key;
    if (key !== 'ArrowLeft' && key !== 'ArrowRight') {
      return;
    }
    e.preventDefault();
    let newValue: number = localValue;
    if (!areCustomStepsContinuous && customSteps) {
      const stepIndex = customSteps.findIndex((stepObj) => stepObj.value === localValue);
      if (key === 'ArrowRight') {
        if (isRTL) {
          if (stepIndex - 1 >= 0) {
            newValue = customSteps[stepIndex - 1].value;
          }
        } else {
          if (stepIndex + 1 < customSteps.length) {
            {
              newValue = customSteps[stepIndex + 1].value;
            }
          }
        }
      } else if (key === 'ArrowLeft') {
        if (isRTL) {
          if (stepIndex + 1 < customSteps.length) {
            {
              newValue = customSteps[stepIndex + 1].value;
            }
          }
        } else {
          if (stepIndex - 1 >= 0) {
            newValue = customSteps[stepIndex - 1].value;
          }
        }
      }
    } else {
      if (key === 'ArrowRight') {
        if (isRTL) {
          newValue = localValue - step >= min ? localValue - step : min;
        } else {
          newValue = localValue + step <= max ? localValue + step : max;
        }
      } else if (key === 'ArrowLeft') {
        if (isRTL) {
          newValue = localValue + step <= max ? localValue + step : max;
        } else {
          newValue = localValue - step >= min ? localValue - step : min;
        }
      }
    }

    if (newValue !== localValue) {
      thumbRef.current.style.setProperty(cssSliderValue.name, `${newValue}%`);
      setValue(newValue);
      if (onChange) {
        onChange(e, newValue);
      }
    }
  };

  const displayInput = () => {
    const textInput = (
      <TextInput
        isDisabled={isDisabled}
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
          <InputGroupItem isFill>{textInput}</InputGroupItem>
          <InputGroupText isDisabled={isDisabled}>{inputLabel}</InputGroupText>
        </InputGroup>
      );
    } else {
      return textInput;
    }
  };

  const getStepValue = (val: number, min: number, max: number) => ((val - min) * 100) / (max - min);
  const buildSteps = () => {
    const builtSteps = [];
    for (let i = min; i <= max; i = i + step) {
      const stepValue = getStepValue(i, min, max);

      // If boundaries but not ticks just generate the needed steps
      // so that we don't pollute them DOM with empty divs
      if (!showTicks && showBoundaries && i !== min && i !== max) {
        continue;
      }

      builtSteps.push(
        <SliderStep
          key={i}
          value={stepValue}
          label={i.toString()}
          isTickHidden={!showTicks}
          isLabelHidden={(i === min || i === max) && showBoundaries ? false : true}
          isActive={i <= localValue}
        />
      );
    }
    return builtSteps;
  };

  const thumbComponent = (
    <div
      className={css(styles.sliderThumb)}
      ref={thumbRef}
      tabIndex={isDisabled ? -1 : 0}
      role="slider"
      aria-valuemin={customSteps ? customSteps[0].value : min}
      aria-valuemax={customSteps ? customSteps[customSteps.length - 1].value : max}
      aria-valuenow={localValue}
      aria-valuetext={findAriaTextValue()}
      aria-label={thumbAriaLabel}
      aria-disabled={isDisabled}
      aria-describedby={ariaDescribedby}
      aria-labelledby={ariaLabelledby}
      onMouseDown={!isDisabled ? handleMouseDown : null}
      onTouchStart={!isDisabled ? handleTouchStart : null}
      onKeyDown={!isDisabled ? handleThumbKeys : null}
      onClick={!isDisabled ? onThumbClick : null}
    />
  );

  return (
    <div
      className={css(styles.slider, className, isDisabled && styles.modifiers.disabled)}
      style={{ ...style, ...inputStyle }}
      {...props}
    >
      {(leftActions || startActions) && <div className={css(styles.sliderActions)}>{leftActions || startActions}</div>}
      <div className={css(styles.sliderMain)}>
        <div className={css(styles.sliderRail)} ref={sliderRailRef} onClick={!isDisabled ? onSliderRailClick : null}>
          <div className={css(styles.sliderRailTrack)} />
        </div>
        {customSteps && (
          <div className={css(styles.sliderSteps)} aria-hidden="true">
            {customSteps.map((stepObj) => {
              const minValue = customSteps[0].value;
              const maxValue = customSteps[customSteps.length - 1].value;
              const stepValue = getStepValue(stepObj.value, minValue, maxValue);

              return (
                <SliderStep
                  key={stepObj.value}
                  value={stepValue}
                  label={stepObj.label}
                  isLabelHidden={stepObj.isLabelHidden}
                  isActive={stepObj.value <= localValue}
                />
              );
            })}
          </div>
        )}
        {!customSteps && (showTicks || showBoundaries) && (
          <div className={css(styles.sliderSteps)} aria-hidden="true">
            {buildSteps()}
          </div>
        )}
        {hasTooltipOverThumb ? (
          <Tooltip
            className={css('pf-v6-m-tabular-nums')}
            triggerRef={thumbRef}
            entryDelay={0}
            content={findAriaTextValue()}
          >
            {thumbComponent}
          </Tooltip>
        ) : (
          thumbComponent
        )}
        {isInputVisible && inputPosition === 'aboveThumb' && (
          <div className={css(styles.sliderValue, styles.modifiers.floating)}>{displayInput()}</div>
        )}
      </div>
      {isInputVisible && (inputPosition === 'right' || inputPosition === 'end') && (
        <div className={css(styles.sliderValue)}>{displayInput()}</div>
      )}
      {(rightActions || endActions) && <div className={css(styles.sliderActions)}>{rightActions || endActions}</div>}
    </div>
  );
};
Slider.displayName = 'Slider';
