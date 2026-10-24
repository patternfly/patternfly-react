import styles from '@patternfly/react-styles/css/components/Page/page';
import { css } from '@patternfly/react-styles';

export interface PageHeaderProps extends React.HTMLProps<HTMLElement> {
  /** Content rendered inside the page header. This should be custom header content, rather than the PatternFly Masthead. */
  children?: React.ReactNode;
  /** Additional classes added to the page header */
  className?: string;
  /** Sets the base component to render. Defaults to header */
  component?: keyof React.JSX.IntrinsicElements;
}

export const PageHeader: React.FunctionComponent<PageHeaderProps> = ({
  className,
  children,
  component = 'header',
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
