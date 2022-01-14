import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/MultipleFileUpload/multiple-file-upload';
import { css } from '@patternfly/react-styles';

interface MultipleFileUploadTitleProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside MultipleFileUploadTitle */
  children?: React.ReactNode;
  /** Class to add to outer div */
  className?: string;
}

export const MultipleFileUploadTitle: React.FunctionComponent<MultipleFileUploadTitleProps> = ({
  className,
  children,
  ...props
}: MultipleFileUploadTitleProps) => (
  <div className={css(styles.multipleFileUploadTitle, className)} {...props}>
    {children}
  </div>
);

MultipleFileUploadTitle.displayName = 'MultipleFileUploadTitle';
