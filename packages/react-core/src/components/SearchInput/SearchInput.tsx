import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/SearchInput/search-input';
import { css } from '@patternfly/react-styles';
import { Button, ButtonVariant } from '../Button';
import { Badge } from '../Badge';
import AngleDownIcon from '@patternfly/react-icons/dist/esm/icons/angle-down-icon';
import AngleUpIcon from '@patternfly/react-icons/dist/esm/icons/angle-up-icon';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';
import CaretDownIcon from '@patternfly/react-icons/dist/esm/icons/caret-down-icon';
import ArrowRightIcon from '@patternfly/react-icons/dist/esm/icons/arrow-right-icon';
import { InputGroup } from '../InputGroup';
import { AdvancedSearchMenu } from './AdvancedSearchMenu';

export interface SearchAttribute {
  /** The search attribute's value to be provided in the search input's query string.
   * It should have no spaces and be unique for every attribute */
  attr: string;
  /** The search attribute's display name. It is used to label the field in the advanced search menu */
  display: React.ReactNode;
}

export interface SearchInputProps extends Omit<React.HTMLProps<HTMLDivElement>, 'onChange' | 'results' | 'ref'> {
  /** Additional classes added to the banner */
  className?: string;
  /** Value of the search input */
  value?: string;
  /** Flag indicating if search input is disabled */
  isDisabled?: boolean;
  /** An accessible label for the search input */
  'aria-label'?: string;
  /** placeholder text of the search input */
  placeholder?: string;
  /** @hide A reference object to attach to the input box */
  innerRef?: React.RefObject<any>;
  /** A callback for when the input value changes */
  onChange?: (value: string, event: React.FormEvent<HTMLInputElement>) => void;

  /** A callback for when the search button clicked changes */
  onSearch?: (
    value: string,
    event: React.SyntheticEvent<HTMLButtonElement>,
    attrValueMap: { [key: string]: string }
  ) => void;
  /** A callback for when the user clicks the clear button */
  onClear?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
  /** Label for the buttons which reset the advanced search form and clear the search input */
  resetButtonLabel?: string;
  /** Label for the buttons which called the onSearch event handler */
  submitSearchButtonLabel?: string;
  /** A callback for when the open advanced search button is clicked */
  onToggleAdvancedSearch?: (event: React.SyntheticEvent<HTMLButtonElement>, isOpen?: boolean) => void;
  /** A flag for controlling the open state of a custom advanced search implementation */
  isAdvancedSearchOpen?: boolean;
  /** Label for the button which opens the advanced search form menu */
  openMenuButtonAriaLabel?: string;

  /** Function called when user clicks to navigate to next result */
  onNextClick?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
  /** Function called when user clicks to navigate to previous result */
  onPreviousClick?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
  /** The number of search results returned. Either a total number of results,
   * or a string representing the current result over the total number of results. i.e. "1 / 5" */
  resultsCount?: number | string;

  /** Array of attribute values used for dynamically generated advanced search */
  attributes?: string[] | SearchAttribute[];
  /* Additional elements added after the attributes in the form.
   * The new form elements can be wrapped in a FormGroup component for automatic formatting */
  formAdditionalItems?: React.ReactNode;
  /** Attribute label for strings unassociated with one of the provided listed attributes */
  hasWordsAttrLabel?: React.ReactNode;
  /** Delimiter in the query string for pairing attributes with search values.
   * Required whenever attributes are passed as props */
  advancedSearchDelimiter?: string;
}

const SearchInputBase: React.FunctionComponent<SearchInputProps> = ({
  className,
  value = '',
  attributes = [] as string[],
  formAdditionalItems,
  hasWordsAttrLabel = 'Has words',
  advancedSearchDelimiter,
  placeholder,
  onChange,
  onSearch,
  onClear,
  onToggleAdvancedSearch,
  isAdvancedSearchOpen,
  resultsCount,
  onNextClick,
  onPreviousClick,
  innerRef,
  'aria-label': ariaLabel = 'Search input',
  resetButtonLabel = 'Reset',
  openMenuButtonAriaLabel = 'Open advanced search',
  submitSearchButtonLabel = 'Search',
  isDisabled = false,
  ...props
}: SearchInputProps) => {
  const [isSearchMenuOpen, setIsSearchMenuOpen] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState(value);
  const searchInputRef = React.useRef(null);
  const searchInputInputRef = innerRef || React.useRef(null);

  React.useEffect(() => {
    setSearchValue(value);
  }, [value]);

  React.useEffect(() => {
    if (attributes.length > 0 && !advancedSearchDelimiter) {
      // eslint-disable-next-line no-console
      console.error(
        'An advancedSearchDelimiter prop is required when advanced search attributes are provided using the attributes prop'
      );
    }
  });

  React.useEffect(() => {
    setIsSearchMenuOpen(isAdvancedSearchOpen);
  }, [isAdvancedSearchOpen]);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.currentTarget.value, event);
    }
    setSearchValue(event.currentTarget.value);
  };

  const onToggle = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    const isOpen = !isSearchMenuOpen;
    setIsSearchMenuOpen(isOpen);
    if (onToggleAdvancedSearch) {
      onToggleAdvancedSearch(e, isOpen);
    }
  };

  const onSearchHandler = (event: React.SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (onSearch) {
      onSearch(value, event, getAttrValueMap());
    }
    setIsSearchMenuOpen(false);
  };

  const getAttrValueMap = () => {
    const attrValue: { [key: string]: string } = {};
    const pairs = searchValue.split(' ');
    pairs.map(pair => {
      const splitPair = pair.split(advancedSearchDelimiter);
      if (splitPair.length === 2) {
        attrValue[splitPair[0]] = splitPair[1];
      } else if (splitPair.length === 1) {
        attrValue.haswords = attrValue.hasOwnProperty('haswords')
          ? `${attrValue.haswords} ${splitPair[0]}`
          : splitPair[0];
      }
    });
    return attrValue;
  };

  const onEnter = (event: React.KeyboardEvent<any>) => {
    if (event.key === 'Enter') {
      onSearchHandler(event);
    }
  };

  return (
    <div className={css(className, styles.searchInput)} ref={searchInputRef} {...props}>
      <InputGroup>
        <div className={css(styles.searchInputBar)}>
          <span className={css(styles.searchInputText)}>
            <span className={css(styles.searchInputIcon)}>
              <SearchIcon />
            </span>
            <input
              ref={searchInputInputRef}
              className={css(styles.searchInputTextInput)}
              value={searchValue}
              placeholder={placeholder}
              aria-label={ariaLabel}
              onKeyDown={onEnter}
              onChange={onChangeHandler}
              disabled={isDisabled}
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
                  <Button
                    variant={ButtonVariant.plain}
                    aria-label="Previous"
                    isDisabled={isDisabled}
                    onClick={onPreviousClick}
                  >
                    <AngleUpIcon />
                  </Button>
                  <Button variant={ButtonVariant.plain} aria-label="Next" isDisabled={isDisabled} onClick={onNextClick}>
                    <AngleDownIcon />
                  </Button>
                </span>
              )}
              {!!onClear && (
                <span className="pf-c-search-input__clear">
                  <Button
                    variant={ButtonVariant.plain}
                    isDisabled={isDisabled}
                    aria-label={resetButtonLabel}
                    onClick={onClear}
                  >
                    <TimesIcon />
                  </Button>
                </span>
              )}
            </span>
          )}
        </div>
        {(attributes.length > 0 || onToggleAdvancedSearch) && (
          <Button
            className={isSearchMenuOpen && 'pf-m-expanded'}
            variant={ButtonVariant.control}
            aria-label={openMenuButtonAriaLabel}
            onClick={onToggle}
            isDisabled={isDisabled}
            aria-expanded={isSearchMenuOpen}
          >
            <CaretDownIcon />
          </Button>
        )}
        {!!onSearch && (
          <Button
            type="submit"
            variant={ButtonVariant.control}
            aria-label={submitSearchButtonLabel}
            onClick={onSearchHandler}
            isDisabled={isDisabled}
          >
            <ArrowRightIcon />
          </Button>
        )}
      </InputGroup>
      {attributes.length > 0 && (
        <AdvancedSearchMenu
          value={value}
          parentRef={searchInputRef}
          parentInputRef={searchInputInputRef}
          onSearch={onSearch}
          onClear={onClear}
          onChange={onChange}
          onToggleAdvancedMenu={onToggle}
          resetButtonLabel={resetButtonLabel}
          submitSearchButtonLabel={submitSearchButtonLabel}
          attributes={attributes}
          formAdditionalItems={formAdditionalItems}
          hasWordsAttrLabel={hasWordsAttrLabel}
          advancedSearchDelimiter={advancedSearchDelimiter}
          getAttrValueMap={getAttrValueMap}
          isSearchMenuOpen={isSearchMenuOpen}
        />
      )}
    </div>
  );
};
SearchInputBase.displayName = 'SearchInputBase';

export const SearchInput = React.forwardRef((props: SearchInputProps, ref: React.Ref<HTMLInputElement>) => (
  <SearchInputBase {...props} innerRef={ref as React.MutableRefObject<any>} />
));
SearchInput.displayName = 'SearchInput';
