import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Progress/progress';
import { css } from '@patternfly/react-styles';
import { ProgressContainer, ProgressMeasureLocation } from './ProgressContainer';
import { AriaProps } from './ProgressBar';
import { getUniqueId } from '../../helpers/util';

export enum ProgressSize {
  sm = 'sm',
  md = 'md',
  lg = 'lg'
}

export interface ProgressProps extends Omit<React.HTMLProps<HTMLDivElement>, 'size' | 'label'> {
  /** Classname for progress component. */
  className?: string;
  /** Size variant of progress. */
  size?: 'sm' | 'md' | 'lg';
  /** Where the measure percent will be located. */
  measureLocation?: 'outside' | 'inside' | 'top' | 'none';
  /** Status variant of progress. */
  variant?: 'danger' | 'success';
  /** Title above progress. */
  title?: string;
  /** Text description of current progress value to display instead of percentage. */
  label?: React.ReactNode;
  /** Actual value of progress. */
  value?: number;
  /** DOM id for progress component. */
  id?: string;
  /** Minimal value of progress. */
  min?: number;
  /** Maximum value of progress. */
  max?: number;
  /** Accessible text description of current progress value, for when value is not a percentage. Use with label. */
  valueText?: string;
}

export class Progress extends React.Component<ProgressProps> {
  static defaultProps: ProgressProps = {
    className: '',
    measureLocation: ProgressMeasureLocation.top,
    variant: null,
    id: '',
    title: '',
    min: 0,
    max: 100,
    size: null as ProgressSize,
    label: null as React.ReactNode,
    value: 0,
    valueText: null as string
  };

  id = this.props.id || getUniqueId();

  render() {
    const {
      /* eslint-disable @typescript-eslint/no-unused-vars */
      id,
      size,
      /* eslint-enable @typescript-eslint/no-unused-vars */
      className,
      value,
      title,
      label,
      variant,
      measureLocation,
      min,
      max,
      valueText,
      ...props
    } = this.props;
    const additionalProps = {
      ...props,
      ...(valueText ? { 'aria-valuetext': valueText } : { 'aria-describedby': `${this.id}-description` })
    };

    const progressBarAriaProps: AriaProps = {
      'aria-describedby': `${this.id}-description`,
      'aria-valuemin': min,
      'aria-valuenow': value,
      'aria-valuemax': max
    };

    if (valueText) {
      progressBarAriaProps['aria-valuetext'] = valueText;
    }

    const scaledValue = Math.min(100, Math.max(0, Math.floor(((value - min) / (max - min)) * 100)));
    return (
      <div
        {...additionalProps}
        className={css(
          styles.progress,
          styles.modifiers[variant],
          ['inside', 'outside'].includes(measureLocation) && styles.modifiers[measureLocation as 'inside' | 'outside'],
          measureLocation === 'inside' ? styles.modifiers[ProgressSize.lg] : styles.modifiers[size as 'sm' | 'lg'],
          !title && styles.modifiers.singleline,
          className
        )}
        id={this.id}
        role="progressbar"
      >
        <ProgressContainer
          parentId={this.id}
          value={scaledValue}
          title={title}
          label={label}
          variant={variant}
          measureLocation={measureLocation}
          progressBarAriaProps={progressBarAriaProps}
        />
      </div>
    );
  }
}
