import React from 'react';
import {
  ToggleGroup,
  ToggleGroupItem,
  ToggleGroupItemVariant,
  ToggleGroupVariant,
  ToggleGroupProps
} from '@patternfly/react-core';
import UndoIcon from '@patternfly/react-icons/dist/js/icons/undo-icon';
import CopyIcon from '@patternfly/react-icons/dist/js/icons/copy-icon';
import ShareSquareIcon from '@patternfly/react-icons/dist/js/icons/share-square-icon';

interface ToggleGroupState {
  isSelected: {
    first: boolean;
    second: boolean;
    third: boolean;
    fourth: boolean;
    fifth: boolean;
    sixth: boolean;
    seventh: boolean;
  };
}

export class ToggleGroupDemo extends React.Component<ToggleGroupProps, ToggleGroupState> {
  static displayName = 'ToggleGroupDemo';
  constructor(props: ToggleGroupProps) {
    super(props);
    this.state = {
      isSelected: {
        first: false,
        second: false,
        third: false,
        fourth: false,
        fifth: false,
        sixth: false,
        seventh: false
      }
    };
  }

  handleItemClick = (isSelected: boolean, event: any) => {
    const id = event.currentTarget.id;
    this.setState(prevState => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore-next-line
      prevState.isSelected[id] = isSelected;
      return {
        isSelected: prevState.isSelected
      };
    });
  };

  render() {
    const { isSelected } = this.state;

    return (
      <>
        <ToggleGroup>
          <ToggleGroupItem key={0} buttonId="first" isSelected={isSelected.first} onChange={this.handleItemClick}>
            Option 1
          </ToggleGroupItem>
          <ToggleGroupItem key={1} buttonId="second" isSelected={isSelected.second} onChange={this.handleItemClick}>
            Option 2
          </ToggleGroupItem>
          <ToggleGroupItem key={2} buttonId="disabled" isDisabled>
            Option 3
          </ToggleGroupItem>
        </ToggleGroup>
        <ToggleGroup>
          <ToggleGroupItem
            key={3}
            buttonId="third"
            variant={ToggleGroupItemVariant.icon}
            isSelected={isSelected.third}
            onChange={this.handleItemClick}
            aria-label="copy icon button"
          >
            <CopyIcon />
          </ToggleGroupItem>
          <ToggleGroupItem
            key={4}
            buttonId="fourth"
            variant={ToggleGroupItemVariant.icon}
            isSelected={isSelected.fourth}
            onChange={this.handleItemClick}
            aria-label="undo icon button"
          >
            <UndoIcon />
          </ToggleGroupItem>
          <ToggleGroupItem
            key={5}
            buttonId="fifth"
            variant={ToggleGroupItemVariant.icon}
            isSelected={isSelected.fifth}
            onChange={this.handleItemClick}
            aria-label="share square icon button"
          >
            <ShareSquareIcon />
          </ToggleGroupItem>
        </ToggleGroup>
        <ToggleGroup variant={ToggleGroupVariant.light}>
          <ToggleGroupItem key={6} buttonId="sixth" isSelected={isSelected.sixth} onChange={this.handleItemClick}>
            Option 1
          </ToggleGroupItem>
          <ToggleGroupItem key={7} buttonId="seventh" isSelected={isSelected.seventh} onChange={this.handleItemClick}>
            Option 2
          </ToggleGroupItem>
          <ToggleGroupItem key={8} isDisabled>
            Option 3
          </ToggleGroupItem>
        </ToggleGroup>
      </>
    );
  }
}
