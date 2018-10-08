import React from 'react';
import styles from '@patternfly/patternfly-next/layouts/Page/page.css';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import { BarsIcon } from '@patternfly/react-icons';
import { Button, ButtonVariant } from '../../components/Button';

export const PageLayouts = {
  vertical: 'vertical',
  horizontal: 'horizontal'
};

const propTypes = {
  /** Content rendered inside the Page layout */
  children: PropTypes.node,
  /** Additional classes added to the Page layout */
  className: PropTypes.string,
  /** Page layout type */
  layout: PropTypes.oneOf(Object.values(PageLayouts)),
  /** Component to render the background image (e.g. <BackgroundImage />) */
  background: PropTypes.node,
  /** Component to render the logo/brand (e.g. <Brand />) */
  logo: PropTypes.node,
  /** Component to render the navigation (e.g. <Nav /> */
  nav: PropTypes.node,
  /** Vertical layout only: True if the nav is expanded  */
  isNavOpen: PropTypes.bool,
  /** Vertical page layout only: Callback function to handle the navigation toggle button */
  onNavToggle: PropTypes.func,
  /** Component to render the toolbar (e.g. <Toolbar />) */
  toolbar: PropTypes.node,
  /** Component to render the avatar (e.g. <Avatar /> */
  avatar: PropTypes.node
};

const defaultProps = {
  children: null,
  className: '',
  layout: 'vertical',
  background: null,
  logo: 'Logo',
  nav: 'Nav',
  onNavToggle: () => undefined,
  isNavOpen: true,
  toolbar: 'Toolbar',
  avatar: null
};

const Page = ({
  className,
  children,
  layout,
  background,
  logo,
  nav,
  isNavOpen,
  onNavToggle,
  toolbar,
  avatar,
  ...props
}) => (
    <React.Fragment>
      {background}
      <div {...props} className={css(styles.page, className)}>
        {/* Added style={{ overflowX: 'unset' }} as a workaround to make dropdowns work */}
        <header role="banner" className={css(styles.pageHeader)} style={{ overflowX: 'unset' }}>
          <div className={css(styles.pageHeaderBrand)}>
            {layout === PageLayouts.vertical && (
              <div className={css(styles.pageHeaderBrandToggle)}>
                <Button
                  id="nav-toggle"
                  onClick={onNavToggle}
                  aria-label="Toggle primary navigation"
                  variant={ButtonVariant.plain}
                >
                  <BarsIcon />
                </Button>
              </div>
            )}
            <a className={css(styles.pageHeaderBrandLink)}>{logo}</a>
          </div>
          {/* Hide for now until we have the context selector component */}
          {/* <div className={css(styles.pageHeaderSelector)}>
            pf-c-context-selector
          </div> */}
          {layout === PageLayouts.horizontal && <div className={css(styles.pageHeaderNav)}>{nav}</div>}
          <div className={css(styles.pageHeaderTools)}>
            {toolbar}
            {avatar}
          </div>
        </header>
        {layout === PageLayouts.vertical && (
          <aside
            className={css(
              styles.pageSidebar,
              isNavOpen && styles.modifiers.expanded,
              !isNavOpen && styles.modifiers.collapsed
            )}
          >
            {nav}
          </aside>
        )}
        <main role="main" className={css(styles.pageMain)}>
          {children}
        </main>
      </div>
    </React.Fragment>
  );

Page.propTypes = propTypes;
Page.defaultProps = defaultProps;

export default Page;
