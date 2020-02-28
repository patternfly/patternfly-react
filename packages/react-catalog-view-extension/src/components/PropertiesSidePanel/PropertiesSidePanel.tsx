import * as React from 'react';
import classNames from 'classnames';

export interface PropertySidePanelProps extends React.HTMLProps<HTMLDivElement> {
  /** Additional css classes for the Property Item */
  className?: string;
  /** Children, should be PropertyItem items plus any action buttons, etc. */
  children?: React.ReactNode;
}

export const PropertiesSidePanel: React.FunctionComponent<PropertySidePanelProps> = ({
  className = '',
  children = null,
  ...props
}: PropertySidePanelProps) => {
  const classes = classNames('properties-side-panel-pf', className);

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
