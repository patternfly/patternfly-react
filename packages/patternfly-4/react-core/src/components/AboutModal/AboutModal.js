import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import AboutModalContainer from './AboutModalContainer';
import { canUseDOM } from 'exenv';
import { KEY_CODES } from '../../internal/constants';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly-next/components/Backdrop/backdrop.css';

const propTypes = {
  /** content rendered inside the About Modal. */
  children: PropTypes.node.isRequired,
  /** additional classes added to the About Modal */
  className: PropTypes.string,
  /** Flag to show the  About modal */
  isOpen: PropTypes.bool,
  /** A callback for when the close button is clicked */
  onClose: PropTypes.func,
  /** Product Name */
  productName: PropTypes.string.isRequired,
  /** Trademark information */
  trademark: PropTypes.string.isRequired,
  /** the URL of the image for the Brand. */
  brandImageSrc: PropTypes.string.isRequired,
  /** the alternate text of the Brand image. */
  brandImageAlt: PropTypes.string.isRequired,
  /** the URL of the image for the Logo. */
  logoImageSrc: PropTypes.string.isRequired,
  /** the alternate text of the Logo image. */
  logoImageAlt: PropTypes.string.isRequired,
  /** the URL of the image for the Hero. */
  heroImageSrc: PropTypes.string.isRequired,
  /** the alternate text of the Hero image. */
  heroImageAlt: PropTypes.string
};

const defaultProps = {
  className: '',
  isOpen: false,
  onClose: () => undefined,
  heroImageAlt: ''
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
