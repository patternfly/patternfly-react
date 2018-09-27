import { clipboardCopy } from './copy';

test('passing null does nothing', () => {
  const spyFunc = jest.fn(() => true);
  // Object.defineProperty(global.document, 'execCommand', { value: spyFunc });
  expect(clipboardCopy(null)).toBe(false);
  expect(spyFunc).not.toBeCalled();
});

test('passing input node copies its text', () => {
  const spyFunc = jest.fn(() => true);
  const inputNode = { select: jest.fn(), blur: jest.fn() };
  Object.defineProperty(global.document, 'execCommand', { value: spyFunc });
  expect(clipboardCopy(inputNode)).toBe(true);
  expect(spyFunc).toBeCalled();
  expect(inputNode.select).toBeCalled();
  expect(inputNode.blur).toBeCalled();
});
