import { canUseDOM } from '../utils/misc';

// See https://github.com/apache/echarts/issues/19743
export const getComputedStyle = (token: any) => {
  if (canUseDOM) {
    return window.getComputedStyle(document.body).getPropertyValue(token.name);
  }
  return token.value;
};
