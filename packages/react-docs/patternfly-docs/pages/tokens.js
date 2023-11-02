import React from 'react';
import { Text, PageSection } from '@patternfly/react-core';
import * as TokensModule from '@patternfly/react-tokens/dist/esm';

const tokensPage = () => {
  // const allIcons = Object.entries(IconsModule)
  //   .filter(([name]) => name.endsWith('Icon'))
  //   .sort(([name1], [name2]) => name1.localeCompare(name2));
  const allTokens = Object.entries(TokensModule);
  // console.log({TokensModule});
  return (
    <PageSection>
      <Text>These are all of the tokens available for use in PatternFly React.</Text>
      <ul>
        {allTokens.map(([id, tokenData]) => {
          if (id.startsWith('_pf_t_')) {
            const { name, value } = tokenData;
            // console.log({ name, value });
            const El = value === 'undefined' ? 'b' : 'span';
            return (
              <li key={id}>
                <El>
                  {name}: {value}
                </El>
              </li>
            );
          }
        })}
      </ul>
    </PageSection>
  );
};

export default tokensPage;
