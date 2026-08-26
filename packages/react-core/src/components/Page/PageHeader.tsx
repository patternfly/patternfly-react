import styles from '@patternfly/react-styles/css/components/Page/page';
import { css } from '@patternfly/react-styles';

export interface PageHeaderProps extends React.HTMLProps<HTMLElement> {
  /** Content rendered inside the page header. This can be a Masthead or custom header content. */
  children?: React.ReactNode;
  /** Additional classes added to the page header */
  className?: string;
  /** Sets the base component to render. Defaults to div */
  component?: keyof React.JSX.IntrinsicElements;
}

export const PageHeader: React.FunctionComponent<PageHeaderProps> = ({
  className,
  children,
  component = 'div',
  ...props
}: PageHeaderProps) => {
  const Component = component as any;

  return (
    <Component {...props} className={css(styles.pageHeader, className)}>
      {children}
    </Component>
  );
};

PageHeader.displayName = 'PageHeader';
