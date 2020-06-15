import * as React from 'react';
import { css } from '@patternfly/react-styles';

export interface BrandProps
  extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  /** Additional classes added to the Brand. */
  className?: string;
  /** Attribute that specifies the URL of the image for the Brand. */
  src?: string;
  /** Attribute that specifies the alt text of the image for the Brand. */
  alt: string;
}

/**
 *
 */
export function Brand({ className = '', src = '', alt, ...props }: BrandProps) {
  return (
    /** the brand component currently contains no styling the 'pf-c-brand' string will be used for the className */
    <img {...props} className={css('pf-c-brand', className)} src={src} alt={alt} />
  );
}
