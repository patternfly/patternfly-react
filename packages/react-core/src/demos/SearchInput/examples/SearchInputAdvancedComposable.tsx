import { useEffect, useRef, useState } from 'react';
import {
  ActionGroup,
  Button,
  DatePicker,
  Form,
  FormGroup,
  Grid,
  GridItem,
  isValidDate,
  Menu,
  MenuContent,
  MenuItem,
  MenuList,
  MenuToggle,
  Panel,
  PanelMain,
  PanelMainBody,
  Popper,
  SearchInput,
  TextInput,
  yyyyMMddFormat
} from '@patternfly/react-core';

export const SearchInputAdvancedComposable: React.FunctionComponent = () => {
  const [value, setValue] = useState('');
  const [hasWords, setHasWords] = useState('');
  const [dateWithin, setDateWithin] = useState('1 day');
  const [date, setDate] = useState();

  const [isAdvancedSearchOpen, setIsAdvancedSearchOpen] = useState(false);
  const [isDateWithinOpen, setIsDateWithinOpen] = useState(false);

  const isInitialMount = useRef(true);
  const firstAttrRef = useRef(null);
  const searchInputRef = useRef(null);
  const advancedSearchPaneRef = useRef(null);
  const dateWithinToggleRef = useRef(undefined);
  const dateWithinMenuRef = useRef(undefined);

  const onClear = () => {
    setValue('');
    setHasWords('');
    setDateWithin('');
    setDate('');
  };

  const onChange = (_event, value) => {
    if (value.length <= hasWords.length + 1) {
      setValue(value);
      setHasWords(value);
    } else {
      setValue(hasWords);
    }
  };

  // After initial page load, whenever the advanced search menu is opened, the browser focus should be placed on the
  // first advanced search form input. Whenever the advanced search menu is closed, the browser focus should
  // be returned to the search input.
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      if (isAdvancedSearchOpen && firstAttrRef && firstAttrRef.current) {
        firstAttrRef.current.focus();
      } else if (!isAdvancedSearchOpen && searchInputRef) {
        searchInputRef.current.focus();
      }
    }
  }, [isAdvancedSearchOpen]);

  // If a menu is open and has browser focus, then the escape key closes them and puts the browser focus onto their
  // respective toggle. The 'date within' menu also needs to close when the 'tab' key is hit. However, hitting tab while
  // focus is in the advanced search form should move the focus to the next form input, not close the advanced search
  // menu.
  const handleMenuKeys = (event) => {
    if (isDateWithinOpen && dateWithinMenuRef.current && dateWithinMenuRef.current.contains(event.target)) {
      if (event.key === 'Escape' || event.key === 'Tab') {
        setIsDateWithinOpen(!isDateWithinOpen);
        dateWithinToggleRef.current.focus();
      }
    }
    if (isAdvancedSearchOpen && advancedSearchPaneRef.current && advancedSearchPaneRef.current.contains(event.target)) {
      if (
        event.key === 'Escape' ||
        (event.key === 'Tab' &&
          !event.shiftKey &&
          advancedSearchPaneRef.current.querySelector('button[type=reset]') === event.target)
      ) {
        setIsAdvancedSearchOpen(!isAdvancedSearchOpen);
        searchInputRef.current.focus();
      }
    }
  };

  // If a menu is open and has browser focus, then clicking outside the menu should close it.
  const handleClickOutside = (event) => {
    if (
      isDateWithinOpen &&
      dateWithinMenuRef &&
      dateWithinMenuRef.current &&
      !dateWithinMenuRef.current.contains(event.target)
    ) {
      setIsDateWithinOpen(false);
    }
    if (
      isAdvancedSearchOpen &&
      advancedSearchPaneRef &&
      advancedSearchPaneRef.current &&
      !advancedSearchPaneRef.current.contains(event.target)
    ) {
      setIsAdvancedSearchOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleMenuKeys);
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('keydown', handleMenuKeys);
      window.removeEventListener('click', handleClickOutside);
    };
  }, [dateWithinMenuRef.current, advancedSearchPaneRef.current, isAdvancedSearchOpen, isDateWithinOpen]);

  // This demo and its handling of 'date within' and a date picker is modeled after the gmail advanced search form.
  const onSubmit = (event, _value) => {
    event.preventDefault();

    if (isValidDate(new Date(date)) && dateWithin) {
      const afterDate = new Date(date);
      const toDate = new Date(date);
      switch (dateWithin) {
        case '1 day':
          afterDate.setDate(afterDate.getDate());
          toDate.setDate(toDate.getDate() + 2);
          break;
        case '3 days':
          afterDate.setDate(afterDate.getDate() - 2);
          toDate.setDate(toDate.getDate() + 4);
          break;
        case '1 week':
          afterDate.setDate(afterDate.getDate() - 6);
          toDate.setDate(toDate.getDate() + 8);
          break;
        case '2 weeks':
          afterDate.setDate(afterDate.getDate() - 13);
          toDate.setDate(toDate.getDate() + 15);
          break;
        case '1 month':
          afterDate.setMonth(afterDate.getMonth() - 1);
          afterDate.setDate(afterDate.getDate() + 1);
          toDate.setMonth(toDate.getMonth() + 1);
          toDate.setDate(toDate.getDate() + 1);
          break;
        case '2 months':
          afterDate.setMonth(afterDate.getMonth() - 2);
          afterDate.setDate(afterDate.getDate() + 1);
          toDate.setMonth(toDate.getMonth() + 2);
          toDate.setDate(toDate.getDate() + 1);
          break;
        case '6 months':
          afterDate.setMonth(afterDate.getMonth() - 6);
          afterDate.setDate(afterDate.getDate() + 1);
          toDate.setMonth(toDate.getMonth() + 6);
          toDate.setDate(toDate.getDate() + 1);
          break;
        case '1 year':
          afterDate.setFullYear(afterDate.getFullYear() - 1);
          afterDate.setDate(afterDate.getDate() + 1);
          toDate.setFullYear(toDate.getFullYear() + 1);
          toDate.setDate(toDate.getDate() + 1);
          break;
      }
      setValue(`${hasWords && hasWords + ' '}after:${yyyyMMddFormat(afterDate)} to:${yyyyMMddFormat(toDate)}`);
    } else {
      setValue(hasWords);
    }

    setIsAdvancedSearchOpen(false);
  };

  const searchInput = (
    <SearchInput
      value={value}
      onChange={onChange}
      onToggleAdvancedSearch={(e, isOpen) => {
        e.stopPropagation();
        setIsAdvancedSearchOpen(isOpen);
      }}
      isAdvancedSearchOpen={isAdvancedSearchOpen}
      onClear={onClear}
      onSearch={onSubmit}
      ref={searchInputRef}
      id="custom-advanced-search"
      aria-label="Composable advanced search"
    />
  );

  // Clicking the 'date within' toggle should open its associated menu and then place the browser
  // focus on the first menu item.
  const toggleDateWithinMenu = (ev) => {
    ev.stopPropagation(); // Stop handleClickOutside from handling
    setTimeout(() => {
      if (dateWithinMenuRef.current) {
        const firstElement = dateWithinMenuRef.current.querySelector('li > button:not(:disabled)');
        firstElement && firstElement.focus();
      }
    }, 0);
    setIsDateWithinOpen(!isDateWithinOpen);
  };

  // Selecting a date within option closes the menu, sets the value of date within, and puts browser focus back
  // on the date within toggle.
  const onDateWithinSelect = (e, itemId) => {
    e.stopPropagation();
    setIsDateWithinOpen(false);
    setDateWithin(itemId);
    if (dateWithinToggleRef && dateWithinToggleRef.current) {
      dateWithinToggleRef.current.focus();
    }
  };

  const dateWithinOptions = (
    <Menu ref={dateWithinMenuRef} selected={dateWithin} onSelect={onDateWithinSelect}>
      <MenuContent>
        <MenuList>
          <MenuItem itemId="1 day">1 day</MenuItem>
          <MenuItem itemId="3 days">3 days</MenuItem>
          <MenuItem itemId="1 week">1 week</MenuItem>
          <MenuItem itemId="2 weeks">2 weeks</MenuItem>
          <MenuItem itemId="1 month">1 month</MenuItem>
          <MenuItem itemId="2 months">2 months</MenuItem>
          <MenuItem itemId="6 months">6 months</MenuItem>
          <MenuItem itemId="1 year">1 year</MenuItem>
        </MenuList>
      </MenuContent>
    </Menu>
  );

  const dateWithinToggle = (
    <MenuToggle
      ref={dateWithinToggleRef}
      onClick={toggleDateWithinMenu}
      isExpanded={isDateWithinOpen}
      style={{ width: '100%' }}
    >
      {dateWithin}
    </MenuToggle>
  );

  const advancedForm = (
    <div ref={advancedSearchPaneRef} role="dialog" aria-label="Advanced search form">
      <Panel variant="raised">
        <PanelMain>
          <PanelMainBody>
            <Form>
              <FormGroup label="Has the words" fieldId="has-words" key="has-words">
                <TextInput
                  type="text"
                  id="has-words"
                  value={hasWords}
                  onChange={(_event, value) => {
                    setHasWords(value);
                    setValue(value);
                  }}
                  ref={firstAttrRef}
                />
              </FormGroup>
              <Grid hasGutter md={6}>
                <GridItem>
                  <FormGroup label="Date within" fieldId="date-within" key="date-within">
                    <Popper
                      trigger={dateWithinToggle}
                      triggerRef={dateWithinToggleRef}
                      popper={dateWithinOptions}
                      popperRef={dateWithinMenuRef}
                      isVisible={isDateWithinOpen}
                    />
                  </FormGroup>
                </GridItem>
                <GridItem>
                  <FormGroup label="Of date" fieldId="date" key="date">
                    <DatePicker
                      id="datePicker"
                      style={{ width: '100%' }}
                      value={date}
                      onChange={(_e, newValue) => setDate(newValue)}
                      appendTo={() => document.querySelector('#datePicker')}
                    />
                  </FormGroup>
                </GridItem>
              </Grid>
              <ActionGroup>
                <Button variant="primary" type="submit" onClick={(e) => onSubmit(null, e)}>
                  Submit
                </Button>
                {!!onClear && (
                  <Button variant="link" type="reset" onClick={onClear}>
                    Reset
                  </Button>
                )}
              </ActionGroup>
            </Form>
          </PanelMainBody>
        </PanelMain>
      </Panel>
    </div>
  );

  // Popper is just one way to build a relationship between a toggle and a menu.
  return (
    <Popper
      trigger={searchInput}
      triggerRef={searchInputRef}
      popper={advancedForm}
      popperRef={advancedSearchPaneRef}
      isVisible={isAdvancedSearchOpen}
      enableFlip={false}
      appendTo={() => document.querySelector('#custom-advanced-search')}
    />
  );
};
