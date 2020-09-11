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

const isText = (prop: string) => (prop === 'sm' || prop === 'md' || prop === 'lg' ? prop : undefined);

export const Skeleton: React.FunctionComponent<SkeletonProps> = ({
  className = '',
  width = '',
  height = '',
  fontSize,
  shape,
  ...props
}: SkeletonProps) => {
  const textWidth = isText(width) && Object.values(styles.modifiers).find(key => key === `pf-m-width-${width}`);
  const textHeight = isText(height) && Object.values(styles.modifiers).find(key => key === `pf-m-height-${height}`);
  const fontHeightClassName = Object.values(styles.modifiers).find(key => key === `pf-m-text-${fontSize}`);

  return (
    <div
      {...props}
      className={css(
        styles.skeleton,
        textWidth,
        textHeight,
        fontSize && fontHeightClassName,
        shape === 'circle' && styles.modifiers.circle,
        shape === 'square' && styles.modifiers.square,
        className
      )}
      {...(((width && !textWidth) || (height && !textHeight)) && {
        style: {
          '--pf-c-skeleton--Width': width && !textWidth ? width : undefined,
          '--pf-c-skeleton--Height': height && !textHeight ? height : undefined,
          ...props.style
        } as React.CSSProperties
      })}
    ></div>
  );
};
Skeleton.displayName = 'Skeleton';
