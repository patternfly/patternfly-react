import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Pagination/pagination';
import { css } from '@patternfly/react-styles';
import { AngleLeftIcon, AngleDoubleLeftIcon, AngleRightIcon, AngleDoubleRightIcon } from '@patternfly/react-icons';
import { Button, ButtonVariant } from '../Button';
import { pluralize } from '../../helpers';
import { KEY_CODES } from '../../helpers/constants';

export interface NavigationProps extends React.HTMLProps<HTMLElement> {
  /** Additional classes for the container */
  className?: string;
  /** The number of the last page */
  lastPage?: number;
  /** The number of first page where pagination starts */
  firstPage?: number;
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
  page: React.ReactText;
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

export interface NavigationState {
  userInputPage?: React.ReactText;
}

export class Navigation extends React.Component<NavigationProps, NavigationState> {
  constructor(props: NavigationProps) {
    super(props);
    this.state = { userInputPage: this.props.page };
  }

  static defaultProps = {
    className: '',
    lastPage: 0,
    firstPage: 0,
    pagesTitle: '',
    toLastPage: 'Go to last page',
    toNextPage: 'Go to next page',
    toFirstPage: 'Go to first page',
    toPreviousPage: 'Go to previous page',
    currPage: 'Current page',
    paginationTitle: 'Pagination',
    onNextClick: () => undefined as any,
    onPreviousClick: () => undefined as any,
    onFirstClick: () => undefined as any,
    onLastClick: () => undefined as any,
    onPageInput: () => undefined as any,
  };

  private static parseInteger(input: React.ReactText, lastPage: number): number {
    let inputPage = Number.parseInt(input as string, 10);
    if (!Number.isNaN(inputPage)) {
      inputPage = inputPage > lastPage ? lastPage : inputPage;
      inputPage = inputPage < 1 ? 1 : inputPage;
    }
    return inputPage;
  }

  private onChange(event: React.ChangeEvent<HTMLInputElement>, lastPage: number): void {
    const inputPage = Navigation.parseInteger(event.target.value, lastPage);
    this.setState({ userInputPage: Number.isNaN(inputPage as number) ? event.target.value : inputPage });
  }

  private onKeyDown(event: React.KeyboardEvent<HTMLInputElement>, page: number | string, lastPage: number, onPageInput: (event: React.SyntheticEvent<HTMLButtonElement>, page: number) => void, onSetPage: (event: React.SyntheticEvent<HTMLButtonElement>, page: number) => void): void {
    if (event.keyCode === KEY_CODES.ENTER) {
      const inputPage = Navigation.parseInteger(this.state.userInputPage, lastPage) as number;
      onPageInput(event, Number.isNaN(inputPage) ? page as number : inputPage);
      onSetPage(event, Number.isNaN(inputPage) ? page as number : inputPage);
    }
  }

  render () {
    const {
      page,
      lastPage,
      firstPage,
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
    } = this.props;
    const { userInputPage } = this.state;
    return (
      <nav className={css(styles.paginationNav, className)} aria-label={paginationTitle} {...props}>
        <Button
          variant={ButtonVariant.plain}
          isDisabled={page === firstPage}
          aria-label={toFirstPage}
          data-action="first"
          onClick={event => {
            onFirstClick(event, 1);
            onSetPage(event, 1);
            this.setState({ userInputPage: 1 });
          }}
        >
          <AngleDoubleLeftIcon />
        </Button>
        <Button
          variant={ButtonVariant.plain}
          isDisabled={page === firstPage}
          data-action="previous"
          onClick={event => {
            const newPage = page as number - 1 >= 1 ? page as number - 1 : 1;
            onPreviousClick(event, newPage);
            onSetPage(event, newPage);
            this.setState({ userInputPage: newPage });
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
            disabled={page === firstPage && page === lastPage}
            min={lastPage <= 0 && firstPage <=0 ? 0 : 1}
            max={lastPage}
            value={userInputPage}
            onKeyDown={event => this.onKeyDown(event, page, lastPage, onPageInput, onSetPage)}
            onChange={event => this.onChange(event, lastPage)}
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
            const newPage = page as number + 1 <= lastPage ? page as number + 1 : lastPage;
            onNextClick(event, newPage);
            onSetPage(event, newPage);
            this.setState({ userInputPage: newPage });
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
            this.setState({ userInputPage: lastPage });
          }}
        >
          <AngleDoubleRightIcon />
        </Button>
      </nav>
    );
  }
}
