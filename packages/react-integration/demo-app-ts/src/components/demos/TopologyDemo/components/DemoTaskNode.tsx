import * as React from 'react';
import { observer } from 'mobx-react';
import { Node, TaskNode, WhenDecorator, WithContextMenuProps, WithSelectionProps } from '@patternfly/react-topology';

type DemoTaskNodeProps = {
  element: Node;
} & WithContextMenuProps &
  WithSelectionProps;

const DemoTaskNode: React.FunctionComponent<DemoTaskNodeProps> = ({
  element,
  onContextMenu,
  contextMenuOpen,
  ...rest
}) => {
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
    <TaskNode
      element={element}
      onContextMenu={data.showContextMenu ? onContextMenu : undefined}
      contextMenuOpen={contextMenuOpen}
      {...passedData}
      {...rest}
    >
      {whenDecorator}
    </TaskNode>
  );
};

export default observer(DemoTaskNode);
