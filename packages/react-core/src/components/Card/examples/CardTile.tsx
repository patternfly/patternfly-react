import React from 'react';
import { Card, CardHeader, CardBody, Gallery, Flex } from '@patternfly/react-core';
import PlusIcon from '@patternfly/react-icons/dist/esm/icons/plus-icon';

export const CardTile: React.FunctionComponent = () => {
  const [isChecked, setIsChecked] = React.useState('');
  const id1 = 'tile-1';
  const id2 = 'tile-2';
  const id3 = 'tile-3';

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    setIsChecked(event.currentTarget.id);
  };

  return (
    <Gallery hasGutter>
      <Card id="tile-example-1" isSelectable isSelected={isChecked === id1}>
        <CardHeader
          selectableActions={{
            selectableActionId: id1,
            selectableActionAriaLabelledby: 'tile-example-1',
            name: id1,
            variant: 'single',
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
      <Card id="tile-example-2" isSelectable isSelected={isChecked === id2}>
        <CardHeader
          selectableActions={{
            selectableActionId: id2,
            selectableActionAriaLabelledby: 'tile-example-2',
            name: id2,
            variant: 'single',
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
      <Card id="tile-example-3" isSelectable isDisabled isSelected={isChecked === id3}>
        <CardHeader
          selectableActions={{
            selectableActionId: id3,
            selectableActionAriaLabelledby: 'tile-example-3',
            name: id3,
            variant: 'single',
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
