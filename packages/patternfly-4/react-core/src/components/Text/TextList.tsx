import * as React from 'react';
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
  component?: TextListVariants;
}

export const TextList: React.FunctionComponent<TextListProps> = ({
  children = null,
  className = '',
  component = TextListVariants.ul,
  ...props
}) => {
  const Component: any = component;

  return (
    <Component {...props} data-pf-content className={css(className)}>
      {children}
    </Component>
  );
}
