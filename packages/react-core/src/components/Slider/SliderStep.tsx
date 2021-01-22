import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Slider/slider';
import { css } from '@patternfly/react-styles';

export interface SliderStepProps extends Omit<React.HTMLProps<HTMLDivElement>, 'label'> {
  /** Additional classes added to the slider steps. */
  className?: string;
  /** Step value **/
  value?: number;
  /** Step label **/
  label?: string;
  /** Flag indicating that the label should be hidden */
  isLabelHidden?: boolean;
  /** Flag indicating the step is active */
  isActive?: boolean;
}

export const SliderStep: React.FunctionComponent<SliderStepProps> = ({
  className,
  label,
  value,
  isLabelHidden = false,
  isActive = false,
  ...props
}: SliderStepProps) => {
  const style = { '--pf-c-slider__step--Left': `${value}%` } as React.CSSProperties;
  return (
    <div className={css(styles.sliderStep, isActive && styles.modifiers.active, className)} style={style} {...props}>
      <div className={css(styles.sliderStepTick)} />
      {!isLabelHidden && label && <div className={css(styles.sliderStepLabel)}>{label}</div>}
    </div>
  );
};
SliderStep.displayName = 'SliderStep';
