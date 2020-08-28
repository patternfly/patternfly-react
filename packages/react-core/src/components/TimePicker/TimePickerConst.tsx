export const times12Hr = (delimiter: string) => [
  `12${delimiter}00am`,
  `12${delimiter}30am`,
  `1${delimiter}00am`,
  `1${delimiter}30am`,
  `2${delimiter}00am`,
  `2${delimiter}30am`,
  `3${delimiter}00am`,
  `3${delimiter}30am`,
  `4${delimiter}00am`,
  `4${delimiter}30am`,
  `5${delimiter}00am`,
  `5${delimiter}30am`,
  `6${delimiter}00am`,
  `6${delimiter}30am`,
  `7${delimiter}00am`,
  `7${delimiter}30am`,
  `8${delimiter}00am`,
  `8${delimiter}30am`,
  `9${delimiter}00am`,
  `9${delimiter}30am`,
  `10${delimiter}00am`,
  `10${delimiter}30am`,
  `11${delimiter}00am`,
  `11${delimiter}30am`,
  `12${delimiter}00pm`,
  `12${delimiter}30pm`,
  `1${delimiter}00pm`,
  `1${delimiter}30pm`,
  `2${delimiter}00pm`,
  `2${delimiter}30pm`,
  `3${delimiter}00pm`,
  `3${delimiter}30pm`,
  `4${delimiter}00pm`,
  `4${delimiter}30pm`,
  `5${delimiter}00pm`,
  `5${delimiter}30pm`,
  `6${delimiter}00pm`,
  `6${delimiter}30pm`,
  `7${delimiter}00pm`,
  `7${delimiter}30pm`,
  `8${delimiter}00pm`,
  `8${delimiter}30pm`,
  `9${delimiter}00pm`,
  `9${delimiter}30pm`,
  `10${delimiter}00pm`,
  `10${delimiter}30pm`,
  `11${delimiter}00pm`,
  `11${delimiter}30pm`
];

export const times24Hr = (delimiter: string) => [
  `00${delimiter}00`,
  `00${delimiter}30`,
  `01${delimiter}00`,
  `01${delimiter}30`,
  `02${delimiter}00`,
  `02${delimiter}30`,
  `03${delimiter}00`,
  `03${delimiter}30`,
  `04${delimiter}00`,
  `04${delimiter}30`,
  `05${delimiter}00`,
  `05${delimiter}30`,
  `06${delimiter}00`,
  `06${delimiter}30`,
  `07${delimiter}00`,
  `07${delimiter}30`,
  `08${delimiter}00`,
  `08${delimiter}30`,
  `09${delimiter}00`,
  `09${delimiter}30`,
  `10${delimiter}00`,
  `10${delimiter}30`,
  `11${delimiter}00`,
  `11${delimiter}30`,
  `12${delimiter}00`,
  `12${delimiter}30`,
  `13${delimiter}00`,
  `13${delimiter}30`,
  `14${delimiter}00`,
  `14${delimiter}30`,
  `15${delimiter}00`,
  `15${delimiter}30`,
  `16${delimiter}00`,
  `16${delimiter}30`,
  `17${delimiter}00`,
  `17${delimiter}30`,
  `18${delimiter}00`,
  `18${delimiter}30`,
  `19${delimiter}00`,
  `19${delimiter}30`,
  `20${delimiter}00`,
  `20${delimiter}30`,
  `21${delimiter}00`,
  `21${delimiter}30`,
  `22${delimiter}00`,
  `22${delimiter}30`,
  `23${delimiter}00`,
  `23${delimiter}30`
];

export const hourMappings24: { [key: string]: number } = {
  '': 0,
  '0': 0,
  '1': 2,
  '2': 4,
  '3': 6,
  '4': 8,
  '5': 10,
  '6': 12,
  '7': 14,
  '8': 16,
  '9': 18,
  '01': 2,
  '02': 4,
  '03': 6,
  '04': 8,
  '05': 10,
  '06': 12,
  '07': 14,
  '08': 16,
  '09': 18,
  '10': 20,
  '11': 22,
  '12': 24,
  '13': 26,
  '14': 28,
  '15': 30,
  '16': 32,
  '17': 34,
  '18': 36,
  '19': 38,
  '20': 40,
  '21': 42,
  '22': 44,
  '23': 26
};

export const hourMappings12: { [key: string]: number } = {
  '': 0,
  '0': 2,
  '1': 2,
  '2': 4,
  '3': 6,
  '4': 8,
  '5': 10,
  '6': 12,
  '7': 14,
  '8': 16,
  '9': 18,
  '01': 2,
  '02': 4,
  '03': 6,
  '04': 8,
  '05': 10,
  '06': 12,
  '07': 14,
  '08': 16,
  '09': 18,
  '10': 20,
  '11': 22,
  '12': 0
};
