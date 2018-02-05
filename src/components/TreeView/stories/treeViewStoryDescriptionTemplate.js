import { inlineTemplate } from '../../../../storybook/decorators/storyTemplates';
import { DOCUMENTATION_URL } from '../../../../storybook/constants';

const template = (title, story, description = '') => {
  return inlineTemplate({
    title: title,
    documentationLink:
      DOCUMENTATION_URL.PATTERNFLY_ORG_WIDGETS + '#bootstrap-tree-view',
    story: story,
    description: description
  });
};

export default template;
