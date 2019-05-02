import { OptionsMenu, OptionsMenuProps, OptionsMenuItem, OptionsMenuToggle } from '@patternfly/react-core';
import React from 'react';

export class OptionsMenuDemo extends React.Component<OptionsMenuProps, OptionsMenuDemoState> {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      toggleTemplateProps: {
        text: "Options menu"
      },
      selectedOption: "singleOption1"
    };
  }

  onToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  onSelect = event => {
    const id = event.target.id;
    this.setState(() => {
      return { selectedOption: id };
    });
  };

  toggleTemplate = ({toggleTemplateProps}) => {
    const { text } = toggleTemplateProps;
    return <React.Fragment>{text}</React.Fragment>
  };

  render() {
    const { isOpen, toggleTemplateProps } = this.state;
    const menuItems = [
      <OptionsMenuItem onSelect={this.onSelect} isSelected={this.state.selectedOption === "singleOption1"} id="singleOption1" key="option 1">Option 1</OptionsMenuItem>,
      <OptionsMenuItem onSelect={this.onSelect} isSelected={this.state.selectedOption === "singleOption2"} id="singleOption2" key="option 2">Option 2</OptionsMenuItem>,
      <OptionsMenuItem onSelect={this.onSelect} isSelected={this.state.selectedOption === "singleOption3"} id="singleOption3" key="option 3">Option 3</OptionsMenuItem>
    ];
    const toggle = <OptionsMenuToggle onToggle={this.onToggle} toggleTemplate={this.toggleTemplate(toggleTemplateProps as any)} toggleTemplateProps={toggleTemplateProps}/>;

    return (
      <OptionsMenu
        id="options-menu-single-option-example"
        menuItems={menuItems}
        isOpen={isOpen}
        toggle={toggle}/>
    );
  }
}

type OptionsMenuDemoState = {
  isOpen: boolean;
  toggleTemplateProps: object;
  selectedOption: string;
}

export default OptionsMenuDemo;

