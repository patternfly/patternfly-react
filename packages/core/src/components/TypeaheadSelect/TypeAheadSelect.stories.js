import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, boolean, number } from '@storybook/addon-knobs';
import {
  storybookPackageName,
  STORYBOOK_CATEGORY
} from 'storybook/constants/siteConstants';
import { name } from '../../../package.json';
import TypeAheadSelect from './TypeAheadSelect';
import AsyncTypeAheadSelect from './AsyncTypeAheadSelect';
import { Form, FormGroup, Button } from '../../index';
import Mocks from './mock';
import GithubMenuItem from './GithubMenuItem';

const TypeAheadSelectStories = storiesOf(
  `${storybookPackageName(name)}/${
    STORYBOOK_CATEGORY.FORMS_AND_CONTROLS
  }/TypeAhead Select`,
  module
);

TypeAheadSelectStories.addDecorator(withKnobs);

TypeAheadSelectStories.addWithInfo('Menu Alignment', () => {
  const align = select('Alignment', [undefined, 'justify', 'left', 'right']);

  return (
    <div className="container">
      <br />
      <br />
      <br />
      <h2>Menu Alignment</h2>
      <TypeAheadSelect
        align={align}
        options={Mocks.countries}
        labelKey="country"
        placeholder="Choose a state..."
      />
    </div>
  );
});

TypeAheadSelectStories.addWithInfo('Input Size', () => {
  const bsSize = select('Size', [undefined, 'small', 'default', 'large']);

  return (
    <div className="container">
      <br />
      <br />
      <br />
      <h2>Input Size</h2>
      <TypeAheadSelect
        bsSize={bsSize}
        options={Mocks.countries}
        labelKey="name"
        placeholder="Choose a state..."
      />
    </div>
  );
});

TypeAheadSelectStories.addWithInfo('Multiple Selection', () => {
  const clearButton = boolean('Clear Button', true);
  const multiple = boolean('Multiple Selection', true);

  return (
    <div className="container">
      <br />
      <br />
      <br />
      <h2>Multiple Selection</h2>
      <TypeAheadSelect
        multiple={multiple}
        clearButton={clearButton}
        selected={['Burkina Fasu', 'Papua New Guinea', 'Satellite']}
        options={Mocks.countries}
        labelKey="name"
        placeholder="Choose a state..."
      />
    </div>
  );
});

TypeAheadSelectStories.addWithInfo('Highlight Results', () => {
  const highlightOnlyResult = boolean('highlight Only Result', true);
  const selectHintOnEnter = boolean('select Hint On Enter', true);

  return (
    <div className="container">
      <br />
      <br />
      <br />
      <h2>Highlight Results</h2>
      <TypeAheadSelect
        highlightOnlyResult={highlightOnlyResult}
        selectHintOnEnter={selectHintOnEnter}
        options={Mocks.countries}
        labelKey="name"
        placeholder="Choose a state..."
      />
    </div>
  );
});

TypeAheadSelectStories.addWithInfo('Allow Adding New Items', () => {
  const allowNew = boolean('Allow Adding New Items', true);

  return (
    <div className="container">
      <br />
      <br />
      <br />
      <h2>Allow Adding New Items</h2>
      <p>
        <strong>
          If a search result doesn&apos;t exist, allow the user to add a custom
          input.
        </strong>
      </p>
      <TypeAheadSelect
        multiple
        allowNew={allowNew}
        newSelectionPrefix="Create and select item: "
        options={Mocks.countries}
        labelKey="name"
        placeholder="Choose a state..."
      />
    </div>
  );
});

TypeAheadSelectStories.addWithInfo('Min Chars To AutoComplete', () => {
  const minLength = number('Set the Minimum Length to Autocomplete', 1);

  return (
    <div className="container">
      <br />
      <br />
      <br />
      <h2>AutoCompletion will start when there are enough characters.</h2>
      <TypeAheadSelect
        minLength={minLength}
        options={Mocks.countries}
        labelKey="name"
        placeholder="Choose a state..."
      />
    </div>
  );
});

TypeAheadSelectStories.addWithInfo('Use With Forms', () => {
  const submitFormOnEnter = boolean('Submit Form On Enter', true);
  const handleSubmit = e => {
    alert('Form was submitted successfully !');
    e.preventDefault();
  };
  return (
    <div className="container">
      <br />
      <br />
      <br />
      <h2>Submit Form On &quot;Enter&quot;</h2>
      <p>
        <strong>Press the &quot;Enter&quot; key</strong>
      </p>
      <Form horizontal onSubmit={handleSubmit}>
        <div className="col-sm-10">
          <FormGroup>
            <TypeAheadSelect
              minLength={1}
              submitFormOnEnter={submitFormOnEnter}
              labelKey="name"
              options={Mocks.countries}
              placeholder="Choose a state..."
            />
          </FormGroup>
        </div>
        <div className="col-sm-2">
          <FormGroup>
            <Button bsStyle="primary" type="submit">
              Submit
            </Button>
          </FormGroup>
        </div>
      </Form>
    </div>
  );
});

TypeAheadSelectStories.addWithInfo('Using Async Calls', () => {
  // query is the text string entered by the user.
  const handleSearch = query =>
    fetch('https://api.github.com/repos/patternfly/patternfly-react/forks')
      .then(response => response.json())
      .then(forks => forks.map(fork => fork.owner));

  return (
    <div className="container">
      <br />
      <br />
      <br />
      <h2>Search a Forker</h2>
      <AsyncTypeAheadSelect
        labelKey="login"
        minLength={0}
        placeholder="Search someone who have forked Patternfly-react.."
        onSearch={handleSearch}
        multiple
        clearButton
        highlightOnlyResult
        renderMenuItemChildren={(option, props) => (
          <GithubMenuItem {...props} option={option} />
        )}
      />
    </div>
  );
});
