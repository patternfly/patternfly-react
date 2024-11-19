import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { canUseDOM, KeyTypes, PickOptional } from '../../helpers';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Backdrop/backdrop';
import { ModalContent } from './ModalContent';
import { OUIAProps, getDefaultOUIAId } from '../../helpers';

export interface ModalProps extends React.HTMLProps<HTMLDivElement>, OUIAProps {
  /** The parent container to append the modal to. Defaults to "document.body". */
  appendTo?: HTMLElement | (() => HTMLElement);
  /** Id to use for the modal box description. This should match the ModalHeader labelId or descriptorId. */
  'aria-describedby'?: string;
  /**   Adds an accessible name to the modal when there is no title in the ModalHeader. */
  'aria-label'?: string;
  /** Id to use for the modal box label. This should include the ModalHeader labelId. */
  'aria-labelledby'?: string;
  /** Content rendered inside the modal. */
  children: React.ReactNode;
  /** Additional classes added to the modal. */
  className?: string;
  /** Additional classes added to the modal backdrop. */
  backdropClassName?: string;
  /** Flag to disable focus trap. */
  disableFocusTrap?: boolean;
  /** The element to focus when the modal opens. By default the first
   * focusable element will receive focus.
   */
  elementToFocus?: HTMLElement | SVGElement | string;
  /** An id to use for the modal box container. */
  id?: string;
  /** Flag to show the modal. */
  isOpen?: boolean;
  /** Add callback for when the close button is clicked. This prop needs to be passed to render the close button */
  onClose?: (event: KeyboardEvent | React.MouseEvent) => void;
  /** Modal handles pressing of the escape key and closes the modal. If you want to handle
   * this yourself you can use this callback function. */
  onEscapePress?: (event: KeyboardEvent) => void;
  /** Position of the modal. By default a modal will be positioned vertically and horizontally centered. */
  position?: 'default' | 'top';
  /** Offset from alternate position. Can be any valid CSS length/percentage. */
  positionOffset?: string;
  /** Variant of the modal. */
  variant?: 'small' | 'medium' | 'large' | 'default';
  /** Default width of the modal. */
  width?: number | string;
  /** Maximum width of the modal. */
  maxWidth?: number | string;
  /** Value to overwrite the randomly generated data-ouia-component-id.*/
  ouiaId?: number | string;
  /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
  ouiaSafe?: boolean;
}

export enum ModalVariant {
  small = 'small',
  medium = 'medium',
  large = 'large',
  default = 'default'
}

interface ModalState {
  ouiaStateId: string;
}

class Modal extends React.Component<ModalProps, ModalState> {
  static displayName = 'Modal';
  static currentId = 0;
  boxId = '';
  backdropId = '';

  static defaultProps: PickOptional<ModalProps> = {
    isOpen: false,
    variant: 'default',
    appendTo: () => document.body,
    ouiaSafe: true,
    position: 'default'
  };

  constructor(props: ModalProps) {
    super(props);
    const boxIdNum = Modal.currentId++;
    const backdropId = boxIdNum + 1;
    this.boxId = props.id || `pf-modal-part-${boxIdNum}`;
    this.backdropId = `pf-modal-part-${backdropId}`;

    this.state = {
      ouiaStateId: getDefaultOUIAId(Modal.displayName, props.variant)
    };
  }

  handleEscKeyClick = (event: KeyboardEvent): void => {
    const { onEscapePress } = this.props;
    if (event.key === KeyTypes.Escape && this.props.isOpen) {
      onEscapePress ? onEscapePress(event) : this.props.onClose?.(event);
    }
  };

  getElement = (appendTo: HTMLElement | (() => HTMLElement)) => {
    if (typeof appendTo === 'function') {
      return appendTo();
    }
    return appendTo || document.body;
  };

  toggleSiblingsFromScreenReaders = (hide: boolean) => {
    const { appendTo } = this.props;
    const target: HTMLElement = this.getElement(appendTo);
    const bodyChildren = target.children;
    for (const child of Array.from(bodyChildren)) {
      if (child.id !== this.backdropId) {
        hide ? child.setAttribute('aria-hidden', '' + hide) : child.removeAttribute('aria-hidden');
      }
    }
  };

  isEmpty = (value: string | null | undefined) => value === null || value === undefined || value === '';

  componentDidMount() {
    const { appendTo } = this.props;
    const target: HTMLElement = this.getElement(appendTo);
    target.addEventListener('keydown', this.handleEscKeyClick, false);

    if (this.props.isOpen) {
      target.classList.add(css(styles.backdropOpen));
      this.toggleSiblingsFromScreenReaders(true);
    }
  }

  componentDidUpdate(prevProps: ModalProps) {
    const { appendTo } = this.props;
    const target: HTMLElement = this.getElement(appendTo);
    if (this.props.isOpen) {
      target.classList.add(css(styles.backdropOpen));
      this.toggleSiblingsFromScreenReaders(true);
    } else {
      if (prevProps.isOpen !== this.props.isOpen) {
        target.classList.remove(css(styles.backdropOpen));
        this.toggleSiblingsFromScreenReaders(false);
      }
    }
  }

  componentWillUnmount() {
    const { appendTo } = this.props;
    const target: HTMLElement = this.getElement(appendTo);
    target.removeEventListener('keydown', this.handleEscKeyClick, false);
    target.classList.remove(css(styles.backdropOpen));
    this.toggleSiblingsFromScreenReaders(false);
  }

  render() {
    const {
      appendTo,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onEscapePress,
      'aria-labelledby': ariaLabelledby,
      'aria-label': ariaLabel,
      'aria-describedby': ariaDescribedby,
      ouiaId,
      ouiaSafe,
      position,
      elementToFocus,
      ...props
    } = this.props;

    if (!canUseDOM || !this.getElement(appendTo)) {
      return null;
    }

    return ReactDOM.createPortal(
      <ModalContent
        boxId={this.boxId}
        backdropId={this.backdropId}
        aria-label={ariaLabel}
        aria-describedby={ariaDescribedby}
        aria-labelledby={ariaLabelledby}
        ouiaId={ouiaId !== undefined ? ouiaId : this.state.ouiaStateId}
        ouiaSafe={ouiaSafe}
        position={position}
        elementToFocus={elementToFocus}
        backdropClassName={props.backdropClassName}
        {...props}
      />,
      this.getElement(appendTo)
    ) as React.ReactElement;
  }
}

export { Modal };
