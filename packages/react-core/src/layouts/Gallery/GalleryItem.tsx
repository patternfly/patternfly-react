import * as React from 'react';

export interface GalleryItemProps extends React.HTMLProps<HTMLDivElement> {
  /** content rendered inside the Gallery Item */
  children?: React.ReactNode;
}

/**
 *
 */
export function GalleryItem({ children = null, ...props }: GalleryItemProps) {
  return <div {...props}>{children}</div>;
}
