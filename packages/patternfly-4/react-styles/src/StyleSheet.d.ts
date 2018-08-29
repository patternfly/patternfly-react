import { StyleDeclarationStatic } from './utils';
import { cx, Interpolation } from 'emotion';

export interface StyleSheetStatic {
  parse(cssString: string): StyleSheetValueStatic;
  create<T extends Record<keyof T, Interpolation>>(styles: T): Record<keyof T, string>;
}

export type StyleSheetValueStatic = {
  modifiers: { [key: string]: StyleDeclarationStatic };
  inject(): void;
} & {
  [key: string]: any;
};

export const StyleSheet: StyleSheetStatic;

export const css: typeof cx;
