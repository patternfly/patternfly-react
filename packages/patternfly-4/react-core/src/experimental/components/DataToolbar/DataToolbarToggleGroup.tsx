import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/DataToolbar/data-toolbar';
import { css, getModifier } from '@patternfly/react-styles';
import { DataToolbarGroupProps } from './DataToolbarGroup';
import { DataToolbarContext } from './DataToolbarUtils';
import { Button } from '../../../components/Button';

import {
  DataToolbarBreakpointMod,
  DataToolbarSpacer,
  formatBreakpointMods,
  formatGroupSpacers
} from './DataToolbarUtils';

export interface DataToolbarToggleGroupProps extends DataToolbarGroupProps {
  /** An Icon to be rendered when the toggle group has collapsed down */
  toggleIcon: React.ReactNode;
  /** The breakpoint at which the toggle group is collapsed down */
  breakpoint: 'md' | 'lg' | 'xl' | '2xl';
  /** The generated id of the expandable content TODO */
  expandableContentId?: string;
}

export interface DataToolbarToggleGroupState {}

export class DataToolbarToggleGroup extends React.Component<DataToolbarToggleGroupProps, DataToolbarToggleGroupState> {

  static defaultProps = {
    breakpointMods: [] as DataToolbarBreakpointMod[],
    spacers: [] as DataToolbarSpacer[],
  };

  render() {
    const { mod, breakpointMods, spacers, className, toggleIcon, children, expandableContentId, ...props } = this.props;

    return (
      <DataToolbarContext.Consumer>
        {({isExpanded, updateExpandableContent}) => {
          return (
            <div className={css(styles.dataToolbarGroup,
              mod && getModifier(styles, mod),
              formatBreakpointMods(breakpointMods),
              formatGroupSpacers(spacers),
              getModifier(styles, 'toggle-group'),
              className)}
                 {...props}>
              <div className={css(styles.dataToolbarToggle)}>
                <Button
                  variant="plain"
                  onClick={() => updateExpandableContent(children)}
                  aria-expanded={isExpanded}
                  aria-controls={expandableContentId}>
                  {toggleIcon}
                </Button>
              </div>
              {children}
            </div>
          );
        }}
      </DataToolbarContext.Consumer>
    );
  };
}
