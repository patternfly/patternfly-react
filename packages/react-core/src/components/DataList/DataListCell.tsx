import { FunctionComponent, useRef, useState, useEffect } from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/DataList/data-list';
import { DataListWrapModifier } from './DataList';
import { Tooltip } from '../Tooltip';

export interface DataListCellProps extends Omit<React.HTMLProps<HTMLDivElement>, 'width'> {
  /** Content rendered inside the DataList cell */
  children?: React.ReactNode;
  /** Additional classes added to the DataList cell */
  className?: string;
  /** Width (from 1-5) to the DataList cell */
  width?: 1 | 2 | 3 | 4 | 5;
  /** Enables the body Content to fill the height of the card */
  isFilled?: boolean;
  /**  Aligns the cell content to the right of its parent. */
  alignRight?: boolean;
  /** Set to true if the cell content is an Icon */
  isIcon?: boolean;
  /** Determines which wrapping modifier to apply to the DataListCell */
  wrapModifier?: DataListWrapModifier | 'nowrap' | 'truncate' | 'breakWord';
}

export const DataListCell: FunctionComponent<DataListCellProps> = ({
  children = null,
  className = '',
  width = 1,
  isFilled = true,
  alignRight = false,
  isIcon = false,
  wrapModifier = null,
  ...props
}: DataListCellProps) => {
  const cellRef = useRef(null);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  useEffect(() => {
    if (!cellRef.current || wrapModifier !== 'truncate') {
      return;
    }
    const showTooltip = cellRef.current && cellRef.current.offsetWidth < cellRef.current.scrollWidth;
    if (isTooltipVisible !== showTooltip) {
      setIsTooltipVisible(showTooltip);
    }
  }, [cellRef, wrapModifier, isTooltipVisible]);

  return (
    <div
      className={css(
        styles.dataListCell,
        width > 1 && styles.modifiers[`flex_${width}` as 'flex_2' | 'flex_3' | 'flex_4' | 'flex_5'],
        !isFilled && styles.modifiers.noFill,
        alignRight && styles.modifiers.alignRight,
        isIcon && styles.modifiers.icon,
        className,
        wrapModifier && styles.modifiers[wrapModifier]
      )}
      {...(isTooltipVisible && { tabIndex: 0 })}
      ref={cellRef}
      {...props}
    >
      {children}
      {isTooltipVisible && <Tooltip content={children} triggerRef={cellRef} />}
    </div>
  );
};
DataListCell.displayName = 'DataListCell';
