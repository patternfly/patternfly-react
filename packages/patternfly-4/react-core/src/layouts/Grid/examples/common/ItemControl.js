import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import styles from './ItemControl.styles';
import SpanSlider from './SpanSlider';

const StringOrNumber = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);

const propTypes = {
  id: PropTypes.number.isRequired,
  span: StringOrNumber.isRequired,
  offset: StringOrNumber.isRequired,
  rowSpan: StringOrNumber.isRequired,
  onUpdateItem: PropTypes.func.isRequired
};

class ItemControl extends React.Component {
  static propTypes = propTypes;

  handleSpanChange = event => {
    const { id, onUpdateItem } = this.props;
    onUpdateItem(id, { span: event.currentTarget.value });
  };

  handleOffsetChange = event => {
    const { id, onUpdateItem } = this.props;
    onUpdateItem(id, { offset: event.currentTarget.value });
  };

  handleRowSpanChange = event => {
    const { id, onUpdateItem } = this.props;
    onUpdateItem(id, { rowSpan: event.currentTarget.value });
  };

  render() {
    const { id, span, offset, rowSpan } = this.props;

    return (
      <div className={css(styles.itemControl)}>
        <div>{id}</div>
        <SpanSlider id={`grid-item-${id}-span`} label="Span" value={span} onChange={this.handleSpanChange} />
        <SpanSlider
          id={`grid-item-${id}-row-span`}
          label="Row Span"
          min={1}
          value={rowSpan}
          onChange={this.handleRowSpanChange}
        />
        <SpanSlider
          id={`grid-item-${id}-offset`}
          label="Offset"
          min={0}
          value={offset}
          onChange={this.handleOffsetChange}
        />
      </div>
    );
  }
}

export default ItemControl;
