import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Label/label';
import { Button } from '../Button';
import { css } from '@patternfly/react-styles';
import TimesIcon from '@patternfly/react-icons/dist/js/icons/times-icon';
import { LabelText } from './LabelText';
import { LabelIcon } from './LabelIcon';

export interface LabelProps extends React.HTMLProps<HTMLSpanElement> {
  /** Content rendered inside the label. */
  children?: React.ReactNode;
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
  /**
   * This prop supports React Router. You must use the LabelIcon and LabelText in the router link for proper styling.
   * isTruncated, href and children props do not apply when customContent is used.
   * Example usage:
   *   customContent={<Link to="/">
   *     <LabelIcon><InfoCircleIcon /></LabelIcon>
   *     <LabelText isTruncated>router link<LabelText/>
   *   </Link>}
   */
  customContent?: React.ReactNode;
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
  customContent,
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
      {customContent ? (
        <>{customContent}</>
      ) : (
        <Component className={css(styles.labelContent)} {...(href && { href })}>
          {icon && <LabelIcon>{icon}</LabelIcon>}
          <LabelText isTruncated={isTruncated}>{children}</LabelText>
        </Component>
      )}
      {onClose && button}
    </LabelComponent>
  );
};
Label.displayName = 'Label';
