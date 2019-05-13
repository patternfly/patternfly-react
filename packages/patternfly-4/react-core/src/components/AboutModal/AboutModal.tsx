import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly/components/Backdrop/backdrop.css';
import { canUseDOM } from 'exenv';
import { KEY_CODES } from '../../helpers/constants';
import { AboutModalContainer } from './helpers/AboutModalContainer';

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

interface AboutModalState {
  ariaLabelledBy: string;
  ariaDescribedBy: string;
  container: HTMLElement;
}

export class AboutModal extends React.Component<AboutModalProps, AboutModalState> {
  private static currentId = 0;
  static defaultProps = {
    className: '',
    isOpen: false,
    onClose: (): any => undefined,
    productName: '',
    trademark: '',
    backgroundImageSrc: '',
    noAboutModalBoxContentContainer: false
  };

  constructor(props: AboutModalProps) {
    super(props);
    this.state = {
      container: undefined,
      ariaLabelledBy: `pf-about-modal-title-${AboutModal.currentId++}`,
      ariaDescribedBy: `pf-about-modal-content-${AboutModal.currentId++}`
    };
    if (props.brandImageSrc && !props.brandImageAlt) {
      // tslint:disable-next-line:no-console
      console.error('AboutModal:', 'brandImageAlt is required when a brandImageSrc is specified');
    }
  }

  private handleEscKeyClick = (event: KeyboardEvent) => {
    if (event.keyCode === KEY_CODES.ESCAPE_KEY && this.props.isOpen) {
      this.props.onClose();
    }
  };

  componentDidMount() {
    if (!this.state.container) {
      const container = document.createElement('div');
      this.setState({ container });
      document.body.appendChild(container);
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
    if (this.state.container) {
      document.body.removeChild(this.state.container);
    }
    document.removeEventListener('keydown', this.handleEscKeyClick, false);
  }

  render() {
    if (!canUseDOM || !this.state.container) {
      return null;
    }

    return ReactDOM.createPortal(
      <AboutModalContainer
        {...this.props}
        ariaLabelledbyId={this.state.ariaLabelledBy}
        ariaDescribedById={this.state.ariaDescribedBy}
      />,
      this.state.container
    );
  }
}