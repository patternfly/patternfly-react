---
id: File upload - multiple
section: components
cssPrefix: pf-c-multiple-file-upload
propComponents:
  [
    'MultipleFileUpload',
    'MultipleFileUploadMain',
    'MultipleFileUploadTitle',
    'MultipleFileUploadTitleIcon',
    'MultipleFileUploadTitleText',
    'MultipleFileUploadTitleTextSeparator',
    'MultipleFileUploadButton',
    'MultipleFileUploadInfo',
    'MultipleFileUploadStatus',
    'MultipleFileUploadStatusItem',
  ]
beta: true
---

import InProgressIcon from '@patternfly/react-icons/dist/esm/icons/in-progress-icon';
import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';
import TimesCircleIcon from '@patternfly/react-icons/dist/esm/icons/times-circle-icon';

File upload - multiple is able to:

- accept one or more files via browse or drag-and-drop
- provide their data to you using file objects via the `onFileDrop` callback prop
- read files as dataURLs, calling provided callbacks as needed when files start/finish being read, as well as when the read succeeds or fails
- display (in real time) the upload progress/status of each file
  - uploaded files are represented by the `MultipleFileUploadStatusItem` component, this component includes the aforementioned built-in file reading logic
  - if you prefer to supply your own file reading logic and strictly use `MultipleFileUploadStatusItem` as a display component, the `customFileHandler`, `fileName`, `fileSize`, `progressValue`, and `progressVariant` props exist to allow you to do that

### General intended structure

File upload - multiple is designed in a composable manner to maximize flexibility. The general intended component relationships are arranged similarly to:

```js noLive
import {
  MultipleFileUpload,
  MultipleFileUploadInfo,
  MultipleFileUploadMain,
  MultipleFileUploadTitle,
  MultipleFileUploadTitleIcon,
  MultipleFileUploadTitleText,
  MultipleFileUploadTitleTextSeparator,
  MultipleFileUploadButton,
  MultipleFileUploadStatus,
  MultipleFileUploadStatusItem
} from '@patternfly/react-core';

<MultipleFileUpload>
  <MultipleFileUploadMain>
    <MultipleFileUploadTitle>
      <MultipleFileUploadTitleIcon />

      <MultipleFileUploadTitleText>
        main title text
        <MultipleFileUploadTitleTextSeparator>title text separator</MultipleFileUploadTitleTextSeparator>
      </MultipleFileUploadTitleText>
    </MultipleFileUploadTitle>

    <MultipleFileUploadButton />

    <MultipleFileUploadInfo>Accepted file types: x, y, z</MultipleFileUploadInfo>
  </MultipleFileUploadMain>

  <MultipleFileUploadStatus>
    <MultipleFileUploadStatusItem />
  </MultipleFileUploadStatus>
</MultipleFileUpload>
```

### Restricting file size and type

As with singular file upload, any [props accepted by react-dropzone's Dropzone component](https://react-dropzone.js.org/#!/Dropzone) can be passed as a dropzoneProps object in order to customize the behavior of the Dropzone, such as restricting the type of files allowed. The following examples will only accept the files they list as accepted. Note that file type determination is not reliable across platforms (see the note on react-dropzone's docs about the accept prop), so be sure to test the behavior of your file upload restriction on all browsers and operating systems targeted by your application.

#### IMPORTANT: A note about security

Restricting file sizes and types in this way is for user convenience only, and it cannot prevent a malicious user from submitting anything to your server. As with any user input, your application should also validate, sanitize and/or reject restricted files on the server side.

## Examples

### Basic

```ts file="./MultipleFileUploadBasic.tsx"
```

### Horizontal

```ts file="./MultipleFileUploadHorizontal.tsx"
```
