// see https://github.com/bryanrsmith/eslint-plugin-sort-class-members

module.exports = {
  'sort-class-members/sort-class-members': [
    'error',
    {
      order: [
        '[static-properties]',
        '[static-methods]',
        '[properties]',
        '[conventional-private-properties]',
        'constructor',
        '[methods]',
        '[conventional-private-methods]',
        '[everything-else]'
      ],
      accessorPairPositioning: 'getThenSet'
    }
  ]
};
