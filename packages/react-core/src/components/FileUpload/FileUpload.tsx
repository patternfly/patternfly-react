import * as React from 'react';
import { DropzoneInputProps, DropzoneOptions, FileRejection, useDropzone, ErrorCode } from 'react-dropzone';
import { FileUploadField, FileUploadFieldProps } from './FileUploadField';
import { readFile, fileReaderType } from '../../helpers/fileUtils';
import { DropEvent } from '../../helpers/typeUtils';
import { fromEvent } from 'file-selector';

export interface FileUploadProps
  extends Omit<
    FileUploadFieldProps,
    'children' | 'onBrowseButtonClick' | 'onClearButtonClick' | 'isDragActive' | 'containerRef'
  > {
  /** Flag to allow editing of a text file's contents after it is selected from disk. */
  allowEditingUploadedText?: boolean;
  /** Aria-label for the text area. */
  'aria-label'?: string;
  /** Text for the browse button. */
  browseButtonText?: string;
  /** ID or ID's of elements that describe the browse button. Typically this should refer
   * to elements such as helper text when there are file restrictions.
   */
  browseButtonAriaDescribedby?: string;
  /** Additional children to render after (or instead of) the file preview. */
  children?: React.ReactNode;
  /** Additional classes added to the file upload container element. */
  className?: string;
  /** Text for the clear button. */
  clearButtonText?: string;
  /** Value to be shown in the read-only filename field. */
  filename?: string;
  /** Aria-label for the read-only filename field. */
  filenameAriaLabel?: string;
  /** Placeholder string to display in the empty filename field. */
  filenamePlaceholder?: string;
  /** Flag to hide the built-in preview of the file (where available). If true, you can use
   * the children property to render an alternate preview.
   */
  hideDefaultPreview?: boolean;
  /** Unique id for the text area. Also used to generate ids for accessible labels. */
  id: string;
  /** Flag to show if the field is disabled. */
  isDisabled?: boolean;
  /** Flag to show if a file is being loaded. */
  isLoading?: boolean;
  /** Flag to show if the field is read only. */
  isReadOnly?: boolean;
  /** Flag to show if the field is required. */
  isRequired?: boolean;
  /** Callback for clicking on the file upload field text area. By default, prevents a click
   * in the text area from opening file dialog.
   */
  onClick?: (event: React.MouseEvent) => void;
  /** Change event emitted from the hidden \<input type="file" \> field associated with the component  */
  onFileInputChange?: (event: DropEvent, file: File) => void;
  /** Aria-valuetext for the loading spinner. */
  spinnerAriaValueText?: string;
  /** What type of file. Determines whether 'onDataChange` is called and what is
   * expected by the value property (a string for 'text' and 'dataURL', or a File object otherwise.
   */
  type?: 'text' | 'dataURL';
  /** Value to indicate if the field is modified to show that validation state.
   * If set to success, field will be modified to indicate valid state.
   * If set to error, field will be modified to indicate error state.
   */
  validated?: 'success' | 'error' | 'default';
  /** Value of the file's contents (string if text file, File object otherwise). */
  value?: string | File;

  // Props available in FileUpload but not FileUploadField:

  /** Optional extra props to customize react-dropzone. */
  dropzoneProps?: Partial<DropzoneOptions>;
  /** Clear button was clicked. */
  onClearClick?: React.MouseEventHandler<HTMLButtonElement>;
  /** On data changed - if type='text' or type='dataURL' and file was loaded it will call this method */
  onDataChange?: (event: DropEvent, data: string) => void;
  /** A callback for when the FileReader API fails. */
  onReadFailed?: (event: DropEvent, error: DOMException, fileHandle: File) => void;
  /** A callback for when a selected file finishes loading. */
  onReadFinished?: (event: DropEvent, fileHandle: File) => void;
  /** A callback for when a selected file starts loading. */
  onReadStarted?: (event: DropEvent, fileHandle: File) => void;
  /** Text area text changed. */
  onTextChange?: (event: React.ChangeEvent<HTMLTextAreaElement>, text: string) => void;
}

export { ErrorCode as DropzoneErrorCode }; // FileInvalidType, FileTooLarge, FileTooSmall, TooManyFiles

export const FileUpload: React.FunctionComponent<FileUploadProps> = ({
  id,
  type,
  value = type === fileReaderType.text || type === fileReaderType.dataURL ? '' : null,
  filename = '',
  children = null,
  onFileInputChange = null,
  onReadStarted = () => {},
  onReadFinished = () => {},
  onReadFailed = () => {},
  onClearClick,
  onClick = (event) => event.preventDefault(),
  onTextChange,
  onDataChange,
  dropzoneProps = {},
  ...props
}: FileUploadProps) => {
  const onDropAccepted = (acceptedFiles: File[], event: DropEvent) => {
    if (acceptedFiles.length > 0) {
      const fileHandle = acceptedFiles[0];
      onFileInputChange?.(event, fileHandle);

      if (type === fileReaderType.text || type === fileReaderType.dataURL) {
        onReadStarted(event, fileHandle);
        readFile(fileHandle, type as fileReaderType)
          .then((data) => {
            onReadFinished(event, fileHandle);
            onDataChange?.(event, data as string);
          })
          .catch((error: DOMException) => {
            onReadFailed(event, error, fileHandle);
            onReadFinished(event, fileHandle);
            onDataChange?.(event, '');
          });
      }
    }
    dropzoneProps.onDropAccepted && dropzoneProps.onDropAccepted(acceptedFiles, event);
  };

  const onDropRejected = (rejectedFiles: FileRejection[], event: DropEvent) => {
    dropzoneProps.onDropRejected && dropzoneProps.onDropRejected(rejectedFiles, event);
  };

  const onClearButtonClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onClearClick?.(event);
    setFileValue(null);
  };

  const { getRootProps, getInputProps, isDragActive, open, inputRef } = useDropzone({
    noClick: true,
    multiple: false,
    ...dropzoneProps,
    onDropAccepted,
    onDropRejected
  });

  const setFileValue = (filename: string) => {
    inputRef.current.value = filename;
  };

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

  const rootProps = getRootProps({
    ...props,
    tabIndex: null, // Omit the unwanted tabIndex from react-dropzone's getRootProps
    id,
    type,
    filename,
    value,
    isDragActive,
    onBrowseButtonClick: open,
    onClearButtonClick,
    onTextAreaClick: onClick,
    onTextChange,
    onClick,
    refKey: 'containerRef'
  });

  return (
    <FileUploadField {...rootProps}>
      <input
        /* hidden, necessary for react-dropzone */
        {...inputProps}
      />
      {children}
    </FileUploadField>
  );
};
FileUpload.displayName = 'FileUpload';
