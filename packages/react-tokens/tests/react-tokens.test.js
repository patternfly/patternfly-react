const reactTokens = require('@patternfly/react-tokens');

// Test importing CJS tokens
test('CJS token', () => {
  const { color_black: black } = reactTokens;
  expect(black.value).toBeTruthy();
});
