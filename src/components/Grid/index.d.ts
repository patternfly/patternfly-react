import GridBase, { GridProps } from './Grid';
import Row, { RowProps } from './Row';
import Col, { ColProps } from './Col';
import Clearfix, { ClearfixProps } from './Clearfix';

declare const Grid: typeof GridBase & {
  Clearfix: typeof Clearfix;
  Col: typeof Col;
  Row: typeof Row;
};

export {
  Clearfix,
  ClearfixProps,
  Col,
  ColProps,
  Grid,
  GridProps,
  Row,
  RowProps
};
