import { HTMLProps, ReactNode, FunctionComponent, useContext } from 'react';
import styles from '@patternfly/react-styles/css/components/Page/page';
import { css } from '@patternfly/react-styles';
import { formatBreakpointMods } from '../../../helpers/util';
import { PageContext } from '../../../components/Page/PageContext';

export interface PageHeaderToolsGroupProps extends HTMLProps<HTMLDivElement> {
  /** Content rendered in the page header tools group */
  children: ReactNode;
  /** Additional classes added to the page header tools group. */
  className?: string;
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

export const PageHeaderToolsGroup: FunctionComponent<PageHeaderToolsGroupProps> = ({
  children,
  className,
  visibility,
  ...props
}: PageHeaderToolsGroupProps) => {
  const { width, getBreakpoint } = useContext(PageContext);
  return (
    <div
      className={css(
        styles.pageHeaderToolsGroup,
        formatBreakpointMods(visibility, styles, '', getBreakpoint(width)),
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
PageHeaderToolsGroup.displayName = 'PageHeaderToolsGroup';
