export const getActiveItems = items =>
  items
    .filter(
      ({ disabled, type }) => !disabled && !['header', 'divider'].includes(type)
    )
    .map(({ text }) => text);
