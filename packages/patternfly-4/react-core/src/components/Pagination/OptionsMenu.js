import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '@patternfly/patternfly-next/components/Pagination/pagination.css';
import { css } from '@patternfly/react-styles';
import { Dropdown, DropdownItem, DropdownToggle, DropdownDirection } from '../Dropdown';
import { CaretDownIcon, CheckIcon } from '@patternfly/react-icons';

const propTypes = {
  className: PropTypes.string,
  widgetId: PropTypes.string,
  dropDirection: PropTypes.oneOf(Object.values(DropdownDirection)),
  perPageOptions: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.node,
    value: PropTypes.number
  })),
  titles: PropTypes.shape({
    items: PropTypes.string
  }),
  itemCount: PropTypes.number,
  firstIndex: PropTypes.number,
  lastIndex: PropTypes.number,
  perPage: PropTypes.number,
  onPerPageSelect: PropTypes.func
};
const defaultProps = {
  dropDirection: DropdownDirection.down,
  titles: {}
};

class OptionsMenu extends Component {
  state = {
    isOpen: false
  }

  onToggle = isOpen => {
    this.setState({
      isOpen
    });
  };

  onSelect = event => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };


  renderToggle = () => {
    const { titles, firstIndex, lastIndex, itemCount, widgetId } = this.props;
    return (
      <DropdownToggle
        onToggle={this.onToggle}
        iconComponent={null}
        aria-haspopup="listbox"
        id={`${widgetId}-toggle`}
        aria-labelledby={`${widgetId}-label ${widgetId}-toggle`}
        aria-label="Select"
      >
        <span> {/* className={css(styles.optionsMenuToggleText)} */}
          <b>{firstIndex} - {lastIndex}</b> of <b>{itemCount}</b> {titles.items}
        </span>
        <CaretDownIcon /> {/* className={css(styles.optionsMenuMenuItem)} */}
      </DropdownToggle>
    )
  }

  renderItems = () => {
    const { perPageOptions, onPerPageSelect, perPage } = this.props;
    return perPageOptions.map(({ value, title }) =>(
      <DropdownItem key={value}
        component="button"
        // className={css(styles.optionsMenuItem, perPage === value && 'pf-m-selected')}
        onClick={(event) => onPerPageSelect(event, value)}
      >
        {title}
        {
          perPage === value &&
          <CheckIcon /> /*className={css(styles.optionsMenuItemIcon)}*/
        }
      </DropdownItem>
    ))
  }

  render() {
    const {
      className,
      widgetId,
      dropDirection,
      perPageOptions,
      titles,
      itemCount,
      firstIndex,
      lastIndex,
      perPage,
      onPerPageSelect,
      ...props
    } = this.props;
    return (
      <div className={css(styles.optionsMenu, className)} {...props}>
        <span id={`${widgetId}-label`} hidden>Items per page:</span>
        <Dropdown direction={dropDirection}
          onSelect={this.onSelect}
          isOpen={this.state.isOpen}
          toggle={this.renderToggle()}
          dropdownItems={this.renderItems()}
          isPlain
        />
    </div>
    )
  }
}

OptionsMenu.propTypes = propTypes;
OptionsMenu.defaultProps = defaultProps;

export default OptionsMenu;
