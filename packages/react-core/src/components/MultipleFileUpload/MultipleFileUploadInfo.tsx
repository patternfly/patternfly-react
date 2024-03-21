import { HTMLProps, ReactNode, FunctionComponent } from 'react';
import styles from '@patternfly/react-styles/css/components/MultipleFileUpload/multiple-file-upload';
import { css } from '@patternfly/react-styles';

export interface MultipleFileUploadInfoProps extends HTMLProps<HTMLDivElement> {
  /** Content rendered inside multiple file upload info */
  children?: ReactNode;
  /** Class to add to outer div */
  className?: string;
}

export const MultipleFileUploadInfo: FunctionComponent<MultipleFileUploadInfoProps> = ({
  className,
  children,
  ...props
}: MultipleFileUploadInfoProps) => (
  <div className={css(styles.multipleFileUploadInfo, className)} {...props}>
    {children}
  </div>
);

MultipleFileUploadInfo.displayName = 'MultipleFileUploadInfo';
