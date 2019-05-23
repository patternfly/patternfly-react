// Helper for mergeDeep
export function isObject(item) {
  return item && typeof item === 'object' && !Array.isArray(item);
}

// Merge variant properties onto given theme
export default function mergeDeep(target, source) {
  // Adaptation from https://stackoverflow.com/questions/27936772
  const output = Object.assign({}, target);
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach(key => {
      if (isObject(source[key])) {
        if (!(key in target)) Object.assign(output, { [key]: source[key] });
        else output[key] = mergeDeep(target[key], source[key]);
      } else {
        Object.assign(output, { [key]: source[key] });
      }
    });
  }
  return output;
}
