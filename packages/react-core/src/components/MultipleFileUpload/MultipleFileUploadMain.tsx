import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/MultipleFileUpload/multiple-file-upload';
import { css } from '@patternfly/react-styles';

export interface MultipleFileUploadMainProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside multiple file upload main */
  children?: React.ReactNode;
  /** Class to add to outer div */
  className?: string;
}

export const MultipleFileUploadMain: React.FunctionComponent<MultipleFileUploadMainProps> = ({
  className,
  children,
  ...props
}: MultipleFileUploadMainProps) => (
  <div className={css(styles.multipleFileUploadMain, className)} {...props}>
    {children}
  </div>
);

MultipleFileUploadMain.displayName = 'MultipleFileUploadMain';
