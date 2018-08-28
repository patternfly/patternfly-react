export interface StyleDeclarationStatic {
  __className: string;
  __inject(): void;
}

export function isValidStyleDeclaration(
  obj: any
): obj is StyleDeclarationStatic;

export function createStyleDeclaration(
  className: string,
  rawCss: string
): StyleDeclarationStatic;

export function isAphroditeDeclaration(obj: any): boolean;

export function isModifier(className: string): boolean;

export function getModifier(styleObject: any): string;

export function formatClassName(className: string): string;

export function getCSSClasses(cssString: string): string[];
