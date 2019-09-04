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
  /** An Icon to be rendered when the toggle group has collapsed down */
  toggleIcon: React.ReactNode;
  /** The breakpoint at which the toggle group is collapsed down */
  breakpoint: 'md' | 'lg' | 'xl' | '2xl';
  /** The generated id of the expandable content TODO */
  expandableContentId?: string;
}

export interface DataToolbarToggleGroupState {
  /** Flag indicating the if the expandable content is expanded */
  isExpanded: boolean;
}

export class DataToolbar extends React.Component<DataToolbarToggleGroupProps, DataToolbarToggleGroupState> {

  static defaultProps = {
    breakpointMods: [] as DataToolbarBreakpointMod[],
    spacers: [] as DataToolbarSpacer[],
  };

  constructor(props: DataToolbarToggleGroupProps) {
    super(props);

    this.state = {
      isExpanded: false
    }
  };

  onToggle = () => {
    this.setState({isExpanded: !this.state.isExpanded});
  };

  render() {
    const { mod, breakpointMods, spacers, className, toggleIcon, items, expandableContentId, ...props } = this.props;
    const { isExpanded } = this.state;

    return (
      <div className={css(styles.dataToolbarGroup,
        mod && getModifier(styles, mod),
        formatBreakpointMods(breakpointMods),
        formatGroupSpacers(spacers),
        getModifier(styles, 'toggle-group'),
        className)}
           {...props}>
        <div className={css(styles.dataToolbarToggle)}>
          <Button variant="plain" onClick={this.onToggle} aria-expanded={isExpanded} aria-controls={expandableContentId}>{toggleIcon}</Button>
        </div>
        {items}
      </div>
    );
  };
}
