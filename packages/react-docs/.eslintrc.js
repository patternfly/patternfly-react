module.exports = {
  /* For now, don't lint as we get errors from compiled JS like:
   *  packages/react-table/dist/esm/components/Table/CollapseColumn.js
   *  3:23  warning  '_extends' is a function                  no-func-assign
   *  9:1   error    Import in body of module; reorder to top  import/first
   * 10:1   error    Import in body of module; reorder to top  import/first
   * 11:1   error    Import in body of module; reorder to top  import/first
   * 12:1   error    Import in body of module; reorder to top  import/first
   * 13:1   error    Import in body of module; reorder to top  import/first
   */
};
