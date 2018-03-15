import React from 'react';
import PropTypes from 'prop-types';

const CardFooter = props => (
  <div className="card-footer">{props.cardFooter}</div>
);

CardFooter.propTypes = {
  cardFooter: PropTypes.array
};

CardFooter.defaultProps = {
  cardFooter: []
};

export default CardFooter;
