import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/MultipleFileUpload/multiple-file-upload';
import { css } from '@patternfly/react-styles';

interface MultipleFileUploadTitleIconProps extends React.HTMLProps<HTMLDivElement> {
  /** Class to add to outer div */
  className?: string;
}

export const MultipleFileUploadTitleIcon: React.FunctionComponent<MultipleFileUploadTitleIconProps> = ({
  className,
  ...props
}: MultipleFileUploadTitleIconProps) => (
  <div className={css(styles.multipleFileUploadTitleIcon, className)} {...props}>
    <i className="fas fa-upload" aria-hidden="true"></i>
  </div>
);

MultipleFileUploadTitleIcon.displayName = 'MultipleFileUploadTitleIcon';
