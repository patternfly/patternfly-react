export const formatDate = (date, locale = 'en-US') => {
  const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
  if (Date.parse(date)) {
    const parsedValue = new Date(date);
    return Intl.DateTimeFormat(locale, options).format(parsedValue);
  }
  return date;
};
