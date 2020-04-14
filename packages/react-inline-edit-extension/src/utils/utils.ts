import { IRow } from '@patternfly/react-table';

const requiredElements = ['INPUT', 'BUTTON'];
let warningCompleted = false;

export const showIdWarnings = (row: IRow, target: any) => {
  if ((row.isEditing || row.isTableEditing) && requiredElements.indexOf(target.tagName) >= 0 && !warningCompleted) {
    warningCompleted = true;
    // eslint-disable-next-line no-console
    console.warn(`${requiredElements.join(', ')} elements are required to have an id for editing to work properly.`);
  }
};

export const shallowLeftSideEquals = (newObject: any, oldObject: any) => {
  if (!newObject || !oldObject) {
    return newObject === oldObject;
  }

  return !Object.keys(newObject).find(key => newObject[key] !== oldObject[key]);
};

export interface ClientBoundingRect {
  top: number;
  right: number;
  bottom: number;
  left: number;
  width: number;
  height: number;
  x: number;
  y: number;
}

export const getBoundingClientRect = (element: HTMLElement) => {
  const { top, right, bottom, left, width, height, x, y } = element.getBoundingClientRect();
  return { top, right, bottom, left, width, height, x, y } as ClientBoundingRect;
};

export interface WindowDimensions {
  width: number;
  height: number;
}

export const getClientWindowDimensions = () => {
  const { clientWidth, clientHeight } = document.documentElement;
  return { width: clientWidth, height: clientHeight } as WindowDimensions;
};
