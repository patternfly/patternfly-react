import { isValidStyleDeclaration, isAphroditeDeclaration } from './utils';
import { css as aphroditeCss } from 'aphrodite';

export function css(...styles) {
  const aphroditeStyles = [];
  const pfClassNames = [];

  styles.forEach(style => {
    if (!style) {
      return;
    }

    if (typeof style === 'string') {
      pfClassNames.push(style);
    }

    if (isValidStyleDeclaration(style)) {
      style.__inject();
      pfClassNames.push(style.__className);
    }

    if (isAphroditeDeclaration(style)) {
      aphroditeStyles.push(style);
    }
  });

  return [...pfClassNames, aphroditeCss(aphroditeStyles)].join(' ').trim();
}
