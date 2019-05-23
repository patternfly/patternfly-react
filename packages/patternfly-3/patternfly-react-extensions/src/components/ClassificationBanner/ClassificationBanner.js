import React from 'react';
import { Button } from 'patternfly-react';
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
            {closeButton && (
              <Button
                bsStyle="btn btn-link classification-banner-pf-close pficon-error-circle-o"
                bsSize="small"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Close"
                onClick={this.onClose}
              />
            )}
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
  /** Child nodes */
  children: PropTypes.node,
  /** Option to display system hostname that user has logged into */
  hostName: PropTypes.string,
  /** Option to display user login */
  userName: PropTypes.string,
  /** Option to close classification banner */
  closeButton: PropTypes.bool,
  /** Option to enable or disable classification banner across bottom screen */
  bottomBanner: PropTypes.bool,
  /** Whether banner's state is closed or not */
  closed: PropTypes.bool,
  /** Option to configure location of user login on the banner */
  userNamePosition: PropTypes.string,
  /** Option to configure location of hostname on the banner */
  hostNamePosition: PropTypes.string,
  /** Option to configure banner color. Hex code is supported e.g. #39a5dc */
  bannerColor: PropTypes.string,
  /** Classification level or custom text to display in top and bottom banner */
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
