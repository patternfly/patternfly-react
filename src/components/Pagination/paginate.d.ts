export interface PaginateParams {
  page: number;
  perPage: number;
}

export interface PaginateFunction<T = any> {
  (rows: T[]): PaginateResult<T>;
}

export interface PaginateResult<T> {
  amountOfPages: number;
  itemCount: number;
  itemsState: number;
  itemsEnd: number;
  rows: T[];
}

export default function paginate<T>(
  params: PaginateParams
): PaginateFunction<T>;
