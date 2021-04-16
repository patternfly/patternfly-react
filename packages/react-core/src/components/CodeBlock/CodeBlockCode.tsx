import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/CodeBlock/code-block';
import { css } from '@patternfly/react-styles';

export interface CodeBlockCodeProps extends React.HTMLProps<HTMLPreElement> {
  /** Code rendered inside the code block */
  children?: React.ReactNode;
}

export const CodeBlockCode: React.FunctionComponent<CodeBlockCodeProps> = ({
  children = null,
  ...props
}: CodeBlockCodeProps) => (
  <pre className={css(styles.codeBlockPre)} {...props}>
    <code className={css(styles.codeBlockCode)}>{children}</code>
  </pre>
);

CodeBlockCode.displayName = 'CodeBlockCode';
