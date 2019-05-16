import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { canUseDOM } from 'exenv';

import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly/components/Backdrop/backdrop.css';

import { KEY_CODES } from '../../helpers/constants';
import ModalContent from './ModalContent';

export interface ModalProps extends React.HTMLProps<HTMLDivElement> {
  /** content rendered inside the Modal. */
  children: React.ReactNode;
  /** additional classes added to the Modal */
  className?: string;
  /** Flag to show the modal */
  isOpen?: boolean;
  /** Content of the Modal Header */
  title: string;
  /** Flag to hide the title */
  hideTitle?: boolean;
  /** id to use for Modal Box description */
  ariaDescribedById?: string;
  /** Action buttons to put in the Modal Footer */
  actions?: any,
  /** A callback for when the close button is clicked */
  onClose?: () => void;
  /** Default width of the Modal. */
  width?: number | string;
  /** Creates a large version of the Modal */
  isLarge?: boolean;
  /** Creates a small version of the Modal */
  isSmall?: boolean;
}

export class Modal extends React.Component<ModalProps> {
  static currentId = 0;
  id = '';
  container?: HTMLDivElement = undefined;

  static defaultProps = {
    width: undefined as any,
    className: '',
    isOpen: false,
    hideTitle: false,
    ariaDescribedById: '',
    actions: [] as any[],
    isLarge: false,
    isSmall: false
  };

  constructor(props: ModalProps) {
    super(props);
    const newId = Modal.currentId++;
    this.id = `pf-modal-${newId}`;
  }


  handleEscKeyClick = (event: KeyboardEvent): void => {
    if (event.keyCode === KEY_CODES.ESCAPE_KEY && this.props.isOpen) {
      this.props.onClose!();
    }
  };

  toggleSiblingsFromScreenReaders = (hide: boolean) => {
    const bodyChildren = document.body.children;
    for (const child of Array.from(bodyChildren)) {
      if (child !== this.container) {
        hide ? child.setAttribute('aria-hidden', '' + hide) : child.removeAttribute('aria-hidden');
      }
    }
  };

  componentDidMount() {
    if (this.container) {
      document.body.appendChild(this.container);
    }
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
      this.toggleSiblingsFromScreenReaders(true);
    } else {
      document.body.classList.remove(css(styles.backdropOpen));
      this.toggleSiblingsFromScreenReaders(false);
    }
  }

  componentWillUnmount() {
    if (this.container) {
      document.body.removeChild(this.container);
    }
    document.removeEventListener('keydown', this.handleEscKeyClick, false);
    document.body.classList.remove(css(styles.backdropOpen));
  }

  render() {
    const { ...props } = this.props;

    if (!canUseDOM) {
      return null;
    }

    if (!this.container) {
      this.container = document.createElement('div');
    }

    return ReactDOM.createPortal(<ModalContent {...props} title={this.props.title} id={this.id} ariaDescribedById={this.props.ariaDescribedById}/>, this.container);
  }
}

export default Modal;
