export const amSuffix = ' AM';
export const pmSuffix = ' PM';

export const makeTimeOptions = (stepMinutes: number, hour12: boolean, delimiter: string) => {
  const res = [];
  const iter = new Date(new Date().setHours(0, 0, 0, 0));
  const iterDay = iter.getDay();
  while (iter.getDay() === iterDay) {
    let hour = iter.getHours();
    let suffix = amSuffix;
    if (hour12) {
      if (hour === 0) {
        hour = 12; // 12am
      } else if (hour >= 12) {
        suffix = pmSuffix;
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

export const parseTime = (time: string | Date, timeRegex: RegExp, delimiter: string, is12Hour: boolean): string => {
  const date = new Date(time);

  // if default time is a ISO 8601 formatted date string, we parse it to hh:mm(am/pm) format
  if (!isNaN(date.getDate()) && (time instanceof Date || time.includes('T'))) {
    const hours = is12Hour
      ? `${date.getHours() > 12 ? date.getHours() - 12 : date.getHours()}`
      : `${date.getHours()}`.padStart(2, '0');
    const minutes = `${date.getMinutes()}`.padStart(2, '0');
    let ampm = '';
    if (is12Hour && date.getHours() > 11) {
      ampm = pmSuffix;
    } else if (is12Hour) {
      ampm = amSuffix;
    }
    return `${hours}${delimiter}${minutes}${ampm}`;
  } else if (typeof time === 'string') {
    time = time.trim();
    if (is12Hour && time !== '' && validateTime(time, timeRegex, delimiter, is12Hour)) {
      // Format AM/PM according to design
      let ampm = '';
      if (time.toUpperCase().includes(amSuffix.toUpperCase().trim())) {
        time = time
          .toUpperCase()
          .replace(amSuffix.toUpperCase().trim(), '')
          .trim();
        ampm = amSuffix;
      } else if (time.toUpperCase().includes(pmSuffix.toUpperCase().trim())) {
        time = time
          .toUpperCase()
          .replace(pmSuffix.toUpperCase().trim(), '')
          .trim();
        ampm = pmSuffix;
      } else {
        // if this 12 hour time is missing am/pm but otherwise valid,
        // append am/pm depending on time of day
        ampm = new Date().getHours() > 11 ? pmSuffix : amSuffix;
      }
      return `${time}${ampm}`;
    }
  }
  return time.toString();
};

export const validateTime = (time: string, timeRegex: RegExp, delimiter: string, is12Hour: boolean) => {
  // ISO 8601 format is valid
  const date = new Date(time);
  if (!isNaN(date.getDate()) && time.includes('T')) {
    return true;
  }
  // hours only valid if they are [0-23] or [1-12]
  const hours = parseInt(time.split(delimiter)[0]);
  const validHours = hours >= (is12Hour ? 1 : 0) && hours <= (is12Hour ? 12 : 23);
  // minutes verified by timeRegex

  // empty string is valid
  return time === '' || (timeRegex.test(time) && validHours);
};

export const getHours = (time: string, timeRegex: RegExp) => {
  const parts = time.match(timeRegex);
  if (parts && parts.length) {
    if (/pm/i.test(parts[3])) {
      return parseInt(parts[1]) === 12 ? parseInt(parts[1]) : parseInt(parts[1]) + 12;
    }
    if (/am/i.test(parts[3])) {
      return parseInt(parts[1]) === 12 ? 0 : parseInt(parts[1]);
    }
    return parseInt(parts[1]);
  }
  return null;
};

export const getMinutes = (time: string, timeRegex: RegExp) => {
  const parts = time.match(timeRegex);
  return parts && parts.length ? parseInt(parts[2]) : null;
};
