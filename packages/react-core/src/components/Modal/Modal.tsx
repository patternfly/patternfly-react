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
  'aria-labelledby'?: string | null;
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
  /** An ID to use for the ModalBox container */
  id?: string;
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
  boxId = '';
  labelId = '';
  descriptorId = '';

  static defaultProps: PickOptional<ModalProps> = {
    className: '',
    isOpen: false,
    title: '',
    'aria-label': '',
    showClose: true,
    'aria-describedby': '',
    'aria-labelledby': '',
    id: undefined,
    actions: [] as any[],
    onClose: () => undefined as any,
    variant: 'default',
    hasNoBodyWrapper: false,
    appendTo: (typeof document !== 'undefined' && document.body) || null
  };

  constructor(props: ModalProps) {
    super(props);
    const boxIdNum = Modal.currentId++;
    const labelIdNum = boxIdNum + 1;
    const descriptorIdNum = boxIdNum + 2;
    this.boxId = props.id || `pf-modal-part-${boxIdNum}`;
    this.labelId = `pf-modal-part-${labelIdNum}`;
    this.descriptorId = `pf-modal-part-${descriptorIdNum}`;

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

  isEmpty = (value: string | null) => value === null || value === undefined || value === '';

  componentDidMount() {
    const {
      appendTo,
      title,
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledby,
      hasNoBodyWrapper,
      header
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

    if (this.isEmpty(title) && this.isEmpty(ariaLabel) && this.isEmpty(ariaLabelledby)) {
      // eslint-disable-next-line no-console
      console.error('Modal: Specify at least one of: title, aria-label, aria-labelledby.');
    }

    if (this.isEmpty(ariaLabel) && this.isEmpty(ariaLabelledby) && (hasNoBodyWrapper || header)) {
      // eslint-disable-next-line no-console
      console.error(
        'Modal: When using hasNoBodyWrapper or setting a custom header, ensure you assign an accessible name to the the modal container with aria-label or aria-labelledby.'
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
    const {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      appendTo,
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
        boxId={this.boxId}
        labelId={this.labelId}
        descriptorId={this.descriptorId}
        title={title}
        aria-label={ariaLabel}
        aria-describedby={ariaDescribedby}
        aria-labelledby={ariaLabelledby}
      />,
      container
    );
  }
}
