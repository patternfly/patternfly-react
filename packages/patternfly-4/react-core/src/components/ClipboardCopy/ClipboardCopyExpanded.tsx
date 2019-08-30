import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/ClipboardCopy/clipboard-copy';
import { css } from '@patternfly/react-styles';
import { ClipboardCopyProps } from './ClipboardCopy';
import { Omit } from '../../helpers/typeUtils';

export interface ClipboardCopyExpandedProps extends Omit<ClipboardCopyProps, 'onChange'> {
  className?: string;
  children: React.ReactNode;
  onChange?: (text: string, e: React.FormEvent<HTMLDivElement>) => void;
  isReadOnly: boolean;
}

export class ClipboardCopyExpanded extends React.Component<ClipboardCopyExpandedProps> {
  contentRef = React.createRef<HTMLDivElement>();
  constructor(props: any) {
    super(props);
  }

  static defaultProps = {
    onChange: (): any => undefined,
    className: '',
    isReadOnly: false
  };

  componentDidMount() {
    if (this.contentRef.current) {
      this.contentRef.current.innerText = this.props.children as string;
    }
  }

  render() {
    const { className, children, onChange, isReadOnly, ...props } = this.props;
    return (
      <div
        suppressContentEditableWarning
        ref={this.contentRef}
        className={css(styles.clipboardCopyExpandableContent, className)}
        onInput={(e: any) => onChange(e.target.innerText, e)}
        contentEditable={!isReadOnly}
        {...props}
      />
    );
  }
}
