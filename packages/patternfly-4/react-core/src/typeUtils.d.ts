export type OneOf<T, K extends keyof T> = T[K];

// Diff / Omit taken from https://github.com/Microsoft/TypeScript/issues/12215#issuecomment-311923766
export type Omit<T, K extends keyof T> = Pick<
  T,
  ({ [P in keyof T]: P } &
    { [P in K]: never } & { [x: string]: never; [x: number]: never })[keyof T]
>;
