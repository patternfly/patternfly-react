const echarts: any = jest.createMockFromModule('echarts');
echarts.init = jest.fn(() => ({
  setOption: jest.fn(),
  dispose: jest.fn()
}));
module.exports = echarts;
