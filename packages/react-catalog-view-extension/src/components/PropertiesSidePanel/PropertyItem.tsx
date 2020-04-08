import * as React from 'react';
import classNames from 'classnames';

import { Text, TextVariants } from '@patternfly/react-core';

export interface PropertyItemProps extends Omit<React.HTMLProps<HTMLDivElement>, 'label' | 'value'> {
  /** Additional css classes for the Property Item */
  className?: string;
  /** Label for the property */
  label: string | React.ReactNode;
  /** Value of the property */
  value: string | React.ReactNode;
}

export const PropertyItem: React.FunctionComponent<PropertyItemProps> = ({
  className = '',
  label,
  value = null,
  ...props
}: PropertyItemProps) => {
  const classes = classNames('properties-side-panel-pf-property', className);
  return (
    <div className={classes} {...props}>
      <Text component={TextVariants.h5} className="properties-side-panel-pf-property-label">
        {label}
      </Text>
      <div className="properties-side-panel-pf-property-value">{value}</div>
    </div>
  );
};
