import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { canUseDOM, KEY_CODES, PickOptional } from '../../helpers';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Backdrop/backdrop';
import { ModalContent } from './ModalContent';

export interface ModalProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside the Modal. */
  children: React.ReactNode;
  /** Additional classes added to the Modal */
  className?: string;
  /** Flag to show the modal */
  isOpen?: boolean;
  /** Complex header (more than just text), supersedes title for header content */
  header?: React.ReactNode;
  /** Simple text content of the Modal Header, also used for aria-label on the body */
  title?: string;
  /** Id to use for Modal Box label */
  'aria-labelledby'?: string;
  /** Accessible descriptor of modal */
  'aria-label'?: string;
  /** Id to use for Modal Box descriptor */
  'aria-describedby'?: string;
  /** Flag to show the close button in the header area of the modal */
  showClose?: boolean;
  /** Custom footer */
  footer?: React.ReactNode;
  /** Action buttons to add to the standard Modal Footer, ignored if `footer` is given */
  actions?: any;
  /** A callback for when the close button is clicked */
  onClose?: () => void;
  /** Default width of the Modal. */
  width?: number | string;
  /** The parent container to append the modal to. Defaults to document.body */
  appendTo?: HTMLElement | (() => HTMLElement);
  /** Flag to disable focus trap */
  disableFocusTrap?: boolean;
  /** Description of the modal */
  description?: React.ReactNode;
  /** Variant of the modal */
  variant?: 'small' | 'large' | 'default';
  /** Flag indicating if modal content should be placed in a modal box body wrapper */
  hasNoBodyWrapper?: boolean;
}

export enum ModalVariant {
  small = 'small',
  large = 'large',
  default = 'default'
}

interface ModalState {
  container: HTMLElement;
}

export class Modal extends React.Component<ModalProps, ModalState> {
  static currentId = 0;
  descriptorId = '';

  static defaultProps: PickOptional<ModalProps> = {
    className: '',
    isOpen: false,
    title: '',
    'aria-label': '',
    showClose: true,
    'aria-describedby': '',
    'aria-labelledby': '',
    actions: [] as any[],
    onClose: () => undefined as any,
    variant: 'default',
    hasNoBodyWrapper: false,
    appendTo: (typeof document !== 'undefined' && document.body) || null
  };

  constructor(props: ModalProps) {
    super(props);
    const newDescriptorId = Modal.currentId++;
    this.descriptorId = `pf-modal-${newDescriptorId}`;

    this.state = {
      container: undefined
    };
  }

  handleEscKeyClick = (event: KeyboardEvent): void => {
    if (event.keyCode === KEY_CODES.ESCAPE_KEY && this.props.isOpen) {
      this.props.onClose();
    }
  };

  getElement = (appendTo: HTMLElement | (() => HTMLElement)) => {
    let target: HTMLElement;
    if (typeof appendTo === 'function') {
      target = appendTo();
    } else {
      target = appendTo;
    }
    return target;
  };

  toggleSiblingsFromScreenReaders = (hide: boolean) => {
    const { appendTo } = this.props;
    const target: HTMLElement = this.getElement(appendTo);
    const bodyChildren = target.children;
    for (const child of Array.from(bodyChildren)) {
      if (child !== this.state.container) {
        hide ? child.setAttribute('aria-hidden', '' + hide) : child.removeAttribute('aria-hidden');
      }
    }
  };

  componentDidMount() {
    const {
      appendTo,
      title,
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledby,
      hasNoBodyWrapper,
      'aria-describedby': ariaDescribedby
    } = this.props;
    const target: HTMLElement = this.getElement(appendTo);
    const container = document.createElement('div');
    this.setState({ container });
    target.appendChild(container);
    target.addEventListener('keydown', this.handleEscKeyClick, false);

    if (this.props.isOpen) {
      target.classList.add(css(styles.backdropOpen));
    } else {
      target.classList.remove(css(styles.backdropOpen));
    }

    if (!title && !ariaLabel && !ariaLabelledby) {
      // eslint-disable-next-line no-console
      console.error('Modal: Specify at least one of: title, aria-label, aria-labelledby.');
    }

    if (ariaLabel && ariaLabelledby) {
      // eslint-disable-next-line no-console
      console.warn(
        'Modal: When aria-label & aria-labelledby are both set, the aria-label value is overridden. Double check that you have set an appropriate accessible name for this Modal.'
      );
    }

    if (hasNoBodyWrapper && !ariaDescribedby) {
      // eslint-disable-next-line no-console
      console.warn(
        'Modal: When using hasNoBodyWrapper, ensure you link the modal container to its content description by setting aria-describedby.'
      );
    }
  }

  componentDidUpdate() {
    const { appendTo } = this.props;
    const target: HTMLElement = this.getElement(appendTo);
    if (this.props.isOpen) {
      target.classList.add(css(styles.backdropOpen));
      this.toggleSiblingsFromScreenReaders(true);
    } else {
      target.classList.remove(css(styles.backdropOpen));
      this.toggleSiblingsFromScreenReaders(false);
    }
  }

  componentWillUnmount() {
    const { appendTo } = this.props;
    const target: HTMLElement = this.getElement(appendTo);
    if (this.state.container) {
      target.removeChild(this.state.container);
    }
    target.removeEventListener('keydown', this.handleEscKeyClick, false);
    target.classList.remove(css(styles.backdropOpen));
  }

  render() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {
      'aria-labelledby': ariaLabelledby,
      'aria-label': ariaLabel,
      'aria-describedby': ariaDescribedby,
      title,
      ...props
    } = this.props;
    const { container } = this.state;

    if (!canUseDOM || !container) {
      return null;
    }

    return ReactDOM.createPortal(
      <ModalContent
        {...props}
        title={title}
        aria-label={ariaLabel}
        descriptorId={this.descriptorId}
        aria-describedby={ariaDescribedby}
        aria-labelledby={ariaLabelledby}
      />,
      container
    );
  }
}
