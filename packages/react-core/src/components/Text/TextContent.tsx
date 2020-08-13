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
  /** id of the TextContent */
  id?: string;
  /** trim text on left */
  isLeftTruncated?: boolean;
}

export const TextContent: React.FunctionComponent<TextContentProps> = ({
  children = null,
  id = '',
  className = '',
  isLeftTruncated = false,
  ...props
}: TextContentProps) => {
  useEffect(() => {
    if (isLeftTruncated && id) {
      const rows = document.getElementById(id).childNodes;
      for (let i = 0, row; (row = rows[i]); i++) {
        trimLeft(row);
      }
    }
  }, [isLeftTruncated, id]);

  return (
    <div {...props} id={id} className={css(styles.content, className)}>
      {children}
    </div>
  );
};
TextContent.displayName = 'TextContent';
