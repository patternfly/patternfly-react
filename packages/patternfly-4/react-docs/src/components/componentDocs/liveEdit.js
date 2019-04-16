import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { Button } from '@patternfly-safe/react-core';
import { CodeIcon, CopyIcon } from '@patternfly-safe/react-icons';

const liveEditorStyle = { code: { 'max-height': '37.5rem', overflow: 'auto' } };
class LiveEdit extends React.Component {
  constructor(props) {
    super(props);
    // Our children are elements inside a <code> tag created from rendered markdown
    this.code = this.props.children;
    // This is injected in src/components/mdx-renderer
    this.scope = this.getScope();
    this.state = {
      codeOpen: false,
      copied: false
    };
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

  onCodeOpen = () => {
    this.setState({ codeOpen: !this.state.codeOpen })
  }

  onCopy = () => {
    const el = document.createElement('textarea');
    el.value = this.code;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    this.setState({ copied: true });
  }

  render() {
    const Toolbar = (
      <div style={{ borderTop: `1px solid #72767b`, borderBottom: `1px solid #72767b` }}>
        <Button
          onClick={this.onCodeOpen}
          variant="plain"
          title="Toggle code"
          aria-label="Toggle code"
        >
          <CodeIcon />
        </Button>
        <Button
          onClick={this.onCopy}
          variant="plain"
          title="Copy code"
          aria-label="Copy code"
        >
          <CopyIcon />
        </Button>
        <span>
          {this.state.copied && 'Copied to clipboard!'}
        </span>
      </div>
    );

    if (this.props.className === 'language-js') {
      return (
        <div style={{ border: `1px solid #72767b` }}>
          <LiveProvider code={this.code} scope={this.scope} transformCode={this.transformCode}>
            <LivePreview />
            {Toolbar}
            {this.state.codeOpen && <LiveEditor style={liveEditorStyle} />}
            <LiveError />
          </LiveProvider>
        </div>
      );
    }
    else if (this.props.className === 'language-nolive') {
      return (
        <LiveProvider code={this.code} disabled>
          <LiveEditor style={liveEditorStyle} contentEditable={false} />
        </LiveProvider>
      );
    }
    else {
      return <strong>{this.code}</strong>;
    }
  }
}

export default LiveEdit;
