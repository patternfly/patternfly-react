import React from 'react';
import { Header } from 'reactabular-table';
import PropTypes from 'prop-types';
import { TableContext } from './Table';
import { isEqual } from 'lodash';
import { mapHeader } from './utils';

const propTypes = {
  className: PropTypes.string,
  headerRows: PropTypes.array
};

const defaultProps = {
  className: ''
};

class ContextHeader extends React.Component {
  shouldComponentUpdate(nextProps) {
    return !isEqual(nextProps.headerRows, this.props.headerRows);
  }

  calculateColumns() {
    const { headerRows } = this.props;
    return headerRows && headerRows.map(oneCol => ({
      ...mapHeader(oneCol),
      ...typeof oneCol !== 'string' && oneCol
    })
    );
  }

  componentDidUpdate() {
    this.props.updateHeaderData && this.props.updateHeaderData(this.calculateColumns());
  }

  componentDidMount() {
    this.props.updateHeaderData && this.props.updateHeaderData(this.calculateColumns());
  }

  render() {
    const { className, headerRows, updateHeaderData, ...props } = this.props;

    return (
      <Header headerRows={[this.calculateColumns()]} {...props} className={className} />
    );
  }
}

const TableHeader = ({ headerData, ...props }) => (
  <TableContext.Consumer>
    {({ updateHeaderData }) => (
      <ContextHeader {...props} updateHeaderData={updateHeaderData} />
    )}
  </TableContext.Consumer>
);

TableHeader.propTypes = propTypes;
TableHeader.defaultProps = defaultProps;

export default TableHeader;
