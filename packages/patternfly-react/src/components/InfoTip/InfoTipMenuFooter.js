import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const InfoTipMenuFooter = ({ children, className, ...props }) => {
  const infoTipMenuFooterClass = classNames('footer', className);

  return (
    <div className={infoTipMenuFooterClass} {...props}>
      {children}
    </div>
  );
};

InfoTipMenuFooter.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
InfoTipMenuFooter.defaultProps = {
  className: ''
};
export default InfoTipMenuFooter;
