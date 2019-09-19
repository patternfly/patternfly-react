import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styles from '@patternfly/react-styles/css/components/DataToolbar/data-toolbar';
import { css, getModifier } from '@patternfly/react-styles';
import { DataToolbarGroupProps } from './DataToolbarGroup';
import { DataToolbarContext } from './DataToolbarUtils';
import { Button } from '../../../components/Button';
import { global_breakpoint_lg as globalBreakpointLg } from '@patternfly/react-tokens';

import {
  DataToolbarBreakpointMod,
  DataToolbarSpacer,
  formatSpacers
} from './DataToolbarUtils';
import { formatBreakpointMods } from '../../../helpers/util';

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

  isContentPopup = () => {
    const viewportSize = window.innerWidth;
    const lgBreakpointValue = parseInt(globalBreakpointLg.value);
    return viewportSize < lgBreakpointValue;
  }

  render() {
    const { toggleIcon, breakpoint, variant, breakpointMods, spacers, className, children, ...props } = this.props;

    return (
      <DataToolbarContext.Consumer>
        {({ isExpanded, toggleIsExpanded, expandableContentRef, expandableContentId }) => {
          return (
            <div
              className={css(
                styles.dataToolbarGroup,
                variant && getModifier(styles, variant),
                formatBreakpointMods(breakpointMods, styles),
                formatSpacers(spacers, 'pf-m-space-items'),
                getModifier(styles, 'toggle-group'),
                getModifier(styles, `reveal-on-${breakpoint}`),
                className)}
              {...props}
            >
              <div className={css(styles.dataToolbarToggle)}>
                <Button
                  variant="plain"
                  onClick={toggleIsExpanded}
                  {...isExpanded && { 'aria-expanded': true }}
                  aria-haspopup={isExpanded && this.isContentPopup()}
                  aria-controls={expandableContentId}
                >
                  {toggleIcon}
                </Button>
              </div>
              {isExpanded ? ReactDOM.createPortal(children, expandableContentRef.current.firstElementChild) : children}
            </div>
          );
        }}
      </DataToolbarContext.Consumer>
    );
  }
}
