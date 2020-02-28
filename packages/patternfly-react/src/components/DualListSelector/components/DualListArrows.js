import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../../../index';
import { noop } from '../../../common/helpers';
import { LEFT_ARROW_ARIA_LABEL, RIGHT_ARROW_ARIA_LABEL } from '../constants';

const DualListArrows = ({ right, left }) => (
  <div className="dual-list-pf-arrows">
    <Icon
      aria-label={right.ariaLabel}
      name="chevron-circle-down"
      size="lg"
      tabIndex="0"
      onClick={right.onClick}
      onKeyPress={right.onClick}
    />
    <Icon
      aria-label={left.ariaLabel}
      name="chevron-circle-up"
      size="lg"
      tabIndex="0"
      onClick={left.onClick}
      onKeyPress={left.onClick}
    />
  </div>
);

DualListArrows.propTypes = {
  left: PropTypes.shape({
    /** Determine what happens on left/up arrow click */
    onClick: PropTypes.func,
    /** Set the left/up arrow aria-label */
    ariaLabel: PropTypes.string
  }),
  right: PropTypes.shape({
    onClick: PropTypes.func,
    ariaLabel: PropTypes.string
  })
};

DualListArrows.defaultProps = {
  left: {
    onClick: noop,
    ariaLabel: LEFT_ARROW_ARIA_LABEL
  },
  right: {
    onClick: noop,
    ariaLabel: RIGHT_ARROW_ARIA_LABEL
  }
};

export default DualListArrows;
