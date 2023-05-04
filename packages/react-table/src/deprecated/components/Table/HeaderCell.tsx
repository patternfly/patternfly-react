import * as React from 'react';
import { Th } from '../../../components';

export interface HeaderCellProps {
  'data-label'?: string;
  className?: string;
  component?: React.ReactNode;
  isVisible?: boolean;
  scope?: string;
  textCenter?: boolean;
  dataLabel?: string;
  tooltip?: string;
  onMouseEnter?: (event: any) => void;
  children: React.ReactNode;
}

export const HeaderCell: React.FunctionComponent<HeaderCellProps> = ({
  className = '',
  component = 'th',
  scope = '',
  textCenter = false,
  tooltip = '',
  onMouseEnter = () => {},
  children,
  /* eslint-disable @typescript-eslint/no-unused-vars */
  isVisible,
  dataLabel = '',
  /* eslint-enable @typescript-eslint/no-unused-vars */
  ...props
}: HeaderCellProps) => (
  <Th
    {...props}
    scope={scope}
    tooltip={tooltip}
    onMouseEnter={onMouseEnter}
    textCenter={textCenter}
    component={component}
    className={className}
  >
    {children}
  </Th>
);
HeaderCell.displayName = 'HeaderCell';
