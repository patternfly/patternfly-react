import * as React from 'react';
import { formatBreakpointMods, formatGroupSpacers } from './DataToolbarUtils';
import styles from '@patternfly/react-styles/css/components/DataToolbar/data-toolbar';
import { css, getModifier } from '@patternfly/react-styles';
import { DataToolbarGroup, DataToolbarGroupProps } from './DataToolbarGroup';
import { Button } from '../../../components/Button';

// basically extends DataToolBar group with a couple extra props

export interface DataToolbarToggleGroupProps extends DataToolbarGroupProps {
  /** TODO */
  toggleIcon: React.ReactNode;
  /** TODO */
  breakpoint: 'md' | 'lg' | 'xl' | '2xl';
}


export const DataToolbarToggleGroup: React.FunctionComponent<DataToolbarToggleGroupProps> = ({
  toggleIcon,
  breakpoint,
  children,
  mod,
  breakpointMods,
  spacers,
  className,
  ...props
}: DataToolbarToggleGroupProps) => {

  const onToggle = () => {
    console.log("toggle clicked");
  };

  return <DataToolbarGroup
    className={css(styles.dataToolbarGroup,
      mod && getModifier(styles, mod),
      formatBreakpointMods(breakpointMods),
      formatGroupSpacers(spacers),
      getModifier(styles, 'toggle-group'),
      `pf-m-reveal-on-${breakpoint}`,
      className)}
    {...props}
  >
    <div className={css(styles.dataToolbarToggle)}>
      <Button variant="plain" onClick={onToggle}>{toggleIcon}</Button>
    </div>
    {children}
  </DataToolbarGroup>;
}
