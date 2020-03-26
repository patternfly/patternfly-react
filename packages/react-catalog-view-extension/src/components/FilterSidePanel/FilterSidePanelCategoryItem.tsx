import * as React from 'react';
import classNames from 'classnames';
import { Checkbox } from '@patternfly/react-core';

import { getUniqueId } from '../../helpers/util';

export interface FilterSidePanelCategoryItemProps extends React.Component<Checkbox> {
  /** Children nodes */
  children?: React.ReactNode;
  /** Additional css classes for the Filter Panel Property Item */
  className?: string;
  /** Optional icon (or other) to show before the children */
  icon?: React.ReactNode;
  /** Optional count of the items matching the filter */
  count?: number;
  /** Callback for a click on the Filter Item Checkbox */
  onClick?: (event: React.SyntheticEvent<HTMLElement>) => void;
  /** Flag to show if the Filter Item Checkbox is checked. */
  checked?: boolean;
}

export const FilterSidePanelCategoryItem: React.FunctionComponent<FilterSidePanelCategoryItemProps> = ({
  children = null,
  className = '',
  icon = null,
  count = null,
  onClick = null,
  checked = false,
  ...props
}: FilterSidePanelCategoryItemProps) => {
  const classes = classNames('filter-panel-pf-category-item', className);
  const label = (
    <React.Fragment>
      {icon && <span className="item-icon">{icon}</span>}
      {children}
      {Number.isInteger(count) && <span className="item-count">{`(${count})`}</span>}
    </React.Fragment>
  );
  return (
    <div className={classes}>
      <Checkbox onClick={onClick} checked={checked} id={getUniqueId()} label={label} {...props} />
    </div>
  );
};

export default FilterSidePanelCategoryItem;
