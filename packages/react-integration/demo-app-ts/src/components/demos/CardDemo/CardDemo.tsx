import React from 'react';
import {
  Brand,
  Card,
  CardTitle,
  CardHeader,
  CardBody,
  CardFooter,
  CardExpandableContent,
  Checkbox,
  Dropdown,
  DropdownItem,
  DropdownList,
  MenuToggle
} from '@patternfly/react-core';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';
const pfLogo = './images/pfLogo.svg';

interface CardDemoState {
  selected: string;
  isExpanded: boolean;
  isOpen: boolean;
  check1: boolean;
  selectableChecked1: boolean;
  selectableChecked2: boolean;
}

export class CardDemo extends React.Component {
  static displayName = 'CardDemo';

  state: CardDemoState = {
    selected: null,
    isExpanded: false,
    isOpen: false,
    check1: false,
    selectableChecked1: false,
    selectableChecked2: false
  };

  onKeyDown = (event: any) => {
    if (event.target !== event.currentTarget) {
      return;
    }
    if (['Enter', ' '].includes(event.key)) {
      const newSelected = event.currentTarget.id === this.state.selected ? null : event.currentTarget.id;
      this.setState({
        selected: newSelected
      });
    }
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  onExpand = () => {
    this.setState({
      isExpanded: !this.state.isExpanded
    });
  };

  onToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  onSelect = () => {
    this.setState({
      isOpen: false
    });
  };

  onClick = (event: any, _checked: boolean) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value });
  };

  onSelectableChange = (event: React.FormEvent<HTMLInputElement>, checked: boolean) => {
    const name = event.currentTarget.name;

    switch (name) {
      case 'selectable-card-input-1':
        this.setState({ selectableChecked1: checked });
        break;
      case 'selectable-card-input-2':
        this.setState({ selectableChecked2: checked });
        break;
    }
  };

  render() {
    const { selectableChecked1, selectableChecked2 } = this.state;
    const dropdownItems = [
      <DropdownItem key="link">Link</DropdownItem>,
      <DropdownItem key="action">Action</DropdownItem>,
      <DropdownItem key="disabled link" isDisabled>
        Disabled Link
      </DropdownItem>,
      <DropdownItem key="disabled action" isDisabled>
        Disabled Action
      </DropdownItem>,
      <DropdownItem key="separated link">Separated Link</DropdownItem>,
      <DropdownItem key="separated action">Separated Action</DropdownItem>
    ];

    const actions = (
      <>
        <Dropdown
          onSelect={this.onSelect}
          isOpen={this.state.isOpen}
          onOpenChange={(isOpen) => this.setState({ isOpen })}
          popperProps={{ position: 'right' }}
          toggle={(toggleRef) => (
            <MenuToggle variant="plain" ref={toggleRef} isExpanded={this.state.isOpen} onClick={this.onToggle}>
              <EllipsisVIcon />
            </MenuToggle>
          )}
        >
          <DropdownList>{dropdownItems}</DropdownList>
        </Dropdown>
        <Checkbox
          isChecked={this.state.check1}
          onChange={this.onClick}
          aria-label="card checkbox example"
          id="check-1"
          name="check1"
        />
      </>
    );

    return (
      <React.Fragment>
        <Card id="hasNoOffset-card">
          <CardHeader actions={{ actions, hasNoOffset: true }}>
            <Brand src={pfLogo} alt="PatternFly logo" style={{ height: '50px' }} />
          </CardHeader>
          <CardTitle>Header</CardTitle>
          <CardBody>Body</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
        <br></br>
        <Card
          id="selectableCardDeprecated"
          isSelectable
          isSelected={this.state.selected === 'selectableCardDeprecated'}
          tabIndex={0}
          onKeyDown={this.onKeyDown}
        >
          <CardTitle>Header</CardTitle>
          <CardBody>Body</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
        <br></br>
        <Card
          id="selectableCardRaised"
          isSelectableRaised
          isSelected={this.state.selected === 'selectableCardRaised'}
          onKeyDown={this.onKeyDown}
        >
          <CardTitle>Header</CardTitle>
          <CardBody>Body</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
        <br></br>
        <Card id="expand-card" isExpanded={this.state.isExpanded}>
          <CardHeader onExpand={this.onExpand} isToggleRightAligned>
            <CardTitle>Header</CardTitle>
          </CardHeader>
          {this.state.isExpanded && (
            <CardExpandableContent>
              <CardBody>Body</CardBody>
              <CardFooter>Footer</CardFooter>
            </CardExpandableContent>
          )}
        </Card>
        <br></br>
        <Card id="selectable-card-example-1" isSelectable>
          <CardHeader
            selectableActions={{
              selectableActionId: 'selectable-card-input-1',
              selectableActionAriaLabelledby: 'selectable-card-example-1',
              name: 'selectable-card-input-1',
              isChecked: selectableChecked1,
              onChange: this.onSelectableChange
            }}
          >
            <CardTitle>First card</CardTitle>
          </CardHeader>
          <CardBody>This card is selectable.</CardBody>
        </Card>
        <Card id="selectable-card-example-2" isSelectable>
          <CardHeader
            selectableActions={{
              selectableActionId: 'selectable-card-input-2',
              selectableActionAriaLabelledby: 'selectable-card-example-2',
              name: 'selectable-card-input-2',
              isChecked: selectableChecked2,
              onChange: this.onSelectableChange
            }}
          >
            <CardTitle>Second card</CardTitle>
          </CardHeader>
          <CardBody>This card is selectable.</CardBody>
        </Card>
        <br></br>
        <Card id="single-selectable-card-example-1" isSelectable>
          <CardHeader
            selectableActions={{
              selectableActionId: 'single-selectable-card-input-1',
              selectableActionAriaLabelledby: 'single-selectable-card-example-1',
              name: 'single-selectable-card-example',
              variant: 'single'
            }}
          >
            <CardTitle>First card</CardTitle>
          </CardHeader>
          <CardBody>This card is single selectable.</CardBody>
        </Card>
        <Card id="single-selectable-card-example-2" isSelectable>
          <CardHeader
            selectableActions={{
              selectableActionId: 'single-selectable-card-input-2',
              selectableActionAriaLabelledby: 'single-selectable-card-example-2',
              name: 'single-selectable-card-example',
              variant: 'single'
            }}
          >
            <CardTitle>Second card</CardTitle>
          </CardHeader>
          <CardBody>This card is single selectable.</CardBody>
        </Card>
      </React.Fragment>
    );
  }
}
