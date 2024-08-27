import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/ClipboardCopy/clipboard-copy';
import { css } from '@patternfly/react-styles';
import { PickOptional } from '../../helpers/typeUtils';
import { TooltipPosition } from '../Tooltip';
import { TextInput } from '../TextInput';
import { GenerateId } from '../../helpers/GenerateId/GenerateId';
import { ClipboardCopyButton } from './ClipboardCopyButton';
import { ClipboardCopyToggle } from './ClipboardCopyToggle';
import { ClipboardCopyExpanded } from './ClipboardCopyExpanded';
import { getOUIAProps, OUIAProps } from '../../helpers';

export const clipboardCopyFunc = (_event: React.ClipboardEvent<HTMLDivElement>, text?: React.ReactNode) => {
  try {
    navigator.clipboard.writeText(text.toString());
  } catch (error) {
    // eslint-disable-next-line no-console
    console.warn(
      "Clipboard API not found, this copy function will not work. This is likely because you're using an",
      "unsupported browser or you're not using HTTPS. \n\nIf you're a developer building an application which needs",
      "to support copying to the clipboard without the clipboard API, you'll have to create your own copy",
      'function and pass it to the ClipboardCopy component as the onCopy prop. For more information see',
      'https://developer.mozilla.org/en-US/docs/Web/API/Navigator/clipboard'
    );

    // eslint-disable-next-line no-console
    console.error(error);
  }
};

export enum ClipboardCopyVariant {
  inline = 'inline',
  expansion = 'expansion',
  inlineCompact = 'inline-compact'
}

export interface ClipboardCopyState {
  text: string;
  expanded: boolean;
  copied: boolean;
  textWhenExpanded: string;
}

export interface ClipboardCopyProps extends Omit<React.HTMLProps<HTMLDivElement>, 'onChange' | 'children'>, OUIAProps {
  /** Additional classes added to the clipboard copy container. */
  className?: string;
  /** Tooltip message to display when hover the copy button */
  hoverTip?: string;
  /** Tooltip message to display when clicking the copy button */
  clickTip?: string;
  /** Aria-label to use on the TextInput. */
  textAriaLabel?: string;
  /** Aria-label to use on the ClipboardCopyToggle. */
  toggleAriaLabel?: string;
  /** Flag to show if the input is read only. */
  isReadOnly?: boolean;
  /** Flag to determine if clipboard copy is in the expanded state initially */
  isExpanded?: boolean;
  /** Flag to determine if clipboard copy content includes code */
  isCode?: boolean;
  /** Flag to determine if inline clipboard copy should be block styling */
  isBlock?: boolean;
  /** Adds Clipboard Copy variant styles. */
  variant?: typeof ClipboardCopyVariant | 'inline' | 'expansion' | 'inline-compact';
  /** Copy button tooltip position. */
  position?:
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
  /** Maximum width of the tooltip (default 150px). */
  maxWidth?: string;
  /** Delay in ms before the tooltip disappears. */
  exitDelay?: number;
  /** Delay in ms before the tooltip appears. */
  entryDelay?: number;
  /** A function that is triggered on clicking the copy button. This will replace the existing clipboard copy functionality entirely. */
  onCopy?: (event: React.ClipboardEvent<HTMLDivElement>, text?: React.ReactNode) => void;
  /** A function that is triggered on changing the text. */
  onChange?: (event: React.FormEvent, text?: string) => void;
  /** The text which is copied. */
  children: string;
  /** Additional actions for inline clipboard copy. Should be wrapped with ClipboardCopyAction. */
  additionalActions?: React.ReactNode;
  /** Value to overwrite the randomly generated data-ouia-component-id.*/
  ouiaId?: number | string;
  /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
  ouiaSafe?: boolean;
}

class ClipboardCopy extends React.Component<ClipboardCopyProps, ClipboardCopyState> {
  static displayName = 'ClipboardCopy';
  timer = null as number;
  constructor(props: ClipboardCopyProps) {
    super(props);
    const text = Array.isArray(this.props.children) ? this.props.children.join('') : (this.props.children as string);
    this.state = {
      text,
      expanded: this.props.isExpanded,
      copied: false,
      textWhenExpanded: text
    };
  }

  static defaultProps: PickOptional<ClipboardCopyProps> = {
    hoverTip: 'Copy to clipboard',
    clickTip: 'Successfully copied to clipboard!',
    isReadOnly: false,
    isExpanded: false,
    isCode: false,
    variant: 'inline',
    position: TooltipPosition.top,
    maxWidth: '150px',
    exitDelay: 1500,
    entryDelay: 300,
    onCopy: clipboardCopyFunc,
    onChange: (): any => undefined,
    textAriaLabel: 'Copyable input',
    toggleAriaLabel: 'Show content',
    additionalActions: null,
    ouiaSafe: true
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  componentDidUpdate = (prevProps: ClipboardCopyProps, prevState: ClipboardCopyState) => {
    if (prevProps.children !== this.props.children) {
      const newText = this.props.children as string;
      this.setState({ text: newText, textWhenExpanded: newText });
    }
  };

  componentWillUnmount = () => {
    if (this.timer) {
      window.clearTimeout(this.timer);
    }
  };

  expandContent = (_event: React.MouseEvent<Element, MouseEvent>) => {
    this.setState((prevState) => ({
      expanded: !prevState.expanded
    }));
  };

  updateText = (event: React.FormEvent, text: string) => {
    this.setState({ text });
    this.props.onChange(event, text);
  };

  updateTextWhenExpanded = (event: React.FormEvent, text: string) => {
    this.setState({ textWhenExpanded: text });
    this.props.onChange(event, text);
  };

  render = () => {
    const {
      /* eslint-disable @typescript-eslint/no-unused-vars */
      isExpanded,
      onChange, // Don't pass to <div>
      /* eslint-enable @typescript-eslint/no-unused-vars */
      isReadOnly,
      isCode,
      isBlock,
      exitDelay,
      maxWidth,
      entryDelay,
      onCopy,
      hoverTip,
      clickTip,
      textAriaLabel,
      toggleAriaLabel,
      variant,
      position,
      className,
      additionalActions,
      ouiaId,
      ouiaSafe,
      ...divProps
    } = this.props;
    const textIdPrefix = 'text-input-';
    const toggleIdPrefix = 'toggle-';
    const contentIdPrefix = 'content-';
    return (
      <div
        className={css(
          styles.clipboardCopy,
          variant === 'inline-compact' && styles.modifiers.inline,
          isBlock && styles.modifiers.block,
          this.state.expanded && styles.modifiers.expanded,
          className
        )}
        {...divProps}
        {...getOUIAProps(ClipboardCopy.displayName, ouiaId, ouiaSafe)}
      >
        {variant === 'inline-compact' && (
          <GenerateId prefix="">
            {(id) => (
              <React.Fragment>
                {!isCode && (
                  <span className={css(styles.clipboardCopyText)} id={`${textIdPrefix}${id}`}>
                    {this.state.text}
                  </span>
                )}
                {isCode && (
                  <code className={css(styles.clipboardCopyText, styles.modifiers.code)} id={`${textIdPrefix}${id}`}>
                    {this.state.text}
                  </code>
                )}
                <span className={css(styles.clipboardCopyActions)}>
                  <span className={css(styles.clipboardCopyActionsItem)}>
                    <ClipboardCopyButton
                      variant="plain"
                      exitDelay={exitDelay}
                      entryDelay={entryDelay}
                      maxWidth={maxWidth}
                      position={position}
                      id={`copy-button-${id}`}
                      textId={`text-input-${id}`}
                      aria-label={hoverTip}
                      onClick={(event: any) => {
                        onCopy(event, this.state.text);
                        this.setState({ copied: true });
                      }}
                      onTooltipHidden={() => this.setState({ copied: false })}
                      hasNoPadding
                    >
                      {this.state.copied ? clickTip : hoverTip}
                    </ClipboardCopyButton>
                  </span>
                  {additionalActions && additionalActions}
                </span>
              </React.Fragment>
            )}
          </GenerateId>
        )}
        {variant !== 'inline-compact' && (
          <GenerateId prefix="">
            {(id) => (
              <React.Fragment>
                <div className={css(styles.clipboardCopyGroup)}>
                  {variant === 'expansion' && (
                    <ClipboardCopyToggle
                      isExpanded={this.state.expanded}
                      onClick={(_event) => {
                        this.expandContent(_event);
                        if (this.state.expanded) {
                          this.setState({ text: this.state.textWhenExpanded });
                        } else {
                          this.setState({ textWhenExpanded: this.state.text });
                        }
                      }}
                      id={`${toggleIdPrefix}${id}`}
                      textId={`${textIdPrefix}${id}`}
                      contentId={`${contentIdPrefix}${id}`}
                      aria-label={toggleAriaLabel}
                    />
                  )}
                  <TextInput
                    readOnlyVariant={isReadOnly || this.state.expanded ? 'default' : undefined}
                    onChange={this.updateText}
                    value={this.state.expanded ? this.state.textWhenExpanded : this.state.text}
                    id={`text-input-${id}`}
                    aria-label={textAriaLabel}
                    {...(isCode && { dir: 'ltr' })}
                  />
                  <ClipboardCopyButton
                    exitDelay={exitDelay}
                    entryDelay={entryDelay}
                    maxWidth={maxWidth}
                    position={position}
                    id={`copy-button-${id}`}
                    textId={`text-input-${id}`}
                    aria-label={hoverTip}
                    onClick={(event: any) => {
                      onCopy(event, this.state.expanded ? this.state.textWhenExpanded : this.state.text);
                      this.setState({ copied: true });
                    }}
                    onTooltipHidden={() => this.setState({ copied: false })}
                  >
                    {this.state.copied ? clickTip : hoverTip}
                  </ClipboardCopyButton>
                </div>
                {this.state.expanded && (
                  <ClipboardCopyExpanded
                    isReadOnly={isReadOnly}
                    isCode={isCode}
                    id={`content-${id}`}
                    onChange={this.updateTextWhenExpanded}
                  >
                    {this.state.text}
                  </ClipboardCopyExpanded>
                )}
              </React.Fragment>
            )}
          </GenerateId>
        )}
      </div>
    );
  };
}

export { ClipboardCopy };
