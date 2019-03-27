import React from 'react';
import * as tokensModule from '../../../../react-tokens/dist/js';

class CSSVars extends React.Component {
  constructor(props) {
    super(props);
    if (!props.cssPrefix) {
      return;
    }

    this.cssTokens = Object.entries(tokensModule)
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
                    border: `${tokensModule.global_BorderWidth_sm.var} solid ${tokensModule.global_BorderColor.var}`,
                    marginRight: tokensModule.global_spacer_sm.var,
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