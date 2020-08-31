import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Skeleton/skeleton';
import { css } from '@patternfly/react-styles';

export interface SkeletonProps extends React.HTMLProps<HTMLDivElement> {
  /** Additional classes added to the Skeleton */
  className?: string;
  /** The percentage width of the Skeleton */
  width?: string;
  /** The percentage height of the Skeleton */
  height?: string;
  /** The font size height of the Skeleton */
  fontSize?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  /** The shape of the Skeleton */
  shape?: 'circle' | 'square' | 'rectangle';
  /** Width of the shape */
  shapeWidth?: 'sm' | 'md' | 'lg';
  /** Height of the shape */
  shapeHeight?: 'sm' | 'md' | 'lg';
}

const shapeWidths = {
  sm: styles.modifiers.widthSm,
  md: styles.modifiers.widthMd,
  lg: styles.modifiers.widthLg
};

const shapeHeights = {
  sm: styles.modifiers.heightSm,
  md: styles.modifiers.heightMd,
  lg: styles.modifiers.heightLg
};

export const Skeleton: React.FunctionComponent<SkeletonProps> = ({
  className = '',
  width = '',
  height = '',
  fontSize,
  shape,
  shapeWidth,
  shapeHeight,
  ...props
}: SkeletonProps) => {
  const presetWidth = Object.values(styles.modifiers).find(key => key === `pf-m-width-${width}`);
  const presetHeight = Object.values(styles.modifiers).find(key => key === `pf-m-height-${height}`);
  const fontHeight = Object.values(styles.modifiers).find(key => key === `pf-m-text-${fontSize}`);
  return (
    <div
      {...props}
      className={css(
        styles.skeleton,
        presetWidth,
        presetHeight,
        fontSize && fontHeight,
        shape === 'circle' && styles.modifiers.circle,
        shape === 'square' && styles.modifiers.square,
        shapeWidth && shapeWidths[shapeWidth],
        shapeHeight && shapeHeights[shapeHeight],
        className
      )}
      {...(((width && !presetWidth) || (height && !presetHeight)) && {
        style: {
          width: width && !presetWidth ? `${width}%` : undefined,
          height: height && !presetHeight ? `${height}%` : undefined,
          ...props.style
        }
      })}
    ></div>
  );
};
Skeleton.displayName = 'Skeleton';
