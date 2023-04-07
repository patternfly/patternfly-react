import * as React from 'react';

export interface CaptionProps {
  /** Content rendered inside the caption */
  children?: React.ReactNode;
  /** Additional classes added to the caption  */
  className?: string;
}

export const Caption: React.FunctionComponent<CaptionProps> = ({ children, className, ...props }: CaptionProps) => (
  <caption className={className} {...props}>
    {children}
  </caption>
);
Caption.displayName = 'Caption';
