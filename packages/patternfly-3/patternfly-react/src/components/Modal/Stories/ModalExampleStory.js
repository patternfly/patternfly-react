import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { inlineTemplate } from 'storybook/decorators/storyTemplates';
import { DOCUMENTATION_URL } from 'storybook/constants/siteConstants';

import { MockModalManager, basicExampleSource } from '../__mocks__/mockModalManager';
import { Modal } from '../../../index';

const modalExampleWithInfo = stories => {
  stories.addDecorator(withKnobs);

  const description = (
    <div>
      Adding the class <b>right-side-modal-pf</b> will show the modal on the right side of the window.
    </div>
  );

  stories.add(
    'Modal',
    withInfo({
      source: false,
      propTables: [Modal, Modal.CloseButton, Modal.Header, Modal.Body, Modal.Footer],
      propTablesExclude: [MockModalManager],
      text: (
        <div>
          <h1>Story Source</h1>
          <pre>{basicExampleSource}</pre>
        </div>
      )
    })(() => {
      const rightSide = boolean('Right Side', false);
      const story = <MockModalManager rightSide={rightSide} />;
      return inlineTemplate({
        title: 'Modal Example',
        documentationLink: `${DOCUMENTATION_URL.PATTERNFLY_ORG_FORMS}modal-overlay/`,
        reactBootstrapDocumentationLink: `${DOCUMENTATION_URL.REACT_BOOTSTRAP_COMPONENT}modal/`,
        description,
        story
      });
    })
  );
};

export default modalExampleWithInfo;
