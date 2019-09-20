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
  isCode?: boolean;
}

export class ClipboardCopyExpanded extends React.Component<ClipboardCopyExpandedProps> {
  contentRef = React.createRef<HTMLDivElement>();
  constructor(props: any) {
    super(props);
  }

  static defaultProps = {
    onChange: (): any => undefined,
    className: '',
    isReadOnly: false,
    isCode: false
  };

  componentDidMount() {
    if (this.contentRef.current) {
      this.contentRef.current.innerText = this.props.children as string;
    }
  }

  render() {
    const { className, children, onChange, isReadOnly, isCode, ...props } = this.props;
    const clipboardCopyExpandableComponent =
    <div
      suppressContentEditableWarning
      ref={this.contentRef}
      className={css(styles.clipboardCopyExpandableContent, className)}
      onInput={(e: any) => onChange(e.target.innerText, e)}
      contentEditable={!isReadOnly}
      {...props}
    />;
    // tslint:disable-next-line: no-console
    console.log( typeof clipboardCopyExpandableComponent);

    return (isCode ?
    <pre><React.Fragment>{clipboardCopyExpandableComponent}</React.Fragment></pre>
     : <React.Fragment>{clipboardCopyExpandableComponent}</React.Fragment>);
  }
}
