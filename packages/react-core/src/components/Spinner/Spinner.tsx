import styles from '@patternfly/react-styles/css/components/Spinner/spinner';
import { css } from '@patternfly/react-styles';
import cssDiameter from '@patternfly/react-tokens/dist/esm/c_spinner_diameter';

export enum spinnerSize {
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl'
}

export interface SpinnerProps extends React.SVGProps<SVGSVGElement> {
  /** Additional classes added to the Spinner. */
  className?: string;
  /** Size variant of progress. */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** Text describing that current loading status or progress */
  'aria-valuetext'?: string;
  /** Diameter of spinner set as CSS variable */
  diameter?: string;
  /** Indicates the spinner is inline and the size should inherit the text font size. This will override the size prop. */
  isInline?: boolean;
  /** Accessible label to describe what is loading */
  'aria-label'?: string;
  /** ID of the element(s) that provide an accessible name for the spinner. This prop is deprecated and you should instead use the aria-labelledby prop (with a lowercase "b") instead. */
  'aria-labelledBy'?: string;
  /** ID of the element(s) that provide an accessible name for the spinner. */
  'aria-labelledby'?: string;
}

export const Spinner: React.FunctionComponent<SpinnerProps> = ({
  className = '',
  size = 'xl',
  'aria-valuetext': ariaValueText = 'Loading...',
  diameter,
  isInline = false,
  'aria-label': ariaLabel = 'Contents',
  'aria-labelledBy': deprecatedAriaLabelledBy,
  'aria-labelledby': ariaLabelledby,
  ...props
}: SpinnerProps) => (
  <svg
    className={css(styles.spinner, isInline ? styles.modifiers.inline : styles.modifiers[size], className)}
    role="progressbar"
    aria-valuetext={ariaValueText}
    viewBox="0 0 100 100"
    {...(diameter && { style: { [cssDiameter.name]: diameter } as React.CSSProperties })}
    aria-label={ariaLabel}
    {...((ariaLabelledby ?? deprecatedAriaLabelledBy) && {
      'aria-labelledby': ariaLabelledby ?? deprecatedAriaLabelledBy
    })}
    {...props}
  >
    <circle className={styles.spinnerPath} cx="50" cy="50" r="45" fill="none" />
  </svg>
);
Spinner.displayName = 'Spinner';
