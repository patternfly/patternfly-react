import { useEffect, useRef, useState } from 'react';
import { Menu, MenuContent, MenuItem, MenuList, Popper, SearchInput } from '@patternfly/react-core';

import { words } from '../words';

export const SearchInputAutocomplete: React.FunctionComponent = () => {
  const [value, setValue] = useState('');
  const [hint, setHint] = useState('');
  const [autocompleteOptions, setAutocompleteOptions] = useState([]);

  const [isAutocompleteOpen, setIsAutocompleteOpen] = useState(false);

  const searchInputRef = useRef(null);
  const autocompleteRef = useRef(null);

  const onClear = () => {
    setValue('');
  };

  const onChange = (_event, newValue) => {
    if (
      newValue !== '' &&
      searchInputRef &&
      searchInputRef.current &&
      searchInputRef.current.contains(document.activeElement)
    ) {
      setIsAutocompleteOpen(true);

      // When the value of the search input changes, build a list of no more than 10 autocomplete options.
      // Options which start with the search input value are listed first, followed by options which contain
      // the search input value.
      let options = words
        .filter((option) => option.startsWith(newValue.toLowerCase()))
        .map((option) => (
          <MenuItem itemId={option} key={option}>
            {option}
          </MenuItem>
        ));
      if (options.length > 10) {
        options = options.slice(0, 10);
      } else {
        options = [
          ...options,
          ...words
            .filter((option) => !option.startsWith(newValue.toLowerCase()) && option.includes(newValue.toLowerCase()))
            .map((option) => (
              <MenuItem itemId={option} key={option}>
                {option}
              </MenuItem>
            ))
        ].slice(0, 10);
      }

      // The hint is set whenever there is only one autocomplete option left.
      setHint(options.length === 1 ? options[0].props.itemId : '');
      // The menu is hidden if there are no options
      setIsAutocompleteOpen(options.length > 0);
      setAutocompleteOptions(options);
    } else {
      setIsAutocompleteOpen(false);
    }
    setValue(newValue);
  };

  // Whenever an autocomplete option is selected, set the search input value, close the menu, and put the browser
  // focus back on the search input
  const onSelect = (e, itemId) => {
    e.stopPropagation();
    setValue(itemId);
    setIsAutocompleteOpen(false);
    searchInputRef.current.focus();
  };

  const handleMenuKeys = (event) => {
    // If there is a hint while the browser focus is on the search input, tab or right arrow will 'accept' the hint value
    // and set it as the search input value
    if (hint && (event.key === 'Tab' || event.key === 'ArrowRight') && searchInputRef.current === event.target) {
      setValue(hint);
      setHint('');
      setIsAutocompleteOpen(false);
      if (event.key === 'ArrowRight') {
        event.preventDefault();
      }
      // if the autocomplete is open and the browser focus is on the search input,
    } else if (isAutocompleteOpen && searchInputRef.current && searchInputRef.current === event.target) {
      // the escape key closes the autocomplete menu and keeps the focus on the search input.
      if (event.key === 'Escape') {
        setIsAutocompleteOpen(false);
        searchInputRef.current.focus();
        // the up and down arrow keys move browser focus into the autocomplete menu
      } else if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        const firstElement = autocompleteRef.current.querySelector('li > button:not(:disabled)');
        firstElement && firstElement.focus();
        event.preventDefault(); // by default, the up and down arrow keys scroll the window
        // the tab, enter, and space keys will close the menu, and the tab key will move browser
        // focus forward one element (by default)
      } else if (event.key === 'Tab' || event.key === 'Enter' || event.key === ' ') {
        setIsAutocompleteOpen(false);
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
        }
      }
      // If the autocomplete is open and the browser focus is in the autocomplete menu
      // hitting tab will close the autocomplete and but browser focus back on the search input.
    } else if (isAutocompleteOpen && autocompleteRef.current.contains(event.target) && event.key === 'Tab') {
      event.preventDefault();
      setIsAutocompleteOpen(false);
      searchInputRef.current.focus();
    }
  };

  // The autocomplete menu should close if the user clicks outside the menu.
  const handleClickOutside = (event) => {
    if (
      isAutocompleteOpen &&
      autocompleteRef &&
      autocompleteRef.current &&
      !autocompleteRef.current.contains(event.target)
    ) {
      setIsAutocompleteOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleMenuKeys);
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('keydown', handleMenuKeys);
      window.removeEventListener('click', handleClickOutside);
    };
  }, [isAutocompleteOpen, hint, searchInputRef.current]);

  const searchInput = (
    <SearchInput
      value={value}
      onChange={onChange}
      onClear={onClear}
      ref={searchInputRef}
      hint={hint}
      id="autocomplete-search"
      aria-label="Search with autocomplete"
    />
  );

  const autocomplete = (
    <Menu ref={autocompleteRef} onSelect={onSelect}>
      <MenuContent>
        <MenuList>{autocompleteOptions}</MenuList>
      </MenuContent>
    </Menu>
  );

  return (
    <Popper
      trigger={searchInput}
      triggerRef={searchInputRef}
      popper={autocomplete}
      popperRef={autocompleteRef}
      isVisible={isAutocompleteOpen}
      enableFlip={false}
      // append the autocomplete menu to the search input in the DOM for the sake of the keyboard navigation experience
      appendTo={() => document.querySelector('#autocomplete-search')}
    />
  );
};
