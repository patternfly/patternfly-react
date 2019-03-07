import { StyleDeclarationStatic, getModifier } from '@patternfly/react-styles';
import { OneOf } from '../helpers/typeUtils';

export const GutterSize: {
  sm: 'sm';
  md: 'md';
  lg: 'lg';
};

export function getGutterModifier(
  styleObj: any,
  gutter: OneOf<typeof GutterSize, keyof typeof GutterSize>,
  defaultValue: StyleDeclarationStatic | string
): string | StyleDeclarationStatic;
