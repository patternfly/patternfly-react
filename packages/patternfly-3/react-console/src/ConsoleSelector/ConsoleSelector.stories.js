import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { inlineTemplate } from 'storybook/decorators/storyTemplates';
import { name } from '../../package.json';
import { storybookPackageName } from 'storybook/constants/siteConstants';

import { noop } from 'patternfly-react';
import { ConsoleSelector, VncConsole } from '../index';
import { SerialConsoleConnector } from '../SerialConsole/SerialConsole.stories'; // contains mock backend
import { DISCONNECTED } from '../SerialConsole/constants';
import { SERIAL_CONSOLE_TYPE } from '../common/constants';

const stories = storiesOf(`${storybookPackageName(name)}/ConsoleSelector`, module);

stories.add(
  'ConsoleSelector',
  withInfo()(() => {
    const story = (
      <ConsoleSelector>
        <SerialConsoleConnector onConnect={noop} onDisconnect={noop} status={DISCONNECTED} type={SERIAL_CONSOLE_TYPE} />
        <VncConsole
          host="foo.bar.host"
          textDisconnected="Disconnected as expected - VncConsole component is not connected to a real backend"
        />
      </ConsoleSelector>
    );
    return inlineTemplate({
      story,
      title: 'ConsoleSelector'
    });
  })
);

stories.add(
  'ConsoleSelector - empty',
  withInfo()(() => {
    const story = <ConsoleSelector />;
    return inlineTemplate({
      story,
      title: 'ConsoleSelector - empty'
    });
  })
);
