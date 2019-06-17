/**
 * header.js
 *
 * Forked from reactabular-table version 8.14.0
 * https://github.com/reactabular/reactabular/tree/v8.14.0/packages/reactabular-table/src
 * */
import React from 'react';
import { tableHeaderTypes, tableHeaderContextTypes } from './types';
import HeaderRow from './header-row';

// eslint-disable-next-line react/prefer-stateless-function
class Header extends React.Component {
  render() {
    const { children, headerRows, onRow, ...props } = this.props;
    const { renderers, columns } = this.context;

    // If headerRows aren't passed, default to bodyColumns as header rows
    return React.createElement(
      renderers.header.wrapper,
      props,
      [
        (headerRows || [columns]).map((rowData, rowIndex) =>
          React.createElement(HeaderRow, {
            key: `${rowIndex}-header-row`,
            renderers: renderers.header,
            onRow,
            rowData,
            rowIndex
          })
        )
      ].concat(children)
    );
  }
}
Header.propTypes = tableHeaderTypes;
Header.contextTypes = tableHeaderContextTypes;

export default Header;
