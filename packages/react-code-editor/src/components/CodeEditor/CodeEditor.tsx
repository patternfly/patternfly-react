import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/CodeEditor/code-editor';
import {
  Button,
  EmptyState,
  EmptyStateBody,
  EmptyStateIcon,
  EmptyStateSecondaryActions,
  EmptyStateVariant,
  Title,
  Tooltip
} from '@patternfly/react-core';
import { ControlledEditor } from '@monaco-editor/react';
// import { KeyCode } from 'monaco-editor';
import CopyIcon from '@patternfly/react-icons/dist/js/icons/copy-icon';
import UploadIcon from '@patternfly/react-icons/dist/js/icons/upload-icon';
import DownloadIcon from '@patternfly/react-icons/dist/js/icons/download-icon';
import CodeIcon from '@patternfly/react-icons/dist/js/icons/code-icon';
import Dropzone from 'react-dropzone';
import { CodeEditorContext } from './CodeEditorUtils';

export enum Language {
  javascript = 'javascript',
  html = 'html',
  text = 'text',
  json = 'json',
  css = 'css',
  yaml = 'yaml',
  typescript = 'typescript',
  scss = 'scss',
  markdown = 'markdown',
  java = 'java',
  less = 'less',
  xml = 'xml'
}

export interface CodeEditorProps extends Omit<React.HTMLProps<HTMLDivElement>, 'onChange'> {
  /** additional classes added to the code editor */
  className?: string;
  /** code displayed in code editor */
  code?: string;
  /** language displayed in the editor */
  language?: Language;
  /** Flag indicating the editor is styled using monaco's dark theme */
  isDarkTheme?: boolean;
  /** Width of code editor. Defaults to 100% */
  width?: string;
  /** Flag indicating the editor is displaying line numbers*/
  isLineNumbers?: boolean;
  /** Flag indicating the editor is read only*/
  isReadOnly?: boolean;
  /** Height of code editor. Defaults to 100% */
  height?: string;
  /** Function which fires each time the code changes in the code editor */
  onChange?: (value?: string, event?: any) => void;
  /** The loading screen before the editor will be loaded. Defaults 'loading...' */
  loading?: React.ReactNode;
  /** Content to display in space of the code editor when there is no code to display */
  emptyState?: React.ReactNode;
  /** Name of the file if user downloads code to local file */
  downloadFileName?: string;
  /** Flag to add upload button to code editor actions. Also makes the code editor accept a file using drag and drop*/
  isAllowUpload?: boolean;
  /** Flag to add download button to code editor actions*/
  isAllowDownload?: boolean;
  /** Flag to add copy button to code editor actions*/
  isAllowCopy?: boolean;
  /** Accessibly label for the copy button*/
  copyButtonAriaLabel?: string;
  /** */
  copyButtonToolTipText?: string;
  /** Text to display after code copied to clipboard*/
  copyButtonSuccessTooltipText?: string;
  /** Accessible label for the upload button */
  uploadButtonAriaLabel?: string;
  /** */
  uploadButtonToolTipText?: string;
  /** Accessible label for the download button */
  downloadButtonAriaLabel?: string;
  /** */
  downloadButtonToolTipText?: string;
  /** */
  toolTipCopyExitDelay: number;
  /** */
  toolTipEntryDelay: number;
  /** */
  toolTipMaxWidth: string;
  /** */
  toolTipPosition: 'auto' | 'top' | 'bottom' | 'left' | 'right';
  /** */
  customControls?: React.ReactNode | React.ReactNode[];
}

interface CodeEditorState {
  value: string;
  filename: string;
  isLoading: boolean;
  showEmptyState: boolean;
  copied: boolean;
}

export class CodeEditor extends React.Component<CodeEditorProps, CodeEditorState> {
  static displayName = 'CodeEditor';
  private editor: any = null;
  timer = null as number;
  static defaultProps: CodeEditorProps = {
    className: '',
    code: '',
    onChange: () => {},
    language: Language.text,
    isDarkTheme: false,
    height: '',
    width: '',
    isLineNumbers: true,
    isReadOnly: false,
    loading: '',
    emptyState: '',
    downloadFileName: Date.now().toString(),
    isAllowUpload: false,
    isAllowDownload: false,
    isAllowCopy: false,
    copyButtonAriaLabel: 'Copy code to clipboard',
    uploadButtonAriaLabel: 'Upload code',
    downloadButtonAriaLabel: 'Download code',
    copyButtonToolTipText: 'Copy to clipboard',
    uploadButtonToolTipText: 'Upload',
    downloadButtonToolTipText: 'Download',
    copyButtonSuccessTooltipText: 'Content added to clipboard',
    toolTipCopyExitDelay: 1600,
    toolTipEntryDelay: 100,
    toolTipMaxWidth: '100px',
    toolTipPosition: 'top',
    customControls: null
  };

  static getLanguageFromExtension(extension: string) {
    switch (extension) {
      case 'js':
        return Language.javascript;
      case 'ts':
        return Language.typescript;
      case 'md':
        return Language.markdown;
      case 'txt':
        return Language.text;
      default:
        return Language[extension as keyof typeof Language];
    }
  }

  static getExtensionFromLanguage(language: Language) {
    switch (language) {
      case Language.javascript:
        return 'js';
      case Language.typescript:
        return 'ts';
      case Language.markdown:
        return 'md';
      case Language.text:
        return 'txt';
      default:
        return language.toString();
    }
  }

  constructor(props: CodeEditorProps) {
    super(props);
    this.state = {
      value: this.props.code,
      filename: '',
      isLoading: false,
      showEmptyState: true,
      copied: false
    };
  }

  onChange = (event: any, value: string) => {
    if (this.props.onChange) {
      this.props.onChange(value, event);
    }
    this.setState({ value });
  };

  editorDidMount = (getEditorValue: () => string, editor: any) => {
    this.editor = editor;
    // console.log(KeyCode.Escape);
    // this.editor.addCommand(KeyCode.Shift | KeyCode.Escape, () => console.log("test"));
    // console.log(typeof this.editor);
  };

  handleFileChange = (value: string, filename: string) => {
    const extension = filename.split('.').pop();
    if (CodeEditor.getLanguageFromExtension(extension) === this.props.language) {
      this.setState({
        value,
        filename
      });
    }
  };

  handleFileReadStarted = () => this.setState({ isLoading: true });
  handleFileReadFinished = () => this.setState({ isLoading: false });

  readFile(fileHandle: Blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = () => reject(reader.error);
      reader.readAsText(fileHandle);
    });
  }

  onDropAccepted = (acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const fileHandle = acceptedFiles[0];
      this.handleFileChange('', fileHandle.name); // Show the filename while reading
      this.handleFileReadStarted();
      this.readFile(fileHandle)
        .then(data => {
          this.handleFileReadFinished();
          this.handleFileChange(data as any, fileHandle.name);
        })
        .catch(error => {
          // eslint-disable-next-line no-console
          console.log('error', error);
          this.handleFileReadFinished();
          this.handleFileChange('', ''); // Clear the filename field on a failure
        });
    }
  };

  onDropRejected = (rejectedFiles: File[]) => {
    if (rejectedFiles.length > 0) {
      // eslint-disable-next-line no-console
      console.log('There was an error - i need and error state'); // TODO
    }
  };

  copyCode = () => {
    if (this.timer) {
      window.clearTimeout(this.timer);
      this.setState({ copied: false });
    }
    this.editor.focus();
    document.execCommand('copy');
    this.setState({ copied: true }, () => {
      this.timer = window.setTimeout(() => {
        this.setState({ copied: false });
        this.timer = null;
      }, 2500);
    });
  };

  download = () => {
    const { value } = this.state;
    const element = document.createElement('a');
    const file = new Blob([value], { type: 'text' });
    element.href = URL.createObjectURL(file);
    element.download = `${this.props.downloadFileName}.${CodeEditor.getExtensionFromLanguage(this.props.language)}`;
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };

  toggleEmptyState = () => {
    this.setState({ showEmptyState: false });
  };

  render() {
    const { value, isLoading, showEmptyState, copied } = this.state;
    const {
      isDarkTheme,
      height,
      width,
      className,
      isAllowCopy,
      copyButtonSuccessTooltipText,
      isReadOnly,
      isAllowUpload,
      copyButtonAriaLabel,
      copyButtonToolTipText,
      uploadButtonAriaLabel,
      uploadButtonToolTipText,
      downloadButtonAriaLabel,
      downloadButtonToolTipText,
      toolTipEntryDelay,
      toolTipCopyExitDelay,
      toolTipMaxWidth,
      toolTipPosition,
      isLineNumbers,
      isAllowDownload,
      language,
      emptyState: providedEmptyState,
      customControls
    } = this.props;
    const options = {
      readOnly: isReadOnly,
      cursorStyle: 'line' as any,
      lineNumbers: (isLineNumbers ? 'on' : 'off') as any
    };

    return (
      <Dropzone multiple={false} onDropAccepted={this.onDropAccepted} onDropRejected={this.onDropRejected}>
        {({ getRootProps, getInputProps, isDragActive, open }) => {
          const emptyState =
            providedEmptyState ||
            (isAllowUpload ? (
              <EmptyState variant={EmptyStateVariant.small}>
                <EmptyStateIcon icon={CodeIcon} />
                <Title headingLevel="h4" size="lg">
                  Start editing
                </Title>
                <EmptyStateBody>Drag a file here or browse to upload</EmptyStateBody>
                <Button variant="primary" onClick={open}>
                  Browse
                </Button>
                <EmptyStateSecondaryActions>
                  <Button variant="link" onClick={this.toggleEmptyState}>
                    Start from scratch
                  </Button>
                </EmptyStateSecondaryActions>
              </EmptyState>
            ) : (
              <EmptyState variant={EmptyStateVariant.small}>
                <EmptyStateIcon icon={CodeIcon} />
                <Title headingLevel="h4" size="lg">
                  Start editing
                </Title>
                <Button variant="primary" onClick={this.toggleEmptyState}>
                  Start from scratch
                </Button>
              </EmptyState>
            ));

          const editorHeader = (
            <div className={css(styles.codeEditorHeader)}>
              {(isAllowUpload || isAllowDownload || isAllowUpload) && (
                <div className={css(styles.codeEditorControls)}>
                  {isAllowCopy && (!showEmptyState || !!value) && (
                    <Tooltip
                      trigger="mouseenter"
                      content={<div>{copied ? copyButtonSuccessTooltipText : copyButtonToolTipText}</div>}
                      exitDelay={toolTipCopyExitDelay}
                      entryDelay={toolTipEntryDelay}
                      maxWidth={toolTipMaxWidth}
                      position={toolTipPosition}
                    >
                      <Button onClick={this.copyCode} variant="control" aria-label={copyButtonAriaLabel}>
                        <CopyIcon />
                      </Button>
                    </Tooltip>
                  )}
                  {isAllowUpload && (
                    <Tooltip
                      trigger="mouseenter focus click"
                      content={<div>{uploadButtonToolTipText}</div>}
                      entryDelay={toolTipEntryDelay}
                      maxWidth={toolTipMaxWidth}
                      position={toolTipPosition}
                    >
                      <Button onClick={open} variant="control" aria-label={uploadButtonAriaLabel}>
                        <UploadIcon />
                      </Button>
                    </Tooltip>
                  )}
                  {isAllowDownload && (!showEmptyState || !!value) && (
                    <Tooltip
                      trigger="mouseenter focus click"
                      content={<div>{downloadButtonToolTipText}</div>}
                      entryDelay={toolTipEntryDelay}
                      maxWidth={toolTipMaxWidth}
                      position={toolTipPosition}
                    >
                      <Button onClick={this.download} variant="control" aria-label={downloadButtonAriaLabel}>
                        <DownloadIcon />
                      </Button>
                    </Tooltip>
                  )}
                  {customControls && (
                    <CodeEditorContext.Provider value={{ code: value }}>{customControls}</CodeEditorContext.Provider>
                  )}
                </div>
              )}
              <div className={css(styles.codeEditorTab)}>
                <span className={css(styles.codeEditorTabIcon)}>
                  <CodeIcon />
                </span>
                <span className={css(styles.codeEditorTabText)}>{language.toUpperCase()}</span>
              </div>
            </div>
          );

          const editor = (
            <div className={css(styles.codeEditorCode)}>
              <ControlledEditor
                height={height}
                width={width}
                language={language}
                value={value}
                options={options}
                onChange={this.onChange}
                editorDidMount={this.editorDidMount}
                theme={isDarkTheme ? 'dark' : 'light'}
              />
            </div>
          );

          return (
            <div className={css(styles.codeEditor, isReadOnly && styles.modifiers.readOnly, className)}>
              {isAllowUpload ? (
                <div
                  {...getRootProps({
                    onClick: event => event.preventDefault() // Prevents clicking TextArea from opening file dialog
                  })}
                  className={`pf-c-file-upload ${isDragActive && 'pf-m-drag-hover'} ${isLoading && 'pf-m-loading'}`}
                >
                  {editorHeader}
                  <div className={css(styles.codeEditorMain)}>
                    <input {...getInputProps()} /* hidden, necessary for react-dropzone */ />
                    {showEmptyState && !value ? emptyState : editor}
                  </div>
                </div>
              ) : (
                <>
                  {editorHeader}
                  <div className={css(styles.codeEditorMain)}>{editor}</div>
                </>
              )}
            </div>
          );
        }}
      </Dropzone>
    );
  }
}
