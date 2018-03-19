import React from 'react';
import PropTypes from 'prop-types';

const Boundaries = props => {
  const { children, min, max, reversed, showBoundaries } = props;
  const minElement = <b>{min}</b>;
  const maxElement = <b>{max}</b>;
  let leftBoundary = null;
  let rightBoundary = null;
  // Todo test RTL
  if (showBoundaries) {
    if (reversed) {
      leftBoundary = maxElement;
      rightBoundary = minElement;
    } else {
      leftBoundary = minElement;
      rightBoundary = maxElement;
    }
  }

  const slider = children[0];
  const form = [children[1], children[2]];
  return (
    <div className="slider-pf">
      {leftBoundary}
      {slider}
      {rightBoundary}
      {form}
    </div>
  );
};

Boundaries.propTypes = {
  children: PropTypes.array,
  min: PropTypes.number,
  max: PropTypes.number,
  reversed: PropTypes.bool,
  showBoundaries: PropTypes.bool
};

Boundaries.defaultProps = {
  children: [],
  min: 0,
  max: 100,
  reversed: false,
  showBoundaries: false
};

export default Boundaries;
