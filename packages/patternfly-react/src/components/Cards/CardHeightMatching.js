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
    // setup the event listening on '_container' for our height matching selectors
    this._selectors.forEach(selector => {
      const elements = this._container.querySelectorAll(selector);
      this._resizeSensors.push(new ResizeSensor(elements, debounce(() => this._matchHeights([selector]), 200)));
    });

    // schedule the initial height matching
    setTimeout(() => {
      this._matchHeights();
    }, 0);
  }

  componentDidUpdate() {
    // if the container got updated, let's match heights again
    setTimeout(() => {
      this._matchHeights();
    }, 0);
  }

  componentWillUnmount() {
    this._resizeSensors.forEach(sensor => {
      sensor.detach();
    });
  }

  _matchHeights(selectors = this._selectors) {
    if (!this._container) {
      return;
    }

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
