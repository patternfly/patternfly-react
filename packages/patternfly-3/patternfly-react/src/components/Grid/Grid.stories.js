import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { defaultTemplate } from 'storybook/decorators/storyTemplates';
import { storybookPackageName, DOCUMENTATION_URL, STORYBOOK_CATEGORY } from 'storybook/constants/siteConstants';
import { Grid } from './index';
import { name } from '../../../package.json';

const stories = storiesOf(`${storybookPackageName(name)}/${STORYBOOK_CATEGORY.LAYOUTS}/Grid`, module);
stories.addDecorator(withKnobs);

const description = (
  <p>
    This component is based on React Bootstrap Grid component. Grids are used to structure and present data. See{' '}
    <a href={`${DOCUMENTATION_URL.REACT_BOOTSTRAP_LAYOUT}grid/`}>React Bootstrap Docs</a> for complete Grid component
    documentation.
  </p>
);

const dummySentences = [
  'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
  'Donec hendrerit tempor tellus.',
  'Donec pretium posuere tellus.',
  'Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.',
  'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
  'Nulla posuere.',
  'Donec vitae dolor.',
  'Nullam tristique diam non turpis.',
  'Cras placerat accumsan nulla.',
  'Nullam rutrum.',
  'Nam vestibulum accumsan nisl.'
];

stories.addDecorator(
  defaultTemplate({
    title: 'Grid',
    description
  })
);

stories.add(
  'Grid',
  withInfo()(() => (
    <Grid fluid={boolean('fluid', true)}>
      <Grid.Row className="show-grid">
        <Grid.Col xs={12} md={8}>
          <code>
            &lt;
            {'Col xs={12} md={8}'} /&gt;
          </code>
        </Grid.Col>
        <Grid.Col xs={6} md={4}>
          <code>
            &lt;
            {'Col xs={6} md={4}'} /&gt;
          </code>
        </Grid.Col>
      </Grid.Row>
      <Grid.Row className="show-grid">
        <Grid.Col xs={6} md={4}>
          <code>
            &lt;
            {'Col xs={6} md={4}'} /&gt;
          </code>
        </Grid.Col>
        <Grid.Col xs={6} md={4}>
          <code>
            &lt;
            {'Col xs={6} md={4}'} /&gt;
          </code>
        </Grid.Col>
        <Grid.Col xsHidden md={4}>
          <code>
            &lt;
            {'Col xsHidden md={4}'} /&gt;
          </code>
        </Grid.Col>
      </Grid.Row>
      <Grid.Row className="show-grid">
        <Grid.Col xs={6} xsOffset={6}>
          <code>
            &lt;
            {'Col xs={6} xsOffset={6}'} /&gt;
          </code>
        </Grid.Col>
      </Grid.Row>
      <Grid.Row className="show-grid">
        <Grid.Col md={6} mdPush={6}>
          <code>
            &lt;
            {'Col md={6} mdPush={6}'} /&gt;
          </code>
        </Grid.Col>
        <Grid.Col md={6} mdPull={6}>
          <code>
            &lt;
            {'Col md={6} mdPull={6}'} /&gt;
          </code>
        </Grid.Col>
      </Grid.Row>
    </Grid>
  ))
);

stories.add(
  'Clearfix',
  withInfo()(() => (
    <Grid fluid={boolean('fluid', true)}>
      <Grid.Row className="show-grid">
        <Grid.Col sm={6} md={3}>
          <code>
            &lt;
            {'Col sm={6} md={3}'} /&gt;
          </code>
          <br />
          {dummySentences.slice(0, 10).join(' ')}
        </Grid.Col>
        <Grid.Col sm={6} md={3}>
          <code>
            &lt;
            {'Col sm={6} md={3}'} /&gt;
          </code>
          <br />
          {dummySentences.slice(0, 4).join(' ')}
        </Grid.Col>
        {boolean('ShowClearfix', true) && (
          <Grid.Clearfix visibleSmBlock>
            <code>
              &lt;
              {'Clearfix visibleSmBlock'} /&gt;
            </code>
          </Grid.Clearfix>
        )}
        <Grid.Col sm={6} md={3}>
          <code>
            &lt;
            {'Col sm={6} md={3}'} /&gt;
          </code>
          <br />
          {dummySentences.slice(0, 2).join(' ')}
        </Grid.Col>
        <Grid.Col sm={6} md={3}>
          <code>
            &lt;
            {'Col sm={6} md={3}'} /&gt;
          </code>
          <br />
          {dummySentences.slice(0, 6).join(' ')}
        </Grid.Col>
      </Grid.Row>
    </Grid>
  ))
);
