import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/DescriptionList/description-list';
import { formatBreakpointMods } from '../../helpers';

export interface DescriptionListProps extends Omit<React.HTMLProps<HTMLDListElement>, 'type'> {
  /** Anything that can be rendered inside of the list */
  children?: React.ReactNode;
  /** Additional classes added to the list */
  className?: string;
  /** Sets the description list component term and description pair to a horizontal layout. */
  isHorizontal?: boolean;
  /** Sets the description list to format automatically. */
  isAutoColumnWidths?: boolean;
  /** Modifies the description list display to inline-grid. */
  isInlineGrid?: boolean;
  /** Sets the number of columns on the description list */
  columnModifier?: {
    default?: '1Col' | '2Col' | '3Col';
    md?: '1Col' | '2Col' | '3Col';
    lg?: '1Col' | '2Col' | '3Col';
    xl?: '1Col' | '2Col' | '3Col';
    '2xl'?: '1Col' | '2Col' | '3Col';
  };
}

export const DescriptionList: React.FunctionComponent<DescriptionListProps> = ({
  className = '',
  children = null,
  isHorizontal = false,
  isAutoColumnWidths,
  isInlineGrid,
  columnModifier,
  ...props
}: DescriptionListProps) => (
  <dl
    className={css(
      styles.descriptionList,
      isHorizontal && styles.modifiers.horizontal,
      isAutoColumnWidths && styles.modifiers.autoColumnWidths,
      formatBreakpointMods(columnModifier, styles),
      isInlineGrid && styles.modifiers.inlineGrid,
      className
    )}
    {...props}
  >
    {children}
  </dl>
);
DescriptionList.displayName = 'DescriptionList';
