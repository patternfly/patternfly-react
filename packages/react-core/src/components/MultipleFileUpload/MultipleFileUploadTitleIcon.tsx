import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/MultipleFileUpload/multiple-file-upload';
import { css } from '@patternfly/react-styles';
import UploadIcon from '@patternfly/react-icons/dist/esm/icons/upload-icon';

export interface MultipleFileUploadTitleIconProps extends React.HTMLProps<HTMLDivElement> {
  /** Class to add to outer div */
  className?: string;
}

export const MultipleFileUploadTitleIcon: React.FunctionComponent<MultipleFileUploadTitleIconProps> = ({
  className,
  ...props
}: MultipleFileUploadTitleIconProps) => (
  <div className={css(styles.multipleFileUploadTitleIcon, className)} {...props}>
    <UploadIcon />
  </div>
);

MultipleFileUploadTitleIcon.displayName = 'MultipleFileUploadTitleIcon';
