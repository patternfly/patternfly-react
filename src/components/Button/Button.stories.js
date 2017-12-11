import React from 'react';
import { storiesOf } from '@storybook/react';
import { defaultTemplate } from '../../../storybook/decorators/storyTemplates';
import { Button, ButtonGroup } from './index';
import { Grid, Row, Col } from '../../index';

const stories = storiesOf('Button', module);

const description = (
  <p>
    This component is based on React Bootstrap Button component. See{' '}
    <a href="https://react-bootstrap.github.io/components.html#buttons">
      React Bootstrap Docs
    </a>{' '}
    for complete Button component documentation.
  </p>
);

stories.addDecorator(
  defaultTemplate({
    title: 'Button',
    documentationLink:
      'http://www.patternfly.org/pattern-library/widgets/#buttons',
    description: description,
  }),
);

stories.addWithInfo('Button', '', () => (
  <div>
    <p>
      <Button>Default Button</Button>{' '}
      <Button bsStyle="primary">Primary Button</Button>{' '}
      <Button bsStyle="danger">Danger Button</Button>{' '}
      <Button bsStyle="link">Link Button</Button>
    </p>
    <p>
      <Button bsSize="large">Large Button</Button>{' '}
      <Button>Default Button</Button>{' '}
      <Button bsSize="small">Small Button</Button>{' '}
      <Button bsSize="xsmall">Extra Small Button</Button>
    </p>
  </div>
));

stories.addWithInfo('ButtonGroup', () => {
  return (
    <Grid>
      <Row style={{ marginBottom: '20px' }}>
        <Col xs={12} md={3}>
          <ButtonGroup>
            <Button>Left</Button>
            <Button>Middle</Button>
            <Button>Right</Button>
          </ButtonGroup>
        </Col>
        <Col xs={12} md={3}>
          <ButtonGroup>
            <Button bsStyle="danger">Left</Button>
            <Button bsStyle="danger">Middle</Button>
            <Button bsStyle="danger">Right</Button>
          </ButtonGroup>
        </Col>
        <Col xs={12} md={3}>
          <ButtonGroup>
            <Button bsStyle="primary">Left</Button>
            <Button bsStyle="primary">Middle</Button>
            <Button bsStyle="primary">Right</Button>
          </ButtonGroup>
        </Col>
        <Col xs={12} md={3}>
          <ButtonGroup>
            <Button bsStyle="link">Left</Button>
            <Button bsStyle="link">Middle</Button>
            <Button bsStyle="link">Right</Button>
          </ButtonGroup>
        </Col>
      </Row>
      <Row style={{ marginBottom: '20px' }}>
        <Col xs={12} md={3}>
          <ButtonGroup bsSize="large">
            <Button>Left</Button>
            <Button>Middle</Button>
            <Button>Right</Button>
          </ButtonGroup>
        </Col>
        <Col xs={12} md={3}>
          <ButtonGroup bsSize="large">
            <Button bsStyle="danger">Left</Button>
            <Button bsStyle="danger">Middle</Button>
            <Button bsStyle="danger">Right</Button>
          </ButtonGroup>
        </Col>
        <Col xs={12} md={3}>
          <ButtonGroup bsSize="large">
            <Button bsStyle="primary">Left</Button>
            <Button bsStyle="primary">Middle</Button>
            <Button bsStyle="primary">Right</Button>
          </ButtonGroup>
        </Col>
        <Col xs={12} md={3}>
          <ButtonGroup bsSize="large">
            <Button bsStyle="link">Left</Button>
            <Button bsStyle="link">Middle</Button>
            <Button bsStyle="link">Right</Button>
          </ButtonGroup>
        </Col>
      </Row>
      <Row style={{ marginBottom: '20px' }}>
        <Col xs={12} md={3}>
          <ButtonGroup bsSize="xsmall">
            <Button>Left</Button>
            <Button>Middle</Button>
            <Button>Right</Button>
          </ButtonGroup>
        </Col>
        <Col xs={12} md={3}>
          <ButtonGroup bsSize="xsmall">
            <Button bsStyle="danger">Left</Button>
            <Button bsStyle="danger">Middle</Button>
            <Button bsStyle="danger">Right</Button>
          </ButtonGroup>
        </Col>
        <Col xs={12} md={3}>
          <ButtonGroup bsSize="xsmall">
            <Button bsStyle="primary">Left</Button>
            <Button bsStyle="primary">Middle</Button>
            <Button bsStyle="primary">Right</Button>
          </ButtonGroup>
        </Col>
        <Col xs={12} md={3}>
          <ButtonGroup bsSize="xsmall">
            <Button bsStyle="link">Left</Button>
            <Button bsStyle="link">Middle</Button>
            <Button bsStyle="link">Right</Button>
          </ButtonGroup>
        </Col>
      </Row>
    </Grid>
  );
});
