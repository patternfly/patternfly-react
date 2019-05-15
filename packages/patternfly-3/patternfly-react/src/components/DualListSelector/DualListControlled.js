import React from 'react';
import PropTypes from 'prop-types';
import { isEqual } from 'lodash';
import { DualList } from './index';
import { adjustProps } from './helpers';
import { noop } from '../../common/helpers';

class DualListControlled extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prevProps: props,
      ...adjustProps(props)
    };
  }

  componentDidMount() {
    const { onComponentInit } = this.props;
    onComponentInit(this.state);
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
    const { onItemChange } = this.props;
    this.setState(
      {
        [side]: {
          ...this.state[side],
          items,
          selectCount,
          isMainChecked
        }
      },
      () => onItemChange(this.state)
    );
  };

  onMainCheckboxChange = ({ side, checked, items, selectCount }) => {
    const { onMainCheckboxChange } = this.props;
    this.setState(
      {
        [side]: {
          ...this.state[side],
          items,
          selectCount,
          isMainChecked: checked
        }
      },
      () => onMainCheckboxChange(this.state)
    );
  };

  onSortClick = ({ side, items, isSortAsc }) => {
    const { onSortClick } = this.props;
    this.setState(
      {
        [side]: {
          ...this.state[side],
          items,
          isSortAsc
        }
      },
      () => onSortClick(this.state)
    );
  };

  onFilterChange = ({ side, filterTerm, items, isMainChecked }) => {
    const { onFilterChange } = this.props;
    this.setState(
      {
        [side]: {
          ...this.state[side],
          filterTerm,
          items,
          isMainChecked
        }
      },
      () => onFilterChange(this.state)
    );
  };

  onChange = ({ left, right }) => {
    const { onChange } = this.props;
    this.setState({ left, right }, () => onChange(this.state));
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

DualListControlled.propTypes = {
  /**
   * Function that runs after items have been moved between the lists.
   * Receives the updated state as a callback.
   */
  onChange: PropTypes.func,
  /**
   * Function that runs after an item was clicked.
   * Receives the updated state as a callback.
   */
  onItemChange: PropTypes.func,
  /**
   * Function that runs after the main checkbox was clicked.
   * Receives the updated state as a callback.
   */
  onMainCheckboxChange: PropTypes.func,
  /**
   * Function that runs after the sort icon was clicked.
   * Receives the updated state as a callback.
   */
  onSortClick: PropTypes.func,
  /**
   * Function that runs after the filter input has changed.
   * Receives the updated state as a callback.
   */
  onFilterChange: PropTypes.func,
  /**
   * Function that runs after the component had mounted.
   * Receives the updated state as a callback.
   */
  onComponentInit: PropTypes.func
};

DualListControlled.defaultProps = {
  onChange: noop,
  onItemChange: noop,
  onMainCheckboxChange: noop,
  onSortClick: noop,
  onFilterChange: noop,
  onComponentInit: noop
};

export default DualListControlled;
