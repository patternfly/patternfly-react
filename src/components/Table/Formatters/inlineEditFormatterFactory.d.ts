import { InlineEditProps } from '../../InlineEdit';
import { ReactNode } from 'react';

export type InlineEditFormatterFactoryProps<V = any, D = any> = Pick<
  InlineEditProps<V, D>,
  'isEditing' | 'renderValue' | 'renderEdit'
>;

declare function inlineEditFormatterFactory<V = any, D = any>(
  props?: InlineEditFormatterFactoryProps<V, D>
): (value: V, additionalData: D) => ReactNode;

export default inlineEditFormatterFactory;
