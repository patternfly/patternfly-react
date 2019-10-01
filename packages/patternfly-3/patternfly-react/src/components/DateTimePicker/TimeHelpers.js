export const getDateFromTime = time => {
  if (time === '') {
    return time;
  }
  if (Date.parse(time)) {
    return new Date(time);
  } else if (Date.parse(`1/1/1 ${time}`)) {
    return new Date(`1/1/1 ${time}`);
  }
  return time;
};

export const formatTime = (time, locale = 'en-US') => {
  const options = { hour: '2-digit', minute: '2-digit' };
  const parsedTime = getDateFromTime(time);
  if (Date.parse(parsedTime)) {
    return parsedTime.toLocaleString(locale, options);
  }
  return time;
};
