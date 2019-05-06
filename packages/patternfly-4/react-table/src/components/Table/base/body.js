/**
 * body.js
 *
 * Forked from reactabular-table version 8.14.0
 * https://github.com/reactabular/reactabular/tree/v8.14.0/packages/reactabular-table/src
 * */
import { isEqual, isFunction } from 'lodash-es';
import React from 'react';
import { tableBodyTypes, tableBodyDefaults, tableBodyContextTypes } from './types';
import BodyRow from './body-row';
import resolveRowKey from './resolve-row-key';

class Body extends React.Component {
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    // eslint-disable-line no-unused-vars
    // Skip checking props against `onRow` since that can be bound at render().
    // That's not particularly good practice but you never know how the users
    // prefer to define the handler.

    // Check for wrapper based override.
    const { renderers } = nextContext;

    if (renderers && renderers.body && renderers.body.wrapper.shouldComponentUpdate) {
      if (isFunction(renderers.body.wrapper.shouldComponentUpdate)) {
        return renderers.body.wrapper.shouldComponentUpdate.call(this, nextProps, nextState, nextContext);
      }

      return true;
    }

    return !(isEqual(omitOnRow(this.props), omitOnRow(nextProps)) && isEqual(this.context, nextContext));
  }
  render() {
    const { onRow, rows, rowKey, ...props } = this.props;
    const { columns, renderers } = this.context;

    return React.createElement(
      renderers.body.wrapper,
      props,
      rows.map((rowData, index) => {
        const rowIndex = rowData._index || index;
        const key = resolveRowKey({ rowData, rowIndex, rowKey });

        return React.createElement(BodyRow, {
          key,
          renderers: renderers.body,
          onRow,
          rowKey: key,
          rowIndex,
          rowData,
          columns
        });
      })
    );
  }
}
Body.propTypes = tableBodyTypes;
Body.defaultProps = tableBodyDefaults;
Body.contextTypes = tableBodyContextTypes;

function omitOnRow(props) {
  const { onRow, ...ret } = props; // eslint-disable-line no-unused-vars

  return ret;
}

export default Body;
