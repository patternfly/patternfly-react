import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, select } from '@storybook/addon-knobs'
import { defaultTemplate } from '../../storybook/decorators/storyTemplates'
import {
  Button,
  MenuItem,
  Tabs,
  Tab,
  TabContent,
  TabDropdown,
  TabRowContents
} from '../index.js'

const stories = storiesOf('Tabs', module)
stories.addDecorator(withKnobs)

const description = (
  <p>
    This component is based on the Bootstrap Tabs component. See{' '}
    <a href="https://getbootstrap.com/docs/3.3/components/#nav-tabs">
      Bootstrap Docs
    </a>{' '}
    for complete Tabs component documentation.
  </p>
)

stories.addDecorator(
  defaultTemplate({
    title: 'Tabs',
    description: description,
    documentationLink: 'http://www.patternfly.org/pattern-library/widgets/#tabs'
  })
)

stories.addWithInfo('Tabs', '', () => {
  const tabsActiveKey = select(
    'Tabs Active Tab',
    ['1', '2', '3', '4', '4.1', '4.2', '4.3', '4.4'],
    '1'
  )
  const justifiedActiveKey = select(
    'Justified Active Tab',
    ['1', '2', '3', '4', '4.1', '4.2', '4.3', '4.4'],
    '1'
  )
  const tabContentStyle = { padding: 15, fontSize: 14 }
  const tabRowButtonStyle = { marginLeft: 5 }
  return (
    <div>
      <Tabs activeKey={tabsActiveKey} onSelect={action('onSelect')}>
        <Tab eventKey="1" href="/home" aria-controls="contents-one">
          Tab One
        </Tab>
        <Tab eventKey="2" title="Item" aria-controls="contents-two">
          <span>Tab Two</span> <i className="fa fa-bell" />
        </Tab>
        <Tab eventKey="3" disabled aria-controls="contents-three">
          <span>Tab Three</span> <span className="badge">3</span>
        </Tab>
        <TabDropdown
          eventKey="4"
          title="Dropdown"
          id="nav-dropdown"
          aria-controls="contents-four"
        >
          <MenuItem eventKey="4.1">Action</MenuItem>
          <MenuItem eventKey="4.2">Another action</MenuItem>
          <MenuItem eventKey="4.3">Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="4.4">Separated link</MenuItem>
        </TabDropdown>
        <TabRowContents>
          <Button
            bsStyle="default"
            onClick={action('secondary clicked')}
            style={tabRowButtonStyle}
          >
            Secondary
          </Button>
          <Button
            bsStyle="primary"
            onClick={action('primary clicked')}
            style={tabRowButtonStyle}
          >
            Primary
          </Button>
          <Button
            bsStyle="danger"
            onClick={action('destructive clicked')}
            style={tabRowButtonStyle}
          >
            Destructive
          </Button>
        </TabRowContents>
      </Tabs>
      <TabContent
        activeKey={tabsActiveKey}
        eventKey="1"
        style={tabContentStyle}
        aria-labelledby="contents-one"
      >
        <p>tab one contents</p>
      </TabContent>
      <TabContent
        activeKey={tabsActiveKey}
        eventKey="2"
        style={tabContentStyle}
        aria-labelledby="contents-two"
      >
        <p>tab two contents</p>
      </TabContent>
      <TabContent
        activeKey={tabsActiveKey}
        eventKey="3"
        style={tabContentStyle}
        aria-labelledby="contents-three"
      >
        <p>tab three contents</p>
      </TabContent>
      <TabContent
        activeKey={tabsActiveKey}
        eventKey="4"
        style={tabContentStyle}
        aria-labelledby="contents-four"
      >
        <p>tab four contents</p>
      </TabContent>

      <br />
      <h3>Justified</h3>
      <Tabs
        justified
        activeKey={justifiedActiveKey}
        onSelect={action('onSelect')}
      >
        <Tab eventKey="1" href="/home" aria-controls="justified-one">
          Tab One
        </Tab>
        <Tab eventKey="2" title="Item" aria-controls="justified-two">
          Tab Two
        </Tab>
        <Tab eventKey="3" disabled aria-controls="justified-three">
          Tab Three
        </Tab>
        <TabDropdown
          eventKey="4"
          title="Dropdown"
          id="nav-dropdown"
          aria-controls="justified-four"
        >
          <MenuItem eventKey="4.1">Action</MenuItem>
          <MenuItem eventKey="4.2">Another action</MenuItem>
          <MenuItem eventKey="4.3">Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="4.4">Separated link</MenuItem>
        </TabDropdown>
      </Tabs>
      <TabContent
        activeKey={justifiedActiveKey}
        eventKey="1"
        style={tabContentStyle}
        aria-labelledby="justified-one"
      >
        <p>tab one contents</p>
      </TabContent>
      <TabContent
        activeKey={justifiedActiveKey}
        eventKey="2"
        style={tabContentStyle}
        aria-labelledby="justified-two"
      >
        <p>tab two contents</p>
      </TabContent>
      <TabContent
        activeKey={justifiedActiveKey}
        eventKey="3"
        style={tabContentStyle}
        aria-labelledby="justified-three"
      >
        <p>tab three contents</p>
      </TabContent>
      <TabContent
        activeKey={justifiedActiveKey}
        eventKey="4"
        style={tabContentStyle}
        aria-labelledby="justified-four"
      >
        <p>tab four contents</p>
      </TabContent>
      <br />
    </div>
  )
})

stories.addWithInfo('Patternfly Tabs', '', () =>
  <div>
    <Tabs pfStyle activeKey="1" onSelect={action('onSelect')}>
      <Tab eventKey="1" href="/home">
        Tab One
      </Tab>
      <Tab eventKey="2" title="Item">
        Tab Two
      </Tab>
      <Tab eventKey="3" disabled>
        Tab Three
      </Tab>
      <TabDropdown eventKey="4" title="Dropdown" id="nav-dropdown">
        <MenuItem eventKey="4.1">Action</MenuItem>
        <MenuItem eventKey="4.2">Another action</MenuItem>
        <MenuItem eventKey="4.3">Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey="4.4">Separated link</MenuItem>
      </TabDropdown>
    </Tabs>
    <br />
    <h3>Justified</h3>
    <Tabs pfStyle justified activeKey="1" onSelect={action('onSelect')}>
      <Tab eventKey="1" href="/home">
        Tab One
      </Tab>
      <Tab eventKey="2" title="Item">
        Tab Two
      </Tab>
      <Tab eventKey="3" disabled>
        Tab Three
      </Tab>
      <TabDropdown eventKey="4" title="Dropdown" id="nav-dropdown">
        <MenuItem eventKey="4.1">Action</MenuItem>
        <MenuItem eventKey="4.2">Another action</MenuItem>
        <MenuItem eventKey="4.3">Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey="4.4">Separated link</MenuItem>
      </TabDropdown>
    </Tabs>
    <br />
    <h3>Secondary Tabs</h3>
    <Tabs activeKey="1" onSelect={action('onSelect')}>
      <Tab eventKey="1" href="/home">
        Tab One
      </Tab>
      <Tab eventKey="2" title="Item">
        Tab Two
      </Tab>
      <Tab eventKey="3" disabled>
        Tab Three
      </Tab>
      <TabDropdown eventKey="4" title="Dropdown" id="nav-dropdown">
        <MenuItem eventKey="4.1">Action</MenuItem>
        <MenuItem eventKey="4.2">Another action</MenuItem>
        <MenuItem eventKey="4.3">Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey="4.4">Separated link</MenuItem>
      </TabDropdown>
    </Tabs>
    <Tabs pfStyle activeKey="1" onSelect={action('onSelect')}>
      <Tab eventKey="1" href="/home">
        Tab One
      </Tab>
      <Tab eventKey="2" title="Item">
        Tab Two
      </Tab>
      <Tab eventKey="3" disabled>
        Tab Three
      </Tab>
      <TabDropdown eventKey="4" title="Dropdown" id="nav-dropdown">
        <MenuItem eventKey="4.1">Action</MenuItem>
        <MenuItem eventKey="4.2">Another action</MenuItem>
        <MenuItem eventKey="4.3">Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey="4.4">Separated link</MenuItem>
      </TabDropdown>
    </Tabs>
    <br />
  </div>
)
