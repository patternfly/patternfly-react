import styles from '@patternfly/react-styles/css/components/Page/page';
import { css } from '@patternfly/react-styles';

export interface PageFooterProps extends React.HTMLProps<HTMLElement> {
  /** Content rendered inside the page header. This should be custom header content, rather than the PatternFly Masthead. */
  children?: React.ReactNode;
  /** Additional classes added to the page header */
  className?: string;
  /** Sets the base component to render. Defaults to header */
  component?: keyof React.JSX.IntrinsicElements;
}

export const PageFooter: React.FunctionComponent<PageFooterProps> = ({
  className,
  children,
  component = 'footer',
  ...props
}: PageFooterProps) => {
  const Component = component as any;

  return (
    <Component {...props} className={css(styles.pageFooter, className)}>
      {children}
    </Component>
  );
};

PageFooter.displayName = 'PageFooter';
