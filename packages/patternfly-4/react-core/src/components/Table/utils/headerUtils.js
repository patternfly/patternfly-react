import { scopeColTransformer, selectable, cellActions, emptyCol } from './transformers';
import { defaultTitle } from './formatters';

const generateHeader = ({ transforms: origTransforms, formatters: origFormatters, header }, title) => ({
  ...header,
  label: title,
  transforms: [
    scopeColTransformer,
    emptyCol,
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

const mapHeader = (column, extra, key, ...props) => {
  const title = typeof column === 'string' ? column : column.title;
  console.log(title);
  return ({
    property: title.toLowerCase().trim().replace(/\s/g, '-') || `column-${key}`,
    extraParams: extra,
    header: generateHeader(column, title),
    cell: generateCell(column, extra),
    props: {
      'data-label': title,
      'data-key': key,
      ...column.hasOwnProperty('props') ? column.props : {},
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

const actionsTransforms = ({ actions }) => [
  ...actions ? [{
    title: '',
    transforms: [() => ({
      scope: '',
      component: 'td'
    })],
    cellTransforms: [cellActions(actions)]
  }] : []
]

export const calculateColumns = (headerRows, extra) => {
  return headerRows && [
    ...selectableTransforms(extra),
    ...headerRows,
    ...actionsTransforms(extra)
  ].map((oneCol, key) => ({
    ...mapHeader(oneCol, extra, key)
  })
  );
}
