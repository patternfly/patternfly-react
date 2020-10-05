import * as React from 'react';

export interface BaseTableHeaderRowProps extends React.HTMLProps<HTMLTableRowElement> {
  /** Content rendered inside the <tr> row */
  children?: React.ReactNode;
  /** Additional classes added to the <tr> row  */
  className?: string;
  /** Forwarded ref */
  innerRef?: React.Ref<any>;
}

const BaseTableHeaderRowBase: React.FunctionComponent<BaseTableHeaderRowProps> = ({
  children,
  className,
  innerRef,
  ...props
}: BaseTableHeaderRowProps) => (
  <tr className={className} ref={innerRef} {...props}>
    {children}
  </tr>
);

export const BaseTableHeaderRow = React.forwardRef(
  (props: BaseTableHeaderRowProps, ref: React.Ref<HTMLTableRowElement>) => (
    <BaseTableHeaderRowBase {...props} innerRef={ref} />
  )
);
BaseTableHeaderRow.displayName = 'BaseTableHeaderRow';
