import { HTMLProps, ReactNode, FunctionComponent } from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/CodeBlock/code-block';

export interface CodeBlockActionProps extends HTMLProps<HTMLDivElement> {
  /** Content rendered inside the code block action */
  children?: ReactNode;
  /** Additional classes passed to the code block action */
  className?: string;
}

export const CodeBlockAction: FunctionComponent<CodeBlockActionProps> = ({
  children = null,
  className,
  ...props
}: CodeBlockActionProps) => (
  <div className={css(`${styles.codeBlockActions}-item`, className)} {...props}>
    {children}
  </div>
);

CodeBlockAction.displayName = 'CodeBlockAction';
