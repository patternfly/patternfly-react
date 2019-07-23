import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { canUseDOM } from 'exenv';

import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Backdrop/backdrop';

import { KEY_CODES } from '../../helpers/constants';
import { ModalContent } from './ModalContent';

export interface ModalProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside the Modal. */
  children: React.ReactNode;
  /** Additional classes added to the Modal */
  className?: string;
  /** Flag to show the modal */
  isOpen?: boolean;
  /** Complex header (more than just text), supersedes title for header content */
  header?: React.ReactNode,
  /** document where the Modal will be created and shown (via React.Portal) */
  targetDocument?: HTMLDocument;
  /** Simple text content of the Modal Header, also used for aria-label on the body */
  title: string;
  /** Flag to hide the title */
  hideTitle?: boolean;
  /** Flag to show the close button in the header area of the modal */
  showClose?: boolean;
  /** Id to use for Modal Box description */
  ariaDescribedById?: string;
  /** Custom footer */
  footer?: React.ReactNode,
  /** Action buttons to add to the standard Modal Footer, ignored if `footer` is given */
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

interface ModalState {
  container: HTMLElement;
}

export class Modal extends React.Component<ModalProps, ModalState> {
  static currentId = 0;
  id = '';

  static defaultProps = {
    className: '',
    isOpen: false,
    targetDocument: window.document,
    hideTitle: false,
    showClose: true,
    ariaDescribedById: '',
    actions: [] as any[],
    onClose: () => undefined as any,
    isLarge: false,
    isSmall: false
  };

  constructor(props: ModalProps) {
    super(props);
    const newId = Modal.currentId++;
    this.id = `pf-modal-${newId}`;

    this.state = {
      container: undefined
    };
  }


  handleEscKeyClick = (event: KeyboardEvent): void => {
    if (event.keyCode === KEY_CODES.ESCAPE_KEY && this.props.isOpen) {
      this.props.onClose();
    }
  };

  toggleSiblingsFromScreenReaders = (hide: boolean) => {
    const { targetDocument } = this.props;
    const bodyChildren = targetDocument.body.children;
    for (const child of Array.from(bodyChildren)) {
      if (child !== this.state.container) {
        hide ? child.setAttribute('aria-hidden', '' + hide) : child.removeAttribute('aria-hidden');
      }
    }
  };

  componentDidMount() {
    const { targetDocument } = this.props;
    const container = targetDocument.createElement('div');
    this.setState({ container });
    targetDocument.body.appendChild(container);
    targetDocument.addEventListener('keydown', this.handleEscKeyClick, false);

    if (this.props.isOpen) {
      targetDocument.body.classList.add(css(styles.backdropOpen));
    } else {
      targetDocument.body.classList.remove(css(styles.backdropOpen));
    }
  }

  componentDidUpdate() {
    const { targetDocument } = this.props;
    if (this.props.isOpen) {
      targetDocument.body.classList.add(css(styles.backdropOpen));
      this.toggleSiblingsFromScreenReaders(true);
    } else {
      targetDocument.body.classList.remove(css(styles.backdropOpen));
      this.toggleSiblingsFromScreenReaders(false);
    }
  }

  componentWillUnmount() {
    const { targetDocument } = this.props;
    if (this.state.container) {
      targetDocument.body.removeChild(this.state.container);
    }
    targetDocument.removeEventListener('keydown', this.handleEscKeyClick, false);
    targetDocument.body.classList.remove(css(styles.backdropOpen));
  }

  render() {
    const { ...props } = this.props;
    const { container } = this.state;

    if (!canUseDOM || !container) {
      return null;
    }

    return ReactDOM.createPortal(
      <ModalContent {...props} title={this.props.title} id={this.id} ariaDescribedById={this.props.ariaDescribedById}/>,
      container
    );
  }
}
