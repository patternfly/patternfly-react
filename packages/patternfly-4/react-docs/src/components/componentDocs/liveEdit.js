import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';


class LiveEdit extends React.Component {
  constructor(props) {
    super(props);
    // Our children are elements inside a <code> tag created from rendered markdown
    this.code = this.props.children[0];
    this.scope = this.props.scope;
    this.scope.React = React;
    console.log('scope', this.scope);
    // this.scope = {
    //   React,
    //   ...CoreComponents,
    //   ...CoreIcons,
    //   ...TableComponents,
    //   ...ChartComponents,
    //   ...StyledSystemComponents,
    //   ...Styles
    // };

    // const fullPath = props.exampleResources[0];
    // const importName = fullPath.replace(/^.*[\\\/]/, '').replace(/\..*/, '');
    // console.log(importName, '=require', fullPath);
    // console.log('confused', '/Users/zallen/src/patternfly-react/packages/patternfly-4/react-core/src/components/Avatar/examples/avatarImg.svg' === fullPath);
    // this.scope.importName = require(fullPath);
  }

  transformCode(code) {
    if (typeof code !== 'string') {
      console.log('confusing', code)
      return code;
    }
    // These don't actually do anything except make Buble mad
    const toParse = code
      .replace(/^\s*import.*/gm, '')
      .replace(/^\s*export.*/gm, '');

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