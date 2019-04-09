import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '@patternfly/patternfly/components/OptionsMenu/options-menu.css';
import paginationStyles from '@patternfly/patternfly/components/Pagination/pagination.css';
import { css } from '@patternfly/react-styles';
import { Dropdown, DropdownItem, DropdownDirection } from '../Dropdown';
import { CheckIcon } from '@patternfly/react-icons';
import OptionsToggle from './OptionsToggle';


const propTypes = {
  className: PropTypes.string,
  widgetId: PropTypes.string,
  dropDirection: PropTypes.oneOf(Object.values(DropdownDirection)),
  perPageOptions: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.node,
    value: PropTypes.number
  })),
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
  dropDirection: DropdownDirection.down,
  itemsTitle: 'items',
  itemsPerPageTitle: 'Items per page',
  perPageSuffix: 'per page',
  optionsToggle: 'Select',
  toggleTemplate: ({ firstIndex, lastIndex, itemCount, itemsTitle }) => (
    <React.Fragment>
      <strong>{firstIndex} - {lastIndex}</strong> of<strong>{itemCount}</strong> {itemsTitle}
    </React.Fragment>
  )
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

  onSelect = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  renderItems = () => {
    const { perPageOptions, onPerPageSelect, perPage, perPageSuffix } = this.props;
    return perPageOptions.map(({ value, title }) => (
      <DropdownItem key={value}
        component="button"
        data-action={`per-page-${value}`}
        className={css(styles.optionsMenuMenuItem, perPage === value && 'pf-m-selected')}
        onClick={(event) => onPerPageSelect(event, value)}
      >
        {title}
        <span className={css(paginationStyles.paginationMenuText)}>{` ${perPageSuffix}`}</span>
        {
          perPage === value &&
          <i className={css(styles.optionsMenuMenuItemIcon)} ><CheckIcon /></i>
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
      itemsPerPageTitle,
      itemsTitle,
      optionsToggle,
      itemCount,
      firstIndex,
      lastIndex,
      perPage,
      onPerPageSelect,
      toggleTemplate,
      perPageSuffix,
      ...props
    } = this.props;
    return (
      <div className={css(styles.optionsMenu, className)} {...props}>
        <span id={`${widgetId}-label`} hidden>{itemsPerPageTitle}:</span>
        <Dropdown direction={dropDirection}
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
    )
  }
}

OptionsMenu.propTypes = propTypes;
OptionsMenu.defaultProps = defaultProps;

export default OptionsMenu;
