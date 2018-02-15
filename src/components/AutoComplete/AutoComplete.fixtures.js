const colors = [
  'Red',
  'Orange',
  'Yellow',
  'Green',
  'Cyan',
  'Blue',
  'Indigo',
  'Violet'
];

const adjectives = [
  'agreeable',
  'ambitious',
  'calm',
  'delightful',
  'interesting',
  'pleasant',
  'simple',
  'wonderful'
];

const autoCompleteTerms = colors
  .map(color => adjectives.map(adj => `${color} is ${adj}`))
  .reduce((terms, colorItems) => terms.concat(colorItems));

const limitWordCount = (searchTerm, i) => {
  const wordCount = searchTerm.split(' ').length;
  return i
    .split(' ')
    .slice(0, wordCount)
    .join(' ');
};

const removeDuplicates = (item, index, array) => array.indexOf(item) === index;

const includesTerm = (searchTerm, i) =>
  !searchTerm || i.toLowerCase().includes(searchTerm.toLowerCase());

const limitResults = (i, index) => index < 10;

const stringsToConfig = item => ({
  text: item,
  disabled: item.includes('Red')
});

export const getSearchItems = (searchTerm = '') => {
  const items = autoCompleteTerms
    .map(limitWordCount.bind(null, searchTerm))
    .filter(removeDuplicates)
    .filter(includesTerm.bind(null, searchTerm))
    .filter(limitResults)
    .map(stringsToConfig);

  if (items.length > 2) {
    items.splice(
      2,
      0,
      { type: 'header', text: 'This is a Header' },
      { type: 'divider' }
    );
  }

  return items;
};
