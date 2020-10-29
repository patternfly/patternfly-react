import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/JumpLinks/jump-links';

export interface JumpLinksProps {
  'aria-label'?: string;
  isCentered?: boolean;
  isVertical?: boolean;
  children?: React.ReactNode;
  label?: React.ReactNode;
}

export const JumpLinks: React.FunctionComponent<JumpLinksProps> = ({
  isCentered,
  isVertical,
  children,
  label,
  'aria-label': ariaLabel = typeof label === 'string' ? label : null
}: JumpLinksProps) => {
  const ul = <ul className={styles.jumpLinksList}>{children}</ul>;

  return (
    <nav
      className={css(styles.jumpLinks, isCentered && styles.modifiers.center, isVertical && styles.modifiers.vertical)}
      aria-label={ariaLabel}
    >
      {label ? (
        <div className={styles.jumpLinksMain}>
          <div className={styles.jumpLinksLabel}>{label}</div>
          {ul}
        </div>
      ) : (
        ul
      )}
    </nav>
  );
};
JumpLinks.displayName = 'JumpLinks';
