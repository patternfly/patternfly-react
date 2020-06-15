import * as React from 'react';
import classNames from 'classnames';

export interface FilterSidePanelProps extends React.HTMLProps<HTMLDivElement> {
  /** Children nodes */
  children: React.ReactNode;
  /** Additional css classes for the Filter Side Panel */
  className?: string;
}

/**
 *
 */
export function FilterSidePanel({ children = null, className = '', ...props }: FilterSidePanelProps) {
  const classes = classNames('filter-panel-pf', className);
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}

export default FilterSidePanel;
