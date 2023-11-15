import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Page/page';
import { css } from '@patternfly/react-styles';
import { formatBreakpointMods } from '../../../helpers/util';
import { PageContext } from '../../../components/Page/PageContext';

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
}

export const PageHeaderToolsItem: React.FunctionComponent<PageHeaderToolsItemProps> = ({
  children,
  id,
  className,
  visibility,
  ...props
}: PageHeaderToolsItemProps) => {
  const { width, getBreakpoint } = React.useContext(PageContext);
  return (
    <div
      className={css(
        styles.pageHeaderToolsItem,
        formatBreakpointMods(visibility, styles, '', getBreakpoint(width)),
        className
      )}
      id={id}
      {...props}
    >
      {children}
    </div>
  );
};
PageHeaderToolsItem.displayName = 'PageHeaderToolsItem';
