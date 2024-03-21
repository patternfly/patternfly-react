import { ReactNode, MouseEvent, Ref, FunctionComponent, Fragment } from 'react';
import { IRow, IRowData, IExtraData, IHeaderRow } from '../../../components';
import { mapOpenedRows } from '../../../components';
import { Tbody } from '../../../components';

export interface BodyWrapperProps {
  children?: ReactNode;
  mappedRows?: IRow[];
  rows?: IRow[];
  onCollapse?: (
    event: MouseEvent,
    rowIndex: number,
    isOpen: boolean,
    rowData: IRowData,
    extraData: IExtraData
  ) => undefined;
  tbodyRef?: Ref<any> | Function;
  headerRows?: IHeaderRow[];
}

export const BodyWrapper: FunctionComponent<BodyWrapperProps> = ({
  mappedRows,
  tbodyRef,
  /* eslint-disable @typescript-eslint/no-unused-vars */
  rows = [] as IRow[],
  onCollapse,
  headerRows,
  /* eslint-enable @typescript-eslint/no-unused-vars */
  ...props
}: BodyWrapperProps) => {
  if (mappedRows && mappedRows.some((row) => row.hasOwnProperty('parent'))) {
    return (
      <Fragment>
        {mapOpenedRows(mappedRows, props.children).map((oneRow, key) => (
          <Tbody {...props} isExpanded={oneRow.isOpen} key={`tbody-${key}`} ref={tbodyRef as Ref<any>}>
            {oneRow.rows}
          </Tbody>
        ))}
      </Fragment>
    );
  }
  return <Tbody {...props} ref={tbodyRef as Ref<any>} />;
};
BodyWrapper.displayName = 'BodyWrapper';
