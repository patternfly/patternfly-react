import * as React from 'react';
import { useOUIAProps, OUIAProps } from '@patternfly/react-core';

export interface BaseTableBodyRowProps extends React.HTMLProps<HTMLTableRowElement>, OUIAProps {
  /** Content rendered inside the <tr> row */
  children?: React.ReactNode;
  /** Additional classes added to the <tr> row  */
  className?: string;
  /** Forwarded ref */
  innerRef?: React.Ref<any>;
}

const BaseTableBodyRowBase: React.FunctionComponent<BaseTableBodyRowProps> = ({
  children,
  className,
  innerRef,
  ouiaId,
  ouiaSafe = true,
  ...props
}: BaseTableBodyRowProps) => {
  const ouiaProps = useOUIAProps('TableRow', ouiaId, ouiaSafe);
  return (
    <tr className={className} ref={innerRef} {...ouiaProps} {...props}>
      {children}
    </tr>
  );
};

export const BaseTableBodyRow = React.forwardRef(
  (props: BaseTableBodyRowProps, ref: React.Ref<HTMLTableRowElement>) => (
    <BaseTableBodyRowBase {...props} innerRef={ref} />
  )
);
BaseTableBodyRow.displayName = 'BaseTableBodyRow';
