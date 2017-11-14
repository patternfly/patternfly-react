import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs'

import { defaultTemplate } from '../../storybook/decorators/storyTemplates'
// import { AutoSizer, Table, Column } from 'react-virtualized'
import { DataTable, Column } from './index.js'

const stories = storiesOf('DataTable', module)
stories.addDecorator(withKnobs)
stories.addDecorator(
  defaultTemplate({
    title: 'Data Table',
    documentationLink:
      'http://www.patternfly.org/pattern-library/content-views/table-view/'
  })
)

stories.addWithInfo('DataTable', `update this with better description`, () => {
  const items = {
    item1: { title: 'Item 1', description: 'This is item 1' },
    item2: { title: 'Item 2', description: 'This is item 2' }
  }

  return (
    <DataTable rowGetter={key => items[key]} rowKeys={Object.keys(items)}>
      <Column label="Title" dataKey="title" />
      <Column label="Description" dataKey="description" />
    </DataTable>
  )
})
