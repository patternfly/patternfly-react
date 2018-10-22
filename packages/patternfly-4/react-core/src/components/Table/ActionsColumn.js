import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown, KebabToggle, DropdownItem, DropdownSeparator } from '../Dropdown';

const propTypes = {
  children: PropTypes.node,
  items: PropTypes.array
};
const defaultProps = {
  children: null,
  className: '',
  onSelect: null
};

class ActionsColumn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  onToggle = isOpen => {
    this.setState({
      isOpen
    });
  };

  onSelect = (event, onClick) => {
    const { rowId } = this.props;
    event.preventDefault();
    onClick && onClick(event, rowId);
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const { isOpen } = this.state;
    const { items, children } = this.props;
    return (
      <React.Fragment>
        <Dropdown
          onToggle={this.onToggle}
          toggle={<KebabToggle onToggle={this.onToggle} />}
          isOpen={isOpen}
        >
          {items.map(({ title, itemKey, onClick, isSeparator, ...props }, key) => (
            isSeparator ?
              <DropdownSeparator {...props} key={itemKey || key} data-key={itemKey || key} /> :
              <DropdownItem onClick={(event) => this.onSelect(event, onClick)} {...props} key={itemKey || key} data-key={itemKey || key}>{title}</DropdownItem>
          ))}
        </Dropdown>
        {children}
      </React.Fragment>
    );
  }
}

ActionsColumn.propTypes = propTypes;
ActionsColumn.defaultProps = defaultProps;

export default ActionsColumn;
