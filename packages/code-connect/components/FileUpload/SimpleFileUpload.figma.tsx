import figma from '@figma/code-connect';
import { FileUpload, FileUploadHelperText, HelperText, HelperTextItem } from '@patternfly/react-core';

// TODO: FIGMA: Add filename placeholder
// TODO: FIGMA: Add browse button text
// TODO: FIGMA: Add FileUploadHelperText

figma.connect(
  FileUpload,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=8949-96043&m=dev',
  {
    props: {
      // boolean
      showHelperText: figma.boolean('Show helper text'),
      hideDefaultPreview: figma.boolean('Show text preview box', {
        true: false,
        false: true
      }),
      helperText: figma.boolean('Show helper text', {
        true: (
          <FileUploadHelperText>
            <HelperText>
              <HelperTextItem id="helper-text-example-helpText">Upload a CSV file</HelperTextItem>
            </HelperText>
          </FileUploadHelperText>
        ),
        false: undefined
      }),

      // enum
      allowEditingUploadedText: figma.enum('State', { 'Uploaded + Editable': true }),
      isDragActive: figma.enum('State', {
        'Drag state': true,
        false: undefined
      }),
      isLoading: figma.enum('State', { 'In progress upload': true }),
      isValidated: figma.enum('State', {
        'Invalid upload': 'error',
        'Uploaded + Editable': 'success',
        'Uploaded + Not Editable': 'success'
      })
    },
    example: (props) => (
      // Documentation for FileUpload can be found at https://www.patternfly.org/components/file-upload
      <FileUpload
        id="file-upload-id"
        type="text"
        aria-label="File upload example"
        browseButtonText="Upload"
        isLoading={props.isLoading}
        validated={props.isValidated}
        isDragActive={props.isDragActive}
        hideDefaultPreview={props.hideDefaultPreview}
        allowEditingUploadedText={props.allowEditingUploadedText}
        onFileInputChange={() => {}}
        onDataChange={() => {}}
        onTextChange={() => {}}
        onReadStarted={() => {}}
        onReadFinished={() => {}}
        onClearClick={() => {}}
      >
        {props.helperText}
      </FileUpload>
    )
  }
);
