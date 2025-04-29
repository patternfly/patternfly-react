import { SVGProps } from 'react';

export interface IconProps extends SVGProps<SVGSVGElement> {
  /** Additional classes added to the icon */
  className?: string;
  /** Icon title for accessibility */
  title?: string;
}
