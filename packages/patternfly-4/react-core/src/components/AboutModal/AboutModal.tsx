import * as React from 'react';
import * as ReactDOM from 'react-dom';
import AboutModalContainer from './AboutModalContainer';
import { canUseDOM } from 'exenv';
import { KEY_CODES } from '../../helpers/constants';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly/components/Backdrop/backdrop.css';

export interface AboutModalProps {
  /** content rendered inside the About Modal. */
  children: React.ReactNode;
  /** additional classes added to the About Modal */
  className?: string;
  /** Flag to show the  About modal */
  isOpen?: boolean;
  /** A callback for when the close button is clicked */
  onClose?(event?: React.MouseEvent<HTMLButtonElement>): void;
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

export class AboutModal extends React.Component<AboutModalProps, {
  container?: HTMLDivElement,
  id: number
}> {
  static defaultProps = {
    className: '',
    isOpen: false,
    onClose: () => undefined,
    trademark: '',
    logoImageSrc: '',
    logoImageAlt: ''
  };
  static currentId = 0;

  constructor(props: AboutModalProps) {
    super(props);
    this.state = {
      container: canUseDOM ? document.createElement('div') : undefined,
      id: AboutModal.currentId++,
    };
    if (props.logoImageSrc && !props.logoImageAlt) {
      console.error('AboutModal:', 'logoImageAlt is required when a logoImageSrc is specified');
    }
  }

  handleEscKeyClick = (event: KeyboardEvent) => {
    if (event.keyCode === KEY_CODES.ESCAPE_KEY && this.props.isOpen && this.props.onClose) {
      this.props.onClose(undefined);
    }
  };

  componentDidMount() {
    if (this.state.container) {
      document.body.appendChild(this.state.container);
    }
    document.addEventListener('keydown', this.handleEscKeyClick, false);
  }

  componentDidUpdate() {
    if (this.props.isOpen) {
      document.body.classList.add(css(styles.backdropOpen));
    } else {
      document.body.classList.remove(css(styles.backdropOpen));
    }
  }

  componentWillUnmount() {
    if (this.state.container) {
      document.body.removeChild(this.state.container as Node);
    }
    document.removeEventListener('keydown', this.handleEscKeyClick, false);
  }

  render() {
    if (!this.state.container) {
      return null;
    }

    /** Additional props are passed and spread to Modal content container <div> */
    return ReactDOM.createPortal(
      <AboutModalContainer
        {...this.props}
        ariaLabelledbyId={`pf-about-modal-title-${this.state.id}`}
        ariaDescribedById={`pf-about-modal-content-${this.state.id}`}
      />,
      this.state.container
    );
  }
}
