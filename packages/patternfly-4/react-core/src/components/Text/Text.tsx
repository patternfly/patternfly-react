import * as React from 'react';
import { css } from '@patternfly/react-styles';

export enum TextVariants {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
  p = 'p',
  a = 'a',
  small = 'small',
  blockquote ='blockquote',
  pre ='pre'
}

export interface TextProps extends React.HTMLProps<HTMLElement> {
  /** The text component */
  component?: TextVariants;
  /** Content rendered within the Text */
  children?: React.ReactNode;
  /** Additional classes added to the Text */
  className?: string;
}

export const Text: React.FunctionComponent<TextProps> = ({
  children = null,
  className = '',
  component = 'p',
  ...props
}) => {
  const Component = TextVariants[component as keyof typeof TextVariants] as any || 'p';

  return (
    <Component {...props} data-pf-content className={css(className)}>
      {children}
    </Component>
  );
}
