import { HTMLProps, ReactNode, FunctionComponent } from 'react';
import styles from '@patternfly/react-styles/css/components/MultipleFileUpload/multiple-file-upload';
import { css } from '@patternfly/react-styles';

export interface MultipleFileUploadTitleTextProps extends HTMLProps<HTMLDivElement> {
  /** Content rendered inside multiple file upload title text */
  children?: ReactNode;
  /** Class to add to outer div */
  className?: string;
}

export const MultipleFileUploadTitleText: FunctionComponent<MultipleFileUploadTitleTextProps> = ({
  className,
  children,
  ...props
}: MultipleFileUploadTitleTextProps) => (
  <div className={css(styles.multipleFileUploadTitleText, className)} {...props}>
    {children}
  </div>
);

MultipleFileUploadTitleText.displayName = 'MultipleFileUploadTitleText';
