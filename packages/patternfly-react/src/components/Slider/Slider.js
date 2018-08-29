import React from 'react';
import PropTypes from 'prop-types';
import BootstrapSlider from './BootstrapSlider';
import { Icon } from '../Icon';
import { ControlLabel, FormControl } from '../Form';
import Boundaries from './Boundaries';
import DropdownMenu from './DropdownMenu';

class Slider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.value,
      tooltipFormat: (this.props.dropdownList && this.props.dropdownList[0]) || this.props.inputFormat
    };
  }

  onSlide = value => {
    this.setState({ value });
  };

  onInputChange = event => {
    this.setState({ value: parseInt(event.target.value || 0, 10) });
  };

  onFormatChange = format => {
    this.setState({ tooltipFormat: format });
  };

  formatter = value => `${value} ${this.state.tooltipFormat}`;

  render() {
    let label = null;
    let sliderClass = 'col-xs-12 col-sm-12 col-md-12';
    const labelClass = 'col-xs-2 col-sm-2 col-md-2';
    if (this.props.label || this.props.icon) {
      sliderClass = 'col-xs-10 col-sm-10 col-md-10';
      label = this.props.icon ? (
        <Icon className={labelClass} {...this.props.icon} />
      ) : (
        <ControlLabel htmlFor={this.props.id} bsClass={labelClass}>
          {this.props.label}
        </ControlLabel>
      );
    }

    let formatElement;

    if (this.props.inputFormat) {
      formatElement = <span>{this.props.inputFormat}</span>;
    }

    if (this.props.dropdownList) {
      formatElement = (
        <DropdownMenu {...this.props} onFormatChange={this.onFormatChange} title={this.state.tooltipFormat} />
      );
    }

    const inputElement = this.props.input && (
      <FormControl
        bsClass="slider-input-pf"
        type="number"
        value={this.state.value}
        min={this.props.min}
        max={this.props.max}
        onChange={this.onInputChange}
      />
    );

    const BSSlider = (
      <BootstrapSlider {...this.props} formatter={this.formatter} value={this.state.value} onSlide={this.onSlide} />
    );

    return (
      <div>
        {label}
        <div className={sliderClass}>
          <Boundaries slider={BSSlider} {...this.props}>
            {inputElement}
            {formatElement}
          </Boundaries>
        </div>
      </div>
    );
  }
}

Slider.propTypes = {
  id: PropTypes.string,
  orientation: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  value: PropTypes.oneOfType([PropTypes.array, PropTypes.number]),
  toolTip: PropTypes.bool,
  onSlide: PropTypes.func,
  label: PropTypes.string,
  labelClass: PropTypes.string,
  icon: PropTypes.object,
  input: PropTypes.bool,
  sliderClass: PropTypes.string,
  dropdownList: PropTypes.array,
  inputFormat: PropTypes.string
};

Slider.defaultProps = {
  id: null,
  orientation: 'horizontal',
  min: 0,
  max: 100,
  value: 0,
  step: 1,
  toolTip: false,
  onSlide: null,
  label: null,
  labelClass: null,
  input: false,
  sliderClass: null,
  icon: null,
  dropdownList: null,
  inputFormat: ''
};

export default Slider;
