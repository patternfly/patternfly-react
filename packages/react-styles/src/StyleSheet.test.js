import { StyleSheet } from './StyleSheet';

test('converts a css string into an object', () => {
  const styles = StyleSheet.parse(`
  .pf-c-button {
    color: red;
  }
  .pf-c-alert {
    color: black;
  }
  `);
  expect(styles).toMatchSnapshot();
});

test('places modifers in the modifers object', () => {
  const styles = StyleSheet.parse(`
  .pf-m-active {}
  .pf-m-secondary-alt {}
  `);
  expect(styles).toMatchSnapshot();
});
