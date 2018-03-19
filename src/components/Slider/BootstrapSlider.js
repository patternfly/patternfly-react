import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'bootstrap-slider';

class BootstrapSlider extends React.Component {
  constructor(props) {
    super(props);

    this._slider = null;
  }

  componentDidMount() {
    const that = this;

    this._slider = new Slider(this.sliderDiv, {
      ...this.props
    });
    this._slider.on('slide', value => that._onSlide(value));
    this._slider.on('slideStop', value => that._onSlide(value));
  }

  // Instead of rendering the slider element again and again,
  // we took advantage of the bootstrap-slider library
  // and only update the new value or format when new props arrive.
  componentWillUpdate(nextProps, nextState) {
    this._slider.setValue(nextProps.value);
    // Sets the tooltip format.
    this._slider.setAttribute('formatter', nextProps.formatter);
    // Adjust the tooltip to "sit" ontop of the slider's handle. #LibraryBug
    // check
    if (this.props.orientation === 'horizontal') {
      this._slider.tooltip.style.marginLeft = `-${this._slider.tooltip
        .offsetWidth / 2}px`;
      if (this.props.ticks_labels && this._slider.tickLabelContainer) {
        this._slider.tickLabelContainer.style.marginTop = '0px';
      }
    } else {
      this._slider.tooltip.style.marginTop = `-${this._slider.tooltip
        .offsetHeight / 2}px`;
    }
  }

  _onSlide = value => {
    this.props.onSlide(value);
    this._slider.setValue(value);
  };

  render() {
    return (
      <input
        className="slider-pf"
        type="range"
        ref={input => {
          this.sliderDiv = input;
        }}
      />
    );
  }
}

BootstrapSlider.propTypes = {
  value: PropTypes.oneOfType([PropTypes.array, PropTypes.number]).isRequired,
  onSlide: PropTypes.func,
  orientation: PropTypes.string,
  ticks_labels: PropTypes.array
};

BootstrapSlider.defaultProps = {
  onSlide: event => event,
  orientation: 'horizontal',
  ticks_labels: []
};

export default BootstrapSlider;
