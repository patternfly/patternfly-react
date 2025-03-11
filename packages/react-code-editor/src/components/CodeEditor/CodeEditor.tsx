import { HTMLProps, ReactNode, useEffect, useRef, useState } from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/CodeEditor/code-editor';
import fileUploadStyles from '@patternfly/react-styles/css/components/FileUpload/file-upload';
import monoFont from '@patternfly/react-tokens/dist/esm/t_global_font_family_mono';
import { Button, ButtonVariant } from '@patternfly/react-core/dist/esm/components/Button';
import {
  EmptyState,
  EmptyStateActions,
  EmptyStateBody,
  EmptyStateFooter,
  EmptyStateVariant
} from '@patternfly/react-core/dist/esm/components/EmptyState';
import { Popover, PopoverProps } from '@patternfly/react-core/dist/esm/components/Popover';
import { TooltipPosition } from '@patternfly/react-core/dist/esm/components/Tooltip';
import { getResizeObserver } from '@patternfly/react-core/dist/esm/helpers/resizeObserver';
import Editor, { BeforeMount, EditorProps, Monaco } from '@monaco-editor/react';
import type { editor } from 'monaco-editor';
import CopyIcon from '@patternfly/react-icons/dist/esm/icons/copy-icon';
import UploadIcon from '@patternfly/react-icons/dist/esm/icons/upload-icon';
import DownloadIcon from '@patternfly/react-icons/dist/esm/icons/download-icon';
import CodeIcon from '@patternfly/react-icons/dist/esm/icons/code-icon';
import HelpIcon from '@patternfly/react-icons/dist/esm/icons/help-icon';
import Dropzone, { FileRejection } from 'react-dropzone';
import { CodeEditorContext } from './CodeEditorUtils';
import { CodeEditorControl } from './CodeEditorControl';
import { defineThemes } from './CodeEditorTheme';

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

export interface CodeEditorProps extends Omit<HTMLProps<HTMLDivElement>, 'onChange'> {
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
  customControls?: ReactNode | ReactNode[];
  /** Accessible label for the download button. */
  downloadButtonAriaLabel?: string;
  /** Text to display in the tooltip on the download button. */
  downloadButtonToolTipText?: string;
  /** Name of the file if user downloads code to local file. */
  downloadFileName?: string;
  /** Additional props to pass to the monaco editor. */
  editorProps?: EditorProps;
  /** Content to display in space of the code editor when there is no code to display. */
  emptyState?: ReactNode;
  /** Override default empty state body text. */
  emptyStateBody?: ReactNode;
  /** Override default empty state button text. */
  emptyStateButton?: ReactNode;
  /** Override default empty state link text. */
  emptyStateLink?: ReactNode;
  /** Override default empty state title text. */
  emptyStateTitle?: ReactNode;
  /** Editor header main content title. */
  headerMainContent?: string;
  /** Height of code editor. 'sizeToFit' will automatically change the height
   * to the height of the content.
   */
  height?: string | 'sizeToFit';
  /** Flag to add copy button to code editor actions. */
  isCopyEnabled?: boolean;
  /** Flag indicating the editor is styled using monaco's dark theme. */
  isDarkTheme?: boolean;
  /** Flag that enables component to consume the available height of its container. If `height` prop is set to 100%, this will also become enabled. */
  isFullHeight?: boolean;
  /** Flag indicating the editor has a plain header. */
  isHeaderPlain?: boolean;
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
  loading?: ReactNode;
  /** Function which fires each time the content of the code editor is manually changed. Does
   * not fire when a file is uploaded.
   */
  onChange?: ChangeHandler;
  /** Function which fires each time the code changes in the code editor. */
  onCodeChange?: (value: string) => void;
  /** Function which fires when the code is downloaded. Defaults to a function that
   * downloads the current editor content. */
  onDownload?: (value: string, fileName: string) => void;
  /** Callback which fires after the code editor is mounted containing a reference to the
   * monaco editor and the monaco instance.
   */
  onEditorDidMount?: EditorDidMount;
  /** Refer to Monaco interface {monaco.editor.IStandaloneEditorConstructionOptions}. */
  options?: editor.IStandaloneEditorConstructionOptions;
  /** Refer to Monaco interface {monaco.editor.IEditorOverrideServices}. */
  overrideServices?: editor.IEditorOverrideServices;
  /** Text to show in the button to open the shortcut popover. */
  shortcutsPopoverButtonText?: string;
  /** Properties for the shortcut popover. */
  shortcutsPopoverProps?: PopoverProps;
  /** Flag to show the editor. */
  showEditor?: boolean;
  /** The delay before tooltip fades after code copied. */
  toolTipCopyExitDelay?: number;
  /** The entry and exit delay for all tooltips. */
  toolTipDelay?: number;
  /** The max width of the tooltips on all button. */
  toolTipMaxWidth?: string;
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

const getExtensionFromLanguage = (language: Language) => {
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
};

/**
 * Downloads a file to a users device given its string content and a full file name.
 */
const defaultOnDownload = (value: string, fileName: string) => {
  const link = document.createElement('a');
  link.href = URL.createObjectURL(new Blob([value], { type: 'text' }));
  link.download = fileName;
  link.click();
};

export const CodeEditor = ({
  className = '',
  code = '',
  copyButtonAriaLabel = 'Copy code to clipboard',
  copyButtonSuccessTooltipText = 'Content added to clipboard',
  copyButtonToolTipText = 'Copy to clipboard',
  customControls = null,
  downloadButtonAriaLabel = 'Download code',
  downloadButtonToolTipText = 'Download',
  downloadFileName = Date.now().toString(),
  editorProps,
  emptyState = '',
  emptyStateBody = 'Drag and drop a file or upload one.',
  emptyStateButton = 'Browse',
  emptyStateLink = 'Start from scratch',
  emptyStateTitle = 'Start editing',
  headerMainContent = '',
  height,
  isCopyEnabled = false,
  isDarkTheme = false,
  isDownloadEnabled = false,
  isFullHeight = false,
  isHeaderPlain = false,
  isLanguageLabelVisible = false,
  isLineNumbersVisible = true,
  isMinimapVisible = false,
  isReadOnly = false,
  isUploadEnabled = false,
  language = Language.plaintext,
  loading = '',
  onChange = () => {},
  onCodeChange = () => {},
  onDownload = defaultOnDownload,
  onEditorDidMount = () => {},
  options = {},
  overrideServices = {},
  shortcutsPopoverButtonText = 'View Shortcuts',
  shortcutsPopoverProps = { bodyContent: '', 'aria-label': 'Keyboard Shortcuts' },
  showEditor = true,
  toolTipCopyExitDelay = 1600,
  toolTipDelay = 300,
  toolTipMaxWidth = '100px',
  toolTipPosition = 'top',
  uploadButtonAriaLabel = 'Upload code',
  uploadButtonToolTipText = 'Upload',
  width = ''
}: CodeEditorProps) => {
  const [value, setValue] = useState(code);
  const [isLoading, setIsLoading] = useState(false);
  const [showEmptyState, setShowEmptyState] = useState(true);
  const [copied, setCopied] = useState(false);

  const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLDivElement>(null);
  const observer = useRef(() => {});

  const setHeightToFitContent = () => {
    const contentHeight = editorRef.current?.getContentHeight();
    const layoutInfo = editorRef.current?.getLayoutInfo();
    editorRef.current?.layout({ width: layoutInfo.width, height: contentHeight });
  };

  const onModelChange: ChangeHandler = (value, event) => {
    if (height === 'sizeToFit') {
      setHeightToFitContent();
    }
    if (onChange) {
      onChange(value, event);
    }
    setValue(value);
    onCodeChange(value);
  };

  const handleResize = () => {
    if (editorRef.current) {
      editorRef.current.layout({ width: 0, height: 0 }); // ensures the editor won't take up more space than it needs
      editorRef.current.layout();
    }
  };

  const handleGlobalKeys = (event: KeyboardEvent) => {
    if (wrapperRef.current === document.activeElement && (event.key === 'ArrowDown' || event.key === ' ')) {
      editorRef.current?.focus();
      event.preventDefault();
    }
  };

  // if the code changes due to the prop changing
  // set the value to the code prop
  useEffect(() => setValue(code), [code]);

  useEffect(() => {
    document.addEventListener('keydown', handleGlobalKeys);
    observer.current = getResizeObserver(ref.current, handleResize, true);
    handleResize();
    return () => {
      document.removeEventListener('keydown', handleGlobalKeys);
      observer.current();
    };
  }, []);

  const editorBeforeMount: BeforeMount = (monaco) => {
    defineThemes(monaco.editor);
    editorProps?.beforeMount?.(monaco);
  };

  const editorDidMount: EditorDidMount = (editor, monaco) => {
    // eslint-disable-next-line no-bitwise
    editor.addCommand(monaco.KeyMod.Shift | monaco.KeyCode.Tab, () => wrapperRef.current.focus());
    Array.from(document.getElementsByClassName('monaco-editor')).forEach((editorElement) =>
      editorElement.removeAttribute('role')
    );
    onEditorDidMount(editor, monaco);
    editorRef.current = editor;
    if (height === 'sizeToFit') {
      setHeightToFitContent();
    }
  };

  const handleFileChange = (value: string) => {
    setValue(value);
    onCodeChange(value);
  };

  const handleFileReadStarted = () => setIsLoading(true);
  const handleFileReadFinished = () => setIsLoading(false);

  const readFile = (fileHandle: Blob) =>
    new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = () => reject(reader.error);
      reader.readAsText(fileHandle);
    });

  const onDropAccepted = (acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const fileHandle = acceptedFiles[0];
      handleFileChange(''); // Show the filename while reading
      handleFileReadStarted();
      readFile(fileHandle)
        .then((data) => {
          handleFileReadFinished();
          setShowEmptyState(false);
          handleFileChange(data);
        })
        .catch((error: DOMException) => {
          // eslint-disable-next-line no-console
          console.error('error', error);
          handleFileReadFinished();
          handleFileChange('');
        });
    }
  };

  const onDropRejected = (rejectedFiles: FileRejection[]) => {
    if (rejectedFiles.length > 0) {
      // eslint-disable-next-line no-console
      console.error('There was an error accepting that dropped file'); // TODO
    }
  };

  const copyCode = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
  };

  const editorOptions: editor.IStandaloneEditorConstructionOptions = {
    fontFamily: monoFont.var,
    scrollBeyondLastLine: height !== 'sizeToFit',
    readOnly: isReadOnly,
    cursorStyle: 'line',
    lineNumbers: isLineNumbersVisible ? 'on' : 'off',
    tabIndex: -1,
    minimap: {
      enabled: isMinimapVisible
    },
    ...options
  };

  const tooltipProps = {
    position: toolTipPosition,
    exitDelay: toolTipDelay,
    entryDelay: toolTipDelay,
    maxWidth: toolTipMaxWidth,
    trigger: 'mouseenter focus'
  };

  const hasEditorHeaderContent =
    ((isCopyEnabled || isDownloadEnabled) && (!showEmptyState || !!value)) ||
    isUploadEnabled ||
    customControls ||
    headerMainContent ||
    !!shortcutsPopoverProps.bodyContent;

  return (
    <Dropzone multiple={false} onDropAccepted={onDropAccepted} onDropRejected={onDropRejected}>
      {({ getRootProps, getInputProps, isDragActive, open }) => {
        const hiddenFileInput = <input {...getInputProps()} /* hidden, necessary for react-dropzone */ hidden />;

        const editorEmptyState =
          emptyState ||
          (isUploadEnabled ? (
            <EmptyState variant={EmptyStateVariant.sm} titleText={emptyStateTitle} icon={CodeIcon} headingLevel="h4">
              <EmptyStateBody>{emptyStateBody}</EmptyStateBody>
              {!isReadOnly && (
                <EmptyStateFooter>
                  <EmptyStateActions>
                    <Button variant="primary" onClick={open}>
                      {emptyStateButton}
                    </Button>
                  </EmptyStateActions>
                  <EmptyStateActions>
                    <Button variant="link" onClick={() => setShowEmptyState(false)}>
                      {emptyStateLink}
                    </Button>
                  </EmptyStateActions>
                </EmptyStateFooter>
              )}
            </EmptyState>
          ) : (
            <EmptyState variant={EmptyStateVariant.sm} titleText={emptyStateTitle} icon={CodeIcon} headingLevel="h4">
              {!isReadOnly && (
                <EmptyStateFooter>
                  <EmptyStateActions>
                    <Button variant="primary" onClick={() => setShowEmptyState(false)}>
                      {emptyStateLink}
                    </Button>
                  </EmptyStateActions>
                </EmptyStateFooter>
              )}
            </EmptyState>
          ));

        const editorHeaderContent = (
          <>
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
                      onTooltipHidden: () => setCopied(false)
                    }}
                    onClick={copyCode}
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
                    onClick={() => {
                      onDownload(value, `${downloadFileName}.${getExtensionFromLanguage(language)}`);
                    }}
                  />
                )}
                {customControls && customControls}
              </CodeEditorContext.Provider>
            </div>
            {headerMainContent && <div className={css(styles.codeEditorHeaderMain)}>{headerMainContent}</div>}
            {!!shortcutsPopoverProps.bodyContent && (
              <div className={`${styles.codeEditor}__keyboard-shortcuts`}>
                <Popover {...shortcutsPopoverProps}>
                  <Button variant={ButtonVariant.link} icon={<HelpIcon />}>
                    {shortcutsPopoverButtonText}
                  </Button>
                </Popover>
              </div>
            )}
          </>
        );

        const editorHeader = (
          <div className={css(styles.codeEditorHeader, isHeaderPlain && styles.modifiers.plain)}>
            {hasEditorHeaderContent && <div className={css(styles.codeEditorHeaderContent)}>{editorHeaderContent}</div>}
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
          <div className={css(styles.codeEditorCode)} ref={wrapperRef} tabIndex={0} dir="ltr">
            <Editor
              height={height === '100%' ? undefined : height}
              width={width}
              language={language}
              value={value}
              options={editorOptions}
              overrideServices={overrideServices}
              onChange={onModelChange}
              onMount={editorDidMount}
              loading={loading}
              theme={isDarkTheme ? 'pf-v6-theme-dark' : 'pf-v6-theme-light'}
              {...editorProps}
              beforeMount={editorBeforeMount}
            />
          </div>
        );

        return (
          <div
            className={css(
              styles.codeEditor,
              isReadOnly && styles.modifiers.readOnly,
              (height === '100%' ? true : isFullHeight) && styles.modifiers.fullHeight,
              className
            )}
            ref={ref}
          >
            {(isUploadEnabled || emptyState) && !value ? (
              <div
                {...getRootProps({
                  onClick: (event) => event.stopPropagation() // Prevents clicking TextArea from opening file dialog
                })}
                className={css(styles.codeEditorContainer, isLoading && fileUploadStyles.modifiers.loading)}
              >
                {editorHeader}
                <div className={css(styles.codeEditorMain, isDragActive && styles.modifiers.dragHover)}>
                  {(showEmptyState || emptyState) && !value ? (
                    <div className={css(styles.codeEditorUpload)}>
                      {hiddenFileInput}
                      {editorEmptyState}
                    </div>
                  ) : (
                    <>
                      {hiddenFileInput}
                      {editor}
                    </>
                  )}
                </div>
              </div>
            ) : (
              <>
                {editorHeader}
                {showEditor && (
                  <div className={css(styles.codeEditorMain)}>
                    {hiddenFileInput}
                    {editor}
                  </div>
                )}
              </>
            )}
          </div>
        );
      }}
    </Dropzone>
  );
};

CodeEditor.displayName = 'CodeEditor';
