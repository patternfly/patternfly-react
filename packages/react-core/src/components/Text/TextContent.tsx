import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Content/content';
import { css } from '@patternfly/react-styles';
import { trimLeft } from '../../helpers/util';
import { useEffect } from 'react';

export interface TextContentProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered within the TextContent */
  children?: React.ReactNode;
  /** Additional classes added to the TextContent */
  className?: string;
  /** Trim text on left */
  isLeftTruncated?: boolean;
}

export const TextContent: React.FunctionComponent<TextContentProps> = ({
  children = null,
  className = '',
  isLeftTruncated = false,
  ...props
}: TextContentProps) => {
  useEffect(() => {
    const rows = Array.from(document.getElementsByClassName('pf-c-content'));

    for (const i of rows) {
      if (isLeftTruncated) {
        for (const j of rows) {
          trimLeft(j);
        }
      }
    }
  }, [isLeftTruncated]);

  return (
    <div {...props} className={css(styles.content, className)}>
      {children}
    </div>
  );
};
TextContent.displayName = 'TextContent';
