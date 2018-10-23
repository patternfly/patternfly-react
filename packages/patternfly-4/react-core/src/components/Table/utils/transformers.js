export { default as selectable } from './decorators/selectable';
export { default as sortable } from './decorators/sortable';
export { default as cellActions } from './decorators/cellActions';
export { default as cellWidth } from './decorators/cellWidth';

export const scopeColTransformer = () => ({
  scope: 'col'
});

export const headerCol = () => ({
  component: 'th'
})

export const emptyCol = (label) => ({
  ...label ? {} : { scope: '' }
})
