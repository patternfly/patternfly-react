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
import CopyIcon from '@patternfly/react-icons/dist/js/icons/copy-icon';
import UploadIcon from '@patternfly/react-icons/dist/js/icons/upload-icon';
import DownloadIcon from '@patternfly/react-icons/dist/js/icons/download-icon';
import CodeIcon from '@patternfly/react-icons/dist/js/icons/code-icon';
import Dropzone from 'react-dropzone';

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
  /** */
  onChange?: (value?: string) => void;
  /** The loading screen before the editor will be loaded. Defaults 'loading...' */
  loading?: React.ReactNode;
  /** Content to display in space of the code editor when there is no code to display */
  emptyState?: React.ReactNode;
  /** Name of the file if user downloads code to local file */
  downloadFileName?: string;
  /** */
  isAllowUpload?: boolean;
  /** */
  isAllowDownload?: boolean;
  /** */
  isAllowCopy?: boolean;
  /** */
  copyButtonAriaLabel?: string;
  /** */
  copyButtonSuccessTooltipText?: string;
}

interface CodeEditorState {
  value: string;
  filename: string;
  isLoading: boolean;
  showEmptyState: boolean;
}

export class CodeEditor extends React.Component<CodeEditorProps, CodeEditorState> {
  static displayName = 'CodeEditor';
  private editor: any = null;
  static defaultProps: CodeEditorProps = {
    className: '',
    code: '',
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
    copyButtonSuccessTooltipText: 'Content added to clipboard'
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
      showEmptyState: true
    };
  }

  onChange = (event: any, value: string) => {
    if (this.props.onChange) {
      this.props.onChange(value);
    }
    this.setState({ value });
  };

  editorDidMount = (getEditorValue: () => string, editor: any) => {
    this.editor = editor;
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
    this.editor.focus();
    document.execCommand('copy');
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
    const { value, isLoading, showEmptyState } = this.state;
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
      isLineNumbers,
      isAllowDownload,
      language,
      emptyState: providedEmptyState
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
                    <Tooltip trigger="click" content={<div>{copyButtonSuccessTooltipText}</div>}>
                      <Button onClick={this.copyCode} variant="control" aria-label={copyButtonAriaLabel}>
                        <CopyIcon />
                      </Button>
                    </Tooltip>
                  )}
                  {isAllowUpload && (
                    <Button onClick={open} variant="control">
                      <UploadIcon />
                    </Button>
                  )}
                  {isAllowDownload && (!showEmptyState || !!value) && (
                    <Button onClick={this.download} variant="control">
                      <DownloadIcon />
                    </Button>
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
