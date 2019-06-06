import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '@patternfly/react-styles/css/components/OptionsMenu/options-menu';
import paginationStyles from '@patternfly/react-styles/css/components/Pagination/pagination';
import { css } from '@patternfly/react-styles';
import { Dropdown, DropdownItem, DropdownDirection } from '../Dropdown';
import { CheckIcon } from '@patternfly/react-icons';
import OptionsToggle from './OptionsToggle';

const propTypes = {
  className: PropTypes.string,
  widgetId: PropTypes.string,
  dropDirection: PropTypes.oneOf(Object.values(DropdownDirection)),
  perPageOptions: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.node,
      value: PropTypes.number
    })
  ),
  itemsPerPageTitle: PropTypes.string,
  perPageSuffix: PropTypes.string,
  itemsTitle: PropTypes.string,
  optionsToggle: PropTypes.string,
  itemCount: PropTypes.number,
  firstIndex: PropTypes.number,
  lastIndex: PropTypes.number,
  perPage: PropTypes.number,
  toggleTemplate: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  onPerPageSelect: PropTypes.func
};

const defaultProps = {
  className: '',
  widgetId: '',
  dropDirection: DropdownDirection.down,
  perPageOptions: [],
  itemsTitle: 'items',
  itemsPerPageTitle: 'Items per page',
  perPageSuffix: 'per page',
  optionsToggle: 'Select',
  itemCount: 0,
  firstIndex: 0,
  lastIndex: 0,
  perPage: 0,
  toggleTemplate: (
    { firstIndex, lastIndex, itemCount, itemsTitle } // eslint-disable-line react/prop-types
  ) => (
    <React.Fragment>
      <strong>
        {firstIndex} - {lastIndex}
      </strong>{' '}
      of<strong>{itemCount}</strong> {itemsTitle}
    </React.Fragment>
  ),
  onPerPageSelect: Function.prototype
};

class PaginationOptionsMenu extends Component {
  state = {
    isOpen: false
  };

  onToggle = isOpen => {
    this.setState({
      isOpen
    });
  };

  onSelect = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  renderItems = () => {
    const { perPageOptions, onPerPageSelect, perPage, perPageSuffix } = this.props;
    return perPageOptions.map(({ value, title }) => (
      <DropdownItem
        key={value}
        component="button"
        data-action={`per-page-${value}`}
        className={css(styles.optionsMenuMenuItem, perPage === value && 'pf-m-selected')}
        onClick={event => onPerPageSelect(event, value)}
      >
        {title}
        <span className={css(paginationStyles.paginationMenuText)}>{` ${perPageSuffix}`}</span>
        {perPage === value && (
          <i className={css(styles.optionsMenuMenuItemIcon)}>
            <CheckIcon />
          </i>
        )}
      </DropdownItem>
    ));
  };

  render() {
    const {
      className,
      widgetId,
      dropDirection,
      perPageOptions,
      itemsPerPageTitle,
      itemsTitle,
      optionsToggle,
      itemCount,
      firstIndex,
      lastIndex,
      perPage,
      perPageSuffix,
      onPerPageSelect,
      toggleTemplate,
      ...props
    } = this.props;
    return (
      <div className={css(styles.optionsMenu, className)} {...props}>
        <span id={`${widgetId}-label`} hidden>
          {itemsPerPageTitle}:
        </span>
        <Dropdown
          direction={dropDirection}
          onSelect={this.onSelect}
          isOpen={this.state.isOpen}
          toggle={
            <OptionsToggle
              optionsToggle={optionsToggle}
              itemsTitle={itemsTitle}
              onToggle={this.onToggle}
              isOpen={this.state.isOpen}
              firstIndex={firstIndex}
              lastIndex={lastIndex}
              itemCount={itemCount}
              widgetId={widgetId}
              toggleTemplate={toggleTemplate}
            />
          }
          dropdownItems={this.renderItems()}
          isPlain
        />
      </div>
    );
  }
}

PaginationOptionsMenu.propTypes = propTypes;
PaginationOptionsMenu.defaultProps = defaultProps;

export default PaginationOptionsMenu;
