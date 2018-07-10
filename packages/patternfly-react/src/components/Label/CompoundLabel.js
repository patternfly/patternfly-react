import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from '../Tooltip';
import { OverlayTrigger } from '../OverlayTrigger';
import LabelWithTooltip from './LabelWithTooltip';

class CompoundLabel extends React.Component {
  generateTag = value => (
    <LabelWithTooltip
      key={value.id}
      category={this.props.category}
      value={value}
      onDeleteClick={this.props.onDeleteClick}
      truncate={this.props.valueTruncate}
    />
  );

  render() {
    const values = [...this.props.values];
    if (values.length === 0) return null;
    const categoryTooltip = (
      <Tooltip id="tooltip">{this.props.category.label}</Tooltip>
    );
    return (
      <ul className={`category list-inline ${this.props.className}`}>
        <OverlayTrigger placement="bottom" overlay={categoryTooltip}>
          <div className="category-label">
            {this.props.categoryTruncate(this.props.category.label)}
          </div>
        </OverlayTrigger>
        {values
          .sort((a, b) => (a.label < b.label ? -1 : 1))
          .map(tagValue => this.generateTag(tagValue))}
      </ul>
    );
  }
}

CompoundLabel.propTypes = {
  /** Category, the key part in key:values pair */
  category: PropTypes.shape({
    id: PropTypes.any.isRequired,
    label: PropTypes.string.isRequired
  }).isRequired,
  /** Values, the values part in key:values pair */
  values: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.any.isRequired,
      label: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  /** Callback when remove button is clicked */
  onDeleteClick: PropTypes.func.isRequired,
  /** Truncate function used for category label */
  categoryTruncate: PropTypes.func,
  /** Truncate function used for value label */
  valueTruncate: PropTypes.func,
  /** Used for asign additional css classes */
  className: PropTypes.string
};

CompoundLabel.defaultProps = {
  categoryTruncate: str =>
    str.length > 18 ? `${str.substring(0, 18)}...` : str,
  valueTruncate: str => (str.length > 18 ? `${str.substring(0, 18)}...` : str),
  className: ''
};

export default CompoundLabel;
