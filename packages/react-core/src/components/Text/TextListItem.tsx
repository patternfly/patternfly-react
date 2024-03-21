import { HTMLProps, ReactNode, FunctionComponent } from 'react';
import { css } from '@patternfly/react-styles';

export enum TextListItemVariants {
  li = 'li',
  dt = 'dt',
  dd = 'dd'
}

export interface TextListItemProps extends HTMLProps<HTMLElement> {
  /** Content rendered within the TextListItem */
  children?: ReactNode;
  /** Additional classes added to the TextListItem */
  className?: string;
  /** The text list item component */
  component?: 'li' | 'dt' | 'dd';
}

export const TextListItem: FunctionComponent<TextListItemProps> = ({
  children = null,
  className = '',
  component = TextListItemVariants.li,
  ...props
}: TextListItemProps) => {
  const Component: any = component;

  return (
    <Component {...props} className={css(className)}>
      {children}
    </Component>
  );
};
TextListItem.displayName = 'TextListItem';
