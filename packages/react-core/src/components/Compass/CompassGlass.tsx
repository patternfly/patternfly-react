import { css } from '@patternfly/react-styles';

interface CompassGlassProps {
  /** Content that should have a glass effect */
  children: React.ReactNode;
  /** Additional classes added to the container */
  className?: string;
}

export const CompassGlass: React.FunctionComponent<CompassGlassProps> = ({ children, className }) => (
  <div className={css('pf-v6-c-compass__glass', className)}>{children}</div>
);

CompassGlass.displayName = 'CompassGlass';
