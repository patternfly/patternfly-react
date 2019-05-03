import React from 'react';
import styles from '@patternfly/patternfly/components/ClipboardCopy/clipboard-copy.css';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import { TextInput } from '../TextInput';
import { TooltipPosition } from '../Tooltip';
import GenerateId from '../../helpers/GenerateId/GenerateId';
import CopyButton from './CopyButton';
import ToggleButton from './ToggleButton';
import ExpandedContent from './ExpandedContent';

const clipboardCopyFunc = (event, text) => {
  const clipboard = event.currentTarget.parentElement;
  const el = document.createElement('input');
  el.value = text;
  clipboard.appendChild(el);
  el.select();
  document.execCommand('copy');
  clipboard.removeChild(el);
};

export const ClipboardCopyVariant = {
  inline: 'inline',
  expansion: 'expansion'
};

class ClipboardCopy extends React.Component {
  constructor(props) {
    super(props);
    this.timer = null;
    this.state = {
      text: this.props.children,
      expanded: false,
      copied: false
    };
  }

  expandContent = () => {
    this.setState(prevState => ({
      expanded: !prevState.expanded
    }));
  };

  updateText = text => {
    this.setState({ text });
    this.props.onChange(text);
  };

  render() {
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
                  <ToggleButton
                    isExpanded={this.state.expanded}
                    onClick={this.expandContent}
                    id={`${toggleIdPrefix}-${id}`}
                    textId={`${textIdPrefix}-${id}`}
                    contentId={`${contentIdPrefix}-${id}`}
                    aria-label={toggleAriaLabel}
                  />
                )}
                <TextInput
                  isReadOnly={isReadOnly || this.state.expanded}
                  onChange={this.updateText}
                  value={this.state.text}
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
                  onClick={event => {
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
                <ExpandedContent id={`content-${id}`} onChange={this.updateText}>
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

ClipboardCopy.propTypes = {
  /** Additional classes added to the clipboard copy container. */
  className: PropTypes.string,
  /** Tooltip message to display when hover the copy button */
  hoverTip: PropTypes.string,
  /** Tooltip message to display when clicking the copy button */
  clickTip: PropTypes.string,
  /** Custom flag to show that the input requires an associated id or aria-label. */
  textAriaLabel: PropTypes.string,
  /** Custom flag to show that the toggle button requires an associated id or aria-label. */
  toggleAriaLabel: PropTypes.string,
  /** Flag to show if the input is read only. */
  isReadOnly: PropTypes.bool,
  /** Adds Clipboard Copy variant styles. */
  variant: PropTypes.oneOf(Object.keys(ClipboardCopyVariant)),
  /** Copy button popover position. */
  position: PropTypes.oneOf(Object.keys(TooltipPosition)),
  /** Maximum width of the tooltip (default 150px). */
  maxWidth: PropTypes.string,
  /** Delay in ms before the tooltip disappears. */
  exitDelay: PropTypes.number,
  /** Delay in ms before the tooltip appears. */
  entryDelay: PropTypes.number,
  /** Delay in ms before the tooltip message switch to hover tip. */
  switchDelay: PropTypes.number,
  /** A function that is triggered on clicking the copy button. */
  onCopy: PropTypes.func,
  /** A function that is triggered on changing the text. */
  onChange: PropTypes.func,
  /** The text which is copied. */
  children: PropTypes.node.isRequired,
  /** Additional props are spread to the container <div>. */
  '': PropTypes.any
};

ClipboardCopy.defaultProps = {
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
  onChange: () => {},
  textAriaLabel: 'Copyable input',
  toggleAriaLabel: 'Show content'
};

export default ClipboardCopy;
