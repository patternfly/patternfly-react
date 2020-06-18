import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Divider/divider';
import { formatBreakpointMods } from '../../helpers/util';

export enum DividerVariant {
  hr = 'hr',
  li = 'li',
  div = 'div'
}

export interface DividerProps extends React.HTMLProps<HTMLElement> {
  /** Additional classes added to the divider */
  className?: string;
  /** The component type to use */
  component?: 'hr' | 'li' | 'div';
  /** Flag to indicate the divider is vertical (must be in a flex layout) */
  isVertical?: boolean;
  /** Insets at various breakpoints. */
  inset?: {
    default?: 'insetNone' | 'insetXs' | 'insetSm' | 'insetMd' | 'insetLg' | 'insetXl' | 'inset2xl' | 'inset3xl';
    sm?: 'insetNone' | 'insetXs' | 'insetSm' | 'insetMd' | 'insetLg' | 'insetXl' | 'inset2xl' | 'inset3xl';
    md?: 'insetNone' | 'insetXs' | 'insetSm' | 'insetMd' | 'insetLg' | 'insetXl' | 'inset2xl' | 'inset3xl';
    lg?: 'insetNone' | 'insetXs' | 'insetSm' | 'insetMd' | 'insetLg' | 'insetXl' | 'inset2xl' | 'inset3xl';
    xl?: 'insetNone' | 'insetXs' | 'insetSm' | 'insetMd' | 'insetLg' | 'insetXl' | 'inset2xl' | 'inset3xl';
    '2xl'?: 'insetNone' | 'insetXs' | 'insetSm' | 'insetMd' | 'insetLg' | 'insetXl' | 'inset2xl' | 'inset3xl';
  };
}

export const Divider: React.FunctionComponent<DividerProps> = ({
  className,
  component = DividerVariant.hr,
  isVertical = false,
  inset,
  ...props
}: DividerProps) => {
  const Component: any = component;

  return (
    <Component
      className={css(
        styles.divider,
        isVertical && styles.modifiers.vertical,
        formatBreakpointMods(inset, styles),
        className
      )}
      {...(component !== 'hr' && { role: 'separator' })}
      {...props}
    />
  );
};
Divider.displayName = 'Divider';
