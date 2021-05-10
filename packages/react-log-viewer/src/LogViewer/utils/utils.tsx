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
export const searchForKeyword = (searchedInput: string, parsedData: string[]) => {
  const searchResults: number[] = [];
  let rowIndexCounter: number = 0;
  let keywordIndexPosition: number = 0;
  let lowerCaseRow: string = '';

  for (const row of parsedData) {
    lowerCaseRow = row.toLowerCase();
    keywordIndexPosition = lowerCaseRow.search(searchedInput);

    if (keywordIndexPosition !== -1) {
      searchResults.push(rowIndexCounter);
    }

    rowIndexCounter++;
  }

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
