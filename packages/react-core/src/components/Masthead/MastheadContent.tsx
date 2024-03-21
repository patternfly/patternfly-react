import { HTMLProps, DetailedHTMLProps, ReactNode, FunctionComponent } from 'react';
import styles from '@patternfly/react-styles/css/components/Masthead/masthead';
import { css } from '@patternfly/react-styles';

export interface MastheadContentProps extends DetailedHTMLProps<HTMLProps<HTMLDivElement>, HTMLDivElement> {
  /** Content rendered inside of the masthead content block. */
  children?: ReactNode;
  /** Additional classes added to the masthead content. */
  className?: string;
}

export const MastheadContent: FunctionComponent<MastheadContentProps> = ({
  children,
  className,
  ...props
}: MastheadContentProps) => (
  <div className={css(styles.mastheadContent, className)} {...props}>
    {children}
  </div>
);
MastheadContent.displayName = 'MastheadContent';
