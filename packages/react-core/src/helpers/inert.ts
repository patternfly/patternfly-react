import { version } from 'react';

/**
 * Before React 19, React JSX treats empty string "" as truthy for inert prop.
 * @see {@link https://stackoverflow.com/questions/72720469}
 */
export const IS_INERT = Number(version.split('.')[0]) >= 19 ? true : ('' as unknown as boolean);
