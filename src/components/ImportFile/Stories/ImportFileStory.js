import React from 'react';
import { inlineTemplate } from '../../../../storybook/decorators/storyTemplates';
import { DOCUMENTATION_URL } from '../../../../storybook/constants';
import { ImportFile } from '../index';
import { Grid } from '../../Grid';

const ImportFileStory = stories => {
  stories.addWithInfo('ImportFile', '', () => {
    const story = (
      <Grid>
        <Grid.Row style={{ marginBottom: '20px', marginTop: '20px' }}>
          <Grid.Col xs={12} sm={9} md={9}>
            <ImportFile
              maxSize={10485760}
              maxAmount={3}
              acceptedTypes="image/jpeg, image/png"
            />
          </Grid.Col>
        </Grid.Row>
      </Grid>
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
