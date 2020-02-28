import { mockRows } from './mockRows';

/**
 * simple singleton mockServer API for server paginated table story
 *
 * typically one would connect this api to redux actions/redux store
 * and pass data via a redux connected component.
 */
class MockServerApi {
  static toggleRow(row) {
    return Object.assign({}, row, { selected: !row.selected });
  }

  constructor() {
    this.mockRows = mockRows;
  }

  getPage({ sortingColumns, page, perPage }) {
    // server api accepts sort parameters, the current page, and the number perPage
    // callServerApi(sortingColumns, page, perPage)

    // mock server logic to update the paginated rows
    const p = page - 1 || 0;
    const amountOfPages = Math.ceil(this.mockRows.length / perPage);
    const startPage = p < amountOfPages ? p : 0;
    const endOfPage = startPage * perPage + perPage;

    return new Promise(resolve => {
      // server api returns sorted/paged rows, total of amount of pages, total items,
      // items start, items end
      resolve({
        rows: this.mockRows.slice(startPage * perPage, endOfPage),
        amountOfPages,
        itemCount: this.mockRows.length
      });
    });
  }

  selectRow({ row }) {
    // call server api to update row
    // callServerApi(row)

    // mock server logic to update `mockRows`
    const index = this.mockRows.findIndex(r => r.id === row.id);
    if (index > -1) {
      this.mockRows[index] = MockServerApi.toggleRow(this.mockRows[index]);
    }

    return new Promise(resolve => {
      // server api returns updated row
      resolve({
        row
      });
    });
  }

  selectAllRows({ checked, rows }) {
    // call server api to update all current rows
    // callServerApi(rows)

    // mock server logic to update `mockRows`
    for (const row of rows) {
      const index = this.mockRows.findIndex(r => r.id === row.id);
      if (index > -1) {
        const updated = Object.assign({}, this.mockRows[index], {
          selected: checked
        });
        this.mockRows[index] = updated;
      }
    }

    return new Promise(resolve => {
      // server api returns updated rows
      resolve({
        rows
      });
    });
  }
}
export default new MockServerApi();
