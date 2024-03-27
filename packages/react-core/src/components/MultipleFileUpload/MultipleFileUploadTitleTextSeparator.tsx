import { HTMLProps, ReactNode, FunctionComponent } from 'react';
import styles from '@patternfly/react-styles/css/components/MultipleFileUpload/multiple-file-upload';
import { css } from '@patternfly/react-styles';

export interface MultipleFileUploadTitleTextSeparatorProps extends HTMLProps<HTMLDivElement> {
  /** Content rendered inside multiple file upload title text separator */
  children?: ReactNode;
  /** Class to add to outer div */
  className?: string;
}

export const MultipleFileUploadTitleTextSeparator: FunctionComponent<MultipleFileUploadTitleTextSeparatorProps> = ({
  className,
  children,
  ...props
}: MultipleFileUploadTitleTextSeparatorProps) => (
  <div className={css(styles.multipleFileUploadTitleTextSeparator, className)} {...props}>
    {children}
  </div>
);

MultipleFileUploadTitleTextSeparator.displayName = 'MultipleFileUploadTitleTextSeparator';
