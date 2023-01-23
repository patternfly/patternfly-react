import * as React from 'react';
import { observer } from 'mobx-react';
import { GraphElement as TopologyElement } from '../types';
import ElementContext from '../utils/ElementContext';
import ContextMenu from '../components/contextmenu/ContextMenu';

type Reference = React.ComponentProps<typeof ContextMenu>['reference'];

export interface WithContextMenuProps {
  onContextMenu: (e: React.MouseEvent) => void;
  contextMenuOpen: boolean;
}

export const withContextMenu = <E extends TopologyElement>(
  actions: (element: E) => React.ReactElement[],
  container?: Element | null | undefined | (() => Element),
  className?: string,
  atPoint: boolean = true
) => <P extends WithContextMenuProps>(WrappedComponent: React.ComponentType<Partial<P>>) => {
  const Component: React.FunctionComponent<Omit<P, keyof WithContextMenuProps>> = props => {
    const element = React.useContext(ElementContext);
    const [reference, setReference] = React.useState<Reference | null>(null);
    const onContextMenu = React.useCallback((e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setReference(
        atPoint
          ? {
              x: e.pageX,
              y: e.pageY
            }
          : e.currentTarget
      );
    }, []);

    return (
      <>
        <WrappedComponent {...(props as any)} onContextMenu={onContextMenu} contextMenuOpen={!!reference} />
        {reference ? (
          <ContextMenu
            reference={reference}
            container={container}
            className={className}
            open
            onRequestClose={() => setReference(null)}
          >
            {actions(element as E)}
          </ContextMenu>
        ) : null}
      </>
    );
  };
  Component.displayName = `withContextMenu(${WrappedComponent.displayName || WrappedComponent.name})`;
  return observer(Component);
};
