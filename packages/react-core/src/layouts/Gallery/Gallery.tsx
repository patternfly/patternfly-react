import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/layouts/Gallery/gallery';
import cssGridTemplateColumnsMin from '@patternfly/react-tokens/dist/esm/l_gallery_GridTemplateColumns_min';
import cssGridTemplateColumnsMax from '@patternfly/react-tokens/dist/esm/l_gallery_GridTemplateColumns_max';

export interface GalleryProps extends React.HTMLProps<HTMLDivElement> {
  /** content rendered inside the Gallery layout */
  children?: React.ReactNode;
  /** additional classes added to the Gallery layout */
  className?: string;
  /** Adds space between children. */
  hasGutter?: boolean;
  /** Minimum widths at various breakpoints. */
  minWidths?: {
    default?: string;
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
    '2xl'?: string;
  };
  /** Maximum widths at various breakpoints. */
  maxWidths?: {
    default?: string;
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
    '2xl'?: string;
  };
  /** Sets the base component to render. defaults to div */
  component?: React.ElementType<any> | React.ComponentType<any>;
}
export const Gallery: React.FunctionComponent<GalleryProps> = ({
  children = null,
  className = '',
  component = 'div',
  hasGutter = false,
  minWidths,
  maxWidths,
  ...props
}: GalleryProps) => {
  const minWidthStyles: any = {};
  const Component: any = component;

  if (minWidths) {
    Object.entries(minWidths || {}).map(
      ([breakpoint, value]) =>
        (minWidthStyles[`${cssGridTemplateColumnsMin.name}${breakpoint !== 'default' ? `-on-${breakpoint}` : ''}`] =
          value)
    );
  }
  const maxWidthStyles: any = {};
  if (maxWidths) {
    Object.entries(maxWidths || {}).map(
      ([breakpoint, value]) =>
        (maxWidthStyles[`${cssGridTemplateColumnsMax.name}${breakpoint !== 'default' ? `-on-${breakpoint}` : ''}`] =
          value)
    );
  }
  const widthStyles = { ...minWidthStyles, ...maxWidthStyles };

  return (
    <Component
      className={css(styles.gallery, hasGutter && styles.modifiers.gutter, className)}
      {...props}
      {...((minWidths || maxWidths) && { style: { ...widthStyles, ...props.style } as React.CSSProperties })}
    >
      {children}
    </Component>
  );
};
Gallery.displayName = 'Gallery';
