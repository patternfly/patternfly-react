import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Breadcrumb/breadcrumb';
import { css } from '@patternfly/react-styles';
import { getOUIAProps, OUIAProps } from '../../helpers';

export interface BreadcrumbProps extends React.HTMLProps<HTMLElement> {
  /** Children nodes be rendered to the BreadCrumb. Should be of type BreadCrumbItem. */
  children?: React.ReactNode;
  /** Additional classes added to the breadcrumb nav. */
  className?: string;
  /** Aria label added to the breadcrumb nav. */
  'aria-label'?: string;
}

export const Breadcrumb: React.FunctionComponent<BreadcrumbProps & OUIAProps> = ({
  children = null,
  className = '',
  'aria-label': ariaLabel = 'Breadcrumb',
  ouiaId,
  ...props
}: BreadcrumbProps & OUIAProps) => (
  <nav
    {...props}
    aria-label={ariaLabel}
    className={css(styles.breadcrumb, className)}
    {...getOUIAProps('Breadcrumb', ouiaId)}
  >
    <ol className={styles.breadcrumbList}>
      {React.Children.map(children, (child, index) => {
        const showDivider = index > 0;
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { showDivider });
        }

        return child;
      })}
    </ol>
  </nav>
);
