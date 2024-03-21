import { HTMLProps, ReactNode, ElementType, ComponentType, FunctionComponent } from 'react';

export interface GalleryItemProps extends HTMLProps<HTMLDivElement> {
  /** content rendered inside the Gallery Item */
  children?: ReactNode;
  /** Sets the base component to render. defaults to div */
  component?: ElementType<any> | ComponentType<any>;
}

export const GalleryItem: FunctionComponent<GalleryItemProps> = ({
  children = null,
  component = 'div',
  ...props
}: GalleryItemProps) => {
  const Component: any = component;

  return <Component {...props}>{children}</Component>;
};
GalleryItem.displayName = 'GalleryItem';
