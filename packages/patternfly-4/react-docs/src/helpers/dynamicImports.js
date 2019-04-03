// Dynamic imports. Yep, this is as ghetto as it looks.
// We cannot use `"@patternfly/react-core": "file:../react-core"` in package.json and then
// use the normal require("@patternfly/react-core") here because we need to use a *locked*
// version of react-core for other component _inside_ our website (like the nav) in case
// they break during local development. This is so the website won't fall apart if you break
// the code for react-core/src/components/Button locally.
const reactCharts = require("../../../react-charts/dist/esm");
const reactCore = require("../../../react-core/dist/esm");
const reactIcons = require("../../../../react-icons/dist/esm");
const reactStyled = require("../../../react-styled-system/dist/esm");
const reactStyles = require("../../../react-styles/dist/esm");
const reactTable = require("../../../react-table/dist/esm");
const reactTokens = require("../../../react-tokens/dist/esm");
const reactStyledSystem = require("../../../react-styled-system/dist/esm")
const reactInlineEdit = require("../../../react-inline-edit-extension/dist/esm")
// This is from our gatsby-transformer-react-examples plugin
const exampleComponents = require("../../.cache/example_index");


let imports = {
  "@patternfly/react-charts": reactCharts,
  "@patternfly/react-core": reactCore,
  "@patternfly/react-icons": reactIcons,
  "@patternfly/react-styled-system": reactStyled,
  "@patternfly/react-styles": reactStyles,
  "@patternfly/react-table": reactTable,
  "@patternfly/react-tokens": reactTokens,
  "@patternfly/react-styled-system": reactStyledSystem,
  "@patternfly/react-inline-edit-extension": reactInlineEdit
};

exports.getScope = (sourceCode, exampleResources) => {
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

exports.getTokens = () => imports["@patternfly/react-tokens"];
