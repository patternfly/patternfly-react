import React from 'react';
import { isEqual } from 'lodash';
import { DualList } from './index';
import { adjustProps } from './helpers';

class DualListControlled extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prevProps: props,
      ...adjustProps(props)
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return !isEqual(nextProps, prevState.prevProps)
      ? {
          prevProps: nextProps,
          ...adjustProps(nextProps)
        }
      : null;
  }

  onItemChange = ({ side, items, selectCount, isMainChecked }) => {
    this.setState({
      [side]: {
        ...this.state[side],
        items,
        selectCount,
        isMainChecked
      }
    });
  };

  onMainCheckboxChange = ({ side, checked, items, selectCount }) => {
    this.setState({
      [side]: {
        ...this.state[side],
        items,
        selectCount,
        isMainChecked: checked
      }
    });
  };

  onSortClick = ({ side, items, isSortAsc }) => {
    this.setState({
      [side]: {
        ...this.state[side],
        items,
        isSortAsc
      }
    });
  };

  onFilterChange = ({ side, filterTerm, items, isMainChecked }) => {
    this.setState({
      [side]: {
        ...this.state[side],
        filterTerm,
        items,
        isMainChecked
      }
    });
  };

  onChange = ({ left, right }) => {
    this.setState({ left, right });
  };

  render() {
    const { left, right, allowHiddenInputs } = this.state;
    return (
      <DualList
        left={{ ...left }}
        right={{ ...right }}
        onItemChange={this.onItemChange}
        onSortClick={this.onSortClick}
        onFilterChange={this.onFilterChange}
        onMainCheckboxChange={this.onMainCheckboxChange}
        onChange={this.onChange}
        allowHiddenInputs={allowHiddenInputs}
      />
    );
  }
}

export default DualListControlled;
