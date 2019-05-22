import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * ClassificationBanner Component for PatternFly React
 */
class ClassificationBanner extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      closed: props.closed || false
    };
  }

  onClose = () => {
    this.setState({ closed: true });
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.closed !== this.state.closed) {
      this.setState({ closed: nextProps.closed });
    }
  }

  render() {
    const {
      children,
      bottomBanner,
      hostName,
      userName,
      closeButton,
      userNamePosition,
      hostNamePosition,
      bannerColor,
      title,
      ...props
    } = this.props;

    const defaultColors = {
      'pf-red': 1,
      'pf-blue': 1,
      'pf-green': 1,
      'pf-orange': 1,
      'pf-yellow': 1
    };

    const classificationBannerClasses = {
      top: classNames(
        'classification-banner-pf-banner',
        'classification-banner-pf-banner-top',
        {
          'classification-banner-pf-hide': this.state.closed
        },
        defaultColors[bannerColor] ? `classification-banner-${bannerColor}` : ''
      ),
      bottom: classNames(
        'classification-banner-pf-banner',
        defaultColors[bannerColor] ? `classification-banner-${bannerColor}` : '',
        {
          'classification-banner-pf-hide': !bottomBanner || this.state.closed
        },
        'classification-banner-pf-banner-bottom'
      ),
      closeButton: classNames({
        'classification-banner-pf-close pficon-error-circle-o': closeButton
      }),
      children: classNames({
        'classification-banner-pf-children-no-bottom': !this.state.closed && !bottomBanner,
        'classification-banner-pf-children': !this.state.closed && bottomBanner
      })
    };

    const leftLabels = [
      hostNamePosition === 'left' ? <span>{hostName}</span> : null,
      userNamePosition === 'left' ? <span>{userName}</span> : null
    ];
    const rightLabels = [
      hostNamePosition === 'right' ? <span>{hostName}</span> : null,
      userNamePosition === 'right' ? <span>{userName}</span> : null
    ];
    const bannerBackgroundStyle = defaultColors[bannerColor] ? {} : { background: bannerColor };

    return (
      <div {...props}>
        <nav style={bannerBackgroundStyle} className={classificationBannerClasses.top}>
          <div className="classification-banner-pf-banner-left">
            {leftLabels[0]}
            {leftLabels[1]}
          </div>
          <div className="classification-banner-pf-classification-level">{title}</div>
          <div className="classification-banner-pf-banner-right">
            <i
              id="classification-banner-close-btn"
              className={classificationBannerClasses.closeButton}
              onClick={this.onClose}
            />
            {rightLabels[0]}
            {rightLabels[1]}
          </div>
        </nav>
        <div className={classificationBannerClasses.children}>{children}</div>
        <footer style={bannerBackgroundStyle} className={classificationBannerClasses.bottom}>
          <div className="classification-banner-pf-classification-level">{title}</div>
        </footer>
      </div>
    );
  }
}

ClassificationBanner.propTypes = {
  children: PropTypes.node,
  hostName: PropTypes.string,
  userName: PropTypes.string,
  closeButton: PropTypes.bool,
  bottomBanner: PropTypes.bool,
  closed: PropTypes.bool,
  userNamePosition: PropTypes.string,
  hostNamePosition: PropTypes.string,
  bannerColor: PropTypes.string,
  title: PropTypes.string
};

ClassificationBanner.defaultProps = {
  children: null,
  hostName: '',
  userName: '',
  closeButton: false,
  bottomBanner: true,
  closed: false,
  userNamePosition: 'right',
  hostNamePosition: 'left',
  bannerColor: '',
  title: ''
};

export default ClassificationBanner;
