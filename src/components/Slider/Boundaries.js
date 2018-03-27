import React from 'react';
import PropTypes from 'prop-types';

const Boundaries = props => {
  const { children, min, max, reversed, showBoundaries, slider } = props;
  const minElement = <b>{min}</b>;
  const maxElement = <b>{max}</b>;
  let leftBoundary = null;
  let rightBoundary = null;
  if (showBoundaries) {
    if (reversed) {
      leftBoundary = maxElement;
      rightBoundary = minElement;
    } else {
      leftBoundary = minElement;
      rightBoundary = maxElement;
    }
  }

  return (
    <div className="slider-pf">
      {leftBoundary}
      {slider}
      {rightBoundary}
      {children}
    </div>
  );
};

Boundaries.propTypes = {
  children: PropTypes.array,
  min: PropTypes.number,
  max: PropTypes.number,
  reversed: PropTypes.bool,
  showBoundaries: PropTypes.bool,
  slider: PropTypes.object.isRequired
};

Boundaries.defaultProps = {
  children: [],
  min: 0,
  max: 100,
  reversed: false,
  showBoundaries: false
};

export default Boundaries;
