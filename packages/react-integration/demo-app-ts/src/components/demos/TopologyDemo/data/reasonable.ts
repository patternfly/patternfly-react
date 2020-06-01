export default {
  nodes: [
    { id: 'January', group: 1 },
    { id: 'February', group: 1 },
    { id: 'March', group: 2 },
    { id: 'April', group: 2 },
    { id: 'May', group: 2 },
    { id: 'June', group: 3 },
    { id: 'July', group: 3 },
    { id: 'August', group: 3 },
    { id: 'September', group: 4 },
    { id: 'October', group: 4 },
    { id: 'November', group: 4 },
    { id: 'December', group: 1 }
  ],
  links: [
    { source: 'January', target: 'June', value: 1 },
    { source: 'January', target: 'February', value: 1 },
    { source: 'January', target: 'July', value: 8 },
    { source: 'October', target: 'February', value: 6 },
    { source: 'December', target: 'May', value: 1 }
  ]
};
