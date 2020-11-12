import { IRow } from '../components/Table/TableTypes';

export const buildExpandableRows = (relationships: any = {}, openIndexes: number[] = [], rowCount = 10) => {
  const rows: IRow[] = [];
  for (let i = 0; i < rowCount; i++) {
    const row: IRow = {
      data: {
        mockData: 'mock'
      }
    };

    if (openIndexes.indexOf(i) >= 0) {
      row.isOpen = true;
    }
    if (relationships[i] >= 0) {
      row.parent = relationships[i];
    }
    rows.push(row);
  }
  return rows;
};
