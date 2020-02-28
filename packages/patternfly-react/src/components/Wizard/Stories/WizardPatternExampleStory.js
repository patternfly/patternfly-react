import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { inlineTemplate } from 'storybook/decorators/storyTemplates';
import { DOCUMENTATION_URL } from 'storybook/constants/siteConstants';
import { Row, Col } from '../../../index';

import { WizardPatternExample, wizardPatternExampleSource } from './WizardPatternExample';

/**
 * Wizard Pattern stories
 */

const description = (
  <div>
    The wizard pattern example contains <i>WizardPattern</i> and
    <i>StatefulWizardPattern</i> pattern components.
    <br />
    <br />
    The <i>WizardPattern</i> is a <b>stateless</b> wizard pattern which provides loading contents and some common step
    handling logic for the provided steps.
    <br />
    <br />
    The <i>StatefulWizardPattern</i> is a <b>stateful</b> wizard pattern which provides loading contents, step handling
    logic, and will automatically manage the <i>activeStepIndex</i> for the provided steps. This can be overriden by
    passing <i>activeStepIndex</i> as a prop.
  </div>
);
const documentationLink = `${DOCUMENTATION_URL.PATTERNFLY_ORG_COMMUNICATION}wizard/#overview`;

const wizardPatternExampleAddWithInfo = stories => {
  stories.addDecorator(withKnobs);

  stories.add(
    'Stateless WizardPattern Example',
    withInfo({
      source: false,
      propTablesExclude: [Row, Col, WizardPatternExample],
      text: (
        <div>
          <h1>Story Source</h1>
          <pre>{wizardPatternExampleSource}</pre>
        </div>
      )
    })(() => {
      const story = (
        <Row>
          <Col sm={12}>
            <WizardPatternExample />
          </Col>
        </Row>
      );
      return inlineTemplate({
        title: 'Stateless WizardPattern Example',
        description,
        documentationLink,
        story
      });
    })
  );

  stories.add(
    'Stateful WizardPattern Example',
    withInfo({
      source: false,
      propTablesExclude: [Row, Col, WizardPatternExample],
      text: (
        <div>
          <h1>Story Source</h1>
          <pre>{wizardPatternExampleSource}</pre>
        </div>
      )
    })(() => {
      const story = (
        <Row>
          <Col sm={12}>
            <WizardPatternExample stateful />
          </Col>
        </Row>
      );
      return inlineTemplate({
        title: 'Stateful WizardPattern Example',
        description,
        documentationLink,
        story
      });
    })
  );
};

export default wizardPatternExampleAddWithInfo;
