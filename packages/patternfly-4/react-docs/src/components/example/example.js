import React from 'react';
import { css } from '@patternfly/react-styles';
import styles from './example.styles';
import PropTypes from 'prop-types';
import { Title } from '@patternfly/react-core';
import LiveDemo from './liveDemo';

const propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  className: PropTypes.string,
  raw: PropTypes.string,
  images: PropTypes.array
};

const defaultProps = {
  className: '',
  description: '',
  raw: '',
  images: []
};

const LIVE_EXAMPLES = /true/i.test(process.env.LIVE_EXAMPLES);

const Example = ({ children, title, className, description, raw, images, ...props }) => (
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

Example.propTypes = propTypes;
Example.defaultProps = defaultProps;

export default Example;
