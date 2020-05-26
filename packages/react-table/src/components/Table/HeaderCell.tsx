import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';
import { Tooltip } from '@patternfly/react-core/dist/js/components/Tooltip/Tooltip';

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
  tooltip: tooltipProp = '',
  onMouseEnter: onMouseEnterProp = () => {},
  children,
  /* eslint-disable @typescript-eslint/no-unused-vars */
  isVisible,
  dataLabel = '',
  /* eslint-enable @typescript-eslint/no-unused-vars */
  ...props
}: HeaderCellProps) => {
  const mappedProps = {
    ...(scope ? { scope } : {}),
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
    >
      {children}
    </Component>
  );

  return tooltip !== '' ? <Tooltip content={tooltip}>{cell}</Tooltip> : cell;
};
