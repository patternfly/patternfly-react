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
  color?: 'blue' | 'cyan' | 'green' | 'orange' | 'purple' | 'red' | 'grey';
  variant?: 'outline' | 'filled';
  icon?: React.ReactNode;
  onClose?: (event: React.MouseEvent) => void;
  closeBtnAriaLabel?: string;
  closeBtnId?: string;
  closeBtnTextId?: string;
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
