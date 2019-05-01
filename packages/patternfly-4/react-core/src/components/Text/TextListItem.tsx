import * as React from 'react';
import { css } from '@patternfly/react-styles';

export enum TextListItemVariants {
  li = 'li',
  dt = 'dt',
  dd = 'dd'
}

export interface TextListItemProps extends React.HTMLProps<HTMLElement> {
  /** Content rendered within the TextListItem */
  children?: React.ReactNode;
  /** Additional classes added to the TextListItem */
  className?: string;
  /** The text list item component */
  component?: TextListItemVariants;
}

export const TextListItem: React.FunctionComponent<TextListItemProps> = ({
  children = null,
  className = '',
  component = 'li',
  ...props
}) => {
  const Component = TextListItemVariants[component as keyof typeof TextListItemVariants] as any || 'li';

  return (
    <Component {...props} data-pf-content className={css(className)}>
      {children}
    </Component>
  );
}
