import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/DataToolbar/data-toolbar';
import { css, getModifier } from '@patternfly/react-styles';
import { DataToolbarGroupProps } from './DataToolbarGroup';
import { Button } from '../../../components/Button';

import {
  DataToolbarBreakpointMod,
  DataToolbarSpacer,
  formatBreakpointMods,
  formatGroupSpacers
} from './DataToolbarUtils';

export interface DataToolbarToggleGroupProps extends DataToolbarGroupProps {
  /** TODO */
  toggleIcon: React.ReactNode;
  /** TODO */
  breakpoint: 'md' | 'lg' | 'xl' | '2xl';
}

export const DataToolbarToggleGroup: React.FunctionComponent<DataToolbarToggleGroupProps> = ({
  toggleIcon,
  breakpoint,
  breakpointMods = [] as DataToolbarBreakpointMod[],
  spacers = [] as DataToolbarSpacer[],
  className,
  mod,
  items,
  ...props
}: DataToolbarToggleGroupProps) => {

  const onToggle = () => {
    console.log("toggle clicked");
  };

  return (
    <div className={css(styles.dataToolbarGroup,
      mod && getModifier(styles, mod),
      formatBreakpointMods(breakpointMods),
      formatGroupSpacers(spacers),
      getModifier(styles, 'toggle-group'),
      className)}
         {...props}>
      <div className={css(styles.dataToolbarToggle)}>
        <Button variant="plain" onClick={onToggle}>{toggleIcon}</Button>
      </div>
      {items}
    </div>
  );
};
