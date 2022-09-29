import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Toolbar/toolbar';
import { css } from '@patternfly/react-styles';
import { ToolbarContentContext, ToolbarContext } from './ToolbarUtils';
import { formatBreakpointMods } from '../../helpers/util';
import { ToolbarExpandableContent } from './ToolbarExpandableContent';
import { PageContext } from '../Page/PageContext';
import { debounce, canUseDOM } from '../../helpers/util';

export interface ToolbarContentProps extends React.HTMLProps<HTMLDivElement> {
  /** Classes applied to root element of the data toolbar content row */
  className?: string;
  /** Visibility at various breakpoints. */
  visibility?: {
    default?: 'hidden' | 'visible';
    md?: 'hidden' | 'visible';
    lg?: 'hidden' | 'visible';
    xl?: 'hidden' | 'visible';
    '2xl'?: 'hidden' | 'visible';
  };
  /** Vertical alignment. */
  alignSelf?: 'start' | 'center' | 'baseline' | 'default';
  /** Vertical alignment of children */
  alignItems?: 'start' | 'center' | 'baseline' | 'default';
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
// TODO: do i have any toggle groups? do any of them lack a breakpoint prop? I need have ordered references to them.
// I need to know how wide the toggle groups are when they are not collapsed
// How wide are my children collectively? are they wider than me?
// Collapse toggle groups in priority order, expand toggles in reverse priority order
// ToolbarContents tells toggle groups which state they are in and toggle group needs pf-m-show if it's not collapsed.
// BONUS: ToolbarGroups with visibility breakpoint mods could also have a priority order and be hidden when running out of space
export class ToolbarContent extends React.Component<ToolbarContentProps> {
  static displayName = 'ToolbarContent';
  private expandableContentRef = React.createRef<HTMLDivElement>();
  private chipContainerRef = React.createRef<HTMLDivElement>();
  private contentRef = React.createRef<HTMLDivElement>();
  private static currentId = 0;

  static defaultProps: ToolbarContentProps = {
    isExpanded: false,
    showClearFiltersButton: false
  };

  componentDidMount() {
    // Initial check if should be shown
    this.resize();
  }

  resize = () => {
    if (this.contentRef?.current) {
      const currentWidth = this.contentRef.current.clientWidth;

      if (this.state.width !== currentWidth) {
        this.setState({ width: currentWidth });
      }
    }
  };

  handleResize = debounce(this.resize, 250);

  render() {
    const {
      className,
      children,
      isExpanded,
      toolbarId,
      visibility,
      alignItems,
      clearAllFilters,
      showClearFiltersButton,
      clearFiltersButtonText,
      alignSelf,
      ...props
    } = this.props;

    return (
      <PageContext.Consumer>
        {({ width, getBreakpoint }) => (
          <div
            className={css(
              styles.toolbarContent,
              formatBreakpointMods(visibility, styles, '', getBreakpoint(width)),
              className
            )}
            ref={this.contentRef}
            {...props}
          >
            <ToolbarContext.Consumer>
              {({
                toolbarId: toolbarIdContext
              }) => {
                const expandableContentId = `${
                  toolbarId || toolbarIdContext
                }-expandable-content-${ToolbarContent.currentId++}`;
                return (
                  <ToolbarContentContext.Provider
                    value={{
                      chipContainerRef: this.chipContainerRef,
                      contentRef: this.contentRef
                    }}
                  >
                    <div
                      className={css(
                        styles.toolbarContentSection,
                        alignItems === 'center' && styles.modifiers.alignItemsCenter,
                        alignItems === 'start' && styles.modifiers.alignItemsStart,
                        alignItems === 'baseline' && styles.modifiers.alignItemsBaseline,
                        alignSelf === 'center' && styles.modifiers.alignSelfCenter,
                        alignSelf === 'start' && styles.modifiers.alignSelfStart,
                        alignSelf === 'baseline' && styles.modifiers.alignSelfBaseline
                      )}
                    >
                      {children}
                    </div>
                  </ToolbarContentContext.Provider>
                );
              }}
            </ToolbarContext.Consumer>
          </div>
        )}
      </PageContext.Consumer>
    );
  }
}
