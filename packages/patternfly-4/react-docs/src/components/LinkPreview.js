/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

// This component really shouldn't be in react-docs.
// However, it exists downstream in https://github.com/patternfly/patternfly-org
const LinkPreview = ({ name, path, text }) => {
  const split = path.split('/');

  return (
    <>
      {text && <p>{text}</p>}
      <a href={split[split.length - 1].toLowerCase()} target="_blank" rel="noopener noreferrer">
        {name}
      </a>
    </>
  );
};

LinkPreview.propTypes = {
  name: PropTypes.node.isRequired,
  path: PropTypes.string.isRequired,
  text: PropTypes.node
};

LinkPreview.defaultProps = {
  text: null
};

export { LinkPreview as default };
