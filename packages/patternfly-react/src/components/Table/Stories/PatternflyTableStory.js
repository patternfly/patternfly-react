import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { Table } from '../index';
import { mockBootstrapRows } from '../__mocks__/mockBootstrapRows';
import { mockPatternflyColumns } from '../__mocks__/mockBootstrapColumns';
import { inlineTemplate } from 'storybook/decorators/storyTemplates';
import { DOCUMENTATION_URL } from 'storybook/constants/siteConstants';
import { reactabularDescription } from './tableStoryDescriptions';

/**
 * Patternfly Table stories
 */

const patternflyTable = stories => {
  stories.add(
    'PatternFly Table Styles',
    withInfo()(() => {
      const story = (
        <div>
          <h2>PatternFly recommendation: Bootstrap striped, bordered, hover, and responsive</h2>
          <Table.PfProvider striped bordered hover columns={mockPatternflyColumns}>
            <Table.Header />
            <Table.Body rows={mockBootstrapRows} rowKey="id" />
          </Table.PfProvider>
        </div>
      );
      return inlineTemplate({
        title: 'PatternFly Table Styles',
        documentationLink: `${DOCUMENTATION_URL.PATTERNFLY_ORG_CONTENT_VIEWS}table-view/`,
        story,
        description: reactabularDescription
      });
    })
  );
};

export default patternflyTable;
