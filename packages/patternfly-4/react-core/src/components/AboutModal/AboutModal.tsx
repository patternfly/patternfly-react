import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { css } from '@patternfly/react-styles';
import { KEY_CODES } from '../../helpers/constants';
import styles from '@patternfly/patternfly/components/Backdrop/backdrop.css';
import { AboutModalContainer } from './AboutModalContainer';

export interface AboutModalProps {
  /** Content rendered inside the about modal  */
  children: React.ReactNode;
  /** Additional classes added to the about modal  */
  className?: string;
  /** Flag to show the about modal  */
  isOpen?: boolean;
  /** A callback for when the close button is clicked  */
  onClose?: () => void;
  /** Product name  */
  productName?: string;
  /** Trademark information  */
  trademark?: string;
  /** The URL of the image for the brand  */
  brandImageSrc: string;
  /** The alternate text of the brand image  */
  brandImageAlt: string;
  /** The URL of the image for the background  */
  backgroundImageSrc?: string;
  /** Prevents the about modal from rendering content inside a container; allows for more flexible layouts  */
  noAboutModalBoxContentContainer?: boolean;
};

export class AboutModal extends React.Component<AboutModalProps> {
  static currentId = 0;
  static defaultProps = {
    className: '',
    isOpen: false,
    onClose: () => undefined,
    productName: '',
    trademark: '',
    backgroundImageSrc: '',
    noAboutModalBoxContentContainer: false
  };

  private ariaLabelledbyId = `pf-about-modal-title-${AboutModal.currentId++}`;
  private ariaDescribedById = `pf-about-modal-content-${AboutModal.currentId++}`;
  private container: HTMLElement;

  private handleEscKeyClick = event => {
    if (event.keyCode === KEY_CODES.ESCAPE_KEY && this.props.isOpen) {
      this.props.onClose();
    }
  };

  componentDidMount() {
    if (!this.container) {
      this.container = document.createElement('div');
      document.body.appendChild(this.container);
      document.addEventListener('keydown', this.handleEscKeyClick, false);
    }
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
    if (this.container) {
      document.body.removeChild(this.container);
    }
    document.removeEventListener('keydown', this.handleEscKeyClick, false);
  }

  render() {
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