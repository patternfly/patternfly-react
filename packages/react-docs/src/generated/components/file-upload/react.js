import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import FileUploadIcon from '@patternfly/react-icons/dist/esm/icons/file-upload-icon';
const pageData = {
  "id": "File upload",
  "section": "components",
  "source": "react",
  "slug": "/components/file-upload/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/components/FileUpload/examples/FileUpload.md",
  "propComponents": [
    {
      "name": "FileUpload",
      "description": "",
      "props": [
        {
          "name": "allowEditingUploadedText",
          "type": "boolean",
          "description": "Flag to allow editing of a text file's contents after it is selected from disk"
        },
        {
          "name": "aria-label",
          "type": "string",
          "description": "Aria-label for the TextArea."
        },
        {
          "name": "browseButtonText",
          "type": "string",
          "description": "Text for the Browse button"
        },
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Additional children to render after (or instead of) the file preview.",
          "defaultValue": "null"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the FileUpload container element."
        },
        {
          "name": "clearButtonText",
          "type": "string",
          "description": "Text for the Clear button"
        },
        {
          "name": "dropzoneProps",
          "type": "DropzoneProps",
          "description": "Optional extra props to customize react-dropzone.",
          "defaultValue": "{}"
        },
        {
          "name": "filename",
          "type": "string",
          "description": "Value to be shown in the read-only filename field.",
          "defaultValue": "''"
        },
        {
          "name": "filenameAriaLabel",
          "type": "string",
          "description": "Aria-label for the read-only filename field"
        },
        {
          "name": "filenamePlaceholder",
          "type": "string",
          "description": "Placeholder string to display in the empty filename field"
        },
        {
          "name": "hideDefaultPreview",
          "type": "boolean",
          "description": "Flag to hide the built-in preview of the file (where available).\nIf true, you can use children to render an alternate preview."
        },
        {
          "name": "id",
          "type": "string",
          "description": "Unique id for the TextArea, also used to generate ids for accessible labels.",
          "required": true
        },
        {
          "name": "isDisabled",
          "type": "boolean",
          "description": "Flag to show if the field is disabled."
        },
        {
          "name": "isLoading",
          "type": "boolean",
          "description": "Flag to show if a file is being loaded."
        },
        {
          "name": "isReadOnly",
          "type": "boolean",
          "description": "Flag to show if the field is read only."
        },
        {
          "name": "isRequired",
          "type": "boolean",
          "description": "Flag to show if the field is required."
        },
        {
          "name": "onChange",
          "type": "(\n  value: string | File,\n  filename: string,\n  event:\n    | React.MouseEvent<HTMLButtonElement, MouseEvent> // Clear button was clicked\n    | React.DragEvent<HTMLElement> // User dragged/dropped a file\n    | React.ChangeEvent<HTMLElement> // User typed in the TextArea\n) => void",
          "description": "A callback for when the file contents change. Please instead use onFileInputChange, onTextChange, onDataChange, onClearClick individually.",
          "defaultValue": "() => {}",
          "deprecated": true
        },
        {
          "name": "onClearClick",
          "type": "React.MouseEventHandler<HTMLButtonElement>",
          "description": "Clear button was clicked"
        },
        {
          "name": "onClick",
          "type": "(event: React.MouseEvent) => void",
          "description": "Callback for clicking on the FileUploadField text area. By default, prevents a click in the text area from opening file dialog.",
          "defaultValue": "event => event.preventDefault()"
        },
        {
          "name": "onDataChange",
          "type": "(data: string) => void",
          "description": "On data changed - if type='text' or type='dataURL' and file was loaded it will call this method"
        },
        {
          "name": "onFileInputChange",
          "type": "(event: React.ChangeEvent<HTMLInputElement> | React.DragEvent<HTMLElement>, file: File) => void",
          "description": "Change event emitted from the hidden \\<input type=\"file\" \\> field associated with the component",
          "defaultValue": "null"
        },
        {
          "name": "onReadFailed",
          "type": "(error: DOMException, fileHandle: File) => void",
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
          "name": "onTextChange",
          "type": "(text: string) => void",
          "description": "Text area text changed"
        },
        {
          "name": "spinnerAriaValueText",
          "type": "string",
          "description": "Aria-valuetext for the loading spinner"
        },
        {
          "name": "type",
          "type": "'text' | 'dataURL'",
          "description": "What type of file. Determines what is is passed to `onChange` and expected by `value`\n(a string for 'text' and 'dataURL', or a File object otherwise."
        },
        {
          "name": "validated",
          "type": "'success' | 'error' | 'default'",
          "description": "Value to indicate if the field is modified to show that validation state.\nIf set to success, field will be modified to indicate valid state.\nIf set to error,  field will be modified to indicate error state."
        },
        {
          "name": "value",
          "type": "string | File",
          "description": "Value of the file's contents\n(string if text file, File object otherwise)",
          "defaultValue": "type === fileReaderType.text || type === fileReaderType.dataURL ? '' : null"
        }
      ]
    },
    {
      "name": "FileUploadField",
      "description": "",
      "props": [
        {
          "name": "allowEditingUploadedText",
          "type": "boolean",
          "description": "Flag to allow editing of a text file's contents after it is selected from disk",
          "defaultValue": "false"
        },
        {
          "name": "aria-label",
          "type": "string",
          "description": "Aria-label for the TextArea.",
          "defaultValue": "'File upload'"
        },
        {
          "name": "browseButtonText",
          "type": "string",
          "description": "Text for the Browse button",
          "defaultValue": "'Browse...'"
        },
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Additional children to render after (or instead of) the file preview.",
          "defaultValue": "null"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the FileUploadField container element.",
          "defaultValue": "''"
        },
        {
          "name": "clearButtonText",
          "type": "string",
          "description": "Text for the Clear button",
          "defaultValue": "'Clear'"
        },
        {
          "name": "containerRef",
          "type": "React.Ref<HTMLDivElement>",
          "description": "A reference object to attach to the FileUploadField container element.",
          "defaultValue": "null"
        },
        {
          "name": "filename",
          "type": "string",
          "description": "Value to be shown in the read-only filename field.",
          "defaultValue": "''"
        },
        {
          "name": "filenameAriaLabel",
          "type": "string",
          "description": "Aria-label for the read-only filename field",
          "defaultValue": "filename ? 'Read only filename' : filenamePlaceholder"
        },
        {
          "name": "filenamePlaceholder",
          "type": "string",
          "description": "Placeholder string to display in the empty filename field",
          "defaultValue": "'Drag a file here or browse to upload'"
        },
        {
          "name": "hideDefaultPreview",
          "type": "boolean",
          "description": "Flag to hide the built-in preview of the file (where available).\nIf true, you can use children to render an alternate preview.",
          "defaultValue": "false"
        },
        {
          "name": "id",
          "type": "string",
          "description": "Unique id for the TextArea, also used to generate ids for accessible labels",
          "required": true
        },
        {
          "name": "isClearButtonDisabled",
          "type": "boolean",
          "description": "Flag to disable the Clear button",
          "defaultValue": "!filename && !value"
        },
        {
          "name": "isDisabled",
          "type": "boolean",
          "description": "Flag to show if the field is disabled.",
          "defaultValue": "false"
        },
        {
          "name": "isDragActive",
          "type": "boolean",
          "description": "Flag to show if a file is being dragged over the field",
          "defaultValue": "false"
        },
        {
          "name": "isLoading",
          "type": "boolean",
          "description": "Flag to show if a file is being loaded.",
          "defaultValue": "false"
        },
        {
          "name": "isReadOnly",
          "type": "boolean",
          "description": "Flag to show if the field is read only.",
          "defaultValue": "false"
        },
        {
          "name": "isRequired",
          "type": "boolean",
          "description": "Flag to show if the field is required.",
          "defaultValue": "false"
        },
        {
          "name": "onBrowseButtonClick",
          "type": "(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void",
          "description": "A callback for when the Browse button is clicked.",
          "defaultValue": "() => {}"
        },
        {
          "name": "onChange",
          "type": "(\n  value: string,\n  filename: string,\n  event:\n    | React.ChangeEvent<HTMLTextAreaElement> // User typed in the TextArea\n    | React.MouseEvent<HTMLButtonElement, MouseEvent> // User clicked Clear button\n) => void",
          "description": "A callback for when the TextArea value changes.",
          "defaultValue": "() => {}"
        },
        {
          "name": "onClearButtonClick",
          "type": "(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void",
          "description": "A callback for when the Clear button is clicked.",
          "defaultValue": "() => {}"
        },
        {
          "name": "onTextAreaBlur",
          "type": "(event?: any) => void",
          "description": "Callback for when focus is lost on the text area field"
        },
        {
          "name": "onTextAreaClick",
          "type": "(event: React.MouseEvent<HTMLTextAreaElement, MouseEvent>) => void",
          "description": "A callback from when the text area is clicked. Can also be set via the onClick property of FileUpload."
        },
        {
          "name": "onTextChange",
          "type": "(text: string) => void",
          "description": "Text area text changed"
        },
        {
          "name": "spinnerAriaValueText",
          "type": "string",
          "description": "Aria-valuetext for the loading spinner"
        },
        {
          "name": "textAreaPlaceholder",
          "type": "string",
          "description": "Placeholder string to display in the empty text area field",
          "defaultValue": "''"
        },
        {
          "name": "type",
          "type": "'text' | 'dataURL'",
          "description": "What type of file. Determines what is is expected by `value`\n(a string for 'text' and 'dataURL', or a File object otherwise)."
        },
        {
          "name": "validated",
          "type": "'success' | 'error' | 'default'",
          "description": "Value to indicate if the field is modified to show that validation state.\nIf set to success, field will be modified to indicate valid state.\nIf set to error,  field will be modified to indicate error state.",
          "defaultValue": "'default'"
        },
        {
          "name": "value",
          "type": "string | File",
          "description": "Value of the file's contents\n(string if text file, File object otherwise)",
          "defaultValue": "''"
        }
      ]
    }
  ],
  "cssPrefix": [
    "pf-c-file-upload"
  ],
  "examples": [
    "Simple text file",
    "Text file with edits allowed",
    "Text file with restrictions",
    "Simple file of any format",
    "Custom file preview",
    "Custom file upload"
  ]
};
pageData.liveContext = {
  FileUploadIcon
};
pageData.examples = {
  'Simple text file': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { FileUpload } from '@patternfly/react-core';\n\nexport const SimpleTextFileUpload: React.FunctionComponent = () => {\n  const [value, setValue] = React.useState('');\n  const [filename, setFilename] = React.useState('');\n  const [isLoading, setIsLoading] = React.useState(false);\n\n  const handleFileInputChange = (\n    _event: React.ChangeEvent<HTMLInputElement> | React.DragEvent<HTMLElement>,\n    file: File\n  ) => {\n    setFilename(file.name);\n  };\n\n  const handleTextOrDataChange = (value: string) => {\n    setValue(value);\n  };\n\n  const handleClear = (_event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {\n    setFilename('');\n    setValue('');\n  };\n\n  const handleFileReadStarted = (_fileHandle: File) => {\n    setIsLoading(true);\n  };\n\n  const handleFileReadFinished = (_fileHandle: File) => {\n    setIsLoading(false);\n  };\n\n  return (\n    <FileUpload\n      id=\"text-file-with-edits-allowed\"\n      type=\"text\"\n      value={value}\n      filename={filename}\n      filenamePlaceholder=\"Drag and drop a file or upload one\"\n      onFileInputChange={handleFileInputChange}\n      onDataChange={handleTextOrDataChange}\n      onTextChange={handleTextOrDataChange}\n      onReadStarted={handleFileReadStarted}\n      onReadFinished={handleFileReadFinished}\n      onClearClick={handleClear}\n      isLoading={isLoading}\n      allowEditingUploadedText={false}\n      browseButtonText=\"Upload\"\n    />\n  );\n};\n","title":"Simple text file","lang":"ts"}}>
      
    </Example>,
  'Text file with edits allowed': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { FileUpload } from '@patternfly/react-core';\n\nexport const TextFileWithEditsAllowed: React.FunctionComponent = () => {\n  const [value, setValue] = React.useState('');\n  const [filename, setFilename] = React.useState('');\n  const [isLoading, setIsLoading] = React.useState(false);\n\n  const handleFileInputChange = (\n    _event: React.ChangeEvent<HTMLInputElement> | React.DragEvent<HTMLElement>,\n    file: File\n  ) => {\n    setFilename(file.name);\n  };\n\n  const handleTextOrDataChange = (value: string) => {\n    setValue(value);\n  };\n\n  const handleClear = (_event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {\n    setFilename('');\n    setValue('');\n  };\n\n  const handleFileReadStarted = (_fileHandle: File) => {\n    setIsLoading(true);\n  };\n\n  const handleFileReadFinished = (_fileHandle: File) => {\n    setIsLoading(false);\n  };\n\n  return (\n    <FileUpload\n      id=\"text-file-with-edits-allowed\"\n      type=\"text\"\n      value={value}\n      filename={filename}\n      filenamePlaceholder=\"Drag and drop a file or upload one\"\n      onFileInputChange={handleFileInputChange}\n      onDataChange={handleTextOrDataChange}\n      onTextChange={handleTextOrDataChange}\n      onReadStarted={handleFileReadStarted}\n      onReadFinished={handleFileReadFinished}\n      onClearClick={handleClear}\n      isLoading={isLoading}\n      allowEditingUploadedText={true}\n      browseButtonText=\"Upload\"\n    />\n  );\n};\n","title":"Text file with edits allowed","lang":"ts"}}>
      
    </Example>,
  'Text file with restrictions': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { FileUpload, Form, FormGroup } from '@patternfly/react-core';\n\nexport const TextFileUploadWithRestrictions: React.FunctionComponent = () => {\n  const [value, setValue] = React.useState('');\n  const [filename, setFilename] = React.useState('');\n  const [isLoading, setIsLoading] = React.useState(false);\n  const [isRejected, setIsRejected] = React.useState(false);\n\n  const handleFileInputChange = (\n    _event: React.ChangeEvent<HTMLInputElement> | React.DragEvent<HTMLElement>,\n    file: File\n  ) => {\n    setFilename(file.name);\n  };\n\n  const handleTextOrDataChange = (value: string) => {\n    setValue(value);\n  };\n\n  const handleClear = (_event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {\n    setFilename('');\n    setValue('');\n    setIsRejected(false);\n  };\n\n  const handleFileRejected = (_rejectedFiles: File[], _event: React.DragEvent<HTMLElement>) => {\n    setIsRejected(true);\n  };\n\n  const handleFileReadStarted = (_fileHandle: File) => {\n    setIsLoading(true);\n  };\n\n  const handleFileReadFinished = (_fileHandle: File) => {\n    setIsLoading(false);\n  };\n\n  return (\n    <Form>\n      <FormGroup\n        fieldId=\"text-file-with-restrictions\"\n        helperText=\"Upload a CSV file\"\n        helperTextInvalid=\"Must be a CSV file no larger than 1 KB\"\n        validated={isRejected ? 'error' : 'default'}\n      >\n        <FileUpload\n          id=\"text-file-with-restrictions\"\n          type=\"text\"\n          value={value}\n          filename={filename}\n          filenamePlaceholder=\"Drag and drop a file or upload one\"\n          onFileInputChange={handleFileInputChange}\n          onDataChange={handleTextOrDataChange}\n          onTextChange={handleTextOrDataChange}\n          onReadStarted={handleFileReadStarted}\n          onReadFinished={handleFileReadFinished}\n          onClearClick={handleClear}\n          isLoading={isLoading}\n          dropzoneProps={{\n            accept: '.csv',\n            maxSize: 1024,\n            onDropRejected: handleFileRejected\n          }}\n          validated={isRejected ? 'error' : 'default'}\n          browseButtonText=\"Upload\"\n        />\n      </FormGroup>\n    </Form>\n  );\n};\n","title":"Text file with restrictions","lang":"ts"}}>
      
    </Example>,
  'Simple file of any format': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { FileUpload } from '@patternfly/react-core';\n\nexport const SimpleFileUpload: React.FunctionComponent = () => {\n  const [value, setValue] = React.useState(null);\n  const [filename, setFilename] = React.useState('');\n\n  const handleFileInputChange = (\n    _event: React.ChangeEvent<HTMLInputElement> | React.DragEvent<HTMLElement>,\n    file: File\n  ) => {\n    setFilename(file.name);\n  };\n\n  const handleClear = (_event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {\n    setFilename('');\n    setValue('');\n  };\n\n  return (\n    <FileUpload\n      id=\"simple-file\"\n      value={value}\n      filename={filename}\n      filenamePlaceholder=\"Drag and drop a file or upload one\"\n      onFileInputChange={handleFileInputChange}\n      onClearClick={handleClear}\n      browseButtonText=\"Upload\"\n    />\n  );\n};\n","title":"Simple file of any format","lang":"ts"}}>
      
    </Example>,
  'Custom file preview': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { FileUpload } from '@patternfly/react-core';\nimport FileUploadIcon from '@patternfly/react-icons/dist/esm/icons/file-upload-icon';\n\nexport const CustomPreviewFileUpload: React.FunctionComponent = () => {\n  const [value, setValue] = React.useState(null);\n  const [filename, setFilename] = React.useState('');\n\n  const handleFileInputChange = (\n    _event: React.ChangeEvent<HTMLInputElement> | React.DragEvent<HTMLElement>,\n    file: File\n  ) => {\n    setValue(file);\n    setFilename(file.name);\n  };\n\n  const handleClear = (_event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {\n    setFilename('');\n    setValue('');\n  };\n\n  return (\n    <FileUpload\n      id=\"customized-preview-file\"\n      value={value}\n      filename={filename}\n      filenamePlaceholder=\"Drag and drop a file or upload one\"\n      onFileInputChange={handleFileInputChange}\n      onClearClick={handleClear}\n      hideDefaultPreview\n      browseButtonText=\"Upload\"\n    >\n      {value && (\n        <div className=\"pf-u-m-md\">\n          <FileUploadIcon size=\"lg\" /> Custom preview here for your {value.size}-byte file named {value.name}\n        </div>\n      )}\n    </FileUpload>\n  );\n};\n","title":"Custom file preview","lang":"ts"}}>
      
    </Example>,
  'Custom file upload': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { FileUploadField, Checkbox } from '@patternfly/react-core';\n\nexport const CustomPreviewFileUpload: React.FunctionComponent = () => {\n  const properties = [\n    'filename',\n    'isClearButtonDisabled',\n    'isDragActive',\n    'isLoading',\n    'hideDefaultPreview',\n    'children',\n    'hasPlaceholderText'\n  ];\n\n  const [value, setValue] = React.useState('');\n  const [filename, setFilename] = React.useState(false);\n  const [isClearButtonDisabled, setIsClearButtonDisabled] = React.useState(true);\n  const [isLoading, setIsLoading] = React.useState(false);\n  const [isDragActive, setIsDragActive] = React.useState(false);\n  const [hideDefaultPreview, setHideDefaultPreview] = React.useState(false);\n  const [children, setChildren] = React.useState(false);\n  const [hasPlaceholderText, setHasPlaceholderText] = React.useState(false);\n  const [checkedState, setCheckedState] = React.useState([\n    filename,\n    isClearButtonDisabled,\n    isLoading,\n    isDragActive,\n    hideDefaultPreview,\n    children,\n    hasPlaceholderText\n  ]);\n\n  const handleTextAreaChange = (value: string) => {\n    setValue(value);\n  };\n\n  const handleOnChange = (checked: boolean, stateKey: string, index: number) => {\n    const updatedCheckedState = [...checkedState];\n    switch (stateKey) {\n      case 'filename':\n        checked ? setFilename(true) : setFilename(false);\n        break;\n\n      case 'isClearButtonDisabled':\n        checked ? setIsClearButtonDisabled(true) : setIsClearButtonDisabled(false);\n        break;\n\n      case 'isDragActive':\n        checked ? setIsDragActive(true) : setIsDragActive(false);\n        break;\n\n      case 'isLoading':\n        checked ? setIsLoading(true) : setIsLoading(false);\n        // See notes above this example\n        if (checked) {\n          updatedCheckedState[properties.indexOf('hideDefaultPreview')] = false;\n          setHideDefaultPreview(false);\n        }\n        break;\n\n      case 'hideDefaultPreview':\n        checked ? setHideDefaultPreview(true) : setHideDefaultPreview(false);\n        // See notes above this example\n        if (checked) {\n          updatedCheckedState[properties.indexOf('isLoading')] = false;\n          setIsLoading(false);\n        }\n        break;\n\n      case 'children':\n        checked ? setChildren(true) : setChildren(false);\n        break;\n\n      case 'hasPlaceholderText':\n        checked ? setHasPlaceholderText(true) : setHasPlaceholderText(false);\n        break;\n    }\n    updatedCheckedState[index] = checked;\n    setCheckedState(updatedCheckedState);\n  };\n\n  return (\n    <div>\n      {properties.map((stateKey, index) => (\n        <Checkbox\n          name={stateKey}\n          key={stateKey}\n          id={stateKey}\n          label={stateKey}\n          aria-label={stateKey}\n          isChecked={checkedState[index]}\n          onChange={checked => handleOnChange(checked, stateKey, index)}\n        />\n      ))}\n      <br />\n      <FileUploadField\n        id=\"custom-file-upload\"\n        type=\"text\"\n        value={value}\n        filename={filename ? 'example-filename.txt' : ''}\n        onTextChange={handleTextAreaChange}\n        filenamePlaceholder=\"Do something custom with this!\"\n        onBrowseButtonClick={() => alert('Browse button clicked!')}\n        onClearButtonClick={() => alert('Clear button clicked!')}\n        isClearButtonDisabled={isClearButtonDisabled}\n        isLoading={isLoading}\n        isDragActive={isDragActive}\n        hideDefaultPreview={hideDefaultPreview}\n        browseButtonText=\"Upload\"\n        textAreaPlaceholder={hasPlaceholderText ? 'File preview' : ''}\n      >\n        {children && <div className=\"pf-u-m-md\">(A custom preview of the uploaded file can be passed as children)</div>}\n      </FileUploadField>\n    </div>\n  );\n};\n","title":"Custom file upload","lang":"ts"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The basic `}
      <code {...{"className":"ws-code"}}>
        {`FileUpload`}
      </code>
      {` component can accept a file via browse or drag-and-drop, and behaves like a standard form field with its `}
      <code {...{"className":"ws-code"}}>
        {`value`}
      </code>
      {` and `}
      <code {...{"className":"ws-code"}}>
        {`onFileInputChange`}
      </code>
      {` event that is similar to `}
      <code {...{"className":"ws-code"}}>
        {`<input onChange="...">`}
      </code>
      {` prop. The `}
      <code {...{"className":"ws-code"}}>
        {`type`}
      </code>
      {` prop determines how the `}
      <code {...{"className":"ws-code"}}>
        {`FileUpload`}
      </code>
      {` component behaves upon accepting a file, what type of value it passes to its `}
      <code {...{"className":"ws-code"}}>
        {`onDataChange`}
      </code>
      {` event.`}
    </p>
    <AutoLinkHeader {...{"id":"text-files","size":"h3","className":"ws-title ws-h3"}}>
      {`Text files`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`If `}
      <code {...{"className":"ws-code"}}>
        {`type="text"`}
      </code>
      {` is passed (and `}
      <code {...{"className":"ws-code"}}>
        {`hideDefaultPreview`}
      </code>
      {` is not), a `}
      <code {...{"className":"ws-code"}}>
        {`TextArea`}
      </code>
      {` preview will be rendered underneath the filename bar. When a file is selected, its contents will be read into memory and passed to the `}
      <code {...{"className":"ws-code"}}>
        {`onDataChange`}
      </code>
      {` event as a string. Every filename change is passed to `}
      <code {...{"className":"ws-code"}}>
        {`onFileInputChange`}
      </code>
      {` same as it would do with the `}
      <code {...{"className":"ws-code"}}>
        {`<input>`}
      </code>
      {` element.
Pressing `}
      <em>
        {`Clear`}
      </em>
      {` button triggers `}
      <code {...{"className":"ws-code"}}>
        {`onClearClick`}
      </code>
      {` event.`}
    </p>
    {React.createElement(pageData.examples["Simple text file"])}
    <p {...{"className":"ws-p"}}>
      {`A user can always type instead of selecting a file, but by default, once a user selects a text file from their disk they are not allowed to edit it (to prevent unintended changes to a format-sensitive file). This behavior can be changed with the `}
      <code {...{"className":"ws-code"}}>
        {`allowEditingUploadedText`}
      </code>
      {` prop.
Typing/pasting text in the box will call `}
      <code {...{"className":"ws-code"}}>
        {`onTextChange`}
      </code>
      {` with a string, and a string value is expected for the `}
      <code {...{"className":"ws-code"}}>
        {`value`}
      </code>
      {` prop. :`}
    </p>
    {React.createElement(pageData.examples["Text file with edits allowed"])}
    <AutoLinkHeader {...{"id":"restricting-file-size-and-type","size":"h3","className":"ws-title ws-h3"}}>
      {`Restricting file size and type`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Any `}
      <PatternflyThemeLink {...{"to":"https://react-dropzone.js.org/#!/Dropzone"}}>
        {`props accepted by `}
        <code {...{"className":"ws-code"}}>
          {`react-dropzone`}
        </code>
        {`'s `}
        <code {...{"className":"ws-code"}}>
          {`Dropzone`}
        </code>
        {` component`}
      </PatternflyThemeLink>
      {` can be passed as a `}
      <code {...{"className":"ws-code"}}>
        {`dropzoneProps`}
      </code>
      {` object in order to customize the behavior of the Dropzone, such as restricting the size and type of files allowed. The following example will only accept CSV files smaller than 1 KB. Note that file type determination is not reliable across platforms (see the note on react-dropzone's docs about the `}
      <code {...{"className":"ws-code"}}>
        {`accept`}
      </code>
      {` prop), so be sure to test the behavior of your file upload restriction on all browsers and operating systems targeted by your application.`}
    </p>
    <AutoLinkHeader {...{"id":"important-a-note-about-security","size":"h4","className":"ws-title ws-h4"}}>
      {`IMPORTANT: A note about security`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Restricting file sizes and types in this way is for user convenience only, and it cannot prevent a malicious user from submitting anything to your server. As with any user input, your application should also validate, sanitize and/or reject restricted files on the server side.`}
    </p>
    {React.createElement(pageData.examples["Text file with restrictions"])}
    <AutoLinkHeader {...{"id":"other-file-types","size":"h3","className":"ws-title ws-h3"}}>
      {`Other file types`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`If no `}
      <code {...{"className":"ws-code"}}>
        {`type`}
      </code>
      {` prop is specified, the component will not read files directly. When a file is selected, a `}
      <PatternflyThemeLink {...{"to":"https://developer.mozilla.org/en-US/docs/Web/API/File"}}>
        <code {...{"className":"ws-code"}}>
          {`File`}
        </code>
        {` object`}
      </PatternflyThemeLink>
      {` will be passed as a second argument to `}
      <code {...{"className":"ws-code"}}>
        {`onFileInputChange`}
      </code>
      {` and your application will be responsible for reading from it (e.g. by using the `}
      <PatternflyThemeLink {...{"to":"https://developer.mozilla.org/en-US/docs/Web/API/FileReader"}}>
        {`FileReader API`}
      </PatternflyThemeLink>
      {` or attaching it to a `}
      <PatternflyThemeLink {...{"to":"https://developer.mozilla.org/en-US/docs/Web/API/FormData/Using_FormData_Objects"}}>
        {`FormData object`}
      </PatternflyThemeLink>
      {`). A `}
      <code {...{"className":"ws-code"}}>
        {`File`}
      </code>
      {` object will also be expected for the `}
      <code {...{"className":"ws-code"}}>
        {`value`}
      </code>
      {` prop instead of a string, and no preview of the file contents will be shown by default. The `}
      <code {...{"className":"ws-code"}}>
        {`onReadStarted`}
      </code>
      {` and `}
      <code {...{"className":"ws-code"}}>
        {`onReadFinished`}
      </code>
      {` callbacks will also not be called since the component is not reading the file.`}
    </p>
    {React.createElement(pageData.examples["Simple file of any format"])}
    <AutoLinkHeader {...{"id":"customizing-the-file-preview","size":"h3","className":"ws-title ws-h3"}}>
      {`Customizing the file preview`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Regardless of `}
      <code {...{"className":"ws-code"}}>
        {`type`}
      </code>
      {`, the preview area (the TextArea, or any future implementations of default previews for other types) can be removed by passing `}
      <code {...{"className":"ws-code"}}>
        {`hideDefaultPreview`}
      </code>
      {`, and a custom one can be rendered by passing `}
      <code {...{"className":"ws-code"}}>
        {`children`}
      </code>
      {`.`}
    </p>
    {React.createElement(pageData.examples["Custom file preview"])}
    <AutoLinkHeader {...{"id":"bringing-your-own-file-browse-logic","size":"h3","className":"ws-title ws-h3"}}>
      {`Bringing your own file browse logic`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <code {...{"className":"ws-code"}}>
        {`FileUpload`}
      </code>
      {` is a thin wrapper around the `}
      <code {...{"className":"ws-code"}}>
        {`FileUploadField`}
      </code>
      {` presentational component. If you need to implement your own logic for accepting files, you can instead render a `}
      <code {...{"className":"ws-code"}}>
        {`FileUploadField`}
      </code>
      {` directly, which does not include `}
      <code {...{"className":"ws-code"}}>
        {`react-dropzone`}
      </code>
      {` and requires additional props (e.g. `}
      <code {...{"className":"ws-code"}}>
        {`onBrowseButtonClick`}
      </code>
      {`, `}
      <code {...{"className":"ws-code"}}>
        {`onClearButtonClick`}
      </code>
      {`, `}
      <code {...{"className":"ws-code"}}>
        {`isDragActive`}
      </code>
      {`).`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Note that the `}
      <code {...{"className":"ws-code"}}>
        {`isLoading`}
      </code>
      {` prop is styled to position the spinner dead center above the entire component, so it should not be used with `}
      <code {...{"className":"ws-code"}}>
        {`hideDefaultPreview`}
      </code>
      {` unless a custom empty-state preview is provided via `}
      <code {...{"className":"ws-code"}}>
        {`children`}
      </code>
      {`. The below example prevents `}
      <code {...{"className":"ws-code"}}>
        {`isLoading`}
      </code>
      {` and `}
      <code {...{"className":"ws-code"}}>
        {`hideDefaultPreview`}
      </code>
      {` from being used at the same time. You can always provide your own spinner as part of the `}
      <code {...{"className":"ws-code"}}>
        {`children`}
      </code>
      {`!`}
    </p>
    {React.createElement(pageData.examples["Custom file upload"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsFileUploadReactDocs';
Component.pageData = pageData;

export default Component;
