import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styles from '@patternfly/react-styles/css/components/Toolbar/toolbar';
import { css } from '@patternfly/react-styles';
import { ToolbarGroupProps } from './ToolbarGroup';
import { ToolbarContext, ToolbarContentContext } from './ToolbarUtils';
import { Button } from '../Button';
import globalBreakpointLg from '@patternfly/react-tokens/dist/js/global_breakpoint_lg';

import { ToolbarBreakpointMod } from './ToolbarUtils';
import { formatBreakpointMods, capitalize, toCamel } from '../../helpers/util';
import { PickOptional } from '../../helpers/typeUtils';

export interface ToolbarToggleGroupProps extends ToolbarGroupProps {
  /** An icon to be rendered when the toggle group has collapsed down */
  toggleIcon: React.ReactNode;
  /** The breakpoint at which the toggle group is collapsed down */
  breakpoint: 'md' | 'lg' | 'xl';
  /** An array of objects representing the various modifiers to apply to the data toolbar toggle group at various breakpoints */
  breakpointMods?: ToolbarBreakpointMod[];
}

export class ToolbarToggleGroup extends React.Component<ToolbarToggleGroupProps> {
  static defaultProps: PickOptional<ToolbarToggleGroupProps> = {
    breakpointMods: [] as ToolbarBreakpointMod[]
  };

  isContentPopup = () => {
    const viewportSize = window.innerWidth;
    const lgBreakpointValue = parseInt(globalBreakpointLg.value);
    return viewportSize < lgBreakpointValue;
  };

  render() {
    const { toggleIcon, breakpoint, variant, breakpointMods, className, children, ...props } = this.props;

    return (
      <ToolbarContext.Consumer>
        {({ isExpanded, toggleIsExpanded }) => (
          <ToolbarContentContext.Consumer>
            {({ expandableContentRef, expandableContentId }) => {
              if (expandableContentRef.current && expandableContentRef.current.classList) {
                if (isExpanded) {
                  expandableContentRef.current.classList.add(styles.modifiers.expanded);
                } else {
                  expandableContentRef.current.classList.remove(styles.modifiers.expanded);
                }
              }

              return (
                <div
                  className={css(
                    styles.toolbarGroup,
                    variant && styles.modifiers[toCamel(variant) as 'filterGroup' | 'iconButtonGroup' | 'buttonGroup'],
                    formatBreakpointMods(breakpointMods, styles),
                    styles.modifiers.toggleGroup,
                    styles.modifiers[`showOn${capitalize(breakpoint)}` as 'showOnMd' | 'showOnLg' | 'showOnXl'],
                    className
                  )}
                  {...props}
                >
                  <div className={css(styles.toolbarToggle)}>
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
                  {isExpanded
                    ? ReactDOM.createPortal(children, expandableContentRef.current.firstElementChild)
                    : children}
                </div>
              );
            }}
          </ToolbarContentContext.Consumer>
        )}
      </ToolbarContext.Consumer>
    );
  }
}
