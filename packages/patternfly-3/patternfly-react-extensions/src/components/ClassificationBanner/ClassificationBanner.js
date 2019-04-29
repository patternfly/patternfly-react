import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * ClassificationBanner Component for PatternFly React
 */
class ClassificationBanner extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      closed: props.closed || false
    }

  }

  onClose = ()=>{
    this.setState({closed:true})
  }

  componentWillReceiveProps(nextProps) {
    
    if (nextProps.closed !== this.state.closed) {
      this.setState({ closed: nextProps.closed});
    }
  }

  render(){
    const { 
      children, 
      bottomBanner,
      hostName,
      userName,
      classificationLevel,
      backgroundColor,
      closeButton,
      userNamePosition,
      hostNamePosition,
      ...props } = this.props;
    
    const levelNameAppendix = classificationLevel==='999'?'':(classificationLevel==='0'?'-unclassified':(classificationLevel==='1'?'-classified':'-proprietary-level'));

    const classificationBannerClasses = {
      top: classNames('classification-banner-pf-banner',
      'classification-banner-pf-banner-top',
      {
        'classification-banner-pf-hide': this.state.closed,
      },
      'classification-banner-pf-banner'+levelNameAppendix),
      bottom: classNames(
      'classification-banner-pf-banner',
      'classification-banner-pf-banner'+levelNameAppendix+'-bottom',
      {
      'classification-banner-pf-hide':(!bottomBanner)||this.state.closed
      },
      'classification-banner-pf-banner-bottom'),
      closeButton: classNames({
        'classification-banner-pf-close pficon-error-circle-o': closeButton
      }),
      children: classNames({
        'classification-banner-pf-children-no-bottom':(!this.state.closed && !bottomBanner),
        'classification-banner-pf-children':(!this.state.closed && bottomBanner)})
    }
    const levelName = classificationLevel==='999'?'':(classificationLevel==='0'?'Unclassified':(classificationLevel==='1'?'Classified':(classificationLevel==='2'?'Proprietary Level 1':'Proprietary Level 2')));

    var leftLabels=[hostNamePosition==='left'?(<span>{hostName}</span>):null,
    userNamePosition==='left'?(<span>{userName}</span>):null],
    rightLabels=[hostNamePosition==='right'?(<span>{hostName}</span>):null,
    userNamePosition==='right'?(<span>{userName}</span>):null];
    
    return(<div>
      <nav className={classificationBannerClasses.top} >
        <div className={"classification-banner-pf-banner-left"}>
          {leftLabels[0]}
          {leftLabels[1]}
        </div>
        <div className={"classification-banner-pf-classification-level"}>{levelName}</div>
        <div className={"classification-banner-pf-banner-right"}>
          {rightLabels[0]}
          {rightLabels[1]}
        <i className={classificationBannerClasses.closeButton} onClick={this.onClose}></i></div>

      </nav>
      <div className={classificationBannerClasses.children}>
      {children}
      </div>
      <footer className={classificationBannerClasses.bottom}>
        <div className={"classification-banner-pf-classification-level"}>{levelName}</div>
      </footer>
    </div>)

  }
}

ClassificationBanner.propTypes = {

  children: PropTypes.node,
  hostName: PropTypes.string,
  userName: PropTypes.string,
  classificationLevel: PropTypes.string,
  backgroundColor: PropTypes.string,
  closeButton: PropTypes.bool,
  bottomBanner: PropTypes.bool,
  closed: PropTypes.bool,
  userNamePosition: PropTypes.string,
  hostNamePosition: PropTypes.string

};

ClassificationBanner.defaultProps = {
  children: null,
  hostName: '',
  userName: '',
  classificationLevel: '999',//proprietary level
  backgroundColor: '',
  closeButton: false,
  bottomBanner: true,
  closed: false,
  userNamePosition: 'right',
  hostNamePosition: 'left'
  
};

export default ClassificationBanner;
