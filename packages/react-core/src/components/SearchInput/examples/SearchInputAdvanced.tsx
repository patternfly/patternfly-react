import React from 'react';
import { Button, Checkbox, FormGroup, SearchInput } from '@patternfly/react-core';
import ExternalLinkSquareAltIcon from '@patternfly/react-icons/dist/esm/icons/external-link-square-alt-icon';

export const SearchInputAdvanced: React.FunctionComponent = () => {
  const [value, setValue] = React.useState('username:player firstname:john');
  const [useEqualsAsDelimiter, setUseEqualsAsDelimiter] = React.useState(false);
  const [useCustomFooter, setUseCustomFooter] = React.useState(false);

  const toggleDelimiter = (checked: boolean) => {
    setValue(value.replace(/:|=/g, checked ? '=' : ':'));
    setUseEqualsAsDelimiter(checked);
  };

  return (
    <>
      <Checkbox
        label="Use equal sign as search attribute delimiter"
        isChecked={useEqualsAsDelimiter}
        onChange={toggleDelimiter}
        aria-label="change delimiter checkbox"
        id="toggle-delimiter"
        name="toggle-delimiter"
      />
      <Checkbox
        label="Add custom footer element after the attributes in the menu"
        isChecked={useCustomFooter}
        onChange={value => setUseCustomFooter(value)}
        aria-label="change use custom footer checkbox"
        id="toggle-custom-footer"
        name="toggle-custom-footer"
      />
      <br />
      <SearchInput
        attributes={[
          { attr: 'username', display: 'Username' },
          { attr: 'firstname', display: 'First name' }
        ]}
        advancedSearchDelimiter={useEqualsAsDelimiter ? '=' : ':'}
        value={value}
        onChange={(_event, value) => setValue(value)}
        onSearch={(_event, value) => setValue(value)}
        onClear={() => setValue('')}
        formAdditionalItems={
          useCustomFooter ? (
            <FormGroup>
              <Button variant="link" isInline icon={<ExternalLinkSquareAltIcon />} iconPosition="right">
                Link
              </Button>
            </FormGroup>
          ) : null
        }
      />
    </>
  );
};
