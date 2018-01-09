import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from '../../index';

const SortDirectionSelector = ({
  className,
  isNumeric,
  isAscending,
  ...rest
}) => {
  let directionName;
  if (isNumeric) {
    directionName = isAscending ? 'sort-numeric-asc' : 'sort-numeric-desc';
  } else {
    directionName = isAscending ? 'sort-alpha-asc' : 'sort-alpha-desc';
  }

  return (
    <Button bsStyle="link" className={className} {...rest}>
      <Icon type="fa" className="sort-direction" name={directionName} />
    </Button>
  );
};

SortDirectionSelector.propTypes = {
  /** Additional css classes */
  className: PropTypes.string,
  /** Boolean if current sort type is numeric */
  isNumeric: PropTypes.bool,
  /** Boolean if current sort direction is ascending */
  isAscending: PropTypes.bool
};

SortDirectionSelector.defaultProps = {
  isNumeric: true,
  isAscending: true
};
export default SortDirectionSelector;
