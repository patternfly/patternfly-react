const {
  save,
  'folder-open': folderOpen,
  edit,
  print,
  spinner,
  home,
  history,
  memory,
  server,
  user,
  users,
  info,
  filter,
  key,
  ...rest
} = require('@patternfly/patternfly/icons/pf-icons.json');

function getPfIcon(icon) {
  icon.yOffset = 64;
  icon.transform = `rotate(180 0 ${icon.height / 2}) scale(-1 1)`;
  return icon;
}

Object.values(rest).forEach(getPfIcon);

module.exports = {
  'save-alt': getPfIcon(save),
  'folder-open-alt': getPfIcon(folderOpen),
  'edit-alt': getPfIcon(edit),
  'print-alt': getPfIcon(print),
  'spinner-alt': getPfIcon(spinner),
  'home-alt': getPfIcon(home),
  'memory-alt': getPfIcon(memory),
  'server-alt': getPfIcon(server),
  'user-sec': getPfIcon(user),
  'users-alt': getPfIcon(users),
  'info-alt': getPfIcon(info),
  'filter-alt': getPfIcon(filter),
  ...rest
}

console.log(module.exports);
