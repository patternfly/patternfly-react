import React from 'react';
import PropTypes from 'prop-types';
import { debounce } from '@patternfly/react-core';
import styles from '@patternfly/patternfly/components/Table/table.css';
import { css } from '@patternfly/react-styles';

class RowWrapper extends React.Component {
  constructor(props) {
    super(props);

    if (props.onScroll) {
      this.handleScroll = debounce(this.handleScroll, 100);
    }
    if (props.onResize) {
      this.handleResize = debounce(this.handleResize, 100);
    }
  }

  componentDidMount() {
    this._unmounted = false;

    if (this.props.onScroll) {
      window.addEventListener('scroll', this.handleScroll);
    }
    if (this.props.onResize) {
      window.addEventListener('resize', this.handleResize);
    }
  }

  componentWillUnmount() {
    this._unmounted = true;

    if (this.props.onScroll) {
      window.removeEventListener('scroll', this.handleScroll);
    }
    if (this.props.onResize) {
      window.removeEventListener('resize', this.handleResize);
    }
  }

  handleScroll = event => {
    if (!this._unmounted) {
      this.props.onScroll(event);
    }
  };

  handleResize = event => {
    if (!this._unmounted) {
      this.props.onResize(event);
    }
  };

  render() {
    const {
      trRef,
      className,
      onScroll,
      onResize,
      row: { isExpanded },
      rowProps,
      ...props
    } = this.props;

    return (
      <tr
        {...props}
        ref={trRef}
        className={css(
          className,
          isExpanded !== undefined && styles.tableExpandableRow,
          isExpanded && styles.modifiers.expanded
        )}
        hidden={isExpanded !== undefined && !isExpanded}
      />
    );
  }
}

RowWrapper.propTypes = {
  trRef: PropTypes.func,
  className: PropTypes.string,
  onScroll: PropTypes.func,
  onResize: PropTypes.func,
  row: PropTypes.shape({
    isOpen: PropTypes.bool,
    isExpanded: PropTypes.bool
  }),
  rowProps: PropTypes.object
};

RowWrapper.defaultProps = {
  trRef: undefined,
  className: '',
  onScroll: undefined,
  onResize: undefined,
  row: {
    isOpen: undefined,
    isExpanded: undefined
  },
  rowProps: null
};

export default RowWrapper;
