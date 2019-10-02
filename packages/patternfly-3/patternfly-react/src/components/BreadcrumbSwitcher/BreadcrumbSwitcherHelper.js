/**
 * Removes slashes from the beggining and end of the path
 * @param {String} path - the path that should be removed of slashes
 */
export const removeLastSlashFromPath = path => {
  if (!path || path.length < 2) {
    return path;
  }
  const lastCharIndex = path.length - 1;
  return path[lastCharIndex] === '/' ? path.slice(0, -1) : path;
};

export const getCurrentPath = () => removeLastSlashFromPath(window.location.pathname);
