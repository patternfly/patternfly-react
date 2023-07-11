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
import { Popper } from '../../helpers';

export interface ToolbarToggleGroupProps extends ToolbarGroupProps{
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
}

export const ToolbarToggleGroup: React.FunctionComponent<ToolbarToggleGroupProps> = ({
    toggleIcon,
    variant,
    visibility,
    visiblity,
    breakpoint,
    alignment,
    spacer,
    spaceItems,
    className,
    children,
    ...props
  }: ToolbarToggleGroupProps
) => {
  const { width, getBreakpoint } = React.useContext(PageContext);
  const { isExpanded, toggleIsExpanded } = React.useContext(ToolbarContext);
  const { contentRef } = React.useContext(ToolbarContentContext);

  const isContentPopup = () => {
    const viewportSize = canUseDOM ? window.innerWidth : 1200;
    const lgBreakpointValue = parseInt(globalBreakpointLg.value);
    return viewportSize < lgBreakpointValue;
  };

  React.useEffect(() => {
    if (!breakpoint && !toggleIcon) {
      // eslint-disable-next-line no-console
      console.error('ToolbarToggleGroup will not be visible without a breakpoint or toggleIcon.');
    }

    if (visiblity !== undefined) {
      // eslint-disable-next-line no-console
      console.warn(
        'The ToolbarToggleGroup visiblity prop has been deprecated. ' +
        'Please use the correctly spelled visibility prop instead.'
      );
    }
  }, [breakpoint, toggleIcon, visiblity]);

  const breakpointMod: {
    md?: 'show';
    lg?: 'show';
    xl?: 'show';
    '2xl'?: 'show';
  } = {};
  breakpointMod[breakpoint] = 'show';

  const expandableContent = () => {
   console.log(children);
   return (
     <ToolbarExpandableContent
       showClearFiltersButton={false}
     >
       {children}
     </ToolbarExpandableContent>
   );
  }

  const popper = (
    <div className={css(styles.toolbarToggle)}>
      <Button
        variant="plain"
        onClick={toggleIsExpanded}
        aria-label="Show Filters"
        {...(isExpanded && { 'aria-expanded': true })}
        aria-haspopup={isExpanded && isContentPopup()}
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
        formatBreakpointMods(visibility || visiblity, styles, '', getBreakpoint(width)),
        formatBreakpointMods(alignment, styles, '', getBreakpoint(width)),
        formatBreakpointMods(spacer, styles, '', getBreakpoint(width)),
        formatBreakpointMods(spaceItems, styles, '', getBreakpoint(width)),
        className
      )}
      {...props}
    >
      <Popper
        appendTo={contentRef.current}
        trigger={popper}
        popper={expandableContent()}
        isVisible={isExpanded}
      />
      { !isExpanded && children }
    </div>
  );
}
ToolbarToggleGroup.displayName = 'ToolbarToggleGroup';
