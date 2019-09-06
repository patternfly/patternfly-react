import * as React from 'react';
import * as ReactDOM from 'react-dom';
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
}

export class DataToolbarToggleGroup extends React.Component<DataToolbarToggleGroupProps> {

  static defaultProps = {
    breakpointMods: [] as DataToolbarBreakpointMod[],
    spacers: [] as DataToolbarSpacer[],
  };

  render() {
    const { toggleIcon, breakpoint, mod, breakpointMods, spacers, className, children, ...props } = this.props;

    return (
      <DataToolbarContext.Consumer>
        {({ isExpanded, toggleIsExpanded, expandableContentRef, expandableContentId}) => {
          return (
            <div
              className={css(
                styles.dataToolbarGroup,
                mod && getModifier(styles, mod),
                formatBreakpointMods(breakpointMods),
                formatGroupSpacers(spacers),
                getModifier(styles, 'toggle-group'),
                getModifier(styles, `reveal-on-${breakpoint}`),
                className)}
              {...props}
            >
              <div className={css(styles.dataToolbarToggle)}>
                <Button
                  variant="plain"
                  onClick={() => toggleIsExpanded()}
                  {...isExpanded && { 'aria-expanded': true }}
                  // TODO aria-haspopup when isExpanded = true && viewport is smaller than lg global breakpoint
                  aria-controls={expandableContentId}
                >
                  {toggleIcon}
                </Button>
              </div>
              { isExpanded ? ReactDOM.createPortal(children, expandableContentRef.current): children }
            </div>
          );

        }}
      </DataToolbarContext.Consumer>
    );
  }
}
