import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'bootstrap-slider-without-jquery';

const orientation = {
  horizontal: 'horizontal',
  vertical: 'vertical'
};

class BootstrapSlider extends React.Component {
  componentDidMount() {
    this.slider = new Slider(this.sliderDiv, {
      ...this.props
    });

    const onSlide = value => {
      this.props.onSlide(value);
      this.slider.setValue(value);
    };

    this.slider.on('slide', onSlide);
    this.slider.on('slideStop', onSlide);
  }

  // Instead of rendering the slider element again and again,
  // we took advantage of the bootstrap-slider library
  // and only update the new value or format when new props arrive.
  componentWillReceiveProps(nextProps) {
    this.slider.setValue(nextProps.value);
    // Sets the tooltip format.
    this.slider.setAttribute('formatter', nextProps.formatter);
    // Adjust the tooltip to "sit" ontop of the slider's handle. #LibraryBug
    // check
    if (this.props.orientation === orientation.horizontal) {
      this.slider.tooltip.style.marginLeft = `-${this.slider.tooltip.offsetWidth / 2}px`;
      if (this.props.ticks_labels && this.slider.tickLabelContainer) {
        this.slider.tickLabelContainer.style.marginTop = '0px';
      }
    } else {
      this.slider.tooltip.style.marginTop = `-${this.slider.tooltip.offsetHeight / 2}px`;
    }
  }

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
  formatter: PropTypes.func,
  onSlide: PropTypes.func,
  orientation: PropTypes.string,
  ticks_labels: PropTypes.array
};

BootstrapSlider.defaultProps = {
  formatter: v => v,
  onSlide: event => event,
  orientation: 'horizontal',
  ticks_labels: []
};

export default BootstrapSlider;
