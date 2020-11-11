import * as React from 'react';
import { IRow, IRowData, IExtraData, IHeaderRow } from './TableTypes';
import { mapOpenedRows } from './utils/headerUtils';
import { Tbody } from '../TableComposable/Tbody';

export interface BodyWrapperProps {
  children?: React.ReactNode;
  mappedRows?: IRow[];
  rows?: IRow[];
  onCollapse?: (
    event: React.MouseEvent,
    rowIndex: number,
    isOpen: boolean,
    rowData: IRowData,
    extraData: IExtraData
  ) => undefined;
  tbodyRef?: React.Ref<any> | Function;
  headerRows?: IHeaderRow[];
}

export const BodyWrapper: React.FunctionComponent<BodyWrapperProps> = ({
  mappedRows,
  tbodyRef,
  /* eslint-disable @typescript-eslint/no-unused-vars */
  rows = [] as IRow[],
  onCollapse,
  headerRows,
  /* eslint-enable @typescript-eslint/no-unused-vars */
  ...props
}: BodyWrapperProps) => {
  if (mappedRows && mappedRows.some(row => row.hasOwnProperty('parent'))) {
    return (
      <React.Fragment>
        {mapOpenedRows(mappedRows, props.children).map((oneRow, key) => (
          <Tbody {...props} isExpanded={oneRow.isOpen} key={`tbody-${key}`} ref={tbodyRef as React.Ref<any>}>
            {oneRow.rows}
          </Tbody>
        ))}
      </React.Fragment>
    );
  }
  return <Tbody {...props} ref={tbodyRef as React.Ref<any>} />;
};
BodyWrapper.displayName = 'BodyWrapper';
