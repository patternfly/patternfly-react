export const isArrayOfString = (array: string[]) => {
  for (const str in array) {
    if (typeof str !== 'string') {
      return false;
    }
  }
  return true;
};

/* 
  Function responsible for searching throughout logger component, need to setup for proper use anywhere. 
  It should take an array, and return an array of indexes where the searchedInput is found throughout the data array. 
  Should always be searching an array of strings. Look into lazy log for ideas.
*/
export const searchForKeyword = (searchedInput: string, parsedData: string[], itemCount: number) => {
  const searchResults: number[] = [];

  const regex = new RegExp(searchedInput, 'i');
  parsedData.map((row, index) => {
    if (regex.test(stripAnsi(row)) && index < itemCount) {
      searchResults.push(index);
    }
  });

  if (searchResults.length > 0) {
    return [...searchResults];
  } else if (searchResults.length <= 0) {
    const negativeResults: number[] = [];
    negativeResults.push(-1);

    return negativeResults;
  }
};

export const parseConsoleOutput = (data: string) => {
  const stringToSplitWith = '\n';
  const stringSplitting = data.toString();
  const cleanString = stringSplitting.split(stringToSplitWith);

  return cleanString;
};

export const escapeString = (inputString: string): string => inputString.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'); // eslint-disable-line

/* eslint-disable-next-line no-control-regex */
export const ansiRegex = new RegExp(/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-PRZcf-nqry=><]/g);

export const isAnsi = (inputString: string) => inputString.match(ansiRegex);

export const stripAnsi = (inputString: string): string => inputString.replace(ansiRegex, '');

export const splitAnsi = (inputString: string): string[] => {
  const splitString = isAnsi(inputString);
  if (!splitString) {
    return [inputString];
  }

  const result: string[] = [];
  let offset = 0;
  let ptr = 0;

  splitString.forEach(str => {
    offset = inputString.indexOf(str, offset);
    if (offset === -1) {
      throw new Error('Could not split string');
    }
    if (ptr !== offset) {
      result.push(inputString.slice(ptr, offset));
    }
    if (ptr === offset && result.length) {
      result[result.length - 1] += str;
    } else {
      if (offset === 0) {
        result.push('');
      }
      result.push(str);
    }
    ptr = offset + str.length;
  });

  result.push(inputString.slice(ptr));
  return result;
};

export const escapeTextForHtml = (inputString: string): string =>
  inputString.replace(/[&<>"']/gm, str => {
    if (str === '&') {
      return '&amp;';
    }
    if (str === '<') {
      return '&lt;';
    }
    if (str === '>') {
      return '&gt;';
    }
    if (str === '"') {
      return '&quot;';
    }
    if (str === "'") {
      return '&#x27;';
    }
  });
