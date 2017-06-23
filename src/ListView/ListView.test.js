import React from 'react'
import { mockListItems } from './__mocks__/mockListItems'
import ListView from './ListView'
import ListViewItem from './ListViewItem'
import ListViewItemContainer from './ListViewItemContainer'
import ListViewItemExpansion from './ListViewItemExpansion'
import renderer from 'react-test-renderer'

test('ListView renders properly', () => {
  const handleItemClicked = jest.fn()
  const handleChildClicked = jest.fn()
  const component = renderer.create(
    <ListView>
      {mockListItems.map((item, i) => (
        <ListViewItem isActive={item.active} key={i}>
          <ListViewItemContainer
            isExpansionItem
            isActive={item.active}
            itemClicked={handleItemClicked}
          >
            {item.name}
          </ListViewItemContainer>
          {item.children.map((firstChild, j) => (
            <ListViewItemExpansion isActive={item.active} key={j}>
              <ListViewItemContainer
                isExpansionItem
                isActive={firstChild.active}
                itemClicked={handleChildClicked}
              >
                {firstChild.name}
              </ListViewItemContainer>
              {firstChild.children.map((secondChild, k) => (
                <ListViewItemExpansion isActive={firstChild.active} key={k}>
                  <ListViewItemContainer>
                    {secondChild.name}
                  </ListViewItemContainer>
                </ListViewItemExpansion>
              ))}
            </ListViewItemExpansion>
          ))}
        </ListViewItem>
      ))}
    </ListView>
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
