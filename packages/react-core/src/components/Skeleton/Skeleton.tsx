import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Skeleton/skeleton';
import { css } from '@patternfly/react-styles';
import cssHeight from '@patternfly/react-tokens/dist/esm/c_skeleton_Height';
import cssWidth from '@patternfly/react-tokens/dist/esm/c_skeleton_Width';

export interface SkeletonProps extends React.HTMLProps<HTMLDivElement> {
  /** Additional classes added to the Skeleton */
  className?: string;
  /** The width of the Skeleton. Must specify pixels or percentage. */
  width?: string;
  /** The height of the Skeleton. Must specify pixels or percentage. */
  height?: string;
  /** The font size height of the Skeleton */
  fontSize?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  /** The shape of the Skeleton */
  shape?: 'circle' | 'square';
  /** Text read just to screen reader users */
  screenreaderText?: string;
}

export const Skeleton: React.FunctionComponent<SkeletonProps> = ({
  className,
  width,
  height,
  fontSize,
  shape,
  screenreaderText,
  ...props
}: SkeletonProps) => {
  const fontHeightClassName = fontSize
    ? Object.values(styles.modifiers).find((key) => key === `pf-m-text-${fontSize}`)
    : undefined;

  return (
    <div
      {...props}
      className={css(
        styles.skeleton,
        fontSize && fontHeightClassName,
        shape === 'circle' && styles.modifiers.circle,
        shape === 'square' && styles.modifiers.square,
        className
      )}
      {...((width || height) && {
        style: {
          [cssWidth.name]: width ? width : undefined,
          [cssHeight.name]: height ? height : undefined,
          ...props.style
        } as React.CSSProperties
      })}
    >
      <span className="pf-v6-screen-reader">{screenreaderText}</span>
    </div>
  );
};
Skeleton.displayName = 'Skeleton';
