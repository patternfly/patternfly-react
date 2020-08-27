import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Card/card';
import { css } from '@patternfly/react-styles';
import { getOUIAProps, OUIAProps, getDefaultOUIAId } from '../../helpers';

export interface CardProps extends React.HTMLProps<HTMLElement>, OUIAProps {
  /** Content rendered inside the Card */
  children?: React.ReactNode;
  /** Additional classes added to the Card */
  className?: string;
  /** Sets the base component to render. defaults to article */
  component?: keyof JSX.IntrinsicElements;
  /** Modifies the card to include hover styles on :hover */
  isHoverable?: boolean;
  /** Modifies the card to include compact styling */
  isCompact?: boolean;
  /** Modifies the card to include selectable styling */
  isSelectable?: boolean;
  /** Modifies the card to include selected styling */
  isSelected?: boolean;
  /** Modifies the card to include flat styling */
  isFlat?: boolean;
}

export const Card: React.FunctionComponent<CardProps> = ({
  children = null,
  className = '',
  component = 'article',
  isHoverable = false,
  isCompact = false,
  isSelectable = false,
  isSelected = false,
  isFlat = false,
  ouiaId,
  ouiaSafe = true,
  ...props
}: CardProps) => {
  const [ouiaStateId] = React.useState(React.useCallback(() => getDefaultOUIAId(Card.displayName), []));
  const Component = component as any;
  return (
    <Component
      className={css(
        styles.card,
        isHoverable && styles.modifiers.hoverable,
        isCompact && styles.modifiers.compact,
        isSelectable && styles.modifiers.selectable,
        isSelected && isSelectable && styles.modifiers.selected,
        isFlat && styles.modifiers.flat,
        className
      )}
      tabIndex={isSelectable ? '0' : undefined}
      {...props}
      {...getOUIAProps(Card.displayName, ouiaId !== undefined ? ouiaId : ouiaStateId, ouiaSafe)}
    >
      {children}
    </Component>
  );
};
Card.displayName = 'Card';
