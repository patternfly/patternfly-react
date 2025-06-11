import figma from '@figma/code-connect';
import {
  FileUpload,
  MultipleFileUpload,
  MultipleFileUploadMain,
  MultipleFileUploadStatus,
  MultipleFileUploadStatusItem
} from '@patternfly/react-core';

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

      state: figma.enum('State', {
        Default: 'default',
        'Drag over': 'drag-over',
        'Uploading + Collapsed': 'uploading---collapsed',
        'Uploaded + Collapsed': 'uploaded---collapsed',
        'Failed upload + Collapsed': 'failed-upload---collapsed',
        'Uploading + Expanded': 'uploading---expanded',
        'Uploaded + Expanded': 'uploaded---expanded',
        'Failed Upload + Expanded': 'failed-upload---expanded'
      }),

      statusIcons: ['inProgress', 'success', 'danger']
    },
    example: (props) => (
      // Documentation for FileUpload can be found at https://www.patternfly.org/components/file-upload
      <MultipleFileUpload onFileDrop={() => {}} isHorizontal={props.isHorizontal}>
        <MultipleFileUploadMain
          titleIcon={'<UploadIcon />'}
          titleText="Drag and drop files here"
          titleTextSeparator="or"
          infoText="Accepted file types: JPEG, Doc, PDF, PNG"
        />

        <MultipleFileUploadStatus
          statusToggleText={'${successfullyReadFileCount} of ${currentFiles.length} files uploaded'}
          statusToggleIcon={'statusIcon'}
          aria-label="Current uploads"
        >
          <MultipleFileUploadStatusItem
            file={file}
            key={file.name}
            onClearClick={() => {}}
            onReadSuccess={() => {}}
            onReadFail={() => {}}
            progressHelperText={'${file.name} is being read'}
          />
        </MultipleFileUploadStatus>
      </MultipleFileUpload>
    )
  }
);
