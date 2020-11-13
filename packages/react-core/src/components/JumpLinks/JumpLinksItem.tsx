import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/JumpLinks/jump-links';

export interface JumpLinksItemProps extends Omit<React.HTMLProps<HTMLLIElement>, 'onClick'> {
  /** Whether this item is active. Parent JumpLinks component sets this when passed a `scrollableSelector`. */
  isActive?: boolean;
  /** Href for this link */
  href?: string;
  /** Selector or HTMLElement to spy on */
  node?: string | HTMLElement;
  /** Text to be rendered inside span */
  children?: React.ReactNode;
  /** Click handler for anchor tag. Parent JumpLinks components tap into this. */
  onClick?: (ev: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const JumpLinksItem: React.FunctionComponent<JumpLinksItemProps> = ({
  isActive,
  href,
  children,
  onClick,
  ...props
}: JumpLinksItemProps) => (
  <li className={css(styles.jumpLinksItem, isActive && styles.modifiers.current)} {...props}>
    <a className={styles.jumpLinksLink} href={href} onClick={onClick}>
      <span className={styles.jumpLinksLinkText}>{children}</span>
    </a>
  </li>
);
JumpLinksItem.displayName = 'JumpLinksItem';
