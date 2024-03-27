import { HTMLProps, ReactNode, FunctionComponent } from 'react';
import styles from '@patternfly/react-styles/css/components/Content/content';
import { css } from '@patternfly/react-styles';

export interface TextContentProps extends HTMLProps<HTMLDivElement> {
  /** Content rendered within the TextContent */
  children?: ReactNode;
  /** Additional classes added to the TextContent */
  className?: string;
  /** Flag to indicate the all links in a the content block have visited styles applied if the browser determines the link has been visited */
  isVisited?: boolean;
}

export const TextContent: FunctionComponent<TextContentProps> = ({
  children,
  className = '',
  isVisited = false,
  ...props
}: TextContentProps) => (
  <div {...props} className={css(styles.content, isVisited && styles.modifiers.visited, className)}>
    {children}
  </div>
);

TextContent.displayName = 'TextContent';
