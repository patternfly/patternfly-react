import * as React from 'react';
import progressStyle from '@patternfly/react-styles/css/components/Progress/progress';
import { css } from '@patternfly/react-styles';
import { Tooltip } from '../Tooltip';
import CheckCircleIcon from '@patternfly/react-icons/dist/js/icons/check-circle-icon';
import TimesCircleIcon from '@patternfly/react-icons/dist/js/icons/times-circle-icon';
import ExclamationTriangleIcon from '@patternfly/react-icons/dist/js/icons/exclamation-triangle-icon';
import { AriaProps, ProgressBar } from './ProgressBar';

export enum ProgressMeasureLocation {
  outside = 'outside',
  inside = 'inside',
  top = 'top',
  none = 'none'
}

export enum ProgressVariant {
  danger = 'danger',
  success = 'success',
  warning = 'warning'
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
  variant?: 'danger' | 'success' | 'warning';
  /** Location of progress value. */
  measureLocation?: 'outside' | 'inside' | 'top' | 'none';
  /** Actual progress value. */
  value: number;
  /** Whether title should be truncated */
  isTitleTruncated?: boolean;
  /** Position of the tooltip which is displayed if title is truncated */
  tooltipPosition?: 'auto' | 'top' | 'bottom' | 'left' | 'right';
}

const variantToIcon = {
  danger: TimesCircleIcon,
  success: CheckCircleIcon,
  warning: ExclamationTriangleIcon
};

export const ProgressContainer: React.FunctionComponent<ProgressContainerProps> = ({
  progressBarAriaProps,
  value,
  title = '',
  parentId,
  label = null,
  variant = null,
  measureLocation = ProgressMeasureLocation.top,
  isTitleTruncated = false,
  tooltipPosition
}: ProgressContainerProps) => {
  const StatusIcon = variantToIcon.hasOwnProperty(variant) && variantToIcon[variant];
  const [tooltip, setTooltip] = React.useState('');
  const onMouseEnter = (event: any) => {
    if (event.target.offsetWidth < event.target.scrollWidth) {
      setTooltip(title || event.target.innerHTML);
    } else {
      setTooltip('');
    }
  };
  const Title = (
    <div
      className={css(progressStyle.progressDescription, isTitleTruncated && progressStyle.modifiers.truncate)}
      id={`${parentId}-description`}
      aria-hidden="true"
      onMouseEnter={isTitleTruncated ? onMouseEnter : null}
    >
      {title}
    </div>
  );

  return (
    <React.Fragment>
      {tooltip ? (
        <Tooltip position={tooltipPosition} content={tooltip} isVisible>
          {Title}
        </Tooltip>
      ) : (
        Title
      )}
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
ProgressContainer.displayName = 'ProgressContainer';
