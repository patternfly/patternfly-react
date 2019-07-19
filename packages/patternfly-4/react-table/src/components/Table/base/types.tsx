/**
 * types.tsx
 *
 * Forked from reactabular-table version 8.14.0
 * https://github.com/reactabular/reactabular/tree/v8.14.0/packages/reactabular-table/src
 * */

import * as React from 'react';

// Cell Type
export type CellType = {
  property?: number | string;
  transforms?: transformsType;
  formatters?: formattersType;
  props?: Object;
};

// Columns Types
export type ColumnsType = Array<ColumnType> | Array<any>;
export type ColumnType = { property? : string, cell?: CellType, props?: object, header?: HeaderType};
export type HeaderType = {
  label?: string;
  transforms?: transformsType;
  formatters?: formattersType;
  props?: Object;
  property?: string;
};

// Rows Types
export type RowsType = RowType[] | Array<[]>;
export type RowKeyType = Function | string;
export interface RowType {
  header?: HeaderType;
  cell?: CellType;
  [key:string]: object;
}

//Table Defaults
export const TableDefaults = {
  renderers: {
    table: 'table',
    header: {
      wrapper: 'thead',
      row: 'tr',
      cell: 'th'
    },
    body: {
      wrapper: 'tbody',
      row: 'tr',
      cell: 'td'
    }
  }
};

// Formatters Types
export type formatterValueType = object | string | React.ElementType;
export type extraParamsType = {rowData?: RowType, column?: ColumnType, columnIndex?: number, property?: string, rowIndex?: number, rowKey?: RowKeyType};
export type formatterType = (value: string | object, extra: extraParamsType) => formatterValueType;
export type formattersType = Array<formatterType>;

// Transforms Types
export type transformType = (value: string | object, extra: extraParamsType) => object;
export type transformsType = Array<transformType>;

// Renderers Types
export type createElementType = string | React.ComponentClass<any, any> | React.FunctionComponent<any>;
export type rendererType = string | Function | React.ComponentClass<any, any> | React.FunctionComponent<any> | React.Component<any, {}, any>;
export interface RenderersTypes {
  columns: ColumnsType,
  renderers?: {
    table?: string,
    header?: {
      wrapper?: rendererType,
      row?: rendererType,
      cell?: rendererType,
    },
    body?: {
      wrapper?: rendererType,
      row?: rendererType,
      cell?: rendererType
    }
  },
  components?: {
    table?: string,
    header?: {
      wrapper?: rendererType,
      row?: rendererType,
      cell?: rendererType,
    },
    body?: {
      wrapper?: rendererType,
      row?: rendererType,
      cell?: rendererType
    }
  }
}