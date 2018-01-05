import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Button, Icon } from '../../index';
import { bindMethods } from '../../common/helpers';

export class ToolbarFind extends React.Component {
  constructor() {
    super();
    this.state = {
      dropdownShown: false,
      currentValue: ''
    };

    bindMethods(this, [
      'toggleDropdownShown',
      'hideDropdown',
      'onValueKeyPress',
      'handleValueChange',
      'handleFindNext',
      'handleFindPrevious'
    ]);
  }

  toggleDropdownShown() {
    const { dropdownShown } = this.state;
    this.setState({ dropdownShown: !dropdownShown });
  }

  hideDropdown() {
    this.setState({ dropdownShown: false });
  }

  onValueKeyPress(keyEvent) {
    const { onEnter } = this.props;
    const { currentValue } = this.state;

    if (keyEvent.key === 'Enter' && onEnter) {
      onEnter(currentValue);
    }
  }

  handleValueChange(event) {
    const { onChange } = this.props;

    this.setState({ currentValue: event.target.value });

    if (onChange) {
      onChange(event.target.value);
    }
  }

  handleFindNext() {
    const { currentValue } = this.state;
    const { onFindNext } = this.props;

    if (onFindNext) {
      onFindNext(currentValue);
    }
  }

  handleFindPrevious() {
    const { currentValue } = this.state;
    const { onFindPrevious } = this.props;

    if (onFindPrevious) {
      onFindPrevious(currentValue);
    }
  }

  renderCounts() {
    const { currentValue } = this.state;
    const { currentIndex, totalCount } = this.props;

    if (currentValue && currentValue !== '') {
      return [
        <span className="find-pf-nums">
          {currentIndex || 0} of {totalCount}
        </span>,
        <Button bsStyle="link">
          <Icon type="fa" name="angle-up" />
        </Button>,
        <Button bsStyle="link">
          <Icon type="fa" name="angle-down" />
        </Button>
      ];
    } else {
      return null;
    }
  }

  render() {
    const { dropdownShown, currentValue } = this.state;
    const { className, placeholder } = this.props;

    const classes = cx('form-group toolbar-pf-find', className);

    const dropdownClasses = cx('find-pf-dropdown-container', {
      show: dropdownShown
    });

    return (
      <div className={classes}>
        <Button
          bsStyle="link"
          className="btn-find"
          onClick={this.toggleDropdownShown}
        >
          <Icon type="fa" name="search" />
        </Button>
        <div className={dropdownClasses}>
          <input
            type="text"
            className="form-control"
            id="find"
            value={currentValue}
            placeholder={placeholder}
            onKeyPress={e => this.onValueKeyPress(e)}
            onChange={this.handleValueChange}
          />
          <div className="find-pf-buttons">
            {this.renderCounts()}
            <Button
              bsStyle="link"
              className="btn-find-close"
              onClick={this.hideDropdown}
            >
              <Icon type="pf" name="close" />
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

ToolbarFind.propTypes = {
  /** Additional css classes */
  className: PropTypes.string,
  /** index of current item */
  currentIndex: PropTypes.number,
  /** total number of items */
  totalCount: PropTypes.number,
  /** Placeholder text when empty */
  placeholder: PropTypes.string,
  /** Callback function when user hits the enter key */
  onEnter: PropTypes.func,
  /** Callback function when the find value changes */
  onChange: PropTypes.func,
  /** Callback function when the find next is selected */
  onFindNext: PropTypes.func,
  /** Callback function when the find previous is selected */
  onFindPrevious: PropTypes.func
};

export default ToolbarFind;
