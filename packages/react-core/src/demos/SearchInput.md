---
id: Search input
section: components
---

## Demos

### Composable Advanced Search

```js
import React from 'react';
import { 
  Button, 
  Card, 
  CardBody, 
  CardFooter, 
  DatePicker,
  Form, 
  FormGroup,
  Grid,
  GridItem, 
  Menu,
  MenuContent,
  MenuItem,
  MenuList,
  MenuToggle,
  Popper, 
  SearchInput, 
  TextInput 
} from '@patternfly/react-core';

AdvancedComposableSearchInput = () => {
  const [hasWords, setHasWords] = React.useState('');
  const [dateWithin, setDateWithin] = React.useState('1 day');
  const [date, setDate] = React.useState('');
  
  const [isAdvancedSearchOpen, setIsAdvancedSearchOpen] = React.useState(false);
  const [isDateWithinOpen, setIsDateWithinOpen] = React.useState(false);
    
  const isInitialMount = React.useRef(true);
  const firstAttrRef = React.useRef(null);
  const searchInputRef = React.useRef(null);
  const advancedSearchPaneRef = React.useRef(null);
  const dateWithinToggleRef = React.useRef();
  const dateWithinMenuRef = React.useRef();
  
  const onClear = () => {
    setHasWords('');
    setDateWithin('');
    setDate('');
  };
  
  React.useEffect(() => {
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
  
  const handleMenuKeys = event => {
    if (isDateWithinOpen && dateWithinMenuRef.current && dateWithinMenuRef.current.contains(event.target)) {
      if (event.key === 'Escape' || event.key === 'Tab') {
        setIsDateWithinOpen(!isDateWithinOpen);
        dateWithinToggleRef.current.focus();
      }
    } 
    if (isAdvancedSearchOpen && advancedSearchPaneRef.current && advancedSearchPaneRef.current.contains(event.target)) {
      if (event.key === 'Escape') {
        setIsAdvancedSearchOpen(!isAdvancedSearchOpen);
        searchInputRef.current.focus();
      }
    }  
  };
  
  const handleClickOutside = event => {
    if (isDateWithinOpen && !dateWithinMenuRef.current.contains(event.target)) {
      setIsDateWithinOpen(false);
    } 
    if (isAdvancedSearchOpen && !advancedSearchPaneRef.current.contains(event.target)) {
      console.log("close on click");
      setIsAdvancedSearchOpen(false);
    }
  };
  
  React.useEffect(() => {
    window.addEventListener('keydown', handleMenuKeys);
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('keydown', handleMenuKeys);
      window.removeEventListener('click', handleClickOutside);
    };
  }, [dateWithinMenuRef.current, advancedSearchPaneRef.current]);
  
  const onSubmit = (event) => {
    event.preventDefault();
    setIsAdvancedSearchOpen(false);
    console.log("hasWords", hasWords);
    console.log("dateWithin", dateWithin);
    console.log("date", date);
  };
  
  const searchInput = (
    <SearchInput
      value={hasWords}
      onChange={setHasWords}
      onToggleAdvancedSearch={(e, isOpen) => {
        e.stopPropagation();
        setIsAdvancedSearchOpen(isOpen)
      }}
      isAdvancedSearchOpen={isAdvancedSearchOpen}
      onClear={onClear}
      ref={searchInputRef}
    />
  );
  
  const toggleDateWithinMenu = ev => {
    ev.stopPropagation(); // Stop handleClickOutside from handling
    setTimeout(() => {
      if (dateWithinMenuRef.current) {
        const firstElement = dateWithinMenuRef.current.querySelector('li > button:not(:disabled)');
        firstElement && firstElement.focus();
      }
    }, 0);
    setIsDateWithinOpen(!isDateWithinOpen);
  };
  
  const dateWithinOptions = (
    <Menu ref={dateWithinMenuRef} selected={dateWithin} onSelect={(e, itemId) => {
      e.stopPropagation();
      setDateWithin(itemId);
    }}>
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
    <MenuToggle ref={dateWithinToggleRef} onClick={toggleDateWithinMenu} isExpanded={isDateWithinOpen} style={{width: "100%"}}>
      {dateWithin}
    </MenuToggle>
  );
  
  const advancedForm = (
    <div ref={advancedSearchPaneRef} role="dialog" aria-label="Advanced search form">
      <Form>
        <Card>
          <CardBody>
            <Grid hasGutter md={6}>
              <GridItem span={12}>
                <FormGroup label='Has the words' fieldId='has-words' key='has-words'>
                  <TextInput
                    type='text'
                    id='has-words'
                    value={hasWords}
                    onChange={value => setHasWords(value)}
                    ref={firstAttrRef}
                  />
                </FormGroup>
              </GridItem>
              <FormGroup label='Date within' fieldId='date-within' key='date-within'>
                <Popper trigger={dateWithinToggle} popper={dateWithinOptions} isVisible={isDateWithinOpen} />
              </FormGroup>
              <FormGroup label='Date' fieldId='date' key='date'>
                <DatePicker id="datePicker" style={{width: "100%"}} onChange={(value) => setDate(value)} appendTo={() => document.querySelector("#datePicker")}/>
              </FormGroup>
            </Grid>
          </CardBody>
          <CardFooter>
            <FormGroup>
              <Button variant="primary" type="submit" onClick={onSubmit}>Submit</Button>
              {!!onClear && (
                <Button variant="link" type="reset" onClick={onClear}>Reset</Button>
              )}
            </FormGroup>
          </CardFooter>
        </Card>
      </Form>
    </div>
  );

  return (
    <Popper
      trigger={searchInput}
      popper={advancedForm}
      isVisible={isAdvancedSearchOpen}
      enableFlip={false}
    />
  );
};
```
