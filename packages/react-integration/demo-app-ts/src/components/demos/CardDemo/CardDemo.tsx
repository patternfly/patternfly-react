import React from 'react';
import {
  Card,
  CardTitle,
  CardHeader,
  CardBody,
  CardFooter,
  CardExpandableContent,
  Checkbox,
  Brand
} from '@patternfly/react-core';
import {
  Dropdown as DropdownDeprecated,
  DropdownItem as DropdownItemDeprecated,
  KebabToggle
} from '@patternfly/react-core/deprecated';
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

  onClick = (event: any, _checked: boolean) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value });
  };

  render() {
    const dropdownItems = [
      <DropdownItemDeprecated key="link">Link</DropdownItemDeprecated>,
      <DropdownItemDeprecated key="action" component="button">
        Action
      </DropdownItemDeprecated>,
      <DropdownItemDeprecated key="disabled link" isDisabled>
        Disabled Link
      </DropdownItemDeprecated>,
      <DropdownItemDeprecated key="disabled action" isDisabled component="button">
        Disabled Action
      </DropdownItemDeprecated>,
      <DropdownItemDeprecated key="separated link">Separated Link</DropdownItemDeprecated>,
      <DropdownItemDeprecated key="separated action" component="button">
        Separated Action
      </DropdownItemDeprecated>
    ];

    const actions = (
      <>
        <DropdownDeprecated
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
      </>
    );

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
          <CardHeader actions={{ actions, hasNoOffset: true }}>
            <Brand src={pfLogo} alt="PatternFly logo" style={{ height: '50px' }} />
          </CardHeader>
          <CardTitle>Header</CardTitle>
          <CardBody>Body</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
      </React.Fragment>
    );
  }
}
