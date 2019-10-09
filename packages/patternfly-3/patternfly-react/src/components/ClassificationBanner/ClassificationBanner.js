import React from 'react';
import { Button } from '../Button';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const defaultColors = {
  'pf-red': 1,
  'pf-blue': 1,
  'pf-green': 1,
  'pf-orange': 1,
  'pf-yellow': 1
};

/**
 * ClassificationBanner Component for PatternFly React
 */
class ClassificationBanner extends React.Component {
  constructor(props) {
    super(props);

    this.state = { closed: props.closed };
    this.onClose = this.onClose.bind(this);
  }

  onClose(e) {
    this.setState({
      closed: !this.state.closed
    });
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
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

    const classificationBannerClasses = {
      top: classNames(
        'classification-banner-pf-banner',
        'classification-banner-pf-banner-top',
        defaultColors[bannerColor] ? `classification-banner-${bannerColor}` : ''
      ),
      bottom: classNames(
        'classification-banner-pf-banner',
        defaultColors[bannerColor] ? `classification-banner-${bannerColor}` : '',
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
        {!this.state.closed && (
          <nav style={bannerBackgroundStyle} className={classificationBannerClasses.top}>
            <div className="classification-banner-pf-banner-left">
              {leftLabels[0]}
              {leftLabels[1]}
            </div>
            <div className="classification-banner-pf-classification-level">{title}</div>
            <div className="classification-banner-pf-banner-right">
              {closeButton && (
                <Button
                  className={classificationBannerClasses.closeButton}
                  bsStyle="link"
                  bsSize="small"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Close"
                  onClick={e => this.onClose(e)}
                />
              )}
              {rightLabels[0]}
              {rightLabels[1]}
            </div>
          </nav>
        )}
        <div className={classificationBannerClasses.children}>{children}</div>
        {!this.state.closed && bottomBanner && (
          <footer style={bannerBackgroundStyle} className={classificationBannerClasses.bottom}>
            <div className="classification-banner-pf-classification-level">{title}</div>
          </footer>
        )}
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
