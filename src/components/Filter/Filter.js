import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { DropdownButton } from 'react-bootstrap';
import { MenuItem } from '../MenuItem';
import { bindMethods } from '../../common/helpers';

class Filter extends React.Component {
  constructor() {
    super();
    this.state = {
      currentField: null,
      currentValue: '',
      filterCategory: null,
      filterValue: null,
    };
    bindMethods(this, [
      'selectField',
      'selectValue',
      'onValueKeyPress',
      'updateCurrentValue',
    ]);
  }

  setDefaultField(props) {
    const { currentField } = this.state;

    if (props.fields && props.fields.length && !currentField) {
      this.setState({
        currentField: props.fields[0],
      });
    }
  }

  componentWillMount() {
    this.setDefaultField(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.setDefaultField(nextProps);
  }

  selectField(field) {
    const { currentField } = this.state;

    if (field === currentField) {
      return;
    }

    var updateState = {
      currentField: field,
      currentValue: '',
    };

    if (field.filterType === 'complex-select') {
      updateState.filterCategory = field.filterCategories[0];
    }

    this.setState(updateState);
  }

  selectValue(value, valueType) {
    const { filterAddedCB } = this.props;
    const { currentField, filterCategory } = this.state;

    if (value !== undefined) {
      if (currentField.filterType === 'complex-select') {
        switch (valueType) {
          case 'filter-category':
            this.setState({ filterCategory: value, filterValue: null });
            break;
          case 'filter-value':
            this.setState({
              filterValue: value,
            });
            if (filterAddedCB) {
              let filterValue = {
                filterCategory: filterCategory,
                filterValue: value,
              };
              filterAddedCB(currentField, filterValue);
            }
            break;
        }
      } else {
        this.setState({ currentValue: value });
        filterAddedCB && filterAddedCB(currentField, value);
      }
    } else {
      switch (valueType) {
        case 'filter-category':
          this.setState({ filterCategory: '', filterValue: null });
          break;
        case 'filter-value':
          this.setState({ filterValue: '' });
          break;
      }
    }
  }

  onValueKeyPress(keyEvent) {
    const { filterAddedCB } = this.props;
    const { currentValue, currentField } = this.state;

    if (keyEvent.key === 'Enter' && currentValue && currentValue.length > 0) {
      this.setState({ currentValue: '' });
      filterAddedCB && filterAddedCB(currentField, currentValue);
      keyEvent.stopPropagation();
      keyEvent.preventDefault();
    }
  }

  updateCurrentValue(event) {
    this.setState({ currentValue: event.target.value });
  }

  renderFieldMenuItems() {
    const { fields } = this.props;
    const { currentField } = this.state;

    return fields.map((item, index) => {
      let classes = {
        selected: item === currentField,
      };
      return (
        <MenuItem
          className={classes}
          key={item.id || index}
          onSelect={() => this.selectField(item)}
        >
          {item.title}
        </MenuItem>
      );
    });
  }

  renderFieldMenu() {
    const { currentField } = this.state;
    const { id, fields } = this.props;
    if (!currentField) {
      return null;
    }

    let menuId = 'filterFieldMenu';
    menuId += id ? '_' + id : '';

    if (fields && fields.length > 1) {
      return (
        <div className="input-group-btn">
          <DropdownButton
            title={currentField.title}
            id={menuId}
            className="filter-pf-fields"
          >
            {this.renderFieldMenuItems()}
          </DropdownButton>
        </div>
      );
    } else {
      return (
        <span type="button" className="input-group-btn">
          {currentField.label}
        </span>
      );
    }
  }

  renderPlaceHolder(placeholder, selectType) {
    if (!placeholder) {
      return null;
    }

    return (
      <MenuItem
        title={placeholder}
        key="Placeholder"
        onSelect={() => this.selectValue(undefined, selectType)}
      >
        {placeholder}
      </MenuItem>
    );
  }

  renderSelectMenuItems(filterValues, currentValue, selectType) {
    if (!filterValues) {
      return null;
    }

    return filterValues.map((filterValue, index) => {
      let classes = {
        selected: filterValue === currentValue,
      };

      return (
        <MenuItem
          className={classes}
          key={filterValue.id || index}
          onSelect={() => this.selectValue(filterValue, selectType)}
        >
          {filterValue.title || filterValue}
        </MenuItem>
      );
    });
  }

  renderSelectMenu() {
    const { currentField, currentValue } = this.state;
    const { id } = this.props;

    let title;
    if (!currentValue) {
      title = currentField.placeholder;
    } else if (currentValue.title) {
      title = currentValue.title;
    } else {
      title = currentValue;
    }

    let menuId = 'filterSelectMenu';
    menuId += id ? '_' + id : '';

    return (
      <DropdownButton
        title={title}
        id={menuId}
        className="filter-pf-select-dropdown"
      >
        {this.renderPlaceHolder(currentField.placeholder)}
        {this.renderSelectMenuItems(
          currentField.filterValues,
          currentValue,
          '',
        )}
      </DropdownButton>
    );
  }

  renderCategorySelectMenu() {
    const { currentField, filterCategory } = this.state;
    const { id } = this.props;

    let title;
    if (!filterCategory) {
      title = currentField.placeholder;
    } else if (filterCategory.title) {
      title = filterCategory.title;
    } else {
      title = filterCategory;
    }

    let menuId = 'filterCategoryMenu';
    menuId += id ? '_' + id : '';

    return (
      <div className="filter-pf-select bootstrap-select btn-group form-control">
        <DropdownButton
          title={title}
          id={menuId}
          className="filter-pf-select-dropdown"
        >
          {this.renderPlaceHolder(currentField.placeholder, 'filter-category')}
          {this.renderSelectMenuItems(
            currentField.filterValues,
            filterCategory,
            'filter-category',
          )}
        </DropdownButton>
      </div>
    );
  }

  renderCategoryValueMenu() {
    const {
      id,
      currentField,
      currentValue,
      filterCategory,
      filterValue,
    } = this.state;

    let title;
    if (!filterValue) {
      title = currentField.filterCategoriesPlaceholder;
    } else if (filterValue.title) {
      title = filterValue.title;
    } else {
      title = filterValue;
    }

    let filterValues = null;
    if (filterCategory) {
      let category = null;
      if (filterCategory.id) {
        category = filterCategory.id.toLowerCase();
      } else {
        category = filterCategory.toLowerCase();
      }
      filterValues = currentField.filterCategories[category].filterValues;
    }

    let menuId = 'filterCategoryValueMenu';
    menuId += id ? '_' + id : '';

    return (
      <div className="filter-pf-select bootstrap-select btn-group form-control">
        <DropdownButton
          className="filter-pf-category-select-value filter-pf-select-dropdown"
          title={title}
          id={menuId}
        >
          {this.renderPlaceHolder(
            currentField.filterCategoriesPlaceholder,
            'filter-value',
          )}
          {this.renderSelectMenuItems(
            filterValues,
            currentValue,
            'filter-value',
          )}
        </DropdownButton>
      </div>
    );
  }

  renderInput() {
    const { currentField, currentValue } = this.state;
    if (!currentField) {
      return null;
    }

    if (currentField.filterType === 'select') {
      return (
        <div className="filter-pf-select bootstrap-select btn-group form-control">
          {this.renderSelectMenu()}
        </div>
      );
    } else if (currentField.filterType === 'complex-select') {
      return (
        <div className="filter-pf-category-select">
          {this.renderCategorySelectMenu()}
          {this.renderCategoryValueMenu()}
        </div>
      );
    } else {
      return (
        <input
          className="form-control"
          type={currentField.filterType}
          value={currentValue}
          placeholder={currentField.placeholder}
          onChange={e => this.updateCurrentValue(e)}
          onKeyPress={e => this.onValueKeyPress(e)}
        />
      );
    }
  }

  render() {
    const { children, className } = this.props;
    let classes = cx('filter-pf', className);

    return (
      <div className={classes}>
        <div className="filter-pf-fields">
          <div className="input-group form-group">
            {this.renderFieldMenu()}
            {this.renderInput()}
          </div>
          {children}
        </div>
      </div>
    );
  }
}

Filter.propTypes = {
  /** Children nodes */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string,
  /* ID for the filter component, necessary for accessibility if there are multiple filters on a page */
  id: PropTypes.string, // Necessary for accessibility if there are multiple fiters on a page
  /* Array of FilterField objects */
  fields: PropTypes.array.isRequired,
  /* function(field, value) - Callback to call when a filter is added */
  filterAddedCB: PropTypes.func,
};

export default Filter;
