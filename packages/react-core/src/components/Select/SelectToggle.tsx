import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Select/select';
import buttonStyles from '@patternfly/react-styles/css/components/Button/button';
import { css } from '@patternfly/react-styles';
import CaretDownIcon from '@patternfly/react-icons/dist/js/icons/caret-down-icon';
import { KeyTypes, SelectVariant } from './selectConstants';
import { PickOptional } from '../../helpers/typeUtils';

export interface SelectToggleProps extends React.HTMLProps<HTMLElement> {
  /** HTML ID of dropdown toggle */
  id: string;
  /** Anything which can be rendered as dropdown toggle */
  children: React.ReactNode;
  /** Classes applied to root element of dropdown toggle */
  className?: string;
  /** Flag to indicate if select is open */
  isOpen?: boolean;
  /** Callback called when toggle is clicked */
  onToggle?: (isExpanded: boolean) => void;
  /** Callback for toggle open on keyboard entry */
  onEnter?: () => void;
  /** Callback for toggle close */
  onClose?: () => void;
  /** Internal callback for toggle keyboard navigation */
  handleTypeaheadKeys?: (position: string) => void;
  /** Element which wraps toggle */
  parentRef: React.RefObject<HTMLDivElement>;
  /** The menu element */
  menuRef?: React.RefObject<HTMLElement>;
  /** Forces active state */
  isActive?: boolean;
  /** Display the toggle with no border or background */
  isPlain?: boolean;
  /** Flag indicating if select is disabled */
  isDisabled?: boolean;
  /** Type of the toggle button, defaults to 'button' */
  type?: 'reset' | 'button' | 'submit' | undefined;
  /** Id of label for the Select aria-labelledby */
  'aria-labelledby'?: string;
  /** Label for toggle of select variants */
  'aria-label'?: string;
  /** Flag for variant, determines toggle rules and interaction */
  variant?: 'single' | 'checkbox' | 'typeahead' | 'typeaheadmulti';
  /** Flag indicating if select toggle has an clear button */
  hasClearButton?: boolean;
  /** Internal callback for handling focus when typeahead toggle button clicked. */
  onClickTypeaheadToggleButton?: () => void;
}

export class SelectToggle extends React.Component<SelectToggleProps> {
  static displayName = 'SelectToggle';
  private toggle: React.RefObject<HTMLDivElement> | React.RefObject<HTMLButtonElement>;

  static defaultProps: PickOptional<SelectToggleProps> = {
    className: '',
    isOpen: false,
    isActive: false,
    isPlain: false,
    isDisabled: false,
    hasClearButton: false,
    variant: 'single',
    'aria-labelledby': '',
    'aria-label': '',
    type: 'button',
    onToggle: () => {},
    onEnter: () => {},
    onClose: () => {},
    onClickTypeaheadToggleButton: () => {}
  };

  constructor(props: SelectToggleProps) {
    super(props);
    const { variant } = props;
    const isTypeahead = variant === SelectVariant.typeahead || variant === SelectVariant.typeaheadMulti;
    this.toggle = isTypeahead ? React.createRef<HTMLDivElement>() : React.createRef<HTMLButtonElement>();
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.onDocClick);
    document.addEventListener('touchstart', this.onDocClick);
    document.addEventListener('keydown', this.handleGlobalKeys);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.onDocClick);
    document.removeEventListener('touchstart', this.onDocClick);
    document.removeEventListener('keydown', this.handleGlobalKeys);
  }

  onDocClick = (event: Event) => {
    const { parentRef, menuRef, isOpen, onToggle, onClose } = this.props;
    const clickedOnToggle = parentRef && parentRef.current && parentRef.current.contains(event.target as Node);
    const clickedWithinMenu =
      menuRef && menuRef.current && menuRef.current.contains && menuRef.current.contains(event.target as Node);
    if (isOpen && !(clickedOnToggle || clickedWithinMenu)) {
      onToggle(false);
      onClose();
      this.toggle.current.focus();
    }
  };

  handleGlobalKeys = (event: KeyboardEvent) => {
    const { parentRef, menuRef, isOpen, variant, onToggle, onClose } = this.props;
    const escFromToggle = parentRef && parentRef.current && parentRef.current.contains(event.target as Node);
    const escFromWithinMenu =
      menuRef && menuRef.current && menuRef.current.contains && menuRef.current.contains(event.target as Node);
    if (
      isOpen &&
      event.key === KeyTypes.Tab &&
      (variant === SelectVariant.typeahead || variant === SelectVariant.typeaheadMulti)
    ) {
      this.props.handleTypeaheadKeys('tab');
      event.preventDefault();
      return;
    }

    if (
      isOpen &&
      (event.key === KeyTypes.Escape || event.key === KeyTypes.Tab) &&
      (escFromToggle || escFromWithinMenu)
    ) {
      onToggle(false);
      onClose();
      this.toggle.current.focus();
    }
  };

  onKeyDown = (event: React.KeyboardEvent) => {
    const { isOpen, onToggle, variant, onClose, onEnter, handleTypeaheadKeys } = this.props;

    if (variant === SelectVariant.typeahead || variant === SelectVariant.typeaheadMulti) {
      if (event.key === KeyTypes.ArrowDown || event.key === KeyTypes.ArrowUp) {
        handleTypeaheadKeys((event.key === KeyTypes.ArrowDown && 'down') || (event.key === KeyTypes.ArrowUp && 'up'));
        event.preventDefault();
      } else if (event.key === KeyTypes.Enter) {
        if (isOpen) {
          handleTypeaheadKeys('enter');
        } else {
          onToggle(!isOpen);
        }
      }
    }

    if (
      variant === SelectVariant.typeahead ||
      variant === SelectVariant.typeaheadMulti ||
      (event.key === KeyTypes.Tab && !isOpen) ||
      (event.key !== KeyTypes.Enter && event.key !== KeyTypes.Space)
    ) {
      return;
    }
    event.preventDefault();
    if ((event.key === KeyTypes.Tab || event.key === KeyTypes.Enter || event.key === KeyTypes.Space) && isOpen) {
      onToggle(!isOpen);
      onClose();
      this.toggle.current.focus();
    } else if ((event.key === KeyTypes.Enter || event.key === KeyTypes.Space) && !isOpen) {
      onToggle(!isOpen);
      onEnter();
    }
  };

  render() {
    /* eslint-disable @typescript-eslint/no-unused-vars */
    const {
      className,
      children,
      isOpen,
      isActive,
      isPlain,
      isDisabled,
      variant,
      onToggle,
      onEnter,
      onClose,
      onClickTypeaheadToggleButton,
      handleTypeaheadKeys,
      parentRef,
      menuRef,
      id,
      type,
      hasClearButton,
      'aria-labelledby': ariaLabelledBy,
      'aria-label': ariaLabel,
      ...props
    } = this.props;
    /* eslint-enable @typescript-eslint/no-unused-vars */
    const isTypeahead =
      variant === SelectVariant.typeahead || variant === SelectVariant.typeaheadMulti || hasClearButton;
    const toggleProps: {
      id: string;
      'aria-labelledby': string;
      'aria-expanded': boolean;
      'aria-haspopup': 'listbox' | null;
    } = {
      id,
      'aria-labelledby': ariaLabelledBy,
      'aria-expanded': isOpen,
      'aria-haspopup': (variant !== SelectVariant.checkbox && 'listbox') || null
    };
    return (
      <React.Fragment>
        {!isTypeahead && (
          <button
            {...props}
            {...toggleProps}
            ref={this.toggle as React.RefObject<HTMLButtonElement>}
            type={type}
            className={css(
              styles.selectToggle,
              isDisabled && styles.modifiers.disabled,
              isPlain && styles.modifiers.plain,
              isActive && styles.modifiers.active,
              className
            )}
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            onClick={_event => {
              onToggle(!isOpen);
              if (isOpen) {
                onClose();
              }
            }}
            onKeyDown={this.onKeyDown}
            disabled={isDisabled}
          >
            {children}
            <span className={css(styles.selectToggleArrow)}>
              <CaretDownIcon />
            </span>
          </button>
        )}
        {isTypeahead && (
          <div
            {...props}
            ref={this.toggle as React.RefObject<HTMLDivElement>}
            className={css(
              styles.selectToggle,
              isDisabled && styles.modifiers.disabled,
              isPlain && styles.modifiers.plain,
              isTypeahead && styles.modifiers.typeahead,
              className
            )}
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            onClick={_event => {
              if (!isDisabled) {
                onToggle(true);
              }
            }}
            onKeyDown={this.onKeyDown}
          >
            {children}
            <button
              {...toggleProps}
              type={type}
              className={css(buttonStyles.button, styles.selectToggleButton, styles.modifiers.plain)}
              aria-label={ariaLabel}
              onClick={_event => {
                _event.stopPropagation();
                onToggle(!isOpen);
                if (isOpen) {
                  onClose();
                }
                onClickTypeaheadToggleButton();
              }}
              {...((variant === SelectVariant.typeahead || variant === SelectVariant.typeaheadMulti) && {
                tabIndex: -1
              })}
              disabled={isDisabled}
            >
              <CaretDownIcon className={css(styles.selectToggleArrow)} />
            </button>
          </div>
        )}
      </React.Fragment>
    );
  }
}
