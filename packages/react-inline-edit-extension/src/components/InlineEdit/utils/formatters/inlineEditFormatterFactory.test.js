import { inlineEditFormatterFactory } from './inlineEditFormatterFactory';

const blue = 'blue';
const alteredValue = 'violet';

const buildAdditionalData = (data, isEditing = true, activeEditId = 'testId') => ({
  rowData: {
    isEditing,
    editConfig: {
      activeEditId
    },
    data
  }
});

describe('inlineEditFormatterFactory', () => {
  test('renders default value', () => {
    const additionalData = buildAdditionalData(alteredValue);

    expect(inlineEditFormatterFactory()(blue, additionalData)).toBe(blue);
  });

  test('renders resolved value', () => {
    const additionalData = buildAdditionalData(alteredValue);

    expect(
      inlineEditFormatterFactory({
        resolveValue: (value, { rowData }) => rowData.data
      })(blue, additionalData)
    ).toBe(alteredValue);
  });

  test('renders resolved and render value', () => {
    const additionalData = buildAdditionalData(alteredValue, false);

    expect(
      inlineEditFormatterFactory({
        resolveValue: (value, { rowData }) => rowData.data,
        renderValue: value => `ultra ${value}`,
        renderEdit: value => `violent ${value}`
      })(blue, additionalData)
    ).toBe(`ultra ${alteredValue}`);
  });

  test('renders resolved and render edit value', () => {
    const additionalData = buildAdditionalData(alteredValue);

    expect(
      inlineEditFormatterFactory({
        resolveValue: (value, { rowData }) => rowData.data,
        renderEdit: value => `ultra ${value}`
      })(blue, additionalData)
    ).toBe(`ultra ${alteredValue}`);
  });

  test('passes computed data', () => {
    const additionalData = buildAdditionalData(alteredValue, true, 'myId');

    expect(
      inlineEditFormatterFactory({
        renderEdit: (value, data, { activeEditId }) => activeEditId
      })(blue, additionalData)
    ).toBe('myId');
  });
});
