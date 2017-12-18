export const mockFilterFields = [
  {
    id: 'name',
    title: 'Name',
    placeholder: 'Filter by Name',
    filterType: 'text',
  },
  {
    id: 'address',
    title: 'Address',
    placeholder: 'Filter by Address',
    filterType: 'text',
  },
  {
    id: 'birthMonth',
    title: 'Birth Month',
    placeholder: 'Filter by Birth Month',
    filterType: 'select',
    filterValues: [
      { title: 'January', id: 'jan' },
      { title: 'Feb', id: 'February' },
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
  },
  {
    id: 'car',
    title: 'Car',
    placeholder: 'Filter by Car Make',
    filterType: 'complex-select',
    filterValues: [{ title: 'Subaru', id: 'subie' }, 'Toyota'],
    filterCategoriesPlaceholder: 'Filter by Car Model',
    filterCategories: {
      subie: {
        id: 'subie',
        title: 'Subaru',
        filterValues: [
          {
            title: 'Outback',
            id: 'out',
          },
          'Crosstrek',
          'Impreza',
        ],
      },
      toyota: {
        id: 'toyota',
        title: 'Toyota',
        filterValues: [
          {
            title: 'Prius',
            id: 'pri',
          },
          'Corolla',
          'Echo',
        ],
      },
    },
  },
];

export const mockFilterFieldsSource = `
  filterFields = [
    {
      id: 'name',
      title: 'Name',
      placeholder: 'Filter by Name',
      filterType: 'text',
    },
    {
      id: 'address',
      title: 'Address',
      placeholder: 'Filter by Address',
      filterType: 'text',
    },
    {
      id: 'birthMonth',
      title: 'Birth Month',
      placeholder: 'Filter by Birth Month',
      filterType: 'select',
      filterValues: [
        { title: 'January', id: 'jan' },
        { title: 'Feb', id: 'February' },
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
    },
    {
      id: 'car',
      title: 'Car',
      placeholder: 'Filter by Car Make',
      filterType: 'complex-select',
      filterValues: [{ title: 'Subaru', id: 'subie' }, 'Toyota'],
      filterCategoriesPlaceholder: 'Filter by Car Model',
      filterCategories: {
        subie: {
          id: 'subie',
          title: 'Subaru',
          filterValues: [
            {
              title: 'Outback',
              id: 'out',
            },
            'Crosstrek',
            'Impreza',
          ],
        },
        toyota: {
          id: 'toyota',
          title: 'Toyota',
          filterValues: [
            {
              title: 'Prius',
              id: 'pri',
            },
            'Corolla',
            'Echo',
          ],
        },
      },
    },
  ];
`;
