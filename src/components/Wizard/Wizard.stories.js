import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Row, Col } from 'react-bootstrap';
import { withKnobs } from '@storybook/addon-knobs';
import { defaultTemplate } from '../../../storybook/decorators/storyTemplates';
import { DOCUMENTATION_URL } from '../../../storybook/constants';
import { mockWizardItems } from './__mocks__/mockWizardItems';

import {
  MockLoadingWizardManager,
  mockLoadingWizardSource
} from './__mocks__/mockLoadingWizardManager';

import {
  MockModalWizardManager,
  mockModalWizardSource
} from './__mocks__/mockModalWizardManager';

// import {
//   MockEmbeddedWizardManager,
//   mockEmbeddedWizardSource,
// } from './__mocks__/mockEmbeddedWizardManager';

const stories = storiesOf('Wizard', module);
stories.addDecorator(withKnobs);
stories.addDecorator(
  defaultTemplate({
    title: 'Wizard',
    documentationLink: `${
      DOCUMENTATION_URL.PATTERNFLY_ORG_COMMUNICATION
    }wizard/#/overview`
  })
);

stories.add(
  'Loading wizard',
  withInfo({
    source: false,
    propTablesExclude: [Row, Col, MockLoadingWizardManager],
    text: (
      <div>
        <h1>Story Source</h1>
        <pre>{mockLoadingWizardSource}</pre>
      </div>
    )
  })(() => (
    <Row>
      <Col sm={12}>
        <MockLoadingWizardManager steps={mockWizardItems} />
      </Col>
    </Row>
  ))
);

stories.add(
  'Modal wizard',
  withInfo({
    source: false,
    propTablesExclude: [Row, Col, MockModalWizardManager],
    text: (
      <div>
        <h1>Story Source</h1>
        <pre>{mockModalWizardSource}</pre>
      </div>
    )
  })(() => (
    <Row>
      <Col sm={12}>
        <MockModalWizardManager steps={mockWizardItems} />
      </Col>
    </Row>
  ))
);

/**
 * Embedded Wizard will be finalized in a subsequent PR.
 *
 * Open PF Core issues:
 * https://github.com/patternfly/patternfly/issues/869
 * https://github.com/patternfly/patternfly/issues/841
 */
// stories.add(
//   'Embedded in page',
//   withInfo({
//     source: false,
//     propTablesExclude: [Row, Col, MockEmbeddedWizardManager],
//     text: (
//       <div>
//         <h1>Story Source</h1>
//         <pre>{mockEmbeddedWizardSource}</pre>
//       </div>
//     ),
//   })(() => (
//     <Row>
//       <Col sm={12}>
//         <MockEmbeddedWizardManager steps={mockWizardItems} />
//       </Col>
//     </Row>
//   )),
// );
