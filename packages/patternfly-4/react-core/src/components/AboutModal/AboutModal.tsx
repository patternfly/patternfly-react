import React, { ReactNode, Component, MouseEvent } from 'react';
import ReactDOM from 'react-dom';
import AboutModalContainer from './AboutModalContainer';
import { canUseDOM } from 'exenv';
import { KEY_CODES } from '../../helpers/constants';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly/components/Backdrop/backdrop.css';

export type AboutModalProps = {
  /** content rendered inside the About Modal. */
  children: ReactNode;
  /** additional classes added to the About Modal */
  className?: string;
  /** Flag to show the  About modal */
  isOpen: boolean;
  /** A callback for when the close button is clicked */
  onClose?(event: MouseEvent<HTMLButtonElement>): void;
  /** Product Name */
  productName: string;
  /** Trademark information */
  trademark: string;
  /** the URL of the image for the Brand. */
  brandImageSrc: string;
  /** the alternate text of the Brand image. */
  brandImageAlt: string;
  /** the URL of the image for the Logo. */
  logoImageSrc: string;
  /** the alternate text of the Logo image. */
  logoImageAlt: string;
};

const defaultProps = {
  className: '',
  isOpen: false,
  onClose: () => undefined,
  trademark: '',
  logoImageSrc: '',
  logoImageAlt: ''
};

let currentId = 0;

class AboutModal extends Component<AboutModalProps, { container: HTMLDivElement }> {
  constructor(props) {
    super(props);
    this.state = { container: null };
    if (props.logoImageSrc && !props.logoImageAlt) {
      console.error('AboutModal:', 'logoImageAlt is required when a logoImageSrc is specified');
    }
  }
  static defaultProps = defaultProps;

  ariaLabelledbyId = `pf-about-modal-title-${currentId++}`;
  ariaDescribedById = `pf-about-modal-content-${currentId++}`;

  handleEscKeyClick = event => {
    if (event.keyCode === KEY_CODES.ESCAPE_KEY && this.props.isOpen) {
      this.props.onClose(null);
    }
  };


  componentDidMount() {
    const container = document.createElement('div');
    this.setState({ container: container });
    document.body.appendChild(container);
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
    document.body.removeChild(this.state.container);
    document.removeEventListener('keydown', this.handleEscKeyClick, false);
  }

  render() {
    if (!canUseDOM || !this.state.container) {
      return null;
    }

    /** Additional props are passed and spread to Modal content container <div> */
    return ReactDOM.createPortal(
      <AboutModalContainer
        {...this.props}
        ariaLabelledbyId={this.ariaLabelledbyId}
        ariaDescribedById={this.ariaDescribedById}
      />,
      this.state.container
    );
  }
}

export default AboutModal;
