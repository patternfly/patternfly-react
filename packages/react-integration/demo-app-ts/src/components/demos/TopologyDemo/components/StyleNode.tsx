import * as React from 'react';
import { DefaultNode, Node, WithContextMenuProps } from '@patternfly/react-topology';

type StyleNodeProps = {
  element: Node;
} & WithContextMenuProps;

const StyleNode: React.FC<StyleNodeProps> = ({ element, onContextMenu, contextMenuOpen }) => {
  const data = element.getData();
  return (
    <DefaultNode
      element={element}
      {...data}
      onContextMenu={data.showContextMenu ? onContextMenu : undefined}
      contextMenuOpen={contextMenuOpen}
    />
  );
};

export default StyleNode;
