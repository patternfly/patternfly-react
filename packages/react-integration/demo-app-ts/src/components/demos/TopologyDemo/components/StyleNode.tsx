import * as React from 'react';
import { DefaultNode, Node } from '@patternfly/react-topology';

interface StyleNodeProps {
  element: Node;
}

const StyleNode: React.FC<StyleNodeProps> = ({ element }) => {
  const data = element.getData();
  return <DefaultNode element={element} selected={data.selected} hover={data.hover} />;
};

export default StyleNode;
