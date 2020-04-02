import * as React from 'react';
import classNames from 'classnames';
import { Button } from '@patternfly/react-core';
import formStyles from '@patternfly/react-styles/css/components/Form/form';
import { css } from '@patternfly/react-styles';

import { childrenToArray } from '../../helpers/util';

export interface FilterSidePanelCategoryProps extends Omit<React.HTMLProps<HTMLFormElement>, 'title'> {
  /** Children nodes */
  children?: React.ReactNode;
  /** Additional css classes for the Filter Side Panel Category */
  className?: string;
  /** Title for the category */
  title?: string | React.ReactNode;
  /** Number of items (max) to show before adding Show More link button */
  maxShowCount?: number;
  /** Leeway to add to maxShowCount, minimum X for the 'Show X more' */
  leeway?: number;
  /** Flag to show all items (ie. set to true after Show X more link is clicked) */
  showAll?: boolean;
  /** Callback function when the Show/Hide link button is clicked */
  onShowAllToggle?: (event: React.SyntheticEvent<HTMLElement>) => void;
  /** Text for the link to show all items, default 'Show <x> more' */
  showText?: string;
  /** Text for the link to hide overflow items, default 'Show less' */
  hideText?: string;
}

export const FilterSidePanelCategory: React.FunctionComponent<FilterSidePanelCategoryProps> = ({
  children = null,
  className = '',
  title = null,
  maxShowCount = 5,
  leeway = 2,
  showAll = false,
  onShowAllToggle = () => null,
  showText = null,
  hideText = null,
  ...props
}: FilterSidePanelCategoryProps) => {
  const classes = classNames('filter-panel-pf-category', className);
  const childrenArray = childrenToArray(children);
  const itemCount = childrenArray.length;
  const hiddenCount = itemCount - maxShowCount;
  let shownChildren;
  let showAllToggle = null;

  if (hiddenCount <= leeway || showAll) {
    shownChildren = children;
    if (hiddenCount > leeway) {
      showAllToggle = (
        <Button variant="link" onClick={onShowAllToggle}>
          {hideText || 'Show less'}
        </Button>
      );
    }
  } else {
    shownChildren = childrenArray.slice(0, maxShowCount);
    if (hiddenCount > leeway) {
      showAllToggle = (
        <Button variant="link" onClick={onShowAllToggle}>
          {showText || `Show ${hiddenCount} more`}
        </Button>
      );
    }
  }

  return (
    <form className={classes} {...props}>
      <fieldset className={`${css(formStyles.formFieldset)} checkbox filter-panel-pf-category-items`}>
        {title && <legend className="filter-panel-pf-category-title">{title}</legend>}
        {shownChildren}
        {showAllToggle}
      </fieldset>
    </form>
  );
};

export default FilterSidePanelCategory;
