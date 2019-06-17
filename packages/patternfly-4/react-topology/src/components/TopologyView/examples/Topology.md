---
title: 'TopologyView'
---

Note: Topology lives in its own package at [`@patternfly/react-topology`](https://www.npmjs.com/package/@patternfly/react-topology)

import { ExternalLinkAltIcon, FilmIcon, GlassCheersIcon } from '@patternfly/react-icons';
import { TopologyView, TopologyControlBar, createTopologyControlButtons } from '@patternfly/react-topology';
import { ProjectToolbar } from './ProjectToolbar';
import { ViewToolbar } from './ViewToolbar';
import './topology-example.scss';

## TopologyView - Default Controls

```js
import React from 'react';
import { TopologyView, TopologyControlBar, createTopologyControlButtons } from '@patternfly/react-topology';
import { ProjectToolbar } from './ProjectToolbar';
import { ViewToolbar } from './ViewToolbar';

class DefaultTopologyView extends React.Component {

  render() {
    const controlButtons = createTopologyControlButtons();

    return (
      <div className="topology-example">
        <TopologyView
          contextToolbar={<ProjectToolbar />}
          viewToolbar={<ViewToolbar />}
          controlBar={<TopologyControlBar controlButtons={controlButtons} />}
        >
          <div>CANVAS</div>
        </TopologyView>
      </div>
    );
  }
}
```

## TopologyView - Selected Controls

```js
import React from 'react';
import { TopologyView, TopologyControlBar, createTopologyControlButtons } from '@patternfly/react-topology';
import { ViewToolbar } from './ViewToolbar';

class SelectedTopologyView extends React.Component {

  render() {
    const controlButtons = createTopologyControlButtons({ fitToScreen: false, legend: false });

    return (
      <div className="topology-example">
        <TopologyView
          viewToolbar={<ViewToolbar />}
          controlBar={<TopologyControlBar controlButtons={controlButtons} />}
        >
          <div>CANVAS</div>
        </TopologyView>
      </div>
    );
  }
}
```

## TopologyView - Custom Controls

```js
import React from 'react';
import { ExternalLinkAltIcon, FilmIcon, GlassCheersIcon } from '@patternfly/react-icons';
import { TopologyView, TopologyControlBar, createTopologyControlButtons } from '@patternfly/react-topology';
import { ViewToolbar } from './ViewToolbar';

class CustomTopologyView extends React.Component {

  render() {
    const customButtons = [
      {
        id: 'custom-1',
        icon: <ExternalLinkAltIcon />,
        tooltip: 'External Link',
        ariaLabel: 'external link',
        callback: null,
        disabled: true,
        hidden: false
      },
      {
        id: 'custom-2',
        icon: <FilmIcon />,
        tooltip: 'Watch',
        ariaLabel: 'watch',
        callback: null,
        disabled: false,
        hidden: false
      },
      {
        id: 'custom-3',
        icon: <GlassCheersIcon />,
        tooltip: 'Cheers',
        ariaLabel: 'cheers',
        callback: null,
        disabled: false,
        hidden: true
      },
    ]
    const controlButtons = createTopologyControlButtons({ fitToScreen: false, customButtons});

    return (
      <div className="topology-example">
        <TopologyView
          viewToolbar={<ViewToolbar />}
          controlBar={<TopologyControlBar controlButtons={controlButtons} />}
        >
          <div>CANVAS</div>
        </TopologyView>
      </div>
    );
  }
}
```
