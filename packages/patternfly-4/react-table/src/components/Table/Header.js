import React from 'react';
import { Header } from './base';
import PropTypes from 'prop-types';
import { TableContext } from './Table';

const propTypes = {
  /** Additional classes for header. */
  className: PropTypes.string
};

const defaultProps = {
  className: ''
};

const ContextHeader = ({ className, headerRows, ...props }) => (
  <Header {...props} headerRows={headerRows} className={className} />
);

ContextHeader.propTypes = {
  className: PropTypes.string,
  headerRows: PropTypes.array
};

ContextHeader.defaultProps = {
  className: '',
  headerRows: undefined
};

const TableHeader = ({ ...props }) => (
  <TableContext.Consumer>
    {({ headerRows }) => <ContextHeader {...props} headerRows={headerRows} />}
  </TableContext.Consumer>
);

TableHeader.propTypes = propTypes;
TableHeader.defaultProps = defaultProps;

export default TableHeader;
