import { Drawer, DrawerContent, DrawerProps } from '../Drawer';
import compassBackgroundImageLight from '@patternfly/react-tokens/dist/esm/c_compass_BackgroundImage_light';
import compassBackgroundImageDark from '@patternfly/react-tokens/dist/esm/c_compass_BackgroundImage_dark';
import { css } from '@patternfly/react-styles';

export interface CompassProps extends React.HTMLProps<HTMLDivElement> {
  /** Additional classes added to the compass. */
  className?: string;
  /** Content placed at the top of the layout */
  header?: React.ReactNode;
  /** Flag indicating if the header is expanded */
  isHeaderExpanded?: boolean;
  /** Content placed at the start of the layout */
  sidebarStart?: React.ReactNode;
  /** Flag indicating if the start panel is expanded */
  isSidebarStartExpanded?: boolean;
  /** Content placed at the center of the layout */
  main?: React.ReactNode;
  /** Content placed at the end of the layout */
  sidebarEnd?: React.ReactNode;
  /** Flag indicating if the end panel is expanded */
  isSidebarEndExpanded?: boolean;
  /** Content placed at the bottom of the layout */
  footer?: React.ReactNode;
  /** Flag indicating if the footer is expanded */
  isFooterExpanded?: boolean;
  /** Content rendered in the drawer panel */
  drawerContent?: React.ReactNode;
  /** Props for the drawer */
  drawerProps?: DrawerProps;
  /** Light theme background image path for the compass */
  backgroundSrcLight?: string;
  /** Dark theme background image path for the compass */
  backgroundSrcDark?: string;
}

export const Compass: React.FunctionComponent<CompassProps> = ({
  className,
  header,
  isHeaderExpanded = true,
  sidebarStart,
  isSidebarStartExpanded = true,
  main,
  sidebarEnd,
  isSidebarEndExpanded = true,
  footer,
  isFooterExpanded = true,
  drawerContent,
  drawerProps,
  backgroundSrcLight,
  backgroundSrcDark,
  ...props
}) => {
  const hasDrawer = drawerContent !== undefined;

  const backgroundImageStyles: { [key: string]: string } = {};
  if (backgroundSrcLight) {
    backgroundImageStyles[compassBackgroundImageLight.name] = `url(${backgroundSrcLight})`;
  }
  if (backgroundSrcDark) {
    backgroundImageStyles[compassBackgroundImageDark.name] = `url(${backgroundSrcDark})`;
  }

  const compassContent = (
    <div className={css('pf-v6-c-compass', className)} style={{ ...props.style, ...backgroundImageStyles }} {...props}>
      <div
        className={css('pf-v6-c-compass__header', isHeaderExpanded && 'pf-m-expanded')}
        {...(!isHeaderExpanded && { inert: true })}
      >
        {header}
      </div>
      <div
        className={css('pf-v6-c-compass__sidebar pf-m-start', isSidebarStartExpanded && 'pf-m-expanded')}
        {...(!isSidebarStartExpanded && { inert: true })}
      >
        {sidebarStart}
      </div>
      <div className={css('pf-v6-c-compass__main')}>{main}</div>
      <div
        className={css('pf-v6-c-compass__sidebar pf-m-end', isSidebarEndExpanded && 'pf-m-expanded')}
        {...(!isSidebarEndExpanded && { inert: true })}
      >
        {sidebarEnd}
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
