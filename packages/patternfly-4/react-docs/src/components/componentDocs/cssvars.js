/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import * as reactTokens from '../../../../react-tokens/dist/esm';

export class CSSVars extends React.Component {
  constructor(props) {
    super(props);
    if (!props.cssPrefix) {
      return;
    }

    this.cssTokens = Object.entries(reactTokens)
      .filter(([key, val]) => val.name.indexOf(props.cssPrefix) !== -1)
      .map(([key, val]) => ({
        token: key,
        ...val
      }));
    this.colorRegex = /^(#|rgb)/;
  }

  render() {
    if (!this.cssTokens) { return <p>No CSS Variables</p>; }

    return (
      <table className="pf-c-table pf-m-compact pf-m-grid-md" role="grid" aria-label="CSS Variable Table">
        <caption>{this.props.caption}</caption>
        <thead>
          <tr>
            <th scope="col">CSS Variable</th>
            <th scope="col">React Token</th>
            <th scope="col">Value</th>
          </tr>
        </thead>
        <tbody>
          {this.cssTokens.map(token => (
            <tr key={token.name}>
              <td>{token.name}</td>
              <td>{token.token}</td>
              <td>
                {this.colorRegex.test(token.value) && (
                  <span
                    style={{
                      backgroundColor: token.value,
                      display: 'inline-block',
                      height: 18,
                      width: 18,
                      border: '1px solid #72767b',
                      marginRight: '0.5rem',
                      verticalAlign: 'middle'
                    }}
                  />
                )}
                {token.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

CSSVars.propTypes = {
  cssPrefix: PropTypes.string,
  caption: PropTypes.node
};

CSSVars.defaultProps = {
  cssPrefix: null,
  caption: null
};
