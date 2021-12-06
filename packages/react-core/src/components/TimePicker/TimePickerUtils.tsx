export const amSuffix = ' AM';
export const pmSuffix = ' PM';

export const makeTimeOptions = (
  stepMinutes: number,
  hour12: boolean,
  delimiter: string,
  minTime: string,
  maxTime: string
) => {
  const res = [];
  const iter = new Date(new Date().setHours(0, 0, 0, 0));
  const iterDay = iter.getDay();
  while (iter.getDay() === iterDay) {
    let hour: string | number = iter.getHours();
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
    hour = hour12 ? hour.toString() : hour.toString().padStart(2, '0');
    const minutes = iter
      .getMinutes()
      .toString()
      .padStart(2, '0');
    const timeOption = hour + delimiter + minutes + (hour12 ? suffix : '');
    // if >=min && <=max, res.push
    if (validateMinMax(minTime, maxTime, timeOption, hour12, delimiter)) {
      // console.log({ res });
      res.push(timeOption);
    }
    // FUNCTIONALITY MOVED ABOVE
    // (hour12 ? hour.toString() : hour.toString().padStart(2, '0')) +
    //   delimiter +
    //   iter
    //     .getMinutes()
    //     .toString()
    //     .padStart(2, '0') +
    //   (hour12 ? suffix : '')

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
      // console.log(time, timeRegex, delimiter, is12Hour, validateTime(time, timeRegex, delimiter, is12Hour));
      const [, hours, minutes, suffix = ''] = timeRegex.exec(time);
      const uppercaseSuffix = suffix.toUpperCase();
      // Format AM/PM according to design
      let ampm = '';
      if (uppercaseSuffix === amSuffix.toUpperCase().trim()) {
        ampm = amSuffix;
      } else if (uppercaseSuffix === pmSuffix.toUpperCase().trim()) {
        ampm = pmSuffix;
      } else {
        // if this 12 hour time is missing am/pm but otherwise valid,
        // append am/pm depending on time of day
        ampm = new Date().getHours() > 11 ? pmSuffix : amSuffix;
      }
      return `${hours}${delimiter}${minutes}${ampm}`;
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

export const validateMinMax = (minTime: string, maxTime: string, time: string, hour12: boolean, delimiter: string) => {
  let minTime24Hour = minTime;
  let maxTime24Hour = maxTime;
  let time24Hour = time;
  const convertTo24Hour = (time: string): string => {
    const timeReg = new RegExp(`^\\s*(\\d\\d?)${delimiter}([0-5]\\d)\\s*([AaPp][Mm])?\\s*$`);
    const regMatches = timeReg.exec(time);
    let hours = regMatches[1];
    const minutes = regMatches[2];
    const suffix = regMatches[3] || '';
    if (suffix.toUpperCase() === 'PM' && hours !== '12') {
      hours = `${parseInt(hours) + 12}`;
    } else if (suffix.toUpperCase() === 'AM' && hours === '12') {
      hours = '00';
    }
    return `${hours}${delimiter}${minutes}`;
  };
  // const convert24HourToInt = (time: string): number => {
  //   const timeNums = time.split(delimiter).join();
  //   return parseInt(timeNums);
  // };

  if (!hour12) {
    // convert AM/PM times to 24hr times (12:30AM => 00:30)
    minTime24Hour = convertTo24Hour(minTime24Hour);
    maxTime24Hour = convertTo24Hour(maxTime24Hour);
    time24Hour = convertTo24Hour(time24Hour);
  }

  // const minTimeNum = convert24HourToInt(minTime24Hour);
  // const maxTimeNum = convert24HourToInt(maxTime24Hour);
  // const timeNum = convert24HourToInt(time24Hour);
  // simple comparison for 24hr times
  return minTime24Hour <= time24Hour && time24Hour <= maxTime24Hour;
};
