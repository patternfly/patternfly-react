import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DualListItemTooltip from './DualListItemTooltip';
import { TypeAheadSelect } from '../../../components/TypeAheadSelect';
import { noop } from '../../../common/helpers';

const { Highlighter } = TypeAheadSelect;

const DualListItem = ({
  checked,
  className,
  position,
  parentPosition,
  value,
  label,
  filterTerm,
  onChange,
  side,
  hidden,
  disabled,
  tooltipID,
  tooltipText
}) => {
  const cx = classNames('dual-list-pf-item', className, checked && 'selected', disabled && 'disabled');
  const itemLabel = (
    <span className="dual-list-pf-item-label">
      <Highlighter search={filterTerm}>{label}</Highlighter>
    </span>
  );
  const item = (
    <label className={cx} hidden={hidden}>
      <input
        type="checkbox"
        data-position={position}
        data-parent-position={parentPosition}
        onChange={onChange}
        checked={checked || false}
        value={value}
        data-side={side}
        disabled={disabled}
      />
      {itemLabel}
    </label>
  );
  const getTooltipID = () => {
    let uniqueTooltipID = `dual-list-item-tooltip-${side}`;
    if (parentPosition) {
      uniqueTooltipID += `-${parentPosition}`;
    }
    uniqueTooltipID += `-${position}`;
    return uniqueTooltipID;
  };
  return tooltipText ? (
    <DualListItemTooltip text={tooltipText} id={tooltipID || getTooltipID()}>
      {item}
    </DualListItemTooltip>
  ) : (
    item
  );
};

DualListItem.propTypes = {
  /** Is the element chacked */
  checked: PropTypes.bool,
  /** Additional html class */
  className: PropTypes.string,
  /** The element position, used by the onChange function. */
  position: PropTypes.number,
  /** The element parent position, used by the onChange function. */
  parentPosition: PropTypes.number,
  /** The element value, used by the onChange function. */
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** The element label, used by the onChange function. */
  label: PropTypes.string,
  /** The term which is flitering the list. */
  filterTerm: PropTypes.string,
  /** A function that is running when the item selected state is toggled. */
  onChange: PropTypes.func,
  /** The side of the selector. */
  side: PropTypes.string,
  /** Sets the item visibillity when filtering. */
  hidden: PropTypes.bool,
  /** Disable the item to move between lists */
  disabled: PropTypes.bool,
  /** unique tooltip ID */
  tooltipID: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** text to be shown on the tooltip */
  tooltipText: PropTypes.string
};

DualListItem.defaultProps = {
  checked: false,
  className: null,
  parentPosition: null,
  position: 0,
  value: '',
  label: null,
  filterTerm: null,
  onChange: noop,
  side: null,
  hidden: false,
  disabled: false,
  tooltipID: null,
  tooltipText: null
};

export default DualListItem;
