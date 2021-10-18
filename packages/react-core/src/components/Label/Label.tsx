import * as React from 'react';
import { useState } from 'react';
import styles from '@patternfly/react-styles/css/components/Label/label';
import labelGrpStyles from '@patternfly/react-styles/css/components/LabelGroup/label-group';
import inlineEditStyles from '@patternfly/react-styles/css/components/InlineEdit/inline-edit';
import { Button } from '../Button';
import { Tooltip } from '../Tooltip';
import { css } from '@patternfly/react-styles';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';
import { useIsomorphicLayoutEffect } from '../../helpers';

export interface LabelProps extends React.HTMLProps<HTMLSpanElement> {
  /** Content rendered inside the label. */
  children?: React.ReactNode;
  /** Additional classes added to the label. */
  className?: string;
  /** Color of the label. */
  color?: 'blue' | 'cyan' | 'green' | 'orange' | 'purple' | 'red' | 'grey';
  /** Variant of the label. */
  variant?: 'outline' | 'filled';
  /** Flag indicating the label is compact. */
  isCompact?: boolean;
  /** @beta Flag indicating the label is editable. */
  isEditable?: boolean;
  /** @beta Additional props passed to the editable label text div. Optionally passing onInput and onBlur callbacks will allow finer custom text input control. */
  editableProps?: any;
  /** @beta Callback when an editable label completes an edit. */
  onEditComplete?: (newText: string) => void;
  /** @beta Callback when an editable label cancels an edit. */
  onEditCancel?: (previousText: string) => void;
  /** Flag indicating the label text should be truncated. */
  isTruncated?: boolean;
  /** Position of the tooltip which is displayed if text is truncated */
  tooltipPosition?: 'auto' | 'top' | 'bottom' | 'left' | 'right';
  /** Icon added to the left of the label text. */
  icon?: React.ReactNode;
  /** Close click callback for removable labels. If present, label will have a close button. */
  onClose?: (event: React.MouseEvent) => void;
  /** Node for custom close button. */
  closeBtn?: React.ReactNode;
  /** Aria label for close button */
  closeBtnAriaLabel?: string;
  /** Additional properties for the default close button. */
  closeBtnProps?: any;
  /** Href for a label that is a link. If present, the label will change to an anchor element. */
  href?: string;
  /** Flag indicating if the label is an overflow label */
  isOverflowLabel?: boolean;
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
  cyan: styles.modifiers.cyan,
  green: styles.modifiers.green,
  orange: styles.modifiers.orange,
  purple: styles.modifiers.purple,
  red: styles.modifiers.red,
  grey: ''
};

export const Label: React.FunctionComponent<LabelProps> = ({
  children,
  className = '',
  color = 'grey',
  variant = 'filled',
  isCompact = false,
  isEditable = false,
  editableProps,
  isTruncated = false,
  tooltipPosition,
  icon,
  onClose,
  onEditCancel,
  onEditComplete,
  closeBtn,
  closeBtnAriaLabel,
  closeBtnProps,
  href,
  isOverflowLabel,
  render,
  ...props
}: LabelProps) => {
  const [isEditableActive, setIsEditableActive] = useState(false);
  const editableDivRef = React.createRef<HTMLButtonElement>();
  const editableInputRef = React.createRef<HTMLInputElement>();

  React.useEffect(() => {
    document.addEventListener('click', onDocClick);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('click', onDocClick);
      document.removeEventListener('keydown', onKeyDown);
    };
  });

  const onDocClick = (event: MouseEvent) => {
    if (
      isEditableActive &&
      editableInputRef &&
      editableInputRef.current &&
      !editableInputRef.current.contains(event.target as Node)
    ) {
      if (editableInputRef.current.value) {
        onEditComplete && onEditComplete(editableInputRef.current.value);
      }
      setIsEditableActive(false);
    }
  };

  const onKeyDown = (event: KeyboardEvent) => {
    const key = event.key;
    if (
      (!isEditableActive &&
        (!editableDivRef || !editableDivRef.current || !editableDivRef.current.contains(event.target as Node))) ||
      (isEditableActive &&
        (!editableInputRef || !editableInputRef.current || !editableInputRef.current.contains(event.target as Node)))
    ) {
      return;
    }
    if (isEditableActive && (key === 'Enter' || key === 'Tab')) {
      event.preventDefault();
      event.stopImmediatePropagation();
      if (editableInputRef.current.value) {
        onEditComplete && onEditComplete(editableInputRef.current.value); // for some reason this isn't getting passed, how to get this to save
      }
      setIsEditableActive(false);
    }
    if (isEditableActive && key === 'Escape') {
      event.preventDefault();
      event.stopImmediatePropagation();
      // Reset div text to initial children prop - pre-edit
      if (editableInputRef.current.value) {
        editableInputRef.current.value = children as string;
        onEditCancel && onEditCancel(children as string);
      }
      setIsEditableActive(false);
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

  const LabelComponent = (isOverflowLabel ? 'button' : 'span') as any;
  const Component = href ? 'a' : 'span';
  const button = closeBtn ? (
    closeBtn
  ) : (
    <Button
      type="button"
      variant="plain"
      onClick={onClose}
      aria-label={closeBtnAriaLabel || `Close ${children}`}
      {...closeBtnProps}
    >
      <TimesIcon />
    </Button>
  );
  const textRef = React.createRef<any>();
  // ref to apply tooltip when rendered is used
  const componentRef = React.useRef();
  const [isTooltipVisible, setIsTooltipVisible] = React.useState(false);
  useIsomorphicLayoutEffect(() => {
    setIsTooltipVisible(textRef.current && textRef.current.offsetWidth < textRef.current.scrollWidth);
  }, []);
  let content = (
    <React.Fragment>
      {icon && <span className={css(styles.labelIcon)}>{icon}</span>}
      {isTruncated && (
        <span ref={textRef} className={css(styles.labelText)}>
          {children}
        </span>
      )}
      {!isTruncated && children}
    </React.Fragment>
  );

  const onEditClick = (event: any, isEditableActive: boolean) => {
    if (!isEditableActive) {
      setIsEditableActive(true);
    }
    return;
  };

  React.useEffect(() => {
    if (isEditableActive && editableInputRef) {
      editableInputRef.current && editableInputRef.current.focus();
    }
    return;
  });

  const [currValue] = useState(children);

  if (isEditable) {
    content = (
      <React.Fragment>
        <div className={css(inlineEditStyles.inlineEdit)}>
          {!isEditableActive && (
            <button
              ref={editableDivRef}
              className={css(inlineEditStyles.inlineEditEditableText)}
              onClick={event => onEditClick(event, isEditableActive)}
              currvalue={currValue}
              {...isEditableActive}
              {...editableProps}
            >
              {children}
            </button>
          )}
          {isEditableActive && (
            <input
              type="text"
              id="editable-input"
              ref={editableInputRef}
              defaultValue={currValue}
              {...isEditableActive}
              {...editableProps}
            ></input>
          )}
        </div>
      </React.Fragment>
    );
  }

  let labelComponentChild = (
    <Component className={css(styles.labelContent)} {...(href && { href })}>
      {content}
    </Component>
  );

  if (render) {
    labelComponentChild = (
      <React.Fragment>
        {isTooltipVisible && <Tooltip reference={componentRef} content={children} position={tooltipPosition} />}
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
        <Component className={css(styles.labelContent)} {...(href && { href })}>
          {content}
        </Component>
      </Tooltip>
    );
  }

  return (
    <LabelComponent
      {...props}
      className={css(
        styles.label,
        colorStyles[color],
        variant === 'outline' && styles.modifiers.outline,
        isOverflowLabel && styles.modifiers.overflow,
        isCompact && styles.modifiers.compact,
        isEditable && labelGrpStyles.modifiers.editable,
        isEditableActive && styles.modifiers.editableActive,
        className
      )}
      {...(isEditable && {
        onClick: (evt: MouseEvent) => {
          const isEvtFromButton = (evt.target as HTMLElement).closest('button');
          if (isEvtFromButton !== null) {
            return;
          }
          setIsEditableActive(true);
        }
      })}
    >
      {labelComponentChild}
      {onClose && button}
    </LabelComponent>
  );
};
Label.displayName = 'Label';
