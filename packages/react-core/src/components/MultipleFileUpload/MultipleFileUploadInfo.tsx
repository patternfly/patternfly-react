import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/MultipleFileUpload/multiple-file-upload';
import { css } from '@patternfly/react-styles';

interface MultipleFileUploadInfoProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside MultipleFileUploadInfo */
  children?: React.ReactNode;
  /** Class to add to outer div */
  className?: string;
}

export const MultipleFileUploadInfo: React.FunctionComponent<MultipleFileUploadInfoProps> = ({
  className,
  children,
  ...props
}: MultipleFileUploadInfoProps) => (
  <div className={css(styles.multipleFileUploadInfo, className)} {...props}>
    {children}
  </div>
);

MultipleFileUploadInfo.displayName = 'MultipleFileUploadInfo';
