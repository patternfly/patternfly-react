import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { defaultTemplate } from 'storybook/decorators/storyTemplates';
import { storybookPackageName, DOCUMENTATION_URL, STORYBOOK_CATEGORY } from 'storybook/constants/siteConstants';
import { Spinner } from './index';
import { name } from '../../../package.json';

const stories = storiesOf(`${storybookPackageName(name)}/${STORYBOOK_CATEGORY.WIDGETS}/Spinner`, module);

stories.addDecorator(withKnobs);
stories.addDecorator(
  defaultTemplate({
    title: 'Spinner',
    documentationLink: `${DOCUMENTATION_URL.PATTERNFLY_ORG_WIDGETS}#spinner`
  })
);

stories.add(
  'Spinner',
  withInfo()(() => {
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
  })
);
