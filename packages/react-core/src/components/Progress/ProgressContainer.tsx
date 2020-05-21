import * as React from 'react';
import progressStyle from '@patternfly/react-styles/css/components/Progress/progress';
import { css } from '@patternfly/react-styles';
import CheckCircleIcon from '@patternfly/react-icons/dist/js/icons/check-circle-icon';
import TimesCircleIcon from '@patternfly/react-icons/dist/js/icons/times-circle-icon';
import { AriaProps, ProgressBar } from './ProgressBar';

export enum ProgressMeasureLocation {
  outside = 'outside',
  inside = 'inside',
  top = 'top',
  none = 'none'
}

export enum ProgressVariant {
  danger = 'danger',
  success = 'success'
}

export interface ProgressContainerProps extends Omit<React.HTMLProps<HTMLDivElement>, 'label'> {
  /** Properties needed for aria support */
  progressBarAriaProps?: AriaProps;
  /** Progress component DOM ID. */
  parentId: string;
  /** Progress title. */
  title?: string;
  /** Label to indicate what progress is showing. */
  label?: React.ReactNode;
  /** Type of progress status. */
  variant?: 'danger' | 'success';
  /** Location of progress value. */
  measureLocation?: 'outside' | 'inside' | 'top' | 'none';
  /** Actual progress value. */
  value: number;
}

const variantToIcon = {
  danger: TimesCircleIcon,
  success: CheckCircleIcon
};

export const ProgressContainer: React.FunctionComponent<ProgressContainerProps> = ({
  progressBarAriaProps,
  value,
  title = '',
  parentId,
  label = null,
  variant = null,
  measureLocation = ProgressMeasureLocation.top
}: ProgressContainerProps) => {
  const StatusIcon = variantToIcon.hasOwnProperty(variant) && variantToIcon[variant];
  return (
    <React.Fragment>
      <div className={css(progressStyle.progressDescription)} id={`${parentId}-description`} aria-hidden="true">
        {title}
      </div>
      <div className={css(progressStyle.progressStatus)} aria-hidden="true">
        {(measureLocation === ProgressMeasureLocation.top || measureLocation === ProgressMeasureLocation.outside) && (
          <span className={css(progressStyle.progressMeasure)}>{label || `${value}%`}</span>
        )}
        {variantToIcon.hasOwnProperty(variant) && (
          <span className={css(progressStyle.progressStatusIcon)}>
            <StatusIcon />
          </span>
        )}
      </div>
      <ProgressBar role="progressbar" progressBarAriaProps={progressBarAriaProps} value={value}>
        {measureLocation === ProgressMeasureLocation.inside && `${value}%`}
      </ProgressBar>
    </React.Fragment>
  );
};
