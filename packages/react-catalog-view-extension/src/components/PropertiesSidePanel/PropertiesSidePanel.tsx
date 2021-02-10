import * as React from 'react';
import { css } from '@patternfly/react-styles';

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
  const classes = css('properties-side-panel-pf', className);

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
PropertiesSidePanel.displayName = 'PropertiesSidePanel';
