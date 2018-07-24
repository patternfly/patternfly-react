import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import styles from './SpanSlider.styles';
import { Grid, GridItem } from '@patternfly/react-core';

const propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  onChange: PropTypes.func.isRequired,
  min: PropTypes.number
};

const defaultProps = {
  min: 3
};

const SpanSlider = ({ label, id, onChange, min, value }) => (
  <Grid className={css(styles.spanSlider)}>
    <GridItem span={4} className={css(styles.label)}>
      <label htmlFor={id}>{label}</label>
    </GridItem>
    <GridItem span={7}>
      <input
        id={id}
        className={css(styles.rangeInput)}
        type="range"
        min={min}
        max={12}
        value={value}
        onChange={onChange}
      />
    </GridItem>
    <GridItem span={1} className={css(styles.value)}>
      {value}
    </GridItem>
  </Grid>
);

SpanSlider.propTypes = propTypes;
SpanSlider.defaultProps = defaultProps;

export default SpanSlider;
