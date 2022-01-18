import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styles from '@patternfly/react-styles/css/components/Toolbar/toolbar';
import { css } from '@patternfly/react-styles';
import { ToolbarGroupProps } from './ToolbarGroup';
import { ToolbarContext, ToolbarContentContext } from './ToolbarUtils';
import { Button } from '../Button';
import globalBreakpointLg from '@patternfly/react-tokens/dist/esm/global_breakpoint_lg';
import { formatBreakpointMods, toCamel, capitalize, canUseDOM } from '../../helpers/util';
import { PageContext } from '../Page/Page';

export interface ToolbarToggleGroupProps extends ToolbarGroupProps {
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
  /** @deprecated prop misspelled */
  visiblity?: {
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

export class ToolbarToggleGroup extends React.Component<ToolbarToggleGroupProps> {
  static displayName = 'ToolbarToggleGroup';
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
      visiblity,
      breakpoint,
      alignment,
      spacer,
      spaceItems,
      className,
      children,
      ...props
    } = this.props;

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

    return (
      <PageContext.Consumer>
        {({ useResizeObserver, width, getBreakpoint }) => (
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
                        styles.modifiers.toggleGroup,
                        variant &&
                          styles.modifiers[toCamel(variant) as 'filterGroup' | 'iconButtonGroup' | 'buttonGroup'],
                        !useResizeObserver &&
                          breakpoint &&
                          styles.modifiers[
                            `showOn${capitalize(breakpoint.replace('2xl', '_2xl'))}` as
                              | 'showOnMd'
                              | 'showOnLg'
                              | 'showOnXl'
                              | 'showOn_2xl'
                          ],
                        useResizeObserver && breakpoint && getBreakpoint(width) === breakpoint && styles.modifiers.show,
                        formatBreakpointMods(
                          visibility || visiblity,
                          styles,
                          '',
                          getBreakpoint(width, useResizeObserver)
                        ),
                        formatBreakpointMods(alignment, styles, '', getBreakpoint(width, useResizeObserver)),
                        formatBreakpointMods(spacer, styles, '', getBreakpoint(width, useResizeObserver)),
                        formatBreakpointMods(spaceItems, styles, '', getBreakpoint(width, useResizeObserver)),
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
        )}
      </PageContext.Consumer>
    );
  }
}
