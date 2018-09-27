import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
// import { withInfo } from '@storybook/addon-info';
import { defaultTemplate } from 'storybook/decorators/storyTemplates';
import { storybookPackageName, DOCUMENTATION_URL, STORYBOOK_CATEGORY } from 'storybook/constants/siteConstants';
import { name } from '../../../package.json';
import { CopyToClipboard } from './index';

const CopyToClipboardStories = storiesOf(
  `${storybookPackageName(name)}/${STORYBOOK_CATEGORY.FORMS_AND_CONTROLS}/Copy To Clipboard`,
  module
);

const lorem = `Lorem ipsum dolor sit amet,
consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
commodo consequat. Duis aute irure dolor in reprehenderit
in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident,
sunt in culpa qui officia deserunt mollit anim id est laborum.
`;

CopyToClipboardStories.addDecorator(withKnobs);
CopyToClipboardStories.addDecorator(
  defaultTemplate({
    title: 'Copy to clipboard',
    documentationLink: `${DOCUMENTATION_URL.PATTERNFLY_ORG_FORMS}copy-to-clipboard`
  })
);

CopyToClipboardStories.addWithInfo('Copy to clipboard', () => (
  <CopyToClipboard delay={2000} copyText="Copy to clipboard" copiedText="Copied!" id="copy to clipboard example">
    {lorem.slice(0, 10)}
  </CopyToClipboard>
));

CopyToClipboardStories.addWithInfo('Copy to clipboard block bar', () => (
  <CopyToClipboard block delay={2000} copyText="Copy to clipboard" copiedText="Copied!" id="copy to clipboard example">
    {lorem}
  </CopyToClipboard>
));

/*
CopyToClipboardStories.addWithInfo('Copy to clipboard block bar', () => (
  <div style={{ width: '50%' }}>
    <CopyToClipboardBlockBar
      isShown={boolean('show', false)}
      isCopied={boolean('copied', false)}
      onCopy={action('text was copied')}
      onClick={action('show item')}
      copiedText={text('tooltip text on copy', 'Copied!')}
      copyText={text('tooltip text before copy', 'Copy to clipboard')}
      id="inline copy to clipboard bar example"
      ref={() => {}}
    >
      {text('value', lorem)}
    </CopyToClipboardBlockBar>
  </div>
));

CopyToClipboardStories.add(
  'Copy to clipboard container',
  withInfo({
    propTablesExclude: [Form.FormGroup]
  })(() => (
    <div style={{ width: '40%' }}>
      <Form.FormGroup>
        <CopyToClipboard id="copy to clipboard example" delay={number('delay', 2000)} block={boolean('block mode', false)}>
          {lorem}
        </CopyToClipboard>
      </Form.FormGroup>
    </div>
  ))
);
*/
