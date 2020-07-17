import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/DescriptionList/description-list';

export interface DescriptionListProps extends Omit<React.HTMLProps<HTMLDivElement>, 'type'> {
  /** Anything that can be rendered inside of the list */
  children?: React.ReactNode;
  /** Additional classes added to the list */
  className?: string;
  /** Sets the description list component term and description pair to a horizontal layout. */
  isHorizontal?: boolean;
  /** Sets the description list to format automatically. */
  hasAutoColumnWidths?: boolean;
  /** Modifies the description list display to inline-grid. */
  hasInlineGrid: boolean;
  /** Sets the number of columns on the description list */
  variant?: '1Col' | '2Col' | '3Col';
  variantOnMd?: '1ColOnMd' | '2ColOnMd' | '3ColOnMd';
  variantOnLg?: '1ColOnLg' | '2ColOnLg' | '3ColOnLg';
  variantOnXl?: '1ColOnXl' | '2ColOnXl' | '3ColOnXl';
  variantOn2xl?: '1ColOn_2xl' | '2ColOn_2xl' | '3ColOn_2xl';
}

const variantStyles = {
  '1Col': styles.modifiers['1Col'],
  '2Col': styles.modifiers['2Col'],
  '3Col': styles.modifiers['3Col']
};

const variantOnMdStyles = {
  '1ColOnMd': styles.modifiers['1ColOnMd'],
  '2ColOnMd': styles.modifiers['2ColOnMd'],
  '3ColOnMd': styles.modifiers['3ColOnMd']
};

const variantOnLgStyles = {
  '1ColOnLg': styles.modifiers['1ColOnLg'],
  '2ColOnLg': styles.modifiers['2ColOnLg'],
  '3ColOnLg': styles.modifiers['3ColOnLg']
};

const variantOnXlStyles = {
  '1ColOnXl': styles.modifiers['1ColOnXl'],
  '2ColOnXl': styles.modifiers['2ColOnXl'],
  '3ColOnXl': styles.modifiers['3ColOnXl']
};

const variantOn2xlStyles = {
  '1ColOn_2xl': styles.modifiers['1ColOn_2xl'],
  '2ColOn_2xl': styles.modifiers['2ColOn_2xl'],
  '3ColOn_2xl': styles.modifiers['3ColOn_2xl']
};

export const DescriptionList: React.FunctionComponent<DescriptionListProps> = ({
  className = '',
  children = null,
  isHorizontal = false,
  hasAutoColumnWidths,
  hasInlineGrid,
  variant,
  variantOnMd,
  variantOnLg,
  variantOnXl,
  variantOn2xl,
  // ref = null,
  ...props
}: DescriptionListProps) => (
  <div
    {...props}
    className={css(
      styles.descriptionList,
      isHorizontal && styles.modifiers.horizontal,
      hasAutoColumnWidths && styles.modifiers.autoColumnWidths,
      variantStyles[variant],
      variantOnMdStyles[variantOnMd],
      variantOnLgStyles[variantOnLg],
      variantOnXlStyles[variantOnXl],
      variantOn2xlStyles[variantOn2xl],
      hasInlineGrid && styles.modifiers.inlineGrid,
      className
    )}
  >
    {children}
  </div>
);
DescriptionList.displayName = 'DescriptionList';
