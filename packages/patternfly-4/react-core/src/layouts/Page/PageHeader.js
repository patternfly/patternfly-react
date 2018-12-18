import React from 'react';
import styles from '@patternfly/patternfly-next/components/Page/page.css';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import { BarsIcon } from '@patternfly/react-icons';
import { Button, ButtonVariant } from '../../components/Button';

const propTypes = {
  /** Additional classes added to the page header */
  className: PropTypes.string,
  /** Component to render the logo/brand (e.g. <Brand />) */
  logo: PropTypes.node,
  /** Additional props passed to the logo anchor container */
  logoProps: PropTypes.object,
  /** Component to render the toolbar (e.g. <Toolbar />) */
  toolbar: PropTypes.node,
  /** Component to render the avatar (e.g. <Avatar /> */
  avatar: PropTypes.node,
  /** Component to render navigation within the header (e.g. <Nav /> */
  topNav: PropTypes.node,
  /** True to show the nav toggle button (toggles side nav) */
  showNavToggle: PropTypes.bool,
  /** Callback function to handle the side nav toggle button */
  onNavToggle: PropTypes.func
};

const defaultProps = {
  className: '',
  logo: null,
  logoProps: null,
  toolbar: null,
  avatar: null,
  topNav: null,
  showNavToggle: false,
  onNavToggle: () => undefined
};

const PageHeader = ({ className, logo, logoProps, toolbar, avatar, topNav, showNavToggle, onNavToggle, ...props }) => (
  <header role="banner" className={css(styles.pageHeader, className)} {...props}>
    <div className={css(styles.pageHeaderBrand)}>
      {showNavToggle && (
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
      <a className={css(styles.pageHeaderBrandLink)} {...logoProps}>
        {logo}
      </a>
    </div>
    {/* Hide for now until we have the context selector component */}
    {/* <div className={css(styles.pageHeaderSelector)}>
      pf-c-context-selector
    </div> */}
    {topNav && <div className={css(styles.pageHeaderNav)}>{topNav}</div>}
    <div className={css(styles.pageHeaderTools)}>
      {toolbar}
      {avatar}
    </div>
  </header>
);

PageHeader.propTypes = propTypes;
PageHeader.defaultProps = defaultProps;

export default PageHeader;
