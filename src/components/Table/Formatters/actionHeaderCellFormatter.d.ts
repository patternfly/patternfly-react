import { ReactNode } from 'react';

declare function actionHeaderCellFormatter(
  value: ReactNode,
  params: { column: { header: { label: string } } }
): ReactNode;

export default actionHeaderCellFormatter;
