import * as React from 'react';
import { css } from '@patternfly/react-styles';
import { Button, ButtonVariant } from '../Button';
import { Badge } from '../Badge';
import AngleDownIcon from '@patternfly/react-icons/dist/esm/icons/angle-down-icon';
import AngleUpIcon from '@patternfly/react-icons/dist/esm/icons/angle-up-icon';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';
import CaretDownIcon from '@patternfly/react-icons/dist/esm/icons/caret-down-icon';
import ArrowRightIcon from '@patternfly/react-icons/dist/esm/icons/arrow-right-icon';
import { AdvancedSearchMenu } from './AdvancedSearchMenu';
import { TextInputGroup, TextInputGroupMain, TextInputGroupUtilities } from '../TextInputGroup';
import { InputGroup } from '../InputGroup';
import { Popper } from '../../helpers';

/** Properties for adding search attributes to an advanced search input. These properties must
 * be passed in as an object within an array to the search input component's attribute properrty.
 */

export interface SearchInputSearchAttribute {
  /** The search attribute's value to be provided in the search input's query string.
   * It should have no spaces and be unique for every attribute.
   */
  attr: string;
  /** The search attribute's display name. It is used to label the field in the advanced
   * search menu.
   */
  display: React.ReactNode;
}

/** Properties for creating an expandable search input. These properties should be passed into
 * the search input component's expandableInput property.
 */

export interface SearchInputExpandable {
  /** Flag to indicate if the search input is expanded. */
  isExpanded: boolean;
  /** Callback function to toggle the expandable search input. */
  onToggleExpand: (event: React.SyntheticEvent<HTMLButtonElement>, isExpanded: boolean) => void;
  /** An accessible label for the expandable search input toggle. */
  toggleAriaLabel: string;
}

/** The main search input component. */

export interface SearchInputProps extends Omit<React.HTMLProps<HTMLDivElement>, 'onChange' | 'results' | 'ref'> {
  /** Delimiter in the query string for pairing attributes with search values.
   * Required whenever attributes are passed as props.
   */
  advancedSearchDelimiter?: string;
  /** The container to append the menu to.
   * If your menu is being cut off you can append it to an element higher up the DOM tree.
   * Some examples:
   * appendTo={() => document.body}
   * appendTo={document.getElementById('target')}
   */
  appendTo?: HTMLElement | (() => HTMLElement) | 'inline';
  /** An accessible label for the search input. */
  'aria-label'?: string;
  /** Array of attribute values used for dynamically generated advanced search. */
  attributes?: string[] | SearchInputSearchAttribute[];
  /** Additional classes added to the search input. */
  className?: string;
  /** Object that makes the search input expandable/collapsible. */
  expandableInput?: SearchInputExpandable;
  /* Additional elements added after the attributes in the form.
   * The new form elements can be wrapped in a form group component for automatic formatting. */
  formAdditionalItems?: React.ReactNode;
  /** Attribute label for strings unassociated with one of the provided listed attributes. */
  hasWordsAttrLabel?: React.ReactNode;
  /** A suggestion for autocompleting. */
  hint?: string;
  /** Type of the input */
  type?:
    | 'text'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'month'
    | 'number'
    | 'password'
    | 'search'
    | 'tel'
    | 'time'
    | 'url';
  /** @hide A reference object to attach to the input box. */
  innerRef?: React.RefObject<any>;
  /** A flag for controlling the open state of a custom advanced search implementation. */
  isAdvancedSearchOpen?: boolean;
  /** Flag indicating if search input is disabled. */
  isDisabled?: boolean;
  /** Flag indicating if the next navigation button is disabled. */
  isNextNavigationButtonDisabled?: boolean;
  /** Flag indicating if the previous navigation button is disabled. */
  isPreviousNavigationButtonDisabled?: boolean;
  /** Accessible label for the button to navigate to next result. */
  nextNavigationButtonAriaLabel?: string;
  /** A callback for when the input value changes. */
  onChange?: (event: React.FormEvent<HTMLInputElement>, value: string) => void;
  /** A callback for when the user clicks the clear button. */
  onClear?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
  /** A callback for when the user clicks to navigate to next result. */
  onNextClick?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
  /** A callback for when the user clicks to navigate to previous result. */
  onPreviousClick?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
  /** A callback for when the search button is clicked. */
  onSearch?: (
    event: React.SyntheticEvent<HTMLButtonElement>,
    value: string,
    attrValueMap: { [key: string]: string }
  ) => void;
  /** A callback for when the open advanced search button is clicked. */
  onToggleAdvancedSearch?: (event: React.SyntheticEvent<HTMLButtonElement>, isOpen?: boolean) => void;
  /** Accessible label for the button which opens the advanced search form menu. */
  openMenuButtonAriaLabel?: string;
  /** Placeholder text of the search input. */
  placeholder?: string;
  /** Accessible label for the button to navigate to previous result. */
  previousNavigationButtonAriaLabel?: string;
  /** @beta Opt-in for updated popper that does not use findDOMNode. */
  removeFindDomNode?: boolean;
  /** z-index of the advanced search form when appendTo is not inline. */
  zIndex?: number;
  /** Label for the button which resets the advanced search form and clears the search input. */
  resetButtonLabel?: string;
  /** The number of search results returned. Either a total number of results,
   * or a string representing the current result over the total number of results. i.e. "1 / 5". */
  resultsCount?: number | string;
  /** Label for the button which calls the onSearch event handler. */
  submitSearchButtonLabel?: string;
  /** Value of the search input. */
  value?: string;
  /** Name attribue for the search input */
  name?: string;
}

const SearchInputBase: React.FunctionComponent<SearchInputProps> = ({
  className,
  value = '',
  attributes = [] as string[],
  formAdditionalItems,
  hasWordsAttrLabel = 'Has words',
  advancedSearchDelimiter,
  placeholder,
  hint,
  onChange,
  onSearch,
  onClear,
  onToggleAdvancedSearch,
  isAdvancedSearchOpen,
  resultsCount,
  onNextClick,
  onPreviousClick,
  innerRef,
  expandableInput,
  'aria-label': ariaLabel = 'Search input',
  resetButtonLabel = 'Reset',
  openMenuButtonAriaLabel = 'Open advanced search',
  previousNavigationButtonAriaLabel = 'Previous',
  isPreviousNavigationButtonDisabled = false,
  isNextNavigationButtonDisabled = false,
  nextNavigationButtonAriaLabel = 'Next',
  submitSearchButtonLabel = 'Search',
  isDisabled = false,
  appendTo,
  removeFindDomNode = false,
  zIndex = 9999,
  type = 'text',
  name,
  ...props
}: SearchInputProps) => {
  const [isSearchMenuOpen, setIsSearchMenuOpen] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState(value);
  const searchInputRef = React.useRef(null);
  const ref = React.useRef(null);
  const searchInputInputRef = innerRef || ref;
  const searchInputExpandableToggleRef = React.useRef(null);
  const [focusAfterExpandChange, setFocusAfterExpandChange] = React.useState(false);

  const { isExpanded, onToggleExpand, toggleAriaLabel } = expandableInput || {};

  React.useEffect(() => {
    // this effect and the focusAfterExpandChange variable are needed to focus the input/toggle as needed when the
    // expansion toggle is fired without focusing on mount
    if (!focusAfterExpandChange) {
      return;
    } else if (isExpanded) {
      searchInputInputRef?.current?.focus();
    } else {
      searchInputExpandableToggleRef?.current?.focus();
    }
    setFocusAfterExpandChange(false);
  }, [focusAfterExpandChange, isExpanded, searchInputInputRef, searchInputExpandableToggleRef]);

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

  const onChangeHandler = (event: React.FormEvent<HTMLInputElement>, value: string) => {
    if (onChange) {
      onChange(event, value);
    }
    setSearchValue(value);
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
      onSearch(event, value, getAttrValueMap());
    }
    setIsSearchMenuOpen(false);
  };

  const splitStringExceptInQuotes = (str: string) => {
    let quoteType: string;

    return str.match(/\\?.|^$/g).reduce(
      (p: any, c: string) => {
        if (c === "'" || c === '"') {
          if (!quoteType) {
            quoteType = c;
          }
          if (c === quoteType) {
            p.quote = !p.quote;
          }
        } else if (!p.quote && c === ' ') {
          p.a.push('');
        } else {
          p.a[p.a.length - 1] += c.replace(/\\(.)/, '$1');
        }
        return p;
      },
      { a: [''] }
    ).a;
  };

  const getAttrValueMap = () => {
    const attrValue: { [key: string]: string } = {};
    const pairs = splitStringExceptInQuotes(searchValue);
    pairs.map((pair: string) => {
      const splitPair = pair.split(advancedSearchDelimiter);
      if (splitPair.length === 2) {
        attrValue[splitPair[0]] = splitPair[1].replace(/(^'|'$)/g, '');
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

  const onClearInput = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    if (onClear) {
      onClear(e);
    }
    if (searchInputInputRef && searchInputInputRef.current) {
      searchInputInputRef.current.focus();
    }
  };

  const onExpandHandler = (event: React.SyntheticEvent<HTMLButtonElement>) => {
    setSearchValue('');
    onToggleExpand(event, isExpanded);
    setFocusAfterExpandChange(true);
  };

  const renderUtilities =
    value && (resultsCount || (!!onNextClick && !!onPreviousClick) || (!!onClear && !expandableInput));

  const buildTextInputGroup = ({ ...searchInputProps } = {}) => (
    <TextInputGroup isDisabled={isDisabled} {...searchInputProps}>
      <TextInputGroupMain
        hint={hint}
        icon={<SearchIcon />}
        innerRef={searchInputInputRef}
        value={searchValue}
        placeholder={placeholder}
        aria-label={ariaLabel}
        onKeyDown={onEnter}
        onChange={onChangeHandler}
        type={type}
        name={name}
      />
      {renderUtilities && (
        <TextInputGroupUtilities>
          {resultsCount && <Badge isRead>{resultsCount}</Badge>}
          {!!onNextClick && !!onPreviousClick && (
            <div className="pf-c-text-input-group__group">
              <Button
                variant={ButtonVariant.plain}
                aria-label={previousNavigationButtonAriaLabel}
                isDisabled={isDisabled || isPreviousNavigationButtonDisabled}
                onClick={onPreviousClick}
              >
                <AngleUpIcon />
              </Button>
              <Button
                variant={ButtonVariant.plain}
                aria-label={nextNavigationButtonAriaLabel}
                isDisabled={isDisabled || isNextNavigationButtonDisabled}
                onClick={onNextClick}
              >
                <AngleDownIcon />
              </Button>
            </div>
          )}
          {!!onClear && !expandableInput && (
            <Button
              variant={ButtonVariant.plain}
              isDisabled={isDisabled}
              aria-label={resetButtonLabel}
              onClick={onClearInput}
            >
              <TimesIcon />
            </Button>
          )}
        </TextInputGroupUtilities>
      )}
    </TextInputGroup>
  );

  const expandableToggle = (
    <Button
      variant={ButtonVariant.plain}
      aria-label={toggleAriaLabel}
      aria-expanded={isExpanded}
      icon={isExpanded ? <TimesIcon /> : <SearchIcon />}
      onClick={onExpandHandler}
      ref={searchInputExpandableToggleRef}
    />
  );

  const buildExpandableSearchInput = ({ ...searchInputProps } = {}) => (
    <InputGroup {...searchInputProps}>
      {buildTextInputGroup()}
      {expandableToggle}
    </InputGroup>
  );

  const buildSearchTextInputGroup = ({ ...searchInputProps } = {}) => {
    if (expandableInput) {
      return buildExpandableSearchInput({ ...searchInputProps });
    }

    return buildTextInputGroup({ ...searchInputProps });
  };

  const buildSearchTextInputGroupWithExtraButtons = ({ ...searchInputProps } = {}) => (
    <InputGroup {...searchInputProps}>
      {buildTextInputGroup()}
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
          isDisabled={isDisabled || !searchValue}
        >
          <ArrowRightIcon />
        </Button>
      )}
      {expandableInput && expandableToggle}
    </InputGroup>
  );

  const searchInputProps = {
    ...props,
    className: className && css(className),
    innerRef: searchInputRef
  };

  if (!!expandableInput && !isExpanded) {
    return <InputGroup {...searchInputProps}>{expandableToggle}</InputGroup>;
  }

  if (!!onSearch || attributes.length > 0 || !!onToggleAdvancedSearch) {
    if (attributes.length > 0) {
      const AdvancedSearch = (
        <div>
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
        </div>
      );

      const AdvancedSearchWithPopper = (
        <div className={css(className)} ref={searchInputRef} {...props}>
          <Popper
            trigger={buildSearchTextInputGroupWithExtraButtons()}
            popper={AdvancedSearch}
            isVisible={isSearchMenuOpen}
            enableFlip={true}
            appendTo={() => appendTo || searchInputRef.current}
            removeFindDomNode={removeFindDomNode}
            zIndex={zIndex}
          />
        </div>
      );

      const AdvancedSearchInline = (
        <div className={css(className)} ref={searchInputRef} {...props}>
          {buildSearchTextInputGroupWithExtraButtons()}
          {AdvancedSearch}
        </div>
      );

      return appendTo !== 'inline' ? AdvancedSearchWithPopper : AdvancedSearchInline;
    }
    return buildSearchTextInputGroupWithExtraButtons({ ...searchInputProps });
  }
  return buildSearchTextInputGroup(searchInputProps);
};
SearchInputBase.displayName = 'SearchInputBase';

export const SearchInput = React.forwardRef((props: SearchInputProps, ref: React.Ref<HTMLInputElement>) => (
  <SearchInputBase {...props} innerRef={ref as React.MutableRefObject<any>} />
));
SearchInput.displayName = 'SearchInput';
