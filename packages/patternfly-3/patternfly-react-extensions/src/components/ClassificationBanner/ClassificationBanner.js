import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * ClassificationBanner Component for PatternFly React
 */
const ClassificationBanner = ({ 
  children, 
  bottomBanner,
  hostName,
  userName,
  classificationLevel,
  backgroundColor,
  closeButton,
  ...props }) => {

  const levelNameAppendix = classificationLevel==='999'?'':(classificationLevel==='0'?'-unclassified':(classificationLevel==='1'?'-classified':'-proprietary-level'));

  const classificationBannerClasses = {
    top: classNames('classification-banner-pf-banner',
    'classification-banner-pf-banner-top',
    // {
    //   'classification-banner-pf-banner-hide': closed,
    // },
    'classification-banner-pf-banner'+levelNameAppendix),
    bottom: classNames(
    'classification-banner-pf-banner',
    'classification-banner-pf-banner-bottom',
    {
    'classification-banner-pf-banner-hide':(!bottomBanner)//||closed
    },
    'classification-banner-pf-banner'+levelNameAppendix),
    closeButton: classNames({
      'classification-banner-pf-close pficon-error-circle-o': closeButton
    })
  }
  const levelName = classificationLevel==='999'?'':(classificationLevel==='0'?'Unclassified':(classificationLevel==='1'?'Classified':(classificationLevel==='2'?'Proprietary Level 1':'Proprietary Level 2')));
  
  return(<div>
    <nav className={classificationBannerClasses.top} >
      <div className={"classification-banner-pf-banner-left"}>{hostName}</div>
      <div className={"classification-banner-pf-classification-level"}>{levelName}</div>
      <div className={"classification-banner-pf-banner-right"}>{userName}<i className={classificationBannerClasses.closeButton}></i></div>

    </nav>
    <div className={"classification-banner-pf-children"}>
    {children}
    </div>
    <footer className={classificationBannerClasses.bottom}>
      <div className={"classification-banner-pf-classification-level"}>{levelName}</div>
    </footer>
  </div>)
};

ClassificationBanner.propTypes = {

  children: PropTypes.node,
  hostName: PropTypes.string,
  userName: PropTypes.string,
  classificationLevel: PropTypes.string,
  backgroundColor: PropTypes.string,
  closeButton: PropTypes.bool,
  bottomBanner: PropTypes.bool

};

ClassificationBanner.defaultProps = {
  children: null,
  hostName: 'localhost',
  userName: 'John Smith',
  classificationLevel: '1',//proprietary level
  backgroundColor: '',
  closeButton: false,
  bottomBanner: true
};

export default ClassificationBanner;
