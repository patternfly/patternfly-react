import * as React from 'react';
import { Edge, EdgeTerminalType } from '../../../types';
import { DefaultEdge } from '../../../components';

const WhenEdge: React.FC<{ element: Edge }> = ({ element }) => (
  <DefaultEdge element={element} endTerminalType={EdgeTerminalType.none} />
);

export default WhenEdge;
