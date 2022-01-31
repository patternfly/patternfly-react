import * as React from 'react';
import Dropzone, { DropzoneProps, DropzoneInputProps } from 'react-dropzone';
import { fromEvent } from 'file-selector';
import styles from '@patternfly/react-styles/css/components/MultipleFileUpload/multiple-file-upload';
import { css } from '@patternfly/react-styles';

interface DropzoneInputPropsWithRef extends DropzoneInputProps {
  ref: React.RefCallback<HTMLInputElement>; // Working around an issue in react-dropzone 9.0.0's types. Should not be necessary in later versions.
}

interface MultipleFileUploadProps extends Omit<React.HTMLProps<HTMLDivElement>, 'value'> {
  /** Content rendered inside MultipleFileUpload */
  children?: React.ReactNode;
  /** Class to add to outer div */
  className?: string;
  /** Optional extra props to customize react-dropzone. */
  dropzoneProps?: DropzoneProps;
  /** Value of the file's contents */
  currentFiles?: File[];

  isHorizontal?: boolean;
  /** Change event emitted from the hidden \<input type="file" \> field associated with the component  */
  onFileInputChange?: (event: React.ChangeEvent<HTMLInputElement> | React.DragEvent<HTMLElement>, file: File) => void;
  /** On data changed - if type='text' or type='dataURL' and file was loaded it will call this method */
  onDataChange?: (data: File[]) => void;
}

export const MultipleFileUploadContext = React.createContext({
  open: () => {}
});

export const MultipleFileUpload: React.FunctionComponent<MultipleFileUploadProps> = ({
  className,
  children,
  dropzoneProps = {},
  isHorizontal,
  onFileInputChange,
  onDataChange,
  currentFiles,
  ...props
}: MultipleFileUploadProps) => {
  // helper functions to prevent duplicate file uploading
  const identicalFile = (existingFile: File, newFile: File) =>
    existingFile.name === newFile.name &&
    existingFile.size === newFile.size &&
    existingFile.lastModified === newFile.lastModified;
  const isUnique = (newFile: File) => !currentFiles.some(currentFile => identicalFile(currentFile, newFile));

  const onDropAccepted = (newFiles: File[]) => {
    const uniqueNewFiles = newFiles.filter(newFile => isUnique(newFile));

    onDataChange([...currentFiles, ...uniqueNewFiles]);
  };

  const onDropRejected = () => {};

  const fileInputRef = React.useRef<HTMLInputElement>();

  return (
    <Dropzone multiple={true} {...dropzoneProps} onDropAccepted={onDropAccepted} onDropRejected={onDropRejected}>
      {({ getRootProps, getInputProps, isDragActive, open }) => {
        const rootProps = getRootProps({
          ...props,
          onClick: event => event.preventDefault() // Prevents clicking TextArea from opening file dialog
        });

        const oldInputProps = getInputProps();
        const inputProps: DropzoneInputProps = {
          ...oldInputProps,
          onChange: async (e: React.ChangeEvent<HTMLInputElement>) => {
            oldInputProps.onChange?.(e);
            const files = await fromEvent(e.nativeEvent);
            if (files.length === 1) {
              onFileInputChange?.(e, files[0] as File);
            }
          }
        };

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
                {...inputProps}
                ref={input => {
                  fileInputRef.current = input;
                  (inputProps as DropzoneInputPropsWithRef).ref(input);
                }}
              />
              {children}
            </div>
          </MultipleFileUploadContext.Provider>
        );
      }}
    </Dropzone>
  );
};

MultipleFileUpload.displayName = 'MultipleFileUpload';
