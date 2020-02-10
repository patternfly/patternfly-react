/**
 * evaluate-formatters.ts
 *
 * Forked from reactabular-table version 8.14.0
 * https://github.com/reactabular/reactabular/tree/v8.14.0/packages/reactabular-table/src
 */
import { formattersType, formatterValueType, ExtraParamsType } from './types';

/**
 * @param {formattersType} formatters - formatters type
 */
export function evaluateFormatters(formatters: formattersType) {
  return (value: formatterValueType, extra: ExtraParamsType) =>
    formatters.reduce(
      (parameters, formatter) => ({
        value: formatter(parameters.value, parameters.extra),
        extra
      }),
      { value, extra }
    ).value;
}
