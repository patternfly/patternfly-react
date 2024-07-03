import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Page/page';
import { css } from '@patternfly/react-styles';

export interface PageSidebarBodyProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside the page sidebar body */
  children?: React.ReactNode;
  /** Additional classes added to the page sidebar body */
  className?: string;
  /** Flag indicating that the page sidebar body should use page insets. */
  usePageInsets?: boolean;
  /** Flag indicating that the page sidebar body should fill the available vertical space. */
  isFilled?: boolean;
  /** Flag indicating that the page sidebar body is for a context selector/perspective switcher */
  isContextSelector?: boolean;
}

export const PageSidebarBody: React.FunctionComponent<PageSidebarBodyProps> = ({
  children,
  className,
  usePageInsets,
  isFilled,
  isContextSelector,
  ...props
}: PageSidebarBodyProps) => (
  <div
    className={css(
      styles.pageSidebarBody,
      usePageInsets && styles.modifiers.pageInsets,
      isFilled === false && styles.modifiers.noFill,
      isFilled === true && styles.modifiers.fill,
      isContextSelector === true && styles.modifiers.contextSelector,
      className
    )}
    {...props}
  >
    {children}
  </div>
);
PageSidebarBody.displayName = 'PageSidebarBody';
