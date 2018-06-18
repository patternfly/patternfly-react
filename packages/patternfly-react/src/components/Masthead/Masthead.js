import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { noop } from '../../common/helpers';

/**
 * Masthead
 */
const Masthead = ({
  className,
  title,
  titleImg,
  iconImg,
  href,
  onTitleClick,
  navToggle,
  onNavToggleClick,
  middleContent,
  children,
  ...props
}) => {
  const mastheadClasses = classNames('navbar', 'navbar-pf-vertical', className);

  const handleTitleClick = e => {
    if (onTitleClick !== noop) {
      if (e) {
        e.preventDefault();
      }
      onTitleClick();
    }
  };

  return (
    <nav className={mastheadClasses} {...props}>
      <div className="navbar-header">
        {navToggle && (
          <button className="navbar-toggle" onClick={onNavToggleClick}>
            <span className="sr-only">Toggle navigation</span>
            <span aria-hidden="true" className="icon-bar" />
            <span aria-hidden="true" className="icon-bar" />
            <span aria-hidden="true" className="icon-bar" />
          </button>
        )}
        <a
          href={href}
          role="button"
          className="navbar-brand"
          onClick={handleTitleClick}
        >
          <img className="navbar-brand-icon" src={iconImg} alt="" />
          <img className="navbar-brand-name" src={titleImg} alt={title} />
        </a>
        {middleContent}
      </div>
      {children}
    </nav>
  );
};

Masthead.propTypes = {
  /** Additional element css classes */
  className: PropTypes.string,
  /** Title of the application (use either this or titleImg) */
  title: PropTypes.string,
  /** URL of an image for the app's title (use either this or title) */
  titleImg: PropTypes.string,
  /** URL of an image for the app's icon */
  iconImg: PropTypes.string,
  /** URL of the application's homepage if the title should be a link */
  href: PropTypes.string,
  /** Alternative to href, callback to call when the brand link is clicked */
  onTitleClick: PropTypes.func,
  /** Option to have the nav toggle (hamburger), default is true */
  navToggle: PropTypes.bool,
  /** Callback when the nav toggle (hamburger) is clicked */
  onNavToggleClick: PropTypes.func,
  /** Content for the center area of the masthead (context selector) */
  middleContent: PropTypes.node,
  /** Children (typically MastheadCollapse) */
  children: PropTypes.node
};

Masthead.defaultProps = {
  className: '',
  title: '',
  titleImg: '',
  iconImg: '',
  href: '#',
  onTitleClick: noop,
  navToggle: true,
  onNavToggleClick: noop,
  middleContent: null,
  children: null
};

export default Masthead;
