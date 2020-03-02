import React from 'react';
import PropTypes from 'prop-types';
import { ResizeSensor } from 'css-element-queries';
import { debounce } from '../../common/helpers';

class CardHeightMatching extends React.Component {
  constructor(props) {
    super(props);

    this._selectors = Array.isArray(props.selector) ? props.selector : [props.selector];
    this._resizeSensors = [];
  }

  componentDidMount() {
    // schedule the initial height matching
    this._matchHeights();
  }

  componentDidUpdate() {
    // if the container got updated, let's match heights again
    setTimeout(() => {
      this._matchHeights();
    }, 0);
  }

  componentWillUnmount() {
    this._removeSensors();
  }

  _addSensors() {
    // setup the event listening on '_container' for our height matching selectors
    this._selectors.forEach(selector => {
      const elements = this._container.querySelectorAll(selector);
      this._resizeSensors.push(new ResizeSensor(elements, debounce(() => this._matchHeights([selector]), 200)));
    });
  }

  _removeSensors() {
    this._resizeSensors.forEach(sensor => {
      sensor.detach();
    });
    this._resizeSensors = [];
  }

  _matchHeights(selectors = this._selectors) {
    if (!this._container) {
      return;
    }

    // Remove any existing sensors so they do not detect changes made here
    this._removeSensors();

    const arrayMap = elements =>
      Array.prototype.map.call(elements, el => el.scrollHeight).reduce((pre, cur) => Math.max(pre, cur), -Infinity);
    selectors.forEach(selector => {
      const elements = this._container.querySelectorAll(selector);
      elements.forEach(el => {
        el.style.height = null;
      });
      const maxHeight = arrayMap(elements);
      elements.forEach(el => {
        el.style.height = `${maxHeight}px`;
      });
    });

    // Add resize sensors to watch for resizes
    this._addSensors();
  }

  render() {
    return (
      <div
        className={this.props.className}
        ref={node => {
          this._container = node;
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

CardHeightMatching.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  selector: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]).isRequired
};
CardHeightMatching.defaultProps = {
  className: ''
};
export default CardHeightMatching;
