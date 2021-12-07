import * as React from 'react';
import {
  DefaultGroup,
  Node,
  observer,
  WithContextMenuProps,
  WithSelectionProps,
  WithCollapsibleGroupProps
} from '@patternfly/react-topology';
import AlternateIcon from '@patternfly/react-icons/dist/esm/icons/regions-icon';
import DefaultIcon from '@patternfly/react-icons/dist/esm/icons/builder-image-icon';

const ICON_PADDING = 20;

export enum DataTypes {
  Default,
  Alternate
}

type StyleGroupProps = {
  element: Node;
} & WithContextMenuProps &
  WithCollapsibleGroupProps &
  WithSelectionProps;

const StyleGroup: React.FC<StyleGroupProps> = ({
  element,
  onContextMenu,
  contextMenuOpen,
  collapsedWidth,
  collapsedHeight,
  ...rest
}) => {
  const data = element.getData();

  const getTypeIcon = (dataType?: DataTypes): any => {
    switch (dataType) {
      case DataTypes.Alternate:
        return AlternateIcon;
      default:
        return DefaultIcon;
    }
  };

  const renderIcon = (): React.ReactNode => {
    const iconSize = Math.min(collapsedWidth, collapsedHeight) - ICON_PADDING * 2;
    const Component = getTypeIcon(data.dataType);

    return (
      <g transform={`translate(${(collapsedWidth - iconSize) / 2}, ${(collapsedHeight - iconSize) / 2})`}>
        <Component style={{ color: '#393F44' }} width={iconSize} height={iconSize} />
      </g>
    );
  };

  const passedData = { ...data };
  Object.keys(passedData).forEach(key => {
    if (passedData[key] === undefined) {
      delete passedData[key];
    }
  });

  return (
    <DefaultGroup
      onContextMenu={data.showContextMenu ? onContextMenu : undefined}
      contextMenuOpen={contextMenuOpen}
      element={element}
      {...rest}
      {...passedData}
    >
      {element.isCollapsed() ? renderIcon() : null}
    </DefaultGroup>
  );
};

export default observer(StyleGroup);
