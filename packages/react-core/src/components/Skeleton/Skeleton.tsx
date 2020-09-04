import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Skeleton/skeleton';
import { css } from '@patternfly/react-styles';

export interface SkeletonProps extends React.HTMLProps<HTMLDivElement> {
  /** Additional classes added to the Skeleton */
  className?: string;
  /** The width of the Skeleton. Must specify pixels or percentage, or may be one of "sm", "md", or "lg". */
  width?: string;
  /** The height of the Skeleton. Must specify pixels or percentage, or may be one of "sm", "md", or "lg". */
  height?: string;
  /** The font size height of the Skeleton */
  fontSize?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  /** The shape of the Skeleton */
  shape?: 'circle' | 'square' | 'rectangle';
}

const checkPreset = (prop: string, presets: number[]) => {
  return prop.includes('%') && presets.includes(Number(prop.split('%')[0]))
    ? prop.split('%')[0]
    : prop === 'sm' || prop === 'md' || prop === 'lg'
    ? prop
    : undefined;
};

export const Skeleton: React.FunctionComponent<SkeletonProps> = ({
  className = '',
  width = '',
  height = '',
  fontSize,
  shape,
  ...props
}: SkeletonProps) => {
  const presetWidth = checkPreset(width, [25, 33, 50, 66, 75]);
  const presetWidthClassName =
    presetWidth && Object.values(styles.modifiers).find(key => key === `pf-m-width-${presetWidth}`);
  const presetHeight = checkPreset(height, [25, 33, 50, 66, 75, 100]);
  const presetHeightClassName =
    presetHeight && Object.values(styles.modifiers).find(key => key === `pf-m-height-${presetHeight}`);
  const fontHeightClassName = Object.values(styles.modifiers).find(key => key === `pf-m-text-${fontSize}`);

  return (
    <div
      {...props}
      className={css(
        styles.skeleton,
        presetHeightClassName,
        presetWidthClassName,
        fontSize && fontHeightClassName,
        shape === 'circle' && styles.modifiers.circle,
        shape === 'square' && styles.modifiers.square,
        className
      )}
      {...(((width && !presetWidth) || (height && !presetHeight)) && {
        style: {
          '--pf-c-skeleton--Width': width && !presetWidth ? width : undefined,
          '--pf-c-skeleton--Height:': height && !presetHeight ? height : undefined,
          ...props.style
        } as React.CSSProperties
      })}
    ></div>
  );
};
Skeleton.displayName = 'Skeleton';
