import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Toolbar/toolbar';
import { css } from '@patternfly/react-styles';
import { ToolbarBreakpointMod, ToolbarContentContext, ToolbarContext } from './ToolbarUtils';
import { formatBreakpointMods } from '../../helpers/util';
import { ToolbarExpandableContent } from './ToolbarExpandableContent';

export interface ToolbarContentProps extends React.HTMLProps<HTMLDivElement> {
  /** Classes applied to root element of the data toolbar content row */
  className?: string;
  /** An array of objects representing the various modifiers to apply to the content row at various breakpoints */
  breakpointMods?: ToolbarBreakpointMod[];
  /** Content to be rendered as children of the content row */
  children?: React.ReactNode;
  /** Flag indicating if a data toolbar toggle group's expandable content is expanded */
  isExpanded?: boolean;
  /** Optional callback for clearing all filters in the toolbar */
  clearAllFilters?: () => void;
  /** Flag indicating that the clear all filters button should be visible */
  showClearFiltersButton?: boolean;
  /** Text to display in the clear all filters button */
  clearFiltersButtonText?: string;
  /** Id of the parent Toolbar component */
  toolbarId?: string;
}

export class ToolbarContent extends React.Component<ToolbarContentProps> {
  private expandableContentRef = React.createRef<HTMLDivElement>();
  private chipContainerRef = React.createRef<HTMLDivElement>();
  private static currentId = 0;

  static defaultProps: ToolbarContentProps = {
    isExpanded: false,
    breakpointMods: [] as ToolbarBreakpointMod[],
    showClearFiltersButton: false
  };

  render() {
    const {
      className,
      children,
      isExpanded,
      toolbarId,
      breakpointMods,
      clearAllFilters,
      showClearFiltersButton,
      clearFiltersButtonText,
      ...props
    } = this.props;

    return (
      <div className={css(styles.toolbarContent, formatBreakpointMods(breakpointMods, styles), className)} {...props}>
        <ToolbarContext.Consumer>
          {({
            clearAllFilters: clearAllFiltersContext,
            clearFiltersButtonText: clearFiltersButtonContext,
            showClearFiltersButton: showClearFiltersButtonContext,
            toolbarId: toolbarIdContext
          }) => {
            const expandableContentId = `${toolbarId ||
              toolbarIdContext}-expandable-content-${ToolbarContent.currentId++}`;
            return (
              <ToolbarContentContext.Provider
                value={{
                  expandableContentRef: this.expandableContentRef,
                  expandableContentId,
                  chipContainerRef: this.chipContainerRef
                }}
              >
                <div className={css(styles.toolbarContentSection)}>{children}</div>
                <ToolbarExpandableContent
                  id={expandableContentId}
                  isExpanded={isExpanded}
                  expandableContentRef={this.expandableContentRef}
                  chipContainerRef={this.chipContainerRef}
                  clearAllFilters={clearAllFilters || clearAllFiltersContext}
                  showClearFiltersButton={showClearFiltersButton || showClearFiltersButtonContext}
                  clearFiltersButtonText={clearFiltersButtonText || clearFiltersButtonContext}
                />
              </ToolbarContentContext.Provider>
            );
          }}
        </ToolbarContext.Consumer>
      </div>
    );
  }
}
