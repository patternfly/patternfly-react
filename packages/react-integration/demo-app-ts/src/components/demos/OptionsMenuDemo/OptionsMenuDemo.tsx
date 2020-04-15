import React from 'react';
import {
  OptionsMenu,
  OptionsMenuProps,
  OptionsMenuItem,
  OptionsMenuItemGroup,
  OptionsMenuSeparator,
  OptionsMenuToggle,
  OptionsMenuDirection,
  OptionsMenuPosition,
  OptionsMenuToggleWithText
} from '@patternfly/react-core';
import CaretDownIcon from '@patternfly/react-icons/dist/js/icons/caret-down-icon';

interface OptionsMenuDemoState {
  singleOptionIsOpen: boolean;
  modifiedIsOpen: boolean;
  disabledOptionsIsOpen: boolean;
  selectedOption: string;
  toggleTemplateText: string;
}

export class OptionsMenuDemo extends React.Component<React.HTMLProps<HTMLDivElement>, OptionsMenuDemoState> {
  state = {
    singleOptionIsOpen: false,
    modifiedIsOpen: false,
    disabledOptionsIsOpen: false,
    toggleTemplateText: 'Options menu',
    selectedOption: 'singleOption1'
  };

  singleOptionOnToggle = () => {
    this.setState({ singleOptionIsOpen: !this.state.singleOptionIsOpen });
  };

  modifiedOnToggle = () => {
    this.setState({ modifiedIsOpen: !this.state.modifiedIsOpen });
  };

  disabledOnToggle = () => {
    this.setState({ disabledOptionsIsOpen: !this.state.disabledOptionsIsOpen });
  };

  onSelect = (event?: React.MouseEvent<HTMLAnchorElement> | React.KeyboardEvent) => {
    if (event) {
      const id = event.currentTarget.id;
      this.setState(() => ({ selectedOption: id }));
    }
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const myOptionsMenuProps: OptionsMenuProps = {
      id: 'options-menu-single-option-example',
      menuItems: [
        <OptionsMenuItem
          onSelect={this.onSelect}
          isSelected={this.state.selectedOption === 'singleOption1'}
          id="singleOption1"
          key="option 1"
        >
          Option 1
        </OptionsMenuItem>,
        <OptionsMenuItem
          onSelect={this.onSelect}
          isSelected={this.state.selectedOption === 'singleOption2'}
          id="singleOption2"
          key="option 2"
        >
          Option 2
        </OptionsMenuItem>,
        <OptionsMenuItem
          onSelect={this.onSelect}
          isSelected={this.state.selectedOption === 'singleOption3'}
          id="singleOption3"
          key="option 3"
        >
          Option 3
        </OptionsMenuItem>
      ],
      toggle: (
        <OptionsMenuToggle
          onToggle={this.singleOptionOnToggle}
          toggleTemplate={<React.Fragment>{this.state.toggleTemplateText}</React.Fragment>}
        />
      ),
      isOpen: this.state.singleOptionIsOpen
    };

    const myModifiedMenuProps: OptionsMenuProps = {
      id: 'options-menu-modified-example',
      menuItems: [
        <OptionsMenuItemGroup groupTitle="Second group" key="1">
          <OptionsMenuItem onSelect={() => {}}>First Option</OptionsMenuItem>
        </OptionsMenuItemGroup>,
        <OptionsMenuSeparator key="2" />,
        <OptionsMenuItemGroup groupTitle="First group" key="3">
          <OptionsMenuItem onSelect={() => {}}>Second Option</OptionsMenuItem>
        </OptionsMenuItemGroup>
      ],
      toggle: (
        <OptionsMenuToggleWithText
          toggleText={<React.Fragment>Custom text</React.Fragment>}
          toggleButtonContents={<CaretDownIcon />}
          onToggle={this.modifiedOnToggle}
        />
      ),
      isOpen: this.state.modifiedIsOpen,
      isPlain: true,
      direction: OptionsMenuDirection.up,
      position: OptionsMenuPosition.right
    };

    const myDisabledOptionsMenuProps: OptionsMenuProps = {
      id: 'options-menu-modified-disabled',
      menuItems: [],
      toggle: (
        <OptionsMenuToggle
          isDisabled
          onToggle={this.disabledOnToggle}
          toggleTemplate={<React.Fragment>{this.state.toggleTemplateText}</React.Fragment>}
        />
      ),
      isOpen: this.state.disabledOptionsIsOpen
    };

    return (
      <React.Fragment>
        <OptionsMenu
          id={myOptionsMenuProps.id}
          menuItems={myOptionsMenuProps.menuItems}
          isOpen={myOptionsMenuProps.isOpen}
          toggle={myOptionsMenuProps.toggle}
        />

        <OptionsMenu
          id={myModifiedMenuProps.id}
          menuItems={myModifiedMenuProps.menuItems}
          isOpen={myModifiedMenuProps.isOpen}
          toggle={myModifiedMenuProps.toggle}
          isPlain={myModifiedMenuProps.isPlain}
          direction={myModifiedMenuProps.direction}
          position={myModifiedMenuProps.position}
        />

        <OptionsMenu
          id={myDisabledOptionsMenuProps.id}
          menuItems={myDisabledOptionsMenuProps.menuItems}
          isOpen={myDisabledOptionsMenuProps.isOpen}
          toggle={myDisabledOptionsMenuProps.toggle}
        />
      </React.Fragment>
    );
  }
}

export default OptionsMenuDemo;
