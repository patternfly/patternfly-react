import React from 'react'
import { mockListItems } from './__mocks__/mockListItems'
import ListView from './ListView'
import ListViewItem from './ListViewItem'
import renderer from 'react-test-renderer'

test('ListView renders properly', () => {
  const component = renderer.create(
    <ListView>
      {mockListItems.map((item, i) =>
        <ListViewItem
          key={i}
          heading={item.name}
          itemText={item.description}
          iconClass={item.iconClass}
        />
      )}
    </ListView>
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
