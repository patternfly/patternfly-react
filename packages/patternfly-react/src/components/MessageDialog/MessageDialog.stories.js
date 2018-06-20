import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info/dist/index';
import { withKnobs } from '@storybook/addon-knobs';
import { defaultTemplate } from 'storybook/decorators/storyTemplates';

import {
  storybookPackageName,
  STORYBOOK_CATEGORY
} from 'storybook/constants/siteConstants';
import { name } from '../../../package.json';

import MessageDialog from './MessageDialog';

import MessageDialogToggleableOptions, {
  MessageDialogToggleableOptionsSource
} from './Stories/MessageDialogToggleableOptions';
import MessageDialogNondestructiveAction, {
  MessageDialogNondestructiveActionSource
} from './Stories/MessageDialogNondestructiveAction';
import MessageDialogError, {
  MessageDialogErrorSource
} from './Stories/MessageDialogError';
import MessageDialogDeleteConfirmation, {
  MessageDialogDeleteConfirmationSource
} from './Stories/MessageDialogDeleteConfirmation';
import MessageDialogWarning, {
  MessageDialogWarningSource
} from './Stories/MessageDialogWarning';
import MessageDialogQuestion, {
  MessageDialogQuestionSource
} from './Stories/MessageDialogQuestion';
import MessageDialogInfo, {
  MessageDialogInfoSource
} from './Stories/MessageDialogInfo';
import MessageDialogSuccess, {
  MessageDialogSuccessSource
} from './Stories/MessageDialogSuccess';

const stories = storiesOf(
  `${storybookPackageName(name)}/${
    STORYBOOK_CATEGORY.COMMUNICATION
  }/Message Dialog`,
  module
);
stories.addDecorator(withKnobs);
stories.addDecorator(
  defaultTemplate({
    title: 'MessageDialog'
  })
);

stories.add(
  'Message Dialog with Toggleable Options',
  withInfo({
    source: false,
    propTables: [MessageDialog],
    propTablesExclude: [MessageDialogToggleableOptions],
    text: (
      <div>
        <h1>Story Source</h1>
        <pre>{MessageDialogToggleableOptionsSource}</pre>
      </div>
    )
  })(() => <MessageDialogToggleableOptions />)
);

stories.add(
  'Nondestructive Action Dialog Example',
  withInfo({
    source: false,
    propTables: [MessageDialog],
    propTablesExclude: [MessageDialogNondestructiveAction],
    text: (
      <div>
        <h1>Story Source</h1>
        <pre>{MessageDialogNondestructiveActionSource}</pre>
      </div>
    )
  })(() => <MessageDialogNondestructiveAction />)
);

stories.add(
  'Error Dialog Example',
  withInfo({
    source: false,
    propTables: [MessageDialog],
    propTablesExclude: [MessageDialogError],
    text: (
      <div>
        <h1>Story Source</h1>
        <pre>{MessageDialogErrorSource}</pre>
      </div>
    )
  })(() => <MessageDialogError />)
);

stories.add(
  'Delete Confirmation Dialog Example',
  withInfo({
    source: false,
    propTables: [MessageDialog],
    propTablesExclude: [MessageDialogDeleteConfirmation],
    text: (
      <div>
        <h1>Story Source</h1>
        <pre>{MessageDialogDeleteConfirmationSource}</pre>
      </div>
    )
  })(() => <MessageDialogDeleteConfirmation />)
);

stories.add(
  'Warning Dialog Example',
  withInfo({
    source: false,
    propTables: [MessageDialog],
    propTablesExclude: [MessageDialogWarning],
    text: (
      <div>
        <h1>Story Source</h1>
        <pre>{MessageDialogWarningSource}</pre>
      </div>
    )
  })(() => <MessageDialogWarning />)
);

stories.add(
  'Question Dialog Example',
  withInfo({
    source: false,
    propTables: [MessageDialog],
    propTablesExclude: [MessageDialogQuestion],
    text: (
      <div>
        <h1>Story Source</h1>
        <pre>{MessageDialogQuestionSource}</pre>
      </div>
    )
  })(() => <MessageDialogQuestion />)
);

stories.add(
  'Info Dialog Example',
  withInfo({
    source: false,
    propTables: [MessageDialog],
    propTablesExclude: [MessageDialogInfo],
    text: (
      <div>
        <h1>Story Source</h1>
        <pre>{MessageDialogInfoSource}</pre>
      </div>
    )
  })(() => <MessageDialogInfo />)
);

stories.add(
  'Success Dialog Example',
  withInfo({
    source: false,
    propTables: [MessageDialog],
    propTablesExclude: [MessageDialogSuccess],
    text: (
      <div>
        <h1>Story Source</h1>
        <pre>{MessageDialogSuccessSource}</pre>
      </div>
    )
  })(() => <MessageDialogSuccess />)
);
