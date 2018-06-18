import { StyleDeclarationStatic } from './utils';
import { StyleSheet as AphroditeStyleSheet } from 'aphrodite';

export interface StyleSheetStatic {
  parse(cssString: string): StyleSheetValueStatic;
  create: typeof AphroditeStyleSheet['create'];
}

export type StyleSheetValueStatic = {
  modifiers: { [key: string]: StyleDeclarationStatic };
} & {
  [key: string]: any;
};

export const StyleSheet: StyleSheetStatic;
