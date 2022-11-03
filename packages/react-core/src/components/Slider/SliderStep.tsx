import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Slider/slider';
import { css } from '@patternfly/react-styles';

export interface SliderStepProps extends Omit<React.HTMLProps<HTMLDivElement>, 'label'> {
  /** Additional classes added to the slider step. */
  className?: string;
  /** Flag indicating the step is active. */
  isActive?: boolean;
  /** Flag indicating that the label should be hidden. */
  isLabelHidden?: boolean;
  /** Flag indicating that the tick should be hidden. */
  isTickHidden?: boolean;
  /** Step label. **/
  label?: string;
  /** Step value. **/
  value?: number;
}

export const SliderStep: React.FunctionComponent<SliderStepProps> = ({
  className,
  label,
  value,
  isTickHidden = false,
  isLabelHidden = false,
  isActive = false,
  ...props
}: SliderStepProps) => {
  const style = { '--pf-c-slider__step--Left': `${value}%` } as React.CSSProperties;
  return (
    <div className={css(styles.sliderStep, isActive && styles.modifiers.active, className)} style={style} {...props}>
      {!isTickHidden && <div className={css(styles.sliderStepTick)} />}
      {!isLabelHidden && label && <div className={css(styles.sliderStepLabel)}>{label}</div>}
    </div>
  );
};
SliderStep.displayName = 'SliderStep';
