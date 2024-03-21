import { ReactNode, FunctionComponent } from 'react';
import styles from '@patternfly/react-styles/css/components/Table/table';
import { css } from '@patternfly/react-styles';

export interface CaptionProps {
  /** Content rendered inside the caption */
  children?: ReactNode;
  /** Additional classes added to the caption  */
  className?: string;
}

export const Caption: FunctionComponent<CaptionProps> = ({ children, className, ...props }: CaptionProps) => (
  <caption className={css(styles.tableCaption, className)} {...props}>
    {children}
  </caption>
);
Caption.displayName = 'Caption';
