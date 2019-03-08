const { fas } = require('@fortawesome/free-solid-svg-icons');
const { far } = require('@fortawesome/free-regular-svg-icons');
const { pfIcons } = require('./pfIcons');
const { custom } = require('./customIcons');
module.exports = {
  fontAwesome: {
    solid: Object.keys(fas),
    regular: Object.keys(far)
  },
  custom,
  pfIcons
};
