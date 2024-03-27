import { HTMLProps, ReactNode, FunctionComponent } from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/JumpLinks/jump-links';

export interface JumpLinksListProps extends HTMLProps<HTMLUListElement> {
  /** Text to be rendered inside span */
  children?: ReactNode;
  /** Classname to add to ul. */
  className?: string;
}

export const JumpLinksList: FunctionComponent<JumpLinksListProps> = ({
  children,
  className,
  ...props
}: JumpLinksListProps) => (
  <ul className={css(styles.jumpLinksList, className)} role="list" {...props}>
    {children}
  </ul>
);
JumpLinksList.displayName = 'JumpLinksList';
