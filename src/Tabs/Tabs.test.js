/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'

import {
  Button,
  MenuItem,
  Tabs,
  Tab,
  TabContent,
  TabDropdown,
  TabRowContents
} from '../index.js'

const tabContentStyle = { padding: 15, fontSize: 14 }

test('Tabs renders properly', () => {
  const tabsActiveKey = '1'
  const tabsOnSelect = jest.fn()
  const primaryClick = jest.fn()
  const secondaryClick = jest.fn()
  const destructClick = jest.fn()
  const tabRowButtonStyle = { marginLeft: 5 }

  const component = renderer.create(
    <div>
      <Tabs activeKey={tabsActiveKey} onSelect={tabsOnSelect}>
        <Tab eventKey="1" href="/home" aria-controls="contents-one">
          Tab One
        </Tab>
        <Tab eventKey="2" title="Item" aria-controls="contents-two">
          <span>Tab Two</span> <i className="fa fa-bell" />
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
            onClick={secondaryClick}
            style={tabRowButtonStyle}
          >
            Secondary
          </Button>
          <Button
            bsStyle="primary"
            onClick={primaryClick}
            style={tabRowButtonStyle}
          >
            Primary
          </Button>
          <Button
            bsStyle="danger"
            onClick={destructClick}
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
    </div>
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Justified Tabs renders properly', () => {
  const tabsOnSelect = jest.fn()
  const justifiedActiveKey = '1'
  const component = renderer.create(
    <div>
      <Tabs justified activeKey={justifiedActiveKey} onSelect={tabsOnSelect}>
        <Tab eventKey="1" href="/home" aria-controls="justified-one">
          Tab One
        </Tab>
        <Tab eventKey="2" title="Item" aria-controls="justified-two">
          Tab Two
        </Tab>
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
    </div>
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Patternfly Tabs renders properly', () => {
  const tabsOnSelect = jest.fn()
  const component = renderer.create(
    <Tabs pfStyle activeKey="1" onSelect={tabsOnSelect}>
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
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Patternfly Justified Tabs renders properly', () => {
  const tabsOnSelect = jest.fn()
  const component = renderer.create(
    <Tabs pfStyle justified activeKey="1" onSelect={tabsOnSelect}>
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
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Patternfly Secondary Tabs renders properly', () => {
  const tabsOnSelect = jest.fn()
  const secondaryTabsOnSelect = jest.fn()
  const component = renderer.create(
    <div>
      <Tabs activeKey="1" onSelect={tabsOnSelect}>
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
      <Tabs pfStyle activeKey="1" onSelect={secondaryTabsOnSelect}>
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
    </div>
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
