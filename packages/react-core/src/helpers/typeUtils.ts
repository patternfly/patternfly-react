export type OneOf<T, K extends keyof T> = T[K];

// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

// Gathers all the required keys from an interface/type T
export type RequiredKeys<T> = {
  [K in keyof T]-?: ({} extends { [P in K]: T[K] } ? never : K);
}[keyof T];

// Gathers all the optional keys from an interface/type T
export type OptionalKeys<T> = {
  [K in keyof T]-?: ({} extends { [P in K]: T[K] } ? K : never);
}[keyof T];

// Picks all the optional keys from interface/type T
export type PickOptional<T> = Pick<T, OptionalKeys<T>>;

// Picks all the optional keys from interface/type T and makes them required
// so that they cannot be accidentally omitted when providing default values
export type PickAndRequireOptional<T> = Required<Pick<T, OptionalKeys<T>>>;
