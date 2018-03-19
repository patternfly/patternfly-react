import React from 'react';
import { inlineTemplate } from '../../../../storybook/decorators/storyTemplates';
import { DOCUMENTATION_URL } from '../../../../storybook/constants';
import { ImportFile } from '../index';

const ImportFileStory = stories => {
  stories.addWithInfo('ImportFile', '', () => {
    const story = (
      <div>
        <h1> Drag and Drop here!</h1>
        <ImportFile drag>
          <h2>test</h2>
        </ImportFile>
      </div>
    );
    return inlineTemplate({
      title: 'DragNDrop Import File',
      documentationLink: `${
        DOCUMENTATION_URL.PATTERNFLY_ORG_CARDS
      }base-card/#code`,
      story
    });
  });
};

export default ImportFileStory;
