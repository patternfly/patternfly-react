import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Spinner/spinner';
import { css } from '@patternfly/react-styles';

export enum spinnerSize {
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl'
}

export interface SpinnerProps extends Omit<React.HTMLProps<HTMLSpanElement>, 'size'> {
  /** Additional classes added to the Spinner. */
  className?: string;
  /** Size variant of progress. */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** Aria value text */
  'aria-valuetext'?: string;
  /** Whether to use an SVG (new) rather than a span (old) */
  isSVG?: boolean;
  /** Diameter of spinner set as CSS variable */
  diameter?: string;
}

export const Spinner: React.FunctionComponent<SpinnerProps> = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  className = '',
  size = 'xl',
  'aria-valuetext': ariaValueText = 'Loading...',
  isSVG = false,
  diameter,
  ...props
}: SpinnerProps) => {
  const Component = isSVG ? 'svg' : ('span' as any);

  return (
    <Component
      className={css(styles.spinner, styles.modifiers[size], className)}
      role="progressbar"
      aria-valuetext={ariaValueText}
      {...(isSVG && { viewBox: '0 0 100 100' })}
      {...(diameter && { style: { '--pf-c-spinner--diameter': diameter } })}
      {...props}
    >
      {isSVG ? (
        <circle className={styles.spinnerPath} cx="50" cy="50" r="45" fill="none" />
      ) : (
        <React.Fragment>
          <span className={css(styles.spinnerClipper)} />
          <span className={css(styles.spinnerLeadBall)} />
          <span className={css(styles.spinnerTailBall)} />
        </React.Fragment>
      )}
    </Component>
  );
};
Spinner.displayName = 'Spinner';
