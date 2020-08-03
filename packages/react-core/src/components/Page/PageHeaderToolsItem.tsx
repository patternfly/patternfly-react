import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Page/page';
import { css } from '@patternfly/react-styles';
import { formatBreakpointMods } from '../../helpers/util';

export interface PageHeaderToolsItemProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered in page header tools item. */
  children: React.ReactNode;
  /** Additional classes added to the page header tools item. */
  className?: string;
  /** HTML id of the PageHeaderToolsItem */
  id?: string;
  /** Visibility at various breakpoints. */
  visibility?: {
    default?: 'hidden' | 'visible';
    sm?: 'hidden' | 'visible';
    md?: 'hidden' | 'visible';
    lg?: 'hidden' | 'visible';
    xl?: 'hidden' | 'visible';
    '2xl'?: 'hidden' | 'visible';
  };
  /** True to make an icon button appear selected */
  isSelected?: boolean;
}

export const PageHeaderToolsItem: React.FunctionComponent<PageHeaderToolsItemProps> = ({
  children,
  id,
  className,
  visibility,
  isSelected
}: PageHeaderToolsItemProps) => (
  <div
    className={css(
      styles.pageHeaderToolsItem,
      isSelected && styles.modifiers.selected,
      formatBreakpointMods(visibility, styles),
      className
    )}
    id={id}
  >
    {children}
  </div>
);
PageHeaderToolsItem.displayName = 'PageHeaderToolsItem';
