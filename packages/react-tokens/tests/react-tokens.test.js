const reactTokens = require('@rh-felt/react-tokens');

// Test importing CJS tokens
test('CJS token', () => {
  const { t_color_black: black } = reactTokens;
  expect(black.value).toBeTruthy();
});
