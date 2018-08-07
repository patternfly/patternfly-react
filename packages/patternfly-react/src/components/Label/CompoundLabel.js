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
      bsStyle={this.props.bsStyle}
      className={this.props.innerClassName}
    />
  );

  render() {
    const values = [...this.props.values];
    if (values.length === 0) return <div />;
    const categoryTooltip = (
      <Tooltip id="tooltip">{this.props.category.label}</Tooltip>
    );
    return (
      <span className="label label-primary compound-label-pf">
        <OverlayTrigger placement="bottom" overlay={categoryTooltip}>
          <span className="category-label-pf">
            {this.props.categoryTruncate(this.props.category.label)}
          </span>
        </OverlayTrigger>
        <ul className={`list-inline ${this.props.className}`}>
          {values
            .sort((a, b) => (a.label < b.label ? -1 : 1))
            .map(tagValue => this.generateTag(tagValue))}
        </ul>
      </span>
    );
  }
}

CompoundLabel.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.any.isRequired,
    label: PropTypes.string.isRequired
  }).isRequired,
  values: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.any.isRequired,
      label: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  categoryTruncate: PropTypes.func,
  valueTruncate: PropTypes.func,
  className: PropTypes.string,
  bsStyle: PropTypes.string,
  innerClassName: PropTypes.string
};

CompoundLabel.defaultProps = {
  categoryTruncate: str =>
    str.length > 18 ? `${str.substring(0, 18)}...` : str,
  valueTruncate: str => (str.length > 18 ? `${str.substring(0, 18)}...` : str),
  className: '',
  bsStyle: 'primary',
  innerClassName: ''
};

export default CompoundLabel;
