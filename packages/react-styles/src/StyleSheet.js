import { StyleSheet as AphroditeStyleSheet } from 'aphrodite';
import { formatClassName, getCSSClasses, isModifier, createStyleDeclaration } from './utils';

export const StyleSheet = {
  create: AphroditeStyleSheet.create,
  parse(input) {
    const classes = getCSSClasses(input);
    if (!classes) {
      return {};
    }

    return classes.reduce(
      (map, className) => {
        const key = formatClassName(className);
        if (map[key]) {
          return map;
        }

        const value = createStyleDeclaration(className, input);

        if (isModifier(className)) {
          map.modifiers[key] = value;
        } else {
          map[key] = value;
        }

        return map;
      },
      {
        modifiers: {}
      }
    );
  }
};
