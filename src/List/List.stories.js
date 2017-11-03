import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { defaultTemplate } from '../../storybook/decorators/storyTemplates'

import { List, ListContent, ListExpansion, ListItem } from '../index'
import { mockListExpansionItems } from './__mocks__/mockListItems'

const stories = storiesOf('List', module)
stories.addDecorator(withKnobs)
stories.addDecorator(
  defaultTemplate({
    title: 'List View',
    documentationLink:
      'http://www.patternfly.org/pattern-library/content-views/list-view/'
  })
)

const renderContent = item => {
  return <ListContent>{item.content}</ListContent>
}

stories.addWithInfo('Basic list with expansion', `List usage example.`, () => {
  return (
    <List>
      {mockListExpansionItems.map((item, index) => (
        <ListItem
          key={index}
          content={renderContent(item)}
          initiallyExpanded={item.initiallyExpanded}
        >
          {item.expandedItems.map((secondaryItem, index) => (
            <ListExpansion
              key={index}
              content={renderContent(secondaryItem)}
              initiallyExpanded={item.initiallyExpanded}
            >
              {secondaryItem.expandedItems.map((tertiaryItem, index) => (
                <ListExpansion
                  key={index}
                  content={renderContent(tertiaryItem)}
                />
              ))}
            </ListExpansion>
          ))}
        </ListItem>
      ))}
    </List>
  )
})
