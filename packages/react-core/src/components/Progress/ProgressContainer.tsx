import { Fragment, useState, useRef, useEffect } from 'react';
import progressStyle from '@patternfly/react-styles/css/components/Progress/progress';
import { css } from '@patternfly/react-styles';
import { Tooltip, TooltipPosition } from '../Tooltip';
import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';
import ExclamationTriangleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-triangle-icon';
import { AriaProps, ProgressBar } from './ProgressBar';
import { ProgressHelperText } from './ProgressHelperText';

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

export interface ProgressContainerProps extends Omit<React.HTMLProps<HTMLDivElement>, 'label' | 'title'> {
  /** Properties needed for aria support */
  progressBarAriaProps?: AriaProps;
  /** Progress component DOM ID. */
  parentId: string;
  /** Progress title. The isTitleTruncated property will only affect string titles. Node title truncation must be handled manually. */
  title?: React.ReactNode;
  /** Label to indicate what progress is showing. */
  label?: React.ReactNode;
  /** Type of progress status. */
  variant?: 'danger' | 'success' | 'warning';
  /** Location of progress value. */
  measureLocation?: 'outside' | 'inside' | 'top' | 'none';
  /** Actual progress value. */
  value: number;
  /** Whether string title should be truncated */
  isTitleTruncated?: boolean;
  /** Position of the tooltip which is displayed if title is truncated */
  tooltipPosition?:
    | TooltipPosition
    | 'auto'
    | 'top'
    | 'bottom'
    | 'left'
    | 'right'
    | 'top-start'
    | 'top-end'
    | 'bottom-start'
    | 'bottom-end'
    | 'left-start'
    | 'left-end'
    | 'right-start'
    | 'right-end';
  /** Content which can be used to convey additional information about the progress component.
   * We recommend the helper text component as it was designed for this purpose.
   */
  helperText?: React.ReactNode;
  /** Hide the status icon, helpful when space is limited (such as within table cells) */
  hideStatusIcon?: boolean;
}

const variantToIcon = {
  danger: ExclamationCircleIcon,
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
  tooltipPosition,
  helperText,
  hideStatusIcon = false
}: ProgressContainerProps) => {
  const StatusIcon = !hideStatusIcon && variantToIcon.hasOwnProperty(variant) && variantToIcon[variant];
  const [tooltip, setTooltip] = useState('');
  const titleRef = useRef(null);
  const updateTooltip = (event: any) => {
    if (event.target.offsetWidth < event.target.scrollWidth) {
      setTooltip(title || event.target.innerHTML);
    } else {
      setTooltip('');
    }
  };

  useEffect(() => {
    if (tooltip !== '') {
      titleRef.current.focus();
    }
  }, [tooltip]);

  const _isTruncatedAndString = isTitleTruncated && typeof title === 'string';
  const Title = (
    <div
      className={css(progressStyle.progressDescription, _isTruncatedAndString && progressStyle.modifiers.truncate)}
      id={`${parentId}-description`}
      aria-hidden={_isTruncatedAndString ? null : 'true'}
      onMouseEnter={_isTruncatedAndString ? updateTooltip : null}
      onFocus={_isTruncatedAndString ? updateTooltip : null}
      {...(_isTruncatedAndString && { tabIndex: 0 })}
      ref={titleRef}
    >
      {title}
    </div>
  );

  return (
    <Fragment>
      {title && (
        <>
          {tooltip && <Tooltip position={tooltipPosition} content={tooltip} isVisible triggerRef={titleRef} />}
          {Title}
        </>
      )}
      {(measureLocation !== ProgressMeasureLocation.none || StatusIcon) && (
        <div className={css(progressStyle.progressStatus)} aria-hidden="true">
          {(measureLocation === ProgressMeasureLocation.top || measureLocation === ProgressMeasureLocation.outside) && (
            <span className={css(progressStyle.progressMeasure)}>{label || `${value}%`}</span>
          )}
          {StatusIcon && (
            <span className={css(progressStyle.progressStatusIcon)}>
              <StatusIcon />
            </span>
          )}
        </div>
      )}
      <ProgressBar progressBarAriaProps={progressBarAriaProps} value={value}>
        {measureLocation === ProgressMeasureLocation.inside && `${value}%`}
      </ProgressBar>
      {helperText && <ProgressHelperText>{helperText}</ProgressHelperText>}
    </Fragment>
  );
};
ProgressContainer.displayName = 'ProgressContainer';
