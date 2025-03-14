import { useState } from 'react';
import { FileUploadField, FileUploadHelperText, HelperText, HelperTextItem, Checkbox } from '@patternfly/react-core';

export const CustomPreviewFileUpload: React.FunctionComponent = () => {
  const properties = [
    'filename',
    'isBrowseButtonDisabled',
    'isClearButtonDisabled',
    'isDragActive',
    'isLoading',
    'hideDefaultPreview',
    'hasCustomFilePreview',
    'hasHelperText',
    'hasPlaceholderText'
  ];

  const [value, setValue] = useState('');
  const [filename, setFilename] = useState(false);
  const [isBrowseButtonDisabled, setIsBrowseButtonDisabled] = useState(true);
  const [isClearButtonDisabled, setIsClearButtonDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isDragActive, setIsDragActive] = useState(false);
  const [hideDefaultPreview, setHideDefaultPreview] = useState(false);
  const [hasCustomFilePreview, setHasCustomFilePreview] = useState(false);
  const [hasHelperText, setHasHelperText] = useState(false);
  const [hasPlaceholderText, setHasPlaceholderText] = useState(false);
  const [checkedState, setCheckedState] = useState([
    filename,
    isBrowseButtonDisabled,
    isClearButtonDisabled,
    isLoading,
    isDragActive,
    hideDefaultPreview,
    hasCustomFilePreview,
    hasHelperText,
    hasPlaceholderText
  ]);

  const handleTextAreaChange = (_event: React.ChangeEvent<HTMLTextAreaElement>, value: string) => {
    setValue(value);
  };

  const handleOnChange = (checked: boolean, stateKey: string, index: number) => {
    const updatedCheckedState = [...checkedState];
    switch (stateKey) {
      case 'filename':
        checked ? setFilename(true) : setFilename(false);
        break;

      case 'isBrowseButtonDisabled':
        checked ? setIsBrowseButtonDisabled(true) : setIsBrowseButtonDisabled(false);
        break;

      case 'isClearButtonDisabled':
        checked ? setIsClearButtonDisabled(true) : setIsClearButtonDisabled(false);
        break;

      case 'isDragActive':
        checked ? setIsDragActive(true) : setIsDragActive(false);
        break;

      case 'isLoading':
        checked ? setIsLoading(true) : setIsLoading(false);
        // See notes above this example
        if (checked) {
          updatedCheckedState[properties.indexOf('hideDefaultPreview')] = false;
          setHideDefaultPreview(false);
        }
        break;

      case 'hideDefaultPreview':
        checked ? setHideDefaultPreview(true) : setHideDefaultPreview(false);
        // See notes above this example
        if (checked) {
          updatedCheckedState[properties.indexOf('isLoading')] = false;
          setIsLoading(false);
        }
        break;

      case 'hasCustomFilePreview':
        checked ? setHasCustomFilePreview(true) : setHasCustomFilePreview(false);
        break;

      case 'hasHelperText':
        checked ? setHasHelperText(true) : setHasHelperText(false);
        break;

      case 'hasPlaceholderText':
        checked ? setHasPlaceholderText(true) : setHasPlaceholderText(false);
        break;
    }
    updatedCheckedState[index] = checked;
    setCheckedState(updatedCheckedState);
  };

  return (
    <div>
      {properties.map((stateKey, index) => (
        <Checkbox
          name={stateKey}
          key={stateKey}
          id={stateKey}
          label={stateKey}
          aria-label={stateKey}
          isChecked={checkedState[index]}
          onChange={(_event, checked) => handleOnChange(checked, stateKey, index)}
        />
      ))}
      <br />
      <FileUploadField
        id="custom-file-upload-example"
        type="text"
        value={value}
        filename={filename ? 'example-filename.txt' : ''}
        onTextChange={handleTextAreaChange}
        filenamePlaceholder="Do something custom with this!"
        onBrowseButtonClick={() => alert('Browse button clicked!')}
        onClearButtonClick={() => alert('Clear button clicked!')}
        isBrowseButtonDisabled={isBrowseButtonDisabled}
        isClearButtonDisabled={isClearButtonDisabled}
        isLoading={isLoading}
        isDragActive={isDragActive}
        hideDefaultPreview={hideDefaultPreview}
        browseButtonText="Upload"
        browseButtonAriaDescribedby={hasHelperText ? 'custom-upload-helpText' : undefined}
        textAreaPlaceholder={hasPlaceholderText ? 'File preview' : ''}
      >
        {hasCustomFilePreview && <div>(A custom preview of the uploaded file can be passed as children)</div>}
        {hasHelperText && (
          <FileUploadHelperText>
            <HelperText>
              <HelperTextItem id="custom-upload-helpText">Upload a CSV file</HelperTextItem>
            </HelperText>
          </FileUploadHelperText>
        )}
      </FileUploadField>
    </div>
  );
};
