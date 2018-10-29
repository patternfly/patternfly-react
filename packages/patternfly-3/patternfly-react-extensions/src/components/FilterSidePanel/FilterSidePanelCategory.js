import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Button, helpers } from 'patternfly-react';

const FilterSidePanelCategory = ({
  children,
  className,
  title,
  maxShowCount,
  leeway,
  showAll,
  onShowAllToggle,
  showText,
  hideText,
  ...props
}) => {
  const classes = classNames('filter-panel-pf-category', className);
  const childrenArray = helpers.childrenToArray(children);
  const itemCount = childrenArray.length;
  const hiddenCount = itemCount - maxShowCount;
  let shownChildren;
  let showAllToggle = null;

  if (hiddenCount <= leeway || showAll) {
    shownChildren = children;
    if (hiddenCount > leeway) {
      showAllToggle = (
        <Button bsStyle="link" onClick={onShowAllToggle}>
          {hideText || 'Show less'}
        </Button>
      );
    }
  } else {
    shownChildren = children.slice(0, maxShowCount);
    if (hiddenCount > leeway) {
      showAllToggle = (
        <Button bsStyle="link" onClick={onShowAllToggle}>
          {showText || `Show ${hiddenCount} more`}
        </Button>
      );
    }
  }

  return (
    <form className={classes} {...props}>
      <fieldset className="checkbox filter-panel-pf-category-items">
        {title && <legend className="filter-panel-pf-category-title">{title}</legend>}
        {shownChildren}
        {showAllToggle}
      </fieldset>
    </form>
  );
};

FilterSidePanelCategory.propTypes = {
  /** Children nodes */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string,
  /** Title for the category */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** Number of items (max) to show before adding Show More link button */
  maxShowCount: PropTypes.number,
  /** Leeway to add to maxShowCount, minimum X for the 'Show X more' */
  leeway: PropTypes.number,
  /** Flag to show all items (ie. set to true after Show X more link is clicked) */
  showAll: PropTypes.bool,
  /** Callback function when the Show/Hide link button is clicked */
  onShowAllToggle: PropTypes.func,
  /** Text for the link to show all items, default 'Show <x> more' */
  showText: PropTypes.string,
  /** Text for the link to hide overflow items, default 'Show less' */
  hideText: PropTypes.string
};

FilterSidePanelCategory.defaultProps = {
  children: null,
  className: '',
  title: null,
  maxShowCount: 5,
  leeway: 2,
  showAll: false,
  onShowAllToggle: helpers.noop,
  showText: null,
  hideText: null
};

export default FilterSidePanelCategory;
