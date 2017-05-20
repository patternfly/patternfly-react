import React from 'react'
import update from 'immutability-helper'
import { mockListItems } from './mockListItems'
import ListView from '../ListView'
import ListViewItem from '../ListViewItem'
import ListViewItemContainer from '../ListViewItemContainer'
import ListViewItemExpansion from '../ListViewItemExpansion'

class MockListManager extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: mockListItems
    }
    this.itemClicked = (e, i) => {
      this.setState(prevState =>
        update(prevState, {
          items: {
            [i]: {
              active: {
                $set: !prevState.items[i].active
              }
            }
          }
        })
      )
    }
    this.childClicked = (e, i, j) => {
      this.setState(prevState =>
        update(prevState, {
          items: {
            [i]: {
              children: {
                [j]: {
                  active: {
                    $set: !prevState.items[i].children[j].active
                  }
                }
              }
            }
          }
        })
      )
    }
  }
  render() {
    return (
      <ListView>
        {this.state.items.map((item, i) => (
          <ListViewItem isActive={item.active} key={i}>
            <ListViewItemContainer
              isExpansionItem
              isActive={item.active}
              itemClicked={e => {
                this.itemClicked(e, i)
              }}
            >
              {item.name}
            </ListViewItemContainer>
            {item.children.map((firstChild, j) => (
              <ListViewItemExpansion isActive={item.active} key={j}>
                <ListViewItemContainer
                  isExpansionItem
                  isActive={firstChild.active}
                  itemClicked={e => {
                    this.childClicked(e, i, j)
                  }}
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
  }
}
export default MockListManager
