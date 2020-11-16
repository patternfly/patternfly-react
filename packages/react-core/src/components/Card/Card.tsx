import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Card/card';
import { css } from '@patternfly/react-styles';
import { useOUIAProps, OUIAProps } from '../../helpers';

export interface CardProps extends React.HTMLProps<HTMLElement>, OUIAProps {
  /** Content rendered inside the Card */
  children?: React.ReactNode;
  /** ID of the Card. Also passed back in the CardHeader onExpand callback. */
  id?: string;
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
  /** Flag indicating if a card is expanded. Modifies the card to be expandable. */
  isExpanded?: boolean;
}

interface CardContextProps {
  cardId: string;
  isExpanded: boolean;
}

export const CardContext = React.createContext<Partial<CardContextProps>>({
  cardId: '',
  isExpanded: false
});

export const Card: React.FunctionComponent<CardProps> = ({
  children = null,
  id = '',
  className = '',
  component = 'article',
  isHoverable = false,
  isCompact = false,
  isSelectable = false,
  isSelected = false,
  isFlat = false,
  isExpanded = false,
  ouiaId,
  ouiaSafe = true,
  ...props
}: CardProps) => {
  const Component = component as any;
  const ouiaProps = useOUIAProps(Card.displayName, ouiaId, ouiaSafe);
  return (
    <CardContext.Provider
      value={{
        cardId: id,
        isExpanded
      }}
    >
      <Component
        id={id}
        className={css(
          styles.card,
          isHoverable && styles.modifiers.hoverable,
          isCompact && styles.modifiers.compact,
          isSelectable && styles.modifiers.selectable,
          isSelected && isSelectable && styles.modifiers.selected,
          isExpanded && styles.modifiers.expanded,
          isFlat && styles.modifiers.flat,
          className
        )}
        tabIndex={isSelectable ? '0' : undefined}
        {...props}
        {...ouiaProps}
      >
        {children}
      </Component>
    </CardContext.Provider>
  );
};
Card.displayName = 'Card';
