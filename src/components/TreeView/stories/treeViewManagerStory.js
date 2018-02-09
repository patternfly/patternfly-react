import React from 'react';
import template from './treeViewStoryDescriptionTemplate';

import MockTreeViewManager from '../__mocks__/MockTreeViewManager';

const description = (
  <div>
    <h3>Notes</h3>
    <ul>
      <li>
        Add Mappings simulates a scenario where a user has set up two mappings
      </li>
      <li>
        <a href="https://github.com/patternfly/patternfly/blob/master/src/sass/converted/patternfly/_bootstrap-treeview.scss#L74-L88">
          Styles for selected and hover states
        </a>{' '}
        may need adjustment in order to control highlighting and cursor of
        unselectable elements
      </li>
    </ul>
  </div>
);

const treeViewManagerStory = stories => {
  stories.addWithInfo('Mock TreeView Manager', '', () => {
    const story = <MockTreeViewManager />;

    return template('Mock TreeView Manager', story, description);
  });
};

export default treeViewManagerStory;
