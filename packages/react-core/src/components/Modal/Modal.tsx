import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { canUseDOM, KeyTypes, PickOptional } from '../../helpers';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Backdrop/backdrop';
import { ModalContent } from './ModalContent';
import { OUIAProps, getDefaultOUIAId } from '../../helpers';

export interface ModalProps extends React.HTMLProps<HTMLDivElement>, OUIAProps {
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
  onClose?: () => void;
  /** Modal handles pressing of the escape key and closes the modal. If you want to handle
   * this yourself you can use this callback function. */
  onEscapePress?: (event: KeyboardEvent) => void;
  /** Alternate position of the modal. */
  position?: 'top';
  /** Offset from alternate position. Can be any valid CSS length/percentage. */
  positionOffset?: string;
  /** Flag to show the close button in the header area of the modal. */
  showClose?: boolean;
  /** Simple text content of the modal header. Also used for the aria-label on the body. */
  title?: string;
  /** Optional alert icon (or other) to show before the title of the modal header. When the
   * predefined alert types are used the default styling will be automatically applied.
   */
  titleIconVariant?: 'success' | 'danger' | 'warning' | 'info' | 'default' | React.ComponentType<any>;
  /** Optional title label text for screen readers. */
  titleLabel?: string;
  /** Variant of the modal. */
  variant?: 'small' | 'medium' | 'large' | 'default';
  /** Default width of the modal. */
  width?: number | string;
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
  container: HTMLElement;
  ouiaStateId: string;
}

export class Modal extends React.Component<ModalProps, ModalState> {
  static displayName = 'Modal';
  static currentId = 0;
  boxId = '';
  labelId = '';
  descriptorId = '';

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
    ouiaSafe: true
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
      container: undefined,
      ouiaStateId: getDefaultOUIAId(Modal.displayName, props.variant)
    };
  }

  handleEscKeyClick = (event: KeyboardEvent): void => {
    const { onEscapePress } = this.props;
    if (event.key === KeyTypes.Escape && this.props.isOpen) {
      onEscapePress ? onEscapePress(event) : this.props.onClose?.();
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
      if (child !== this.state.container) {
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
        titleIconVariant={titleIconVariant}
        titleLabel={titleLabel}
        aria-label={ariaLabel}
        aria-describedby={ariaDescribedby}
        aria-labelledby={ariaLabelledby}
        bodyAriaLabel={bodyAriaLabel}
        bodyAriaRole={bodyAriaRole}
        ouiaId={ouiaId !== undefined ? ouiaId : this.state.ouiaStateId}
        ouiaSafe={ouiaSafe}
      />,
      container
    ) as React.ReactElement;
  }
}
