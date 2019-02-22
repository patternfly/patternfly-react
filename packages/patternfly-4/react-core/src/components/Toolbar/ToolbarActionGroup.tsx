import styles from '@patternfly/patternfly/components/Toolbar/toolbar.css';
import { css } from '@patternfly/react-styles';
import React, { HTMLProps } from 'react';
import {ButtonProps} from '../Button';

export interface ToolbarActionGroupProps extends HTMLProps<HTMLDivElement>  {
    /** Array of Buttons */
    actionItems: React.ReactNode[];
    /** Classes applied to toolbar group */
    className?: string
  };
  
  const defaultProps = {
    className: null
  };
  
  export type ToolbarActtionGroupType<T> = React.FunctionComponent<ToolbarActionGroupProps>;

  const ToolbarActionGroup:React.FunctionComponent<ToolbarActionGroupProps> = ({ actionItems, className, ...props }) => (
    <div {...props} className={css(styles.toolbarActionGroup, className)}>
      {actionItems}
    </div>
  );
  
  ToolbarActionGroup.defaultProps = defaultProps;
  
  export default ToolbarActionGroup;
  