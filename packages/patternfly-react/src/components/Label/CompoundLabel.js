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
      overlayPlacement={this.props.overlayPlacement}
    />
  );

  render() {
    const values = [...this.props.values];
    if (values.length === 0) return null;
    const categoryTooltip = <Tooltip id="tooltip">{this.props.category.label}</Tooltip>;
    return (
      <span className="label label-primary compound-label-pf">
        <OverlayTrigger placement={this.props.overlayPlacement} overlay={categoryTooltip}>
          <span className="category-label-pf">{this.props.categoryTruncate(this.props.category.label)}</span>
        </OverlayTrigger>
        <ul className={`list-inline ${this.props.className}`}>
          {values.sort((a, b) => (a.label < b.label ? -1 : 1)).map(tagValue => this.generateTag(tagValue))}
        </ul>
      </span>
    );
  }
}

CompoundLabel.propTypes = {
  /** Category in CATEGORY: value(s) pair */
  /**  Parent of label, it does not get displayed in this component */
  category: PropTypes.shape({
    id: PropTypes.any.isRequired,
    label: PropTypes.string.isRequired
  }).isRequired,
  /** Array of Values in Category:VALUE(S) pair  */
  /** id uniquily identify value within its category, label is text which is displayed */
  values: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.any.isRequired,
      label: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  /** Fuction callback called when X button is clicked */
  onDeleteClick: PropTypes.func.isRequired,
  /** Function used to truncate category label */
  categoryTruncate: PropTypes.func,
  /** Function used to truncate value label */
  valueTruncate: PropTypes.func,
  /** Name of CSS class(es) which are set to outer label */
  className: PropTypes.string,
  /** Bootstrap style which is set to label */
  bsStyle: PropTypes.string,
  /** Name of CSS class(es) which are set to inner label(s) */
  innerClassName: PropTypes.string,
  /** Placement of the overlay */
  overlayPlacement: PropTypes.oneOf(['top', 'right', 'bottom', 'left'])
};

CompoundLabel.defaultProps = {
  categoryTruncate: str => (str.length > 18 ? `${str.substring(0, 18)}...` : str),
  valueTruncate: str => (str.length > 18 ? `${str.substring(0, 18)}...` : str),
  className: '',
  bsStyle: 'primary',
  innerClassName: '',
  overlayPlacement: 'bottom'
};

export default CompoundLabel;
