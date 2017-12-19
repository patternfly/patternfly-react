import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select } from '@storybook/addon-knobs';
import { defaultTemplate } from '../../../storybook/decorators/storyTemplates';
import { Grid, Row, Col, MenuItem } from '../../index';
import { Button, ButtonGroup, DropdownButton, SplitButton } from './index';
import { BUTTON_BS_STYLES } from './constants';

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

stories.addDecorator(withKnobs);
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

stories.addWithInfo('DropdownButton', '', () => {
  const bsStyle = select('Style', BUTTON_BS_STYLES, 'default');
  const bsSize = select('Size', [undefined, 'xsmall', 'small', 'large']);

  const props = { bsStyle, title: bsStyle, id: 'dropdown-example' };
  if (bsSize) props.bsSize = bsSize;

  return (
    <DropdownButton {...props} onClick={action('onClick')}>
      <MenuItem eventKey="1">Action</MenuItem>
      <MenuItem eventKey="2">Another action</MenuItem>
      <MenuItem eventKey="3" active>
        Active Item
      </MenuItem>
      <MenuItem divider />
      <MenuItem eventKey="4">Separated link</MenuItem>
    </DropdownButton>
  );
});

stories.addWithInfo('SplitButton', '', () => {
  const bsStyle = select('Style', BUTTON_BS_STYLES, 'default');
  const bsSize = select('Size', [undefined, 'xsmall', 'small', 'large']);

  const props = { bsStyle, title: bsStyle, id: 'dropdown-example' };
  if (bsSize) props.bsSize = bsSize;

  return (
    <SplitButton {...props} onClick={action('onClick')}>
      <MenuItem eventKey="1">Action</MenuItem>
      <MenuItem eventKey="2">Another action</MenuItem>
      <MenuItem eventKey="3" active>
        Active Item
      </MenuItem>
      <MenuItem divider />
      <MenuItem eventKey="4">Separated link</MenuItem>
    </SplitButton>
  );
});
