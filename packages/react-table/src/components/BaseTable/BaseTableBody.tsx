import * as React from 'react';

export interface BaseTableBodyProps extends React.HTMLProps<HTMLTableSectionElement> {
  /** Content rendered inside the <tr> row */
  children?: React.ReactNode;
  /** Additional classes added to the <tr> row  */
  className?: string;
  /** Forwarded ref */
  innerRef?: React.Ref<any>;
}

const BaseTableBodyBase: React.FunctionComponent<BaseTableBodyProps> = ({
  children,
  className,
  innerRef,
  ...props
}: BaseTableBodyProps) => (
  <tbody role="rowgroup" className={className} ref={innerRef} {...props}>
    {children}
  </tbody>
);

export const BaseTableBody = React.forwardRef((props: BaseTableBodyProps, ref: React.Ref<HTMLTableSectionElement>) => (
  <BaseTableBodyBase {...props} innerRef={ref} />
));
BaseTableBody.displayName = 'BaseTableBody';
