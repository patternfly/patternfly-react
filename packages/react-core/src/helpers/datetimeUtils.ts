/**
 * @param {Date} date - A date to check the validity of
 */
export const isValidDate = (date: Date) => Boolean(date && !isNaN(date as any));
