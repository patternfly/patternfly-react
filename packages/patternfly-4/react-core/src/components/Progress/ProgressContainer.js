import React, { Fragment } from 'react';
import styles from '@patternfly/patternfly-next/components/Progress/progress.css';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import { CheckCircleIcon, TimesCircleIcon } from '@patternfly/react-icons';
import ProgressBar from './ProgressBar';

export const ProgressMeasureLocation = {
  outside: 'outside',
  inside: 'inside',
  top: 'top',
  none: 'none'
};

export const ProgressVariant = {
  danger: 'danger',
  success: 'success',
  info: 'info'
};

const propTypes = {
  /** Progress component DOM ID. */
  parentId: PropTypes.string.isRequired,
  /** Progress title. */
  title: PropTypes.string,
  /** Type of progress status. */
  variant: PropTypes.oneOf(Object.values(ProgressVariant)),
  /** Location of progress value. */
  measureLocation: PropTypes.oneOf(Object.values(ProgressMeasureLocation)),
  /** Actual progress value. */
  value: PropTypes.number.isRequired
};

const defaultProps = {
  variant: ProgressVariant.info,
  measureLocation: ProgressMeasureLocation.Top,
  title: ''
};

const variantToIcon = {
  [ProgressVariant.danger]: TimesCircleIcon,
  [ProgressVariant.success]: CheckCircleIcon
};

const ProgressContainer = ({ value, title, parentId, variant, measureLocation }) => {
  const StatusIcon = variantToIcon.hasOwnProperty(variant) && variantToIcon[variant];
  return (
    <Fragment>
      <div className={css(styles.progressDescription)} id={`${parentId}-description`}>
        {title}
      </div>
      <div className={css(styles.progressStatus)}>
        {(measureLocation === ProgressMeasureLocation.top || measureLocation === ProgressMeasureLocation.outside) && (
          <span className={css(styles.progressMeasure)}>{value}%</span>
        )}
        {measureLocation !== ProgressMeasureLocation.none &&
          variantToIcon.hasOwnProperty(variant) && (
            <span className={css(styles.progressStatusIcon)}>
              <StatusIcon />
            </span>
          )}
      </div>
      <ProgressBar value={value}>{measureLocation === ProgressMeasureLocation.inside && `${value}%`}</ProgressBar>
    </Fragment>
  );
};

ProgressContainer.propTypes = propTypes;
ProgressContainer.defaultProps = defaultProps;

export default ProgressContainer;
