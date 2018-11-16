import React from 'react';
import { css } from '@patternfly/react-styles';
import exampleStyles from './example.styles';
import styles from './liveDemo.styles';
import PropTypes from 'prop-types';
// import * as ChartComponents from '@patternfly/react-charts';
import * as CoreComponents from '@patternfly/react-core';
import * as CoreIcons from '@patternfly/react-icons';
// import * as StyledSystemComponents from '@patternfly/react-styled-system';
import { LiveProvider, LiveEditor, LiveError, LivePreview, withLive } from 'react-live';
import { transform } from 'babel-standalone';
import Section from '../section';
import copy from 'clipboard-copy';

const propTypes = {
  className: PropTypes.string,
  raw: PropTypes.string.isRequired,
  path: PropTypes.string,
  images: PropTypes.array,
  live: PropTypes.bool,
  liveScope: PropTypes.object
};

const defaultProps = {
  className: '',
  path: '',
  images: [],
  live: true,
  liveScope: {}
};

const scopePlayground = { React, ...CoreComponents, ...CoreIcons, css };

const transformCode = code => {
  try {
    // LiveEditor doesn't work properly with these so need to remove
    code = code.replace(/^import(.|\s)*?;$/gm, '');
    code = code.replace(/^\s*export default class/gm, 'class');
    code = code.replace(/^\s*\/\/.*$/gm, '');
    code = code.replace(/extends Component/gm, 'extends React.Component');
    code = code.replace(/^\s*export.*$/gm, '');
    code = code.replace(/^\s*static(.|\s)*?;$/gm, '');
    let transformedCode = transform(code, {
      presets: ['react', 'stage-2']
    }).code;
    transformedCode = transformedCode.replace(/"use strict";/gm, '');
    return transformedCode;
  } catch (e) {
    console.log(e);
    // todo: handle error
    return code;
  }
};

class LiveDemo extends React.Component {
  state = {
    codeOpen: false,
    showCopyMessage: false
  };

  handleClickCodeOpen = () => {
    this.setState({
      codeOpen: !this.state.codeOpen
    });
  };

  handleClickCopy = () => {
    copy(this.props.raw);
    this.setState({
      showCopyMessage: true
    });
    setTimeout(() => {
      this.setState({
        showCopyMessage: false
      });
    }, 2000);
  };

  render() {
    const { className, raw, images, live, liveScope, path } = this.props;
    const { codeOpen, showCopyMessage } = this.state;

    const GITHUB_BASE = 'https://github.com/patternfly/patternfly-react/blob/master/packages/patternfly-4';
    const examplePath = `${GITHUB_BASE}${path.substr(5)}`;

    const scope = {
      ...scopePlayground,
      ...liveScope
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
              <CoreIcons.CodeIcon />
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
                <i className={css('fab fa-github', styles.icon)} />
              </CoreComponents.Button>
            </a>
            <CoreComponents.TextContent className={css(styles.message, showCopyMessage && styles.messageShow)}>
              <CoreComponents.Text component="pre" className={css(styles.messageText)}>
                Copied to clipboard
              </CoreComponents.Text>
            </CoreComponents.TextContent>
            {codeOpen &&
              !live && (
                <CoreComponents.TextContent className={css(styles.messageShow)}>
                  <CoreComponents.Text component="pre" className={css(styles.messageText)}>
                    Live edititing disabled
                  </CoreComponents.Text>
                </CoreComponents.TextContent>
              )}
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
