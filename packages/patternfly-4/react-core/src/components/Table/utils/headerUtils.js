import { scopeColTransformer, selectable } from './transformers';
import { defaultTitle } from './formatters';

const generateHeader = ({ transforms: origTransforms, formatters: origFormatters, header }, title) => ({
  ...header,
  label: title,
  transforms: [
    scopeColTransformer,
    ...origTransforms || [],
    ...header && header.hasOwnProperty('transforms') ? header.transforms : []
  ],
  formatters: [
    ...origFormatters || [],
    ...header && header.hasOwnProperty('formatters') ? header.formatters : []
  ]
});

const generateCell = ({ cellFormatters, cellTransforms, cell }) => ({
  ...cell,
  transforms: [
    ...cellTransforms || [],
    ...cell && cell.hasOwnProperty('transforms') ? cell.transforms : []
  ],
  formatters: [
    defaultTitle,
    ...cellFormatters || [],
    ...cell && cell.hasOwnProperty('formatters') ? cell.formatters : []
  ]
});

const mapHeader = (column, extra, ...props) => {
  const title = typeof column === 'string' ? column : column.title;
  return ({
    property: title.toLowerCase(),
    extraParams: extra,
    header: generateHeader(column, title),
    cell: generateCell(column, extra),
    props: {
      'data-label': title,
      ...props
    }
  });
}

const selectableTransforms = ({ onSelect }) => [
  ...onSelect ? [{
    title: '',
    transforms: [selectable],
    cellTransforms: [selectable]
  }] : []
]

export const calculateColumns = (headerRows, extra) => {
  return headerRows && [
    ...selectableTransforms(extra),
    ...headerRows
  ].map(oneCol => ({
    ...mapHeader(oneCol, extra)
  })
  );
}
