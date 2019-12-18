import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Card/card';
import titleStyles from '@patternfly/react-styles/css/components/Title/title';

export interface CardHeaderProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside the Card Footer */
  children?: React.ReactNode;
  /** Additional classes added to the Header */
  className?: string;
  /** Callback for header ref */
  innerRef?: React.Ref<any>;
}

export const CardHeader0: React.FunctionComponent<CardHeaderProps> = ({
  children = null,
  className = '',
  innerRef,
  ...props
}: CardHeaderProps) => (
  <div className={css(styles.cardHeader, titleStyles.title, titleStyles.modifiers.md, className)} ref={innerRef} {...props}>
    {children}
  </div>
);

// eslint-disable-next-line react/no-multi-comp
export const CardHeader = React.forwardRef<any, CardHeaderProps>((props, ref) => (
  <CardHeader0 innerRef={ref} {...props} />
));
