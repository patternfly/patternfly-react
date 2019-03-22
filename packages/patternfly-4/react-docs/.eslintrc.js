// We need this file to disable gatsby's default webpack eslintrc
// which will complain when we `import { css } from '@patternfly/react-styles';`
module.exports = {
  extends: ["standard"],
  plugins: ["standard", "react"],
  rules: {
    "import/first": "off"
  },
}