const { fas } = require('@fortawesome/free-solid-svg-icons');
const { far } = require('@fortawesome/free-regular-svg-icons');
const { fab } = require('@fortawesome/free-brands-svg-icons');

function getFontAwesomeIcon(icon, prefix = '') {
  console.log('icon', icon);
  icon.id = `${prefix}${icon.title || icon.substr(2)}`; // remove fa
  icon.name = icon.id;

  return icon;
}

Object.values(fas).forEach(getFontAwesomeIcon);
delete fab['faFontAwesomeLogoFull'];
// .map(icon => {
//   if (icon.includes('500')) {
//     return {
//       title: 'fiveHundredPx',
//       name: 'fa500px'
//     };
//   }
//   return icon;
// })
Object.values(fab).forEach(getFontAwesomeIcon);
Object.values(far).forEach(icon => getFontAwesomeIcon(icon, 'outlined'));

module.exports = {
  ...fas,
  ...fab,
  ...far
}

console.log(module.exports)