import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styles from '@patternfly/react-styles/css/components/Toolbar/toolbar';
import { css } from '@patternfly/react-styles';
import { ToolbarGroupProps } from './ToolbarGroup';
import { ToolbarContext, ToolbarContentContext } from './ToolbarUtils';
import { Button } from '../Button';
import globalBreakpointLg from '@patternfly/react-tokens/dist/esm/global_breakpoint_lg';
import { formatBreakpointMods, toCamel, canUseDOM } from '../../helpers/util';
import { PageContext } from '../Page/PageContext';
import { ToolbarExpandableContent } from './ToolbarExpandableContent';

export interface ToolbarToggleGroupProps extends ToolbarGroupProps {
  /** Flag indicating when toggle group is expanded for non-managed toolbar toggle groups. */
  isExpanded?: boolean;
  /** Callback for toggle group click event for non-managed toolbar toggle groups. */
  onToggle?: (event: React.MouseEvent) => void;
  /** An icon to be rendered when the toggle group has collapsed down */
  toggleIcon: React.ReactNode;
  /** Controls when filters are shown and when the toggle button is hidden. */
  breakpoint: 'md' | 'lg' | 'xl' | '2xl';
  /** Visibility at various breakpoints. */
  visibility?: {
    default?: 'hidden' | 'visible';
    md?: 'hidden' | 'visible';
    lg?: 'hidden' | 'visible';
    xl?: 'hidden' | 'visible';
    '2xl'?: 'hidden' | 'visible';
  };
  /** Alignment at various breakpoints. */
  alignment?: {
    default?: 'alignRight' | 'alignLeft';
    md?: 'alignRight' | 'alignLeft';
    lg?: 'alignRight' | 'alignLeft';
    xl?: 'alignRight' | 'alignLeft';
    '2xl'?: 'alignRight' | 'alignLeft';
  };
  /** Spacers at various breakpoints. */
  spacer?: {
    default?: 'spacerNone' | 'spacerSm' | 'spacerMd' | 'spacerLg';
    md?: 'spacerNone' | 'spacerSm' | 'spacerMd' | 'spacerLg';
    lg?: 'spacerNone' | 'spacerSm' | 'spacerMd' | 'spacerLg';
    xl?: 'spacerNone' | 'spacerSm' | 'spacerMd' | 'spacerLg';
    '2xl'?: 'spacerNone' | 'spacerSm' | 'spacerMd' | 'spacerLg';
  };
  /** Space items at various breakpoints. */
  spaceItems?: {
    default?: 'spaceItemsNone' | 'spaceItemsSm' | 'spaceItemsMd' | 'spaceItemsLg';
    md?: 'spaceItemsNone' | 'spaceItemsSm' | 'spaceItemsMd' | 'spaceItemsLg';
    lg?: 'spaceItemsNone' | 'spaceItemsSm' | 'spaceItemsMd' | 'spaceItemsLg';
    xl?: 'spaceItemsNone' | 'spaceItemsSm' | 'spaceItemsMd' | 'spaceItemsLg';
    '2xl'?: 'spaceItemsNone' | 'spaceItemsSm' | 'spaceItemsMd' | 'spaceItemsLg';
  };
  /** Reference to a chip container group for filters inside the toolbar toggle group */
  chipContainerRef?: React.RefObject<any>;
  /** Optional callback for clearing all filters in the toolbar toggle group */
  clearAllFilters?: () => void;
  /** Flag indicating that the clear all filters button should be visible in the toolbar toggle group */
  showClearFiltersButton?: boolean;
  /** Text to display in the clear all filters button of the toolbar toggle group */
  clearFiltersButtonText?: string;
}

class ToolbarToggleGroup extends React.Component<ToolbarToggleGroupProps> {
  static displayName = 'ToolbarToggleGroup';
  toggleRef = React.createRef<HTMLButtonElement>();
  expandableContentRef = React.createRef<HTMLDivElement>();

  isContentPopup = () => {
    const viewportSize = canUseDOM ? window.innerWidth : 1200;
    const lgBreakpointValue = parseInt(globalBreakpointLg.value);
    return viewportSize < lgBreakpointValue;
  };

  render() {
    const {
      toggleIcon,
      variant,
      visibility,
      breakpoint,
      alignment,
      spacer,
      spaceItems,
      className,
      children,
      isExpanded,
      onToggle,
      chipContainerRef,
      clearAllFilters,
      showClearFiltersButton,
      clearFiltersButtonText,
      ...props
    } = this.props;

    if (!breakpoint && !toggleIcon) {
      // eslint-disable-next-line no-console
      console.error('ToolbarToggleGroup will not be visible without a breakpoint or toggleIcon.');
    }

    return (
      <PageContext.Consumer>
        {({ width, getBreakpoint }) => (
          <ToolbarContext.Consumer>
            {({ toggleIsExpanded: managedOnToggle }) => {
              const _onToggle = onToggle !== undefined ? onToggle : managedOnToggle;

              return (
                <ToolbarContentContext.Consumer>
                  {({
                    expandableContentRef,
                    expandableContentId,
                    chipContainerRef: managedChipContainerRef,
                    isExpanded: managedIsExpanded,
                    clearAllFilters: clearAllFiltersContext,
                    clearFiltersButtonText: clearFiltersButtonContext,
                    showClearFiltersButton: showClearFiltersButtonContext
                  }) => {
                    const _isExpanded = isExpanded !== undefined ? isExpanded : managedIsExpanded;
                    const _chipContainerRef =
                      chipContainerRef !== undefined ? chipContainerRef : managedChipContainerRef;

                    const breakpointMod: {
                      md?: 'show';
                      lg?: 'show';
                      xl?: 'show';
                      '2xl'?: 'show';
                    } = {};
                    breakpointMod[breakpoint] = 'show';

                    const expandableContent = (
                      <ToolbarExpandableContent
                        id={expandableContentId}
                        expandableContentRef={this.expandableContentRef}
                        isExpanded={_isExpanded}
                        clearAllFilters={clearAllFilters || clearAllFiltersContext}
                        showClearFiltersButton={showClearFiltersButton || showClearFiltersButtonContext}
                        clearFiltersButtonText={clearFiltersButtonText || clearFiltersButtonContext}
                        chipContainerRef={_chipContainerRef}
                      >
                        {children}
                      </ToolbarExpandableContent>
                    );

                    const toggleButton = (
                      <div className={css(styles.toolbarToggle)}>
                        <Button
                          variant="plain"
                          onClick={_onToggle}
                          aria-label="Show Filters"
                          {...(_isExpanded && { 'aria-expanded': true })}
                          aria-haspopup={_isExpanded && this.isContentPopup()}
                          aria-controls={_isExpanded ? expandableContentId : undefined}
                          ref={this.toggleRef}
                        >
                          {toggleIcon}
                        </Button>
                      </div>
                    );

                    return (
                      <div
                        className={css(
                          styles.toolbarGroup,
                          styles.modifiers.toggleGroup,
                          variant &&
                            styles.modifiers[toCamel(variant) as 'filterGroup' | 'iconButtonGroup' | 'buttonGroup'],
                          formatBreakpointMods(breakpointMod, styles, '', getBreakpoint(width)),
                          formatBreakpointMods(visibility, styles, '', getBreakpoint(width)),
                          formatBreakpointMods(alignment, styles, '', getBreakpoint(width)),
                          formatBreakpointMods(spacer, styles, '', getBreakpoint(width)),
                          formatBreakpointMods(spaceItems, styles, '', getBreakpoint(width)),
                          className
                        )}
                        {...props}
                      >
                        {toggleButton}
                        {_isExpanded && ReactDOM.createPortal(expandableContent, expandableContentRef.current)}
                        {!_isExpanded && children}
                      </div>
                    );
                  }}
                </ToolbarContentContext.Consumer>
              );
            }}
          </ToolbarContext.Consumer>
        )}
      </PageContext.Consumer>
    );
  }
}

export { ToolbarToggleGroup };
