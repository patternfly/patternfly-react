import React from 'react';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import styles from '@patternfly/patternfly/components/DataList/data-list.css';
import { Dropdown, DropdownPosition, KebabToggle } from '../Dropdown';

const propTypes = {
  /** Content rendered inside the DataList list */
  children: PropTypes.node,
  /** Additional classes added to the DataList list */
  className: PropTypes.string,
  /** DataList actions to show in the dropdown */
  actions: PropTypes.arrayOf(PropTypes.node).isRequired,
  /** Identify the DataList toggle number */
  id: PropTypes.string.isRequired,
  /** Adds accessible text to the DataList item */
  'aria-labelledby': PropTypes.string.isRequired,
  /** Adds accessible text to the DataList item */
  'aria-label': PropTypes.string.isRequired,
  /** Additional props are spread to the container <div> */
  '': PropTypes.any
};

const defaultProps = {
  children: null,
  className: ''
};

class DataListAction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  onToggle = isOpen => {
    this.setState({ isOpen });
  };

  onSelect = event => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };

  render() {
    const {
      children,
      actions,
      className,
      id,
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledBy,
      ...props
    } = this.props;

    return children ? (
      children
    ) : (
        <div className={css(styles.dataListAction, className)} {...props}>
          <Dropdown
            isPlain
            position={DropdownPosition.right}
            isOpen={this.state.isOpen}
            onSelect={this.onSelect}
            toggle={<KebabToggle onToggle={this.onToggle} />}
            dropdownItems={actions}
          />
        </div>
      );
  }
}

DataListAction.propTypes = propTypes;
DataListAction.defaultProps = defaultProps;

export default DataListAction;
