import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview, withLive } from 'react-live';
// Acorn has the quirk of not being able to be hoisted in yarn workspaces.
import { Parser } from 'acorn';
import classFields from 'acorn-class-fields';
import jsx from 'acorn-jsx';
import { generate } from 'astring'
import jsxGenerator from './astring-jsx'

// Things to inject
import * as CoreComponents from '@patternfly/react-core';
import * as CoreIcons from '@patternfly/react-icons';
import * as TableComponents from '@patternfly/react-table';
import * as ChartComponents from '@patternfly/react-charts';
import * as StyledSystemComponents from '@patternfly/react-styled-system';
import { css } from '@patternfly/react-styles';
import avatarImg from '../../../../react-core/src/components/Avatar/examples/img_avatar.svg';

class LiveEdit extends React.Component {
  static acorn = Parser.extend(jsx()).extend(classFields);

  constructor(props) {
    super(props);
    // Our children are elements inside a <code> tag created from rendered markdown
    this.scope = this.getScope(this.props.children[0]);
    this.code = this.makeCodeES6(this.props.children[0]);
  }

  makeCodeES6(code) {
    // Before you think about dropping Babel in here, let me remind you it's 1.5MB and we should
    // keep this site lightweight for building and testing. Instead, think about linking to a
    // real Javascript editor like Blaze, JSBin, JSFiddle, Codepen, etc.

    // console.log('parsing', toParse);
    code = this.transformCode(code);
    console.log('giving acorn', code);
    const ast = LiveEdit.acorn.parse(code, { ecmaVersion: 6 });
    console.log('givinst astring', ast);
    const res = generate(ast, { generator: jsxGenerator });
    console.log('transformed', res);

    return res;
  }

  getScope(code) {
    const res = { React, avatarImg };

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
    addToScope('@patternfly/react-styles', css);
    addToScope('@patternfly/react-styled-system', StyledSystemComponents);

    return res;
  }

  transformCode(code) {
    if (typeof code !== 'string') {
      console.log('confusing', code)
      return code;
    }
    // These don't actually do anything except make Buble mad
    const toParse = code.
      replace(/^\s*import.*/gm, '').
      replace(/^\s*export.*/gm, '');

    return toParse;
  }

  render() {
    // return <React.Fragment>
    //   <div className="component-documentation">
    //     <Playground codeText={this.transformCode(this.code)} scope={this.scope} collapsableCode={true} initiallyExpanded={false}></Playground>
    //   </div>
    // </React.Fragment>
    return <LiveProvider code={this.code} scope={this.scope} transformCode={this.transformCode}>
      <LivePreview />
      <LiveEditor />
      <LiveError />
    </LiveProvider>
  }
}

export default LiveEdit