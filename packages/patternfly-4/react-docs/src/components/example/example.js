import React from 'react';
import { css } from '@patternfly/react-styles';
import styles from './example.styles';
import PropTypes from 'prop-types';
import { Title } from '@patternfly/react-core';
import LiveDemo from './liveDemo';
import Link from 'gatsby-link';

const propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  className: PropTypes.string,
  fullPageOnly: PropTypes.bool,
  name: PropTypes.string,
  raw: PropTypes.string,
  images: PropTypes.array
};

const defaultProps = {
  className: '',
  description: '',
  fullPageOnly: false,
  title: '',
  name: '',
  raw: '',
  images: []
};

const LIVE_EXAMPLES = /true/i.test(process.env.LIVE_EXAMPLES);

const Example = ({ children, title, className, description, name, fullPageOnly, raw, images, ...props }) => {
  // Display full page link
  if (fullPageOnly) {
    const pathName = typeof window !== 'undefined' ? `${window.location.pathname}` : '';
    const exampleName = name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    const separator = pathName.endsWith('/') ? '' : '/';
    const path = `${pathName}${separator}examples/${exampleName}`;
    return (
      <div className={css(className, styles.example)} {...props}>
        This layout can only be accessed in&nbsp;
        <Link target="_blank" to={path}>
          full page mode
        </Link>
        .
      </div>
    );
  }
  return (
    <div>
      <Title size="lg">{title}</Title>
      {Boolean(description) && <p className={css(styles.description)}>{description}</p>}
      {LIVE_EXAMPLES ? (
        <LiveDemo raw={raw.trim()} images={images} className={className} />
      ) : (
        <div className={css(className, styles.example)} {...props}>
          {children}
        </div>
      )}
    </div>
  );
};

Example.propTypes = propTypes;
Example.defaultProps = defaultProps;

export default Example;
