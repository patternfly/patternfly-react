import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import UploadIcon from '@patternfly/react-icons/dist/esm/icons/upload-icon';
const pageData = {
  "id": "File upload - multiple",
  "section": "components",
  "source": "react",
  "slug": "/components/file-upload---multiple/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/components/MultipleFileUpload/examples/MultipleFileUpload.md",
  "propComponents": [
    {
      "name": "MultipleFileUpload",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the multi upload field"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Class to add to outer div"
        },
        {
          "name": "dropzoneProps",
          "type": "DropzoneProps",
          "description": "Optional extra props to customize react-dropzone.",
          "defaultValue": "{}"
        },
        {
          "name": "isHorizontal",
          "type": "boolean",
          "description": "Flag setting the component to horizontal styling mode"
        },
        {
          "name": "onFileDrop",
          "type": "(data: File[]) => void",
          "description": "When files are dropped or uploaded this callback will be called with all accepted files",
          "defaultValue": "() => {}"
        }
      ]
    },
    {
      "name": "MultipleFileUploadMain",
      "description": "",
      "props": [
        {
          "name": "className",
          "type": "string",
          "description": "Class to add to outer div"
        },
        {
          "name": "infoText",
          "type": "React.ReactNode",
          "description": "Content rendered inside the info div"
        },
        {
          "name": "isUploadButtonHidden",
          "type": "boolean",
          "description": "Flag to prevent the upload button from being rendered"
        },
        {
          "name": "titleIcon",
          "type": "React.ReactNode",
          "description": "Content rendered inside the title icon div"
        },
        {
          "name": "titleText",
          "type": "React.ReactNode",
          "description": "Content rendered inside the title text div"
        },
        {
          "name": "titleTextSeparator",
          "type": "React.ReactNode",
          "description": "Content rendered inside the title text separator div"
        }
      ]
    },
    {
      "name": "MultipleFileUploadStatus",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside multi file upload status list"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Class to add to outer div"
        },
        {
          "name": "statusToggleIcon",
          "type": "'danger' | 'success' | 'inProgress' | React.ReactNode",
          "description": "Icon to show in the status toggle"
        },
        {
          "name": "statusToggleText",
          "type": "string",
          "description": "String to show in the status toggle"
        }
      ]
    },
    {
      "name": "MultipleFileUploadStatusItem",
      "description": "",
      "props": [
        {
          "name": "buttonAriaLabel",
          "type": "string",
          "description": "Adds accessibility text to the status item deletion button",
          "defaultValue": "'Remove from list'"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Class to add to outer div"
        },
        {
          "name": "customFileHandler",
          "type": "(file: File) => void",
          "description": "A callback to process file reading in a custom way"
        },
        {
          "name": "file",
          "type": "File",
          "description": "The file object being represented by the status item"
        },
        {
          "name": "fileIcon",
          "type": "React.ReactNode",
          "description": "A custom icon to show in place of the generic file icon"
        },
        {
          "name": "fileName",
          "type": "string",
          "description": "A custom name to display for the file rather than using built in functionality to auto-fill it"
        },
        {
          "name": "fileSize",
          "type": "number",
          "description": "A custom file size to display for the file rather than using built in functionality to auto-fill it"
        },
        {
          "name": "onClearClick",
          "type": "React.MouseEventHandler<HTMLButtonElement>",
          "description": "Clear button was clicked",
          "defaultValue": "() => {}"
        },
        {
          "name": "onReadFail",
          "type": "(error: DOMException, onReadFail: File) => void",
          "description": "A callback for when the FileReader API fails",
          "defaultValue": "() => {}"
        },
        {
          "name": "onReadFinished",
          "type": "(fileHandle: File) => void",
          "description": "A callback for when a selected file finishes loading",
          "defaultValue": "() => {}"
        },
        {
          "name": "onReadStarted",
          "type": "(fileHandle: File) => void",
          "description": "A callback for when a selected file starts loading",
          "defaultValue": "() => {}"
        },
        {
          "name": "onReadSuccess",
          "type": "(data: string, file: File) => void",
          "description": "A callback for when the FileReader successfully reads the file",
          "defaultValue": "() => {}"
        },
        {
          "name": "progressAriaLabel",
          "type": "string",
          "description": "Adds accessible text to the progress bar. Required when title not used and there is not any label associated with the progress bar"
        },
        {
          "name": "progressAriaLabelledBy",
          "type": "string",
          "description": "Associates the progress bar with it's label for accessibility purposes. Required when title not used"
        },
        {
          "name": "progressId",
          "type": "string",
          "description": "Unique identifier for progress. Generated if not specified."
        },
        {
          "name": "progressValue",
          "type": "number",
          "description": "A custom value to display for the progress component rather than using built in functionality to auto-fill it"
        },
        {
          "name": "progressVariant",
          "type": "'danger' | 'success' | 'warning'",
          "description": "A custom variant to apply to the progress component rather than using built in functionality to auto-fill it"
        }
      ]
    }
  ],
  "beta": true,
  "cssPrefix": [
    "pf-c-multiple-file-upload"
  ],
  "examples": [
    "Basic"
  ]
};
pageData.liveContext = {
  UploadIcon
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  MultipleFileUpload,\n  MultipleFileUploadMain,\n  MultipleFileUploadStatus,\n  MultipleFileUploadStatusItem,\n  Checkbox\n} from '@patternfly/react-core';\nimport UploadIcon from '@patternfly/react-icons/dist/esm/icons/upload-icon';\n\ninterface readFile {\n  fileName: string;\n  data?: string;\n  loadResult?: 'danger' | 'success';\n  loadError?: DOMException;\n}\n\nexport const MultipleFileUploadBasic: React.FunctionComponent = () => {\n  const [isHorizontal, setIsHorizontal] = React.useState(false);\n  const [currentFiles, setCurrentFiles] = React.useState<File[]>([]);\n  const [readFileData, setReadFileData] = React.useState<readFile[]>([]);\n  const [showStatus, setShowStatus] = React.useState(false);\n  const [statusIcon, setStatusIcon] = React.useState('inProgress');\n\n  // only show the status component once a file has been uploaded, but keep the status list component itself even if all files are removed\n  if (!showStatus && currentFiles.length > 0) {\n    setShowStatus(true);\n  }\n\n  // determine the icon that should be shown for the overall status list\n  React.useEffect(() => {\n    if (readFileData.length < currentFiles.length) {\n      setStatusIcon('inProgress');\n    } else if (readFileData.every(file => file.loadResult === 'success')) {\n      setStatusIcon('success');\n    } else {\n      setStatusIcon('danger');\n    }\n  }, [readFileData, currentFiles]);\n\n  // remove files from both state arrays based on their name\n  const removeFiles = (namesOfFilesToRemove: string[]) => {\n    const newCurrentFiles = currentFiles.filter(\n      currentFile => !namesOfFilesToRemove.some(fileName => fileName === currentFile.name)\n    );\n\n    setCurrentFiles(newCurrentFiles);\n\n    const newReadFiles = readFileData.filter(\n      readFile => !namesOfFilesToRemove.some(fileName => fileName === readFile.fileName)\n    );\n\n    setReadFileData(newReadFiles);\n  };\n\n  // callback that will be called by the react dropzone with the newly dropped file objects\n  const handleFileDrop = (droppedFiles: File[]) => {\n    // identify what, if any, files are re-uploads of already uploaded files\n    const currentFileNames = currentFiles.map(file => file.name);\n    const reUploads = droppedFiles.filter(droppedFile => currentFileNames.includes(droppedFile.name));\n\n    /** this promise chain is needed because if the file removal is done at the same time as the file adding react\n     * won't realize that the status items for the re-uploaded files needs to be re-rendered */\n    Promise.resolve()\n      .then(() => removeFiles(reUploads.map(file => file.name)))\n      .then(() => setCurrentFiles(prevFiles => [...prevFiles, ...droppedFiles]));\n  };\n\n  // callback called by the status item when a file is successfully read with the built-in file reader\n  const handleReadSuccess = (data: string, file: File) => {\n    setReadFileData(prevReadFiles => [...prevReadFiles, { data, fileName: file.name, loadResult: 'success' }]);\n  };\n\n  // callback called by the status item when a file encounters an error while being read with the built-in file reader\n  const handleReadFail = (error: DOMException, file: File) => {\n    setReadFileData(prevReadFiles => [\n      ...prevReadFiles,\n      { loadError: error, fileName: file.name, loadResult: 'danger' }\n    ]);\n  };\n\n  const successfullyReadFileCount = readFileData.filter(fileData => fileData.loadResult === 'success').length;\n\n  return (\n    <>\n      <MultipleFileUpload\n        onFileDrop={handleFileDrop}\n        dropzoneProps={{\n          accept: 'image/jpeg, application/msword, application/pdf, image/png'\n        }}\n        isHorizontal={isHorizontal}\n      >\n        <MultipleFileUploadMain\n          titleIcon={<UploadIcon />}\n          titleText=\"Drag and drop files here\"\n          titleTextSeparator=\"or\"\n          infoText=\"Accepted file types: JPEG, Doc, PDF, PNG\"\n        />\n        {showStatus && (\n          <MultipleFileUploadStatus\n            statusToggleText={`${successfullyReadFileCount} of ${currentFiles.length} files uploaded`}\n            statusToggleIcon={statusIcon}\n          >\n            {currentFiles.map(file => (\n              <MultipleFileUploadStatusItem\n                file={file}\n                key={file.name}\n                onClearClick={() => removeFiles([file.name])}\n                onReadSuccess={handleReadSuccess}\n                onReadFail={handleReadFail}\n              />\n            ))}\n          </MultipleFileUploadStatus>\n        )}\n      </MultipleFileUpload>\n      <Checkbox\n        id=\"horizontal-checkbox\"\n        label=\"Show as horizontal\"\n        isChecked={isHorizontal}\n        onChange={() => setIsHorizontal(!isHorizontal)}\n      />\n    </>\n  );\n};\n","title":"Basic","lang":"ts"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`File upload - multiple is able to:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Accept one or more files via browse or drag-and-drop`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Provide their data to you using file objects via the `}
        <code {...{"className":"ws-code"}}>
          {`onFileDrop`}
        </code>
        {` callback prop`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Read files as dataURLs, calling provided callbacks as needed when files start/finish being read, as well as when the read succeeds or fails`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Display (in real time) the upload progress/status of each file`}
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Uploaded files are represented by the multiple file upload status item component, this component includes the aforementioned built-in file reading logic`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`If you prefer to supply your own file reading logic and strictly use multiple file upload status item as a display component, the `}
            <code {...{"className":"ws-code"}}>
              {`customFileHandler`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`fileName`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`fileSize`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`progressValue`}
            </code>
            {`, and `}
            <code {...{"className":"ws-code"}}>
              {`progressVariant`}
            </code>
            {` props exist to allow you to do that`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"restricting-file-size-and-type","size":"h3","className":"ws-title ws-h3"}}>
      {`Restricting file size and type`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`As with singular file upload, any `}
      <PatternflyThemeLink {...{"to":"https://react-dropzone.js.org/#!/Dropzone"}}>
        {`props accepted by react-dropzone's Dropzone component`}
      </PatternflyThemeLink>
      {` can be passed as a dropzoneProps object in order to customize the behavior of the Dropzone, such as restricting the type of files allowed. The following examples will only accept the files they list as accepted. Note that file type determination is not reliable across platforms (see the note on react-dropzone's docs about the accept prop), so be sure to test the behavior of your file upload restriction on all browsers and operating systems targeted by your application.`}
    </p>
    <AutoLinkHeader {...{"id":"important-a-note-about-security","size":"h4","className":"ws-title ws-h4"}}>
      {`IMPORTANT: A note about security`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Restricting file sizes and types in this way is for user convenience only, and it cannot prevent a malicious user from submitting anything to your server. As with any user input, your application should also validate, sanitize and/or reject restricted files on the server side.`}
    </p>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsFileUpload-MultipleReactDocs';
Component.pageData = pageData;

export default Component;
