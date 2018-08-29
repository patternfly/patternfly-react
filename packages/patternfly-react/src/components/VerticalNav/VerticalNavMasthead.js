import React from 'react';
import PropTypes from 'prop-types';
import { getContext } from 'recompose';
import { Navbar } from 'react-bootstrap';
import VerticalNavBrand from './VerticalNavBrand';
import { navContextTypes } from './VerticalNavConstants';
import { noop, hasDisplayName, filterChildren } from '../../common/helpers';

/**
 * VerticalNavMasthead - the first child of a VerticalNav component
 */
const BaseVerticalNavMasthead = props => {
  const { children, href, iconImg, titleImg, title } = props;

  const brandChildren = filterChildren(children, child => hasDisplayName(child, VerticalNavBrand.displayName));
  const otherChildren = filterChildren(children, child => !hasDisplayName(child, VerticalNavBrand.displayName));

  return (
    <React.Fragment>
      <Navbar.Header>
        <Navbar.Toggle onClick={props.updateNavOnMenuToggleClick}>
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </Navbar.Toggle>
        {brandChildren && brandChildren.length > 0 ? (
          brandChildren
        ) : (
          <VerticalNavBrand title={title} titleImg={titleImg} iconImg={iconImg} href={href} />
        )}
      </Navbar.Header>
      {otherChildren}
    </React.Fragment>
  );
};

BaseVerticalNavMasthead.propTypes = {
  ...navContextTypes,
  /** See VerticalNavBrand.propTypes */
  title: PropTypes.string,
  /** See VerticalNavBrand.propTypes */
  titleImg: PropTypes.string,
  /** See VerticalNavBrand.propTypes */
  iconImg: PropTypes.string,
  /** See VerticalNavBrand.propTypes */
  href: PropTypes.string,
  /** See VerticalNavBrand.propTypes */
  updateNavOnMenuToggleClick: PropTypes.func,
  /** If any non-Brand children are passed, they will be rendered after the .navbar-header */
  children: PropTypes.node
};
BaseVerticalNavMasthead.defaultProps = {
  title: '',
  titleImg: '',
  iconImg: '',
  href: '',
  updateNavOnMenuToggleClick: noop,
  children: null
};

const VerticalNavMasthead = getContext(navContextTypes)(BaseVerticalNavMasthead);

VerticalNavMasthead.propTypes = {
  ...BaseVerticalNavMasthead.propTypes
};

VerticalNavMasthead.displayName = 'VerticalNav.Masthead';

export default VerticalNavMasthead;
