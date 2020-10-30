import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/JumpLinks/jump-links';

export interface JumpLinksItemProps extends React.HTMLProps<HTMLLIElement> {
  items?: HTMLElement[];
  isActive?: boolean;
  href?: string;
  node?: string | HTMLElement;
  /** Text to be rendered inside span */
  children?: React.ReactNode;
}

export const JumpLinksItem: React.FunctionComponent<JumpLinksItemProps> = ({
  isActive,
  href,
  children
}: JumpLinksItemProps) => (
  <li className={css(styles.jumpLinksItem, isActive && styles.modifiers.current)}>
    <a className={styles.jumpLinksLink} href={href} onClick={onClick}>
      <span className={styles.jumpLinksLinkText}>{children}</span>
    </a>
  </li>
);
JumpLinksItem.displayName = 'JumpLinksItem';
