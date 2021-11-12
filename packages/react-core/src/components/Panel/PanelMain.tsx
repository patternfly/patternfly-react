import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Panel/panel';
import { css } from '@patternfly/react-styles';

export interface PanelMainProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside the panel main div */
  children?: React.ReactNode;
  /** Class to add to outer div */
  className?: string;
  /** Max height of the panel main div as a number of px or string percentage */
  maxHeight?: string | number;
}

export const PanelMain: React.FunctionComponent<PanelMainProps> = ({
  className,
  children,
  maxHeight,
  ...props
}: PanelMainProps) => {
  const compiledProps = {
    className: css(styles.panelMain, className),
    ...(maxHeight && { style: { maxHeight, overflow: 'auto' } })
  } as React.HTMLAttributes<HTMLElement>;

  return (
    <div {...compiledProps} {...props}>
      {children}
    </div>
  );
};

PanelMain.displayName = 'PanelMain';
