import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Breadcrumb/breadcrumb';
import { css } from '@patternfly/react-styles';
import { useOUIAProps, OUIAProps } from '../../helpers';

export interface BreadcrumbProps extends React.HTMLProps<HTMLElement>, OUIAProps {
  /** Children nodes be rendered to the BreadCrumb. Should be of type BreadCrumbItem. */
  children?: React.ReactNode;
  /** Additional classes added to the breadcrumb nav. */
  className?: string;
  /** Aria label added to the breadcrumb nav. */
  'aria-label'?: string;
  /** Value to overwrite the randomly generated data-ouia-component-id.*/
  ouiaId?: number | string;
  /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
  ouiaSafe?: boolean;
}

export const Breadcrumb: React.FunctionComponent<BreadcrumbProps> = ({
  children = null,
  className = '',
  'aria-label': ariaLabel = 'Breadcrumb',
  ouiaId,
  ouiaSafe = true,
  ...props
}: BreadcrumbProps) => {
  const ouiaProps = useOUIAProps(Breadcrumb.displayName, ouiaId, ouiaSafe);
  return (
    <nav {...props} aria-label={ariaLabel} className={css(styles.breadcrumb, className)} {...ouiaProps}>
      <ol className={styles.breadcrumbList}>
        {React.Children.map(children, (child, index) => {
          const showDivider = index > 0;
          if (React.isValidElement(child)) {
            return React.cloneElement(child as React.ReactElement<any>, { showDivider });
          }

          return child;
        })}
      </ol>
    </nav>
  );
};
Breadcrumb.displayName = 'Breadcrumb';
