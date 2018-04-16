export const mockDetach = jest.fn();
export const ResizeSensor = jest.fn(function MockSlider(el, cb) {
  this.el = el;
  this.cb = cb;

  this.detach = mockDetach;
});
