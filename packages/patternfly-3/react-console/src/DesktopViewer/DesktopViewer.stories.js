import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { inlineTemplate } from 'storybook/decorators/storyTemplates';
import { name } from '../../package.json';
import { storybookPackageName } from 'storybook/constants/siteConstants';

import { DesktopViewer } from './index';

const stories = storiesOf(`${storybookPackageName(name)}/DesktopViewer`, module);

const spice = {
  address: 'my.host.com',
  port: 5900,
  tlsPort: '5901'
};
const vnc = {
  address: 'my.host.com',
  port: 5902,
  tlsPort: '5903'
};
const rdp = {
  address: 'my.host.com',
  port: 3389
};

stories.add(
  'DesktopViewer - SPICE and VNC',
  withInfo()(() => {
    const story = <DesktopViewer spice={spice} vnc={vnc} />;
    return inlineTemplate({
      story,
      title: 'DesktopViewer  - SPICE and VNC'
    });
  })
);

stories.add(
  'DesktopViewer - all',
  withInfo()(() => {
    const story = <DesktopViewer spice={spice} vnc={vnc} rdp={rdp} />;
    return inlineTemplate({
      story,
      title: 'DesktopViewer - all'
    });
  })
);

stories.add(
  'DesktopViewer - RDP only',
  withInfo()(() => {
    const story = (
      <DesktopViewer rdp={rdp}>
        <div />
        <div>
          Custom instructions for running an RDP client application. For default content, please see the{' '}
          <i>DesktopViewer - all</i> storybook.
        </div>
      </DesktopViewer>
    );
    return inlineTemplate({
      story,
      title: 'DesktopViewer - RDP only'
    });
  })
);

stories.add(
  'DesktopViewer - empty',
  withInfo()(() => {
    const story = <DesktopViewer />;
    return inlineTemplate({
      story,
      title: 'DesktopViewer - empty'
    });
  })
);

stories.add(
  'DesktopViewer - custom instructions',
  withInfo()(() => {
    const story = (
      <DesktopViewer spice={spice} vnc={vnc} rdp={rdp}>
        <div>
          Congratulations! You can provide whatever <b>custom installation instructions</b> here.
        </div>
        <div>Same as for RDP.</div>
      </DesktopViewer>
    );
    return inlineTemplate({
      story,
      title: 'DesktopViewer - custom instructions'
    });
  })
);
