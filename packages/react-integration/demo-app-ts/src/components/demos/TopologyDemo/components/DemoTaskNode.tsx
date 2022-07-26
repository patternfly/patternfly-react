import * as React from 'react';
import { observer } from 'mobx-react';
import {
  DEFAULT_WHEN_OFFSET,
  Node,
  TaskNode,
  WhenDecorator,
  WithContextMenuProps,
  WithSelectionProps
} from '@patternfly/react-topology';
import { PopoverProps } from '@patternfly/react-core';

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

  const hasTaskIcon = !!(data.taskIconClass || data.taskIcon);
  const whenDecorator = data.whenStatus ? (
    <WhenDecorator
      element={element}
      status={data.whenStatus}
      leftOffset={hasTaskIcon ? DEFAULT_WHEN_OFFSET + (element.getBounds().height - 4) * 0.75 : DEFAULT_WHEN_OFFSET}
    />
  ) : null;
  const badgePopoverParams: PopoverProps = {
    headerContent: <div>Popover header</div>,
    bodyContent: (
      <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.</div>
    ),
    footerContent: 'Popover footer'
  };
  return (
    <TaskNode
      element={element}
      onContextMenu={data.showContextMenu ? onContextMenu : undefined}
      contextMenuOpen={contextMenuOpen}
      {...passedData}
      {...rest}
      badgePopoverParams={badgePopoverParams}
    >
      {whenDecorator}
    </TaskNode>
  );
};

export default observer(DemoTaskNode);
