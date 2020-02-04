import * as React from 'react';
import { shallow } from 'enzyme';
import { <%- pascalFilename %> } from '<%-relativeFilePath%>';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

it('<%- pascalFilename %> should match snapshot (auto-generated)', () => {
  const view = shallow(
    <<%- pascalFilename%>
      <%- componentProps.map(componentMeta => {
        return ""+componentMeta.propName+"={"+
          // (
          //   (componentMeta.propType === 'string')
          //     ?
          //   "'"
          //     :
          //   ''
          // )
          //   +
          (
            (componentMeta.propType === 'shape' || componentMeta.propType === 'string') ?
              JSON.stringify(componentMeta.propDefaultValue,null,1)
              :
              componentMeta.propDefaultValue
          )
          //   +
          // (
          //   (componentMeta.propType === 'string')
          //     ?
          //   "'"
          //     :
          //   ''
          // )
            +
          "}"
      }  ).join('\n\t\t\t') %>
    />);
  expect(view).toMatchSnapshot();
});
