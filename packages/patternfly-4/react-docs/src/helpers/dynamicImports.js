// Dynamic imports
const reactCharts = require("@patternfly/react-charts");
const reactCore = require("@patternfly/react-core");
const reactIcons = require("@patternfly/react-icons");
const reactStyled = require("@patternfly/react-styled-system");
const reactStyles = require("@patternfly/react-styles");
const reactTable = require("@patternfly/react-table");
const reactTokens = require("@patternfly/react-tokens");
// This is from our gatsby-transformer-react-examples plugin
const exampleComponents = require("../../.cache/example_index");


let imports = {
  "@patternfly/react-charts": reactCharts,
  "@patternfly/react-core": reactCore,
  "@patternfly/react-icons": reactIcons,
  "@patternfly/react-styled-system": reactStyled,
  "@patternfly/react-styles": reactStyles,
  "@patternfly/react-table": reactTable,
  "@patternfly/react-tokens": reactTokens
};

exports.getScope = (sourceCode, exampleResources) => {
  let res = {};
  Object.entries(imports).forEach(([key, value]) => {
    if (sourceCode.indexOf(key) !== -1) {
      Object.keys(value).forEach(expor => res[expor] = value[expor]);
    }
  });

  exampleResources.forEach(resource => {
    res[resource] = exampleComponents[resource];
  });

  return res;
}