import React from 'react';
import { css } from '@patternfly/react-styles';
import styles from './example.styles';
import PropTypes from 'prop-types';
import * as CoreComponents from '@patternfly/react-core';
import * as CoreIcons from '@patternfly/react-icons';
import { LiveProvider, LiveEditor, LiveError, LivePreview, withLive } from 'react-live';
import { transform } from 'babel-standalone';

const propTypes = {
  className: PropTypes.string,
  raw: PropTypes.string.isRequired,
  images: PropTypes.array
};

const defaultProps = {
  className: '',
  images: []
};

const scopePlayground = { React, ...CoreComponents, ...CoreIcons };

const transformCode = code => {
  try {
    // LiveEditor doesn't work properly with these so need to remove
    code = code.replace(/^\s*import.*$/gm, '');
    code = code.replace(/^\s*export default class/gm, 'class');
    code = code.replace(/extends Component/gm, 'extends React.Component');
    code = code.replace(/^\s*export.*$/gm, '');
    code = code.replace(/^\s*static.*$/gm, '');
    const transformedCode = transform(code, {
      presets: ['react', 'stage-2']
    }).code;
    return transformedCode;
  } catch (e) {
    console.log(e);
    // todo: handle error
    return code;
  }
};

const LiveDemo = ({ className, raw, images, ...props }) => {
  const scope = {
    ...scopePlayground
  };
  for (const image of images) {
    const searchIndex = raw.search(image.name);
    if (searchIndex > -1) {
      const startIndex = raw.lastIndexOf('import', searchIndex);
      const importName = raw.substring(startIndex, searchIndex).split(' ')[1];
      scope[importName] = image.file;
    }
  }

  return (
    <LiveProvider code={raw} scope={scope} transformCode={transformCode}>
      <LivePreview className={css(className, styles.example)} />
      <LiveEditor style={{ marginBottom: '30px' }} />
      <LiveError />
    </LiveProvider>
  );
};

LiveDemo.propTypes = propTypes;
LiveDemo.defaultProps = defaultProps;

export default withLive(LiveDemo);
