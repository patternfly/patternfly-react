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
  onNavToggleClick,
  contextSelector,
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
        <button className="navbar-toggle" onClick={onNavToggleClick}>
          <span className="sr-only">Toggle navigation</span>
          <span aria-hidden="true" className="icon-bar" />
          <span aria-hidden="true" className="icon-bar" />
          <span aria-hidden="true" className="icon-bar" />
        </button>
        <a
          href={href}
          role="button"
          className="navbar-brand"
          onClick={e => {
            handleTitleClick(e);
          }}
        >
          <img className="navbar-brand-icon" src={iconImg} alt="" />
          <img className="navbar-brand-name" src={titleImg} alt={title} />
        </a>
        {contextSelector}
      </div>
      <nav className="collapse navbar-collapse">
        <ul className="nav navbar-nav navbar-right navbar-iconic navbar-utility">
          {children}
        </ul>
      </nav>
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
  /** Callback when the nav toggle (hamburger) is clicked */
  onNavToggleClick: PropTypes.func,
  /** Context selector */
  contextSelector: PropTypes.node,
  /** Children displayed in the navbar utility area, array of <li> elements expected */
  children: PropTypes.node
};

Masthead.defaultProps = {
  className: '',
  title: '',
  titleImg: '',
  iconImg: '',
  href: '#',
  onTitleClick: noop,
  onNavToggleClick: noop,
  contextSelector: null,
  children: null
};

export default Masthead;
