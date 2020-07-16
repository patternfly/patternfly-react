import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/DescriptionList/description-list';

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

export interface DescriptionListProps extends Omit<React.HTMLProps<HTMLUListElement | HTMLOListElement>, 'type'> {
  /** Anything that can be rendered inside of the list */
  children?: React.ReactNode;
  /** Additional classes added to the list */
  className?: string;
  /** Adds list variant styles */
  variant?: ListVariant.inline;
  /** Sets the way items are numbered if variant is set to ordered */
  type?: OrderType;
  component?: 'ol' | 'ul';
}

export const DescriptionList: React.FunctionComponent<DescriptionListProps> = ({
  className = '',
  children = null,
  variant = null,
  type = OrderType.number,
  ref = null,
  component = ListComponent.ul,
  ...props
}: DescriptionListProps) =>
  component === ListComponent.ol ? (
    <ol
      ref={ref as React.LegacyRef<HTMLOListElement>}
      type={type}
      {...props}
      className={css(styles.descriptionList, variant && styles.modifiers[variant], className)}
    >
      {children}
    </ol>
  ) : (
    <ul
      ref={ref as React.LegacyRef<HTMLUListElement>}
      {...props}
      className={css(styles.descriptionList, variant && styles.modifiers[variant], className)}
    >
      {children}
    </ul>
  );
DescriptionList.displayName = 'DescriptionList';
