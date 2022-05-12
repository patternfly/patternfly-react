import * as React from 'react';
import { observer } from '../../../mobx-exports';
import { Node } from '../../../types';

const SpacerNode: React.FC<{ element: Node }> = () => <g />;

export default observer(SpacerNode);
