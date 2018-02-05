import React from 'react';
import template from './treeViewStoryDescriptionTemplate';

import TreeView from '../TreeView';
import { basicData } from '../__mocks__/data';

const basicTreeView = stories => {
  stories.addWithInfo('Basic TreeView', '', () => {
    const story = <TreeView data={basicData} />;

    return template('Basic TreeView', story);
  });
};

export default basicTreeView;
