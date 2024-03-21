import { HTMLProps, ReactNode, FunctionComponent } from 'react';
import styles from '@patternfly/react-styles/css/components/ClipboardCopy/clipboard-copy';
import { css } from '@patternfly/react-styles';

export interface ClipboardCopyActionProps extends HTMLProps<HTMLLIElement> {
  /** Content rendered inside the clipboard copy action. */
  children?: ReactNode;
  /** Additional classes added to the clipboard copy action. */
  className?: string;
}

export const ClipboardCopyAction: FunctionComponent<ClipboardCopyActionProps> = ({
  children = null,
  className = '',
  ...props
}: ClipboardCopyActionProps) => (
  <span className={css(styles.clipboardCopyActionsItem, className)} {...props}>
    {children}
  </span>
);
ClipboardCopyAction.displayName = 'ClipboardCopyAction';
