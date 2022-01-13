import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/DescriptionList/description-list';
import { formatBreakpointMods } from '../../helpers';

export interface AutoFitModifiers {
  default?: string;
  md?: string;
  lg?: string;
  xl?: string;
  '2xl'?: string;
}

export interface DescriptionListProps extends Omit<React.HTMLProps<HTMLDListElement>, 'type'> {
  /** Anything that can be rendered inside of the list */
  children?: React.ReactNode;
  /** Additional classes added to the list */
  className?: string;
  /** Sets the description list to auto fit. */
  isAutoFit?: boolean;
  /** Sets the description list component term and description pair to a horizontal layout. */
  isHorizontal?: boolean;
  /** Sets the description list to format automatically. */
  isAutoColumnWidths?: boolean;
  /** Modifies the description list display to inline-grid. */
  isInlineGrid?: boolean;
  /** Sets the description list to compact styling. */
  isCompact?: boolean;
  /** Sets a horizontal description list to have fluid styling. */
  isFluid?: boolean;
  /** Sets the the default placement of description list groups to fill from top to bottom. */
  isFillColumns?: boolean;
  /** Sets the number of columns on the description list */
  columnModifier?: {
    default?: '1Col' | '2Col' | '3Col';
    sm?: '1Col' | '2Col' | '3Col';
    md?: '1Col' | '2Col' | '3Col';
    lg?: '1Col' | '2Col' | '3Col';
    xl?: '1Col' | '2Col' | '3Col';
    '2xl'?: '1Col' | '2Col' | '3Col';
  };
  /** Indicates how the menu will align at screen size breakpoints. Default alignment is set via the position property. */
  orientation?: {
    sm?: 'vertical' | 'horizontal';
    md?: 'vertical' | 'horizontal';
    lg?: 'vertical' | 'horizontal';
    xl?: 'vertical' | 'horizontal';
    '2xl'?: 'vertical' | 'horizontal';
  };
  autoFitMinModifier?: {
    default?: string;
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
    '2xl'?: string;
  };
}

const setAutoFitMinModifiers = (autoFitMinModifier: AutoFitModifiers) => {
  const prefix = '--pf-c-description-list--GridTemplateColumns--min';
  const mods = autoFitMinModifier as Partial<{ [k: string]: string }>;
  return Object.keys(mods || {}).reduce(
    (acc, curr) =>
      curr === 'default' ? { ...acc, [prefix]: mods[curr] } : { ...acc, [`${prefix}-on-${curr}`]: mods[curr] },
    {}
  );
};

export const DescriptionList: React.FunctionComponent<DescriptionListProps> = ({
  className = '',
  children = null,
  isHorizontal = false,
  isAutoColumnWidths,
  isAutoFit,
  isInlineGrid,
  isCompact,
  isFluid,
  isFillColumns,
  columnModifier,
  autoFitMinModifier,
  orientation,
  style,
  ...props
}: DescriptionListProps) => (
  <dl
    className={css(
      styles.descriptionList,
      (isHorizontal || isFluid) && styles.modifiers.horizontal,
      isAutoColumnWidths && styles.modifiers.autoColumnWidths,
      isAutoFit && styles.modifiers.autoFit,
      formatBreakpointMods(columnModifier, styles),
      formatBreakpointMods(orientation, styles),
      isInlineGrid && styles.modifiers.inlineGrid,
      isCompact && styles.modifiers.compact,
      isFluid && styles.modifiers.fluid,
      isFillColumns && styles.modifiers.fillColumns,
      className
    )}
    style={
      autoFitMinModifier || style
        ? { ...(isAutoFit ? setAutoFitMinModifiers(autoFitMinModifier) : {}), ...style }
        : undefined
    }
    {...props}
  >
    {children}
  </dl>
);

DescriptionList.displayName = 'DescriptionList';
