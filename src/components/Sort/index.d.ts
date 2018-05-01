import SortBase, { SortProps } from './Sort';
import SortTypeSelector, {
  SortType,
  SortTypeObject,
  SortTypeSelectorProps
} from './SortTypeSelector';
import SortDirectionSelector, {
  SortDirectionSelectorProps
} from './SortDirectionSelector';

declare const Sort: typeof SortBase & {
  DirectionSelector: typeof SortDirectionSelector;
  TypeSelector: typeof SortTypeSelector;
};

export {
  Sort,
  SortTypeSelector,
  SortType,
  SortTypeObject,
  SortTypeSelectorProps,
  SortDirectionSelector,
  SortDirectionSelectorProps
};
