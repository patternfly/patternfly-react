import {
  capitalize,
  formatLocalizedDecimal,
  formatBreakpointMods,
  getElementLocale,
  getLocalizedInputWidthChars,
  getUniqueId,
  debounce,
  isElementInView,
  parseLocalizedDecimal,
  sideElementIsOutOfView,
  fillTemplate,
  pluralize
} from '../util';
import { SIDE } from '../constants';
import styles from '@patternfly/react-styles/css/layouts/Flex/flex';

const createMockHtmlElement = (bounds: Partial<DOMRect>) =>
  ({
    getBoundingClientRect: () => bounds
  }) as HTMLElement;

test('capitalize', () => {
  expect(capitalize('foo')).toBe('Foo');
});

test('getUniqueId', () => {
  expect(getUniqueId()).not.toBe(getUniqueId());
});

test('getUniqueId prefixed', () => {
  expect(getUniqueId().substring(0, 3)).toBe('pf-');
  expect(getUniqueId('pf-switch').substring(0, 10)).toBe('pf-switch-');
});

test('debounce', () => {
  jest.useFakeTimers();
  const callback = jest.fn();
  const debouncedFunction = debounce(callback, 50);

  debouncedFunction();
  // At this point in time, the callback should not have been called yet
  expect(callback).toHaveBeenCalledTimes(0);

  for (let i = 0; i < 10; i++) {
    jest.advanceTimersByTime(50);
    debouncedFunction();
  }

  expect(callback).toHaveBeenCalledTimes(10);
});

test('isElementInView should be true when partial out of view and with partial true', () => {
  const container = createMockHtmlElement({ left: 0, right: 200 });
  const element = createMockHtmlElement({ left: 10, right: 210 });
  expect(isElementInView(container, element, true)).toBe(true);
});

test('isElementInView should be false when partial out of view and with partial false ', () => {
  const container = createMockHtmlElement({ left: 0, right: 200 });
  const element = createMockHtmlElement({ left: 10, right: 210 });
  expect(isElementInView(container, element, false)).toBe(false);
});

test('isElementInView should be false completely out of view ', () => {
  const container = createMockHtmlElement({ left: 0, right: 200 });
  const element = createMockHtmlElement({ left: 200, right: 300 });
  expect(isElementInView(container, element, true)).toBe(false);
});

test('isElementInView should be false completely out of view when partial false ', () => {
  const container = createMockHtmlElement({ left: 0, right: 200 });
  const element = createMockHtmlElement({ left: 200, right: 300 });
  expect(isElementInView(container, element, false)).toBe(false);
});

test('sideElementIsOutOfView Returns left when off on left side', () => {
  const container = createMockHtmlElement({ left: 20, right: 220 });
  const element = createMockHtmlElement({ left: 10, right: 210 });
  expect(sideElementIsOutOfView(container, element)).toBe(SIDE.LEFT);
});

test('sideElementIsOutOfView Returns right when off on right side', () => {
  const container = createMockHtmlElement({ left: 0, right: 200 });
  const element = createMockHtmlElement({ left: 210, right: 410 });
  expect(sideElementIsOutOfView(container, element)).toBe(SIDE.RIGHT);
});

test('sideElementIsOutOfView Returns NONE when in view', () => {
  const container = createMockHtmlElement({ left: 0, right: 200 });
  const element = createMockHtmlElement({ left: 10, right: 110 });
  expect(sideElementIsOutOfView(container, element)).toBe(SIDE.NONE);
});

test('fillTemplate interpolates strings correctly', () => {
  const templateString = 'My name is ${firstName} ${lastName}';
  const expected = 'My name is Jon Dough';
  const templatVars = {
    firstName: 'Jon',
    lastName: 'Dough'
  };
  const actual = fillTemplate(templateString, templatVars);
  expect(actual).toEqual(expected);
});

test('text pluralize', () => {
  expect(pluralize(1, 'dog')).toEqual('1 dog');
  expect(pluralize(2, 'dog')).toEqual('2 dogs');
  expect(pluralize(2, 'finch', 'finches')).toEqual('2 finches');
});

test('formatBreakpointMods', () => {
  expect(formatBreakpointMods({ default: 'spacerNone' }, styles)).toEqual('pf-m-spacer-none');
  expect(formatBreakpointMods({ md: 'spacerNone' }, styles)).toEqual('pf-m-spacer-none-on-md');
  expect(formatBreakpointMods({ default: 'column', lg: 'row' }, styles)).toEqual('pf-m-column pf-m-row-on-lg');
});

test('parseLocalizedDecimal accepts locale-formatted decimals', () => {
  const enFormatter = new Intl.NumberFormat('en', { useGrouping: false });
  const esFormatter = new Intl.NumberFormat('es', { useGrouping: false });
  const deFormatter = new Intl.NumberFormat('de-DE', { useGrouping: false });

  expect(parseLocalizedDecimal('50.2', enFormatter)).toBe(50.2);
  expect(parseLocalizedDecimal('50,2', esFormatter)).toBe(50.2);
  expect(parseLocalizedDecimal('0,625', deFormatter)).toBe(0.625);
  expect(parseLocalizedDecimal('', enFormatter)).toBeNaN();
});

test('parseLocalizedDecimal rejects mismatched separators', () => {
  const enFormatter = new Intl.NumberFormat('en-US', { useGrouping: false });
  const deFormatter = new Intl.NumberFormat('de-DE', { useGrouping: false });

  expect(parseLocalizedDecimal('50,2', enFormatter)).toBeNaN();
  expect(parseLocalizedDecimal('50.2', deFormatter)).toBeNaN();
  expect(parseLocalizedDecimal('50,2', deFormatter)).toBe(50.2);
});

test('parseLocalizedDecimal rejects grouping separators', () => {
  const enFormatter = new Intl.NumberFormat('en-US');
  const esFormatter = new Intl.NumberFormat('es');
  const deFormatter = new Intl.NumberFormat('de-DE');
  const enINFormatter = new Intl.NumberFormat('en-IN');

  expect(parseLocalizedDecimal('1,234.56', enFormatter)).toBeNaN();
  expect(parseLocalizedDecimal('12.345,67', esFormatter)).toBeNaN();
  expect(parseLocalizedDecimal('1.234,56', deFormatter)).toBeNaN();
  expect(parseLocalizedDecimal('12,34,567', enINFormatter)).toBeNaN();
});

test('parseLocalizedDecimal rejects malformed numeric tokens', () => {
  const enFormatter = new Intl.NumberFormat('en-US');

  expect(parseLocalizedDecimal('12abc', enFormatter)).toBeNaN();
  expect(parseLocalizedDecimal('1,2abc', enFormatter)).toBeNaN();
  expect(parseLocalizedDecimal('12-3', enFormatter)).toBeNaN();
  expect(parseLocalizedDecimal('--12', enFormatter)).toBeNaN();
  expect(parseLocalizedDecimal('+-12', enFormatter)).toBeNaN();
  expect(parseLocalizedDecimal('12.3.4', enFormatter)).toBeNaN();
  expect(parseLocalizedDecimal('abc', enFormatter)).toBeNaN();

  expect(parseLocalizedDecimal('-50.2', enFormatter)).toBe(-50.2);
  expect(parseLocalizedDecimal('+12', enFormatter)).toBe(12);
  expect(parseLocalizedDecimal('1,234.56', enFormatter)).toBeNaN();
});

test('formatLocalizedDecimal uses locale decimal separator', () => {
  expect(formatLocalizedDecimal(50.2, new Intl.NumberFormat('en-US'))).toBe('50.2');
  expect(formatLocalizedDecimal(50.2, new Intl.NumberFormat('de-DE'))).toBe('50,2');
});

test('getLocalizedInputWidthChars stays wide enough for shorter formatted values', () => {
  const formatter = new Intl.NumberFormat('de-DE', { useGrouping: false });

  expect(getLocalizedInputWidthChars(formatter, 0, 1, '1')).toBe(formatLocalizedDecimal(0.99, formatter).length);
  expect(getLocalizedInputWidthChars(formatter, 0, 100, '5')).toBe(formatLocalizedDecimal(100, formatter).length);
});
