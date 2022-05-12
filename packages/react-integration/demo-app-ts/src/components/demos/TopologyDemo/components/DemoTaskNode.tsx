import * as React from 'react';
import { observer } from 'mobx-react';
import { Node, TaskNode, WhenDecorator } from '@patternfly/react-topology';

interface DemoTaskNodeProps {
  element: Node;
}

const DemoTaskNode: React.FunctionComponent<DemoTaskNodeProps> = ({ element }) => {
  const data = element.getData();

  const passedData = React.useMemo(() => {
    const newData = { ...data };
    Object.keys(newData).forEach(key => {
      if (newData[key] === undefined) {
        delete newData[key];
      }
    });
    return newData;
  }, [data]);

  const whenDecorator = data.whenStatus ? <WhenDecorator element={element} status={data.whenStatus} /> : null;

  return (
    <TaskNode element={element} {...passedData}>
      {whenDecorator}
    </TaskNode>
  );
};

export default observer(DemoTaskNode);
