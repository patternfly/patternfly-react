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
  /** Sets the number of columns on the description list */
  columnModifier?: {
    default?: '1Col' | '2Col' | '3Col';
    md?: '1Col' | '2Col' | '3Col';
    lg?: '1Col' | '2Col' | '3Col';
    xl?: '1Col' | '2Col' | '3Col';
    '2xl'?: '1Col' | '2Col' | '3Col';
  };
  autoFitMinModifier?: {
    default?: string;
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
  columnModifier,
  autoFitMinModifier,
  style,
  ...props
}: DescriptionListProps) => (
  <dl
    className={css(
      styles.descriptionList,
      isHorizontal && styles.modifiers.horizontal,
      isAutoColumnWidths && styles.modifiers.autoColumnWidths,
      isAutoFit && styles.modifiers.autoFit,
      formatBreakpointMods(columnModifier, styles),
      isInlineGrid && styles.modifiers.inlineGrid,
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
