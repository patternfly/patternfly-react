/**
 * header-row.tsx
 *
 * Forked from reactabular-table version 8.14.0
 * https://github.com/reactabular/reactabular/tree/v8.14.0/packages/reactabular-table/src
 */
import * as React from 'react';
import { evaluateFormatters } from './evaluate-formatters';
import { evaluateTransforms } from './evaluate-transforms';
import { mergeProps } from './merge-props';
import { createElementType, ColumnType, HeaderType, RowsType, RendererType } from './types';
import { HeaderCellInfoWrapper } from '../HeaderCellInfoWrapper';

export interface HeaderRowProps {
  rowData: RowsType;
  rowIndex: number;
  renderers: RendererType;
  onRow?: Function;
}

export const HeaderRow: React.FunctionComponent<HeaderRowProps> = ({
  rowData,
  rowIndex,
  renderers,
  onRow = () => Object
}: HeaderRowProps) =>
  React.createElement(
    renderers.row as createElementType,
    onRow(rowData, { rowIndex }),
    (rowData as []).map((column: ColumnType, columnIndex: number) => {
      const { property, header = {} as HeaderType, props = {} } = column;
      const evaluatedProperty = property || (header && header.property);
      const { label, transforms = [], formatters = [], info = {} } = header;
      const extraParameters = {
        columnIndex,
        property: evaluatedProperty,
        column
      };
      const transformedProps = evaluateTransforms(transforms, label, extraParameters);

      if (!transformedProps) {
        // tslint:disable-next-line:no-console
        console.warn('Table.Header - Failed to receive a transformed result'); // eslint-disable-line max-len, no-console
      }

      let cellNode;
      const { tooltip, tooltipProps, popover, popoverProps, ariaLabel, className } = info;
      if (tooltip) {
        cellNode = (
          <HeaderCellInfoWrapper
            variant="tooltip"
            info={tooltip}
            tooltipProps={tooltipProps}
            ariaLabel={ariaLabel}
            className={className}
          >
            {transformedProps.children || evaluateFormatters(formatters)(label, extraParameters)}
          </HeaderCellInfoWrapper>
        );
      } else if (popover) {
        cellNode = (
          <HeaderCellInfoWrapper
            variant="popover"
            info={popover}
            popoverProps={popoverProps}
            ariaLabel={ariaLabel}
            className={className}
          >
            {transformedProps.children || evaluateFormatters(formatters)(label, extraParameters)}
          </HeaderCellInfoWrapper>
        );
      } else {
        cellNode = transformedProps.children || evaluateFormatters(formatters)(label, extraParameters);
      }

      return React.createElement(
        renderers.cell as createElementType,
        {
          key: `${columnIndex}-header`,
          ...mergeProps(props, header && header.props, transformedProps)
        },
        cellNode
      );
    })
  );
HeaderRow.displayName = 'HeaderRow';
