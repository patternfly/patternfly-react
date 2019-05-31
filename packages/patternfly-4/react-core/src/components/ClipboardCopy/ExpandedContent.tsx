import * as React from 'react';
import styles from '@patternfly/patternfly/components/ClipboardCopy/clipboard-copy.css';
import { css } from '@patternfly/react-styles';
import { ClipboardCopyProps } from './ClipboardCopy';

export interface ExpandedContentProps extends ClipboardCopyProps {
  className?: string; 
  children: React.ReactNode; 
  onChange: () => void; 
}

export class ExpandedContent extends React.Component<ExpandedContentProps> {
  contentRef = React.createRef<HTMLDivElement>();
  constructor(props: any) {
    super(props);
  }

  static defaultProps = {
    className: ''
  }

  componentDidMount() {
    if (this.contentRef.current) {
      this.contentRef.current.innerText = this.props.children;
    }
  }

  render() {
    const { className, children, onChange, ...props } = this.props;
    return (
      <div
        suppressContentEditableWarning="true"
        ref={this.contentRef}
        className={css(styles.clipboardCopyExpandableContent, className)}
        onInput={e => onChange(e.target.innerText, e)}
        contentEditable="true"
        {...props}
      />
    );
  }
}
