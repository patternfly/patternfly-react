import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Card/card';
import { css } from '@patternfly/react-styles';

export interface CardFooterProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside the Card Footer */
  children?: React.ReactNode;
  /** Additional classes added to the Footer */
  className?: string;
  /** Sets the base component to render. defaults to div */
  component?: React.ReactNode;
  /** Callback for footer ref */
  innerRef?: React.Ref<any>;
}

export const CardFooter0: React.FunctionComponent<CardFooterProps> = ({
  children = null,
  className = '',
  component = 'div',
  innerRef,
  ...props
}: CardFooterProps) => {
  const Component = component as any;
  return (
    <Component className={css(styles.cardFooter, className)} ref={innerRef} {...props}>
      {children}
    </Component>
  );
};

// eslint-disable-next-line react/no-multi-comp
export const CardFooter = React.forwardRef<any, CardFooterProps>((props, ref) => (
  <CardFooter0 innerRef={ref} {...props} />
));
