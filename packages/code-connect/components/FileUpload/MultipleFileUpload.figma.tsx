import figma from '@figma/code-connect';
import {
  FileUpload,
  MultipleFileUpload,
  MultipleFileUploadMain,
  MultipleFileUploadStatus,
  MultipleFileUploadStatusItem
} from '@patternfly/react-core';
import UploadIcon from '@patternfly/react-icons/dist/esm/icons/upload-icon';

// TODO: DESIGN: Add status toggle text
// TODO: DESIGN: Add status toggle icon
// TODO: DESIGN: Add text separator
// TODO: DESIGN: Add info text
// TODO: DESIGN: Add status toggle text
// TODO: DESIGN: Add status toggle icon

figma.connect(
  FileUpload,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=8949-96128',
  {
    props: {
      // static
      titleText: 'Drag and drop files here',
      titleTextSeparator: 'or',
      infoText: 'Accepted file types: JPEG, Doc, PDF, PNG',

      // enum
      isHorizontal: figma.enum('Layout', { Horizontal: true }),

      children: figma.children('*')
    },
    example: (props) => (
      // Documentation for FileUpload can be found at https://www.patternfly.org/components/file-upload
      <MultipleFileUpload
        dropzoneProps={{
          accept: {
            'image/jpeg': ['.jpg', '.jpeg'],
            'application/msword': ['.doc'],
            'application/pdf': ['.pdf'],
            'image/png': ['.png']
          }
        }}
        isHorizontal={props.isHorizontal}
        onFileDrop={() => {}}
      >
        <MultipleFileUploadMain
          infoText={props.infoText}
          titleIcon={<UploadIcon />}
          titleText={props.titleText}
          titleTextSeparator={props.titleTextSeparator}
        />

        <MultipleFileUploadStatus
          aria-label="Current uploads"
          statusToggleIcon="StatusToggleIcon"
          statusToggleText="Status toggle text"
        >
          <MultipleFileUploadStatusItem
            file="file-upload-file"
            key="file-upload-key"
            onClearClick={() => {}}
            onReadSuccess={() => {}}
            onReadFail={() => {}}
          />
        </MultipleFileUploadStatus>
      </MultipleFileUpload>
    )
  }
);
