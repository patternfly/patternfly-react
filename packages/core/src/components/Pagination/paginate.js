/**
 * Client Side Pagination helper which returns amountOfPages, itemCount,
 * itemsStart, itemsEnd, and paginated rows
 */
export default function paginate({ page, perPage }) {
  return (rows = []) => {
    // adapt to zero indexed logic
    const p = page - 1 || 0;
    const amountOfPages = Math.ceil(rows.length / perPage);
    const startPage = p < amountOfPages ? p : 0;
    const endOfPage = startPage * perPage + perPage;
    return {
      amountOfPages,
      itemCount: rows.length,
      itemsStart: startPage * perPage + 1,
      itemsEnd: endOfPage > rows.length ? rows.length : endOfPage,
      rows: rows.slice(startPage * perPage, endOfPage)
    };
  };
}
