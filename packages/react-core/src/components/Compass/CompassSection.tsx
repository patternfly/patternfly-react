import { css } from '@patternfly/react-styles';

interface CompassSectionProps extends React.HTMLProps<HTMLDivElement> {
  /** Additional classes added to the section. */
  className?: string;
  /** Content of the section. */
  children: React.ReactNode;
}

export const CompassSection: React.FunctionComponent<CompassSectionProps> = ({ children, className, ...props }) => (
  <div className={css('pf-v6-c-compass__section', className)} {...props}>
    {children}
  </div>
);

CompassSection.displayName = 'CompassSection';
