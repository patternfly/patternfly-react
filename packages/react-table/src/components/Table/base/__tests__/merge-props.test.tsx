import { isValidElement } from 'react';
import { mergeProps } from '../merge-props';

test('merges plain props deeply', () => {
  const result = mergeProps({ style: { color: 'red' }, id: 'a' }, { style: { background: 'blue' } });

  expect(result).toEqual({ style: { color: 'red', background: 'blue' }, id: 'a' });
});

test('merges class names into a single string', () => {
  expect(mergeProps({ className: 'foo' }, { className: 'bar' })).toEqual({ className: 'foo bar' });
});

test('composes children when both sides provide them', () => {
  const result = mergeProps({ children: <div id="outer" /> }, { children: <span id="inner" /> });

  expect(isValidElement(result.children)).toBe(true);
  expect(result.children.type).toBe('div');
  expect(result.children.props.children.type).toBe('span');
});

test('keeps a lone React element child by reference instead of spreading it', () => {
  const child = <button type="button">toggle</button>;
  const result = mergeProps({ className: 'cell' }, { children: child });

  // Spreading the element into a plain object would expose React internals
  // (e.g. the React 19 owner chain) to lodash's deep merge and hang SSR.
  expect(result.children).toBe(child);
});

test('treats React elements under arbitrary keys as atomic values', () => {
  const icon = <svg data-id="first" />;
  const replacement = <svg data-id="second" />;
  const result = mergeProps({ title: icon }, { title: replacement });

  expect(result.title).toBe(replacement);
  expect(mergeProps({ title: icon }, { other: 1 }).title).toBe(icon);
});
