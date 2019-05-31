import * as React from 'react';
import styles from '@patternfly/patternfly/components/ClipboardCopy/clipboard-copy.css';
import { css } from '@patternfly/react-styles';
import { OneOf, Omit } from '../../helpers/typeUtils';
import { PopoverPosition } from '../Popover';
import { TextInput } from '../TextInput';
import { TooltipPosition } from '../Tooltip';
import GenerateId from '../../helpers/GenerateId/GenerateId';
import { CopyButton } from './CopyButton';
import { ClipboardCopyToggle } from './ClipboardCopyToggle';
import { ExpandedContent } from './ExpandedContent';

export const clipboardCopyFunc = (event: any, text: string) => {
  const clipboard = event.currentTarget.parentElement;
  const el = document.createElement('input');
  el.value = text;
  clipboard.appendChild(el);
  el.select();
  document.execCommand('copy');
  clipboard.removeChild(el);
};

export enum ClipboardCopyVariant {
  inline = 'inline',
  expansion = 'expansion'
}

export interface ClipboardCopyState {
  text: string | number; 
  expanded: boolean;
  copied: boolean;
}

export interface ClipboardCopyProps extends Omit<React.HTMLProps<HTMLDivElement>, 'onChange'> {
  /** Additional classes added to the clipboard copy container. */
  className?: string;
  /** Tooltip message to display when hover the copy button */
  hoverTip?: string;
  /** Tooltip message to display when clicking the copy button */
  clickTip?: string;
  /** Custom flag to show that the input requires an associated id or aria-label. */
  textAriaLabel?: string;
  /** Custom flag to show that the toggle button requires an associated id or aria-label. */
  toggleAriaLabel?: string;
  /** Flag to show if the input is read only. */
  isReadOnly?: boolean;
  /** Adds Clipboard Copy variant styles. */
  variant?: OneOf<typeof ClipboardCopyVariant, keyof typeof ClipboardCopyVariant>;
  /** Copy button popover position. */
  position?: OneOf<typeof PopoverPosition, keyof typeof PopoverPosition>;
  /** Maximum width of the tooltip (default 150px). */
  maxWidth?: string;
  /** Delay in ms before the tooltip disappears. */
  exitDelay?: number;
  /** Delay in ms before the tooltip appears. */
  entryDelay?: number;
  /** Delay in ms before the tooltip message switch to hover tip. */
  switchDelay?: number;
  /** A function that is triggered on clicking the copy button. */
  onCopy?: (event: React.ClipboardEvent<HTMLDivElement>, text?: React.ReactNode) => void;
  /** A function that is triggered on changing the text. */
  onChange?: (text?: React.ReactNode) => void;
  /** The text which is copied. */
  children?: React.ReactNode;
}

export class ClipboardCopy extends React.Component<ClipboardCopyProps, ClipboardCopyState> {
  timer = null as NodeJS.Timer;
  constructor(props: ClipboardCopyProps) {
    super(props);
    this.state = {
      text: this.props.children as string | number,
      expanded: false,
      copied: false
    };
  }

  static defaultProps = {
    hoverTip: 'Copy to clipboard',
    clickTip: 'Successfully copied to clipboard!',
    isReadOnly: false,
    variant: ClipboardCopyVariant.inline,
    position: TooltipPosition.top,
    maxWidth: '150px',
    exitDelay: 1600,
    entryDelay: 100,
    switchDelay: 2000,
    onCopy: clipboardCopyFunc,
    onChange: (): any => undefined,
    textAriaLabel: 'Copyable input',
    toggleAriaLabel: 'Show content'
  }
  
  expandContent = (expanded: boolean) => {
    this.setState(prevState => ({
      expanded: !prevState.expanded
    }));
  };

  updateText = (text: string | number) => {
    this.setState({ text });
    this.props.onChange(text);
  };

  render = () => {
    const {
      isReadOnly,
      exitDelay,
      maxWidth,
      entryDelay,
      switchDelay,
      onCopy,
      hoverTip,
      clickTip,
      textAriaLabel,
      toggleAriaLabel,
      variant,
      position,
      className,
      ...props
    } = this.props;
    const textIdPrefix = 'text-input-';
    const toggleIdPrefix = 'toggle-';
    const contentIdPrefix = 'content-';
    return (
      <div
        className={css(styles.clipboardCopy, this.state.expanded && styles.modifiers.expanded, className)}
        {...props}
      >
        <GenerateId prefix="">
          {id => (
            <React.Fragment>
              <div className={css(styles.clipboardCopyGroup)}>
                {variant === 'expansion' && (
                  <ClipboardCopyToggle
                    isExpanded={this.state.expanded}
                    onClick={() =>this.expandContent}
                    id={`${toggleIdPrefix}-${id}`}
                    textId={`${textIdPrefix}-${id}`}
                    contentId={`${contentIdPrefix}-${id}`}
                    aria-label={toggleAriaLabel}
                  />
                )}
                <TextInput
                  isReadOnly={isReadOnly || this.state.expanded}
                  onChange={this.updateText}
                  value={this.state.text as string | number}
                  id={`text-input-${id}`}
                  aria-label={textAriaLabel}
                />
                <CopyButton
                  exitDelay={exitDelay}
                  entryDelay={entryDelay}
                  maxWidth={maxWidth}
                  position={position}
                  id={`copy-button-${id}`}
                  textId={`text-input-${id}`}
                  aria-label={hoverTip}
                  onClick={(event: any) => {
                    if (this.timer) {
                      clearTimeout(this.timer);
                      this.setState({ copied: false });
                    }
                    onCopy(event, this.state.text);
                    this.setState({ copied: true }, () => {
                      this.timer = setTimeout(() => {
                        this.setState({ copied: false });
                        this.timer = null;
                      }, switchDelay);
                    });
                  }}
                >
                  {this.state.copied ? clickTip : hoverTip}
                </CopyButton>
              </div>
              {this.state.expanded && (
                <ExpandedContent id={`content-${id}`} onChange={() => this.updateText}>
                  {this.state.text}
                </ExpandedContent>
              )}
            </React.Fragment>
          )}
        </GenerateId>
      </div>
    );
  }
}
