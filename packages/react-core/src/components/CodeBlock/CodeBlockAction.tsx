import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/CodeBlock/code-block';

export interface CodeBlockActionProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside the code block action */
  children?: React.ReactNode;
  /** Additional classes passed to the code block action */
  className?: string;
}

export const CodeBlockAction: React.FunctionComponent<CodeBlockActionProps> = ({
  children = null,
  className,
  ...props
}: CodeBlockActionProps) => (
  <div className={css(`${styles.codeBlockActions}-item`, className)} {...props}>
    {children}
  </div>
);

CodeBlockAction.displayName = 'CodeBlockAction';
