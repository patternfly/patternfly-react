import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Content/content';
import { StyleSheet, css } from '@patternfly/react-styles';

export interface TextContentProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered within the TextContent */
  children?: React.ReactNode;
  /** Additional classes added to the TextContent */
  className?: string;
}

// Get the stylesheet and make it more specific by appending [data-pf-content] attribute to selectors
// This way even if other components are nested within the TextContent, their text styling will not be affected
// const moreSpecificStyles = styles.raw.replace(/(.pf-c-content\s[a-zA-Z0-9]+)/g, '$1[data-pf-content]');
// const updatedStyles = StyleSheet.parse(moreSpecificStyles);

export const TextContent: React.FunctionComponent<TextContentProps> = ({
  children = null,
  className = '',
  ...props
}: TextContentProps) => (
  <div {...props} className={css(styles.content, className)}>
    {children}
  </div>
);
