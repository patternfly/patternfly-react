import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { defaultTemplate } from '../../../storybook/decorators/storyTemplates';
import { Grid, Row, Col, Clearfix } from './index';

const stories = storiesOf('Grid', module);
stories.addDecorator(withKnobs);

const description = (
  <p>
    This component is based on React Bootstrap Grid component. Grids are used to
    structure and present data. See{' '}
    <a href="https://react-bootstrap.github.io/components.html#grid">
      React Bootstrap Docs
    </a>{' '}
    for complete Grid component documentation.
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
    description: description
  })
);

stories.addWithInfo('Basic Grid', '', () => (
  <Grid fluid={boolean('fluid', true)}>
    <Row className="show-grid">
      <Col xs={12} md={8}>
        <code>&lt;{'Col xs={12} md={8}'} /&gt;</code>
      </Col>
      <Col xs={6} md={4}>
        <code>&lt;{'Col xs={6} md={4}'} /&gt;</code>
      </Col>
    </Row>

    <Row className="show-grid">
      <Col xs={6} md={4}>
        <code>&lt;{'Col xs={6} md={4}'} /&gt;</code>
      </Col>
      <Col xs={6} md={4}>
        <code>&lt;{'Col xs={6} md={4}'} /&gt;</code>
      </Col>
      <Col xsHidden md={4}>
        <code>&lt;{'Col xsHidden md={4}'} /&gt;</code>
      </Col>
    </Row>

    <Row className="show-grid">
      <Col xs={6} xsOffset={6}>
        <code>&lt;{'Col xs={6} xsOffset={6}'} /&gt;</code>
      </Col>
    </Row>

    <Row className="show-grid">
      <Col md={6} mdPush={6}>
        <code>&lt;{'Col md={6} mdPush={6}'} /&gt;</code>
      </Col>
      <Col md={6} mdPull={6}>
        <code>&lt;{'Col md={6} mdPull={6}'} /&gt;</code>
      </Col>
    </Row>
  </Grid>
));

stories.addWithInfo('Clearfix', '', () => (
  <Grid fluid={boolean('fluid', true)}>
    <Row className="show-grid">
      <Col sm={6} md={3}>
        <code>&lt;{'Col sm={6} md={3}'} /&gt;</code>
        <br />
        {dummySentences.slice(0, 10).join(' ')}
      </Col>
      <Col sm={6} md={3}>
        <code>&lt;{'Col sm={6} md={3}'} /&gt;</code>
        <br />
        {dummySentences.slice(0, 4).join(' ')}
      </Col>
      {boolean('ShowClearfix', true) && (
        <Clearfix visibleSmBlock>
          <code>&lt;{'Clearfix visibleSmBlock'} /&gt;</code>
        </Clearfix>
      )}
      <Col sm={6} md={3}>
        <code>&lt;{'Col sm={6} md={3}'} /&gt;</code>
        <br />
        {dummySentences.slice(0, 2).join(' ')}
      </Col>
      <Col sm={6} md={3}>
        <code>&lt;{'Col sm={6} md={3}'} /&gt;</code>
        <br />
        {dummySentences.slice(0, 6).join(' ')}
      </Col>
    </Row>
  </Grid>
));
