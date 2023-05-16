import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Table/table';
import { css } from '@patternfly/react-styles';

export interface CaptionProps {
  /** Content rendered inside the caption */
  children?: React.ReactNode;
  /** Additional classes added to the caption  */
  className?: string;
}

export const Caption: React.FunctionComponent<CaptionProps> = ({ children, className, ...props }: CaptionProps) => (
  <caption className={css(styles.tableCaption, className)} {...props}>
    {children}
  </caption>
);
Caption.displayName = 'Caption';
