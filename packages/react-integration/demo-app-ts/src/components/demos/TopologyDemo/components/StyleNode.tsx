import * as React from 'react';
import {
  DefaultNode,
  Node,
  WithContextMenuProps,
  WithDragNodeProps,
  WithSelectionProps
} from '@patternfly/react-topology';
import DefaultIcon from '@patternfly/react-icons/dist/esm/icons/builder-image-icon';
import AlternateIcon from '@patternfly/react-icons/dist/esm/icons/regions-icon';

export enum DataTypes {
  Default,
  Alternate
}
const ICON_PADDING = 20;

type StyleNodeProps = {
  element: Node;
} & WithContextMenuProps &
  WithDragNodeProps &
  WithSelectionProps;

const getTypeIcon = (dataType?: DataTypes): any => {
  switch (dataType) {
    case DataTypes.Alternate:
      return AlternateIcon;
    default:
      return DefaultIcon;
  }
};

const renderIcon = (data: { dataType?: DataTypes }, element: Node): React.ReactNode => {
  const { width, height } = element.getDimensions();
  const iconSize = Math.min(width, height) - ICON_PADDING * 2;
  const Component = getTypeIcon(data.dataType);

  return (
    <g transform={`translate(${(width - iconSize) / 2}, ${(height - iconSize) / 2})`}>
      <Component style={{ color: '#393F44' }} width={iconSize} height={iconSize} />
    </g>
  );
};

const StyleNode: React.FC<StyleNodeProps> = ({ element, onContextMenu, contextMenuOpen, ...rest }) => {
  const data = element.getData();

  const passedData = { ...data };
  Object.keys(passedData).forEach(key => {
    if (passedData[key] === undefined) {
      delete passedData[key];
    }
  });

  return (
    <DefaultNode
      element={element}
      {...rest}
      {...passedData}
      onContextMenu={data.showContextMenu ? onContextMenu : undefined}
      contextMenuOpen={contextMenuOpen}
    >
      {renderIcon(passedData, element)}
    </DefaultNode>
  );
};

export default StyleNode;
