import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { inlineTemplate } from 'storybook/decorators/storyTemplates';
import { DOCUMENTATION_URL } from 'storybook/constants/siteConstants';
import { Row, Col } from '../../../index';

import { LoadingWizardExample, loadingWizardExampleSource } from './LoadingWizardExample';

import { mockWizardItems } from './mockWizardItems';

/**
 * LoadWizardExample stories
 */

const loadingWizardExampleWithInfo = stories => {
  stories.add(
    'Loading wizard',
    withInfo({
      source: false,
      propTablesExclude: [Row, Col, LoadingWizardExample],
      text: (
        <div>
          <h1>Story Source</h1>
          <pre>{loadingWizardExampleSource}</pre>
        </div>
      )
    })(() => {
      const story = (
        <Row>
          <Col sm={12}>
            <LoadingWizardExample steps={mockWizardItems} />
          </Col>
        </Row>
      );
      return inlineTemplate({
        title: 'Loading Wizard',
        description: 'The loading wizard shows loading wizard contents within a wizard.',
        documentationLink: `${DOCUMENTATION_URL.PATTERNFLY_ORG_COMMUNICATION}wizard/#design`,
        story
      });
    })
  );
};

export default loadingWizardExampleWithInfo;
