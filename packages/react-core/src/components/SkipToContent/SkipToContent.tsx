import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/SkipToContent/skip-to-content';
import { css } from '@patternfly/react-styles';
import { Button, ButtonVariant } from '../Button';

export interface SkipToContentProps extends React.HTMLProps<HTMLDivElement> {
  /** The skip to content link. */
  href: string;
  /** Content to display within the skip to content component, typically a string. */
  children?: React.ReactNode;
  /** Additional styles to apply to the skip to content component. */
  className?: string;
}

export const SkipToContent: React.FunctionComponent<SkipToContentProps> = ({
  children = null,
  className = '',
  href,
  ...props
}: SkipToContentProps) => (
  <div className={css(styles.skipToContent, className)} {...props}>
    <Button variant={ButtonVariant.primary} component="a" href={href}>
      {children}
    </Button>
  </div>
);

SkipToContent.displayName = 'SkipToContent';
