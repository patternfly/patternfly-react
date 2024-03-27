import { HTMLProps, ReactNode, FunctionComponent } from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Sidebar/sidebar';

export interface SidebarContentProps extends HTMLProps<HTMLDivElement> {
  children: ReactNode;
  /** Removes the background color. */
  hasNoBackground?: boolean;
  /** Adds padding to the content. */
  hasPadding?: boolean;
}

export const SidebarContent: FunctionComponent<SidebarContentProps> = ({
  className,
  children,
  hasNoBackground,
  hasPadding,
  ...props
}: SidebarContentProps) => (
  <div
    className={css(
      styles.sidebarContent,
      hasNoBackground && styles.modifiers.noBackground,
      hasPadding && styles.modifiers.padding,
      className
    )}
    {...props}
  >
    {children}
  </div>
);
SidebarContent.displayName = 'SidebarContent';
