import React from 'react';
import * as tokensModule from '@patternfly/react-tokens';

class Tokens extends React.Component {
  constructor(props) {
    super(props);
    if (!props.cssPrefix) {
      console.error('No css prefix for component');
      return;
    }
    this.cssTokens = Object.values(tokensModule).filter(val => (
      val.name.indexOf(props.cssPrefix) !== -1));
  }

  render() {
    return <div>
      {this.props.cssPrefix}
      <ul>
        {this.cssTokens.map(token =>
          <li key={token.name}>{token.name} / {token.value} / {token.var}</li>
        )}
      </ul>
    </div>
  }
}

Tokens.defaultProps = {
  cssPrefix: null
};

export default Tokens;