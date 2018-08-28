import React from 'react';
import Content from '../../components/content';
import { Title } from '@patternfly/react-core';
import { Table, Heading, Body, TH, TD, Row } from '../../components/table';
import * as tokensModule from '@patternfly/react-tokens';
import { StyleSheet, css } from '@patternfly/react-styles';

const styles = StyleSheet.create({
  name: {
    whiteSpace: 'nowrap'
  },
  color: {
    display: 'inline-block',
    height: 15,
    width: 15,
    border: `${tokensModule.global_BorderWidth_sm.var} solid ${tokensModule.global_BorderColor.var}`,
    marginRight: tokensModule.global_spacer_sm.var
  },
  tokenCell: {
    whiteSpace: 'nowrap'
  }
});
const isColorRegex = /^(#|rgb)/;

function Tokens() {
  return (
    <Content>
      <Title size="3xl">Tokens</Title>
      <Table>
        <Heading>
          <TH>Variable</TH>
          <TH>Name</TH>
          <TH>Value</TH>
        </Heading>
        <Body>
          {Object.keys(tokensModule).reduce((acc, key) => {
            const token = tokensModule[key];
            if (!token.name || !token.value) {
              return acc;
            }
            return [
              ...acc,
              <Row key={key}>
                <TD className={css(styles.tokenCell)}>{key}</TD>
                <TD className={css(styles.tokenCell)}>
                  <span className={css(styles.name)}>{token.name}</span>
                </TD>
                <TD>
                  {isColorRegex.test(token.value) && (
                    <span className={css(styles.color)} style={{ backgroundColor: token.value }} />
                  )}
                  {token.value}
                </TD>
              </Row>
            ];
          }, [])}
        </Body>
      </Table>
    </Content>
  );
}

export default Tokens;
