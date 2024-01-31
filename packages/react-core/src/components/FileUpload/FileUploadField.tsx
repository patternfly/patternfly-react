import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/FileUpload/file-upload';
import { css } from '@patternfly/react-styles';
import { InputGroup, InputGroupItem } from '../InputGroup';
import { TextInput } from '../TextInput';
import { Button, ButtonVariant } from '../Button';
import { TextArea, TextAreResizeOrientation } from '../TextArea';
import { Spinner, spinnerSize } from '../Spinner';
import { fileReaderType } from '../../helpers/fileUtils';

/** A more customizable file upload component for implementing custom logic. Drag and drop
 * functionality is not built in by default.
 */

export interface FileUploadFieldProps extends Omit<React.HTMLProps<HTMLDivElement>, 'value'> {
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
  /** Additional classes added to the file upload field container element. */
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
  /** Name property for the text input. */
  name?: string;
  /** Flag to disable the clear button. */
  isClearButtonDisabled?: boolean;
  /** Flag to show if the field is disabled. */
  isDisabled?: boolean;
  /** Flag to show if a file is being loaded. */
  isLoading?: boolean;
  /** Flag to show if the field is read only. */
  isReadOnly?: boolean;
  /** Flag to show if the field is required. */
  isRequired?: boolean;
  /** Aria-valuetext for the loading spinner. */
  spinnerAriaValueText?: string;
  /** What type of file. Determines what is is expected by the value property (a string for
   * 'text' and 'dataURL', or a File object otherwise).
   */
  type?: 'text' | 'dataURL';
  /** Value to indicate if the field is modified to show that validation state.
   * If set to success, field will be modified to indicate valid state.
   * If set to error,  field will be modified to indicate error state.
   */
  validated?: 'success' | 'error' | 'default';
  /** Value of the file's contents (string if text file, File object otherwise). */
  value?: string | File;

  // Props available in FileUploadField but not FileUpload:

  /** A reference object to attach to the file upload field container element. */
  containerRef?: React.Ref<HTMLDivElement>;
  /** Flag to show if a file is being dragged over the file upload field. */
  isDragActive?: boolean;
  /** A callback for when the browse button is clicked. */
  onBrowseButtonClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  /** A callback for when the clear button is clicked. */
  onClearButtonClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  /** Callback for when focus is lost on the text area field. */
  onTextAreaBlur?: (event?: any) => void;
  /** A callback for when the text area is clicked. Can also be set via the onClick property
   * of the file upload component. */
  onTextAreaClick?: (event: React.MouseEvent<HTMLTextAreaElement, MouseEvent>) => void;
  /** Text area text changed. */
  onTextChange?: (event: React.ChangeEvent<HTMLTextAreaElement>, text: string) => void;
  /** Placeholder string to display in the empty text area field. */
  textAreaPlaceholder?: string;
}

export const FileUploadField: React.FunctionComponent<FileUploadFieldProps> = ({
  id,
  name,
  type,
  value = '',
  filename = '',
  onBrowseButtonClick = () => {},
  onClearButtonClick = () => {},
  onTextAreaClick,
  onTextChange,
  onTextAreaBlur,
  textAreaPlaceholder = '',
  className = '',
  isDisabled = false,
  isReadOnly = false,
  isLoading = false,
  spinnerAriaValueText,
  isRequired = false,
  isDragActive = false,
  validated = 'default' as 'success' | 'error' | 'default',
  'aria-label': ariaLabel = 'File upload',
  filenamePlaceholder = 'Drag a file here or browse to upload',
  filenameAriaLabel = filename ? 'Read only filename' : filenamePlaceholder,
  browseButtonText = 'Browse...',
  browseButtonAriaDescribedby,
  clearButtonText = 'Clear',
  isClearButtonDisabled = !filename && !value,
  containerRef = null as React.Ref<HTMLDivElement>,
  allowEditingUploadedText = false,
  hideDefaultPreview = false,
  children = null,

  ...props
}: FileUploadFieldProps) => {
  const onTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>, newValue: string) => {
    onTextChange?.(event, newValue);
  };
  return (
    <div
      className={css(
        styles.fileUpload,
        isDragActive && styles.modifiers.dragHover,
        isLoading && styles.modifiers.loading,
        className
      )}
      ref={containerRef}
      {...props}
    >
      <div className={styles.fileUploadFileSelect}>
        <InputGroup>
          <InputGroupItem isFill>
            <TextInput
              readOnlyVariant="default" // Always read-only regardless of isReadOnly prop (which is just for the TextArea)
              isDisabled={isDisabled}
              id={`${id}-filename`}
              name={name || `${id}-filename`}
              aria-label={filenameAriaLabel}
              placeholder={filenamePlaceholder}
              value={filename}
            />
          </InputGroupItem>
          <InputGroupItem>
            <Button
              variant={ButtonVariant.control}
              onClick={onBrowseButtonClick}
              isDisabled={isDisabled}
              aria-describedby={browseButtonAriaDescribedby}
            >
              {browseButtonText}
            </Button>
          </InputGroupItem>
          <InputGroupItem>
            <Button
              variant={ButtonVariant.control}
              isDisabled={isDisabled || isClearButtonDisabled}
              onClick={onClearButtonClick}
            >
              {clearButtonText}
            </Button>
          </InputGroupItem>
        </InputGroup>
      </div>
      <div className={styles.fileUploadFileDetails}>
        {!hideDefaultPreview && type === fileReaderType.text && (
          <TextArea
            readOnly={isReadOnly || (!!filename && !allowEditingUploadedText)}
            disabled={isDisabled}
            isRequired={isRequired}
            resizeOrientation={TextAreResizeOrientation.vertical}
            validated={validated}
            id={id}
            aria-label={ariaLabel}
            value={value as string}
            onChange={onTextAreaChange}
            onClick={onTextAreaClick}
            onBlur={onTextAreaBlur}
            placeholder={textAreaPlaceholder}
          />
        )}
        {isLoading && (
          <div className={styles.fileUploadFileDetailsSpinner}>
            <Spinner size={spinnerSize.lg} aria-valuetext={spinnerAriaValueText} />
          </div>
        )}
      </div>
      {children}
    </div>
  );
};
FileUploadField.displayName = 'FileUploadField';
