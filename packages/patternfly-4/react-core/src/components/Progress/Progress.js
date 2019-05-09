import React, { Component } from 'react';
import styles from '@patternfly/patternfly/components/Progress/progress.css';
import { css, getModifier } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import ProgressContainer, { ProgressMeasureLocation, ProgressVariant } from './ProgressContainer';
import { getUniqueId } from '../../helpers/util';

export const ProgressSize = {
  sm: 'sm',
  md: 'md',
  lg: 'lg'
};

const propTypes = {
  /** Classname for progress component. */
  className: PropTypes.string,
  /** Size variant of progress. */
  size: PropTypes.oneOf(Object.values(ProgressSize)),
  /** Where the measure percent will be located. */
  measureLocation: PropTypes.oneOf(Object.values(ProgressMeasureLocation)),
  /** Status variant of progress. */
  variant: PropTypes.oneOf(Object.values(ProgressVariant)),
  /** Title above progress. */
  title: PropTypes.string,
  /** Text description of current progress value to display instead of
   * percentage. */
  label: PropTypes.node,
  /** Actual value of progress. */
  value: PropTypes.number,
  /** DOM id for progress component. */
  id: PropTypes.string,
  /** Minimal value of progress. */
  min: PropTypes.number,
  /** Maximum value of progress. */
  max: PropTypes.number,
  /** Accessible text description of current progress value, for when value is
   * not a percentage. Use with label. */
  valueText: PropTypes.string,
  /** Additional props are spread to the container <div> */
  '': PropTypes.any
};

const defaultProps = {
  className: '',
  measureLocation: ProgressMeasureLocation.top,
  variant: ProgressVariant.info,
  id: '',
  title: '',
  min: 0,
  max: 100,
  size: null,
  value: 0,
  valueText: null
};

class Progress extends Component {
  id = this.props.id || getUniqueId();

  render() {
    const {
      id,
      className,
      size,
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

    const ariaProps = {
      'aria-describedby': `${this.id}-description`,
      'aria-valuemin': min,
      'aria-valuenow': value,
      'aria-valuemax': max
    };

    if (valueText) {
      ariaProps['aria-valuetext'] = valueText;
    }

    const scaledValue = Math.min(100, Math.max(0, Math.floor(((value - min) / (max - min)) * 100)));
    return (
      <div
        {...additionalProps}
        className={css(
          styles.progress,
          getModifier(styles, variant, ''),
          getModifier(styles, measureLocation, ''),
          getModifier(styles, measureLocation === ProgressMeasureLocation.inside ? ProgressSize.lg : size, ''),
          !title && getModifier(styles, 'singleline', ''),
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
          ariaProps={ariaProps}
        />
      </div>
    );
  }
}

Progress.propTypes = propTypes;
Progress.defaultProps = defaultProps;

export default Progress;
