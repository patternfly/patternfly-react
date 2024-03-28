import React from 'react';
import {
  Brand,
  Button,
  Card,
  CardTitle,
  CardHeader,
  CardBody,
  CardFooter,
  CardExpandableContent,
  Drawer,
  DrawerContent,
  DrawerContentBody,
  DrawerPanelContent,
  Dropdown,
  DropdownItem,
  DropdownList,
  MenuToggle
} from '@patternfly/react-core';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';
const pfLogo = '../../../assets/images/pfLogo.svg';

interface CardDemoState {
  selected: string;
  isExpanded: boolean;
  isOpen: boolean;
  selectableChecked1: boolean;
  selectableChecked2: boolean;
  singleSelectableChecked: string;
  drawerIsExpanded: boolean;
  selectableClickableChecked: boolean;
  selectableClickableSelected: boolean;
  selectaleClickableDrawerIsExpanded: boolean;
}

class CardDemo extends React.Component {
  static displayName = 'CardDemo';

  state: CardDemoState = {
    selected: null,
    isExpanded: false,
    isOpen: false,
    selectableChecked1: false,
    selectableChecked2: false,
    singleSelectableChecked: '',
    drawerIsExpanded: false,
    selectableClickableChecked: false,
    selectableClickableSelected: false,
    selectaleClickableDrawerIsExpanded: false
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

  onSingleSelectableChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({ singleSelectableChecked: (event.target as HTMLElement).id });
  };

  onSelectableClickableChange = (_event: React.FormEvent<HTMLInputElement>, checked: boolean) => {
    this.setState({ selectableClickableChecked: checked });
  };

  onSelectableClickableClick = () => {
    this.setState({
      selectableClickableSelected: !this.state.selectableClickableSelected,
      selectaleClickableDrawerIsExpanded: !this.state.selectaleClickableDrawerIsExpanded
    });
  };

  render() {
    const {
      selectableChecked1,
      selectableChecked2,
      singleSelectableChecked,
      drawerIsExpanded,
      selectableClickableChecked,
      selectableClickableSelected,
      selectaleClickableDrawerIsExpanded
    } = this.state;
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
      </>
    );

    return (
      <React.Fragment>
        <Card id="cardWithActions">
          <CardHeader actions={{ actions, hasNoOffset: true }}>
            <Brand src={pfLogo} alt="PatternFly" style={{ height: '50px' }} />
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
            <CardTitle>First selectable card</CardTitle>
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
            <CardTitle>Second selectable card</CardTitle>
          </CardHeader>
          <CardBody>This card is selectable.</CardBody>
        </Card>
        <br></br>
        <Card
          id="single-selectable-card-example-1"
          isSelectable
          isSelected={singleSelectableChecked === 'single-selectable-card-input-1'}
        >
          <CardHeader
            selectableActions={{
              selectableActionId: 'single-selectable-card-input-1',
              selectableActionAriaLabelledby: 'single-selectable-card-example-1',
              name: 'single-selectable-card-example',
              variant: 'single',
              onChange: this.onSingleSelectableChange
            }}
          >
            <CardTitle>First single selectable card</CardTitle>
          </CardHeader>
          <CardBody>This card is single selectable.</CardBody>
        </Card>
        <Card
          id="single-selectable-card-example-2"
          isSelectable
          isSelected={singleSelectableChecked === 'single-selectable-card-input-2'}
        >
          <CardHeader
            selectableActions={{
              selectableActionId: 'single-selectable-card-input-2',
              selectableActionAriaLabelledby: 'single-selectable-card-example-2',
              name: 'single-selectable-card-example',
              variant: 'single',
              onChange: this.onSingleSelectableChange
            }}
          >
            <CardTitle>Second single selectable card</CardTitle>
          </CardHeader>
          <CardBody>This card is single selectable.</CardBody>
        </Card>
        <br></br>
        <div style={{ height: '150px' }}>
          <Drawer id="clickable-card-drawer" isExpanded={drawerIsExpanded}>
            <DrawerContent
              panelContent={
                <DrawerPanelContent>
                  <span>Clickable card drawer panel</span>
                </DrawerPanelContent>
              }
            >
              <DrawerContentBody>
                <Card id="clickable-card-example-1" isClickable>
                  <CardHeader
                    selectableActions={{
                      onClickAction: () => {
                        this.setState({ drawerIsExpanded: !drawerIsExpanded });
                      },
                      selectableActionId: 'clickable-card-input-1',
                      selectableActionAriaLabelledby: 'clickable-card-example-1',
                      name: 'clickable-card-example-1'
                    }}
                  >
                    <CardTitle>Clickable card with action</CardTitle>
                  </CardHeader>
                  <CardBody>This card performs an action on click.</CardBody>
                </Card>
              </DrawerContentBody>
            </DrawerContent>
          </Drawer>
        </div>
        <br></br>
        <Card id="clickable-card-example-2" isClickable>
          <CardHeader
            selectableActions={{
              to: '/button-demo-nav-link',
              selectableActionId: 'clickable-card-input-2',
              selectableActionAriaLabelledby: 'clickable-card-example-2',
              name: 'clickable-card-example-2'
            }}
          >
            <CardTitle>Clickable card with link</CardTitle>
          </CardHeader>
          <CardBody>This card can navigate to a link on click.</CardBody>
        </Card>
        <br></br>
        <div style={{ height: '150px' }}>
          <Drawer id="clickable-selectable-card-drawer" isExpanded={selectaleClickableDrawerIsExpanded}>
            <DrawerContent
              panelContent={
                <DrawerPanelContent>
                  <span>Clickable and selectable card drawer panel</span>
                </DrawerPanelContent>
              }
            >
              <DrawerContentBody>
                <Card
                  id="clickable-selectable-card-example-1"
                  isClickable
                  isSelectable
                  isSelected={selectableClickableSelected}
                >
                  <CardHeader
                    selectableActions={{
                      selectableActionId: 'clickable-selectable-card-input-1',
                      selectableActionAriaLabelledby: 'clickable-selectable-card-example-1',
                      name: 'clickable-selectable-card-input-1',
                      isChecked: selectableClickableChecked,
                      onChange: this.onSelectableClickableChange
                    }}
                  >
                    <CardTitle>
                      <Button variant="link" isInline onClick={this.onSelectableClickableClick}>
                        Clickable and selectable card
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardBody>This card performs an action upon clicking the card title and is selectable.</CardBody>
                </Card>
              </DrawerContentBody>
            </DrawerContent>
          </Drawer>
        </div>
      </React.Fragment>
    );
  }
}

CardDemo.displayName = 'CardDemo';

export default CardDemo;
