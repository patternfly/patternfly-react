import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { withKnobs } from '@kadira/storybook-addon-knobs'
import { defaultTemplate } from '../../storybook/decorators/storyTemplates'
import { mockListItems } from './__mocks__/mockListItems'
import ListView from './ListView'
import ListViewItem from './ListViewItem'
import ListViewExpandableItem from './ListViewExpandableItem'

const stories = storiesOf('ListView', module)
stories.addDecorator(withKnobs)
stories.addDecorator(
  defaultTemplate({
    title: 'List View',
    documentationLink:
      'http://www.patternfly.org/pattern-library/content-views/list-view/'
  })
)

stories.addWithInfo('List View', `This is the List View.`, () => {
  return (
    <ListView>
      {mockListItems.map((item, i) =>
        <ListViewItem
          key={i}
          iconClass={item.iconClass}
          heading={item.name}
          itemText={item.description}
          additionalInfo={item.additionalInfo}
          actions={item.actions}
        />
      )}
    </ListView>
  )
})

stories.addWithInfo(
  'List View - Simple Expansion',
  `This is the List View with basic expansion.`,
  () => {
    return (
      <ListView>
        {mockListItems.map((item, i) =>
          <ListViewExpandableItem
            key={i}
            iconClass={item.iconClass}
            heading={item.name}
            itemText="some additional text"
            additionalInfo={item.additionalInfo}
            expansion={item.description}
            actions={item.actions}
            onItemSelected={item.onItemSelected}
          />
        )}
      </ListView>
    )
  }
)

stories.addWithInfo(
  'List View - Additional Patternfly Classes',
  `This is the List View using additional patternfly classes.
  `,
  () => {
    return (
      <ListView>
        {mockListItems.map((item, i) =>
          <ListViewItem
            key={i}
            additionalListClass="list-view-pf-stacked"
            iconClass={item.iconClass}
            heading={item.name}
            itemText={item.description}
            additionalInfo={item.additionalInfo}
            actions={item.actions}
          />
        )}
      </ListView>
    )
  }
)
