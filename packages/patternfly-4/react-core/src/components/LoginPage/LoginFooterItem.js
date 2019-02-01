import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  /** Content rendered inside the footer Link Item */
  children: PropTypes.node,
  /** Additional classes added to the Footer Link Item  */
  className: PropTypes.string,
  /** The URL of the Footer Link Item */
  href: PropTypes.string,
  /** Specifies where to open the linked document */
  target: PropTypes.string,
  /** Additional props are spread to the container <a> */
  '': PropTypes.any
};

const defaultProps = {
  children: null,
  className: '',
  href: '#',
  target: '_blank'
};

const LoginFooterItem = ({ className, children, href, target, ...props }) => {
  const reactElement = React.isValidElement(children);
  return reactElement ? (
    React.cloneElement(children)
  ) : (
    <a target={target} href={href} {...props}>
      {children}
    </a>
  );
};

LoginFooterItem.propTypes = propTypes;
LoginFooterItem.defaultProps = defaultProps;

export default LoginFooterItem;
