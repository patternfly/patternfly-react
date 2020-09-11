import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Label/label';
import { Button } from '../Button';
import { css } from '@patternfly/react-styles';
import TimesIcon from '@patternfly/react-icons/dist/js/icons/times-icon';

export interface LabelProps extends React.HTMLProps<HTMLSpanElement> {
  /** Content rendered inside the label. */
  children: React.ReactNode;
  /** Additional classes added to the label. */
  className?: string;
  /** Color of the label. */
  color?: 'blue' | 'cyan' | 'green' | 'orange' | 'purple' | 'red' | 'grey';
  /** Variant of the label. */
  variant?: 'outline' | 'filled';
  /** Flag indicating the label text should be truncated. */
  isTruncated?: boolean;
  /** Icon added to the left of the label text. */
  icon?: React.ReactNode;
  /** Close click callback for removable labels. If present, label will have a close button. */
  onClose?: (event: React.MouseEvent) => void;
  /** Node for custom close button. */
  closeBtn?: React.ReactNode;
  /** Additional properties for the default close button. */
  closeBtnProps?: any;
  /** Href for a label that is a link. If present, the label will change to an anchor element. */
  href?: string;
  /** Flag indicating if the label is an overflow label */
  isOverflowLabel?: boolean;
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
  isTruncated = false,
  icon,
  onClose,
  closeBtn,
  closeBtnProps,
  href,
  isOverflowLabel,
  ...props
}: LabelProps) => {
  const LabelComponent = (isOverflowLabel ? 'button' : 'span') as any;
  const Component = href ? 'a' : 'span';
  const button = closeBtn ? (
    closeBtn
  ) : (
    <Button
      type="button"
      variant="plain"
      onClick={onClose}
      {...{ 'aria-label': 'label-close-button', ...closeBtnProps }}
    >
      <TimesIcon />
    </Button>
  );

  return (
    <LabelComponent
      {...props}
      className={css(
        styles.label,
        colorStyles[color],
        variant === 'outline' && styles.modifiers.outline,
        isOverflowLabel && styles.modifiers.overflow,
        className
      )}
    >
      <Component className={css(styles.labelContent)} {...(href && { href })}>
        {icon && <span className={css(styles.labelIcon)}>{icon}</span>}
        {isTruncated && <span className={css(styles.labelText)}>{children}</span>}
        {!isTruncated && children}
      </Component>
      {onClose && button}
    </LabelComponent>
  );
};
Label.displayName = 'Label';
