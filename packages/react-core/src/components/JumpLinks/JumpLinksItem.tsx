import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/JumpLinks/jump-links';
import buttonStyles from '@patternfly/react-styles/css/components/Button/button';
import { JumpLinksList } from './JumpLinksList';

export interface JumpLinksItemProps extends Omit<React.HTMLProps<HTMLLIElement>, 'onClick'> {
  /** Whether this item is active. Parent JumpLinks component sets this when passed a `scrollableSelector`. */
  isActive?: boolean;
  /** Href for this link */
  href: string;
  /** Selector or HTMLElement to spy on */
  node?: string | HTMLElement;
  /** Text to be rendered inside span */
  children?: React.ReactNode;
  /** Click handler for anchor tag. Parent JumpLinks components tap into this. */
  onClick?: (ev: React.MouseEvent<HTMLAnchorElement>) => void;
  /** Class to add to li */
  className?: string;
}

export const JumpLinksItem: React.FunctionComponent<JumpLinksItemProps> = ({
  isActive,
  href,
  // eslint-disable-next-line
  node,
  children,
  onClick,
  className,
  ...props
}: JumpLinksItemProps) => {
  const childrenArr = React.Children.toArray(children) as any[];
  const sublists = childrenArr.filter((child) => child.type === JumpLinksList);
  children = childrenArr.filter((child) => child.type !== JumpLinksList);

  return (
    <li
      className={css(styles.jumpLinksItem, isActive && styles.modifiers.current, className)}
      {...(isActive && { 'aria-current': 'location' })}
      {...props}
    >
      <span className={styles.jumpLinksLink}>
        <a className={css(buttonStyles.button, buttonStyles.modifiers.link)} href={href} onClick={onClick}>
          <span className={styles.jumpLinksLinkText}>{children}</span>
        </a>
      </span>
      {sublists}
    </li>
  );
};
JumpLinksItem.displayName = 'JumpLinksItem';
