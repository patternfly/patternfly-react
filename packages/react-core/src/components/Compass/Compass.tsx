import { Drawer, DrawerContent, DrawerProps } from '../Drawer';
import { css } from '@patternfly/react-styles';

export interface CompassProps extends React.HTMLProps<HTMLDivElement> {
  /** Additional classes added to the compass. */
  className?: string;
  /** Content placed at the top of the layout */
  header?: React.ReactNode;
  /** Flag indicating if the header is expanded */
  isHeaderExpanded?: boolean;
  /** Content placed at the start of the layout */
  panelStart?: React.ReactNode;
  /** Flag indicating if the start panel is expanded */
  isPanelStartExpanded?: boolean;
  /** Content placed at the center of the layout */
  main?: React.ReactNode;
  /** Content placed at the end of the layout */
  panelEnd?: React.ReactNode;
  /** Flag indicating if the end panel is expanded */
  isPanelEndExpanded?: boolean;
  /** Content placed at the bottom of the layout */
  footer?: React.ReactNode;
  /** Flag indicating if the footer is expanded */
  isFooterExpanded?: boolean;
  /** Content rendered in the drawer panel */
  drawerContent?: React.ReactNode;
  /** Props for the drawer */
  drawerProps?: DrawerProps;
  /** Light background image path for the compass */
  lightBackgroundSrc?: string;
  /** Dark background image path for the compass */
  darkBackgroundSrc?: string;
}

export const Compass: React.FunctionComponent<CompassProps> = ({
  className,
  header,
  isHeaderExpanded = true,
  panelStart,
  isPanelStartExpanded = true,
  main,
  panelEnd,
  isPanelEndExpanded = true,
  footer,
  isFooterExpanded = true,
  drawerContent,
  drawerProps,
  lightBackgroundSrc,
  darkBackgroundSrc,
  ...props
}) => {
  const hasDrawer = drawerContent !== undefined;

  const compassContent = (
    <div
      className={css('pf-v6-c-compass', className)}
      style={
        {
          '[cssLightName.name]': `url(${lightBackgroundSrc})`,
          '[cssDarkName.name]': `url(${darkBackgroundSrc})`
        } as React.CSSProperties
      }
      {...props}
    >
      <div
        className={css('pf-v6-c-compass__header', isHeaderExpanded && 'pf-m-expanded')}
        {...(!isHeaderExpanded && { inert: true })}
      >
        {header}
      </div>
      <div
        className={css('pf-v6-c-compass__panel pf-m-start', isPanelStartExpanded && 'pf-m-expanded')}
        {...(!isPanelStartExpanded && { inert: true })}
      >
        {panelStart}
      </div>
      <div className={css('pf-v6-c-compass__main')}>{main}</div>
      <div
        className={css('pf-v6-c-compass__panel pf-m-end', isPanelEndExpanded && 'pf-m-expanded')}
        {...(!isPanelEndExpanded && { inert: true })}
      >
        {panelEnd}
      </div>
      <div
        className={css('pf-v6-c-compass__footer', isFooterExpanded && 'pf-m-expanded')}
        {...(!isFooterExpanded && { inert: true })}
      >
        {footer}
      </div>
    </div>
  );

  if (hasDrawer) {
    return (
      <Drawer {...drawerProps}>
        <DrawerContent panelContent={drawerContent}>{compassContent}</DrawerContent>
      </Drawer>
    );
  }

  return compassContent;
};

Compass.displayName = 'Compass';
