import React from 'react';
import { css } from '@patternfly/react-styles';
import exampleStyles from './example.styles';
import styles from './liveDemo.styles';
import PropTypes from 'prop-types';
import * as CoreComponents from '@patternfly/react-core';
import * as CoreIcons from '@patternfly/react-icons';
import { LiveProvider, LiveEditor, LiveError, LivePreview, withLive } from 'react-live';
import { transform } from 'babel-standalone';
import Section from '../section';
import copy from 'clipboard-copy';

const propTypes = {
  className: PropTypes.string,
  raw: PropTypes.string.isRequired,
  path: PropTypes.string,
  images: PropTypes.array,
  live: PropTypes.bool
};

const defaultProps = {
  className: '',
  path: '',
  images: [],
  live: true
};

const scopePlayground = { React, ...CoreComponents, ...CoreIcons, css, styles };

const transformCode = code => {
  try {
    // LiveEditor doesn't work properly with these so need to remove
    code = code.replace(/^import(.|\s)*?;$/gm, '');
    code = code.replace(/^\s*export default class/gm, 'class');
    code = code.replace(/^\s*\/\/.*$/gm, '');
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

class LiveDemo extends React.Component {
  state = {
    codeOpen: false
  };

  handleClickCodeOpen = () => {
    this.setState(state => ({
      codeOpen: !state.codeOpen
    }));
  };

  handleClickCopy = () => {
    copy(this.props.raw);
  };

  render() {
    const { className, raw, images, live, path } = this.props;
    const { codeOpen } = this.state;

    const GITHUB_BASE = 'https://github.com/patternfly/patternfly-react/blob/master/packages/patternfly-4';
    const examplePath = `${GITHUB_BASE}${path.substr(5)}`;

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
      <Section>
        <LiveProvider code={raw} scope={scope} transformCode={transformCode}>
          {live && <LivePreview className={css(className, exampleStyles.example)} />}
          <div className={css(styles.toolbar)}>
            <CoreComponents.Button
              onClick={this.handleClickCodeOpen}
              variant="plain"
              title="Toggle code"
              aria-label="Toggle code"
            >
              {codeOpen ? <CoreIcons.AngleRightIcon /> : <CoreIcons.AngleDownIcon />}
            </CoreComponents.Button>
            <CoreComponents.Button
              onClick={this.handleClickCopy}
              variant="plain"
              title="Copy code"
              aria-label="Copy code"
            >
              <CoreIcons.CopyIcon />
            </CoreComponents.Button>
            <a href={examplePath} target="_blank">
              <CoreComponents.Button
                onClick={this.handleClickCopy}
                variant="plain"
                title="View on GitHub"
                aria-label="View on GitHub"
              >
                <CoreIcons.CodeIcon />
              </CoreComponents.Button>
            </a>
          </div>
          {codeOpen && <LiveEditor className={styles.code} ignoreTabKey contentEditable={live} />}
          {live && <LiveError />}
        </LiveProvider>
      </Section>
    );
  }
}

LiveDemo.propTypes = propTypes;
LiveDemo.defaultProps = defaultProps;

export default withLive(LiveDemo);
