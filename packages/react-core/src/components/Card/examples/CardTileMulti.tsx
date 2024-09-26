import React from 'react';
import { Card, CardHeader, CardBody, Gallery, Flex } from '@patternfly/react-core';
import PlusIcon from '@patternfly/react-icons/dist/esm/icons/plus-icon';

export const CardTileMulti: React.FunctionComponent = () => {
  const [isChecked1, setIsChecked1] = React.useState(false);
  const [isChecked2, setIsChecked2] = React.useState(false);
  const [isChecked3, setIsChecked3] = React.useState(false);
  const id1 = 'multi-tile-1';
  const id2 = 'multi-tile-2';
  const id3 = 'multi-tile-3';

  const onChange = (event: React.FormEvent<HTMLInputElement>, checked: boolean) => {
    const name = event.currentTarget.name;

    switch (name) {
      case id1:
        setIsChecked1(checked);
        break;
      case id2:
        setIsChecked2(checked);
        break;
      case id3:
        setIsChecked3(checked);
        break;
    }
  };

  return (
    <Gallery hasGutter>
      <Card id="multi-tile-example-1" isSelectable isSelected={isChecked1}>
        <CardHeader
          selectableActions={{
            selectableActionId: id1,
            selectableActionAriaLabelledby: 'multi-tile-example-1',
            name: id1,
            onChange,
            isHidden: true
          }}
        >
          <Flex gap={{ default: 'gapSm' }} alignItems={{ default: 'alignItemsCenter' }}>
            <PlusIcon />
            <b>Tile header</b>
          </Flex>
        </CardHeader>
        <CardBody>Tile content and description</CardBody>
      </Card>
      <Card id="multi-tile-example-2" isSelectable isSelected={isChecked2}>
        <CardHeader
          selectableActions={{
            selectableActionId: id2,
            selectableActionAriaLabelledby: 'multi-tile-example-2',
            name: id2,
            onChange,
            isHidden: true
          }}
        >
          <Flex gap={{ default: 'gapSm' }} alignItems={{ default: 'alignItemsCenter' }}>
            <PlusIcon />
            <b>Tile header</b>
          </Flex>
        </CardHeader>
        <CardBody>Tile content and description</CardBody>
      </Card>
      <Card id="multi-tile-example-3" isSelectable isDisabled isSelected={isChecked3}>
        <CardHeader
          selectableActions={{
            selectableActionId: id3,
            selectableActionAriaLabelledby: 'multi-tile-example-3',
            name: id3,
            onChange,
            isHidden: true
          }}
        >
          <Flex gap={{ default: 'gapSm' }} alignItems={{ default: 'alignItemsCenter' }}>
            <PlusIcon />
            <b>Tile header (disabled)</b>
          </Flex>
        </CardHeader>
        <CardBody>Tile content and description</CardBody>
      </Card>
    </Gallery>
  );
};
