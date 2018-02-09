import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import { defaultTemplate } from '../../../storybook/decorators/storyTemplates';
import { DOCUMENTATION_URL } from '../../../storybook/constants';
import { Spinner } from './index';

const stories = storiesOf('Widgets', module);

stories.addDecorator(withKnobs);
stories.addDecorator(
  defaultTemplate({
    title: 'Spinner',
    documentationLink: `${DOCUMENTATION_URL.PATTERNFLY_ORG_WIDGETS}#spinner`
  })
);

stories.addWithInfo('Spinner', () => {
  const loading = boolean('Loading', true);
  const inline = boolean('Inline', false);
  const inverse = boolean('Inverse', false);
  const size = select('Size', ['lg', 'md', 'sm', 'xs'], 'md');

  const wrapperStyle = {
    backgroundColor: inverse ? 'black' : 'white',
    color: inverse ? 'white' : 'black',
    padding: '15px'
  };

  const spinnerProps = {
    loading,
    size,
    inline,
    inverse
  };

  if (inline) {
    return (
      <div style={wrapperStyle}>
        <Spinner {...spinnerProps} />
        Some inline text here.
      </div>
    );
  }

  return (
    <div style={wrapperStyle}>
      <Spinner {...spinnerProps}>
        <strong>
          Show chilren when <code>loading</code> is <code>false</code>.
        </strong>
      </Spinner>
    </div>
  );
});
