import * as React from 'react';

export interface BaseTableCaptionProps {
  /** Content rendered inside the <caption> caption */
  children?: React.ReactNode;
  /** Additional classes added to the <caption> caption  */
  className?: string;
}

export const BaseTableCaption: React.FunctionComponent<BaseTableCaptionProps> = ({
  children,
  className,
  ...props
}: BaseTableCaptionProps) => (
  <caption className={className} {...props}>
    {children}
  </caption>
);
BaseTableCaption.displayName = 'BaseTableCaption';
