export const mockListExpansionItems = [
  {
    content: 'First line',
    expandedItems: [
      {
        content: 'This is a first level section',
        expandedItems: [
          {
            content: 'This is a second level section'
          }
        ]
      }
    ]
  },
  {
    content: 'This item is open by default',
    initiallyExpanded: true,
    expandedItems: [
      {
        content: 'This is a first level section',
        initiallyExpanded: true,
        expandedItems: [
          {
            content: 'This is a second level section'
          }
        ]
      }
    ]
  }
]
