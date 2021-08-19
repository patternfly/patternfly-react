import * as React from 'react';
import { Tooltip } from '@patternfly/react-core/dist/esm/components/Tooltip/Tooltip';
import { Bullseye, EmptyState, SelectProps } from '@patternfly/react-core';
import { Td } from '../TableComposable/Td';

export interface BodyCellProps {
  'data-label'?: string;
  className?: string;
  colSpan?: number;
  component?: React.ReactNode;
  errorText?: string;
  isVisible?: boolean;
  parentId?: number;
  textCenter?: boolean;
  isOpen?: boolean;
  ariaControls?: string;
  editableValue?: any;
  editableSelectProps?: SelectProps;
  options?: React.ReactElement[];
  isSelectOpen?: boolean;
  value?: any;
  isValid?: boolean;
  name?: string;
  tooltip?: string;
  onMouseEnter?: (event: any) => void;
  children: React.ReactNode;
}
export const BodyCell: React.FunctionComponent<BodyCellProps> = ({
  'data-label': dataLabel = '',
  className = '',
  colSpan,
  component = 'td',
  isVisible,
  parentId,
  textCenter = false,
  tooltip: tooltipProp = '',
  onMouseEnter: onMouseEnterProp = () => {},
  children,
  /* eslint-disable @typescript-eslint/no-unused-vars */
  errorText,
  isValid,
  isOpen,
  ariaControls,
  editableValue,
  editableSelectProps,
  options,
  isSelectOpen,
  value,
  name,
  /* eslint-enable @typescript-eslint/no-unused-vars */
  ...props
}: BodyCellProps) => {
  const [tooltip, setTooltip] = React.useState('');
  const onMouseEnter = (event: any) => {
    if (event.target.offsetWidth < event.target.scrollWidth) {
      if (tooltipProp) {
        setTooltip(tooltipProp);
      } else if (typeof children === 'string') {
        setTooltip(children);
      }
    } else {
      setTooltip('');
    }
    onMouseEnterProp(event);
  };

  let isEmptyStateCell = false;
  if (children) {
    isEmptyStateCell =
      ((children as React.ReactElement).type === Bullseye &&
        (children as React.ReactElement).props.children &&
        (children as React.ReactElement).props.children.type === EmptyState) ||
      (children as React.ReactElement).type === EmptyState;
  }

  const cell = (
    <Td
      className={className}
      component={component}
      dataLabel={dataLabel && parentId == null && !isEmptyStateCell ? dataLabel : null}
      onMouseEnter={onMouseEnter}
      textCenter={textCenter}
      colSpan={colSpan}
      {...props}
    >
      {children}
    </Td>
  );

  const bodyCell =
    tooltip !== '' ? (
      <Tooltip content={tooltip} isVisible>
        {cell}
      </Tooltip>
    ) : (
      cell
    );

  return (parentId !== undefined && colSpan === undefined) || !isVisible ? null : bodyCell;
};
BodyCell.displayName = 'BodyCell';
