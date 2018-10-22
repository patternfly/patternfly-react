export { default as selectable } from './decorators/selectable';
export { default as sortable } from './decorators/sortable';
export { default as cellActions } from './decorators/cellActions';

export const scopeColTransformer = () => ({
  scope: 'col'
});
