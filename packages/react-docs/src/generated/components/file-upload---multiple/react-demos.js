import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import UploadIcon from '@patternfly/react-icons/dist/esm/icons/upload-icon';
const pageData = {
  "id": "File upload - multiple",
  "section": "components",
  "source": "react-demos",
  "slug": "/components/file-upload---multiple/react-demos",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/demos/MultipleFileUploadDemos.md",
  "beta": true,
  "examples": [
    "Rejected file handling"
  ]
};
pageData.liveContext = {
  UploadIcon
};
pageData.examples = {
  'Rejected file handling': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  MultipleFileUpload,\n  MultipleFileUploadMain,\n  MultipleFileUploadStatus,\n  MultipleFileUploadStatusItem,\n  Modal,\n  Checkbox\n} from '@patternfly/react-core';\nimport UploadIcon from '@patternfly/react-icons/dist/esm/icons/upload-icon';\n\ninterface readFile {\n  fileName: string;\n  data?: string;\n  loadResult?: 'danger' | 'success';\n  loadError?: DOMException;\n}\n\nexport const MultipleFileUploadBasic: React.FunctionComponent = () => {\n  const [isHorizontal, setIsHorizontal] = React.useState(false);\n  const [currentFiles, setCurrentFiles] = React.useState<File[]>([]);\n  const [readFileData, setReadFileData] = React.useState<readFile[]>([]);\n  const [showStatus, setShowStatus] = React.useState(false);\n  const [statusIcon, setStatusIcon] = React.useState('inProgress');\n  const [modalText, setModalText] = React.useState('');\n\n  // only show the status component once a file has been uploaded, but keep the status list component itself even if all files are removed\n  if (!showStatus && currentFiles.length > 0) {\n    setShowStatus(true);\n  }\n\n  // determine the icon that should be shown for the overall status list\n  React.useEffect(() => {\n    if (readFileData.length < currentFiles.length) {\n      setStatusIcon('inProgress');\n    } else if (readFileData.every(file => file.loadResult === 'success')) {\n      setStatusIcon('success');\n    } else {\n      setStatusIcon('danger');\n    }\n  }, [readFileData, currentFiles]);\n\n  // remove files from both state arrays based on their name\n  const removeFiles = (namesOfFilesToRemove: string[]) => {\n    const newCurrentFiles = currentFiles.filter(\n      currentFile => !namesOfFilesToRemove.some(fileName => fileName === currentFile.name)\n    );\n\n    setCurrentFiles(newCurrentFiles);\n\n    const newReadFiles = readFileData.filter(\n      readFile => !namesOfFilesToRemove.some(fileName => fileName === readFile.fileName)\n    );\n\n    setReadFileData(newReadFiles);\n  };\n\n  // callback that will be called by the react dropzone with the newly dropped file objects\n  const handleFileDrop = (droppedFiles: File[]) => {\n    // identify what, if any, files are re-uploads of already uploaded files\n    const currentFileNames = currentFiles.map(file => file.name);\n    const reUploads = droppedFiles.filter(droppedFile => currentFileNames.includes(droppedFile.name));\n\n    /** this promise chain is needed because if the file removal is done at the same time as the file adding react\n     * won't realize that the status items for the re-uploaded files needs to be re-rendered */\n    Promise.resolve()\n      .then(() => removeFiles(reUploads.map(file => file.name)))\n      .then(() => setCurrentFiles(prevFiles => [...prevFiles, ...droppedFiles]));\n  };\n\n  // callback called by the status item when a file is successfully read with the built-in file reader\n  const handleReadSuccess = (data: string, file: File) => {\n    setReadFileData(prevReadFiles => [...prevReadFiles, { data, fileName: file.name, loadResult: 'success' }]);\n  };\n\n  // callback called by the status item when a file encounters an error while being read with the built-in file reader\n  const handleReadFail = (error: DOMException, file: File) => {\n    setReadFileData(prevReadFiles => [\n      ...prevReadFiles,\n      { loadError: error, fileName: file.name, loadResult: 'danger' }\n    ]);\n  };\n\n  // dropzone prop that communicates to the user that files they've attempted to upload are not an appropriate type\n  const handleDropRejected = (files: File[], _event: React.DragEvent<HTMLElement>) => {\n    if (files.length === 1) {\n      setModalText(`${files[0].name} is not an accepted file type`);\n    } else {\n      const rejectedMessages = files.reduce((acc, file) => (acc += `${file.name}, `), '');\n      setModalText(`${rejectedMessages}are not accepted file types`);\n    }\n  };\n\n  const successfullyReadFileCount = readFileData.filter(fileData => fileData.loadResult === 'success').length;\n\n  return (\n    <>\n      <MultipleFileUpload\n        onFileDrop={handleFileDrop}\n        dropzoneProps={{\n          accept: 'image/jpeg, application/msword, application/pdf, image/png',\n          onDropRejected: handleDropRejected\n        }}\n        isHorizontal={isHorizontal}\n      >\n        <MultipleFileUploadMain\n          titleIcon={<UploadIcon />}\n          titleText=\"Drag and drop files here\"\n          titleTextSeparator=\"or\"\n          infoText=\"Accepted file types: JPEG, Doc, PDF, PNG\"\n        />\n        {showStatus && (\n          <MultipleFileUploadStatus\n            statusToggleText={`${successfullyReadFileCount} of ${currentFiles.length} files uploaded`}\n            statusToggleIcon={statusIcon}\n          >\n            {currentFiles.map(file => (\n              <MultipleFileUploadStatusItem\n                file={file}\n                key={file.name}\n                onClearClick={() => removeFiles([file.name])}\n                onReadSuccess={handleReadSuccess}\n                onReadFail={handleReadFail}\n              />\n            ))}\n          </MultipleFileUploadStatus>\n        )}\n        <Modal\n          isOpen={!!modalText}\n          title=\"Unsupported file\"\n          titleIconVariant=\"warning\"\n          showClose\n          aria-label=\"unsupported file upload attempted\"\n          onClose={() => setModalText('')}\n        >\n          {modalText}\n        </Modal>\n      </MultipleFileUpload>\n      <Checkbox\n        id=\"horizontal-checkbox\"\n        label=\"Show as horizontal\"\n        isChecked={isHorizontal}\n        onChange={() => setIsHorizontal(!isHorizontal)}\n      />\n    </>\n  );\n};\n","title":"Rejected file handling","lang":"ts"}}>
      
      <p {...{"className":"ws-p"}}>
        {`This demo shows how to add a modal to alert users that the file(s) they attempted to drop was of a non-acceptable type.`}
      </p>
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"demos","size":"h2","className":"ws-title ws-h2"}}>
      {`Demos`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Rejected file handling"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsFileUpload-MultipleReactDemosDocs';
Component.pageData = pageData;

export default Component;
