import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { inlineTemplate } from 'storybook/decorators/storyTemplates';
import { name } from '../../package.json';
import { storybookPackageName } from 'storybook/constants/siteConstants';

import { DesktopViewer } from './index';

const stories = storiesOf(`${storybookPackageName(name)}/DesktopViewer`, module);

stories.add(
  'DesktopViewer',
  withInfo()(() => {
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

    const story = <DesktopViewer spice={spice} vnc={vnc} />;
    return inlineTemplate({
      story,
      title: 'DesktopViewer'
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

    const story = (
      <DesktopViewer spice={spice} vnc={vnc}>
        {' '}
        <div>
          Congratulations! You can provide whatever <b>custom installation instructions</b> here.
        </div>
      </DesktopViewer>
    );
    return inlineTemplate({
      story,
      title: 'DesktopViewer - custom instructions'
    });
  })
);
