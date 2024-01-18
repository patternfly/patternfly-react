import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/FileUpload/file-upload';
import { css } from '@patternfly/react-styles';

/** A container for helper text content. This sub-component should be passed as a child to
 * the main file upload or file upload field component.
 */

export interface FileUploadHelperTextProps extends React.HTMLProps<HTMLDivElement> {
  /** Content to render inside the file upload helper text container. Typically this will be
   * the helper text component.
   */
  children: React.ReactNode;
  /** Additional classes added to the file upload helper text container element. */
  className?: string;
}

export const FileUploadHelperText: React.FunctionComponent<FileUploadHelperTextProps> = ({
  children,
  className,
  ...props
}: FileUploadHelperTextProps) => (
  <div className={css(`${styles.fileUpload}__helper-text`, className)} {...props}>
    {children}
  </div>
);
FileUploadHelperText.displayName = 'FileUploadHelperText';
