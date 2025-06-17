import figma from '@figma/code-connect';
import {
  FileUpload,
  MultipleFileUpload,
  MultipleFileUploadMain,
  MultipleFileUploadStatus,
  MultipleFileUploadStatusItem
} from '@patternfly/react-core';
import UploadIcon from '@patternfly/react-icons/dist/esm/icons/upload-icon';

// TODO: FIGMA: Add status toggle text
// TODO: FIGMA: Add status toggle icon
// TODO: FIGMA: Add text separator
// TODO: FIGMA: Add info text
// TODO: FIGMA: Add status toggle text
// TODO: FIGMA: Add status toggle icon

figma.connect(
  FileUpload,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=8949-96128&m=dev',
  {
    props: {
      isHorizontal: figma.enum('Layout', { Horizontal: true }),
      titleText: 'Drag and drop files here',
      titleTextSeparator: 'or',
      infoText: 'Accepted file types: JPEG, Doc, PDF, PNG',
      children: figma.children('*')
    },
    example: (props) => (
      // Documentation for FileUpload can be found at https://www.patternfly.org/components/file-upload
      <MultipleFileUpload
        isHorizontal={props.isHorizontal}
        onFileDrop={() => {}}
        dropzoneProps={{
          accept: {
            'image/jpeg': ['.jpg', '.jpeg'],
            'application/msword': ['.doc'],
            'application/pdf': ['.pdf'],
            'image/png': ['.png']
          }
        }}
      >
        <MultipleFileUploadMain
          titleIcon={<UploadIcon />}
          titleText={props.titleText}
          titleTextSeparator={props.titleTextSeparator}
          infoText={props.infoText}
        />

        <MultipleFileUploadStatus
          statusToggleText="Status toggle text"
          statusToggleIcon="StatusToggleIcon"
          aria-label="Current uploads"
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
