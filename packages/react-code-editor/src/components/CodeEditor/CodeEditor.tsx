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
import MonacoEditor from 'react-monaco-editor';
import { editor } from 'monaco-editor/esm/vs/editor/editor.api';
import CopyIcon from '@patternfly/react-icons/dist/js/icons/copy-icon';
import UploadIcon from '@patternfly/react-icons/dist/js/icons/upload-icon';
import DownloadIcon from '@patternfly/react-icons/dist/js/icons/download-icon';
import CodeIcon from '@patternfly/react-icons/dist/js/icons/code-icon';
import Dropzone from 'react-dropzone';
import { CodeEditorContext } from './CodeEditorUtils';

export enum Language {
  abap = 'abap',
  aes = 'aes',
  apex = 'apex',
  azcli = 'azcli',
  bat = 'bat',
  bicep = 'bicep',
  c = 'c',
  cameligo = 'cameligo',
  clojure = 'clojure',
  coffeescript = 'coffeescript',
  cpp = 'cpp',
  csharp = 'csharp',
  csp = 'csp',
  css = 'css',
  dart = 'dart',
  dockerfile = 'dockerfile',
  ecl = 'ecl',
  elixir = 'elixir',
  fsharp = 'fsharp',
  go = 'go',
  graphql = 'graphql',
  handlebars = 'handlebars',
  hcl = 'hcl',
  html = 'html',
  ini = 'ini',
  java = 'java',
  javascript = 'javascript',
  json = 'json',
  julia = 'julia',
  kotlin = 'kotlin',
  less = 'less',
  lexon = 'lexon',
  liquid = 'liquid',
  lua = 'lua',
  m3 = 'm3',
  markdown = 'markdown',
  mips = 'mips',
  msdax = 'msdax',
  mysql = 'mysql',
  'objective-c' = 'objective-c',
  pascal = 'pascal',
  pascaligo = 'pascaligo',
  perl = 'perl',
  pgsql = 'pgsql',
  php = 'php',
  plaintext = 'plaintext',
  postiats = 'postiats',
  powerquery = 'powerquery',
  powershell = 'powershell',
  pug = 'pug',
  python = 'python',
  r = 'r',
  razor = 'razor',
  redis = 'redis',
  redshift = 'redshift',
  restructuredtext = 'restructuredtext',
  ruby = 'ruby',
  rust = 'rust',
  sb = 'sb',
  scala = 'scala',
  scheme = 'scheme',
  scss = 'scss',
  shell = 'shell',
  sol = 'sol',
  sql = 'sql',
  st = 'st',
  swift = 'swift',
  systemverilog = 'systemverilog',
  tcl = 'tcl',
  twig = 'twig',
  typescript = 'typescript',
  vb = 'vb',
  verilog = 'verilog',
  xml = 'xml',
  yaml = 'yaml'
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
  /** Flag indicating the editor is displaying line numbers */
  isLineNumbersVisible?: boolean;
  /** Flag indicating the editor is read only */
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
  /** Flag to add upload button to code editor actions. Also makes the code editor accept a file using drag and drop */
  isUploadEnabled?: boolean;
  /** Flag to add download button to code editor actions */
  isDownloadEnabled?: boolean;
  /** Flag to add copy button to code editor actions */
  isCopyEnabled?: boolean;
  /** Flag to include a label indicating the currently configured editor language */
  isLanguageLabelVisible?: boolean;
  /** Accessibly label for the copy button */
  copyButtonAriaLabel?: string;
  /** Text to display in the tooltip on the copy button before text is copied */
  copyButtonToolTipText?: string;
  /** Text to display in the tooltip on the copy button after code copied to clipboard */
  copyButtonSuccessTooltipText?: string;
  /** Accessible label for the upload button */
  uploadButtonAriaLabel?: string;
  /** Text to display in the tooltip on the upload button */
  uploadButtonToolTipText?: string;
  /** Accessible label for the download button */
  downloadButtonAriaLabel?: string;
  /** Text to display in the tooltip on the download button */
  downloadButtonToolTipText?: string;
  /** The delay before tooltip fades after code copied */
  toolTipCopyExitDelay: number;
  /** The entry and exit delay for all tooltips */
  toolTipDelay: number;
  /** The max width of the tooltips on all button */
  toolTipMaxWidth: string;
  /** The position of tooltips on all buttons */
  toolTipPosition: 'auto' | 'top' | 'bottom' | 'left' | 'right';
  /** A single node or array of nodes - ideally CodeEditorControls - to display above code editor */
  customControls?: React.ReactNode | React.ReactNode[];
  /** Callback which fires after the code editor is mounted containing
   * a reference to the monaco editor and the monaco instance */
  onEditorDidMount?: (editor: any, monaco: any) => void;
  /** Flag to add the minimap to the code editor */
  isMinimapVisible?: boolean;
  /** Flag to show the editor */
  showEditor?: boolean;
  /**
   * Refer to Monaco interface {monaco.editor.IStandaloneEditorConstructionOptions}.
   */
  options?: editor.IStandaloneEditorConstructionOptions;
  /**
   * Refer to Monaco interface {monaco.editor.IEditorOverrideServices}.
   */
  overrideServices?: editor.IEditorOverrideServices;
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
  private wrapperRef = React.createRef<HTMLDivElement>();
  timer = null as number;

  static defaultProps: CodeEditorProps = {
    className: '',
    code: '',
    onEditorDidMount: () => {},
    language: Language.plaintext,
    isDarkTheme: false,
    height: '',
    width: '',
    isLineNumbersVisible: true,
    isReadOnly: false,
    isLanguageLabelVisible: false,
    loading: '',
    emptyState: '',
    downloadFileName: Date.now().toString(),
    isUploadEnabled: false,
    isDownloadEnabled: false,
    isCopyEnabled: false,
    copyButtonAriaLabel: 'Copy code to clipboard',
    uploadButtonAriaLabel: 'Upload code',
    downloadButtonAriaLabel: 'Download code',
    copyButtonToolTipText: 'Copy to clipboard',
    uploadButtonToolTipText: 'Upload',
    downloadButtonToolTipText: 'Download',
    copyButtonSuccessTooltipText: 'Content added to clipboard',
    toolTipCopyExitDelay: 1600,
    toolTipDelay: 300,
    toolTipMaxWidth: '100px',
    toolTipPosition: 'top',
    customControls: null,
    isMinimapVisible: false,
    showEditor: true,
    options: {},
    overrideServices: {}
  };

  static getExtensionFromLanguage(language: Language) {
    switch (language) {
      case Language.shell:
        return 'sh';
      case Language.ruby:
        return 'rb';
      case Language.perl:
        return 'pl';
      case Language.python:
        return 'py';
      case Language.mysql:
        return 'sql';
      case Language.javascript:
        return 'js';
      case Language.typescript:
        return 'ts';
      case Language.markdown:
        return 'md';
      case Language.plaintext:
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

  onChange = (value: string, event: any) => {
    if (this.props.onChange) {
      this.props.onChange(value, event);
    }
    this.setState({ value });
  };

  componentDidUpdate(prevProps: CodeEditorProps) {
    const { code } = this.props;
    if (prevProps.code !== code) {
      this.setState({ value: code });
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleGlobalKeys);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleGlobalKeys);
  }

  handleGlobalKeys = (event: KeyboardEvent) => {
    if (this.wrapperRef.current === document.activeElement && (event.key === 'ArrowDown' || event.key === ' ')) {
      this.editor.focus();
      event.preventDefault();
    }
  };

  editorDidMount = (editor: any, monaco: any) => {
    // eslint-disable-next-line no-bitwise
    editor.addCommand(monaco.KeyMod.Shift | monaco.KeyCode.Tab, () => this.wrapperRef.current.focus());
    Array.from(document.getElementsByClassName('monaco-editor')).forEach(editorElement =>
      editorElement.removeAttribute('role')
    );
    this.props.onEditorDidMount(editor, monaco);
    this.editor = editor;
  };

  handleFileChange = (value: string, filename: string) => {
    this.setState({
      value,
      filename
    });
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
          console.error('error', error);
          this.handleFileReadFinished();
          this.handleFileChange('', ''); // Clear the filename field on a failure
        });
    }
  };

  onDropRejected = (rejectedFiles: File[]) => {
    if (rejectedFiles.length > 0) {
      // eslint-disable-next-line no-console
      console.error('There was an error accepting that dropped file'); // TODO
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
      isCopyEnabled,
      copyButtonSuccessTooltipText,
      isReadOnly,
      isUploadEnabled,
      isLanguageLabelVisible,
      copyButtonAriaLabel,
      copyButtonToolTipText,
      uploadButtonAriaLabel,
      uploadButtonToolTipText,
      downloadButtonAriaLabel,
      downloadButtonToolTipText,
      toolTipDelay,
      toolTipCopyExitDelay,
      toolTipMaxWidth,
      toolTipPosition,
      isLineNumbersVisible,
      isDownloadEnabled,
      language,
      emptyState: providedEmptyState,
      customControls,
      isMinimapVisible,
      showEditor,
      options: optionsProp,
      overrideServices
    } = this.props;
    const options = {
      readOnly: isReadOnly,
      cursorStyle: 'line' as any,
      lineNumbers: (isLineNumbersVisible ? 'on' : 'off') as any,
      tabIndex: -1,
      minimap: {
        enabled: isMinimapVisible
      },
      ...optionsProp
    };

    return (
      <Dropzone multiple={false} onDropAccepted={this.onDropAccepted} onDropRejected={this.onDropRejected}>
        {({ getRootProps, getInputProps, isDragActive, open }) => {
          const emptyState =
            providedEmptyState ||
            (isUploadEnabled ? (
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
              {(isCopyEnabled || isDownloadEnabled || isUploadEnabled || customControls) && (
                <div className={css(styles.codeEditorControls)}>
                  {isCopyEnabled && (!showEmptyState || !!value) && (
                    <Tooltip
                      trigger="mouseenter"
                      content={<div>{copied ? copyButtonSuccessTooltipText : copyButtonToolTipText}</div>}
                      exitDelay={copied ? toolTipCopyExitDelay : toolTipDelay}
                      entryDelay={toolTipDelay}
                      maxWidth={toolTipMaxWidth}
                      position={toolTipPosition}
                    >
                      <Button onClick={this.copyCode} variant="control" aria-label={copyButtonAriaLabel}>
                        <CopyIcon />
                      </Button>
                    </Tooltip>
                  )}
                  {isUploadEnabled && (
                    <Tooltip
                      trigger="mouseenter focus click"
                      content={<div>{uploadButtonToolTipText}</div>}
                      entryDelay={toolTipDelay}
                      exitDelay={toolTipDelay}
                      maxWidth={toolTipMaxWidth}
                      position={toolTipPosition}
                    >
                      <Button onClick={open} variant="control" aria-label={uploadButtonAriaLabel}>
                        <UploadIcon />
                      </Button>
                    </Tooltip>
                  )}
                  {isDownloadEnabled && (!showEmptyState || !!value) && (
                    <Tooltip
                      trigger="mouseenter focus click"
                      content={<div>{downloadButtonToolTipText}</div>}
                      entryDelay={toolTipDelay}
                      exitDelay={toolTipDelay}
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
              {isLanguageLabelVisible && (
                <div className={css(styles.codeEditorTab)}>
                  <span className={css(styles.codeEditorTabIcon)}>
                    <CodeIcon />
                  </span>
                  <span className={css(styles.codeEditorTabText)}>{language.toUpperCase()}</span>
                </div>
              )}
            </div>
          );

          const editor = (
            <div className={css(styles.codeEditorCode)} ref={this.wrapperRef} tabIndex={0}>
              <MonacoEditor
                height={height}
                width={width}
                language={language}
                value={value}
                options={options}
                overrideServices={overrideServices}
                onChange={this.onChange}
                editorDidMount={this.editorDidMount}
                theme={isDarkTheme ? 'vs-dark' : 'vs-light'}
              />
            </div>
          );

          return (
            <div className={css(styles.codeEditor, isReadOnly && styles.modifiers.readOnly, className)}>
              {isUploadEnabled || providedEmptyState ? (
                <div
                  {...getRootProps({
                    onClick: event => event.preventDefault() // Prevents clicking TextArea from opening file dialog
                  })}
                  className={`pf-c-file-upload ${isDragActive && 'pf-m-drag-hover'} ${isLoading && 'pf-m-loading'}`}
                >
                  {editorHeader}
                  <div className={css(styles.codeEditorMain)}>
                    <input {...getInputProps()} /* hidden, necessary for react-dropzone */ />
                    {(showEmptyState || providedEmptyState) && !value ? emptyState : editor}
                  </div>
                </div>
              ) : (
                <>
                  {editorHeader}
                  {showEditor && <div className={css(styles.codeEditorMain)}>{editor}</div>}
                </>
              )}
            </div>
          );
        }}
      </Dropzone>
    );
  }
}
