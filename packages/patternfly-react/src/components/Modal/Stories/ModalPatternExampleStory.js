import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { inlineTemplate } from 'storybook/decorators/storyTemplates';
import { DOCUMENTATION_URL } from 'storybook/constants/siteConstants';
import { Row, Col } from '../../../index';

import { ModalPatternExample, modalPatternExampleSource } from './ModalPatternExample';

/**
 * Modal Pattern stories
 */

const description = (
  <div>
    The modal pattern example contains <i>ModalPattern</i> and <i>StatefulModalPattern</i>
    pattern components.
    <br />
    <br />
    The <i>ModalPattern</i> is a <b>stateless</b> modal pattern which brings the smaller modal related components
    together into a logical higher level component. Modal content is provided via <i>children</i> prop and footer
    content (typically modal buttons) via <i>footer</i> prop.
    <br />
    <br />
    The <i>StatefulModalPattern</i> is a <b>stateful</b> modal pattern which will automatically manage the <i>show</i>
    parameter through component state. This can be overridden by passing <i>show</i> as a prop. It also defines
    <i>open</i> and <i>close</i> methods on the component instance.
  </div>
);
const documentationLink = `${DOCUMENTATION_URL.PATTERNFLY_ORG_WIDGETS}#modal`;

const modalPatternExampleAddWithInfo = stories => {
  stories.addDecorator(withKnobs);

  stories.add(
    'Stateless ModalPattern Example',
    withInfo({
      source: false,
      propTablesExclude: [Row, Col, ModalPatternExample],
      text: (
        <div>
          <h1>Story Source</h1>
          <pre>{modalPatternExampleSource}</pre>
        </div>
      )
    })(() => {
      const story = (
        <Row>
          <Col sm={12}>
            <ModalPatternExample />
          </Col>
        </Row>
      );
      return inlineTemplate({
        title: 'Stateless ModalPattern Example',
        description,
        documentationLink,
        story
      });
    })
  );

  stories.add(
    'Stateful ModalPattern Example',
    withInfo({
      source: false,
      propTablesExclude: [Row, Col, ModalPatternExample],
      text: (
        <div>
          <h1>Story Source</h1>
          <pre>{modalPatternExampleSource}</pre>
        </div>
      )
    })(() => {
      const story = (
        <Row>
          <Col sm={12}>
            <ModalPatternExample stateful />
          </Col>
        </Row>
      );
      return inlineTemplate({
        title: 'Stateful ModalPattern Example',
        description,
        documentationLink,
        story
      });
    })
  );
};

export default modalPatternExampleAddWithInfo;
