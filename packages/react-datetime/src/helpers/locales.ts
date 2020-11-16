import * as DateFnsLocales from 'date-fns/locale';

export const Locales = { ...DateFnsLocales };
export type Locale = typeof Locales[keyof typeof Locales];
