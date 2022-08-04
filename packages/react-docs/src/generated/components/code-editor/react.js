import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import { CodeEditor, CodeEditorControl, Language } from '@patternfly/react-code-editor';
import PlayIcon from '@patternfly/react-icons/dist/esm/icons/play-icon';
const pageData = {
  "id": "Code editor",
  "section": "components",
  "source": "react",
  "slug": "/components/code-editor/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-code-editor/src/components/CodeEditor/examples/CodeEditor.md",
  "propComponents": [
    {
      "name": "CodeEditor",
      "description": "",
      "props": [
        {
          "name": "className",
          "type": "string",
          "description": "additional classes added to the code editor",
          "defaultValue": "''"
        },
        {
          "name": "code",
          "type": "string",
          "description": "code displayed in code editor",
          "defaultValue": "''"
        },
        {
          "name": "copyButtonAriaLabel",
          "type": "string",
          "description": "Accessible label for the copy button",
          "defaultValue": "'Copy code to clipboard'"
        },
        {
          "name": "copyButtonSuccessTooltipText",
          "type": "string",
          "description": "Text to display in the tooltip on the copy button after code copied to clipboard",
          "defaultValue": "'Content added to clipboard'"
        },
        {
          "name": "copyButtonToolTipText",
          "type": "string",
          "description": "Text to display in the tooltip on the copy button before text is copied",
          "defaultValue": "'Copy to clipboard'"
        },
        {
          "name": "customControls",
          "type": "React.ReactNode | React.ReactNode[]",
          "description": "A single node or array of nodes - ideally CodeEditorControls - to display above code editor",
          "defaultValue": "null"
        },
        {
          "name": "downloadButtonAriaLabel",
          "type": "string",
          "description": "Accessible label for the download button",
          "defaultValue": "'Download code'"
        },
        {
          "name": "downloadButtonToolTipText",
          "type": "string",
          "description": "Text to display in the tooltip on the download button",
          "defaultValue": "'Download'"
        },
        {
          "name": "downloadFileName",
          "type": "string",
          "description": "Name of the file if user downloads code to local file",
          "defaultValue": "Date.now().toString()"
        },
        {
          "name": "emptyState",
          "type": "React.ReactNode",
          "description": "Content to display in space of the code editor when there is no code to display",
          "defaultValue": "''"
        },
        {
          "name": "emptyStateBody",
          "type": "React.ReactNode",
          "description": "Override default empty state body text",
          "defaultValue": "'Drag and drop a file or upload one.'"
        },
        {
          "name": "emptyStateButton",
          "type": "React.ReactNode",
          "description": "Override default empty state title text",
          "defaultValue": "'Browse'"
        },
        {
          "name": "emptyStateLink",
          "type": "React.ReactNode",
          "description": "Override default empty state body text",
          "defaultValue": "'Start from scratch'"
        },
        {
          "name": "emptyStateTitle",
          "type": "React.ReactNode",
          "description": "Override default empty state title text",
          "defaultValue": "'Start editing'"
        },
        {
          "name": "headerMainContent",
          "type": "string",
          "description": "Editor header main content title",
          "defaultValue": "''"
        },
        {
          "name": "height",
          "type": "string | 'sizeToFit'",
          "description": "Height of code editor. Defaults to 100%. 'sizeToFit' will automatically change the height to the height of the content.",
          "defaultValue": "''"
        },
        {
          "name": "isCopyEnabled",
          "type": "boolean",
          "description": "Flag to add copy button to code editor actions",
          "defaultValue": "false"
        },
        {
          "name": "isDarkTheme",
          "type": "boolean",
          "description": "Flag indicating the editor is styled using monaco's dark theme",
          "defaultValue": "false"
        },
        {
          "name": "isDownloadEnabled",
          "type": "boolean",
          "description": "Flag to add download button to code editor actions",
          "defaultValue": "false"
        },
        {
          "name": "isLanguageLabelVisible",
          "type": "boolean",
          "description": "Flag to include a label indicating the currently configured editor language",
          "defaultValue": "false"
        },
        {
          "name": "isLineNumbersVisible",
          "type": "boolean",
          "description": "Flag indicating the editor is displaying line numbers",
          "defaultValue": "true"
        },
        {
          "name": "isMinimapVisible",
          "type": "boolean",
          "description": "Flag to add the minimap to the code editor",
          "defaultValue": "false"
        },
        {
          "name": "isReadOnly",
          "type": "boolean",
          "description": "Flag indicating the editor is read only",
          "defaultValue": "false"
        },
        {
          "name": "isUploadEnabled",
          "type": "boolean",
          "description": "Flag to add upload button to code editor actions. Also makes the code editor accept a file using drag and drop",
          "defaultValue": "false"
        },
        {
          "name": "language",
          "type": "Language",
          "description": "language displayed in the editor",
          "defaultValue": "Language.plaintext"
        },
        {
          "name": "loading",
          "type": "React.ReactNode",
          "description": "The loading screen before the editor will be loaded. Defaults 'loading...'",
          "defaultValue": "''"
        },
        {
          "name": "onChange",
          "type": "ChangeHandler",
          "description": "Function which fires each time the content of the code editor is manually changed. Does not fire when a file is uploaded."
        },
        {
          "name": "onCodeChange",
          "type": "(value: string) => void",
          "description": "Function which fires each time the code changes in the code editor",
          "defaultValue": "() => {}"
        },
        {
          "name": "onEditorDidMount",
          "type": "EditorDidMount",
          "description": "Callback which fires after the code editor is mounted containing\na reference to the monaco editor and the monaco instance",
          "defaultValue": "() => {}"
        },
        {
          "name": "options",
          "type": "editor.IStandaloneEditorConstructionOptions",
          "description": "Refer to Monaco interface {monaco.editor.IStandaloneEditorConstructionOptions}.",
          "defaultValue": "{}"
        },
        {
          "name": "overrideServices",
          "type": "editor.IEditorOverrideServices",
          "description": "Refer to Monaco interface {monaco.editor.IEditorOverrideServices}.",
          "defaultValue": "{}"
        },
        {
          "name": "shortcutsPopoverButtonText",
          "type": "string",
          "description": "Text to show in the button to open the shortcut popover",
          "defaultValue": "'View Shortcuts'"
        },
        {
          "name": "shortcutsPopoverProps",
          "type": "PopoverProps",
          "description": "Properties for the shortcut popover",
          "defaultValue": "{\n  bodyContent: '',\n  'aria-label': 'Keyboard Shortcuts',\n  ...Popover.defaultProps\n}"
        },
        {
          "name": "showEditor",
          "type": "boolean",
          "description": "Flag to show the editor",
          "defaultValue": "true"
        },
        {
          "name": "toolTipCopyExitDelay",
          "type": "number",
          "description": "The delay before tooltip fades after code copied",
          "defaultValue": "1600"
        },
        {
          "name": "toolTipDelay",
          "type": "number",
          "description": "The entry and exit delay for all tooltips",
          "defaultValue": "300"
        },
        {
          "name": "toolTipMaxWidth",
          "type": "string",
          "description": "The max width of the tooltips on all button",
          "defaultValue": "'100px'"
        },
        {
          "name": "toolTipPosition",
          "type": "TooltipPosition\n| 'auto'\n| 'top'\n| 'bottom'\n| 'left'\n| 'right'\n| 'top-start'\n| 'top-end'\n| 'bottom-start'\n| 'bottom-end'\n| 'left-start'\n| 'left-end'\n| 'right-start'\n| 'right-end'",
          "description": "The position of tooltips on all buttons",
          "defaultValue": "'top'"
        },
        {
          "name": "uploadButtonAriaLabel",
          "type": "string",
          "description": "Accessible label for the upload button",
          "defaultValue": "'Upload code'"
        },
        {
          "name": "uploadButtonToolTipText",
          "type": "string",
          "description": "Text to display in the tooltip on the upload button",
          "defaultValue": "'Upload'"
        },
        {
          "name": "width",
          "type": "string",
          "description": "Width of code editor. Defaults to 100%",
          "defaultValue": "''"
        }
      ]
    },
    {
      "name": "CodeEditorControl",
      "description": "",
      "props": [
        {
          "name": "aria-label",
          "type": "string",
          "description": "accessible label for the code editor control"
        },
        {
          "name": "className",
          "type": "string",
          "description": "additional classes added to the Code editor control"
        },
        {
          "name": "entryDelay",
          "type": "number",
          "description": "Delay in ms before the tooltip appears.",
          "defaultValue": "300"
        },
        {
          "name": "exitDelay",
          "type": "number",
          "description": "Delay in ms before the tooltip disappears.",
          "defaultValue": "0"
        },
        {
          "name": "icon",
          "type": "React.ReactNode",
          "description": "icon rendered inside the code editor control",
          "required": true
        },
        {
          "name": "isVisible",
          "type": "boolean",
          "description": "Flag indicating that the button is visible above the code editor",
          "defaultValue": "true"
        },
        {
          "name": "maxWidth",
          "type": "string",
          "description": "Maximum width of the tooltip (default 150px).",
          "defaultValue": "'100px'"
        },
        {
          "name": "onClick",
          "type": "(code: string, event?: any) => void",
          "description": "Event handler for the click of the button",
          "defaultValue": "() => {}"
        },
        {
          "name": "position",
          "type": "PopoverPosition\n| 'auto'\n| 'top'\n| 'bottom'\n| 'left'\n| 'right'\n| 'top-start'\n| 'top-end'\n| 'bottom-start'\n| 'bottom-end'\n| 'left-start'\n| 'left-end'\n| 'right-start'\n| 'right-end'",
          "description": "Copy button popover position.",
          "defaultValue": "'top'"
        },
        {
          "name": "toolTipText",
          "type": "React.ReactNode",
          "description": "Text to display in the tooltip",
          "required": true
        }
      ]
    },
    {
      "name": "Popover",
      "description": "",
      "props": [
        {
          "name": "alertSeverityScreenReaderText",
          "type": "string",
          "description": "Text announced by screen reader when alert severity variant is set to indicate severity level",
          "beta": true
        },
        {
          "name": "alertSeverityVariant",
          "type": "'default' | 'info' | 'warning' | 'success' | 'danger'",
          "description": "Severity variants for an alert popover. This modifies the color of the header to match the severity.",
          "beta": true
        },
        {
          "name": "animationDuration",
          "type": "number",
          "description": "CSS fade transition animation duration",
          "defaultValue": "300"
        },
        {
          "name": "appendTo",
          "type": "HTMLElement | ((ref?: HTMLElement) => HTMLElement)",
          "description": "The element to append the popover to, defaults to body",
          "defaultValue": "() => document.body"
        },
        {
          "name": "aria-label",
          "type": "string",
          "description": "Accessible label, required when header is not present",
          "defaultValue": "''"
        },
        {
          "name": "bodyContent",
          "type": "React.ReactNode | ((hide: () => void) => React.ReactNode)",
          "description": "Body content\nIf you want to close the popover after an action within the bodyContent, you can use the isVisible prop for manual control,\nor you can provide a function which will receive a callback as an argument to hide the popover\ni.e. bodyContent={hide => <Button onClick={() => hide()}>Close</Button>}",
          "required": true
        },
        {
          "name": "boundary",
          "type": "'scrollParent' | 'window' | 'viewport' | HTMLElement",
          "description": "- no longer used. if you want to constrain the popper to a specific element use the appendTo prop instead",
          "deprecated": true
        },
        {
          "name": "children",
          "type": "ReactElement<any>",
          "description": "The reference element to which the Popover is relatively placed to.\nIf you cannot wrap the reference with the Popover, you can use the reference prop instead.\nUsage: <Popover><Button>Reference</Button></Popover>"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Popover additional class",
          "defaultValue": "''"
        },
        {
          "name": "closeBtnAriaLabel",
          "type": "string",
          "description": "Aria label for the Close button",
          "defaultValue": "'Close'"
        },
        {
          "name": "distance",
          "type": "number",
          "description": "Distance of the popover to its target, defaults to 25",
          "defaultValue": "25"
        },
        {
          "name": "enableFlip",
          "type": "boolean",
          "description": "If true, tries to keep the popover in view by flipping it if necessary.\nIf the position is set to 'auto', this prop is ignored",
          "defaultValue": "true"
        },
        {
          "name": "flipBehavior",
          "type": "'flip'\n| (\n    | 'top'\n    | 'bottom'\n    | 'left'\n    | 'right'\n    | 'top-start'\n    | 'top-end'\n    | 'bottom-start'\n    | 'bottom-end'\n    | 'left-start'\n    | 'left-end'\n    | 'right-start'\n    | 'right-end'\n  )[]",
          "description": "The desired position to flip the popover to if the initial position is not possible.\nBy setting this prop to 'flip' it attempts to flip the popover to the opposite side if there is no space.\nYou can also pass an array of positions that determines the flip order. It should contain the initial position\nfollowed by alternative positions if that position is unavailable.\nExample: Initial position is 'top'. Button with popover is in the top right corner. 'flipBehavior' is set to\n['top', 'right', 'left']. Since there is no space to the top, it checks if right is available. There's also no\nspace to the right, so it finally shows the popover on the left.",
          "defaultValue": "['top', 'right', 'bottom', 'left', 'top', 'right', 'bottom']"
        },
        {
          "name": "footerContent",
          "type": "React.ReactNode | ((hide: () => void) => React.ReactNode)",
          "description": "Footer content\nIf you want to close the popover after an action within the bodyContent, you can use the isVisible prop for manual control,\nor you can provide a function which will receive a callback as an argument to hide the popover\ni.e. footerContent={hide => <Button onClick={() => hide()}>Close</Button>}",
          "defaultValue": "null"
        },
        {
          "name": "hasAutoWidth",
          "type": "boolean",
          "description": "Removes fixed-width and allows width to be defined by contents",
          "defaultValue": "false"
        },
        {
          "name": "hasNoPadding",
          "type": "boolean",
          "description": "Allows content to touch edges of popover container",
          "defaultValue": "false"
        },
        {
          "name": "headerComponent",
          "type": "'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'",
          "description": "Sets the heading level to use for the popover header. Default is h6.",
          "defaultValue": "'h6'"
        },
        {
          "name": "headerContent",
          "type": "React.ReactNode | ((hide: () => void) => React.ReactNode)",
          "description": "Simple header content to be placed within a title.\nIf you want to close the popover after an action within the bodyContent, you can use the isVisible prop for manual control,\nor you can provide a function which will receive a callback as an argument to hide the popover\ni.e. headerContent={hide => <Button onClick={() => hide()}>Close</Button>}",
          "defaultValue": "null"
        },
        {
          "name": "headerIcon",
          "type": "React.ReactNode",
          "description": "Icon to be displayed in the popover header *",
          "defaultValue": "null",
          "beta": true
        },
        {
          "name": "hideOnOutsideClick",
          "type": "boolean",
          "description": "Hides the popover when a click occurs outside (only works if isVisible is not controlled by the user)",
          "defaultValue": "true"
        },
        {
          "name": "id",
          "type": "string",
          "description": "id used as part of the various popover elements (popover-${id}-header/body/footer)"
        },
        {
          "name": "isVisible",
          "type": "boolean",
          "description": "True to show the popover programmatically. Used in conjunction with the shouldClose prop.\nBy default, the popover child element handles click events automatically. If you want to control this programmatically,\nthe popover will not auto-close if the Close button is clicked, ESC key is used, or if a click occurs outside the popover.\nInstead, the consumer is responsible for closing the popover themselves by adding a callback listener for the shouldClose prop.",
          "defaultValue": "null"
        },
        {
          "name": "maxWidth",
          "type": "string",
          "description": "Maximum width of the popover (default 18.75rem)",
          "defaultValue": "popoverMaxWidth && popoverMaxWidth.value"
        },
        {
          "name": "minWidth",
          "type": "string",
          "description": "Minimum width of the popover (default 6.25rem)",
          "defaultValue": "popoverMinWidth && popoverMinWidth.value"
        },
        {
          "name": "onHidden",
          "type": "(tip?: TippyInstance) => void",
          "description": "Lifecycle function invoked when the popover has fully transitioned out.\nNote: The tip argument is no longer passed and has been deprecated.",
          "defaultValue": "(): void => null"
        },
        {
          "name": "onHide",
          "type": "(tip?: TippyInstance) => void",
          "description": "Lifecycle function invoked when the popover begins to transition out.\nNote: The tip argument is no longer passed and has been deprecated.",
          "defaultValue": "(): void => null"
        },
        {
          "name": "onMount",
          "type": "(tip?: TippyInstance) => void",
          "description": "Lifecycle function invoked when the popover has been mounted to the DOM.\nNote: The tip argument is no longer passed and has been deprecated.",
          "defaultValue": "(): void => null"
        },
        {
          "name": "onShow",
          "type": "(tip?: TippyInstance) => void",
          "description": "Lifecycle function invoked when the popover begins to transition in.\nNote: The tip argument is no longer passed and has been deprecated.",
          "defaultValue": "(): void => null"
        },
        {
          "name": "onShown",
          "type": "(tip?: TippyInstance) => void",
          "description": "Lifecycle function invoked when the popover has fully transitioned in.\nNote: The tip argument is no longer passed and has been deprecated.",
          "defaultValue": "(): void => null"
        },
        {
          "name": "position",
          "type": "PopoverPosition\n| 'auto'\n| 'top'\n| 'bottom'\n| 'left'\n| 'right'\n| 'top-start'\n| 'top-end'\n| 'bottom-start'\n| 'bottom-end'\n| 'left-start'\n| 'left-end'\n| 'right-start'\n| 'right-end'",
          "description": "Popover position. Note: With 'enableFlip' set to true,\nit will change the position if there is not enough space for the starting position.\nThe behavior of where it flips to can be controlled through the flipBehavior prop.",
          "defaultValue": "'top'"
        },
        {
          "name": "reference",
          "type": "HTMLElement | (() => HTMLElement) | React.RefObject<any>",
          "description": "The reference element to which the Popover is relatively placed to.\nIf you can wrap the reference with the Popover, you can use the children prop instead.\nUsage: <Popover reference={() => document.getElementById('reference-element')} />"
        },
        {
          "name": "shouldClose",
          "type": "(tip?: TippyInstance, hideFunction?: () => void, event?: MouseEvent | KeyboardEvent) => void",
          "description": "Callback function that is only invoked when isVisible is also controlled. Called when the popover Close button is\nclicked, Enter key was used on it, or the ESC key is used.\nNote: The tip argument is no longer passed and has been deprecated.",
          "defaultValue": "(): void => null"
        },
        {
          "name": "shouldOpen",
          "type": "(showFunction?: () => void, event?: MouseEvent | KeyboardEvent) => void",
          "description": "Callback function that is only invoked when isVisible is also controlled. Called when the Enter key is\nused on the focused trigger",
          "defaultValue": "(): void => null"
        },
        {
          "name": "showClose",
          "type": "boolean",
          "description": "Whether to show the close button",
          "defaultValue": "true"
        },
        {
          "name": "tippyProps",
          "type": "Partial<TippyProps>",
          "description": "- no longer used",
          "deprecated": true
        },
        {
          "name": "withFocusTrap",
          "type": "boolean",
          "description": "Whether to trap focus in the popover"
        },
        {
          "name": "zIndex",
          "type": "number",
          "description": "z-index of the popover",
          "defaultValue": "9999"
        }
      ]
    }
  ],
  "beta": true,
  "cssPrefix": [
    "pf-c-code-editor"
  ],
  "examples": [
    "Basic",
    "With sizeToFit height, height will grow/shrink with content",
    "With shortcut menu and main header content",
    "With actions",
    "With custom control"
  ]
};
pageData.liveContext = {
  CodeEditor,
  CodeEditorControl,
  Language,
  PlayIcon
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { CodeEditor, Language } from '@patternfly/react-code-editor';\nimport { Checkbox } from '@patternfly/react-core';\n\nexport const CodeEditorBasic: React.FunctionComponent = () => {\n  const [isDarkTheme, setIsDarkTheme] = React.useState(false);\n  const [isLineNumbersVisible, setIsLineNumbersVisible] = React.useState(true);\n  const [isReadOnly, setIsReadOnly] = React.useState(false);\n  const [isMinimapVisible, setIsMinimapVisible] = React.useState(false);\n\n  const toggleDarkTheme = checked => {\n    setIsDarkTheme(checked);\n  };\n\n  const toggleLineNumbers = checked => {\n    setIsLineNumbersVisible(checked);\n  };\n  const toggleReadOnly = checked => {\n    setIsReadOnly(checked);\n  };\n  const toggleMinimap = checked => {\n    setIsMinimapVisible(checked);\n  };\n\n  const onEditorDidMount = (editor, monaco) => {\n    // eslint-disable-next-line no-console\n    console.log(editor.getValue());\n    editor.layout();\n    editor.focus();\n    monaco.editor.getModels()[0].updateOptions({ tabSize: 5 });\n  };\n\n  const onChange = value => {\n    // eslint-disable-next-line no-console\n    console.log(value);\n  };\n\n  return (\n    <>\n      <Checkbox\n        label=\"Dark theme\"\n        isChecked={isDarkTheme}\n        onChange={toggleDarkTheme}\n        aria-label=\"dark theme checkbox\"\n        id=\"toggle-theme\"\n        name=\"toggle-theme\"\n      />\n      <Checkbox\n        label=\"Line numbers\"\n        isChecked={isLineNumbersVisible}\n        onChange={toggleLineNumbers}\n        aria-label=\"line numbers checkbox\"\n        id=\"toggle-line-numbers\"\n        name=\"toggle-line-numbers\"\n      />\n      <Checkbox\n        label=\"Read only\"\n        isChecked={isReadOnly}\n        onChange={toggleReadOnly}\n        aria-label=\"read only checkbox\"\n        id=\"toggle-read-only\"\n        name=\"toggle-read-only\"\n      />\n      <Checkbox\n        label=\"Minimap\"\n        isChecked={isMinimapVisible}\n        onChange={toggleMinimap}\n        aria-label=\"display minimap checkbox\"\n        id=\"toggle-minimap\"\n        name=\"toggle-minimap\"\n      />\n      <CodeEditor\n        isDarkTheme={isDarkTheme}\n        isLineNumbersVisible={isLineNumbersVisible}\n        isReadOnly={isReadOnly}\n        isMinimapVisible={isMinimapVisible}\n        isLanguageLabelVisible\n        code=\"Some example content\"\n        onChange={onChange}\n        language={Language.javascript}\n        onEditorDidMount={onEditorDidMount}\n        height=\"400px\"\n      />\n    </>\n  );\n};\n","title":"Basic","lang":"ts"}}>
      
    </Example>,
  'With sizeToFit height, height will grow/shrink with content': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { CodeEditor, Language } from '@patternfly/react-code-editor';\n\nexport const CodeEditorSizeToFit: React.FunctionComponent = () => {\n  const onEditorDidMount = (editor, monaco) => {\n    // eslint-disable-next-line no-console\n    console.log(editor.getValue());\n    editor.layout();\n    editor.focus();\n    monaco.editor.getModels()[0].updateOptions({ tabSize: 5 });\n  };\n\n  const onChange = value => {\n    // eslint-disable-next-line no-console\n    console.log(value);\n  };\n\n  return (\n    <CodeEditor\n      code=\"Some example content\"\n      onChange={onChange}\n      language={Language.javascript}\n      onEditorDidMount={onEditorDidMount}\n      height=\"sizeToFit\"\n    />\n  );\n};\n","title":"With sizeToFit height, height will grow/shrink with content","lang":"ts"}}>
      
    </Example>,
  'With shortcut menu and main header content': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { CodeEditor, Language } from '@patternfly/react-code-editor';\nimport { Grid, GridItem, Chip } from '@patternfly/react-core';\n\nexport const CodeEditorShortcutMainHeader: React.FunctionComponent = () => {\n  const onEditorDidMount = (editor, monaco) => {\n    // eslint-disable-next-line no-console\n    console.log(editor.getValue());\n    editor.layout();\n    editor.focus();\n    monaco.editor.getModels()[0].updateOptions({ tabSize: 5 });\n  };\n\n  const onChange = value => {\n    // eslint-disable-next-line no-console\n    console.log(value);\n  };\n\n  const shortcuts = [\n    {\n      keys: ['Opt', 'F1'],\n      description: 'Accessibility helps'\n    },\n    {\n      keys: ['F1'],\n      description: 'View all editor shortcuts'\n    },\n    {\n      keys: ['Ctrl', 'Space'],\n      description: 'Activate auto complete'\n    },\n    {\n      keys: ['Cmd', 'S'],\n      description: 'Save'\n    }\n  ];\n  const shortcutsPopoverProps = {\n    bodyContent: (\n      <Grid span={6} hasGutter>\n        {shortcuts.map(s => (\n          <>\n            <GridItem style={{ textAlign: 'right', marginRight: '1em' }}>\n              {s.keys\n                .map(k => (\n                  <Chip key={k} isReadOnly>\n                    {k}\n                  </Chip>\n                ))\n                .reduce((prev, curr) => (\n                  <>{[prev, ' + ', curr]}</>\n                ))}\n            </GridItem>\n            <GridItem>{s.description}</GridItem>\n          </>\n        ))}\n      </Grid>\n    ),\n    'aria-label': 'Shortcuts'\n  };\n\n  return (\n    <CodeEditor\n      headerMainContent=\"Shortcut Example\"\n      shortcutsPopoverProps={shortcutsPopoverProps}\n      isLanguageLabelVisible\n      code=\"Some example content\"\n      onChange={onChange}\n      language={Language.javascript}\n      onEditorDidMount={onEditorDidMount}\n      height=\"400px\"\n    />\n  );\n};\n","title":"With shortcut menu and main header content","lang":"ts"}}>
      
      <p {...{"className":"ws-p"}}>
        {`These examples below are the shortcuts that we recommend describing in the popover since they are monaco features.`}
      </p>
    </Example>,
  'With actions': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { CodeEditor } from '@patternfly/react-code-editor';\n\nexport const CodeEditorWithActions: React.FunctionComponent = () => (\n  <CodeEditor isUploadEnabled isDownloadEnabled isCopyEnabled isLanguageLabelVisible height=\"400px\" />\n);\n","title":"With actions","lang":"ts"}}>
      
    </Example>,
  'With custom control': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { CodeEditor, CodeEditorControl } from '@patternfly/react-code-editor';\nimport PlayIcon from '@patternfly/react-icons/dist/esm/icons/play-icon';\n\nexport const CodeEditorCustomControl: React.FunctionComponent = () => {\n  const [code, setCode] = React.useState('');\n\n  const onChange = code => {\n    setCode(code);\n  };\n\n  const onExecuteCode = code => {\n    // eslint-disable-next-line no-console\n    console.log(code);\n  };\n\n  const customControl = (\n    <CodeEditorControl\n      icon={<PlayIcon />}\n      aria-label=\"Execute code\"\n      toolTipText=\"Execute code\"\n      onClick={onExecuteCode}\n      isVisible={code !== ''}\n    />\n  );\n\n  return (\n    <CodeEditor\n      isDownloadEnabled\n      isCopyEnabled\n      height=\"400px\"\n      customControls={customControl}\n      code={code}\n      onChange={onChange}\n    />\n  );\n};\n","title":"With custom control","lang":"ts"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`Note: Code editor lives in its own package at `}
      <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-code-editor"}}>
        {`@patternfly/react-code-editor`}
      </PatternflyThemeLink>
      {` and has `}
      <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/blob/main/packages/react-code-editor/package.json"}}>
        <strong>
          {`required peer deps`}
        </strong>
      </PatternflyThemeLink>
      {`.`}
    </p>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
    {React.createElement(pageData.examples["With sizeToFit height, height will grow/shrink with content"])}
    {React.createElement(pageData.examples["With shortcut menu and main header content"])}
    {React.createElement(pageData.examples["With actions"])}
    {React.createElement(pageData.examples["With custom control"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsCodeEditorReactDocs';
Component.pageData = pageData;

export default Component;
