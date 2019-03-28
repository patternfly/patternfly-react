import React from 'react';
import { getTokens } from '../../helpers/dynamicImports';

class CSSVars extends React.Component {
  constructor(props) {
    super(props);
    if (!props.cssPrefix) {
      return;
    }

    this.cssTokens = Object.entries(getTokens())
      .filter(([key, val]) => (val.name.indexOf(props.cssPrefix) !== -1))
      .map(([key, val]) => ({
        token: key,
        ...val
      }));
    this.colorRegex = /^(#|rgb)/;
  }

  render() {
    return (
      <table>
        <tbody>
          <tr>
            <th>CSS Variable</th>
            <th>React Token</th>
            <th>Value</th>
          </tr>
          {this.cssTokens && this.cssTokens.map(token =>
            <tr key={token.name}>
              <td>{token.name}</td>
              <td>{token.token}</td>
              <td>
                {this.colorRegex.test(token.value) &&
                  <span style={{
                    backgroundColor: token.value,
                    display: 'inline-block',
                    height: 18,
                    width: 18,
                    border: `1px solid #72767b`,
                    marginRight: '0.5rem',
                    verticalAlign: 'middle'
                  }}></span>
                }
                {token.value}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }
}

CSSVars.defaultProps = {
  cssPrefix: null
};

export default CSSVars;