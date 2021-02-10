export const makeTimeOptions = (stepMinutes: number, hour12: boolean, delimiter: string) => {
  const res = [];
  const iter = new Date(new Date().setHours(0, 0, 0, 0));
  const iterDay = iter.getDay();
  while (iter.getDay() === iterDay) {
    let hour = iter.getHours();
    let suffix = 'am';
    if (hour12) {
      if (hour === 0) {
        hour = 12; // 12am
      } else if (hour >= 12) {
        suffix = 'pm';
      }
      if (hour > 12) {
        hour %= 12;
      }
    }
    res.push(
      (hour12 ? hour.toString() : hour.toString().padStart(2, '0')) +
        delimiter +
        iter
          .getMinutes()
          .toString()
          .padStart(2, '0') +
        (hour12 ? suffix : '')
    );

    iter.setMinutes(iter.getMinutes() + stepMinutes);
  }

  return res;
};

export const parseTime = (time: string, timeRegex: RegExp, delimiter: string, is12Hour: boolean) => {
  const date = new Date(time);

  // if default time is a ISO 8601 formatted date string, we parse it to hh:mm(am/pm) format
  if (!isNaN(date.getDate()) && time.includes('T')) {
    const hours = is12Hour
      ? `${date.getHours() > 11 ? date.getHours() - 12 : date.getHours()}`
      : `${date.getHours()}`.padStart(2, '0');
    const minutes = `${date.getMinutes()}`.padStart(2, '0');
    let ampm = '';
    if (is12Hour && date.getHours() > 11) {
      ampm = 'pm';
    } else if (is12Hour) {
      ampm = 'am';
    }
    return `${hours}${delimiter}${minutes}${ampm}`;
  } else if (
    // if this 12 hour time is missing am/pm but otherwise valid, append am/pm
    is12Hour &&
    validateTime(time, timeRegex, delimiter, is12Hour) &&
    time !== '' &&
    !time.toLowerCase().includes('am') &&
    !time.toLowerCase().includes('pm')
  ) {
    return `${time}${new Date().getHours() > 11 ? 'pm' : 'am'}`; // if currently morning append am, otherwise pm
  }
  return time;
};

export const validateTime = (time: string, timeRegex: RegExp, delimiter: string, is12Hour: boolean) => {
  // ISO 8601 format is valid
  const date = new Date(time);
  if (!isNaN(date.getDate()) && time.includes('T')) {
    return true;
  }
  // hours only valid if they are [0-23] or [0-12]
  const hours = parseInt(time.split(delimiter)[0]);
  const validHours = hours >= 0 && hours <= (is12Hour ? 12 : 23);

  // empty string is valid
  return time === '' || (timeRegex.test(time) && validHours);
};
