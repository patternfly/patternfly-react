import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Content/content';
import { css } from '@patternfly/react-styles';

export enum TextListVariants {
  ul = 'ul',
  ol = 'ol',
  dl = 'dl'
}

export interface TextListProps extends React.HTMLProps<HTMLElement> {
  /** Content rendered within the TextList */
  children?: React.ReactNode;
  /** Additional classes added to the TextList */
  className?: string;
  /** The text list component */
  component?: 'ul' | 'ol' | 'dl';
  /** Modifies the list to include plain styling */
  isPlain?: boolean;
}

export const TextList: React.FunctionComponent<TextListProps> = ({
  children = null,
  className = '',
  component = TextListVariants.ul,
  isPlain = false,
  ...props
}: TextListProps) => {
  const Component: any = component;

  return (
    <Component {...props} className={css(isPlain && styles.modifiers.plain, className)}>
      {children}
    </Component>
  );
};
TextList.displayName = 'TextList';
