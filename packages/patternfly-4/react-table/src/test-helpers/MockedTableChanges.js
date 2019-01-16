import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TableContext } from '../components/Table/Table';
import { TableHeader } from '../components/Table';

export const withContext = ({ context = {}, contextType = {} }) => WrappedComponent => {
  class WithContext extends Component {
    getChildContext() {
      return context;
    }

    render() {
      return (<WrappedComponent>{this.props.children}</WrappedComponent>);
    }
  }
  WithContext.WrappedComponent = WrappedComponent;
  WithContext.childContextTypes = contextType;

  return WithContext;
};

export const TableProvider = withContext({
  context: {
    columns: [],
    renderers: {
      header: {
        wrapper: 'thead',
        row: 'tr',
        cell: 'th'
      }
    }
  },
  contextType: { columns: PropTypes.any, renderers: PropTypes.any },
})('table');

export default ({ updateFunc, columns }) => (
  <TableContext.Provider value={{ updateHeaderData: updateFunc }} >
    <TableProvider>
      <TableHeader headerRows={columns} />
    </TableProvider>
  </ TableContext.Provider >
);
