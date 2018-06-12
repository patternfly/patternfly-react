const mockSlider = jest.fn(function MockSlider(el, props) {
  this.props = props;
  this.value = props.value;
  this.handlers = {};
  this.tooltip = getMockElement();
  this.tickLabelContainer = getMockElement();

  this.on = jest.fn((evt, handler) => {
    this.handlers[evt] = handler;
  });
  this.setValue = jest.fn(value => {
    this.value = value;
  });
  this.setAttribute = jest.fn();
});

function getMockElement() {
  return {
    offsetWidth: 0,
    offsetHeight: 0,
    style: {
      marginTop: 0
    }
  };
}

export default mockSlider;
