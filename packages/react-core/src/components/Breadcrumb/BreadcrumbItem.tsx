import * as React from 'react';
import AngleRightIcon from '@patternfly/react-icons/dist/js/icons/angle-right-icon';
import styles from '@patternfly/react-styles/css/components/Breadcrumb/breadcrumb';
import { css } from '@patternfly/react-styles';

export interface BreadcrumbItemRenderArgs {
  className: string;
  ariaCurrent: 'page' | undefined;
}

export interface BreadcrumbItemProps extends React.HTMLProps<HTMLLIElement> {
  /** Content rendered inside the breadcrumb item. */
  children?: React.ReactNode;
  /** Additional classes added to the breadcrumb item. */
  className?: string;
  /** HREF for breadcrumb link. */
  to?: string;
  /** Flag indicating whether the item is active. */
  isActive?: boolean;
  /** Internal prop set by Breadcrumb on all but the first crumb */
  showDivider?: boolean;
  /** Target for breadcrumb link. */
  target?: string;
  /** Sets the base component to render. Defaults to <a> */
  component?: React.ElementType;
  /** A render function to render the component inside the breadcrumb item. */
  render?: (props: BreadcrumbItemRenderArgs) => React.ReactNode;
}

export const BreadcrumbItem: React.FunctionComponent<BreadcrumbItemProps> = ({
  children = null,
  className: classNameProp = '',
  to = null,
  isActive = false,
  showDivider,
  target = null,
  component = 'a',
  render = null,
  ...props
}: BreadcrumbItemProps) => {
  const Component = component;
  const ariaCurrent = isActive ? 'page' : undefined;
  const className = css(styles.breadcrumbLink, isActive && styles.modifiers.current);
  return (
    <li {...props} className={css(styles.breadcrumbItem, classNameProp)}>
      {showDivider && (
        <span className={styles.breadcrumbItemDivider}>
          <AngleRightIcon />
        </span>
      )}
      {render && render({ className, ariaCurrent })}
      {to && !render && (
        <Component href={to} target={target} className={className} aria-current={ariaCurrent}>
          {children}
        </Component>
      )}
      {!to && <React.Fragment>{children}</React.Fragment>}
    </li>
  );
};
BreadcrumbItem.displayName = 'BreadcrumbItem';
