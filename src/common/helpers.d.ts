import { ReactChild, ReactNode } from 'react';
import { Omit } from '../typeUtils';

export function debounce<T extends Function>(func: T, wait?: number): T;

export function propExists<P, K extends keyof P>(
  props: P,
  propName: K
): boolean;

type PropAndStateKeys<P, S> = keyof P & keyof S;

export function propOrState<P, S, K extends PropAndStateKeys<P, S>>(
  props: P,
  state: S,
  propName: K
): P[K] | S[K];

export function selectKeys<O, K extends keyof O>(obj: O, keys: K[]): Pick<O, K>;

export function excludeKeys<O, K extends keyof O>(
  obj: O,
  keys: K[]
): Omit<O, K>;

export function childrenToArray(children: ReactNode): ReactChild[];

export function filterChildren(
  children: ReactNode,
  validator: (child: ReactNode) => boolean
): ReactChild[];

export function findChild(
  children: ReactNode,
  validator: (child: ReactNode) => boolean
): ReactChild;

export function propsChanged<P, K extends keyof P>(
  propNames: K[],
  oldProps: P,
  newProps: P
): boolean;

export function nullValues<O = {}>(obj: O): { [P in keyof O]: null };

export const noop: Function;

export const KEY_CODES: {
  TAB_KEY: 9;
  ENTER_KEY: 13;
  ESCAPE_KEY: 27;
};
