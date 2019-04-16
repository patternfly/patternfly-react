import React from 'react';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import styles from '@patternfly/patternfly/components/DataList/data-list.css';

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
      className,
      id,
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledBy,
      ...props
    } = this.props;

    return (
      <div className={css(styles.dataListItemAction, className)}>
        <div className={css(styles.dataListAction, className)} {...props}>
          {children}
        </div>
      </div>
    );
  }
}

DataListAction.propTypes = {
  /** Content rendered as DataList Action  (e.g <Button> or <Dropdown>) */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  /** Additional classes added to the DataList Action */
  className: PropTypes.string,
  /** Identify the DataList toggle number */
  id: PropTypes.string.isRequired,
  /** Adds accessible text to the DataList Action */
  'aria-labelledby': PropTypes.string.isRequired,
  /** Adds accessible text to the DataList Action */
  'aria-label': PropTypes.string.isRequired,
  /** Additional props are spread to the container <div> */
  '': PropTypes.any
};

DataListAction.defaultProps = {
  className: ''
};

export default DataListAction;
