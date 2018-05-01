import { SFC, HTMLAttributes } from 'react';
import FilterBase, { FilterProps } from './Filter';
import FilterActiveLabel, { FilterActiveLabelProps } from './FilterActiveLabel';
import FilterCategorySelector, {
  FilterCategorySelectorProps
} from './FilterCategorySelector';
import FilterCategoryValueSelector, {
  FilterCategoryValueSelectorProps
} from './FilterCategoryValueSelector';
import FilterItem, { FilterItemProps } from './FilterItem';
import FilterList, { FilterListProps } from './FilterList';
import FilterTypeSelector, {
  FilterTypeSelectorProps
} from './FilterTypeSelector';
import FilterValueSelector, {
  FilterValueSelectorProps
} from './FilterValueSelector';
import { FilterType, FilterTypeObject } from './FilterType';

declare const Filter: typeof FilterBase & {
  ActiveLabel: typeof FilterActiveLabel;
  CategorySelector: typeof FilterCategorySelector;
  CategoryValueSelector: typeof FilterCategoryValueSelector;
  Item: typeof FilterItem;
  List: typeof FilterList;
  TypeSelector: typeof FilterTypeSelector;
  ValueSelector: typeof FilterValueSelector;
};

export {
  Filter,
  FilterProps,
  FilterActiveLabel,
  FilterActiveLabelProps,
  FilterCategorySelector,
  FilterCategorySelectorProps,
  FilterCategoryValueSelector,
  FilterCategoryValueSelectorProps,
  FilterItem,
  FilterItemProps,
  FilterList,
  FilterListProps,
  FilterType,
  FilterTypeObject,
  FilterTypeSelector,
  FilterTypeSelectorProps,
  FilterValueSelector,
  FilterValueSelectorProps
};
