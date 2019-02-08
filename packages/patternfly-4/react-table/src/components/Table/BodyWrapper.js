import React, { Component, Children, Fragment } from 'react';
import styles from '@patternfly/patternfly/components/Table/table.css';
import { css } from '@patternfly/react-styles';
import { mapOpenedRows } from './utils/headerUtils';

const BodyWrapper = (rows, onCollapse) => {
  class TableBody extends Component {
    render() {
      if (onCollapse) {
        return (
          <Fragment>
            {mapOpenedRows(rows, Children.toArray(this.props.children)).map((oneRow, key) => (
                <tbody {...this.props} className={css(oneRow.isOpen && styles.modifiers.expanded)} key={`tbody-${key}`}>
                {oneRow.rows}
              </tbody>
            ))}
          </Fragment>
        )
      }
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
