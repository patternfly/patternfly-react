export default {
  nodes: [
    { id: 'cyan', type: 'cyan', color: 'cyan', width: 200, height: 100, group: 'blue' },
    {
      id: 'lightblue',
      type: 'lightblue',
      color: 'lightblue',
      width: 200,
      height: 100,
      group: 'blue'
    },
    { id: 'orange', type: 'orange', color: 'orange', width: 100, height: 100 },
    { id: 'pink', type: 'pink', color: 'pink', width: 100, height: 100 },
    { id: 'blue', type: 'blue', color: 'blue', width: 100, height: 200 },
    { id: 'January', group: 'cyan' },
    { id: 'February', group: 'cyan' },
    { id: 'March', group: 'lightblue' },
    { id: 'April', group: 'lightblue' },
    { id: 'May', group: 'lightblue' },
    { id: 'June', group: 'orange' },
    { id: 'July', group: 'orange' },
    { id: 'August', group: 'orange' },
    { id: 'September', group: 'pink' },
    { id: 'October', group: 'pink' },
    { id: 'November', group: 'pink' },
    { id: 'December', group: 'cyan' }
  ],
  links: [
    { source: 'January', target: 'June', value: 1 },
    { source: 'January', target: 'February', value: 1 },
    { source: 'January', target: 'July', value: 8 },
    { source: 'October', target: 'February', value: 6 },
    { source: 'December', target: 'May', value: 1 }
  ]
};
