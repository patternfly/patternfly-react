import { scopeColTransformer } from './transformers';

const generateHeader = ({ transforms: origTransforms, header }, title) => ({
  label: title,
  transforms: [
    scopeColTransformer,
    ...origTransforms || [],
    ...header && header.hasOwnProperty('transforms') ? header.transforms : []
  ]
});

export const mapHeader = (column) => {
  const title = typeof column === 'string' ? column : column.title;
  const { transforms, props, ...rest } = column.hasOwnProperty('header') ? column.header : {};
  return ({
    property: title.toLowerCase(),
    header: {
      ...generateHeader(column, title),
      ...rest,
    },
    props: {
      'data-label': title,
      ...props
    }
  });
}
