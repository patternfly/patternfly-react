import React from 'react';
import { Header } from 'reactabular-table';
import PropTypes from 'prop-types';
import { TableContext } from './Table';

const propTypes = {
  /** Additional classes for header. */
  className: PropTypes.string
};

const defaultProps = {
  className: ''
};

class ContextHeader extends React.Component {
  render() {
    const {
      className,
      headerRows,
      ...props
    } = this.props;
    return (
      <Header {...props} headerRows={headerRows} className={className} />
    );
  }
}

const TableHeader = ({ ...props }) => {
  return (
    <TableContext.Consumer>
      {({ headerRows }) => (
        <ContextHeader
          {...props}
          headerRows={headerRows}
        />
      )}
    </TableContext.Consumer>
  )
};

TableHeader.propTypes = propTypes;
TableHeader.defaultProps = defaultProps;

export default TableHeader;
