import { css } from './css';
import { StyleSheet } from './StyleSheet';

const stringValue = 'value';
const parseValue = StyleSheet.parse('.parseValue {}');
const createValue = StyleSheet.create({ createValue: {} });

test('removes falsy values', () => {
  const result = css(stringValue, null, undefined, false, 0);
  expect(result).toBe(stringValue);
});

test('handles values from StyleSheet.parse', () => {
  expect(css(parseValue.parseValue)).toMatchSnapshot();
});

test('handles values from StyleSheet.create', () => {
  expect(css(createValue.createValue)).toMatchSnapshot();
});

test('concatenates values together', () => {
  expect(css(parseValue.parseValue, createValue.createValue, stringValue)).toMatchSnapshot();
});
