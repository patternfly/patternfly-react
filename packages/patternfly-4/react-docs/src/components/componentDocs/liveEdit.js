import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';


class LiveEdit extends React.Component {
  constructor(props) {
    super(props);
    // Our children are elements inside a <code> tag created from rendered markdown
    this.code = this.props.children[0];
    this.scope = this.props.scope;
    this.scope.React = React;
  }

  transformCode(code) {
    if (typeof code !== 'string') {
      return;
    }
    // These don't actually do anything except make Buble mad
    const toParse = code
      .replace(/^\s*import.*from.*/gm, '') // single line import
      .replace(/^\s*import\s+{[\s\S]+?}\s+from.*/gm, '') // multi line import
      .replace(/^\s*export.*;/gm, '') // single line export
      .replace(/export default/gm, '') // inline export

    return toParse;
  }

  render() {
    if (this.props.className === 'language-js') {
      return (
        <LiveProvider code={this.code} scope={this.scope} transformCode={this.transformCode}>
          <LivePreview />
          <LiveEditor />
          <LiveError />
        </LiveProvider>
      );
    }
    else if (this.props.className === 'language-nolive') {
      return (
        <LiveProvider code={this.code} disabled>
          <LiveEditor />
        </LiveProvider>
      );
    }
    else {
      return <strong>{this.code}</strong>
    }
  }
}

export default LiveEdit