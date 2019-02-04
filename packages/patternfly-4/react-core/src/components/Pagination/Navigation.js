import React from 'react';
import PropTypes from 'prop-types';
import styles from '@patternfly/patternfly-next/components/Pagination/pagination.css';
import { css } from '@patternfly/react-styles';
import { AngleLeftIcon, AngleDoubleLeftIcon, AngleRightIcon, AngleDoubleRightIcon } from '@patternfly/react-icons';
import { Button, ButtonVariant } from '../Button';

const propTypes = {
  lastPage: PropTypes.number,
  titles: PropTypes.shape({
    pages: PropTypes.string
  }),
  page: PropTypes.number.isRequired,
  onSetPage: PropTypes.func.isRequired,
  onNextclick: PropTypes.func,
  onPreviousClick: PropTypes.func,
  onFirstClick: PropTypes.func,
  onLastClick: PropTypes.func
};
const defaultProps = {};

const Navigation = ({
  page,
  lastPage,
  titles,
  onSetPage,
  onNextClick,
  onPreviousClick,
  onFirstClick,
  onLastClick,
  className,
  ...props
}) => {
  return (
    <nav className={css(styles.paginationNav, className)} aria-label="Pagination" {...props}>
      <Button
        variant={ButtonVariant.plain}
        isDisabled={page === 1}
        aria-label="Go to first page"
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
        aria-label="Go to previous page"
      >
        <AngleLeftIcon />
      </Button>
      <div className={css(styles.paginationNavPageSelect)} aria-label="Current page 1 of 4">
        <input
          className={css(styles.formControl)}
          aria-label="Current page"
          type="number"
          min="1"
          max={lastPage}
          size="2"
          value={page}
          onChange={(event) => {
            let inputPage = Number.parseInt(event.target.value);
            inputPage = isNaN(inputPage) ? page : inputPage;
            inputPage = inputPage > lastPage ? lastPage : inputPage;
            inputPage = inputPage < 1 ? 1 : inputPage;
            onSetPage(event, isNaN(inputPage) ? page : inputPage)
          }}
        />
        <span aria-hidden="true">of {lastPage} {titles.pages}</span>
      </div>
      <Button
        variant={ButtonVariant.plain}
        isDisabled={page === lastPage}
        aria-label="Go to next page"
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
        aria-label="Go to last page"
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
