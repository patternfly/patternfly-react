import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Card/card';

export interface CardHeadProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside the Card Head */
  children?: React.ReactNode;
  /** Additional classes added to the Head */
  className?: string;
  /** Callback for head ref */
  innerRef?: React.Ref<any>;
}

export const CardHead0: React.FunctionComponent<CardHeadProps> = ({
  children = null,
  className = '',
  innerRef,
  ...props
}: CardHeadProps) => (
  <div className={css(styles.cardHead, className)} ref={innerRef} {...props}>
    {children}
  </div>
);

// eslint-disable-next-line react/no-multi-comp
export const CardHead = React.forwardRef<any, CardHeadProps>((props, ref) => (
  <CardHead0 innerRef={ref} {...props} />
));
