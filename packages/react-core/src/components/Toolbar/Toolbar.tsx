import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Toolbar/toolbar';
import { GenerateId } from '../../helpers/GenerateId/GenerateId';
import { css } from '@patternfly/react-styles';
import { ToolbarContext } from './ToolbarUtils';
import { ToolbarChipGroupContent } from './ToolbarChipGroupContent';
import { formatBreakpointMods, canUseDOM } from '../../helpers/util';
import { getDefaultOUIAId, getOUIAProps, OUIAProps } from '../../helpers';
import { PageContext } from '../Page/Page';

export interface ToolbarProps extends React.HTMLProps<HTMLDivElement>, OUIAProps {
  /** Optional callback for clearing all filters in the toolbar */
  clearAllFilters?: () => void;
  /** Text to display in the clear all filters button */
  clearFiltersButtonText?: string;
  /** The breakpoint at which the listed fitlers in chip groups are collapsed down to a summary */
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
  /** Flag indicating the toolbar should use the Page insets */
  usePageInsets?: boolean;
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
}

export interface ToolbarState {
  /** Flag used if the user has opted NOT to manage the 'isExpanded' state of the toggle group.
   *  Indicates whether or not the toggle group is expanded. */
  isManagedToggleExpanded: boolean;
  /** Object managing information about how many chips are in each chip group */
  filterInfo: FilterInfo;
  /** Used to keep track of window width so we can collapse expanded content when window is resizing */
  windowWidth: number;
  ouiaStateId: string;
}

interface FilterInfo {
  [key: string]: number;
}

export class Toolbar extends React.Component<ToolbarProps, ToolbarState> {
  static displayName = 'Toolbar';
  chipGroupContentRef = React.createRef<HTMLDivElement>();
  toolbarRef = React.createRef<HTMLDivElement>();
  observer: any = () => {};
  staticFilterInfo = {};
  state = {
    isManagedToggleExpanded: false,
    filterInfo: {},
    windowWidth: canUseDOM ? window.innerWidth : 1200,
    ouiaStateId: getDefaultOUIAId(Toolbar.displayName)
  };

  isToggleManaged = () => !(this.props.isExpanded || !!this.props.toggleIsExpanded);

  toggleIsExpanded = () => {
    this.setState(prevState => ({
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

  componentDidMount() {
    if (this.isToggleManaged() && canUseDOM) {
      window.addEventListener('resize', this.closeExpandableContent);
    }

    // this.observer = getResizeObserver(this.toolbarRef.current, this.handleResize);
    // this.handleResize();
  }

  componentWillUnmount() {
    if (this.isToggleManaged() && canUseDOM) {
      window.removeEventListener('resize', this.closeExpandableContent);
    }

    // this.observer();
  }

  // resize = () => {
  //   console.log(`resize: ${this.toolbarRef.current.clientWidth}`);
  // };

  // handleResize = debounce(this.resize, 250);

  /**
   * Instead of relying on CSS media queries on the window, use the width reported by the Page resizeObserver
   *
   * @param width Page width
   */
  getVisibilityMod = (width: number) => {
    /* 
    width < 576 (default):
    --pf-hidden-visible--visible--Visibility: visible;
    --pf-hidden-visible--hidden--Display: none;
    --pf-hidden-visible--hidden--Visibility: hidden;
    --pf-hidden-visible--Display: var(--pf-hidden-visible--visible--Display);
    --pf-hidden-visible--Visibility: var(--pf-hidden-visible--visible--Visibility);
    display: var(--pf-hidden-visible--Display);
    visibility: var(--pf-hidden-visible--Visibility);

    min-width: 576px && .pf-m-hidden-on-sm:
    --pf-hidden-visible--Display: var(--pf-hidden-visible--hidden--Display);
    --pf-hidden-visible--Visibility: var(--pf-hidden-visible--hidden--Visibility);

    min-width: 576px && .pf-m-visible-on-sm:
    --pf-hidden-visible--Display: var(--pf-hidden-visible--visible--Display);
    --pf-hidden-visible--Visibility: var(--pf-hidden-visible--visible--Visibility);

    min-width: 768px && .pf-m-hidden-on-md:
    --pf-hidden-visible--Display: var(--pf-hidden-visible--hidden--Display);
    --pf-hidden-visible--Visibility: var(--pf-hidden-visible--hidden--Visibility);

    min-width: 768px && .pf-m-visible-on-md:
    --pf-hidden-visible--Display: var(--pf-hidden-visible--visible--Display);
    --pf-hidden-visible--Visibility: var(--pf-hidden-visible--visible--Visibility);

    min-width: 992px && .pf-m-hidden-on-lg:
    --pf-hidden-visible--Display: var(--pf-hidden-visible--hidden--Display);
    --pf-hidden-visible--Visibility: var(--pf-hidden-visible--hidden--Visibility);

    min-width: 992px && .pf-m-visible-on-lg:
    --pf-hidden-visible--Display: var(--pf-hidden-visible--visible--Display);
    --pf-hidden-visible--Visibility: var(--pf-hidden-visible--visible--Visibility);

    min-width: 1200px && .pf-m-hidden-on-xl:
    --pf-hidden-visible--Display: var(--pf-hidden-visible--hidden--Display);
    --pf-hidden-visible--Visibility: var(--pf-hidden-visible--hidden--Visibility);

    min-width: 1200px && .pf-m-visible-on-xl:
    --pf-hidden-visible--Display: var(--pf-hidden-visible--visible--Display);
    --pf-hidden-visible--Visibility: var(--pf-hidden-visible--visible--Visibility);

    min-width: 1450px && .pf-m-hidden-on-2xl:
    --pf-hidden-visible--Display: var(--pf-hidden-visible--hidden--Display);
    --pf-hidden-visible--Visibility: var(--pf-hidden-visible--hidden--Visibility);

    min-width: 1450px && .pf-m-visible-on-2xl:
    --pf-hidden-visible--Display: var(--pf-hidden-visible--visible--Display);
    --pf-hidden-visible--Visibility: var(--pf-hidden-visible--visible--Visibility);
    */
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
      usePageInsets,
      isSticky,
      ouiaId,
      numberOfFiltersText,
      ...props
    } = this.props;

    const { isManagedToggleExpanded } = this.state;

    const isToggleManaged = this.isToggleManaged();
    const isExpanded = isToggleManaged ? isManagedToggleExpanded : isExpandedProp;
    const numberOfFilters = this.getNumberOfFilters();
    const showClearFiltersButton = numberOfFilters > 0;

    return (
      <PageContext.Consumer>
        {({ width }) => {
          console.log(`page width: ${width}`);
          const breakpointMods = formatBreakpointMods(inset, styles);
          return (
            <div
              ref={this.toolbarRef}
              className={css(
                styles.toolbar,
                isFullHeight && styles.modifiers.fullHeight,
                isStatic && styles.modifiers.static,
                usePageInsets && styles.modifiers.pageInsets,
                isSticky && styles.modifiers.sticky,
                breakpointMods,
                className
              )}
              id={randomId}
              {...getOUIAProps(Toolbar.displayName, ouiaId !== undefined ? ouiaId : this.state.ouiaStateId)}
              {...props}
            >
              <ToolbarContext.Provider
                value={{
                  isExpanded,
                  toggleIsExpanded: isToggleManaged ? this.toggleIsExpanded : toggleIsExpanded,
                  chipGroupContentRef: this.chipGroupContentRef,
                  updateNumberFilters: this.updateNumberFilters,
                  numberOfFilters,
                  clearAllFilters,
                  clearFiltersButtonText,
                  showClearFiltersButton,
                  toolbarId: randomId
                }}
              >
                {children}
                <ToolbarChipGroupContent
                  isExpanded={isExpanded}
                  chipGroupContentRef={this.chipGroupContentRef}
                  clearAllFilters={clearAllFilters}
                  showClearFiltersButton={showClearFiltersButton}
                  clearFiltersButtonText={clearFiltersButtonText}
                  numberOfFilters={numberOfFilters}
                  numberOfFiltersText={numberOfFiltersText}
                  collapseListedFiltersBreakpoint={collapseListedFiltersBreakpoint}
                />
              </ToolbarContext.Provider>
            </div>
          );
        }}
      </PageContext.Consumer>
    );
  };

  render() {
    return this.props.id ? (
      this.renderToolbar(this.props.id)
    ) : (
      <GenerateId>{randomId => this.renderToolbar(randomId)}</GenerateId>
    );
  }
}
