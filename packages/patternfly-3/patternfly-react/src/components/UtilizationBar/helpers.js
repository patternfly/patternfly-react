import classNames from 'classnames';

export const labelClasses = top =>
  classNames({ 'progress-label-top-right': top, 'progress-label-right': !top }, 'pull-right', 'display-inline-block');

export const mainDivClasses = (onSide, userClasses, description, label) =>
  classNames(
    {
      'progress-container': onSide && description,
      'progress-description-left': onSide && description,
      'progress-label-right': onSide && label
    },
    userClasses,
    'utilization-bar-pf'
  );

export const barStyle = (thresholdWarning, thresholdError, now) => {
  if (thresholdWarning && thresholdError) {
    let style = 'success';
    if (thresholdWarning <= now) {
      style = 'warning';
    }
    if (thresholdError <= now) {
      style = 'danger';
    }
    return style;
  }
  return null;
};
