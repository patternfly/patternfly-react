/**
 * provider.tsx
 *
 * Forked from reactabular-table version 8.14.0
 * https://github.com/reactabular/reactabular/tree/v8.14.0/packages/reactabular-table/src
 */
import * as React from 'react';
import { RenderersTypes, TableDefaults, ColumnsType } from './types';

export interface ProviderProps extends RenderersTypes {
  children?: React.ReactNode;
  role?: string;
  className?: string;
  variant?: 'compact';
  borders?: boolean;
}

export const ProviderContext = React.createContext({
  columns: null as ColumnsType,
  renderers: null as RenderersTypes['renderers']
});

export class Provider extends React.Component<ProviderProps, {}> {
  static displayName = 'Provider';
  static defaultProps = {
    renderers: TableDefaults.renderers
  };
  render() {
    const { columns, renderers, components, children, ...props } = this.props;

    let finalRenderers = renderers;

    if (components) {
      // eslint-disable-next-line no-console
      console.warn(
        '`components` have been deprecated in favor of `renderers` and will be removed in the next major version, please rename!'
      );
      finalRenderers = components;
    }

    const provider = React.createElement(renderers.table || TableDefaults.renderers.table, props, children);
    return (
      <ProviderContext.Provider
        value={{
          columns,
          renderers: {
            table: finalRenderers.table || TableDefaults.renderers.table,
            header: { ...TableDefaults.renderers.header, ...finalRenderers.header },
            body: { ...TableDefaults.renderers.body, ...finalRenderers.body }
          }
        }}
      >
        {provider}
      </ProviderContext.Provider>
    );
  }
}
