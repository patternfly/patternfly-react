import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Button, Icon, FormControl } from '../../index';
import { bindMethods } from '../../common/helpers';

class ToolbarFind extends React.Component {
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

  onValueKeyPress(keyEvent) {
    const { onEnter } = this.props;
    const { currentValue } = this.state;

    if (keyEvent.key === 'Enter' && onEnter) {
      onEnter(currentValue);
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

  handleValueChange(event) {
    const { onChange } = this.props;

    this.setState({ currentValue: event.target.value });

    if (onChange) {
      onChange(event.target.value);
    }
  }

  hideDropdown() {
    this.setState({ dropdownShown: false });
  }

  toggleDropdownShown() {
    this.setState(prevState => ({ dropdownShown: !prevState.dropdownShown }));
  }

  renderCounts() {
    const { currentValue } = this.state;
    const { currentIndex, totalCount } = this.props;

    if (currentValue && currentValue !== '') {
      return [
        <span className="find-pf-nums" key="findCountText">
          {currentIndex || 0} of {totalCount}
        </span>,
        <Button
          bsStyle="link"
          key="findPrevious"
          onClick={this.handleFindPrevious}
        >
          <Icon type="fa" name="angle-up" />
        </Button>,
        <Button bsStyle="link" key="findNext" onClick={this.handleFindNext}>
          <Icon type="fa" name="angle-down" />
        </Button>
      ];
    }
    return null;
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
          <FormControl
            type="text"
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
