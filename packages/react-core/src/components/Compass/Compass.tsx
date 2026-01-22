import { Drawer, DrawerContent, DrawerContentBody, DrawerProps } from '../Drawer';
import styles from '@patternfly/react-styles/css/components/Compass/compass';
import { css } from '@patternfly/react-styles';

import compassBackgroundImageLight from '@patternfly/react-tokens/dist/esm/c_compass_BackgroundImage_light';
import compassBackgroundImageDark from '@patternfly/react-tokens/dist/esm/c_compass_BackgroundImage_dark';

export interface CompassProps extends React.HTMLProps<HTMLDivElement> {
  /** Additional classes added to the Compass. */
  className?: string;
  /** Content of the docked navigation area of the layout */
  dock?: React.ReactNode;
  /** Content placed at the top of the layout */
  header?: React.ReactNode;
  /** Flag indicating if the header is expanded */
  isHeaderExpanded?: boolean;
  /** Content placed at the horizontal start of the layout, before the main content */
  sidebarStart?: React.ReactNode;
  /** Flag indicating if the start sidebar is expanded */
  isSidebarStartExpanded?: boolean;
  /** Content placed at the center of the layout */
  main?: React.ReactNode;
  /** Content placed at the horizontal end of the layout, after the main content */
  sidebarEnd?: React.ReactNode;
  /** Flag indicating if the end sidebar is expanded */
  isSidebarEndExpanded?: boolean;
  /** Content placed at the bottom of the layout */
  footer?: React.ReactNode;
  /** Flag indicating if the footer is expanded */
  isFooterExpanded?: boolean;
  /** Content rendered in an optional drawer wrapping the layout */
  drawerContent?: React.ReactNode;
  /** Additional props passed to the drawer */
  drawerProps?: DrawerProps;
  /** Light theme background image path of the Compass  */
  backgroundSrcLight?: string;
  /** Dark theme background image path of the Compass  */
  backgroundSrcDark?: string;
}

export const Compass: React.FunctionComponent<CompassProps> = ({
  className,
  dock,
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
}: CompassProps) => {
  const hasDrawer = drawerContent !== undefined;

  const backgroundImageStyles: { [key: string]: string } = {};
  if (backgroundSrcLight) {
    backgroundImageStyles[compassBackgroundImageLight.name] = `url(${backgroundSrcLight})`;
  }
  if (backgroundSrcDark) {
    backgroundImageStyles[compassBackgroundImageDark.name] = `url(${backgroundSrcDark})`;
  }

  const compassContent = (
    <div
      className={css(styles.compass, dock !== undefined && styles.modifiers.dock, className)}
      {...props}
      style={{ ...props.style, ...backgroundImageStyles }}
    >
      {dock && <div className={css(`${styles.compass}__dock`)}>{dock}</div>}
      {header && (
        <div
          className={css(styles.compassHeader, isHeaderExpanded && 'pf-m-expanded')}
          {...(!isHeaderExpanded && { inert: 'true' })}
        >
          {header}
        </div>
      )}
      {sidebarStart && (
        <div
          className={css(styles.compassSidebar, styles.modifiers.start, isSidebarStartExpanded && 'pf-m-expanded')}
          {...(!isSidebarStartExpanded && { inert: 'true' })}
        >
          {sidebarStart}
        </div>
      )}
      {main && <div className={css(styles.compassMain)}>{main}</div>}
      {sidebarEnd && (
        <div
          className={css(styles.compassSidebar, styles.modifiers.end, isSidebarEndExpanded && 'pf-m-expanded')}
          {...(!isSidebarEndExpanded && { inert: 'true' })}
        >
          {sidebarEnd}
        </div>
      )}
      {footer && (
        <div
          className={css(styles.compassFooter, isFooterExpanded && 'pf-m-expanded')}
          {...(!isFooterExpanded && { inert: 'true' })}
        >
          {footer}
        </div>
      )}
    </div>
  );

  if (hasDrawer) {
    return (
      <Drawer isPill {...drawerProps}>
        <DrawerContent panelContent={drawerContent}>
          <DrawerContentBody>{compassContent}</DrawerContentBody>
        </DrawerContent>
      </Drawer>
    );
  }

  return compassContent;
};

Compass.displayName = 'Compass';
