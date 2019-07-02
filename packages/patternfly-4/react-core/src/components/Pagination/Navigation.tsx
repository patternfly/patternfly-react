import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Pagination/pagination';
import { css } from '@patternfly/react-styles';
import { AngleLeftIcon, AngleDoubleLeftIcon, AngleRightIcon, AngleDoubleRightIcon } from '@patternfly/react-icons';
import { Button, ButtonVariant } from '../Button';
import { pluralize } from '../../helpers';

export interface NavigationProps extends React.HTMLProps<HTMLElement> {
  /** Additional classes for the container */
  className?: string;
  /** The number of the last page */
  lastPage?: number;
  /** The title of a page displayed beside the page number */
  pagesTitle?: string;
  /** Accessible label for the button which moves to the last page */
  toLastPage?: string;
  /** Accessible label for the button which moves to the previous page */
  toPreviousPage?: string;
  /** Accessible label for the button which moves to the next page */
  toNextPage?: string;
  /** Accessible label for the button which moves to the first page */
  toFirstPage?: string;
  /** Accessible label for the input displaying the current page */
  currPage?: string;
  /** Accessible label for the pagination component */
  paginationTitle?: string;
  /** The number of the current page */
  page: number;
  /** Function called when user sets page */
  onSetPage: (event: React.SyntheticEvent<HTMLButtonElement>, page: number) => void;
  /** Function called when user clicks to navigate to next page */
  onNextClick?: (event: React.SyntheticEvent<HTMLButtonElement>, page: number) => void;
  /** Function called when user clicks to navigate to previous page */
  onPreviousClick?: (event: React.SyntheticEvent<HTMLButtonElement>, page: number) => void;
  /** Function called when user clicks to navigate to first page */
  onFirstClick?: (event: React.SyntheticEvent<HTMLButtonElement>, page: number) => void;
  /** Function called when user clicks to navigate to last page */
  onLastClick?: (event: React.SyntheticEvent<HTMLButtonElement>, page: number) => void;
  /** Function called when user inputs page number */
  onPageInput?: (event: React.SyntheticEvent<HTMLButtonElement>, page: number) => void;
}

export const Navigation: React.FunctionComponent<NavigationProps> = ({
  page,
  onSetPage,
  className = '',
  lastPage = 0,
  pagesTitle = '',
  toLastPage = 'Go to last page',
  toNextPage = 'Go to next page',
  toFirstPage = 'Go to first page',
  toPreviousPage = 'Go to previous page',
  currPage = 'Current page',
  paginationTitle = 'Pagination',
  onNextClick = () => undefined,
  onPreviousClick = () => undefined,
  onFirstClick = () => undefined,
  onLastClick = () => undefined,
  onPageInput = () => undefined,
  ...props
}: NavigationProps) => (
  <nav className={css(styles.paginationNav, className)} aria-label={paginationTitle} {...props}>
    <Button
      variant={ButtonVariant.plain}
      isDisabled={page === 1}
      aria-label={toFirstPage}
      data-action="first"
      onClick={event => {
        onFirstClick(event, 1);
        onSetPage(event, 1);
      }}
    >
      <AngleDoubleLeftIcon />
    </Button>
    <Button
      variant={ButtonVariant.plain}
      isDisabled={page === 1}
      data-action="previous"
      onClick={event => {
        const newPage = page - 1 >= 1 ? page - 1 : 1;
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
        onChange={event => {
          let inputPage = Number.parseInt(event.target.value, 10);
          inputPage = Number.isNaN(inputPage) ? page : inputPage;
          inputPage = inputPage > lastPage ? lastPage : inputPage;
          inputPage = inputPage < 1 ? 1 : inputPage;
          onSetPage(event, Number.isNaN(inputPage) ? page : inputPage);
          onPageInput(event, Number.isNaN(inputPage) ? page : inputPage);
        }}
      />
      <span aria-hidden="true">
        of {pluralize(lastPage, pagesTitle)}
      </span>
    </div>
    <Button
      variant={ButtonVariant.plain}
      isDisabled={page === lastPage}
      aria-label={toNextPage}
      data-action="next"
      onClick={event => {
        const newPage = page + 1 <= lastPage ? page + 1 : lastPage;
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
      onClick={event => {
        onLastClick(event, lastPage);
        onSetPage(event, lastPage);
      }}
    >
      <AngleDoubleRightIcon />
    </Button>
  </nav>
);

