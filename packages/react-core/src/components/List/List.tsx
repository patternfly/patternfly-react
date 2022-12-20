import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/List/list';
import { css } from '@patternfly/react-styles';

export enum OrderType {
  number = '1',
  lowercaseLetter = 'a',
  uppercaseLetter = 'A',
  lowercaseRomanNumber = 'i',
  uppercaseRomanNumber = 'I'
}

export enum ListVariant {
  inline = 'inline'
}

export enum ListComponent {
  ol = 'ol',
  ul = 'ul'
}

export interface ListProps extends Omit<React.HTMLProps<HTMLUListElement | HTMLOListElement>, 'type'> {
  /** Anything that can be rendered inside of the list */
  children?: React.ReactNode;
  /** Additional classes added to the list */
  className?: string;
  /** Adds list variant styles */
  variant?: ListVariant.inline;
  /** Modifies the list to add borders between items */
  isBordered?: boolean;
  /** Modifies the list to include plain styling */
  isPlain?: boolean;
  /** Modifies the size of the icons in the list */
  iconSize?: 'default' | 'large';
  /** Sets the way items are numbered if variant is set to ordered */
  type?: OrderType;
  component?: 'ol' | 'ul';
  /** @hide Forwarded ref */
  innerRef?: React.Ref<any>;
}

const ListBase: React.FunctionComponent<ListProps> = ({
  className = '',
  children = null,
  variant = null,
  isBordered = false,
  isPlain = false,
  iconSize = 'default',
  type = OrderType.number,
  innerRef,
  component = ListComponent.ul,
  ...props
}: ListProps) =>
  component === ListComponent.ol ? (
    <ol
      ref={innerRef}
      type={type}
      {...props}
      className={css(
        styles.list,
        variant && styles.modifiers[variant],
        isBordered && styles.modifiers.bordered,
        isPlain && styles.modifiers.plain,
        iconSize && iconSize === 'large' && styles.modifiers.iconLg,
        className
      )}
    >
      {children}
    </ol>
  ) : (
    <ul
      ref={innerRef}
      {...props}
      className={css(
        styles.list,
        variant && styles.modifiers[variant],
        isBordered && styles.modifiers.bordered,
        isPlain && styles.modifiers.plain,
        iconSize && iconSize === 'large' && styles.modifiers.iconLg,
        className
      )}
    >
      {children}
    </ul>
  );

export const List = React.forwardRef((props: ListProps, ref: React.Ref<any>) => <ListBase innerRef={ref} {...props} />);

List.displayName = 'List';
