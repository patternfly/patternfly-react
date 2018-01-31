import React from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';

class InfoTipMenuFooter extends React.Component {
  render() {
    const { children, className, ...props } = this.props;

    const infoTipMenuFooterClass = ClassNames('footer', className);

    return (
      <div ref="InfotipFooter" className={infoTipMenuFooterClass} {...props}>
        {children}
      </div>
    );
  }
}

InfoTipMenuFooter.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default InfoTipMenuFooter;
