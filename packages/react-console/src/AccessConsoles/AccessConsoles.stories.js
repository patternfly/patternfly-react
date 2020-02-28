import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { inlineTemplate } from 'storybook/decorators/storyTemplates';
import { name } from '../../package.json';
import { storybookPackageName } from 'storybook/constants/siteConstants';

import { noop } from 'patternfly-react';
import { AccessConsoles, VncConsole } from '../index';
import { SerialConsoleConnector } from '../SerialConsole/SerialConsole.stories'; // contains mock backend
import constants from '../common/constants';

const { DISCONNECTED, SERIAL_CONSOLE_TYPE } = constants;

const stories = storiesOf(`${storybookPackageName(name)}/AccessConsoles`, module);

stories.add(
  'AccessConsoles',
  withInfo()(() => {
    const story = (
      <AccessConsoles>
        <SerialConsoleConnector onConnect={noop} onDisconnect={noop} status={DISCONNECTED} type={SERIAL_CONSOLE_TYPE} />
        <VncConsole
          host="foo.bar.host"
          textDisconnected="Disconnected as expected - VncConsole component is not connected to a real backend"
        />
      </AccessConsoles>
    );
    return inlineTemplate({
      story,
      title: 'AccessConsoles'
    });
  })
);

stories.add(
  'AccessConsoles - single',
  withInfo()(() => {
    const story = (
      <AccessConsoles preselectedType={SERIAL_CONSOLE_TYPE}>
        <SerialConsoleConnector onConnect={noop} onDisconnect={noop} status={DISCONNECTED} type={SERIAL_CONSOLE_TYPE} />
      </AccessConsoles>
    );
    return inlineTemplate({
      story,
      title: 'AccessConsoles - single'
    });
  })
);

stories.add(
  'AccessConsoles - empty',
  withInfo()(() => {
    const story = <AccessConsoles />;
    return inlineTemplate({
      story,
      title: 'AccessConsoles - empty'
    });
  })
);
