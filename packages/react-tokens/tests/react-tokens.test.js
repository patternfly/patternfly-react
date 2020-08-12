const reactTokens = require('@patternfly/react-tokens');

// Test importing CJS tokens
test('CJS token', () => {
  const { global_palette_green_500 } = reactTokens;
  expect(global_palette_green_500.value).toBeTruthy();
});