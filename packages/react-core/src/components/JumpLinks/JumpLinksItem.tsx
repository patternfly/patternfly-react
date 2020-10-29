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
  node = href,
  children
}: JumpLinksItemProps) => {
  React.useEffect(() => {
    if (typeof node === 'string' && typeof document !== 'undefined') {
      node = document.querySelector(node) as HTMLElement;
    }
  }, [node]);

  return (
    <li className={css(styles.jumpLinksItem, isActive && styles.modifiers.current)}>
      <a className={styles.jumpLinksLink} href={href}>
        <span className={styles.jumpLinksLinkText}>{children}</span>
      </a>
    </li>
  );
};
JumpLinksItem.displayName = 'JumpLinksItem';
