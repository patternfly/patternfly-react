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
  /** Icon added to the left of the label text. */
  icon?: React.ReactNode;
  /** Close click callback for removable labels. If present, label will have a close button. */
  onClose?: (event: React.MouseEvent) => void;
  /** Aria label of the close button. */
  closeBtnAriaLabel?: string;
  /** Id of the close button. */
  closeBtnId?: string;
  /** Text id of the text within the label for the close button aria-labelledby field. */
  closeBtnTextId?: string;
  /** Href for a label that is a link. If present, the label will change to an anchor element. */
  href?: string;
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
  icon,
  onClose,
  closeBtnAriaLabel,
  closeBtnId,
  closeBtnTextId,
  href,
  ...props
}: LabelProps) => {
  const Component = href ? 'a' : 'span';
  const closeBtn = (
    <Button
      type="button"
      variant="plain"
      onClick={onClose}
      aria-label={closeBtnAriaLabel}
      id={closeBtnId}
      aria-labelledby={`${closeBtnId} ${closeBtnTextId}`}
    >
      <TimesIcon />
    </Button>
  );

  return (
    <span
      {...props}
      className={css(styles.label, colorStyles[color], variant === 'outline' && styles.modifiers.outline, className)}
    >
      <Component className={css(styles.labelContent)} {...(href && { href })}>
        {icon && <span className={css(styles.labelIcon)}>{icon}</span>}
        {children}
      </Component>
      {onClose && closeBtn}
    </span>
  );
};
