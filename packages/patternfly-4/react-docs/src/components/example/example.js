import React from 'react';
import { css } from '@patternfly/react-styles';
import styles from './example.styles';
import PropTypes from 'prop-types';
import { Title } from '@patternfly/react-core';
import LiveDemo from './liveDemo';
import Link from 'gatsby-link';
import Section from '../section';

const propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  className: PropTypes.string,
  fullPageOnly: PropTypes.bool,
  name: PropTypes.string,
  raw: PropTypes.string,
  path: PropTypes.string,
  images: PropTypes.array,
  live: PropTypes.bool,
  liveScope: PropTypes.object
};

const defaultProps = {
  className: '',
  description: '',
  fullPageOnly: false,
  title: '',
  name: '',
  raw: '',
  path: '',
  images: [],
  live: true,
  liveScope: {}
};

const GATSBY_LIVE_EXAMPLES = process.env.GATSBY_LIVE_EXAMPLES === 'true';

const Example = ({
  children,
  title,
  className,
  description,
  name,
  fullPageOnly,
  raw,
  path: examplePath,
  images,
  live,
  liveScope,
  ...props
}) => {
  const makeDescription = html => ({ __html: html });

  // Display full page link
  if (fullPageOnly) {
    const pathName = typeof window !== 'undefined' ? window.location.pathname : '';
    const exampleName = name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    const separator = pathName.endsWith('/') ? '' : '/';
    // Grab the last 2 path pieces, e.g. components/backgroundimage, layouts/gallery, demos/pagelayout
    const pathStart = `${pathName}${separator}`
      .split('/')
      .slice(-3)
      .slice(0, 2)
      .join('/');
    const path = `/${pathStart}/examples/${exampleName}`;
    return (
      <Section>
        <Title size="lg">{title}</Title>
        <div className={css(className, styles.example)} {...props}>
          This example can only be accessed in&nbsp;
          <Link target="_blank" to={path}>
            full page mode
          </Link>
          .
        </div>
        <LiveDemo raw={raw.trim()} path={examplePath} live={false} />
      </Section>
    );
  }

  return (
    <div>
      <Title size="lg">{title}</Title>
      {Boolean(description) && (
        <p className={css(styles.description)} dangerouslySetInnerHTML={makeDescription(description)} />
      )}
      {GATSBY_LIVE_EXAMPLES ? (
        <React.Fragment>
          {!live && (
            <div className={css(className, styles.example)} {...props}>
              {children}
            </div>
          )}
          <LiveDemo
            raw={raw.trim()}
            path={examplePath}
            images={images}
            className={className}
            live={live}
            liveScope={liveScope}
          />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div className={css(className, styles.example)} {...props}>
            {children}
          </div>
          <LiveDemo raw={raw.trim()} path={examplePath} live={false} />
        </React.Fragment>
      )}
    </div>
  );
};

Example.propTypes = propTypes;
Example.defaultProps = defaultProps;

export default Example;
