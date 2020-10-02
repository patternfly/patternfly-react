import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/DataList/data-list';
import { Tooltip } from '../Tooltip';
import { DataListWrapModifier } from './DataList';

export enum DataListTextVariant {
  div = 'div',
  nav = 'nav'
}

export interface DataListTextProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered within the data list text */
  children?: React.ReactNode;
  /** Additional classes added to the data list text */
  className?: string;
  /** Determines which element to render as a data list text */
  variant?: DataListTextVariant | 'span' | 'div';
  /** Determines which wrapping modifier to apply to the data list text */
  wrapModifier?: DataListWrapModifier | 'nowrap' | 'truncate' | 'breakWord';
  /** text to display on the tooltip */
  tooltip?: string;
  /** callback used to create the tooltip if text is truncated */
  onMouseEnter?: (event: any) => void;
}

export const DataListText: React.FunctionComponent<DataListTextProps> = ({
  children = null,
  className = '',
  variant = 'span',
  wrapModifier = null,
  tooltip: tooltipProp = '',
  onMouseEnter: onMouseEnterProp = () => {},
  ...props
}: DataListTextProps) => {
  const Component: DataListTextVariant | 'span' | 'div' = variant;

  const [tooltip, setTooltip] = React.useState('');
  const onMouseEnter = (event: any) => {
    if (event.target.offsetWidth < event.target.scrollWidth) {
      setTooltip(tooltipProp || event.target.innerHTML);
    } else {
      setTooltip('');
    }
    onMouseEnterProp(event);
  };

  const text = (
    <Component
      onMouseEnter={onMouseEnter}
      className={css(className, wrapModifier && styles.modifiers[wrapModifier], styles.dataListText)}
      {...props}
    >
      {children}
    </Component>
  );

  return tooltip !== '' ? <Tooltip content={tooltip}>{text}</Tooltip> : text;
};
DataListText.displayName = 'DataListText';
