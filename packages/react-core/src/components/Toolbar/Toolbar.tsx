import { Component, createRef } from 'react';
import styles from '@patternfly/react-styles/css/components/Toolbar/toolbar';
import { GenerateId } from '../../helpers/GenerateId/GenerateId';
import { css } from '@patternfly/react-styles';
import { ToolbarContext, globalBreakpoints, containerBreakpoints } from './ToolbarUtils';
import { ToolbarLabelGroupContent } from './ToolbarLabelGroupContent';
import { formatBreakpointMods, canUseDOM } from '../../helpers/util';
import { getDefaultOUIAId, getOUIAProps, OUIAProps } from '../../helpers';
import { PageContext } from '../Page/PageContext';
import { getResizeObserver } from '../../helpers/resizeObserver';

export enum ToolbarColorVariant {
  default = 'default',
  primary = 'primary',
  secondary = 'secondary',
  noBackground = 'no-background'
}

export interface ToolbarProps extends React.HTMLProps<HTMLDivElement>, OUIAProps {
  /** Optional callback for clearing all filters in the toolbar */
  clearAllFilters?: () => void;
  /** Text to display in the clear all filters button */
  clearFiltersButtonText?: string;
  /** Custom content appended to the filter generated label group. To maintain spacing and styling, each node should be wrapped in a ToolbarItem or ToolbarGroup. This property will remove the default "Clear all filters" button. */
  customLabelGroupContent?: React.ReactNode;
  /** The breakpoint at which the listed filters in label groups are collapsed down to a summary */
  collapseListedFiltersBreakpoint?: 'all' | 'md' | 'lg' | 'xl' | '2xl';
  /** Flag indicating if a data toolbar toggle group's expandable content is expanded */
  isExpanded?: boolean;
  /** A callback for setting the isExpanded flag */
  toggleIsExpanded?: () => void;
  /** Classes applied to root element of the data toolbar */
  className?: string;
  /** Content to be rendered as rows in the data toolbar */
  children?: React.ReactNode;
  /** Id of the data toolbar */
  id?: string;
  /** Flag indicating the toolbar height should expand to the full height of the container */
  isFullHeight?: boolean;
  /** Flag indicating the toolbar is static */
  isStatic?: boolean;
  /** Flag indicating the toolbar should stick to the top of its container */
  isSticky?: boolean;
  /** Insets at various breakpoints. */
  inset?: {
    default?: 'insetNone' | 'insetSm' | 'insetMd' | 'insetLg' | 'insetXl' | 'inset2xl';
    sm?: 'insetNone' | 'insetSm' | 'insetMd' | 'insetLg' | 'insetXl' | 'inset2xl';
    md?: 'insetNone' | 'insetSm' | 'insetMd' | 'insetLg' | 'insetXl' | 'inset2xl';
    lg?: 'insetNone' | 'insetSm' | 'insetMd' | 'insetLg' | 'insetXl' | 'inset2xl';
    xl?: 'insetNone' | 'insetSm' | 'insetMd' | 'insetLg' | 'insetXl' | 'inset2xl';
    '2xl'?: 'insetNone' | 'insetSm' | 'insetMd' | 'insetLg' | 'insetXl' | 'inset2xl';
  };
  /** Text to display in the total number of applied filters ToolbarFilter */
  numberOfFiltersText?: (numberOfFilters: number) => string;
  /** Value to overwrite the randomly generated data-ouia-component-id.*/
  ouiaId?: number | string;
  /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
  ouiaSafe?: boolean;
  /** Background color variant of the toolbar */
  colorVariant?: ToolbarColorVariant | 'default' | 'no-background' | 'primary' | 'secondary';
  /** Flag indicating the toolbar padding is removed */
  hasNoPadding?: boolean;
  /** Use container queries instead of viewport media queries for responsive behavior */
  useContainerQuery?: boolean;
  /** Breakpoint for container queries. Only applies when useContainerQuery is true. */
  containerQueryBreakpoint?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

export interface ToolbarState {
  /** Flag used if the user has opted NOT to manage the 'isExpanded' state of the toggle group.
   *  Indicates whether or not the toggle group is expanded. */
  isManagedToggleExpanded: boolean;
  /** Object managing information about how many labels are in each label group */
  filterInfo: FilterInfo;
  /** Used to keep track of window width so we can collapse expanded content when window is resizing */
  windowWidth: number;
  /** Used to keep track of container width so we can collapse expanded content when container is resizing */
  containerWidth: number;
  ouiaStateId: string;
}

interface FilterInfo {
  [key: string]: number;
}

class Toolbar extends Component<ToolbarProps, ToolbarState> {
  static displayName = 'Toolbar';
  labelGroupContentRef = createRef<HTMLDivElement>();
  toolbarRef = createRef<HTMLDivElement>();
  observer: any = () => {};
  staticFilterInfo = {};
  hasNoPadding = false;
  state = {
    isManagedToggleExpanded: false,
    filterInfo: {},
    windowWidth: canUseDOM ? window.innerWidth : 1200,
    containerWidth: 0,
    ouiaStateId: getDefaultOUIAId(Toolbar.displayName)
  };

  isToggleManaged = () => !(this.props.isExpanded || !!this.props.toggleIsExpanded);

  toggleIsExpanded = () => {
    this.setState((prevState) => ({
      isManagedToggleExpanded: !prevState.isManagedToggleExpanded
    }));
  };

  closeExpandableContent = (e: any) => {
    if (e.target.innerWidth !== this.state.windowWidth) {
      this.setState(() => ({
        isManagedToggleExpanded: false,
        windowWidth: e.target.innerWidth
      }));
    }
  };

  closeExpandableContentOnContainerResize = () => {
    if (this.toolbarRef.current && this.toolbarRef.current.clientWidth) {
      const newWidth = this.toolbarRef.current.clientWidth;

      if (newWidth !== this.state.containerWidth) {
        // If expanded and container is wide enough for inline display at the specific breakpoint, close it
        const specificBreakpoint = this.props.containerQueryBreakpoint || 'lg';

        // Use container breakpoints when using container queries, otherwise use global breakpoints
        let isWideEnoughForInline: boolean;
        if (this.props.useContainerQuery) {
          // Handle 'sm' case for container breakpoints
          const breakpointKey = specificBreakpoint === 'sm' ? 'sm' : specificBreakpoint;
          isWideEnoughForInline = newWidth >= containerBreakpoints[breakpointKey];
        } else {
          // Handle 'sm' case - map to 'md' since globalBreakpoints doesn't have 'sm'
          const breakpointKey = specificBreakpoint === 'sm' ? 'md' : specificBreakpoint;
          isWideEnoughForInline = newWidth >= globalBreakpoints[breakpointKey];
        }

        if (this.state.isManagedToggleExpanded && isWideEnoughForInline) {
          this.setState(() => ({
            isManagedToggleExpanded: false,
            containerWidth: newWidth
          }));
        } else {
          // Just update width without closing
          this.setState(() => ({
            containerWidth: newWidth
          }));
        }
      }
    }
  };

  componentDidMount() {
    if (this.isToggleManaged() && canUseDOM) {
      if (this.props.useContainerQuery && this.toolbarRef.current) {
        this.observer = getResizeObserver(this.toolbarRef.current, this.closeExpandableContentOnContainerResize, true);
      } else {
        window.addEventListener('resize', this.closeExpandableContent);
      }
    }
  }

  componentWillUnmount() {
    if (this.isToggleManaged() && canUseDOM) {
      if (this.props.useContainerQuery) {
        this.observer();
      } else {
        window.removeEventListener('resize', this.closeExpandableContent);
      }
    }
  }

  updateNumberFilters = (categoryName: string, numberOfFilters: number) => {
    const filterInfoToUpdate: FilterInfo = { ...this.staticFilterInfo };
    if (!filterInfoToUpdate.hasOwnProperty(categoryName) || filterInfoToUpdate[categoryName] !== numberOfFilters) {
      filterInfoToUpdate[categoryName] = numberOfFilters;
      this.staticFilterInfo = filterInfoToUpdate;
      this.setState({ filterInfo: filterInfoToUpdate });
    }
  };

  getNumberOfFilters = () =>
    Object.values(this.state.filterInfo).reduce((acc: any, cur: any) => acc + cur, 0) as number;

  renderToolbar = (randomId: string) => {
    const {
      hasNoPadding,
      clearAllFilters,
      clearFiltersButtonText,
      collapseListedFiltersBreakpoint,
      isExpanded: isExpandedProp,
      toggleIsExpanded,
      className,
      children,
      isFullHeight,
      isStatic,
      inset,
      isSticky,
      ouiaId,
      numberOfFiltersText,
      customLabelGroupContent,
      colorVariant = ToolbarColorVariant.default,
      useContainerQuery,
      containerQueryBreakpoint,
      ...props
    } = this.props;

    const { isManagedToggleExpanded } = this.state;

    const isToggleManaged = this.isToggleManaged();
    const isExpanded = isToggleManaged ? isManagedToggleExpanded : isExpandedProp;
    const numberOfFilters = this.getNumberOfFilters();
    const showClearFiltersButton = numberOfFilters > 0;

    return (
      <PageContext.Consumer>
        {({ width, getBreakpoint }) => (
          <div
            className={css(
              styles.toolbar,
              hasNoPadding && styles.modifiers.noPadding,
              isFullHeight && styles.modifiers.fullHeight,
              isStatic && styles.modifiers.static,
              isSticky && styles.modifiers.sticky,
              useContainerQuery && !containerQueryBreakpoint && styles.modifiers.container,
              useContainerQuery &&
                containerQueryBreakpoint &&
                ((): string => {
                  const breakpointClassMap: Record<string, string> = {
                    '2xl': styles.modifiers.container_2xl,
                    sm: styles.modifiers.containerSm,
                    md: styles.modifiers.containerMd,
                    lg: styles.modifiers.containerLg,
                    xl: styles.modifiers.containerXl
                  };
                  return breakpointClassMap[containerQueryBreakpoint] || '';
                })(),
              formatBreakpointMods(inset, styles, '', getBreakpoint(width)),
              colorVariant === 'primary' && styles.modifiers.primary,
              colorVariant === 'secondary' && styles.modifiers.secondary,
              colorVariant === 'no-background' && styles.modifiers.noBackground,
              className
            )}
            id={randomId}
            ref={this.toolbarRef}
            {...getOUIAProps(Toolbar.displayName, ouiaId !== undefined ? ouiaId : this.state.ouiaStateId)}
            {...props}
          >
            <ToolbarContext.Provider
              value={{
                isExpanded,
                toggleIsExpanded: isToggleManaged ? this.toggleIsExpanded : toggleIsExpanded,
                labelGroupContentRef: this.labelGroupContentRef,
                updateNumberFilters: this.updateNumberFilters,
                numberOfFilters,
                clearAllFilters,
                clearFiltersButtonText,
                showClearFiltersButton,
                toolbarId: randomId,
                customLabelGroupContent,
                useContainerQuery
              }}
            >
              {children}
              <ToolbarLabelGroupContent
                isExpanded={isExpanded}
                labelGroupContentRef={this.labelGroupContentRef}
                clearAllFilters={clearAllFilters}
                showClearFiltersButton={showClearFiltersButton}
                clearFiltersButtonText={clearFiltersButtonText}
                numberOfFilters={numberOfFilters}
                numberOfFiltersText={numberOfFiltersText}
                collapseListedFiltersBreakpoint={collapseListedFiltersBreakpoint}
                customLabelGroupContent={customLabelGroupContent}
              />
            </ToolbarContext.Provider>
          </div>
        )}
      </PageContext.Consumer>
    );
  };

  render() {
    return this.props.id ? (
      this.renderToolbar(this.props.id)
    ) : (
      <GenerateId>{(randomId) => this.renderToolbar(randomId)}</GenerateId>
    );
  }
}

export { Toolbar };
