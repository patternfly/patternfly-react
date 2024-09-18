import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styles from '@patternfly/react-styles/css/components/Toolbar/toolbar';
import { css } from '@patternfly/react-styles';
import { ToolbarGroupProps } from './ToolbarGroup';
import { ToolbarContext, ToolbarContentContext } from './ToolbarUtils';
import { Button } from '../Button';
import globalBreakpointLg from '@patternfly/react-tokens/dist/esm/t_global_breakpoint_lg';
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
  /** Sets both the column and row gap at various breakpoints. */
  gap?: {
    default?: 'gapNone' | 'gapXs' | 'gapSm' | 'gapMd' | 'gapLg' | 'gapXl' | 'gap_2xl' | 'gap_3xl' | 'gap_4xl';
    md?: 'gapNone' | 'gapXs' | 'gapSm' | 'gapMd' | 'gapLg' | 'gapXl' | 'gap_2xl' | 'gap_3xl' | 'gap_4xl';
    lg?: 'gapNone' | 'gapXs' | 'gapSm' | 'gapMd' | 'gapLg' | 'gapXl' | 'gap_2xl' | 'gap_3xl' | 'gap_4xl';
    xl?: 'gapNone' | 'gapXs' | 'gapSm' | 'gapMd' | 'gapLg' | 'gapXl' | 'gap_2xl' | 'gap_3xl' | 'gap_4xl';
    '2xl'?: 'gapNone' | 'gapXs' | 'gapSm' | 'gapMd' | 'gapLg' | 'gapXl' | 'gap_2xl' | 'gap_3xl' | 'gap_4xl';
  };
  /** Sets only the column gap at various breakpoints. */
  columnGap?: {
    default?:
      | 'columnGapNone'
      | 'columnGapXs'
      | 'columnGapSm'
      | 'columnGapMd'
      | 'columnGapLg'
      | 'columnGapXl'
      | 'columnGap_2xl'
      | 'columnGap_3xl'
      | 'columnGap_4xl';
    md?:
      | 'columnGapNone'
      | 'columnGapXs'
      | 'columnGapSm'
      | 'columnGapMd'
      | 'columnGapLg'
      | 'columnGapXl'
      | 'columnGap_2xl'
      | 'columnGap_3xl'
      | 'columnGap_4xl';
    lg?:
      | 'columnGapNone'
      | 'columnGapXs'
      | 'columnGapSm'
      | 'columnGapMd'
      | 'columnGapLg'
      | 'columnGapXl'
      | 'columnGap_2xl'
      | 'columnGap_3xl'
      | 'columnGap_4xl';
    xl?:
      | 'columnGapNone'
      | 'columnGapXs'
      | 'columnGapSm'
      | 'columnGapMd'
      | 'columnGapLg'
      | 'columnGapXl'
      | 'columnGap_2xl'
      | 'columnGap_3xl'
      | 'columnGap_4xl';
    '2xl'?:
      | 'columnGapNone'
      | 'columnGapXs'
      | 'columnGapSm'
      | 'columnGapMd'
      | 'columnGapLg'
      | 'columnGapXl'
      | 'columnGap_2xl'
      | 'columnGap_3xl'
      | 'columnGap_4xl';
  };
  /** Sets only the row gap at various breakpoints. */
  rowGap?: {
    default?:
      | 'rowGapNone'
      | 'rowGapXs'
      | 'rowGapSm'
      | 'rowGapMd'
      | 'rowGapLg'
      | 'rowGapXl'
      | 'rowGap_2xl'
      | 'rowGap_3xl'
      | 'rowGap_4xl';
    md?:
      | 'rowGapNone'
      | 'rowGapXs'
      | 'rowGapSm'
      | 'rowGapMd'
      | 'rowGapLg'
      | 'rowGapXl'
      | 'rowGap_2xl'
      | 'rowGap_3xl'
      | 'rowGap_4xl';
    lg?:
      | 'rowGapNone'
      | 'rowGapXs'
      | 'rowGapSm'
      | 'rowGapMd'
      | 'rowGapLg'
      | 'rowGapXl'
      | 'rowGap_2xl'
      | 'rowGap_3xl'
      | 'rowGap_4xl';
    xl?:
      | 'rowGapNone'
      | 'rowGapXs'
      | 'rowGapSm'
      | 'rowGapMd'
      | 'rowGapLg'
      | 'rowGapXl'
      | 'rowGap_2xl'
      | 'rowGap_3xl'
      | 'rowGap_4xl';
    '2xl'?:
      | 'rowGapNone'
      | 'rowGapXs'
      | 'rowGapSm'
      | 'rowGapMd'
      | 'rowGapLg'
      | 'rowGapXl'
      | 'rowGap_2xl'
      | 'rowGap_3xl'
      | 'rowGap_4xl';
  };
  /** Reference to a label container group for filters inside the toolbar toggle group */
  labelContainerRef?: React.RefObject<any>;
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
      gap,
      columnGap,
      rowGap,
      className,
      children,
      isExpanded,
      onToggle,
      labelContainerRef,
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
                    labelContainerRef: managedLabelContainerRef,
                    isExpanded: managedIsExpanded,
                    clearAllFilters: clearAllFiltersContext,
                    clearFiltersButtonText: clearFiltersButtonContext,
                    showClearFiltersButton: showClearFiltersButtonContext
                  }) => {
                    const _isExpanded = isExpanded !== undefined ? isExpanded : managedIsExpanded;
                    const _labelContainerRef =
                      labelContainerRef !== undefined ? labelContainerRef : managedLabelContainerRef;

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
                        labelContainerRef={_labelContainerRef}
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
                          icon={toggleIcon}
                        />
                      </div>
                    );

                    return (
                      <div
                        className={css(
                          styles.toolbarGroup,
                          styles.modifiers.toggleGroup,
                          variant &&
                            styles.modifiers[
                              toCamel(variant) as
                                | 'filterGroup'
                                | 'actionGroup'
                                | 'actionGroupInline'
                                | 'actionGroupPlain'
                                | 'labelGroup'
                            ],
                          formatBreakpointMods(breakpointMod, styles, '', getBreakpoint(width)),
                          formatBreakpointMods(visibility, styles, '', getBreakpoint(width)),
                          formatBreakpointMods(gap, styles, '', getBreakpoint(width)),
                          formatBreakpointMods(columnGap, styles, '', getBreakpoint(width)),
                          formatBreakpointMods(rowGap, styles, '', getBreakpoint(width)),
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
