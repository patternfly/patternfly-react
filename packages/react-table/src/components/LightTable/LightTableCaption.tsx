import * as React from 'react';

export interface LightTableCaptionProps {
  /** Content rendered inside the <caption> caption */
  children?: React.ReactNode;
  /** Additional classes added to the <caption> caption  */
  className?: string;
}

export const LightTableCaption: React.FunctionComponent<LightTableCaptionProps> = ({
  children,
  className,
  ...props
}: LightTableCaptionProps) => (
  <caption className={className} {...props}>
    {children}
  </caption>
);
LightTableCaption.displayName = 'LightTableCaption';
