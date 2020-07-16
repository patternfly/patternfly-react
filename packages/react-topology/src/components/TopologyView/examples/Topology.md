---
id: Topology view
section: components
---

Note: Topology lives in its own package at [`@patternfly/react-topology`](https://www.npmjs.com/package/@patternfly/react-topology)

import { ExternalLinkAltIcon, FilmIcon, GlassCheersIcon } from '@patternfly/react-icons';
import { TopologyView, TopologyControlBar, createTopologyControlButtons, TopologySideBar } from '@patternfly/react-topology';
import { ProjectToolbar } from './ProjectToolbar';
import { ViewToolbar } from './ViewToolbar';
import { ItemDetails } from './ItemDetails';
import './topology-example.css';

## Examples
```js title=Default-controls
import React from 'react';
import { TopologyView, TopologyControlBar, createTopologyControlButtons, TopologySideBar } from '@patternfly/react-topology';
import { ProjectToolbar } from './ProjectToolbar';
import { ViewToolbar } from './ViewToolbar';
import { ItemDetails } from './ItemDetails';

class DefaultTopologyView extends React.Component {
  constructor(props) {
    super(props);

    this.state = { detailsShown: false };
  }

  render() {
    const { detailsShown } = this.state;
    const controlButtons = createTopologyControlButtons();
    const sideBar = <ItemDetails show={detailsShown} onClose={() => this.setState({ detailsShown: false })} />;

    return (
      <TopologyView 
        contextToolbar={<ProjectToolbar />}
        viewToolbar={<ViewToolbar />}
        controlBar={<TopologyControlBar controlButtons={controlButtons} />}
        sideBar={sideBar}
        sideBarOpen={detailsShown}
      >
        <button onClick={() => this.setState({ detailsShown: !detailsShown })}>
          {detailsShown ? 'Hide Details' : 'Show Details'}
        </button>
      </TopologyView>
    );
  }
}
```

```js title=Selected-controls
import React from 'react';
import { TopologyView, TopologyControlBar, createTopologyControlButtons } from '@patternfly/react-topology';
import { ItemDetails } from './ItemDetails';
import { ViewToolbar } from './ViewToolbar';

class SelectedTopologyView extends React.Component {
  constructor(props) {
    super(props);

    this.state = { detailsShown: false };
  }

  render() {
    const { detailsShown } = this.state;
    const sideBar = <ItemDetails show={detailsShown} onClose={() => this.setState({ detailsShown: false })} />;
    const controlButtons = createTopologyControlButtons({ fitToScreen: false, legend: false });

    return (
      <TopologyView
        viewToolbar={<ViewToolbar />}
        controlBar={<TopologyControlBar controlButtons={controlButtons} />}
        sideBar={sideBar}
        sideBarOpen={detailsShown}
      >
        <button onClick={() => this.setState({ detailsShown: !detailsShown })}>
          {detailsShown ? 'Hide Details' : 'Show Details'}
        </button>
      </TopologyView>
    );
  }
}
```

```js title=Custom-controls
import React from 'react';
import { ExternalLinkAltIcon, FilmIcon, GlassCheersIcon } from '@patternfly/react-icons';
import { TopologyView, TopologyControlBar, createTopologyControlButtons } from '@patternfly/react-topology';
import { ItemDetails } from './ItemDetails';
import { ViewToolbar } from './ViewToolbar';

class CustomTopologyView extends React.Component {
  constructor(props) {
    super(props);

    this.state = { detailsShown: false };
  }

  render() {
    const { detailsShown } = this.state;
    const sideBar = <ItemDetails show={detailsShown} onClose={() => this.setState({ detailsShown: false })} />;
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
      <TopologyView
        viewToolbar={<ViewToolbar />}
        controlBar={<TopologyControlBar controlButtons={controlButtons} />}
        sideBar={sideBar}
        sideBarOpen={detailsShown}
      >
        <button onClick={() => this.setState({ detailsShown: !detailsShown })}>
          {detailsShown ? 'Hide Details' : 'Show Details'}
        </button>
      </TopologyView>
    );
  }
}
```
