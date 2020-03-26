const fs = require('fs');
const icons = require('./icons');

const allIcons = [
  ...icons.fontAwesome.solid,
  ...icons.fontAwesome.brands,
  ...icons.fontAwesome.regular,
  ...Object.keys(icons.custom).map(iconName => generateIcon(icons.custom[iconName], iconName)),
  ...Object.keys(icons.pfIcons).map(getPfIcon)
];

function generateSrcIcons() {
  allIcons.forEach(icon => {
    console.log(icon);
  });
}

generateSrcIcons();