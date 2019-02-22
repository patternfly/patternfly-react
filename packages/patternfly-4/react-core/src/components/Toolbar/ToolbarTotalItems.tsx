import styles from '@patternfly/patternfly/components/Toolbar/toolbar.css';
import { css } from '@patternfly/react-styles';
import React, { HTMLProps } from 'react';

export interface ToolbarTotalItemsProps extends HTMLProps<HTMLDivElement> {
    /** Optional classes for additoinal styles to apply to the toolbar */
    className?: string;
    /** Total items */
    totalItems?: number;
    /** Total items label */
    totalItemsLabel?: string
  };
  
  const defaultProps = {
    className: null,
    totalItems: 0,
    totalItemsLabel: 'Items'
  };
  
  const ToolbarTotalItems:React.FunctionComponent<ToolbarTotalItemsProps> = ({ className, totalItems, totalItemsLabel, ...props }) => (
       <div {...props} className={css(styles.toolbarTotalItems, className)}>{totalItems} {totalItemsLabel}</div>
  )

  ToolbarTotalItems.defaultProps = defaultProps;
  
  export default ToolbarTotalItems;