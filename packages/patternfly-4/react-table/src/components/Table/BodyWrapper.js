import React, { Component } from 'react';
import styles from '@patternfly/patternfly-next/components/Table/table-grid.css';
import { css } from '@patternfly/react-styles';

const BodyWrapper = (rows) => {
  class TableBody extends Component {
    render() {
      return (
        <tbody {...this.props} className={css(
          rows.some(row => row.isOpen && !row.hasOwnProperty('parent')) && styles.modifiers.expanded
        )} />
      )
    }
  };

  return TableBody;
}

export default BodyWrapper;
