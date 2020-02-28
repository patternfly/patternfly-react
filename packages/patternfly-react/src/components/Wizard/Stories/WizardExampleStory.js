import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { inlineTemplate } from 'storybook/decorators/storyTemplates';
import { DOCUMENTATION_URL } from 'storybook/constants/siteConstants';
import { Row, Col } from '../../../index';

import { WizardExample, wizardExampleSource } from './WizardExample';

import { mockWizardItems } from './mockWizardItems';

/**
 * WizardExample stories
 */

const wizardExampleWithInfo = stories => {
  stories.add(
    'Wizard',
    withInfo({
      source: false,
      propTablesExclude: [Row, Col, WizardExample],
      text: (
        <div>
          <h1>Story Source</h1>
          <pre>{wizardExampleSource}</pre>
        </div>
      )
    })(() => {
      const story = (
        <Row>
          <Col sm={12}>
            <WizardExample steps={mockWizardItems} />
          </Col>
        </Row>
      );
      return inlineTemplate({
        title: 'Wizard',
        description: 'The wizard example contains all base wizard components within a modal wizard.',
        documentationLink: `${DOCUMENTATION_URL.PATTERNFLY_ORG_COMMUNICATION}wizard/#overview`,
        story
      });
    })
  );
};

export default wizardExampleWithInfo;
