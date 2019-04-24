import React from 'react';
import PropTypes from 'prop-types';

/**
 * ClassificationBanner Component for PatternFly React
 */
const ClassificationBanner = ({ children, ...props }) => {
  return(<div>
    <nav>
      topbanner
    </nav>
    {children}
    <footer>
      bottomBanner
    </footer>
  </div>)
};

ClassificationBanner.propTypes = {

  children: PropTypes.node,
  hostName: PropTypes.string,
  userName: PropTypes.string,
  classificationLevel: PropTypes.number,
  backgroundColor: PropTypes.string,
  closeButton: PropTypes.bool,
  bottomBanner: PropTypes.bool

};

ClassificationBanner.defaultProps = {
  children: null,
  hostName: '',
  userName: '',
  classificationLevel: 0,//proprietary level
  backgroundColor: '',
  closeButton: false,
  bottomBanner: true
};

export default ClassificationBanner;
