import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styles from '@patternfly/react-styles/css/components/DataToolbar/data-toolbar';
import { css, getModifier } from '@patternfly/react-styles';
import { DataToolbarGroupProps } from './DataToolbarGroup';
import { DataToolbarContext, DataToolbarContentContext } from './DataToolbarUtils';
import { Button } from '../../../components/Button';
import { global_breakpoint_lg as globalBreakpointLg } from '@patternfly/react-tokens';

import { DataToolbarBreakpointMod } from './DataToolbarUtils';
import { formatBreakpointMods } from '../../../helpers/util';

export interface DataToolbarToggleGroupProps extends DataToolbarGroupProps {
  /** An icon to be rendered when the toggle group has collapsed down */
  toggleIcon: React.ReactNode;
  /** The breakpoint at which the toggle group is collapsed down */
  breakpoint: 'md' | 'lg' | 'xl';
}

export class DataToolbarToggleGroup extends React.Component<DataToolbarToggleGroupProps> {
  static defaultProps = {
    breakpointMods: [] as DataToolbarBreakpointMod[]
  };

  isContentPopup = () => {
    const viewportSize = window.innerWidth;
    const lgBreakpointValue = parseInt(globalBreakpointLg.value);
    return viewportSize < lgBreakpointValue;
  };

  render() {
    const { toggleIcon, breakpoint, variant, breakpointMods, className, children, ...props } = this.props;

    return (
      <DataToolbarContext.Consumer>
        {({ isExpanded, toggleIsExpanded }) => {
          return (
            <DataToolbarContentContext.Consumer>
              {({ expandableContentRef, expandableContentId }) => {

                if (expandableContentRef.current && expandableContentRef.current.classList) {
                  if (isExpanded) {
                    expandableContentRef.current.classList.add(getModifier(styles, 'expanded'));
                  } else {
                    expandableContentRef.current.classList.remove(getModifier(styles, 'expanded'));
                  }
                }

                return (
                  <div
                    className={css(
                      styles.dataToolbarGroup,
                      variant && getModifier(styles, variant),
                      formatBreakpointMods(breakpointMods, styles),
                      getModifier(styles, 'toggle-group'),
                      getModifier(styles, `show-on-${breakpoint}`),
                      className
                    )}
                    {...props}
                  >
                    <div className={css(styles.dataToolbarToggle)}>
                      <Button
                        variant="plain"
                        onClick={toggleIsExpanded}
                        aria-label="Show Filters"
                        {...(isExpanded && { 'aria-expanded': true })}
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
            </DataToolbarContentContext.Consumer>
          );
        }}
      </DataToolbarContext.Consumer>
    );
  }
}
