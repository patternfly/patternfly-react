import * as React from 'react';
import { DropzoneOptions, useDropzone } from 'react-dropzone';
import { DropEvent } from '../../helpers/typeUtils';
import styles from '@patternfly/react-styles/css/components/MultipleFileUpload/multiple-file-upload';
import { css } from '@patternfly/react-styles';

/** Acts as a container for all other MultipleFileUpload sub-components. This sub-component
 * also provides the functionality for file uploads, and access to the uploaded files via
 * a callback.
 */

export interface MultipleFileUploadProps extends Omit<React.HTMLProps<HTMLDivElement>, 'value'> {
  /** Content rendered inside the multi upload field */
  children?: React.ReactNode;
  /** Class to add to outer div */
  className?: string;
  /** Optional extra props to customize react-dropzone. */
  dropzoneProps?: DropzoneOptions;
  /** Flag setting the component to horizontal styling mode */
  isHorizontal?: boolean;
  /** When files are dropped or uploaded this callback will be called with all accepted files */
  onFileDrop?: (event: DropEvent, data: File[]) => void;
}

export const MultipleFileUploadContext = React.createContext({
  open: () => {}
});

export const MultipleFileUpload: React.FunctionComponent<MultipleFileUploadProps> = ({
  className,
  children,
  dropzoneProps = {},
  isHorizontal,
  onFileDrop = () => {},
  ...props
}: MultipleFileUploadProps) => {
  const onDropAccepted = (acceptedFiles: File[], event: DropEvent) => {
    onFileDrop(event, acceptedFiles);
    // allow users to set a custom drop accepted handler rather than using on data change
    dropzoneProps.onDropAccepted && dropzoneProps.onDropAccepted(acceptedFiles, event);
  };

  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    multiple: true,
    ...dropzoneProps,
    onDropAccepted
  });

  const rootProps = getRootProps({
    ...props,
    onClick: (event) => event.stopPropagation() // Prevents clicking TextArea from opening file dialog
  });

  return (
    <MultipleFileUploadContext.Provider value={{ open }}>
      <div
        className={css(
          styles.multipleFileUpload,
          isDragActive && styles.modifiers.dragOver,
          isHorizontal && styles.modifiers.horizontal,
          className
        )}
        {...rootProps}
        {...props}
      >
        <input
          /* hidden, necessary for react-dropzone */
          {...getInputProps()}
        />
        {children}
      </div>
    </MultipleFileUploadContext.Provider>
  );
};

MultipleFileUpload.displayName = 'MultipleFileUpload';
