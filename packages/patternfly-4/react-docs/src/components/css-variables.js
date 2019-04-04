import React from 'react';
import PropTypes from 'prop-types';
import { Form, TextInput } from '@patternfly/react-core';
import { Table, TableHeader, TableBody, sortable, SortByDirection } from '@patternfly/react-table';
import * as tokensModule from '@patternfly/react-tokens';
import { StyleSheet, css } from '@patternfly/react-styles';

const propTypes = {
  variables: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)])
};

const defaultProps = {
  variables: null
};

const styles = StyleSheet.create({
  color: {
    display: 'inline-block',
    height: 18,
    width: 18,
    border: `${tokensModule.global_BorderWidth_sm.var} solid ${tokensModule.global_BorderColor_100.var}`,
    marginRight: tokensModule.global_spacer_sm.var,
    verticalAlign: 'middle'
  },
  value: {
    verticalAlign: 'middle'
  },
  tokenCell: {
    whiteSpace: 'nowrap'
  },
  search: `
    &.pf-c-form {
      margin: ${tokensModule.global_spacer_md.var} 0;
    }
    .pf-c-form__label {
      --pf-c-form__label--FontSize: ${tokensModule.global_FontSize_lg.var};
    }
  `
});
const isColorRegex = /^(#|rgb)/;

class Tokens extends React.Component {
  constructor(props) {
    super(props);
    const dataRows = [];
    Object.entries(tokensModule).map(([key, token]) => {
      if (!token.name || !token.value) {
        return null;
      }
      if (props.variables) {
        let variablesArray;
        if (typeof props.variables === 'string') {
          variablesArray = [props.variables];
        } else {
          variablesArray = props.variables;
        }
        let tokenMatch = false;
        for (let i = 0; i < variablesArray.length; i++) {
          const regex = new RegExp(`^--${variablesArray[i]}(--|__)`, 'g');
          const match = regex.test(token.name);
          if (match) {
            tokenMatch = true;
            break;
          }
        }
        if (!tokenMatch) {
          return null;
        }
      }
      dataRows.push([key, token.name, token.value]);
    }, []);
    const dataRowsSorted = dataRows.sort((a, b) => {
      if (a[0] < b[0]) {
        return -1;
      } else if (a[0] > b[0]) {
        return 1;
      }
      return 0;
    });
    const columns = [];
    this.state = {
      searchValue: '',
      columns: columns.concat([
        { title: 'Variables', transforms: [sortable] },
        { title: 'React Tokens', transforms: [sortable] },
        { title: 'Value', transforms: [sortable] }
      ]),
      dataRows: dataRowsSorted,
      rows: this.processToComponents(dataRowsSorted),
      sortBy: {
        index: 0,
        direction: 'asc' // a-z
      }
    };
    this.onSort = this.onSort.bind(this);
  }

  processToComponents = dataRows => {
    const rows = [];
    dataRows.map(dataRow => {
      const toPush = [];
      rows.push(
        toPush.concat([
          {title: <span key={dataRow[1]} className={css(styles.tokenCell)}>{dataRow[1]}</span>},
          {title: <span key={dataRow[0]} className={css(styles.tokenCell)}>{dataRow[0]}</span>},
          {title: <span key={dataRow[2]}>
            {isColorRegex.test(dataRow[2]) && (
              <span className={css(styles.color)} style={{ backgroundColor: dataRow[2] }} />
            )}
            <span className={css(styles.value)}>{dataRow[2]}</span>
          </span>}
        ])
      );
    }, []);
    return rows;
  };

  onSort(_event, index, direction) {
    const sortedRows = this.state.dataRows.sort((a, b) => (a[index] < b[index] ? -1 : a[index] > b[index] ? 1 : 0));
    this.setState({
      sortBy: {
        index,
        direction
      },
      rows:
        direction === SortByDirection.asc
          ? this.processToComponents(sortedRows)
          : this.processToComponents(sortedRows.reverse())
    });
  }

  handleSearchChange = (checked, event) => {
    const searchValue = event.target.value;
    this.setState(() => ({
      searchValue
    }));
  };

  render() {
    const { searchValue, columns, dataRows, sortBy } = this.state;
    const searchRE = new RegExp(searchValue, 'i');
    const filteredTokens = dataRows.filter(c => searchRE.test(c[0]) || searchRE.test(c[1]) || searchRE.test(c[2]));
    const filteredRows = this.processToComponents(filteredTokens);

    return (
      <>
        <Form
          className={css(styles.search)}
          onSubmit={event => {
            event.preventDefault();
            return false;
          }}
        >
          <TextInput
            type="text"
            id="primaryIconsSearch"
            name="primaryIconsSearch"
            placeholder="Search Variables"
            aria-label="Search Variables"
            value={searchValue}
            onChange={this.handleSearchChange}
          />
        </Form>
        <Table
          variant="compact"
          aria-label="CSS Variables"
          sortBy={sortBy}
          onSort={this.onSort}
          cells={columns}
          rows={filteredRows}
        >
          <TableHeader />
          <TableBody />
        </Table>
      </>
    );
  }
}

Tokens.propTypes = propTypes;
Tokens.defaultProps = defaultProps;

export default Tokens;
