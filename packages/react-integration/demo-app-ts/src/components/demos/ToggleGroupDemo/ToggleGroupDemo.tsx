import React from 'react';
import { ToggleGroup, ToggleGroupItem, ToggleGroupProps } from '@patternfly/react-core';
import UndoIcon from '@patternfly/react-icons/dist/esm/icons/undo-icon';
import CopyIcon from '@patternfly/react-icons/dist/esm/icons/copy-icon';
import ShareSquareIcon from '@patternfly/react-icons/dist/esm/icons/share-square-icon';

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

  handleItemClick = (event: React.MouseEvent<any> | React.KeyboardEvent | MouseEvent, isSelected: boolean) => {
    const id = event.currentTarget.id as 'first' | 'second' | 'third' | 'fourth' | 'fifth' | 'sixth' | 'seventh';
    this.setState(prevState => {
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
          <ToggleGroupItem
            text="Option 1"
            key={0}
            buttonId="first"
            isSelected={isSelected.first}
            onChange={this.handleItemClick}
          />
          <ToggleGroupItem
            text="Option 2"
            key={1}
            buttonId="second"
            isSelected={isSelected.second}
            onChange={this.handleItemClick}
          />
          <ToggleGroupItem text="Option 3" key={2} buttonId="disabled" isDisabled />
        </ToggleGroup>
        <ToggleGroup>
          <ToggleGroupItem
            icon={<CopyIcon />}
            key={3}
            buttonId="third"
            isSelected={isSelected.third}
            onChange={this.handleItemClick}
            aria-label="copy icon button"
          />
          <ToggleGroupItem
            icon={<UndoIcon />}
            key={4}
            buttonId="fourth"
            isSelected={isSelected.fourth}
            onChange={this.handleItemClick}
            aria-label="undo icon button"
          />
          <ToggleGroupItem
            icon={<ShareSquareIcon />}
            text="Share"
            key={5}
            buttonId="fifth"
            isSelected={isSelected.fifth}
            onChange={this.handleItemClick}
            aria-label="share square icon button"
          />
        </ToggleGroup>
        <ToggleGroup isCompact>
          <ToggleGroupItem
            text="Option 1"
            key={6}
            buttonId="sixth"
            isSelected={isSelected.sixth}
            onChange={this.handleItemClick}
          />
          <ToggleGroupItem
            text="Option 2"
            key={7}
            buttonId="seventh"
            isSelected={isSelected.seventh}
            onChange={this.handleItemClick}
          />
          <ToggleGroupItem icon={<CopyIcon />} text="Option 3" key={8} isDisabled />
        </ToggleGroup>
      </>
    );
  }
}
