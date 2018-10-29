import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Button, Grid, Icon, OverlayTrigger, Tooltip, helpers } from 'patternfly-react';

/**
 * TableGridHead Component for PatternFly
 */

const TableGridHead = ({
  id,
  children,
  className,
  showCheckbox,
  allSelected,
  partialSelected,
  onToggleSelection,
  toggleTip,
  allSelectedAriaLabel,
  partialSelectedAriaLabel,
  noneSelectedAriaLabel,
  ...props
}) => {
  const classes = classNames('table-grid-pf-head', className);

  const getTipText = () => {
    if (toggleTip) {
      return toggleTip;
    }
    if (allSelected) {
      return 'All Selected';
    }
    if (partialSelected) {
      return 'Partially Selected';
    }
    return 'None Selected';
  };

  const getAriaLabel = () => {
    if (allSelected) {
      return allSelectedAriaLabel;
    }
    if (partialSelected) {
      return partialSelectedAriaLabel;
    }
    return noneSelectedAriaLabel;
  };

  const checkboxTooltip = <Tooltip id={`${id || Date.now()}_tip`}>{getTipText()}</Tooltip>;

  let iconName;
  if (allSelected) {
    iconName = 'check-square';
  } else if (partialSelected) {
    iconName = 'minus-square';
  } else {
    iconName = 'square-o';
  }

  return (
    <Grid.Row id={id} className={classes} {...props}>
      {showCheckbox && (
        <div className="table-grid-pf-checkbox">
          <OverlayTrigger delay={500} overlay={checkboxTooltip}>
            <Button bsStyle="link" onClick={onToggleSelection} aria-label={getAriaLabel()}>
              <Icon type="fa" name={iconName} />
            </Button>
          </OverlayTrigger>
        </div>
      )}
      {children}
    </Grid.Row>
  );
};

TableGridHead.propTypes = {
  /** Id */
  id: PropTypes.any,
  /** Children nodes */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string,
  /** Flag to show the Header Checkbox  */
  showCheckbox: PropTypes.bool,
  /** Flag if all items are selected (showCheckbox only) */
  allSelected: PropTypes.bool,
  /** Flag if some of the items are selected  (showCheckbox only) */
  partialSelected: PropTypes.bool,
  /** Callback function for checkbox toggle (showCheckbox only) */
  onToggleSelection: PropTypes.func,
  /** Text for the toggle tooltip (showCheckbox only) */
  toggleTip: PropTypes.string,
  /** Screen reader text for All Selected (showCheckbox only) */
  allSelectedAriaLabel: PropTypes.string,
  /** Screen reader text for Partial Selected (showCheckbox only) */
  partialSelectedAriaLabel: PropTypes.string,
  /** Screen reader text for None Selected (showCheckbox only) */
  noneSelectedAriaLabel: PropTypes.string
};
TableGridHead.defaultProps = {
  id: null,
  children: null,
  className: '',
  showCheckbox: false,
  allSelected: false,
  partialSelected: false,
  onToggleSelection: helpers.noop,
  toggleTip: null,
  allSelectedAriaLabel: 'Click to deselect all',
  partialSelectedAriaLabel: 'Click to deselect all',
  noneSelectedAriaLabel: 'Click to select all'
};

export default TableGridHead;
