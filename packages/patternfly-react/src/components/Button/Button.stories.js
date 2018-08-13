import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { withKnobs, select } from '@storybook/addon-knobs';
import { inlineTemplate } from 'storybook/decorators/storyTemplates';
import { storybookPackageName, DOCUMENTATION_URL, STORYBOOK_CATEGORY } from 'storybook/constants/siteConstants';

import { Grid, Row, Col, MenuItem } from '../../index';
import { Button, ButtonGroup, DropdownButton, SplitButton } from './index';
import { BUTTON_BS_STYLES } from './ButtonConstants';
import { name } from '../../../package.json';

const stories = storiesOf(`${storybookPackageName(name)}/${STORYBOOK_CATEGORY.WIDGETS}/Button`, module);

stories.addDecorator(withKnobs);

stories.add(
  'Button',
  withInfo()(() => {
    const story = (
      <div>
        <p>
          <Button>Default Button</Button> <Button bsStyle="primary">Primary Button</Button>{' '}
          <Button bsStyle="success">Success Button</Button>
          <Button bsStyle="warning">Warning Button</Button>
          <Button bsStyle="danger">Danger Button</Button> <Button bsStyle="info">Info Button</Button>{' '}
          <Button bsStyle="link">Link Button</Button>
        </p>
        <p>
          <Button bsSize="large">Large Button</Button> <Button>Default Button</Button>{' '}
          <Button bsSize="small">Small Button</Button> <Button bsSize="xsmall">Extra Small Button</Button>
        </p>
      </div>
    );
    return inlineTemplate({
      title: 'Button',
      documentationLink: `${DOCUMENTATION_URL.PATTERNFLY_ORG_WIDGETS}#buttons`,
      reactBootstrapDocumentationLink: `${DOCUMENTATION_URL.REACT_BOOTSTRAP_COMPONENT}buttons/`,
      story
    });
  })
);

stories.add(
  'ButtonGroup',
  withInfo()(() => {
    const story = (
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
              <Button bsStyle="primary">Left</Button>
              <Button bsStyle="primary">Middle</Button>
              <Button bsStyle="primary">Right</Button>
            </ButtonGroup>
          </Col>
          <Col xs={12} md={3}>
            <ButtonGroup>
              <Button bsStyle="success">Left</Button>
              <Button bsStyle="success">Middle</Button>
              <Button bsStyle="success">Right</Button>
            </ButtonGroup>
          </Col>
          <Col xs={12} md={3}>
            <ButtonGroup>
              <Button bsStyle="warning">Left</Button>
              <Button bsStyle="warning">Middle</Button>
              <Button bsStyle="warning">Right</Button>
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
              <Button bsStyle="info">Left</Button>
              <Button bsStyle="info">Middle</Button>
              <Button bsStyle="info">Right</Button>
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
              <Button bsStyle="primary">Left</Button>
              <Button bsStyle="primary">Middle</Button>
              <Button bsStyle="primary">Right</Button>
            </ButtonGroup>
          </Col>
          <Col xs={12} md={3}>
            <ButtonGroup bsSize="large">
              <Button bsStyle="success">Left</Button>
              <Button bsStyle="success">Middle</Button>
              <Button bsStyle="success">Right</Button>
            </ButtonGroup>
          </Col>
          <Col xs={12} md={3}>
            <ButtonGroup bsSize="large">
              <Button bsStyle="warning">Left</Button>
              <Button bsStyle="warning">Middle</Button>
              <Button bsStyle="warning">Right</Button>
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
              <Button bsStyle="info">Left</Button>
              <Button bsStyle="info">Middle</Button>
              <Button bsStyle="info">Right</Button>
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
              <Button bsStyle="primary">Left</Button>
              <Button bsStyle="primary">Middle</Button>
              <Button bsStyle="primary">Right</Button>
            </ButtonGroup>
          </Col>
          <Col xs={12} md={3}>
            <ButtonGroup bsSize="xsmall">
              <Button bsStyle="success">Left</Button>
              <Button bsStyle="success">Middle</Button>
              <Button bsStyle="success">Right</Button>
            </ButtonGroup>
          </Col>
          <Col xs={12} md={3}>
            <ButtonGroup bsSize="xsmall">
              <Button bsStyle="warning">Left</Button>
              <Button bsStyle="warning">Middle</Button>
              <Button bsStyle="warning">Right</Button>
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
              <Button bsStyle="info">Left</Button>
              <Button bsStyle="info">Middle</Button>
              <Button bsStyle="info">Right</Button>
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
    return inlineTemplate({
      title: 'ButtonGroup',
      documentationLink: `${DOCUMENTATION_URL.PATTERNFLY_ORG_WIDGETS}#button-groups`,
      reactBootstrapDocumentationLink: `${DOCUMENTATION_URL.REACT_BOOTSTRAP_COMPONENT}button-group/`,
      story
    });
  })
);

stories.add(
  'DropdownButton',
  withInfo()(() => {
    const bsStyle = select('Style', BUTTON_BS_STYLES, 'default');
    const bsSize = select('Size', [undefined, 'xsmall', 'small', 'large']);
    const props = { bsStyle, title: bsStyle, id: 'dropdown-example' };
    if (bsSize) props.bsSize = bsSize;

    const story = (
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
    return inlineTemplate({
      title: 'DropdownButton',
      reactBootstrapDocumentationLink: `${DOCUMENTATION_URL.REACT_BOOTSTRAP_COMPONENT}dropdowns/`,
      story
    });
  })
);

stories.add(
  'SplitButton',
  withInfo()(() => {
    const bsStyle = select('Style', BUTTON_BS_STYLES, 'default');
    const bsSize = select('Size', [undefined, 'xsmall', 'small', 'large']);

    const props = { bsStyle, title: bsStyle, id: 'dropdown-example' };
    if (bsSize) props.bsSize = bsSize;

    const story = (
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

    return inlineTemplate({
      title: 'SplitButton',
      reactBootstrapDocumentationLink: `${DOCUMENTATION_URL.REACT_BOOTSTRAP_COMPONENT}dropdowns/`,
      story
    });
  })
);
