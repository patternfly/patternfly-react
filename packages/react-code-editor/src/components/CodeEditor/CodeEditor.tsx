import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/CodeEditor/code-editor';
import fileUploadStyles from '@patternfly/react-styles/css/components/FileUpload/file-upload';
import {
  Button,
  ButtonVariant,
  EmptyState,
  EmptyStateBody,
  EmptyStateIcon,
  EmptyStateActions,
  EmptyStateVariant,
  EmptyStateFooter,
  getResizeObserver,
  Popover,
  PopoverProps,
  TooltipPosition,
  EmptyStateHeader
} from '@patternfly/react-core';
import Editor, { EditorProps, Monaco } from '@monaco-editor/react';
import type { editor } from 'monaco-editor';
import CopyIcon from '@patternfly/react-icons/dist/esm/icons/copy-icon';
import UploadIcon from '@patternfly/react-icons/dist/esm/icons/upload-icon';
import DownloadIcon from '@patternfly/react-icons/dist/esm/icons/download-icon';
import CodeIcon from '@patternfly/react-icons/dist/esm/icons/code-icon';
import HelpIcon from '@patternfly/react-icons/dist/esm/icons/help-icon';
import Dropzone, { FileRejection } from 'react-dropzone';
import { CodeEditorContext } from './CodeEditorUtils';
import { CodeEditorControl } from './CodeEditorControl';

export type ChangeHandler = (value: string, event: editor.IModelContentChangedEvent) => void;
export type EditorDidMount = (editor: editor.IStandaloneCodeEditor, monaco: Monaco) => void;

export interface Shortcut {
  description: string;
  keys: string[];
}

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

/** The main code editor component. */

export interface CodeEditorProps extends Omit<React.HTMLProps<HTMLDivElement>, 'onChange'> {
  /** Additional classes added to the code editor. */
  className?: string;
  /** Code displayed in code editor. */
  code?: string;
  /** Accessible label for the copy button. */
  copyButtonAriaLabel?: string;
  /** Text to display in the tooltip on the copy button after code is copied to clipboard. */
  copyButtonSuccessTooltipText?: string;
  /** Text to display in the tooltip on the copy button before code is copied. */
  copyButtonToolTipText?: string;
  /** A single node or array of nodes - ideally the code editor controls component - to display
   * above code editor.
   */
  customControls?: React.ReactNode | React.ReactNode[];
  /** Accessible label for the download button. */
  downloadButtonAriaLabel?: string;
  /** Text to display in the tooltip on the download button. */
  downloadButtonToolTipText?: string;
  /** Name of the file if user downloads code to local file. */
  downloadFileName?: string;
  /** Additional props to pass to the monaco editor. */
  editorProps?: EditorProps;
  /** Content to display in space of the code editor when there is no code to display. */
  emptyState?: React.ReactNode;
  /** Override default empty state body text. */
  emptyStateBody?: React.ReactNode;
  /** Override default empty state button text. */
  emptyStateButton?: React.ReactNode;
  /** Override default empty state link text. */
  emptyStateLink?: React.ReactNode;
  /** Override default empty state title text. */
  emptyStateTitle?: React.ReactNode;
  /** Editor header main content title. */
  headerMainContent?: string;
  /** Height of code editor. Defaults to 100%. 'sizeToFit' will automatically change the height
   * to the height of the content.
   */
  height?: string | 'sizeToFit';
  /** Flag to add copy button to code editor actions. */
  isCopyEnabled?: boolean;
  /** Flag indicating the editor is styled using monaco's dark theme. */
  isDarkTheme?: boolean;
  /** Flag to add download button to code editor actions. */
  isDownloadEnabled?: boolean;
  /** Flag to include a label indicating the currently configured editor language. */
  isLanguageLabelVisible?: boolean;
  /** Flag indicating the editor is displaying line numbers. */
  isLineNumbersVisible?: boolean;
  /** Flag to add the minimap to the code editor. */
  isMinimapVisible?: boolean;
  /** Flag indicating the editor is read only. */
  isReadOnly?: boolean;
  /** Flag to add upload button to code editor actions. Also makes the code editor accept a
   * file using drag and drop. */
  isUploadEnabled?: boolean;
  /** Language displayed in the editor. */
  language?: Language;
  /** The loading screen before the editor will be loaded. Defaults to 'loading...'. */
  loading?: React.ReactNode;
  /** Function which fires each time the content of the code editor is manually changed. Does
   * not fire when a file is uploaded.
   */
  onChange?: ChangeHandler;
  /** Function which fires each time the code changes in the code editor. */
  onCodeChange?: (value: string) => void;
  /** Callback which fires after the code editor is mounted containing a reference to the
   * monaco editor and the monaco instance.
   */
  onEditorDidMount?: EditorDidMount;
  /** Refer to Monaco interface {monaco.editor.IStandaloneEditorConstructionOptions}. */
  options?: editor.IStandaloneEditorConstructionOptions;
  /** Refer to Monaco interface {monaco.editor.IEditorOverrideServices}. */
  overrideServices?: editor.IEditorOverrideServices;
  /** Text to show in the button to open the shortcut popover. */
  shortcutsPopoverButtonText: string;
  /** Properties for the shortcut popover. */
  shortcutsPopoverProps?: PopoverProps;
  /** Flag to show the editor. */
  showEditor?: boolean;
  /** The delay before tooltip fades after code copied. */
  toolTipCopyExitDelay: number;
  /** The entry and exit delay for all tooltips. */
  toolTipDelay: number;
  /** The max width of the tooltips on all button. */
  toolTipMaxWidth: string;
  /** The position of tooltips on all buttons. */
  toolTipPosition?:
    | TooltipPosition
    | 'auto'
    | 'top'
    | 'bottom'
    | 'left'
    | 'right'
    | 'top-start'
    | 'top-end'
    | 'bottom-start'
    | 'bottom-end'
    | 'left-start'
    | 'left-end'
    | 'right-start'
    | 'right-end';
  /** Accessible label for the upload button. */
  uploadButtonAriaLabel?: string;
  /** Text to display in the tooltip on the upload button. */
  uploadButtonToolTipText?: string;
  /** Width of code editor. Defaults to 100%. */
  width?: string;
}

interface CodeEditorState {
  height: string;
  prevPropsCode: string;
  value: string;
  filename: string;
  isLoading: boolean;
  showEmptyState: boolean;
  copied: boolean;
}

class CodeEditor extends React.Component<CodeEditorProps, CodeEditorState> {
  static displayName = 'CodeEditor';
  private editor: editor.IStandaloneCodeEditor | null = null;
  private wrapperRef = React.createRef<HTMLDivElement>();
  private ref = React.createRef<HTMLDivElement>();
  private timer: number | null = null;
  private observer = () => {};

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
    emptyStateTitle: 'Start editing',
    emptyStateBody: 'Drag and drop a file or upload one.',
    emptyStateButton: 'Browse',
    emptyStateLink: 'Start from scratch',
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
    headerMainContent: '',
    shortcutsPopoverButtonText: 'View Shortcuts',
    shortcutsPopoverProps: {
      bodyContent: '',
      'aria-label': 'Keyboard Shortcuts',
      ...Popover.defaultProps
    },
    showEditor: true,
    options: {},
    overrideServices: {},
    onCodeChange: () => {}
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
      height: this.props.height,
      prevPropsCode: this.props.code,
      value: this.props.code,
      filename: '',
      isLoading: false,
      showEmptyState: true,
      copied: false
    };
  }

  setHeightToFitContent() {
    const contentHeight = this.editor.getContentHeight();
    const layoutInfo = this.editor.getLayoutInfo();
    this.editor.layout({ width: layoutInfo.width, height: contentHeight });
  }

  onChange: ChangeHandler = (value, event) => {
    if (this.props.height === 'sizeToFit') {
      this.setHeightToFitContent();
    }
    if (this.props.onChange) {
      this.props.onChange(value, event);
    }
    this.setState({ value });
    this.props.onCodeChange(value);
  };

  // this function is only called when the props change
  // the only conflict is between props.code and state.value
  static getDerivedStateFromProps(nextProps: CodeEditorProps, prevState: CodeEditorState) {
    // if the code changes due to the props.code changing
    // set the value to props.code
    if (nextProps.code !== prevState.prevPropsCode) {
      return {
        value: nextProps.code,
        prevPropsCode: nextProps.code
      };
    }
    // else, don't need to change the state.value
    // because the onChange function will do all the work
    return null;
  }

  handleResize = () => {
    if (this.editor) {
      this.editor.layout();
    }
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleGlobalKeys);
    this.observer = getResizeObserver(this.ref.current, this.handleResize, true);
    this.handleResize();
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleGlobalKeys);
    this.observer();
  }

  handleGlobalKeys = (event: KeyboardEvent) => {
    if (this.wrapperRef.current === document.activeElement && (event.key === 'ArrowDown' || event.key === ' ')) {
      this.editor?.focus();
      event.preventDefault();
    }
  };

  editorDidMount: EditorDidMount = (editor, monaco) => {
    // eslint-disable-next-line no-bitwise
    editor.addCommand(monaco.KeyMod.Shift | monaco.KeyCode.Tab, () => this.wrapperRef.current.focus());
    Array.from(document.getElementsByClassName('monaco-editor')).forEach((editorElement) =>
      editorElement.removeAttribute('role')
    );
    this.props.onEditorDidMount(editor, monaco);
    this.editor = editor;
    if (this.props.height === 'sizeToFit') {
      this.setHeightToFitContent();
    }
  };

  handleFileChange = (value: string, filename: string) => {
    this.setState({
      value,
      filename
    });
    this.props.onCodeChange(value);
  };

  handleFileReadStarted = () => this.setState({ isLoading: true });
  handleFileReadFinished = () => this.setState({ isLoading: false });

  readFile(fileHandle: Blob) {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
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
        .then((data) => {
          this.handleFileReadFinished();
          this.toggleEmptyState();
          this.handleFileChange(data, fileHandle.name);
        })
        .catch((error: DOMException) => {
          // eslint-disable-next-line no-console
          console.error('error', error);
          this.handleFileReadFinished();
          this.handleFileChange('', ''); // Clear the filename field on a failure
        });
    }
  };

  onDropRejected = (rejectedFiles: FileRejection[]) => {
    if (rejectedFiles.length > 0) {
      // eslint-disable-next-line no-console
      console.error('There was an error accepting that dropped file'); // TODO
    }
  };

  copyCode = () => {
    navigator.clipboard.writeText(this.state.value);
    this.setState({ copied: true });
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
    const { height, value, isLoading, showEmptyState, copied } = this.state;
    const {
      isDarkTheme,
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
      emptyStateTitle,
      emptyStateBody,
      emptyStateButton,
      emptyStateLink,
      customControls,
      isMinimapVisible,
      headerMainContent,
      shortcutsPopoverButtonText,
      shortcutsPopoverProps: shortcutsPopoverPropsProp,
      showEditor,
      options: optionsProp,
      overrideServices,
      editorProps
    } = this.props;
    const shortcutsPopoverProps: PopoverProps = {
      ...CodeEditor.defaultProps.shortcutsPopoverProps,
      ...shortcutsPopoverPropsProp
    };
    const options: editor.IStandaloneEditorConstructionOptions = {
      scrollBeyondLastLine: height !== 'sizeToFit',
      readOnly: isReadOnly,
      cursorStyle: 'line',
      lineNumbers: isLineNumbersVisible ? 'on' : 'off',
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
              <EmptyState variant={EmptyStateVariant.sm}>
                <EmptyStateHeader
                  titleText={emptyStateTitle}
                  icon={<EmptyStateIcon icon={CodeIcon} />}
                  headingLevel="h4"
                />
                <EmptyStateBody>{emptyStateBody}</EmptyStateBody>
                {!isReadOnly && (
                  <EmptyStateFooter>
                    <EmptyStateActions>
                      <Button variant="primary" onClick={open}>
                        {emptyStateButton}
                      </Button>
                    </EmptyStateActions>
                    <EmptyStateActions>
                      <Button variant="link" onClick={this.toggleEmptyState}>
                        {emptyStateLink}
                      </Button>
                    </EmptyStateActions>
                  </EmptyStateFooter>
                )}
              </EmptyState>
            ) : (
              <EmptyState variant={EmptyStateVariant.sm}>
                <EmptyStateHeader
                  titleText={emptyStateTitle}
                  icon={<EmptyStateIcon icon={CodeIcon} />}
                  headingLevel="h4"
                />
                {!isReadOnly && (
                  <EmptyStateFooter>
                    <EmptyStateActions>
                      <Button variant="primary" onClick={this.toggleEmptyState}>
                        {emptyStateLink}
                      </Button>
                    </EmptyStateActions>
                  </EmptyStateFooter>
                )}
              </EmptyState>
            ));

          const tooltipProps = {
            position: toolTipPosition,
            exitDelay: toolTipDelay,
            entryDelay: toolTipDelay,
            maxWidth: toolTipMaxWidth,
            trigger: 'mouseenter focus'
          };

          const editorHeader = (
            <div className={css(styles.codeEditorHeader)}>
              {
                <div className={css(styles.codeEditorControls)}>
                  <CodeEditorContext.Provider value={{ code: value }}>
                    {isCopyEnabled && (!showEmptyState || !!value) && (
                      <CodeEditorControl
                        icon={<CopyIcon />}
                        aria-label={copyButtonAriaLabel}
                        tooltipProps={{
                          ...tooltipProps,
                          'aria-live': 'polite',
                          content: <div>{copied ? copyButtonSuccessTooltipText : copyButtonToolTipText}</div>,
                          exitDelay: copied ? toolTipCopyExitDelay : toolTipDelay,
                          onTooltipHidden: () => this.setState({ copied: false })
                        }}
                        onClick={this.copyCode}
                      />
                    )}
                    {isUploadEnabled && (
                      <CodeEditorControl
                        icon={<UploadIcon />}
                        aria-label={uploadButtonAriaLabel}
                        tooltipProps={{ content: <div>{uploadButtonToolTipText}</div>, ...tooltipProps }}
                        onClick={open}
                      />
                    )}
                    {isDownloadEnabled && (!showEmptyState || !!value) && (
                      <CodeEditorControl
                        icon={<DownloadIcon />}
                        aria-label={downloadButtonAriaLabel}
                        tooltipProps={{ content: <div>{downloadButtonToolTipText}</div>, ...tooltipProps }}
                        onClick={this.download}
                      />
                    )}
                    {customControls && customControls}
                  </CodeEditorContext.Provider>
                </div>
              }
              {<div className={css(styles.codeEditorHeaderMain)}>{headerMainContent}</div>}
              {!!shortcutsPopoverProps.bodyContent && (
                <div className={`${styles.codeEditor}__keyboard-shortcuts`}>
                  <Popover {...shortcutsPopoverProps}>
                    <Button variant={ButtonVariant.link} icon={<HelpIcon />}>
                      {shortcutsPopoverButtonText}
                    </Button>
                  </Popover>
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
            <div className={css(styles.codeEditorCode)} ref={this.wrapperRef} tabIndex={0} dir="ltr">
              <Editor
                height={height}
                width={width}
                language={language}
                value={value}
                options={options}
                overrideServices={overrideServices}
                onChange={this.onChange}
                onMount={this.editorDidMount}
                theme={isDarkTheme ? 'vs-dark' : 'vs-light'}
                {...editorProps}
              />
            </div>
          );

          return (
            <div className={css(styles.codeEditor, isReadOnly && styles.modifiers.readOnly, className)} ref={this.ref}>
              {isUploadEnabled || providedEmptyState ? (
                <div
                  {...getRootProps({
                    onClick: (event) => event.stopPropagation() // Prevents clicking TextArea from opening file dialog
                  })}
                  className={`${fileUploadStyles.fileUpload} ${isDragActive && fileUploadStyles.modifiers.dragHover} ${
                    isLoading && fileUploadStyles.modifiers.loading
                  }`}
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

export { CodeEditor };
