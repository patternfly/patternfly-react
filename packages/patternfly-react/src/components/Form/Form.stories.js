/* eslint react/prop-types: 0 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { inlineTemplate } from 'storybook/decorators/storyTemplates';
import { storybookPackageName, DOCUMENTATION_URL, STORYBOOK_CATEGORY } from 'storybook/constants/siteConstants';
import { Icon } from '../Icon';
import { Col, Row, Grid } from '../Grid';
import { Button } from '../Button';
import { Modal } from '../Modal';
import { Form } from './index';

import { InlineFormFields, InlineFormButtons, getInlineFormKnobs } from './Stories/InlineForm';
import { BasicFormFields, BasicFormButtons, BasicFormSpinner, getBasicFormKnobs } from './Stories/BasicForm';
import { SupportedControlsFormFields, getSupportedControlsFormKnobs } from './Stories/SupportedControlsForm';
import { InputGroupsFormFields, getInputGroupsFormKnobs } from './Stories/InputGroupsForm';
import { InlineFormField } from './Stories/InlineFormField';
import { HorizontalFormField } from './Stories/HorizontalFormField';
import { VerticalFormField } from './Stories/VerticalFormField';
import { name } from '../../../package.json';

const stories = storiesOf(`${storybookPackageName(name)}/${STORYBOOK_CATEGORY.FORMS_AND_CONTROLS}/Forms`, module);

stories.addDecorator(withKnobs);

// const description = (
//   <p>
//     Those components are based on React Bootstrap Form components. See{' '}
//     <a href="https://react-bootstrap.github.io/components/forms/">
//       React Bootstrap Docs
//     </a>{' '}
//     for complete Form components documentation.
//   </p>
// );

// stories.addDecorator(
//   defaultTemplate({
//     title: 'Forms',
//     documentationLink:
//       'http://www.patternfly.org/pattern-library/widgets/#forms',
//     description: description
//   })
// );

stories.add(
  'Inline Form',
  withInfo()(() => {
    const formFieldsKnobs = getInlineFormKnobs();
    const { bsSize, disabled } = formFieldsKnobs;
    const buttonsProps = {};

    if (bsSize) buttonsProps.bsSize = bsSize;
    if (disabled) buttonsProps.disabled = disabled;

    const formFields = InlineFormFields.map(formField => InlineFormField({ ...formField, ...formFieldsKnobs })).reduce(
      (result = [], element) => [...result, element, ' '], // create spacing betwwen elements
      []
    );
    const formButtons = InlineFormButtons.map(({ text, ...props }) => (
      <Button key={text} {...props} {...buttonsProps}>
        {text}
      </Button>
    ));
    const story = (
      <Grid>
        <Form inline>
          {formFields} {formButtons}
        </Form>
      </Grid>
    );

    return inlineTemplate({
      title: 'Inline Form',
      documentationLink: `${DOCUMENTATION_URL.PATTERNFLY_ORG_WIDGETS}#forms`,
      reactBootstrapDocumentationLink: `${DOCUMENTATION_URL.REACT_BOOTSTRAP_COMPONENT}forms/`,
      story
    });
  })
);

stories.add(
  'Horizontal Form',
  withInfo()(() => {
    const formFieldsKnobs = getBasicFormKnobs();
    const { bsSize, disabled } = formFieldsKnobs;
    const buttonsProps = {};

    if (bsSize) buttonsProps.bsSize = bsSize;
    if (disabled) buttonsProps.disabled = disabled;

    const showLoading = boolean('Show Loading', false);
    const formFields = BasicFormFields.map(formField => HorizontalFormField({ ...formField, ...formFieldsKnobs }));
    const formButtons = BasicFormButtons.map(({ text, ...props }) => (
      <span key={text}>
        <Button {...props} {...buttonsProps}>
          {text}
        </Button>{' '}
      </span>
    ));
    const story = (
      <Grid>
        <Form horizontal>
          {formFields}
          <Row style={{ paddingTop: '10px', paddingBottom: '10px' }}>
            <Col smOffset={3} sm={9}>
              {formButtons}
            </Col>
          </Row>
          {showLoading && (
            <Row style={{ paddingTop: '10px', paddingBottom: '10px' }}>
              <Col smOffset={3} sm={9}>
                {[...BasicFormSpinner]}
              </Col>
            </Row>
          )}
        </Form>
      </Grid>
    );

    return inlineTemplate({
      title: 'Horizontal Form',
      documentationLink: `${DOCUMENTATION_URL.PATTERNFLY_ORG_WIDGETS}#forms`,
      reactBootstrapDocumentationLink: `${DOCUMENTATION_URL.REACT_BOOTSTRAP_COMPONENT}forms/`,
      story
    });
  })
);

stories.add(
  'Vertical Form',
  withInfo()(() => {
    const formFieldsKnobs = getBasicFormKnobs();
    const { bsSize, disabled } = formFieldsKnobs;
    const buttonsProps = {};

    if (bsSize) buttonsProps.bsSize = bsSize;
    if (disabled) buttonsProps.disabled = disabled;

    const showLoading = boolean('Show Loading', false);
    const formFields = BasicFormFields.map(formField => VerticalFormField({ ...formField, ...formFieldsKnobs }));
    const formButtons = BasicFormButtons.map(({ text, ...props }) => (
      <span key={text}>
        <Button {...props} {...buttonsProps}>
          {text}
        </Button>{' '}
      </span>
    ));
    const story = (
      <Grid>
        <Form>
          <Row>
            <Col>{formFields}</Col>
          </Row>
          <Row style={{ paddingTop: '10px', paddingBottom: '10px' }}>
            <Col>{formButtons}</Col>
          </Row>
          {showLoading && (
            <Row style={{ paddingTop: '10px', paddingBottom: '10px' }}>
              <Col>{BasicFormSpinner}</Col>
            </Row>
          )}
        </Form>
      </Grid>
    );

    return inlineTemplate({
      title: 'Vertical Form',
      documentationLink: `${DOCUMENTATION_URL.PATTERNFLY_ORG_WIDGETS}#forms`,
      reactBootstrapDocumentationLink: `${DOCUMENTATION_URL.REACT_BOOTSTRAP_COMPONENT}forms/`,
      story
    });
  })
);

stories.add(
  'Modal Form',
  withInfo()(() => {
    const formFieldsKnobs = getBasicFormKnobs();
    const { bsSize, disabled } = formFieldsKnobs;
    const buttonsProps = {};

    if (bsSize) buttonsProps.bsSize = bsSize;
    if (disabled) buttonsProps.disabled = disabled;

    const showModal = boolean('Show Modal', true);
    const showLoading = boolean('Show Loading', false);
    const formFields = BasicFormFields.map(formField => HorizontalFormField({ ...formField, ...formFieldsKnobs }));
    const formButtons = BasicFormButtons.map(({ text, ...props }) => (
      <Button key={text} {...props} {...buttonsProps}>
        {text}
      </Button>
    )).reverse();
    const formSpinner = (
      <div style={{ paddingTop: '20px', paddingBottom: '10px' }}>{[...BasicFormSpinner].reverse()}</div>
    );
    const story = (
      <Modal show={showModal}>
        <Modal.Header>
          <button className="close" onClick={action('Close')} aria-hidden="true" aria-label="Close">
            <Icon type="pf" name="close" />
          </button>
          <Modal.Title>Basic Settings</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form horizontal>{formFields}</Form>
        </Modal.Body>
        <Modal.Footer>
          {formButtons}
          {showLoading && formSpinner}
        </Modal.Footer>
      </Modal>
    );

    return inlineTemplate({
      title: 'Modal Form',
      documentationLink: `${DOCUMENTATION_URL.PATTERNFLY_ORG_WIDGETS}#forms`,
      reactBootstrapDocumentationLink: `${DOCUMENTATION_URL.REACT_BOOTSTRAP_COMPONENT}forms/`,
      story
    });
  })
);

stories.add(
  'Supported Controls',
  withInfo()(() => {
    const formFieldsKnobs = getSupportedControlsFormKnobs();
    const formFields = SupportedControlsFormFields.map(formField =>
      VerticalFormField({ ...formField, ...formFieldsKnobs })
    );
    const story = (
      <Grid>
        <Form>{formFields}</Form>
      </Grid>
    );

    return inlineTemplate({
      title: 'Supported Controls',
      documentationLink: `${DOCUMENTATION_URL.PATTERNFLY_ORG_WIDGETS}#forms`,
      reactBootstrapDocumentationLink: `${DOCUMENTATION_URL.REACT_BOOTSTRAP_COMPONENT}forms/`,
      story
    });
  })
);

stories.add(
  'Input Groups',
  withInfo()(() => {
    const formFieldsKnobs = getInputGroupsFormKnobs();
    const formFields = InputGroupsFormFields.map(formField => VerticalFormField({ ...formField, ...formFieldsKnobs }));
    const story = (
      <Grid>
        <Form>
          <Row>
            <Col>{formFields}</Col>
          </Row>
        </Form>
      </Grid>
    );

    return inlineTemplate({
      title: 'Input Groups',
      documentationLink: `${DOCUMENTATION_URL.PATTERNFLY_ORG_WIDGETS}#forms`,
      reactBootstrapDocumentationLink: `${DOCUMENTATION_URL.REACT_BOOTSTRAP_COMPONENT}forms/`,
      story
    });
  })
);
