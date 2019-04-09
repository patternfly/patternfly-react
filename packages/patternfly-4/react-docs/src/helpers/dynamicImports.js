// We cannot use `"@patternfly/react-core": "file:../react-core"` in package.json and then
// use the normal require("@patternfly/react-core") here because we need to use a *locked*
// version of react-core for other component _inside_ our website (like the nav) in case
// they break during local development. This is so the website won't fall apart if you break
// the code for react-core/src/components/Button locally.
import * as reactCharts from "../../../react-charts/dist/esm";
import * as reactCore from "../../../react-core/dist/esm";
import * as reactIcons from "../../../../react-icons/dist/esm";
import * as reactInlineEdit from "../../../react-inline-edit-extension/dist/esm";
import * as reactStyledSystem from "../../../react-styled-system/dist/esm";
import * as reactStyles from "../../../react-styles/dist/esm";
import * as reactTable from "../../../react-table/dist/esm";
import * as reactTokens from "../../../react-tokens/dist/esm";
// This is from our gatsby-transformer-react-examples plugin
import * as exampleComponents from "../../.cache/example_index";


let imports = {
  "@patternfly/react-charts": reactCharts,
  "@patternfly/react-core": reactCore,
  "@patternfly/react-icons": reactIcons,
  "@patternfly/react-styled-system": reactStyledSystem,
  "@patternfly/react-styles": reactStyles,
  "@patternfly/react-table": reactTable,
  "@patternfly/react-tokens": reactTokens,
  "@patternfly/react-inline-edit-extension": reactInlineEdit
};

export const getScope = (sourceCode, exampleResources) => {
  let res = {};
  Object.entries(imports).forEach(([key, value]) => {
    if (sourceCode.indexOf(key) !== -1) {
      Object.keys(value).forEach(expor => res[expor] = value[expor]);
    }
  });

  // If this doesn't resolve, the filename of the imported component _must_ match
  // the import. i.e. import abc123 from './examples/abc123'
  exampleResources.forEach(resource => {
    res[resource] = exampleComponents[resource];
  });

  return res;
};

export const getTokens = () => imports["@patternfly/react-tokens"];
