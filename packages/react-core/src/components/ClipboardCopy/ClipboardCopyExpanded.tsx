import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/ClipboardCopy/clipboard-copy';
import { css } from '@patternfly/react-styles';
import { ClipboardCopyProps } from './ClipboardCopy';
import { PickOptional } from '../../helpers/typeUtils';

export interface ClipboardCopyExpandedProps extends Omit<ClipboardCopyProps, 'onChange'> {
  className?: string;
  onChange?: (e: React.FormEvent<HTMLDivElement>, text: string) => void;
  isReadOnly?: boolean;
  isCode?: boolean;
}

class ClipboardCopyExpanded extends React.Component<ClipboardCopyExpandedProps> {
  static displayName = 'ClipboardCopyExpanded';
  constructor(props: any) {
    super(props);
  }

  static defaultProps: PickOptional<ClipboardCopyExpandedProps> = {
    onChange: (): any => undefined,
    className: '',
    isReadOnly: false,
    isCode: false
  };

  render() {
    const { className, children, onChange, isReadOnly, isCode, ...props } = this.props;

    return (
      <div
        suppressContentEditableWarning
        className={css(styles.clipboardCopyExpandableContent, className)}
        onInput={(e: any) => onChange(e, e.target.innerText)}
        contentEditable={!isReadOnly}
        {...props}
      >
        {isCode ? <pre dir="ltr">{children}</pre> : children}
      </div>
    );
  }
}

export { ClipboardCopyExpanded };
