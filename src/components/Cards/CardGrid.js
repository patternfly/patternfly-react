import ClassNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import CardHeightMatching from './CardHeightMatching';
import { Grid } from '../Grid/index';

const CardGrid = ({ matchHeight, children, className, ...props }) => {
  const classes = ClassNames('container-cards-pf', className);
  const cardSelector = ['.card-pf-match-height'];

  if (matchHeight) {
    return (
      <Grid className={classes} {...props}>
        <CardHeightMatching selector={cardSelector}>
          {children}
        </CardHeightMatching>
      </Grid>
    );
  }
  return (
    <Grid className={classes} {...props}>
      {children}
    </Grid>
  );
};

CardGrid.propTypes = {
  /** Child node - contents of the element */
  children: PropTypes.node.isRequired,
  /** Additional element css classes */
  className: PropTypes.string,
  /** Match Height bool */
  matchHeight: PropTypes.bool
};
CardGrid.defaultProps = {
  className: '',
  matchHeight: false
};
export default CardGrid;
