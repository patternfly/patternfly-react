import * as React from 'react';
import { css } from '@patternfly/react-styles';
import { Tooltip } from '@patternfly/react-core';
import styles from '@patternfly/react-styles/css/components/Table/table';

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
  value,
  name,
  /* eslint-enable @typescript-eslint/no-unused-vars */
  ...props
}: BodyCellProps) => {
  const mappedProps = {
    ...(dataLabel ? { 'data-label': dataLabel } : {}),
    ...props
  };

  const [tooltip, setTooltip] = React.useState('');
  const onMouseEnter = (event: any) => {
    if (event.target.offsetWidth < event.target.scrollWidth) {
      setTooltip(tooltipProp || event.target.innerHTML);
    } else {
      setTooltip('');
    }
    onMouseEnterProp(event);
  };

  const Component = component as any;
  const cell = (
    <Component
      {...mappedProps}
      onMouseEnter={onMouseEnter}
      className={css(className, textCenter && styles.modifiers.center)}
      colSpan={colSpan}
    >
      {children}
    </Component>
  );

  const bodyCell = tooltip !== '' ? <Tooltip content={tooltip}>{cell}</Tooltip> : cell;

  return (parentId !== undefined && colSpan === undefined) || !isVisible ? null : bodyCell;
};
