const requiredElements = ['INPUT', 'BUTTON'];
let warningCompleted = false;

export const showIdWarnings = (row, target) => {
  if ((row.isEditing || row.isTableEditing) && requiredElements.indexOf(target.tagName) >= 0 && !warningCompleted) {
    warningCompleted = true;
    // eslint-disable-next-line no-console
    console.warn(`${requiredElements.join(', ')} elements are required to have an id for editing to work properly.`);
  }
};

export const combineFunctions = (...functions) => {
  const realFunctions = functions.filter(f => typeof f === 'function');

  if (realFunctions.length === 1) {
    return realFunctions[0];
  }

  if (realFunctions.length > 1) {
    return (...params) => {
      realFunctions.forEach(f => f(...params));
    };
  }

  return undefined;
};

export const shallowLeftSideEquals = (newObject, oldObject) =>
  !Object.keys(newObject).find(key => newObject[key] !== oldObject[key]);

export const getBoundingClientRect = element => {
  const { top, right, bottom, left, width, height, x, y } = element.getBoundingClientRect();
  return { top, right, bottom, left, width, height, x, y };
};

export const getClientWindowDimensions = () => {
  const { clientWidth, clientHeight } = document.documentElement;
  return { width: clientWidth, height: clientHeight };
};
