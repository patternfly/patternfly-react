import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

import { MenuItem, DropdownButton, Icon } from '../../index';

const ArrowIcon = props => {
  const name = `angle-${props.name}`;
  return <Icon type="fa" name={name} className="i" />;
};

ArrowIcon.propTypes = {
  name: PropTypes.oneOf(['left', 'double-left', 'right', 'double-right'])
};

class PaginationRow extends React.Component {
  constructor(props) {
    super(props);

    this.initPagination(props);
    this.state = {
      pageChangeValue: Number(props.currentPage)
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.currentPage !== nextProps.currentPage) {
      this.setState({ pageChangeValue: Number(nextProps.currentPage) });
    }

    this.initPagination(nextProps);
  }

  initPagination(props) {
    this.perPage = Number(props.perPage);
    this.totalCount = Number(props.totalCount);
    this.currentPage = Number(props.currentPage);
  }

  msg(key) {
    return this.props.messages[key] || PaginationRow.defaultMessages[key];
  }

  totalPages() {
    return Math.ceil(this.props.totalCount / this.perPage);
  }

  setPageRelative(diff) {
    this.setPage(Number(this.props.currentPage) + diff);
  }

  setPage(page) {
    if (page !== '') {
      this.props.onPageSet(Number(page));
    } else {
      console.error("Page can't be blank");
    }
  }

  handlePageChange(e) {
    this.setState({ pageChangeValue: e.target.value });
  }

  handleFormSubmit(e) {
    this.setPage(this.state.pageChangeValue);
    e.preventDefault();
  }

  renderPerPageDropdown() {
    const { perPageOptions, onPerPageSet } = this.props;

    return (
      <DropdownButton
        dropup
        bsStyle="default"
        title={this.perPage}
        id="per-page"
      >
        {perPageOptions.map(opt => {
          return (
            <MenuItem
              active={opt === this.perPage}
              onSelect={() => onPerPageSet(opt)}
              key={opt}
            >
              {opt}
            </MenuItem>
          );
        })}
      </DropdownButton>
    );
  }

  render() {
    const perPageDropdown = this.renderPerPageDropdown();

    const displayedRangeStart = (this.currentPage - 1) * this.perPage + 1;
    const displayedRangeEnd = Math.min(
      displayedRangeStart + this.perPage - 1,
      this.totalCount
    );
    const displayedRange = `${displayedRangeStart}-${displayedRangeEnd}`;

    const backButtonsClass = this.currentPage === 1 ? 'disabled' : '';
    const nextButtonsClass =
      this.currentPage * this.perPage >= this.totalCount ? 'disabled' : '';

    const totalPages = this.totalPages();

    const classes = ClassNames(this.props.className, 'clearfix');

    return (
      <div>
        <form className={classes} onSubmit={e => this.handleFormSubmit(e)}>
          <div className="form-group">
            <div>{perPageDropdown}</div>
            &nbsp;
            <span>{this.msg('perPage')}</span>
          </div>
          <div className="form-group">
            <span>
              <span className="pagination-pf-items-current">
                {displayedRange}
              </span>
              &nbsp;{this.msg('of')}&nbsp;
              <span className="pagination-pf-items-total">
                {this.totalCount}
              </span>
            </span>

            <ul className="pagination pagination-pf-back">
              <li className={backButtonsClass}>
                <a
                  title={this.msg('firstPage')}
                  onClick={() => this.setPage(1)}
                >
                  <ArrowIcon name="double-left" />
                </a>
              </li>
              <li className={backButtonsClass}>
                <a
                  title={this.msg('previousPage')}
                  onClick={() => this.setPageRelative(-1)}
                >
                  <ArrowIcon name="left" />
                </a>
              </li>
            </ul>

            <label className="sr-only">Current Page</label>
            <input
              className="pagination-pf-page"
              value={this.state.pageChangeValue}
              onChange={e => this.handlePageChange(e)}
              type="text"
            />
            <span>
              {this.msg('of')}&nbsp;
              <span className="pagination-pf-pages">{totalPages}</span>
            </span>

            <ul className="pagination pagination-pf-forward">
              <li className={nextButtonsClass}>
                <a
                  title={this.msg('nextPage')}
                  onClick={() => this.setPageRelative(1)}
                >
                  <ArrowIcon name="right" />
                </a>
              </li>
              <li className={nextButtonsClass}>
                <a
                  title={this.msg('lastPage')}
                  onClick={() => this.setPage(totalPages)}
                >
                  <ArrowIcon name="double-right" />
                </a>
              </li>
            </ul>
          </div>
        </form>
      </div>
    );
  }
}

PaginationRow.propTypes = {
  /** Options for the per page dropdown */
  perPageOptions: PropTypes.array,
  /** Current per page setting */
  perPage: PropTypes.number.isRequired, // eslint-disable-line react/no-unused-prop-types
  /** Total number of items to paginate */
  totalCount: PropTypes.number.isRequired,
  /** Index of page that is currently shown, starting from 1 */
  currentPage: PropTypes.number.isRequired,
  /** A callback triggered when the per page dropdown value is selected */
  onPerPageSet: PropTypes.func,
  /** A callback triggered when a page is switched */
  onPageSet: PropTypes.func,
  /** Strings in the component, see PaginationRow.defaultMessages for details */
  messages: PropTypes.object,
  /** Class name for the form element */
  className: PropTypes.string
};

PaginationRow.defaultProps = {
  perPageOptions: [],
  onPageSet: p => {},
  onPerPageSet: pp => {},
  messages: {},
  className: 'content-view-pf-pagination'
};

PaginationRow.defaultMessages = {
  firstPage: 'First Page',
  previousPage: 'Previous Page',
  nextPage: 'Next Page',
  lastPage: 'Last Page',
  perPage: 'per page',
  of: 'of'
};

export default PaginationRow;
