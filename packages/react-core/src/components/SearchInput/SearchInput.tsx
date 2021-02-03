import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/SearchInput/search-input';
import { css } from '@patternfly/react-styles';
import { Button, ButtonVariant } from '../Button';
import { Badge } from '../Badge';
import AngleDownIcon from '@patternfly/react-icons/dist/js/icons/angle-down-icon';
import AngleUpIcon from '@patternfly/react-icons/dist/js/icons/angle-up-icon';
import TimesIcon from '@patternfly/react-icons/dist/js/icons/times-icon';
import SearchIcon from '@patternfly/react-icons/dist/js/icons/search-icon';

export interface SearchInputProps extends Omit<React.HTMLProps<HTMLDivElement>, 'onChange' | 'results' | 'ref'> {
  /** Additional classes added to the banner */
  className?: string;
  /** Value of the search input */
  value?: string;
  /** The number of search results returned. Either a total number of results,
   * or a string representing the current result over the total number of results. i.e. "1 / 5" */
  resultsCount?: number | string;
  /** An accessible label for the search input */
  'aria-label'?: string;
  /** placeholder text of the search input */
  placeholder?: string;
  /** A callback for when the input value changes. */
  onChange?: (value: string, event: React.FormEvent<HTMLInputElement>) => void;
  /** A callback for when the user clicks the clear button */
  onClear?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
  /** Function called when user clicks to navigate to next result */
  onNextClick?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
  /** Function called when user clicks to navigate to previous result */
  onPreviousClick?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
  /** A reference object to attach to the input box. */
  innerRef?: React.RefObject<any>;
}

export const SearchInputBase: React.FunctionComponent<SearchInputProps> = ({
  className,
  value = '',
  placeholder,
  onChange,
  onClear,
  resultsCount,
  onNextClick,
  onPreviousClick,
  innerRef,
  'aria-label': ariaLabel = 'Search input',
  ...props
}: SearchInputProps) => {
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.currentTarget.value, event);
    }
  };

  return (
    <div className={css(className, styles.searchInput)} {...props}>
      <span className={css(styles.searchInputText)}>
        <span className={css(styles.searchInputIcon)}>
          <SearchIcon />
        </span>
        <input
          ref={innerRef}
          className={css(styles.searchInputTextInput)}
          value={value}
          placeholder={placeholder}
          aria-label={ariaLabel}
          onChange={onChangeHandler}
        />
      </span>
      {value && (
        <span className={css(styles.searchInputUtilities)}>
          {resultsCount && (
            <span className={css(styles.searchInputCount)}>
              <Badge isRead>{resultsCount}</Badge>
            </span>
          )}
          {!!onNextClick && !!onPreviousClick && (
            <span className={css(styles.searchInputNav)}>
              <Button variant={ButtonVariant.plain} aria-label="Previous" onClick={onPreviousClick}>
                <AngleUpIcon />
              </Button>
              <Button variant={ButtonVariant.plain} aria-label="Next" onClick={onNextClick}>
                <AngleDownIcon />
              </Button>
            </span>
          )}
          {!!onClear && (
            <span className="pf-c-search-input__clear">
              <Button variant={ButtonVariant.plain} aria-label="Clear" onClick={onClear}>
                <TimesIcon />
              </Button>
            </span>
          )}
        </span>
      )}
    </div>
  );
};
SearchInputBase.displayName = 'SearchInputBase';

export const SearchInput = React.forwardRef((props: SearchInputProps, ref: React.Ref<HTMLInputElement>) => (
  <SearchInputBase {...props} innerRef={ref as React.MutableRefObject<any>} />
));
SearchInput.displayName = 'SearchInput';
