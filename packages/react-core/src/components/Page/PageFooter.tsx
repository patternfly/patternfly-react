import styles from '@patternfly/react-styles/css/components/Page/page';
import { css } from '@patternfly/react-styles';

export interface PageFooterProps extends React.HTMLProps<HTMLElement> {
  /** Content rendered inside the footer */
  children?: React.ReactNode;
  /** Additional classes added to the footer */
  className?: string;
  /** Sets the base component to render. Defaults to footer */
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
