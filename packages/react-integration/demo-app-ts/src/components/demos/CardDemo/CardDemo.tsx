import React from 'react';
import {
  Card,
  CardTitle,
  CardHeader,
  CardHeaderMain,
  CardActions,
  CardBody,
  CardFooter,
  CardExpandableContent,
  Dropdown,
  DropdownItem,
  KebabToggle,
  Checkbox,
  Brand
} from '@patternfly/react-core';
const pfLogo = './images/pfLogo.svg';
interface CardDemoState {
  selected: string;
  isExpanded: boolean;
  isOpen: boolean;
  check1: boolean;
}

export class CardDemo extends React.Component {
  static displayName = 'CardDemo';

  state: CardDemoState = {
    selected: null,
    isExpanded: false,
    isOpen: false,
    check1: false
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

  onToggle = (_event: any, isOpen: boolean) => {
    this.setState({
      isOpen
    });
  };

  onSelect = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  onClick = (checked: boolean, event: any) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value });
  };

  render() {
    const dropdownItems = [
      <DropdownItem key="link">Link</DropdownItem>,
      <DropdownItem key="action" component="button">
        Action
      </DropdownItem>,
      <DropdownItem key="disabled link" isDisabled>
        Disabled Link
      </DropdownItem>,
      <DropdownItem key="disabled action" isDisabled component="button">
        Disabled Action
      </DropdownItem>,
      <DropdownItem key="separated link">Separated Link</DropdownItem>,
      <DropdownItem key="separated action" component="button">
        Separated Action
      </DropdownItem>
    ];

    return (
      <React.Fragment>
        <Card isSelectableRaised>
          <CardTitle>Header</CardTitle>
          <CardBody>Body</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
        <br></br>
        <Card isCompact>
          <CardTitle>Header</CardTitle>
          <CardBody>Body</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
        <br></br>
        <Card isSelectable isSelected>
          <CardTitle>Header</CardTitle>
          <CardBody>Body</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
        <br></br>
        <Card>
          <CardTitle id="heading-card" component="h4">
            Header
          </CardTitle>
          <CardBody>Body</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
        <br></br>
        <Card id="flatCard" isFlat>
          <CardTitle>Header</CardTitle>
          <CardBody>Body</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
        <Card id="roundedCard" isRounded>
          <CardTitle>Header</CardTitle>
          <CardBody>Body</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
        <Card id="largeCard" isLarge>
          <CardTitle>Header</CardTitle>
          <CardBody>Body</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
        <Card id="fullHeightCard" isFullHeight>
          <CardTitle>Header</CardTitle>
          <CardBody>Body</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
        <Card id="plainCard" isPlain>
          <CardTitle>Header</CardTitle>
          <CardBody>Body</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>

        <Card
          id="selectableCard"
          isSelectable
          isSelected={this.state.selected === 'selectableCard'}
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
        <Card id="hasNoOffset-card">
          <CardHeader>
            <CardHeaderMain>
              <Brand src={pfLogo} alt="PatternFly logo" style={{ height: '50px' }} />
            </CardHeaderMain>
            <CardActions hasNoOffset>
              <Dropdown
                onSelect={this.onSelect}
                toggle={<KebabToggle onToggle={this.onToggle} />}
                isOpen={this.state.isOpen}
                isPlain
                dropdownItems={dropdownItems}
                position={'right'}
              />
              <Checkbox
                isChecked={this.state.check1}
                onChange={this.onClick}
                aria-label="card checkbox example"
                id="check-1"
                name="check1"
              />
            </CardActions>
          </CardHeader>
          <CardTitle>Header</CardTitle>
          <CardBody>Body</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
      </React.Fragment>
    );
  }
}
