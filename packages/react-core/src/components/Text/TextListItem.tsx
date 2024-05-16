import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Content/content';
import { css } from '@patternfly/react-styles';

export enum TextListItemVariants {
  li = 'li',
  dt = 'dt',
  dd = 'dd'
}

const componentStyles = {
  li: styles.contentLi,
  dt: styles.contentDt,
  dd: styles.contentDd
};

export interface TextListItemProps extends React.HTMLProps<HTMLElement> {
  /** Content rendered within the TextListItem */
  children?: React.ReactNode;
  /** Additional classes added to the TextListItem */
  className?: string;
  /** The text list item component */
  component?: 'li' | 'dt' | 'dd';
}

export const TextListItem: React.FunctionComponent<TextListItemProps> = ({
  children = null,
  className = '',
  component = TextListItemVariants.li,
  ...props
}: TextListItemProps) => {
  const Component: any = component;

  return (
    <Component {...props} className={css(componentStyles[component], className)}>
      {children}
    </Component>
  );
};
TextListItem.displayName = 'TextListItem';
