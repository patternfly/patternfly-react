import { OptionsMenu, OptionsMenuProps, OptionsMenuItem, OptionsMenuToggle } from '@patternfly/react-core';
import React from 'react';

type OptionsMenuDemoState = {
  isOpen: boolean;
  selectedOption: string;
  toggleTemplateText: string;
}

export class OptionsMenuDemo extends React.Component<React.HTMLProps<HTMLDivElement>, OptionsMenuDemoState> {

  state = {
    isOpen: false,
    toggleTemplateText: "Options menu",
    selectedOption: "singleOption1",
  };

  onToggle = () => {
    console.log(this.state);
    this.setState({ isOpen: !this.state.isOpen })
  };

  onSelect = event => {
    const id = event.target.id;
    this.setState(() => {
      return { selectedOption: id };
    });
  };

  render() {
    const myOptionsMenuProps: OptionsMenuProps = {
      id: "options-menu-single-option-example",
      menuItems: [
        <OptionsMenuItem onSelect={this.onSelect} isSelected={this.state.selectedOption === "singleOption1"}
                         id="singleOption1" key="option 1">Option 1</OptionsMenuItem>,
        <OptionsMenuItem onSelect={this.onSelect} isSelected={this.state.selectedOption === "singleOption2"}
                         id="singleOption2" key="option 2">Option 2</OptionsMenuItem>,
        <OptionsMenuItem onSelect={this.onSelect} isSelected={this.state.selectedOption === "singleOption3"}
                         id="singleOption3" key="option 3">Option 3</OptionsMenuItem>
      ],
      isOpen: this.state.isOpen,
      toggle: <OptionsMenuToggle
        onToggle={this.onToggle}
        toggleTemplate={<React.Fragment>{this.state.toggleTemplateText}</React.Fragment>} />
    };

    return (
      <OptionsMenu id={myOptionsMenuProps.id}
                   menuItems={myOptionsMenuProps.menuItems}
                   isOpen={myOptionsMenuProps.isOpen}
                   toggle={myOptionsMenuProps.toggle} />
    );
  }
}

export default OptionsMenuDemo;

