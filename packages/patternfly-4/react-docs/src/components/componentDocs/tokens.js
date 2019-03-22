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
    return <table>
      <tbody>
      <tr>
        <th>CSS Variable</th>
        <th>Value</th>
      </tr>
      {this.cssTokens.map(token =>
        <tr key={token.name}>
          <td>{token.name}</td>
          <td>{token.value}</td>
        </tr>
      )}
      </tbody>
    </table>
  }
}

Tokens.defaultProps = {
  cssPrefix: null
};

export default Tokens;