import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Card/card';
import { css } from '@patternfly/react-styles';

export interface CardProps extends React.HTMLProps<HTMLElement> {
  /** Content rendered inside the Card */
  children?: React.ReactNode;
  /** Additional classes added to the Card */
  className?: string;
  /** Sets the base component to render. defaults to article */
  component?: React.ReactNode;
  /** Modifies the card to include hover styles on :hover */
  isHoverable?: boolean;
  /** Modifies the card to include compact styling */
  isCompact?: boolean;
  /** Callback for card ref */
  innerRef?: React.Ref<any>;
}

export const Card0: React.FunctionComponent<CardProps> = ({
  children = null,
  className = '',
  component = 'article',
  isHoverable = false,
  isCompact = false,
  innerRef,
  ...props
}: CardProps) => {
  const Component = component as any;
  return (
    <Component
      className={css(
        styles.card,
        isHoverable && styles.modifiers.hoverable,
        isCompact && styles.modifiers.compact,
        className
      )}
      ref={innerRef}
      {...props}
    >
      {children}
    </Component>
  );
};

// eslint-disable-next-line react/no-multi-comp
export const Card = React.forwardRef<any, CardProps>((props, ref) => (
  <Card0 innerRef={ref} {...props} />
));
