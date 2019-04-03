import React from 'react';
import PropTypes from 'prop-types';
import styles from '@patternfly/patternfly/components/Pagination/pagination.css';
import { css } from '@patternfly/react-styles';
import { AngleLeftIcon, AngleDoubleLeftIcon, AngleRightIcon, AngleDoubleRightIcon } from '@patternfly/react-icons';
import { Button, ButtonVariant } from '../Button';

const propTypes = {
  lastPage: PropTypes.number,
  pagesTitle: PropTypes.string,
  toLastPage: PropTypes.string,
  toPreviousPage: PropTypes.string,
  toNextPage: PropTypes.string,
  toFirstPage: PropTypes.string,
  currPage: PropTypes.string,
  paginationTitle: PropTypes.string,
  page: PropTypes.number.isRequired,
  onSetPage: PropTypes.func.isRequired,
  onNextClick: PropTypes.func,
  onPreviousClick: PropTypes.func,
  onFirstClick: PropTypes.func,
  onLastClick: PropTypes.func,
  onPageInput: PropTypes.func
};
const defaultProps = {
  pagesTitle: '',
  toLastPage: 'Go to last page',
  toNextPage: 'Go to next page',
  toFirstPage: 'Go to first page',
  toPreviousPage: 'Go to previous page',
  currPage: 'Current page',
  paginationTitle: 'Pagination',
  onSetPage: () => undefined,
  onNextClick: () => undefined,
  onPreviousClick: () => undefined,
  onFirstClick: () => undefined,
  onLastClick: () => undefined,
  onPageInput: () => undefined
};

const Navigation = ({
  page,
  lastPage,
  pagesTitle,
  toLastPage,
  toNextPage,
  toFirstPage,
  toPreviousPage,
  currPage,
  paginationTitle,
  onSetPage,
  onNextClick,
  onPreviousClick,
  onFirstClick,
  onLastClick,
  onPageInput,
  className,
  ...props
}) => {
  return (
    <nav className={css(styles.paginationNav, className)} aria-label={paginationTitle} {...props}>
      <Button
        variant={ButtonVariant.plain}
        isDisabled={page === 1}
        aria-label={toFirstPage}
        data-action="first"
        onClick={(event) => {
          onFirstClick(event, 1);
          onSetPage(event, 1)
        }}
      >
        <AngleDoubleLeftIcon />
      </Button>
      <Button
        variant={ButtonVariant.plain}
        isDisabled={page === 1}
        data-action="previous"
        onClick={(event) => {
          const newPage = page - 1 >= 1 ? page - 1 : 1
          onPreviousClick(event, newPage);
          onSetPage(event, newPage);
        }}
        aria-label={toPreviousPage}
      >
        <AngleLeftIcon />
      </Button>
      <div className={css(styles.paginationNavPageSelect)}>
        <input
          className={css(styles.formControl)}
          aria-label={currPage}
          type="number"
          min="1"
          max={lastPage}
          value={page}
          onChange={(event) => {
            let inputPage = Number.parseInt(event.target.value);
            inputPage = isNaN(inputPage) ? page : inputPage;
            inputPage = inputPage > lastPage ? lastPage : inputPage;
            inputPage = inputPage < 1 ? 1 : inputPage;
            onSetPage(event, isNaN(inputPage) ? page : inputPage);
            onPageInput(event, isNaN(inputPage) ? page : inputPage);
          }}
        />
        <span aria-hidden="true">of {lastPage} {pagesTitle}</span>
      </div>
      <Button
        variant={ButtonVariant.plain}
        isDisabled={page === lastPage}
        aria-label={toNextPage}
        data-action="next"
        onClick={(event) => {
          const newPage = page + 1 <= lastPage ? page + 1 : lastPage
          onNextClick(event, newPage);
          onSetPage(event, newPage);
        }}
      >
        <AngleRightIcon />
      </Button>
      <Button
        variant={ButtonVariant.plain}
        isDisabled={page === lastPage}
        aria-label={toLastPage}
        data-action="last"
        onClick={(event) => {
          onLastClick(event, lastPage);
          onSetPage(event, lastPage);
        }}
      >
        <AngleDoubleRightIcon />
      </Button>
    </nav>
  )
};

Navigation.propTypes = propTypes;
Navigation.defaultProps = defaultProps;

export default Navigation;
