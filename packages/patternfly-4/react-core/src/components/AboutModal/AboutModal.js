import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import AboutModalContainer from './AboutModalContainer';
import { canUseDOM } from 'exenv';
import { KEY_CODES } from '../../helpers/constants';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly/components/Backdrop/backdrop.css';

const propTypes = {
  /** Content rendered inside the about modal */
  children: PropTypes.node.isRequired,
  /** Additional classes added to the about modal */
  className: PropTypes.string,
  /** Flag to show the about modal */
  isOpen: PropTypes.bool,
  /** A callback for when the close button is clicked */
  onClose: PropTypes.func,
  /** Product name */
  productName: PropTypes.string,
  /** Trademark information */
  trademark: PropTypes.string,
  /** The URL of the image for the brand */
  brandImageSrc: PropTypes.string.isRequired,
  /** The alternate text of the brand image */
  brandImageAlt: PropTypes.string.isRequired,
  /** The URL of the image for the logo */
  logoImageSrc: PropTypes.string,
  /** The alternate text of the logo image */
  logoImageAlt: props => {
    if (props.logoImageSrc && !props.logoImageAlt) {
      return new Error('logoImageAlt is required when a logoImageSrc is specified');
    }
    return null;
  },
  /** Prevents the about modal from rendering content inside a container; allows for more flexible layouts */
  noAboutModalBoxContentContainer: PropTypes.bool,
  /** Additional props are passed and spread to the modal content container <div> */
  '': PropTypes.any
};

const defaultProps = {
  className: '',
  isOpen: false,
  onClose: () => undefined,
  productName: '',
  trademark: '',
  logoImageSrc: '',
  logoImageAlt: '',
  noAboutModalBoxContentContainer: false
};

let currentId = 0;

class AboutModal extends React.Component {
  static propTypes = propTypes;
  static defaultProps = defaultProps;

  ariaLabelledbyId = `pf-about-modal-title-${currentId++}`;
  ariaDescribedById = `pf-about-modal-content-${currentId++}`;

  handleEscKeyClick = event => {
    if (event.keyCode === KEY_CODES.ESCAPE_KEY && this.props.isOpen) {
      this.props.onClose();
    }
  };

  componentDidMount() {
    document.body.appendChild(this.container);
    document.addEventListener('keydown', this.handleEscKeyClick, false);
    if (this.props.isOpen) {
      document.body.classList.add(css(styles.backdropOpen));
    } else {
      document.body.classList.remove(css(styles.backdropOpen));
    }
  }

  componentDidUpdate() {
    if (this.props.isOpen) {
      document.body.classList.add(css(styles.backdropOpen));
    } else {
      document.body.classList.remove(css(styles.backdropOpen));
    }
  }

  componentWillUnmount() {
    document.body.removeChild(this.container);
    document.removeEventListener('keydown', this.handleEscKeyClick, false);
  }

  render() {
    if (!canUseDOM) {
      return null;
    }

    if (!this.container) {
      this.container = document.createElement('div');
    }

    return ReactDOM.createPortal(
      <AboutModalContainer
        {...this.props}
        ariaLabelledbyId={this.ariaLabelledbyId}
        ariaDescribedById={this.ariaDescribedById}
      />,
      this.container
    );
  }
}

export default AboutModal;
