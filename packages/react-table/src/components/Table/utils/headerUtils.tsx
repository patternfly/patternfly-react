import {
  scopeColTransformer,
  selectable,
  cellActions,
  emptyCol,
  mapProps,
  collapsible,
  emptyTD,
  expandedRow,
  parentId,
  editable
} from './transformers';
import { defaultTitle } from './formatters';
import {
  ICell,
  IRow,
  IActions,
  IActionsResolver,
  IAreActionsDisabled,
  OnSelect,
  OnCollapse,
  OnRowEdit
} from '../Table';

/**
 * Generate header with transforms and formatters from custom header object.
 *
 * @param {*} header with transforms, formatters, columnTransforms, and rest of header object.
 * @param {*} title to be used as label in header config.
 * @returns {*} header, label, transforms: Array, formatters: Array.
 */
const generateHeader = (
  {
    transforms: origTransforms,
    formatters: origFormatters,
    columnTransforms,
    header
  }: {
    transforms?: ICell['transforms'];
    formatters?: ICell['formatters'];
    columnTransforms?: ICell['columnTransforms'];
    header?: ICell;
  },
  title?: string | ICell
) => ({
  ...header,
  label: title,
  transforms: [
    scopeColTransformer,
    emptyCol,
    ...(origTransforms || []),
    ...(columnTransforms || []),
    ...(header && header.hasOwnProperty('transforms') ? header.transforms : [])
  ],
  formatters: [...(origFormatters || []), ...(header && header.hasOwnProperty('formatters') ? header.formatters : [])]
});

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
interface ICustomCell {
  cellFormatters?: ICell['cellFormatters'];
  cellTransforms?: ICell['cellTransforms'];
  columnTransforms?: ICell['columnTransforms'];
  cell?: ICell;
}

/**
 * Function to generate cell for header config to change look of each cell.
 *
 * @param {*} customCell config with cellFormatters, cellTransforms, columnTransforms and rest of cell config.
 * @param {*} extra - extra
 * @returns {*} cell, transforms: Array, formatters: Array.
 */
const generateCell = (
  { cellFormatters, cellTransforms, columnTransforms, cell }: ICustomCell,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  extra: any
) => ({
  ...cell,
  transforms: [
    ...(cellTransforms || []),
    ...(columnTransforms || []),
    ...(cell && cell.hasOwnProperty('transforms') ? cell.transforms : []),
    mapProps // This transform should be applied last so that props that are manually defined at the cell level will override all other transforms.
  ],
  formatters: [
    defaultTitle,
    ...(cellFormatters || []),
    ...(cell && cell.hasOwnProperty('formatters') ? cell.formatters : [])
  ]
});

/**
 * Function to map custom simple object properties to expected format with property, header, cell, extra params
 * and props.
 *
 * @param {*} column to be shown in header - either string or object with title, transformers and formatters (for cells as well).
 * @param {*} extra additional object with callbacks for specific formatters.
 * @param {*} key cell key to be shown in data-key.
 * @param {*} props additional props for each cell.
 * @returns {*} object with property, extraParams, header, cell and props.
 */
const mapHeader = (column: ICell, extra: any, key: number, ...props: any) => {
  const title = (column.hasOwnProperty('title') ? column.title : column) as string | ICell;
  const dataLabel = (column.hasOwnProperty('dataLabel')
    ? column.dataLabel
    : typeof title === 'string'
    ? title
    : `column-${key}`) as string | ICell;
  return {
    property:
      (typeof title === 'string' &&
        title
          .toLowerCase()
          .trim()
          .replace(/\s/g, '-')) ||
      `column-${key}`,
    extraParams: extra,
    data: column.data,
    header: generateHeader(column, title),
    cell: generateCell(column, extra),
    props: {
      'data-label': dataLabel,
      'data-key': key,
      ...(column.hasOwnProperty('props') ? column.props : {}),
      ...props
    }
  };
};

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
export interface ISelectTransform {
  onSelect: OnSelect;
  canSelectAll: boolean;
}

/**
 * Function to define select cell in first column.
 *
 * @param {*} extraObject with onSelect callback.
 * @returns {*} object with empty title, tranforms - Array, cellTransforms - Array.
 */
const selectableTransforms = ({ onSelect, canSelectAll }: ISelectTransform) => [
  ...(onSelect
    ? [
        {
          title: '',
          transforms: (canSelectAll && [selectable]) || null,
          cellTransforms: [selectable]
        }
      ]
    : [])
];

/**
 * Function to define actions in last column.
 *
 * @param {*} extraObject with actions array.
 * @returns {*} object with empty title, tranforms - Array, cellTransforms - Array.
 */
const actionsTransforms = ({
  actions,
  actionResolver,
  areActionsDisabled
}: {
  actions: IActions;
  actionResolver: IActionsResolver;
  areActionsDisabled: IAreActionsDisabled;
}) => [
  ...(actionResolver || actions
    ? [
        {
          title: '',
          transforms: [emptyTD],
          cellTransforms: [cellActions(actions, actionResolver, areActionsDisabled)]
        }
      ]
    : [])
];

/**
 * Function to define collapsible in first column.
 *
 * @param {*}  extraObject with onCollapse callback.
 * @returns {*} object with empty title, tranforms - Array, cellTransforms - Array.
 */
const collapsibleTransfroms = ({ onCollapse }: { onCollapse: OnCollapse }) => [
  ...(onCollapse
    ? [
        {
          title: '',
          transforms: [emptyTD],
          cellTransforms: [collapsible]
        }
      ]
    : [])
];

/**
 * Function to add additional cell transforms to object.
 *
 * @param {*} cell to be expanded.
 * @param {*} additional thing to be added to cellTransforms.
 * @returns {*} object with title from cell and cellTransforms with additional in.
 */
const addAdditionalCellTranforms = (cell: ICell, additional: any) => ({
  ...(cell.hasOwnProperty('title') ? cell : { title: cell }),
  cellTransforms: [...(cell.hasOwnProperty('cellTransforms') ? cell.cellTransforms : []), additional]
});

/**
 * Function to change expanded row with additional transforms.
 *
 * @param {*} header info with cellTransforms.
 * @param {*} extraObject with onCollapse function.
 */
const expandContent = (header: (ICell | string)[], { onCollapse }: { onCollapse: OnCollapse }) => {
  if (!onCollapse) {
    return header;
  }

  return header.map((cell: ICell | string, key: number) => {
    const parentIdCell = addAdditionalCellTranforms(cell as ICell, parentId);
    return key === 0 ? addAdditionalCellTranforms(parentIdCell as ICell, expandedRow(header.length)) : parentIdCell;
  });
};

/**
 * Function to join parent and their children so they can be rendered in tbody.
 *
 * @param {*} rows raw data to find out if it's child or parent.
 * @param {*} children data to render (array of react children).
 */
export const mapOpenedRows = (rows: IRow[], children: any) =>
  rows.reduce((acc: any, curr, key) => {
    if (curr.hasOwnProperty('parent')) {
      const parent = acc.length > 0 && acc[acc.length - 1];
      if (parent) {
        acc[acc.length - 1].rows = [...acc[acc.length - 1].rows, children[key]];
        if (curr.hasOwnProperty('compoundParent')) {
          // if this is compound expand, check for any open child cell
          acc[acc.length - 1].isOpen = acc[acc.length - 1].rows.some((oneRow: IRow) =>
            oneRow.props.rowData.cells.some((oneCell: ICell) => oneCell.props && oneCell.props.isOpen)
          );
        }
      }
    } else {
      acc = [...acc, { ...curr, rows: [children[key]] }];
    }
    return acc;
  }, []) as IRow[];

const rowEditTransforms = ({ onRowEdit }: { onRowEdit: OnRowEdit }) => [
  ...(onRowEdit
    ? [
        {
          title: '',
          cellTransforms: [editable]
        }
      ]
    : [])
];

/**
 * Function to calculate columns based on custom config.
 * It adds some custom cells for collapse, select, if expanded row and actions.
 *
 * @param {*} headerRows custom object with described table header cells.
 * @param {*} extra object with custom callbacks.
 * @returns {*} expected object for react tabular table.
 */
export const calculateColumns = (headerRows: (ICell | string)[], extra: any) =>
  headerRows &&
  [
    ...collapsibleTransfroms(extra),
    ...selectableTransforms(extra),
    ...expandContent(headerRows, extra),
    ...rowEditTransforms(extra),
    ...actionsTransforms(extra)
  ].map((oneCol, key) => ({
    ...mapHeader(oneCol as ICell, extra, key)
  }));
