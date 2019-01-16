import React from 'react';
import PropTypes from 'prop-types';
import cloneDeep from 'lodash/cloneDeep';
import DualListArrows from './components/DualListArrows';
import DualListSelector from './components/DualListSelector';
import DualListHiddenSelect from './components/DualListHiddenSelect';
import { noop, debounce } from '../../common/helpers';
import {
  arrangeArray,
  isAllChildrenChecked,
  reverseAllItemsOrder,
  getItem,
  getUpdatedSelectCount,
  itemHasParent,
  itemHasChildren,
  toggleAllItems,
  isAllItemsChecked,
  isItemExistOnList,
  filterByHiding,
  getFilterredItemsLength,
  makeAllItemsVisible,
  getSelectedFilterredItemsLength,
  isItemSelected,
  getFilterredItems
} from './helpers';

class DualList extends React.Component {
  constructor(props) {
    super(props);
    this.onFilterChangeDebounced = debounce(this.emitFilterChange, 200);
  }
  onItemChange = ({
    target: {
      checked,
      dataset: { position, side, parentPosition }
    }
  }) => {
    const {
      [side]: { selectCount: originalSelectCount, items: originalItems, isSortAsc, filterTerm }
    } = this.props;
    const items = cloneDeep(originalItems);
    const item = getItem(isSortAsc, items, position, parentPosition);
    let selectCount = originalSelectCount;
    item.checked = checked;
    if (itemHasParent(item)) {
      const parent = getItem(isSortAsc, items, parentPosition);
      parent.checked = isAllChildrenChecked(parent);
      selectCount = getUpdatedSelectCount(selectCount, checked);
    } else if (itemHasChildren(item)) {
      const { children } = item;
      toggleAllItems(children, checked);
      selectCount = getUpdatedSelectCount(selectCount, checked, children.length);
    } else {
      selectCount = getUpdatedSelectCount(selectCount, checked);
    }
    let isMainChecked = false;
    if (filterTerm) {
      const filteredItemsLength = getFilterredItemsLength(items);
      const selectedFilteredItemsLength = getSelectedFilterredItemsLength(items);
      isMainChecked = filteredItemsLength > 0 && selectedFilteredItemsLength === filteredItemsLength;
    } else {
      isMainChecked = isAllItemsChecked(items, selectCount);
    }
    this.props.onItemChange({
      side,
      items,
      selectCount,
      isMainChecked
    });
  };

  onMainCheckboxChange = ({
    target: {
      checked,
      dataset: { side }
    }
  }) => {
    const {
      [side]: { items: originalItems, filterTerm, selectCount: originalSelectCount }
    } = this.props;
    const items = cloneDeep(originalItems);
    let selectCount = originalSelectCount;
    if (filterTerm) {
      const filterredItems = getFilterredItems(items);
      const toggledAmount = toggleAllItems(filterredItems, checked);
      selectCount += toggledAmount * (checked ? 1 : -1);
    } else {
      const toggledAmount = toggleAllItems(items, checked);
      selectCount = checked ? selectCount + toggledAmount : 0;
    }
    this.props.onMainCheckboxChange({
      side,
      checked,
      items,
      selectCount
    });
  };

  onSortClick = ({
    target: {
      dataset: { side }
    }
  }) => {
    const {
      [side]: { items, isSortAsc }
    } = this.props;
    const itemsReversed = reverseAllItemsOrder(items);
    this.props.onSortClick({
      side,
      items: itemsReversed,
      isSortAsc: !isSortAsc
    });
  };

  onFilterChange = event => {
    /** https://reactjs.org/docs/events.html#event-pooling */
    event.persist();
    this.onFilterChangeDebounced(event);
  };

  emitFilterChange = ({
    target: {
      value,
      dataset: { side }
    }
  }) => {
    const {
      [side]: { items: originalItems, selectCount }
    } = this.props;
    const filterTerm = value.trim();
    if (!value) {
      const items = makeAllItemsVisible(originalItems);
      const isMainChecked = isAllItemsChecked(items, selectCount);
      this.props.onFilterChange({ side, filterTerm, items, isMainChecked });
      return;
    }
    const items = filterByHiding(originalItems, filterTerm);
    const filteredItemsLength = getFilterredItemsLength(items);
    const isMainChecked = filteredItemsLength > 0 && getSelectedFilterredItemsLength(items) === filteredItemsLength;
    this.props.onFilterChange({ side, filterTerm, items, isMainChecked });
  };

  moveTo = otherSide => {
    const side = otherSide === 'right' ? 'left' : 'right';
    const sideState = this.props[side];
    const otherSideState = this.props[otherSide];
    const sideItemsWithRemainChildren = [];
    let otherSideItems = cloneDeep(otherSideState.items);
    let sideItems = sideState.items.filter(item => {
      if (isItemSelected(item)) {
        if (itemHasChildren(item)) {
          const { isParentExist, parentIndex } = isItemExistOnList(otherSideItems, item.label);
          if (isParentExist) {
            const { children } = otherSideItems[parentIndex];
            children.push(...item.children);
            return false;
          }
        }
        otherSideItems.push(item);
        return false;
      } else if (itemHasChildren(item)) {
        const selectedChildren = [];
        const unselectedChildren = [];
        item.children.forEach(childItem => {
          if (isItemSelected(childItem)) {
            selectedChildren.push(childItem);
          } else {
            unselectedChildren.push(childItem);
          }
        });
        if (selectedChildren.length > 0) {
          const { isParentExist, parentIndex } = isItemExistOnList(otherSideItems, item.label);
          if (isParentExist) {
            otherSideItems[parentIndex].children.push(...selectedChildren);
          } else {
            otherSideItems.push({ ...item, checked: true, children: selectedChildren });
          }
          if (unselectedChildren.length > 0) {
            sideItemsWithRemainChildren.push({ ...item, children: unselectedChildren });
          }
          return false;
        }
      }
      return true;
    });
    if (sideItemsWithRemainChildren.length > 0) {
      sideItems.push(...sideItemsWithRemainChildren);
    }
    const updatedSideState = {
      ...sideState,
      selectCount: 0,
      isMainChecked: false
    };

    const updatedOtherSideState = {
      ...otherSideState,
      selectCount: 0,
      isMainChecked: false
    };

    sideItems = arrangeArray({ ...updatedSideState, items: sideItems });
    otherSideItems = arrangeArray({ ...updatedOtherSideState, items: otherSideItems, resetAllSelected: true });

    this.props.onChange({
      [side]: {
        ...updatedSideState,
        items: sideItems
      },
      [otherSide]: {
        ...updatedOtherSideState,
        items: otherSideItems
      }
    });
  };

  leftArrowClick = () => {
    const {
      arrows: { left }
    } = this.props;
    left.onClick();
    this.moveTo('left');
  };

  rightArrowClick = () => {
    const {
      arrows: { right }
    } = this.props;
    right.onClick();
    this.moveTo('right');
  };

  render() {
    const { left, right, arrows, allowHiddenInputs } = this.props;
    const hiddenInputs = allowHiddenInputs ? (
      <React.Fragment>
        <DualListHiddenSelect {...left.inputProps} items={left.items} />
        <DualListHiddenSelect {...right.inputProps} items={right.items} />
      </React.Fragment>
    ) : null;
    return (
      <div className="dual-list-pf">
        {hiddenInputs}
        <DualListSelector
          side="left"
          {...left}
          onItemChange={this.onItemChange}
          onSortClick={this.onSortClick}
          onFilterChange={this.onFilterChange}
          onMainCheckboxChange={this.onMainCheckboxChange}
        />
        <DualListArrows
          left={{ onClick: this.leftArrowClick, ariaLabel: arrows.left.ariaLabel }}
          right={{ onClick: this.rightArrowClick, ariaLabel: arrows.right.ariaLabel }}
        />
        <DualListSelector
          side="right"
          {...right}
          onItemChange={this.onItemChange}
          onSortClick={this.onSortClick}
          onFilterChange={this.onFilterChange}
          onMainCheckboxChange={this.onMainCheckboxChange}
        />
      </div>
    );
  }
}

DualList.propTypes = {
  /**
   * - items: Array of objects that must contain a label and a value.
   * - options: The Kebab menu items.
   * - isSortAsc: Set the list items sorting direction.
   * - sortBy: set the list items sorting factor.
   * - isMainChecked: Set the main checkbox state.
   */
  left: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
        children: PropTypes.arrayOf(
          PropTypes.shape({
            label: PropTypes.string,
            value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
          })
        )
      })
    ),
    options: PropTypes.node,
    isSortAsc: PropTypes.bool,
    sortBy: PropTypes.string,
    isMainChecked: PropTypes.bool,
    inputProps: PropTypes.object
  }),
  /**
   * - items: Array of objects that must contain a label and a value.
   * - options: The Kebab menu items.
   * - isSortAsc: Set the list items sorting direction.
   * - isMainChecked: Set the main checkbox state.
   * - sortBy: set the list items sorting factor.
   */
  right: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
      })
    ),
    options: PropTypes.node,
    isSortAsc: PropTypes.bool,
    sortBy: PropTypes.string,
    isMainChecked: PropTypes.bool,
    inputProps: PropTypes.object
  }),
  /**
   * - Conatains the left and right arrows properties,
   * - Where in every object there are:
   * - onClick - function which determine the onClick event,
   * - ariaLabel - set the aria-label text.
   */
  arrows: PropTypes.shape({
    left: PropTypes.shape({
      onClick: PropTypes.func,
      ariaLabel: PropTypes.string
    }),
    right: PropTypes.shape({
      onClick: PropTypes.func,
      ariaLabel: PropTypes.string
    })
  }),
  /**
   * Allows adding hidden select inputs
   * that reflects the dual list selected items.
   * It can be used while submitting a form to access the dual list data.
   * */
  allowHiddenInputs: PropTypes.bool,
  /**
   * Function that runs after an item was clicked.
   * receives an object of: { side, items, selectCount, isMainChecked } as a callback.
   */
  onItemChange: PropTypes.func,
  /**
   * Function that runs after the sort icon was clicked.
   * receives an object of: { side, items, isSortAsc } as a callback.
   */
  onSortClick: PropTypes.func,
  /**
   * Function that runs after the filter input has changed.
   * receives an object of: { side, filterTerm } as a callback.
   */
  onFilterChange: PropTypes.func,
  /**
   * Function that runs after the main checkbox was clicked.
   * receives an object of: { side, checked, items, selectCount } as a callback.
   */
  onMainCheckboxChange: PropTypes.func,
  /**
   * Function that runs after items have been moved between the lists.
   * receives an object of: { left, right } updated sides as a callback.
   */
  onChange: PropTypes.func
};

DualList.defaultProps = {
  left: {
    items: [],
    options: null,
    isSortAsc: true,
    sortBy: 'label',
    filterTerm: '',
    isMainChecked: false,
    inputProps: null
  },
  right: {
    items: [],
    options: null,
    isSortAsc: true,
    sortBy: 'label',
    filterTerm: '',
    isMainChecked: false,
    inputProps: null
  },
  arrows: {
    left: {
      onClick: noop,
      ariaLabel: null
    },
    right: {
      onClick: noop,
      ariaLabel: null
    }
  },
  allowHiddenInputs: false,
  onItemChange: noop,
  onSortClick: noop,
  onFilterChange: noop,
  onMainCheckboxChange: noop,
  onChange: noop
};

export default DualList;
