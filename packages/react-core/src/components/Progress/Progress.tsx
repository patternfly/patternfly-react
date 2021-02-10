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
  variant?: 'danger' | 'success' | 'warning';
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
  /** Indicate whether to truncate the title */
  isTitleTruncated?: boolean;
  /** Position of the tooltip which is displayed if title is truncated */
  tooltipPosition?: 'auto' | 'top' | 'bottom' | 'left' | 'right';
  /** Adds accessible text to the ProgressBar. Required when title not used */
  'aria-label'?: string;
}

export class Progress extends React.Component<ProgressProps> {
  static displayName = 'Progress';
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
    valueText: null as string,
    isTitleTruncated: false,
    tooltipPosition: 'top' as 'auto' | 'top' | 'bottom' | 'left' | 'right',
    'aria-label': null as string
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
      isTitleTruncated,
      tooltipPosition,
      'aria-label': ariaLabel,
      ...props
    } = this.props;

    const progressBarAriaProps: AriaProps = {
      'aria-labelledby': title ? `${this.id}-description` : null,
      'aria-label': ariaLabel ? ariaLabel : null,
      'aria-valuemin': min,
      'aria-valuenow': value,
      'aria-valuemax': max
    };

    if (valueText) {
      progressBarAriaProps['aria-valuetext'] = valueText;
    }

    if (!title && !this.props['aria-label']) {
      /* eslint-disable no-console */
      console.warn('An accessible aria-label is required when using the progress component without a title.');
    }

    const scaledValue = Math.min(100, Math.max(0, Math.floor(((value - min) / (max - min)) * 100)));
    return (
      <div
        {...props}
        className={css(
          styles.progress,
          styles.modifiers[variant],
          ['inside', 'outside'].includes(measureLocation) && styles.modifiers[measureLocation as 'inside' | 'outside'],
          measureLocation === 'inside' ? styles.modifiers[ProgressSize.lg] : styles.modifiers[size as 'sm' | 'lg'],
          !title && styles.modifiers.singleline,
          className
        )}
        id={this.id}
      >
        <ProgressContainer
          parentId={this.id}
          value={scaledValue}
          title={title}
          label={label}
          variant={variant}
          measureLocation={measureLocation}
          progressBarAriaProps={progressBarAriaProps}
          isTitleTruncated={isTitleTruncated}
          tooltipPosition={tooltipPosition}
        />
      </div>
    );
  }
}
