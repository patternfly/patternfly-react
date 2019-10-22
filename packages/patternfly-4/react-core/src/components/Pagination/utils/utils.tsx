// getPageRows used to paginate data and load previous page if user selects 'perPage' above the number of rows remaining
// used on Pagination component in combination with onSetPage and onPerPageSelect as follows
// onSetPage={(_evt, value) => this.setState(this.getPageRows(this.state, this.defaultRows, perPage, value))}
// onPerPageSelect={(_evt, value) => this.setState(this.getPageRows(this.state, this.defaultRows, value, page))}

interface PaginationState {
  perPage: number
}

interface NewRowsAndPage {
  newRows: any[],
  newPage: number
}

interface LastFullPage {
  page: number,
  beginMark: number
}

interface NewState {
  perPage: number,
  page: number,
  rows: any[]
}

/** This function returns the new rows & updated page number to display
 * @param {object} state     The state of the component calling this function.
 * @param {array}  allRows   The full data set being paginated.
 * @param {number} page      The current page number
 * @param {number} lastPage  The maximum page number based on (total rows / perPage)
 * @param {number} perPage   The number of results shown per page
 */
const getNewRowsAndPage = (state: PaginationState, allRows: [], page: number, lastPage: number, perPage: number): NewRowsAndPage => {
  let beginMark = getBeginMark(page, lastPage, perPage);
  if (perPage !== state.perPage) {
    const lastFullPage = getLastFullPage(allRows, page, perPage, beginMark, lastPage);
    page = lastFullPage.page;
    beginMark = lastFullPage.beginMark;
  }
  const endMark = beginMark + perPage;
  const newRows = allRows.slice(beginMark, endMark);
  const newPage = page;
  return { newRows, newPage };
}

/** This function returns the first row to display on the new page
 * @param {number} page      The current page number
 * @param {number} lastPage  The maximum page number based on (total rows / perPage)
 * @param {number} perPage   The number of results shown per page
 */
const getBeginMark = (page: number, lastPage: number, perPage: number): number => (page -1 < lastPage)
    ? (page - 1) * perPage
    : (lastPage - 1) * perPage;

/** This function returns the last page containing the full number of perPage rows
 * @param {array} allRows    The full data set being paginated.
 * @param {number} page      The current page number
 * @param {number} lastPage  The maximum page number based on (total rows / perPage)
 * @param {number} perPage   The number of results shown per page
 * @param {number} beginMark The first row to display on the new page
 */
const getLastFullPage = (allRows: [], page: number, perPage: number, beginMark: number, lastPage: number): LastFullPage => {
  const remainingRows = allRows.length - beginMark;
  if (remainingRows < perPage) {
    page--;
    beginMark = getBeginMark(page, lastPage, perPage);
    return getLastFullPage(allRows, page, perPage, beginMark, lastPage);
  }
  return { page, beginMark };
}

/** This function returns an object to update state with new page & rows to display
 * @param {array} allRows    The full data set being paginated.
 * @param {number} page      The current page number
 * @param {number} perPage   The number of results shown per page
 */
export const getPageRows = (state: PaginationState, allRows: [], page: number, perPage: number): NewState => {
  const lastPage = Math.ceil(allRows.length / perPage);
  const newRowsAndPage = getNewRowsAndPage(state, allRows, page, lastPage, perPage);
  const { newPage, newRows } = newRowsAndPage;
  return {
    perPage,
    page: newPage,
    rows: newRows
  };
}
