import { IRow } from '../components/Table/Table';

export const buildExpandableRows = (relationships:any = {}, openIndexes: Number[] = [], rowCount:number = 10) => {
  const rows = [];
  for (let i = 0; i < rowCount; i++) {
    const row = {
      data: {
        mockData: 'mock'
      }
    } as IRow;

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
