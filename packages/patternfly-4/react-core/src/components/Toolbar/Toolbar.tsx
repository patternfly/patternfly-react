import styles from '@patternfly/patternfly/components/Toolbar/toolbar.css';
import { css } from '@patternfly/react-styles';
import React, { HTMLProps } from 'react';


export interface ToolbarProps extends HTMLProps<HTMLDivElement> {
  /** Anything that can be rendered as toolbar content */
  children?: React.ReactNode;
  /** Optional classes for additoinal styles to apply to the toolbar */
  className?: string;
};

const defaultProps = {
  children: null,
  className: null
};

const Toolbar:React.FunctionComponent<ToolbarProps> = ({ children, className, ...props }) => (
  <div {...props} className={css(styles.toolbar, className)}>
    {children}
  </div>
);

Toolbar.defaultProps = defaultProps;

export default Toolbar;
