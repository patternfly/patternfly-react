/**
 * header-row.tsx
 *
 * Forked from reactabular-table version 8.14.0
 * https://github.com/reactabular/reactabular/tree/v8.14.0/packages/reactabular-table/src
 */
import * as React from 'react';
import {
  createElementType,
  ColumnType,
  HeaderType,
  RowsType,
  RendererType
} from '../../../../components/Table/base/types';
import { evaluateFormatters } from '../../../../components/Table/base/evaluate-formatters';
import { evaluateTransforms } from '../../../../components/Table/base/evaluate-transforms';
import { mergeProps } from '../../../../components/Table/base/merge-props';
import { HeaderCellInfoWrapper } from '../../../../components';

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
  onRow = () => ({})
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
      // consumer can specify header cell tooltip/popover in two ways, but the transforms approach is preferred,
      // especially for sorting tables that use `transforms: [sortable]`
      // {
      //   title: 'Repositories',
      //   header: {
      //     info: {
      //       tooltip: 'More information about repositories',
      //       className: 'repositories-info-tip',
      //       tooltipProps: {
      //         isContentLeftAligned: true
      //       }
      //     }
      //   }
      // }
      //
      // {
      //   title: 'Repositories',
      //   transforms: [
      //     info({
      //       tooltip: 'More information about repositories',
      //       className: 'repositories-info-tip',
      //       tooltipProps: {
      //         isContentLeftAligned: true
      //       }
      //     }),
      //     sortable
      //   ]
      // },
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
