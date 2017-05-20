import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { withKnobs, boolean } from '@kadira/storybook-addon-knobs'
import { defaultTemplate } from '../../storybook/decorators/storyTemplates'
import MockListManager from './__mocks__/MockListManager'
import ListView from './ListView'
import ListViewItem from './ListViewItem'
import ListViewItemContainer from './ListViewItemContainer'
import ListViewItemExpansion from './ListViewItemExpansion'

const stories = storiesOf('ListView', module)
stories.addDecorator(withKnobs)
stories.addDecorator(
  defaultTemplate({
    title: 'List View',
    documentationLink: 'http://www.patternfly.org/pattern-library/content-views/list-view/'
  })
)

stories.addWithInfo(
  'basic list with expansion',
  `This is the List View with basic expansion.`,
  () => <MockListManager />
)

stories.addWithInfo(
  'basic list with expansion knobs',
  `This is the List View with basic expansion.`,
  () => {
    const firstLevelExpanded = boolean('First Level Expanded', false)
    const secondLevelExpanded = boolean('Second Level Expanded', false)
    return (
      <ListView>
        <ListViewItem isActive={firstLevelExpanded}>
          <ListViewItemContainer
            isExpansionItem
            itemClicked={action('first level itemClicked')}
            isActive={firstLevelExpanded}
          >
            First Level
          </ListViewItemContainer>
          <ListViewItemExpansion isActive={firstLevelExpanded}>
            <ListViewItemContainer
              isExpansionItem
              isActive={secondLevelExpanded}
              itemClicked={action('second level itemClicked')}
            >
              Second level
            </ListViewItemContainer>
            <ListViewItemExpansion isActive={secondLevelExpanded}>
              <ListViewItemContainer
                itemClicked={action('third level itemClicked')}
              >
                Third level
              </ListViewItemContainer>
            </ListViewItemExpansion>
          </ListViewItemExpansion>
        </ListViewItem>
      </ListView>
    )
  }
)
