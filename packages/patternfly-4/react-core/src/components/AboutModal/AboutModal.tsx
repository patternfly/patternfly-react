import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly/components/Backdrop/backdrop.css';
import { canUseDOM } from 'exenv';
import { KEY_CODES } from '../../helpers/constants';
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
  private static currentId = 0;
  private container: HTMLElement;
  private id = AboutModal.currentId++;
  ariaLabelledBy = `pf-about-modal-title-${this.id}`;
  ariaDescribedBy = `pf-about-modal-content-${this.id}`;
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

  private appendContainer = () => {
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

  componentDidMount() {
    this.appendContainer();
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
    if (!canUseDOM) {
      return null;
    }
    if(canUseDOM && !this.container) {
      this.appendContainer();
    }

    return ReactDOM.createPortal(
      <AboutModalContainer
        ariaLabelledbyId={this.ariaLabelledBy}
        ariaDescribedById={this.ariaDescribedBy}
        {...this.props}
      />,
      this.container
    );
  }
}