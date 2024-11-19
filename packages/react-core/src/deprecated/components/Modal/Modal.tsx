import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { canUseDOM, KeyTypes, PickOptional } from '../../../helpers';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Backdrop/backdrop';
import { ModalContent } from './ModalContent';
import { OUIAProps, getDefaultOUIAId } from '../../../helpers';

export interface ModalProps extends Omit<React.HTMLProps<HTMLDivElement>, 'title'>, OUIAProps {
  /** Action buttons to add to the standard modal footer. Ignored if the footer property
   * is passed in.
   */
  actions?: any;
  /** The parent container to append the modal to. Defaults to "document.body". */
  appendTo?: HTMLElement | (() => HTMLElement);
  /** Id to use for the modal box descriptor. */
  'aria-describedby'?: string;
  /** Accessible descriptor of the modal. */
  'aria-label'?: string;
  /** Id to use for the modal box label. */
  'aria-labelledby'?: string;
  /** Accessible label applied to the modal box body. This should be used to communicate
   * important information about the modal box body div element if needed, such as that it
   * is scrollable.
   */
  bodyAriaLabel?: string;
  /** Accessible role applied to the modal box body. This will default to "region" if the
   * bodyAriaLabel property is passed in. Set to a more appropriate role as applicable
   * based on the modal content and context.
   */
  bodyAriaRole?: string;
  /** Content rendered inside the modal. */
  children: React.ReactNode;
  /** Additional classes added to the modal. */
  className?: string;
  /** Description of the modal. */
  description?: React.ReactNode;
  /** Flag to disable focus trap. */
  disableFocusTrap?: boolean;
  /** The element to focus when the modal opens. By default the first
   * focusable element will receive focus.
   */
  elementToFocus?: HTMLElement | SVGElement | string;
  /** Custom footer. */
  footer?: React.ReactNode;
  /** Flag indicating if modal content should be placed in a modal box body wrapper. */
  hasNoBodyWrapper?: boolean;
  /** Complex header (more than just text), supersedes the title property for header content. */
  header?: React.ReactNode;
  /** Optional help section for the modal header. */
  help?: React.ReactNode;
  /** An id to use for the modal box container. */
  id?: string;
  /** Flag to show the modal. */
  isOpen?: boolean;
  /** A callback for when the close button is clicked. */
  onClose?: (event: KeyboardEvent | React.MouseEvent) => void;
  /** Modal handles pressing of the escape key and closes the modal. If you want to handle
   * this yourself you can use this callback function. */
  onEscapePress?: (event: KeyboardEvent) => void;
  /** Position of the modal. By default a modal will be positioned vertically and horizontally centered. */
  position?: 'default' | 'top';
  /** Offset from alternate position. Can be any valid CSS length/percentage. */
  positionOffset?: string;
  /** Flag to show the close button in the header area of the modal. */
  showClose?: boolean;
  /** Text content of the modal header. */
  title?: React.ReactNode;
  /** Optional alert icon (or other) to show before the title of the modal header. When the
   * predefined alert types are used the default styling will be automatically applied.
   */
  titleIconVariant?: 'success' | 'danger' | 'warning' | 'info' | 'custom' | React.ComponentType<any>;
  /** Optional title label text for screen readers. */
  titleLabel?: string;
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
  labelId = '';
  descriptorId = '';
  backdropId = '';

  static defaultProps: PickOptional<ModalProps> = {
    className: '',
    isOpen: false,
    title: '',
    titleIconVariant: null,
    titleLabel: '',
    'aria-label': '',
    showClose: true,
    'aria-describedby': '',
    'aria-labelledby': '',
    id: undefined,
    actions: [] as any[],
    onClose: () => undefined as any,
    variant: 'default',
    hasNoBodyWrapper: false,
    appendTo: () => document.body,
    ouiaSafe: true,
    position: 'default'
  };

  constructor(props: ModalProps) {
    super(props);
    const boxIdNum = Modal.currentId++;
    const labelIdNum = boxIdNum + 1;
    const descriptorIdNum = boxIdNum + 2;
    const backdropIdNum = boxIdNum + 3;
    this.boxId = props.id || `pf-modal-part-${boxIdNum}`;
    this.labelId = `pf-modal-part-${labelIdNum}`;
    this.descriptorId = `pf-modal-part-${descriptorIdNum}`;
    this.backdropId = `pf-modal-part-${backdropIdNum}`;

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
    const {
      appendTo,
      title,
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledby,
      hasNoBodyWrapper,
      header
    } = this.props;
    const target: HTMLElement = this.getElement(appendTo);
    target.addEventListener('keydown', this.handleEscKeyClick, false);

    if (this.props.isOpen) {
      target.classList.add(css(styles.backdropOpen));
      this.toggleSiblingsFromScreenReaders(true);
    }

    if (!title && this.isEmpty(ariaLabel) && this.isEmpty(ariaLabelledby)) {
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
      bodyAriaLabel,
      bodyAriaRole,
      title,
      titleIconVariant,
      titleLabel,
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
        {...props}
        boxId={this.boxId}
        labelId={this.labelId}
        descriptorId={this.descriptorId}
        backdropId={this.backdropId}
        title={title}
        titleIconVariant={titleIconVariant}
        titleLabel={titleLabel}
        aria-label={ariaLabel}
        aria-describedby={ariaDescribedby}
        aria-labelledby={ariaLabelledby}
        bodyAriaLabel={bodyAriaLabel}
        bodyAriaRole={bodyAriaRole}
        ouiaId={ouiaId !== undefined ? ouiaId : this.state.ouiaStateId}
        ouiaSafe={ouiaSafe}
        position={position}
        elementToFocus={elementToFocus}
      />,
      this.getElement(appendTo)
    ) as React.ReactElement;
  }
}

export { Modal };
