import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview, withLive } from 'react-live';
import { css } from '@patternfly/react-styles';
import * as CoreComponents from '@patternfly/react-core';
import * as CoreIcons from '@patternfly/react-icons';
import * as TableComponents from '@patternfly/react-table';
import * as ChartComponents from '@patternfly/react-charts';
import * as StyledSystemComponents from '@patternfly/react-styled-system';


class LiveEdit extends React.Component {
  constructor(props) {
    super(props);
    // Our children are elements inside a <code> tag created from rendered markdown
    this.code = this.props.children[0];
    console.log('liveedit props', props)
    this.scope = this.getScope(this.code);
  }

  getScope(code) {
    const res = { React };

    const addToScope = (importPath, mod) => {
      if (code.indexOf(importPath) !== -1) {
        console.log('react-live importing', importPath);
        Object.entries(mod).forEach(([key, value]) => res[key] = value);
      }
    }
    addToScope('@patternfly/react-core', CoreComponents);
    addToScope('@patternfly/react-icons', CoreIcons);
    addToScope('@patternfly/react-table', TableComponents);
    addToScope('@patternfly/react-charts', ChartComponents);
    addToScope('@patternfly/react-styled-system', StyledSystemComponents);

    return res;
  }

  transformCode(code) {
    if (typeof code !== 'string') {
      console.log('confusing', code)
      return code;
    }
    const res = code.
      replace(/^\s*import.*/gm, '').
      replace(/^\s*export.*/gm, '');

    console.log('transformed', res)
    return res;
  }

  render() {
    return <LiveProvider code={this.code} scope={this.scope} transformCode={this.transformCode}>
      <LivePreview />
      <LiveEditor />
      <LiveError />
    </LiveProvider>
  }
}

export default withLive(LiveEdit)