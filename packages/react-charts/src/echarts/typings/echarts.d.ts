import * as echarts from 'echarts/types/dist/core';

declare module 'echarts' {
  export const registerTheme: echarts.registerTheme;
  export const init: echarts.init;
  export type ECharts = any;
}
