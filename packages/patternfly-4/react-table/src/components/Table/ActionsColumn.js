import React from 'react';
import PropTypes from 'prop-types';
import {
  Dropdown,
  KebabToggle,
  DropdownItem,
  DropdownSeparator,
  DropdownPosition,
  DropdownDirection
} from '@patternfly/react-core';

const propTypes = {
  children: PropTypes.node,
  items: PropTypes.array,
  dropdownPosition: PropTypes.oneOf(Object.values(DropdownPosition)),
  dropdownDirection: PropTypes.oneOf(Object.values(DropdownDirection))
};
const defaultProps = {
  children: null,
  className: '',
  onSelect: null,
  dropdownPosition: DropdownPosition.right,
  dropdownDirection: DropdownDirection.down
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
    const { items, children, dropdownPosition, dropdownDirection } = this.props;
    return (
      <React.Fragment>
        <Dropdown
          onToggle={this.onToggle}
          toggle={<KebabToggle onToggle={this.onToggle} />}
          position={dropdownPosition}
          direction={dropdownDirection}
          isOpen={isOpen}
          dropdownItems={items.map(
            ({ title, itemKey, onClick, isSeparator, ...props }, key) =>
              isSeparator ? (
                <DropdownSeparator {...props} key={itemKey || key} data-key={itemKey || key} />
              ) : (
                <DropdownItem
                  onClick={event => this.onSelect(event, onClick)}
                  {...props}
                  key={itemKey || key}
                  data-key={itemKey || key}
                >
                  {title}
                </DropdownItem>
              )
          )}
          isPlain
        />
        {children}
      </React.Fragment>
    );
  }
}

ActionsColumn.propTypes = propTypes;
ActionsColumn.defaultProps = defaultProps;

export default ActionsColumn;
