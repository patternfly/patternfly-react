import * as React from 'react';
import { useState } from 'react';
import styles from '@patternfly/react-styles/css/components/Label/label';
import labelGrpStyles from '@patternfly/react-styles/css/components/Label/label-group';
import { Button } from '../Button';
import { Tooltip, TooltipPosition } from '../Tooltip';
import { css } from '@patternfly/react-styles';
import { useIsomorphicLayoutEffect } from '../../helpers';
import cssTextMaxWidth from '@patternfly/react-tokens/dist/esm/c_label__text_MaxWidth';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';
import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';
import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';
import ExclamationTriangleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-triangle-icon';
import InfoCircleIcon from '@patternfly/react-icons/dist/esm/icons/info-circle-icon';

export interface LabelProps extends React.HTMLProps<HTMLSpanElement> {
  /** Content rendered inside the label. */
  children?: React.ReactNode;
  /** Additional classes added to the label. */
  className?: string;
  /** Color of the label. */
  color?: 'blue' | 'teal' | 'green' | 'orange' | 'purple' | 'red' | 'orangered' | 'grey' | 'yellow';
  /** Variant of the label. */
  variant?: 'outline' | 'filled' | 'overflow' | 'add';
  /** Status of the label with a respective icon and color. Overrides the color set by the color property. */
  status?: 'success' | 'warning' | 'danger' | 'info' | 'custom';
  /** Flag indicating the label is compact. */
  isCompact?: boolean;
  /** Flag indicating the label is disabled. Works only on clickable labels, so either href or onClick props must be passed in. */
  isDisabled?: boolean;
  /** Flag indicating the label is editable. */
  isEditable?: boolean;
  /** Additional props passed to the editable label text div. Optionally passing onInput and onBlur callbacks will allow finer custom text input control. */
  editableProps?: any;
  /** Callback when an editable label completes an edit. */
  onEditComplete?: (event: MouseEvent | KeyboardEvent, newText: string) => void;
  /** Callback when an editable label cancels an edit. */
  onEditCancel?: (event: KeyboardEvent, previousText: string) => void;
  /** The max width of the label before it is truncated. Can be any valid CSS unit, such as '100%', '100px', or '16ch'. */
  textMaxWidth?: string;
  /** Position of the tooltip which is displayed if text is truncated */
  tooltipPosition?:
    | TooltipPosition
    | 'auto'
    | 'top'
    | 'bottom'
    | 'left'
    | 'right'
    | 'top-start'
    | 'top-end'
    | 'bottom-start'
    | 'bottom-end'
    | 'left-start'
    | 'left-end'
    | 'right-start'
    | 'right-end';
  /** Icon added to the left of the label text. Overrides the icon set by the status property. */
  icon?: React.ReactNode;
  /** Close click callback for removable labels. If present, label will have a close button. */
  onClose?: (event: React.MouseEvent) => void;
  /** Node for custom close button. */
  closeBtn?: React.ReactNode;
  /** Aria label for close button */
  closeBtnAriaLabel?: string;
  /** Additional properties for the default close button. */
  closeBtnProps?: any;
  /** Href for a label that is a link. If present, the label will change to an anchor element. This should not be passed in if the onClick prop is also passed in. */
  href?: string;
  /** Callback for when the label is clicked. This should not be passed in if the href or isEditable props are also passed in. */
  onClick?: (event: React.MouseEvent) => void;
  /** Forwards the label content and className to rendered function.  Use this prop for react router support.*/
  render?: ({
    className,
    content,
    componentRef
  }: {
    className: string;
    content: React.ReactNode;
    componentRef: any;
  }) => React.ReactNode;
}

const colorStyles = {
  blue: styles.modifiers.blue,
  teal: styles.modifiers.teal,
  green: styles.modifiers.green,
  orange: styles.modifiers.orange,
  purple: styles.modifiers.purple,
  red: styles.modifiers.red,
  orangered: styles.modifiers.orangered,
  yellow: styles.modifiers.yellow,
  grey: ''
};

const statusIcons = {
  success: <CheckCircleIcon />,
  warning: <ExclamationTriangleIcon />,
  danger: <ExclamationCircleIcon />,
  info: <InfoCircleIcon />,
  custom: <BellIcon />
};

export const Label: React.FunctionComponent<LabelProps> = ({
  children,
  className = '',
  color = 'grey',
  variant = 'filled',
  status,
  isCompact = false,
  isDisabled = false,
  isEditable = false,
  editableProps,
  textMaxWidth,
  tooltipPosition,
  icon,
  onClose,
  onClick: onLabelClick,
  onEditCancel,
  onEditComplete,
  closeBtn,
  closeBtnAriaLabel,
  closeBtnProps,
  href,
  render,
  ...props
}: LabelProps) => {
  const [isEditableActive, setIsEditableActive] = useState<boolean>(false);
  const [currValue, setCurrValue] = useState(children);
  const editableButtonRef = React.useRef<HTMLButtonElement>();
  const editableInputRef = React.useRef<HTMLInputElement>();

  const isOverflowLabel = variant === 'overflow';
  const isAddLabel = variant === 'add';
  const isClickable = (onLabelClick && !isOverflowLabel && !isAddLabel) || href;

  let _icon;
  if (status) {
    _icon = statusIcons[status];
  }
  if (icon) {
    _icon = icon;
  }

  React.useEffect(() => {
    document.addEventListener('mousedown', onDocMouseDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onDocMouseDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  });

  React.useEffect(() => {
    if (onLabelClick && href) {
      // eslint-disable-next-line no-console
      console.warn(
        'Link labels cannot have onClick passed, this results in invalid HTML. Please remove either the href or onClick prop.'
      );
    } else if (onLabelClick && isEditable) {
      // eslint-disable-next-line no-console
      console.warn(
        'Editable labels cannot have onClick passed, clicking starts the label edit process. Please remove either the isEditable or onClick prop.'
      );
    }
  }, [onLabelClick, href, isEditable]);

  const onDocMouseDown = (event: MouseEvent) => {
    if (
      isEditableActive &&
      editableInputRef &&
      editableInputRef.current &&
      !editableInputRef.current.contains(event.target as Node)
    ) {
      if (editableInputRef.current.value) {
        onEditComplete && onEditComplete(event, editableInputRef.current.value);
      }
      setIsEditableActive(false);
    }
  };

  const onKeyDown = (event: KeyboardEvent) => {
    const key = event.key;
    if (
      (!isEditableActive &&
        (!editableButtonRef ||
          !editableButtonRef.current ||
          !editableButtonRef.current.contains(event.target as Node))) ||
      (isEditableActive &&
        (!editableInputRef || !editableInputRef.current || !editableInputRef.current.contains(event.target as Node)))
    ) {
      return;
    }
    if (isEditableActive && (key === 'Enter' || key === 'Tab')) {
      event.preventDefault();
      event.stopImmediatePropagation();
      if (editableInputRef.current.value) {
        onEditComplete && onEditComplete(event, editableInputRef.current.value);
      }
      setIsEditableActive(false);
      editableButtonRef?.current?.focus();
    }
    if (isEditableActive && key === 'Escape') {
      event.preventDefault();
      event.stopImmediatePropagation();
      // Reset div text to initial children prop - pre-edit
      if (editableInputRef.current.value) {
        editableInputRef.current.value = children as string;
        onEditCancel && onEditCancel(event, children as string);
      }
      setIsEditableActive(false);
      editableButtonRef?.current?.focus();
    }
    if (!isEditableActive && key === 'Enter') {
      event.preventDefault();
      event.stopImmediatePropagation();
      setIsEditableActive(true);

      // Set cursor position to end of text
      const el = event.target as HTMLElement;
      const range = document.createRange();
      const sel = window.getSelection();
      range.selectNodeContents(el);
      range.collapse(false);
      sel.removeAllRanges();
      sel.addRange(range);
    }
  };

  const isClickableDisabled = (href || onLabelClick) && isDisabled;

  const defaultCloseButton = (
    <Button
      type="button"
      variant="plain"
      hasNoPadding
      onClick={onClose}
      aria-label={closeBtnAriaLabel || `Close ${children}`}
      {...(isClickableDisabled && { isDisabled: true })}
      {...closeBtnProps}
      icon={<TimesIcon />}
    />
  );

  const closeButton = <span className={css(styles.labelActions)}>{closeBtn || defaultCloseButton}</span>;
  const textRef = React.createRef<any>();
  // ref to apply tooltip when rendered is used
  const componentRef = React.useRef();
  const [isTooltipVisible, setIsTooltipVisible] = React.useState(false);
  useIsomorphicLayoutEffect(() => {
    const currTextRef = isEditable ? editableButtonRef : textRef;
    if (!isEditableActive) {
      setIsTooltipVisible(currTextRef.current && currTextRef.current.offsetWidth < currTextRef.current.scrollWidth);
    }
  }, [isEditableActive]);
  const content = (
    <React.Fragment>
      {_icon && <span className={css(styles.labelIcon)}>{_icon}</span>}
      <span
        ref={textRef}
        className={css(styles.labelText)}
        {...(textMaxWidth && {
          style: {
            [cssTextMaxWidth.name]: textMaxWidth
          } as React.CSSProperties
        })}
      >
        {children}
      </span>
    </React.Fragment>
  );

  React.useEffect(() => {
    if (isEditableActive && editableInputRef) {
      editableInputRef.current && editableInputRef.current.focus();
    }
  }, [editableInputRef, isEditableActive]);

  const updateVal = () => {
    setCurrValue(editableInputRef.current.value);
  };

  let LabelComponentChildElement = 'span';
  if (href) {
    LabelComponentChildElement = 'a';
  } else if (isEditable || (onLabelClick && !isOverflowLabel && !isAddLabel)) {
    LabelComponentChildElement = 'button';
  }

  const clickableLabelProps = {
    type: 'button',
    onClick: onLabelClick
  };

  const isButton = LabelComponentChildElement === 'button';

  const labelComponentChildProps = {
    className: css(styles.labelContent, isClickable && styles.modifiers.clickable),
    ...(isTooltipVisible && { tabIndex: 0 }),
    ...(href && { href }),
    // Need to prevent onClick since aria-disabled won't prevent AT from triggering the link
    ...(href && isDisabled && { onClick: (event: MouseEvent) => event.preventDefault() }),
    ...(isButton && clickableLabelProps),
    ...(isEditable && {
      ref: editableButtonRef,
      onClick: (e: React.MouseEvent) => {
        setIsEditableActive(true);
        e.stopPropagation();
      },
      ...editableProps
    }),
    ...(isClickableDisabled && isButton && { disabled: true }),
    ...(isClickableDisabled && href && { tabIndex: -1, 'aria-disabled': true })
  };

  let labelComponentChild = (
    <LabelComponentChildElement {...labelComponentChildProps}>{content}</LabelComponentChildElement>
  );

  if (render) {
    labelComponentChild = (
      <React.Fragment>
        {isTooltipVisible && <Tooltip triggerRef={componentRef} content={children} position={tooltipPosition} />}
        {render({
          className: styles.labelContent,
          content,
          componentRef
        })}
      </React.Fragment>
    );
  } else if (isTooltipVisible) {
    labelComponentChild = (
      <Tooltip content={children} position={tooltipPosition}>
        {labelComponentChild}
      </Tooltip>
    );
  }

  const LabelComponent = (isOverflowLabel ? 'button' : 'span') as any;

  return (
    <LabelComponent
      {...props}
      className={css(
        styles.label,
        isClickableDisabled && styles.modifiers.disabled,
        colorStyles[color],
        variant === 'filled' && styles.modifiers.filled,
        variant === 'outline' && styles.modifiers.outline,
        status && styles.modifiers[status],
        isOverflowLabel && styles.modifiers.overflow,
        isCompact && styles.modifiers.compact,
        isEditable && labelGrpStyles.modifiers.editable,
        isEditableActive && styles.modifiers.editableActive,
        isClickable && styles.modifiers.clickable,
        isAddLabel && styles.modifiers.add,
        className
      )}
      onClick={isOverflowLabel || isAddLabel ? onLabelClick : undefined}
      {...(LabelComponent === 'button' && { type: 'button' })}
    >
      {!isEditableActive && labelComponentChild}
      {!isEditableActive && onClose && closeButton}
      {isEditableActive && (
        <input
          className={css(styles.labelContent)}
          type="text"
          id="editable-input"
          ref={editableInputRef}
          value={currValue}
          onChange={updateVal}
          {...editableProps}
        />
      )}
    </LabelComponent>
  );
};
Label.displayName = 'Label';
